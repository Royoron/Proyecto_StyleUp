import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

export type UserRole = "CLIENTE" | "BARBERO" | "SUPERADMIN";

export type AccessTokenClaims = {
  sub: string;
  role: UserRole;
};

export function signAccessToken(claims: AccessTokenClaims) {
  return jwt.sign(claims as object, env.JWT_ACCESS_SECRET as jwt.Secret, {
    expiresIn: env.JWT_ACCESS_EXPIRES_IN,
  } as jwt.SignOptions);
}

export function signRefreshToken(claims: AccessTokenClaims) {
  return jwt.sign(claims as object, env.JWT_REFRESH_SECRET as jwt.Secret, {
    expiresIn: env.JWT_REFRESH_EXPIRES_IN,
  } as jwt.SignOptions);
}

export function verifyAccessToken(token: string) {
  return jwt.verify(token, env.JWT_ACCESS_SECRET) as AccessTokenClaims & jwt.JwtPayload;
}

export function verifyRefreshToken(token: string) {
  return jwt.verify(token, env.JWT_REFRESH_SECRET) as AccessTokenClaims & jwt.JwtPayload;
}

