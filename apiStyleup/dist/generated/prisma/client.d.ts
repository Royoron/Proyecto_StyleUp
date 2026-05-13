import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class.js";
import * as Prisma from "./internal/prismaNamespace.js";
export * as $Enums from './enums.js';
export * from "./enums.js";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Clientes
 * const clientes = await prisma.cliente.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model Cliente
 *
 */
export type Cliente = Prisma.ClienteModel;
/**
 * Model Barbero
 *
 */
export type Barbero = Prisma.BarberoModel;
/**
 * Model Especialidad
 *
 */
export type Especialidad = Prisma.EspecialidadModel;
/**
 * Model Cita
 *
 */
export type Cita = Prisma.CitaModel;
/**
 * Model HistorialCita
 *
 */
export type HistorialCita = Prisma.HistorialCitaModel;
/**
 * Model EstadoBarbero
 *
 */
export type EstadoBarbero = Prisma.EstadoBarberoModel;
/**
 * Model HorarioBarbero
 *
 */
export type HorarioBarbero = Prisma.HorarioBarberoModel;
/**
 * Model SuperAdmin
 *
 */
export type SuperAdmin = Prisma.SuperAdminModel;
/**
 * Model RefreshToken
 *
 */
export type RefreshToken = Prisma.RefreshTokenModel;
//# sourceMappingURL=client.d.ts.map