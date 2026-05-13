import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Cliente: "Cliente";
    readonly Barbero: "Barbero";
    readonly Especialidad: "Especialidad";
    readonly Cita: "Cita";
    readonly HistorialCita: "HistorialCita";
    readonly EstadoBarbero: "EstadoBarbero";
    readonly HorarioBarbero: "HorarioBarbero";
    readonly SuperAdmin: "SuperAdmin";
    readonly RefreshToken: "RefreshToken";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const ClienteScalarFieldEnum: {
    readonly cedula_cliente: "cedula_cliente";
    readonly nombre: "nombre";
    readonly apellido: "apellido";
    readonly telefono: "telefono";
    readonly correo: "correo";
    readonly contrasena: "contrasena";
    readonly fecha_registro: "fecha_registro";
};
export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum];
export declare const BarberoScalarFieldEnum: {
    readonly cedula_barbero: "cedula_barbero";
    readonly nombre: "nombre";
    readonly apellido: "apellido";
    readonly id_especialidad: "id_especialidad";
    readonly correo: "correo";
    readonly contrasena: "contrasena";
    readonly telefono: "telefono";
    readonly fecha_registro: "fecha_registro";
};
export type BarberoScalarFieldEnum = (typeof BarberoScalarFieldEnum)[keyof typeof BarberoScalarFieldEnum];
export declare const EspecialidadScalarFieldEnum: {
    readonly id_especialidad: "id_especialidad";
    readonly especialidad: "especialidad";
    readonly tiempo_estimado: "tiempo_estimado";
};
export type EspecialidadScalarFieldEnum = (typeof EspecialidadScalarFieldEnum)[keyof typeof EspecialidadScalarFieldEnum];
export declare const CitaScalarFieldEnum: {
    readonly id_cita: "id_cita";
    readonly cedula_cliente: "cedula_cliente";
    readonly cedula_barbero: "cedula_barbero";
    readonly id_especialidad: "id_especialidad";
    readonly fecha: "fecha";
    readonly hora: "hora";
    readonly estado: "estado";
};
export type CitaScalarFieldEnum = (typeof CitaScalarFieldEnum)[keyof typeof CitaScalarFieldEnum];
export declare const HistorialCitaScalarFieldEnum: {
    readonly id_historial: "id_historial";
    readonly cedula_cliente: "cedula_cliente";
    readonly id_cita: "id_cita";
    readonly fecha: "fecha";
};
export type HistorialCitaScalarFieldEnum = (typeof HistorialCitaScalarFieldEnum)[keyof typeof HistorialCitaScalarFieldEnum];
export declare const EstadoBarberoScalarFieldEnum: {
    readonly id_estado: "id_estado";
    readonly estado: "estado";
};
export type EstadoBarberoScalarFieldEnum = (typeof EstadoBarberoScalarFieldEnum)[keyof typeof EstadoBarberoScalarFieldEnum];
export declare const HorarioBarberoScalarFieldEnum: {
    readonly id_horario: "id_horario";
    readonly cedula_barbero: "cedula_barbero";
    readonly id_estado: "id_estado";
    readonly hora_inicio: "hora_inicio";
    readonly hora_fin: "hora_fin";
    readonly fecha: "fecha";
};
export type HorarioBarberoScalarFieldEnum = (typeof HorarioBarberoScalarFieldEnum)[keyof typeof HorarioBarberoScalarFieldEnum];
export declare const SuperAdminScalarFieldEnum: {
    readonly id: "id";
    readonly correo: "correo";
    readonly contrasena: "contrasena";
    readonly activo: "activo";
    readonly creado_en: "creado_en";
};
export type SuperAdminScalarFieldEnum = (typeof SuperAdminScalarFieldEnum)[keyof typeof SuperAdminScalarFieldEnum];
export declare const RefreshTokenScalarFieldEnum: {
    readonly id: "id";
    readonly token_hash: "token_hash";
    readonly subjectType: "subjectType";
    readonly subjectId: "subjectId";
    readonly expiresAt: "expiresAt";
    readonly revokedAt: "revokedAt";
    readonly createdAt: "createdAt";
};
export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map