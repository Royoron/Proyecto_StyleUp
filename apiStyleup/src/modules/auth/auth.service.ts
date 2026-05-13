import crypto from "crypto";
import { StatusCodes } from "http-status-codes";
import { prisma } from "../../config/prisma.js";
import { ApiError } from "../../utils/apiError.js";
import { signAccessToken, signRefreshToken, verifyRefreshToken, type UserRole } from "../../utils/jwt.js";
import { verifyPassword } from "../../utils/password.js";

function sha256(input: string) {
  return crypto.createHash("sha256").update(input).digest("hex");
}

function refreshTokenExpToDate(exp: number | undefined) {
  if (!exp) return new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
  return new Date(exp * 1000);
}

async function issueTokens(role: UserRole, sub: string) {
  const accessToken = signAccessToken({ role, sub });
  const refreshToken = signRefreshToken({ role, sub });
  const decoded = verifyRefreshToken(refreshToken);

  await prisma.refreshToken.create({
    data: {
      token_hash: sha256(refreshToken),
      subjectType: role,
      subjectId: sub,
      expiresAt: refreshTokenExpToDate(decoded.exp),
    },
  });

  return { accessToken, refreshToken };
}

export async function loginCliente(cedula_cliente: string, contrasena: string) {
  const cliente = await prisma.cliente.findUnique({ where: { cedula_cliente } });
  if (!cliente) throw new ApiError(StatusCodes.UNAUTHORIZED, "Credenciales inválidas");

  const ok = await verifyPassword(contrasena, cliente.contrasena);
  if (!ok) throw new ApiError(StatusCodes.UNAUTHORIZED, "Credenciales inválidas");

  return issueTokens("CLIENTE", cliente.cedula_cliente);
}

export async function loginBarbero(cedula_barbero: string, contrasena: string) {
  const barbero = await prisma.barbero.findUnique({ where: { cedula_barbero } });
  if (!barbero) throw new ApiError(StatusCodes.UNAUTHORIZED, "Credenciales inválidas");

  const ok = await verifyPassword(contrasena, barbero.contrasena);
  if (!ok) throw new ApiError(StatusCodes.UNAUTHORIZED, "Credenciales inválidas");

  return issueTokens("BARBERO", barbero.cedula_barbero);
}

export async function loginSuperAdmin(correo: string, contrasena: string) {
  const admin = await prisma.superAdmin.findUnique({ where: { correo } });
  if (!admin || !admin.activo) throw new ApiError(StatusCodes.UNAUTHORIZED, "Credenciales inválidas");

  const ok = await verifyPassword(contrasena, admin.contrasena);
  if (!ok) throw new ApiError(StatusCodes.UNAUTHORIZED, "Credenciales inválidas");

  return issueTokens("SUPERADMIN", admin.id);
}

export async function refreshTokens(refreshToken: string) {
  const decoded = verifyRefreshToken(refreshToken);
  const tokenHash = sha256(refreshToken);

  const stored = await prisma.refreshToken.findUnique({ where: { token_hash: tokenHash } });
  if (!stored || stored.revokedAt) throw new ApiError(StatusCodes.UNAUTHORIZED, "Refresh token inválido");
  if (stored.expiresAt.getTime() < Date.now()) throw new ApiError(StatusCodes.UNAUTHORIZED, "Refresh token expirado");

  if (stored.subjectType !== decoded.role || stored.subjectId !== decoded.sub) {
    throw new ApiError(StatusCodes.UNAUTHORIZED, "Refresh token inválido");
  }

  await prisma.refreshToken.update({
    where: { token_hash: tokenHash },
    data: { revokedAt: new Date() },
  });

  return issueTokens(decoded.role, decoded.sub);
}

export async function logout(refreshToken: string) {
  const tokenHash = sha256(refreshToken);
  const stored = await prisma.refreshToken.findUnique({ where: { token_hash: tokenHash } });
  if (!stored) return { ok: true };

  await prisma.refreshToken.update({
    where: { token_hash: tokenHash },
    data: { revokedAt: new Date() },
  });
  return { ok: true };
}

