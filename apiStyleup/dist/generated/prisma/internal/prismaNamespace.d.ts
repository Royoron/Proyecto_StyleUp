import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
/**
 * Prisma Client JS version: 7.8.0
 * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
 */
export declare const prismaVersion: PrismaVersion;
/**
 * Utility Types
 */
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
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
export declare const DbNull: runtime.DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: runtime.JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
/**
 * SelectSubset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 * Additionally, it validates, if both select and include are present. If the case, it errors.
 */
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
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
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "cliente" | "barbero" | "especialidad" | "cita" | "historialCita" | "estadoBarbero" | "horarioBarbero" | "superAdmin" | "refreshToken";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        Cliente: {
            payload: Prisma.$ClientePayload<ExtArgs>;
            fields: Prisma.ClienteFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ClienteFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload>;
                };
                findFirst: {
                    args: Prisma.ClienteFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload>;
                };
                findMany: {
                    args: Prisma.ClienteFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload>[];
                };
                create: {
                    args: Prisma.ClienteCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload>;
                };
                createMany: {
                    args: Prisma.ClienteCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload>[];
                };
                delete: {
                    args: Prisma.ClienteDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload>;
                };
                update: {
                    args: Prisma.ClienteUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload>;
                };
                deleteMany: {
                    args: Prisma.ClienteDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ClienteUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ClienteUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload>[];
                };
                upsert: {
                    args: Prisma.ClienteUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload>;
                };
                aggregate: {
                    args: Prisma.ClienteAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCliente>;
                };
                groupBy: {
                    args: Prisma.ClienteGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClienteGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ClienteCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClienteCountAggregateOutputType> | number;
                };
            };
        };
        Barbero: {
            payload: Prisma.$BarberoPayload<ExtArgs>;
            fields: Prisma.BarberoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BarberoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BarberoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BarberoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BarberoPayload>;
                };
                findFirst: {
                    args: Prisma.BarberoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BarberoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BarberoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BarberoPayload>;
                };
                findMany: {
                    args: Prisma.BarberoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BarberoPayload>[];
                };
                create: {
                    args: Prisma.BarberoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BarberoPayload>;
                };
                createMany: {
                    args: Prisma.BarberoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BarberoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BarberoPayload>[];
                };
                delete: {
                    args: Prisma.BarberoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BarberoPayload>;
                };
                update: {
                    args: Prisma.BarberoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BarberoPayload>;
                };
                deleteMany: {
                    args: Prisma.BarberoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BarberoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BarberoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BarberoPayload>[];
                };
                upsert: {
                    args: Prisma.BarberoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BarberoPayload>;
                };
                aggregate: {
                    args: Prisma.BarberoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBarbero>;
                };
                groupBy: {
                    args: Prisma.BarberoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BarberoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BarberoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BarberoCountAggregateOutputType> | number;
                };
            };
        };
        Especialidad: {
            payload: Prisma.$EspecialidadPayload<ExtArgs>;
            fields: Prisma.EspecialidadFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EspecialidadFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EspecialidadPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EspecialidadFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EspecialidadPayload>;
                };
                findFirst: {
                    args: Prisma.EspecialidadFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EspecialidadPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EspecialidadFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EspecialidadPayload>;
                };
                findMany: {
                    args: Prisma.EspecialidadFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EspecialidadPayload>[];
                };
                create: {
                    args: Prisma.EspecialidadCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EspecialidadPayload>;
                };
                createMany: {
                    args: Prisma.EspecialidadCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EspecialidadCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EspecialidadPayload>[];
                };
                delete: {
                    args: Prisma.EspecialidadDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EspecialidadPayload>;
                };
                update: {
                    args: Prisma.EspecialidadUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EspecialidadPayload>;
                };
                deleteMany: {
                    args: Prisma.EspecialidadDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EspecialidadUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EspecialidadUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EspecialidadPayload>[];
                };
                upsert: {
                    args: Prisma.EspecialidadUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EspecialidadPayload>;
                };
                aggregate: {
                    args: Prisma.EspecialidadAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEspecialidad>;
                };
                groupBy: {
                    args: Prisma.EspecialidadGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EspecialidadGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EspecialidadCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EspecialidadCountAggregateOutputType> | number;
                };
            };
        };
        Cita: {
            payload: Prisma.$CitaPayload<ExtArgs>;
            fields: Prisma.CitaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CitaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CitaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CitaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CitaPayload>;
                };
                findFirst: {
                    args: Prisma.CitaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CitaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CitaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CitaPayload>;
                };
                findMany: {
                    args: Prisma.CitaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CitaPayload>[];
                };
                create: {
                    args: Prisma.CitaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CitaPayload>;
                };
                createMany: {
                    args: Prisma.CitaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CitaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CitaPayload>[];
                };
                delete: {
                    args: Prisma.CitaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CitaPayload>;
                };
                update: {
                    args: Prisma.CitaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CitaPayload>;
                };
                deleteMany: {
                    args: Prisma.CitaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CitaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CitaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CitaPayload>[];
                };
                upsert: {
                    args: Prisma.CitaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CitaPayload>;
                };
                aggregate: {
                    args: Prisma.CitaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCita>;
                };
                groupBy: {
                    args: Prisma.CitaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CitaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CitaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CitaCountAggregateOutputType> | number;
                };
            };
        };
        HistorialCita: {
            payload: Prisma.$HistorialCitaPayload<ExtArgs>;
            fields: Prisma.HistorialCitaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.HistorialCitaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HistorialCitaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.HistorialCitaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HistorialCitaPayload>;
                };
                findFirst: {
                    args: Prisma.HistorialCitaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HistorialCitaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.HistorialCitaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HistorialCitaPayload>;
                };
                findMany: {
                    args: Prisma.HistorialCitaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HistorialCitaPayload>[];
                };
                create: {
                    args: Prisma.HistorialCitaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HistorialCitaPayload>;
                };
                createMany: {
                    args: Prisma.HistorialCitaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.HistorialCitaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HistorialCitaPayload>[];
                };
                delete: {
                    args: Prisma.HistorialCitaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HistorialCitaPayload>;
                };
                update: {
                    args: Prisma.HistorialCitaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HistorialCitaPayload>;
                };
                deleteMany: {
                    args: Prisma.HistorialCitaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.HistorialCitaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.HistorialCitaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HistorialCitaPayload>[];
                };
                upsert: {
                    args: Prisma.HistorialCitaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HistorialCitaPayload>;
                };
                aggregate: {
                    args: Prisma.HistorialCitaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateHistorialCita>;
                };
                groupBy: {
                    args: Prisma.HistorialCitaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.HistorialCitaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.HistorialCitaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.HistorialCitaCountAggregateOutputType> | number;
                };
            };
        };
        EstadoBarbero: {
            payload: Prisma.$EstadoBarberoPayload<ExtArgs>;
            fields: Prisma.EstadoBarberoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EstadoBarberoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstadoBarberoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EstadoBarberoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstadoBarberoPayload>;
                };
                findFirst: {
                    args: Prisma.EstadoBarberoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstadoBarberoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EstadoBarberoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstadoBarberoPayload>;
                };
                findMany: {
                    args: Prisma.EstadoBarberoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstadoBarberoPayload>[];
                };
                create: {
                    args: Prisma.EstadoBarberoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstadoBarberoPayload>;
                };
                createMany: {
                    args: Prisma.EstadoBarberoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EstadoBarberoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstadoBarberoPayload>[];
                };
                delete: {
                    args: Prisma.EstadoBarberoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstadoBarberoPayload>;
                };
                update: {
                    args: Prisma.EstadoBarberoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstadoBarberoPayload>;
                };
                deleteMany: {
                    args: Prisma.EstadoBarberoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EstadoBarberoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EstadoBarberoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstadoBarberoPayload>[];
                };
                upsert: {
                    args: Prisma.EstadoBarberoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstadoBarberoPayload>;
                };
                aggregate: {
                    args: Prisma.EstadoBarberoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEstadoBarbero>;
                };
                groupBy: {
                    args: Prisma.EstadoBarberoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EstadoBarberoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EstadoBarberoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EstadoBarberoCountAggregateOutputType> | number;
                };
            };
        };
        HorarioBarbero: {
            payload: Prisma.$HorarioBarberoPayload<ExtArgs>;
            fields: Prisma.HorarioBarberoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.HorarioBarberoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HorarioBarberoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.HorarioBarberoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HorarioBarberoPayload>;
                };
                findFirst: {
                    args: Prisma.HorarioBarberoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HorarioBarberoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.HorarioBarberoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HorarioBarberoPayload>;
                };
                findMany: {
                    args: Prisma.HorarioBarberoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HorarioBarberoPayload>[];
                };
                create: {
                    args: Prisma.HorarioBarberoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HorarioBarberoPayload>;
                };
                createMany: {
                    args: Prisma.HorarioBarberoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.HorarioBarberoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HorarioBarberoPayload>[];
                };
                delete: {
                    args: Prisma.HorarioBarberoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HorarioBarberoPayload>;
                };
                update: {
                    args: Prisma.HorarioBarberoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HorarioBarberoPayload>;
                };
                deleteMany: {
                    args: Prisma.HorarioBarberoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.HorarioBarberoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.HorarioBarberoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HorarioBarberoPayload>[];
                };
                upsert: {
                    args: Prisma.HorarioBarberoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HorarioBarberoPayload>;
                };
                aggregate: {
                    args: Prisma.HorarioBarberoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateHorarioBarbero>;
                };
                groupBy: {
                    args: Prisma.HorarioBarberoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.HorarioBarberoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.HorarioBarberoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.HorarioBarberoCountAggregateOutputType> | number;
                };
            };
        };
        SuperAdmin: {
            payload: Prisma.$SuperAdminPayload<ExtArgs>;
            fields: Prisma.SuperAdminFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SuperAdminFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuperAdminPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SuperAdminFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuperAdminPayload>;
                };
                findFirst: {
                    args: Prisma.SuperAdminFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuperAdminPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SuperAdminFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuperAdminPayload>;
                };
                findMany: {
                    args: Prisma.SuperAdminFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuperAdminPayload>[];
                };
                create: {
                    args: Prisma.SuperAdminCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuperAdminPayload>;
                };
                createMany: {
                    args: Prisma.SuperAdminCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SuperAdminCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuperAdminPayload>[];
                };
                delete: {
                    args: Prisma.SuperAdminDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuperAdminPayload>;
                };
                update: {
                    args: Prisma.SuperAdminUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuperAdminPayload>;
                };
                deleteMany: {
                    args: Prisma.SuperAdminDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SuperAdminUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SuperAdminUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuperAdminPayload>[];
                };
                upsert: {
                    args: Prisma.SuperAdminUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuperAdminPayload>;
                };
                aggregate: {
                    args: Prisma.SuperAdminAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSuperAdmin>;
                };
                groupBy: {
                    args: Prisma.SuperAdminGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SuperAdminGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SuperAdminCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SuperAdminCountAggregateOutputType> | number;
                };
            };
        };
        RefreshToken: {
            payload: Prisma.$RefreshTokenPayload<ExtArgs>;
            fields: Prisma.RefreshTokenFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                findFirst: {
                    args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                findMany: {
                    args: Prisma.RefreshTokenFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[];
                };
                create: {
                    args: Prisma.RefreshTokenCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                createMany: {
                    args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[];
                };
                delete: {
                    args: Prisma.RefreshTokenDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                update: {
                    args: Prisma.RefreshTokenUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                deleteMany: {
                    args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RefreshTokenUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[];
                };
                upsert: {
                    args: Prisma.RefreshTokenUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                aggregate: {
                    args: Prisma.RefreshTokenAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRefreshToken>;
                };
                groupBy: {
                    args: Prisma.RefreshTokenGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RefreshTokenGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RefreshTokenCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RefreshTokenCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
/**
 * Enums
 */
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
/**
 * Field references
 */
/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'Boolean'
 */
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
/**
 * Reference to a field of type 'RefreshTokenSubjectType'
 */
export type EnumRefreshTokenSubjectTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RefreshTokenSubjectType'>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-pg`.
     */
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl: string;
    adapter?: never;
}) & {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
    /**
     * Optional maximum size for the query plan cache. If not provided, a default size will be used.
     * A value of `0` can be used to disable the cache entirely. A higher cache size can improve
     * performance for applications that execute a large number of unique queries, while a smaller
     * cache size can reduce memory usage.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   queryPlanCacheMaxSize: 100,
     * })
     * ```
     */
    queryPlanCacheMaxSize?: number;
};
export type GlobalOmitConfig = {
    cliente?: Prisma.ClienteOmit;
    barbero?: Prisma.BarberoOmit;
    especialidad?: Prisma.EspecialidadOmit;
    cita?: Prisma.CitaOmit;
    historialCita?: Prisma.HistorialCitaOmit;
    estadoBarbero?: Prisma.EstadoBarberoOmit;
    horarioBarbero?: Prisma.HorarioBarberoOmit;
    superAdmin?: Prisma.SuperAdminOmit;
    refreshToken?: Prisma.RefreshTokenOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
//# sourceMappingURL=prismaNamespace.d.ts.map