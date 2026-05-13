import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Barbero
 *
 */
export type BarberoModel = runtime.Types.Result.DefaultSelection<Prisma.$BarberoPayload>;
export type AggregateBarbero = {
    _count: BarberoCountAggregateOutputType | null;
    _avg: BarberoAvgAggregateOutputType | null;
    _sum: BarberoSumAggregateOutputType | null;
    _min: BarberoMinAggregateOutputType | null;
    _max: BarberoMaxAggregateOutputType | null;
};
export type BarberoAvgAggregateOutputType = {
    id_especialidad: number | null;
};
export type BarberoSumAggregateOutputType = {
    id_especialidad: number | null;
};
export type BarberoMinAggregateOutputType = {
    cedula_barbero: string | null;
    nombre: string | null;
    apellido: string | null;
    id_especialidad: number | null;
    correo: string | null;
    contrasena: string | null;
    telefono: string | null;
    fecha_registro: Date | null;
};
export type BarberoMaxAggregateOutputType = {
    cedula_barbero: string | null;
    nombre: string | null;
    apellido: string | null;
    id_especialidad: number | null;
    correo: string | null;
    contrasena: string | null;
    telefono: string | null;
    fecha_registro: Date | null;
};
export type BarberoCountAggregateOutputType = {
    cedula_barbero: number;
    nombre: number;
    apellido: number;
    id_especialidad: number;
    correo: number;
    contrasena: number;
    telefono: number;
    fecha_registro: number;
    _all: number;
};
export type BarberoAvgAggregateInputType = {
    id_especialidad?: true;
};
export type BarberoSumAggregateInputType = {
    id_especialidad?: true;
};
export type BarberoMinAggregateInputType = {
    cedula_barbero?: true;
    nombre?: true;
    apellido?: true;
    id_especialidad?: true;
    correo?: true;
    contrasena?: true;
    telefono?: true;
    fecha_registro?: true;
};
export type BarberoMaxAggregateInputType = {
    cedula_barbero?: true;
    nombre?: true;
    apellido?: true;
    id_especialidad?: true;
    correo?: true;
    contrasena?: true;
    telefono?: true;
    fecha_registro?: true;
};
export type BarberoCountAggregateInputType = {
    cedula_barbero?: true;
    nombre?: true;
    apellido?: true;
    id_especialidad?: true;
    correo?: true;
    contrasena?: true;
    telefono?: true;
    fecha_registro?: true;
    _all?: true;
};
export type BarberoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Barbero to aggregate.
     */
    where?: Prisma.BarberoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Barberos to fetch.
     */
    orderBy?: Prisma.BarberoOrderByWithRelationInput | Prisma.BarberoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.BarberoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Barberos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Barberos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Barberos
    **/
    _count?: true | BarberoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: BarberoAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: BarberoSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: BarberoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: BarberoMaxAggregateInputType;
};
export type GetBarberoAggregateType<T extends BarberoAggregateArgs> = {
    [P in keyof T & keyof AggregateBarbero]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBarbero[P]> : Prisma.GetScalarType<T[P], AggregateBarbero[P]>;
};
export type BarberoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BarberoWhereInput;
    orderBy?: Prisma.BarberoOrderByWithAggregationInput | Prisma.BarberoOrderByWithAggregationInput[];
    by: Prisma.BarberoScalarFieldEnum[] | Prisma.BarberoScalarFieldEnum;
    having?: Prisma.BarberoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BarberoCountAggregateInputType | true;
    _avg?: BarberoAvgAggregateInputType;
    _sum?: BarberoSumAggregateInputType;
    _min?: BarberoMinAggregateInputType;
    _max?: BarberoMaxAggregateInputType;
};
export type BarberoGroupByOutputType = {
    cedula_barbero: string;
    nombre: string;
    apellido: string;
    id_especialidad: number;
    correo: string;
    contrasena: string;
    telefono: string;
    fecha_registro: Date;
    _count: BarberoCountAggregateOutputType | null;
    _avg: BarberoAvgAggregateOutputType | null;
    _sum: BarberoSumAggregateOutputType | null;
    _min: BarberoMinAggregateOutputType | null;
    _max: BarberoMaxAggregateOutputType | null;
};
export type GetBarberoGroupByPayload<T extends BarberoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BarberoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BarberoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BarberoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BarberoGroupByOutputType[P]>;
}>>;
export type BarberoWhereInput = {
    AND?: Prisma.BarberoWhereInput | Prisma.BarberoWhereInput[];
    OR?: Prisma.BarberoWhereInput[];
    NOT?: Prisma.BarberoWhereInput | Prisma.BarberoWhereInput[];
    cedula_barbero?: Prisma.StringFilter<"Barbero"> | string;
    nombre?: Prisma.StringFilter<"Barbero"> | string;
    apellido?: Prisma.StringFilter<"Barbero"> | string;
    id_especialidad?: Prisma.IntFilter<"Barbero"> | number;
    correo?: Prisma.StringFilter<"Barbero"> | string;
    contrasena?: Prisma.StringFilter<"Barbero"> | string;
    telefono?: Prisma.StringFilter<"Barbero"> | string;
    fecha_registro?: Prisma.DateTimeFilter<"Barbero"> | Date | string;
    especialidad?: Prisma.XOR<Prisma.EspecialidadScalarRelationFilter, Prisma.EspecialidadWhereInput>;
    citas?: Prisma.CitaListRelationFilter;
    horarios?: Prisma.HorarioBarberoListRelationFilter;
};
export type BarberoOrderByWithRelationInput = {
    cedula_barbero?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    apellido?: Prisma.SortOrder;
    id_especialidad?: Prisma.SortOrder;
    correo?: Prisma.SortOrder;
    contrasena?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    fecha_registro?: Prisma.SortOrder;
    especialidad?: Prisma.EspecialidadOrderByWithRelationInput;
    citas?: Prisma.CitaOrderByRelationAggregateInput;
    horarios?: Prisma.HorarioBarberoOrderByRelationAggregateInput;
};
export type BarberoWhereUniqueInput = Prisma.AtLeast<{
    cedula_barbero?: string;
    correo?: string;
    AND?: Prisma.BarberoWhereInput | Prisma.BarberoWhereInput[];
    OR?: Prisma.BarberoWhereInput[];
    NOT?: Prisma.BarberoWhereInput | Prisma.BarberoWhereInput[];
    nombre?: Prisma.StringFilter<"Barbero"> | string;
    apellido?: Prisma.StringFilter<"Barbero"> | string;
    id_especialidad?: Prisma.IntFilter<"Barbero"> | number;
    contrasena?: Prisma.StringFilter<"Barbero"> | string;
    telefono?: Prisma.StringFilter<"Barbero"> | string;
    fecha_registro?: Prisma.DateTimeFilter<"Barbero"> | Date | string;
    especialidad?: Prisma.XOR<Prisma.EspecialidadScalarRelationFilter, Prisma.EspecialidadWhereInput>;
    citas?: Prisma.CitaListRelationFilter;
    horarios?: Prisma.HorarioBarberoListRelationFilter;
}, "cedula_barbero" | "correo">;
export type BarberoOrderByWithAggregationInput = {
    cedula_barbero?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    apellido?: Prisma.SortOrder;
    id_especialidad?: Prisma.SortOrder;
    correo?: Prisma.SortOrder;
    contrasena?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    fecha_registro?: Prisma.SortOrder;
    _count?: Prisma.BarberoCountOrderByAggregateInput;
    _avg?: Prisma.BarberoAvgOrderByAggregateInput;
    _max?: Prisma.BarberoMaxOrderByAggregateInput;
    _min?: Prisma.BarberoMinOrderByAggregateInput;
    _sum?: Prisma.BarberoSumOrderByAggregateInput;
};
export type BarberoScalarWhereWithAggregatesInput = {
    AND?: Prisma.BarberoScalarWhereWithAggregatesInput | Prisma.BarberoScalarWhereWithAggregatesInput[];
    OR?: Prisma.BarberoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BarberoScalarWhereWithAggregatesInput | Prisma.BarberoScalarWhereWithAggregatesInput[];
    cedula_barbero?: Prisma.StringWithAggregatesFilter<"Barbero"> | string;
    nombre?: Prisma.StringWithAggregatesFilter<"Barbero"> | string;
    apellido?: Prisma.StringWithAggregatesFilter<"Barbero"> | string;
    id_especialidad?: Prisma.IntWithAggregatesFilter<"Barbero"> | number;
    correo?: Prisma.StringWithAggregatesFilter<"Barbero"> | string;
    contrasena?: Prisma.StringWithAggregatesFilter<"Barbero"> | string;
    telefono?: Prisma.StringWithAggregatesFilter<"Barbero"> | string;
    fecha_registro?: Prisma.DateTimeWithAggregatesFilter<"Barbero"> | Date | string;
};
export type BarberoCreateInput = {
    cedula_barbero: string;
    nombre: string;
    apellido: string;
    correo: string;
    contrasena: string;
    telefono: string;
    fecha_registro?: Date | string;
    especialidad: Prisma.EspecialidadCreateNestedOneWithoutBarberosInput;
    citas?: Prisma.CitaCreateNestedManyWithoutBarberoInput;
    horarios?: Prisma.HorarioBarberoCreateNestedManyWithoutBarberoInput;
};
export type BarberoUncheckedCreateInput = {
    cedula_barbero: string;
    nombre: string;
    apellido: string;
    id_especialidad: number;
    correo: string;
    contrasena: string;
    telefono: string;
    fecha_registro?: Date | string;
    citas?: Prisma.CitaUncheckedCreateNestedManyWithoutBarberoInput;
    horarios?: Prisma.HorarioBarberoUncheckedCreateNestedManyWithoutBarberoInput;
};
export type BarberoUpdateInput = {
    cedula_barbero?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    contrasena?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    especialidad?: Prisma.EspecialidadUpdateOneRequiredWithoutBarberosNestedInput;
    citas?: Prisma.CitaUpdateManyWithoutBarberoNestedInput;
    horarios?: Prisma.HorarioBarberoUpdateManyWithoutBarberoNestedInput;
};
export type BarberoUncheckedUpdateInput = {
    cedula_barbero?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    id_especialidad?: Prisma.IntFieldUpdateOperationsInput | number;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    contrasena?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    citas?: Prisma.CitaUncheckedUpdateManyWithoutBarberoNestedInput;
    horarios?: Prisma.HorarioBarberoUncheckedUpdateManyWithoutBarberoNestedInput;
};
export type BarberoCreateManyInput = {
    cedula_barbero: string;
    nombre: string;
    apellido: string;
    id_especialidad: number;
    correo: string;
    contrasena: string;
    telefono: string;
    fecha_registro?: Date | string;
};
export type BarberoUpdateManyMutationInput = {
    cedula_barbero?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    contrasena?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BarberoUncheckedUpdateManyInput = {
    cedula_barbero?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    id_especialidad?: Prisma.IntFieldUpdateOperationsInput | number;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    contrasena?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BarberoCountOrderByAggregateInput = {
    cedula_barbero?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    apellido?: Prisma.SortOrder;
    id_especialidad?: Prisma.SortOrder;
    correo?: Prisma.SortOrder;
    contrasena?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    fecha_registro?: Prisma.SortOrder;
};
export type BarberoAvgOrderByAggregateInput = {
    id_especialidad?: Prisma.SortOrder;
};
export type BarberoMaxOrderByAggregateInput = {
    cedula_barbero?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    apellido?: Prisma.SortOrder;
    id_especialidad?: Prisma.SortOrder;
    correo?: Prisma.SortOrder;
    contrasena?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    fecha_registro?: Prisma.SortOrder;
};
export type BarberoMinOrderByAggregateInput = {
    cedula_barbero?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    apellido?: Prisma.SortOrder;
    id_especialidad?: Prisma.SortOrder;
    correo?: Prisma.SortOrder;
    contrasena?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    fecha_registro?: Prisma.SortOrder;
};
export type BarberoSumOrderByAggregateInput = {
    id_especialidad?: Prisma.SortOrder;
};
export type BarberoListRelationFilter = {
    every?: Prisma.BarberoWhereInput;
    some?: Prisma.BarberoWhereInput;
    none?: Prisma.BarberoWhereInput;
};
export type BarberoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BarberoScalarRelationFilter = {
    is?: Prisma.BarberoWhereInput;
    isNot?: Prisma.BarberoWhereInput;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type BarberoCreateNestedManyWithoutEspecialidadInput = {
    create?: Prisma.XOR<Prisma.BarberoCreateWithoutEspecialidadInput, Prisma.BarberoUncheckedCreateWithoutEspecialidadInput> | Prisma.BarberoCreateWithoutEspecialidadInput[] | Prisma.BarberoUncheckedCreateWithoutEspecialidadInput[];
    connectOrCreate?: Prisma.BarberoCreateOrConnectWithoutEspecialidadInput | Prisma.BarberoCreateOrConnectWithoutEspecialidadInput[];
    createMany?: Prisma.BarberoCreateManyEspecialidadInputEnvelope;
    connect?: Prisma.BarberoWhereUniqueInput | Prisma.BarberoWhereUniqueInput[];
};
export type BarberoUncheckedCreateNestedManyWithoutEspecialidadInput = {
    create?: Prisma.XOR<Prisma.BarberoCreateWithoutEspecialidadInput, Prisma.BarberoUncheckedCreateWithoutEspecialidadInput> | Prisma.BarberoCreateWithoutEspecialidadInput[] | Prisma.BarberoUncheckedCreateWithoutEspecialidadInput[];
    connectOrCreate?: Prisma.BarberoCreateOrConnectWithoutEspecialidadInput | Prisma.BarberoCreateOrConnectWithoutEspecialidadInput[];
    createMany?: Prisma.BarberoCreateManyEspecialidadInputEnvelope;
    connect?: Prisma.BarberoWhereUniqueInput | Prisma.BarberoWhereUniqueInput[];
};
export type BarberoUpdateManyWithoutEspecialidadNestedInput = {
    create?: Prisma.XOR<Prisma.BarberoCreateWithoutEspecialidadInput, Prisma.BarberoUncheckedCreateWithoutEspecialidadInput> | Prisma.BarberoCreateWithoutEspecialidadInput[] | Prisma.BarberoUncheckedCreateWithoutEspecialidadInput[];
    connectOrCreate?: Prisma.BarberoCreateOrConnectWithoutEspecialidadInput | Prisma.BarberoCreateOrConnectWithoutEspecialidadInput[];
    upsert?: Prisma.BarberoUpsertWithWhereUniqueWithoutEspecialidadInput | Prisma.BarberoUpsertWithWhereUniqueWithoutEspecialidadInput[];
    createMany?: Prisma.BarberoCreateManyEspecialidadInputEnvelope;
    set?: Prisma.BarberoWhereUniqueInput | Prisma.BarberoWhereUniqueInput[];
    disconnect?: Prisma.BarberoWhereUniqueInput | Prisma.BarberoWhereUniqueInput[];
    delete?: Prisma.BarberoWhereUniqueInput | Prisma.BarberoWhereUniqueInput[];
    connect?: Prisma.BarberoWhereUniqueInput | Prisma.BarberoWhereUniqueInput[];
    update?: Prisma.BarberoUpdateWithWhereUniqueWithoutEspecialidadInput | Prisma.BarberoUpdateWithWhereUniqueWithoutEspecialidadInput[];
    updateMany?: Prisma.BarberoUpdateManyWithWhereWithoutEspecialidadInput | Prisma.BarberoUpdateManyWithWhereWithoutEspecialidadInput[];
    deleteMany?: Prisma.BarberoScalarWhereInput | Prisma.BarberoScalarWhereInput[];
};
export type BarberoUncheckedUpdateManyWithoutEspecialidadNestedInput = {
    create?: Prisma.XOR<Prisma.BarberoCreateWithoutEspecialidadInput, Prisma.BarberoUncheckedCreateWithoutEspecialidadInput> | Prisma.BarberoCreateWithoutEspecialidadInput[] | Prisma.BarberoUncheckedCreateWithoutEspecialidadInput[];
    connectOrCreate?: Prisma.BarberoCreateOrConnectWithoutEspecialidadInput | Prisma.BarberoCreateOrConnectWithoutEspecialidadInput[];
    upsert?: Prisma.BarberoUpsertWithWhereUniqueWithoutEspecialidadInput | Prisma.BarberoUpsertWithWhereUniqueWithoutEspecialidadInput[];
    createMany?: Prisma.BarberoCreateManyEspecialidadInputEnvelope;
    set?: Prisma.BarberoWhereUniqueInput | Prisma.BarberoWhereUniqueInput[];
    disconnect?: Prisma.BarberoWhereUniqueInput | Prisma.BarberoWhereUniqueInput[];
    delete?: Prisma.BarberoWhereUniqueInput | Prisma.BarberoWhereUniqueInput[];
    connect?: Prisma.BarberoWhereUniqueInput | Prisma.BarberoWhereUniqueInput[];
    update?: Prisma.BarberoUpdateWithWhereUniqueWithoutEspecialidadInput | Prisma.BarberoUpdateWithWhereUniqueWithoutEspecialidadInput[];
    updateMany?: Prisma.BarberoUpdateManyWithWhereWithoutEspecialidadInput | Prisma.BarberoUpdateManyWithWhereWithoutEspecialidadInput[];
    deleteMany?: Prisma.BarberoScalarWhereInput | Prisma.BarberoScalarWhereInput[];
};
export type BarberoCreateNestedOneWithoutCitasInput = {
    create?: Prisma.XOR<Prisma.BarberoCreateWithoutCitasInput, Prisma.BarberoUncheckedCreateWithoutCitasInput>;
    connectOrCreate?: Prisma.BarberoCreateOrConnectWithoutCitasInput;
    connect?: Prisma.BarberoWhereUniqueInput;
};
export type BarberoUpdateOneRequiredWithoutCitasNestedInput = {
    create?: Prisma.XOR<Prisma.BarberoCreateWithoutCitasInput, Prisma.BarberoUncheckedCreateWithoutCitasInput>;
    connectOrCreate?: Prisma.BarberoCreateOrConnectWithoutCitasInput;
    upsert?: Prisma.BarberoUpsertWithoutCitasInput;
    connect?: Prisma.BarberoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BarberoUpdateToOneWithWhereWithoutCitasInput, Prisma.BarberoUpdateWithoutCitasInput>, Prisma.BarberoUncheckedUpdateWithoutCitasInput>;
};
export type BarberoCreateNestedOneWithoutHorariosInput = {
    create?: Prisma.XOR<Prisma.BarberoCreateWithoutHorariosInput, Prisma.BarberoUncheckedCreateWithoutHorariosInput>;
    connectOrCreate?: Prisma.BarberoCreateOrConnectWithoutHorariosInput;
    connect?: Prisma.BarberoWhereUniqueInput;
};
export type BarberoUpdateOneRequiredWithoutHorariosNestedInput = {
    create?: Prisma.XOR<Prisma.BarberoCreateWithoutHorariosInput, Prisma.BarberoUncheckedCreateWithoutHorariosInput>;
    connectOrCreate?: Prisma.BarberoCreateOrConnectWithoutHorariosInput;
    upsert?: Prisma.BarberoUpsertWithoutHorariosInput;
    connect?: Prisma.BarberoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BarberoUpdateToOneWithWhereWithoutHorariosInput, Prisma.BarberoUpdateWithoutHorariosInput>, Prisma.BarberoUncheckedUpdateWithoutHorariosInput>;
};
export type BarberoCreateWithoutEspecialidadInput = {
    cedula_barbero: string;
    nombre: string;
    apellido: string;
    correo: string;
    contrasena: string;
    telefono: string;
    fecha_registro?: Date | string;
    citas?: Prisma.CitaCreateNestedManyWithoutBarberoInput;
    horarios?: Prisma.HorarioBarberoCreateNestedManyWithoutBarberoInput;
};
export type BarberoUncheckedCreateWithoutEspecialidadInput = {
    cedula_barbero: string;
    nombre: string;
    apellido: string;
    correo: string;
    contrasena: string;
    telefono: string;
    fecha_registro?: Date | string;
    citas?: Prisma.CitaUncheckedCreateNestedManyWithoutBarberoInput;
    horarios?: Prisma.HorarioBarberoUncheckedCreateNestedManyWithoutBarberoInput;
};
export type BarberoCreateOrConnectWithoutEspecialidadInput = {
    where: Prisma.BarberoWhereUniqueInput;
    create: Prisma.XOR<Prisma.BarberoCreateWithoutEspecialidadInput, Prisma.BarberoUncheckedCreateWithoutEspecialidadInput>;
};
export type BarberoCreateManyEspecialidadInputEnvelope = {
    data: Prisma.BarberoCreateManyEspecialidadInput | Prisma.BarberoCreateManyEspecialidadInput[];
};
export type BarberoUpsertWithWhereUniqueWithoutEspecialidadInput = {
    where: Prisma.BarberoWhereUniqueInput;
    update: Prisma.XOR<Prisma.BarberoUpdateWithoutEspecialidadInput, Prisma.BarberoUncheckedUpdateWithoutEspecialidadInput>;
    create: Prisma.XOR<Prisma.BarberoCreateWithoutEspecialidadInput, Prisma.BarberoUncheckedCreateWithoutEspecialidadInput>;
};
export type BarberoUpdateWithWhereUniqueWithoutEspecialidadInput = {
    where: Prisma.BarberoWhereUniqueInput;
    data: Prisma.XOR<Prisma.BarberoUpdateWithoutEspecialidadInput, Prisma.BarberoUncheckedUpdateWithoutEspecialidadInput>;
};
export type BarberoUpdateManyWithWhereWithoutEspecialidadInput = {
    where: Prisma.BarberoScalarWhereInput;
    data: Prisma.XOR<Prisma.BarberoUpdateManyMutationInput, Prisma.BarberoUncheckedUpdateManyWithoutEspecialidadInput>;
};
export type BarberoScalarWhereInput = {
    AND?: Prisma.BarberoScalarWhereInput | Prisma.BarberoScalarWhereInput[];
    OR?: Prisma.BarberoScalarWhereInput[];
    NOT?: Prisma.BarberoScalarWhereInput | Prisma.BarberoScalarWhereInput[];
    cedula_barbero?: Prisma.StringFilter<"Barbero"> | string;
    nombre?: Prisma.StringFilter<"Barbero"> | string;
    apellido?: Prisma.StringFilter<"Barbero"> | string;
    id_especialidad?: Prisma.IntFilter<"Barbero"> | number;
    correo?: Prisma.StringFilter<"Barbero"> | string;
    contrasena?: Prisma.StringFilter<"Barbero"> | string;
    telefono?: Prisma.StringFilter<"Barbero"> | string;
    fecha_registro?: Prisma.DateTimeFilter<"Barbero"> | Date | string;
};
export type BarberoCreateWithoutCitasInput = {
    cedula_barbero: string;
    nombre: string;
    apellido: string;
    correo: string;
    contrasena: string;
    telefono: string;
    fecha_registro?: Date | string;
    especialidad: Prisma.EspecialidadCreateNestedOneWithoutBarberosInput;
    horarios?: Prisma.HorarioBarberoCreateNestedManyWithoutBarberoInput;
};
export type BarberoUncheckedCreateWithoutCitasInput = {
    cedula_barbero: string;
    nombre: string;
    apellido: string;
    id_especialidad: number;
    correo: string;
    contrasena: string;
    telefono: string;
    fecha_registro?: Date | string;
    horarios?: Prisma.HorarioBarberoUncheckedCreateNestedManyWithoutBarberoInput;
};
export type BarberoCreateOrConnectWithoutCitasInput = {
    where: Prisma.BarberoWhereUniqueInput;
    create: Prisma.XOR<Prisma.BarberoCreateWithoutCitasInput, Prisma.BarberoUncheckedCreateWithoutCitasInput>;
};
export type BarberoUpsertWithoutCitasInput = {
    update: Prisma.XOR<Prisma.BarberoUpdateWithoutCitasInput, Prisma.BarberoUncheckedUpdateWithoutCitasInput>;
    create: Prisma.XOR<Prisma.BarberoCreateWithoutCitasInput, Prisma.BarberoUncheckedCreateWithoutCitasInput>;
    where?: Prisma.BarberoWhereInput;
};
export type BarberoUpdateToOneWithWhereWithoutCitasInput = {
    where?: Prisma.BarberoWhereInput;
    data: Prisma.XOR<Prisma.BarberoUpdateWithoutCitasInput, Prisma.BarberoUncheckedUpdateWithoutCitasInput>;
};
export type BarberoUpdateWithoutCitasInput = {
    cedula_barbero?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    contrasena?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    especialidad?: Prisma.EspecialidadUpdateOneRequiredWithoutBarberosNestedInput;
    horarios?: Prisma.HorarioBarberoUpdateManyWithoutBarberoNestedInput;
};
export type BarberoUncheckedUpdateWithoutCitasInput = {
    cedula_barbero?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    id_especialidad?: Prisma.IntFieldUpdateOperationsInput | number;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    contrasena?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horarios?: Prisma.HorarioBarberoUncheckedUpdateManyWithoutBarberoNestedInput;
};
export type BarberoCreateWithoutHorariosInput = {
    cedula_barbero: string;
    nombre: string;
    apellido: string;
    correo: string;
    contrasena: string;
    telefono: string;
    fecha_registro?: Date | string;
    especialidad: Prisma.EspecialidadCreateNestedOneWithoutBarberosInput;
    citas?: Prisma.CitaCreateNestedManyWithoutBarberoInput;
};
export type BarberoUncheckedCreateWithoutHorariosInput = {
    cedula_barbero: string;
    nombre: string;
    apellido: string;
    id_especialidad: number;
    correo: string;
    contrasena: string;
    telefono: string;
    fecha_registro?: Date | string;
    citas?: Prisma.CitaUncheckedCreateNestedManyWithoutBarberoInput;
};
export type BarberoCreateOrConnectWithoutHorariosInput = {
    where: Prisma.BarberoWhereUniqueInput;
    create: Prisma.XOR<Prisma.BarberoCreateWithoutHorariosInput, Prisma.BarberoUncheckedCreateWithoutHorariosInput>;
};
export type BarberoUpsertWithoutHorariosInput = {
    update: Prisma.XOR<Prisma.BarberoUpdateWithoutHorariosInput, Prisma.BarberoUncheckedUpdateWithoutHorariosInput>;
    create: Prisma.XOR<Prisma.BarberoCreateWithoutHorariosInput, Prisma.BarberoUncheckedCreateWithoutHorariosInput>;
    where?: Prisma.BarberoWhereInput;
};
export type BarberoUpdateToOneWithWhereWithoutHorariosInput = {
    where?: Prisma.BarberoWhereInput;
    data: Prisma.XOR<Prisma.BarberoUpdateWithoutHorariosInput, Prisma.BarberoUncheckedUpdateWithoutHorariosInput>;
};
export type BarberoUpdateWithoutHorariosInput = {
    cedula_barbero?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    contrasena?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    especialidad?: Prisma.EspecialidadUpdateOneRequiredWithoutBarberosNestedInput;
    citas?: Prisma.CitaUpdateManyWithoutBarberoNestedInput;
};
export type BarberoUncheckedUpdateWithoutHorariosInput = {
    cedula_barbero?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    id_especialidad?: Prisma.IntFieldUpdateOperationsInput | number;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    contrasena?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    citas?: Prisma.CitaUncheckedUpdateManyWithoutBarberoNestedInput;
};
export type BarberoCreateManyEspecialidadInput = {
    cedula_barbero: string;
    nombre: string;
    apellido: string;
    correo: string;
    contrasena: string;
    telefono: string;
    fecha_registro?: Date | string;
};
export type BarberoUpdateWithoutEspecialidadInput = {
    cedula_barbero?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    contrasena?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    citas?: Prisma.CitaUpdateManyWithoutBarberoNestedInput;
    horarios?: Prisma.HorarioBarberoUpdateManyWithoutBarberoNestedInput;
};
export type BarberoUncheckedUpdateWithoutEspecialidadInput = {
    cedula_barbero?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    contrasena?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    citas?: Prisma.CitaUncheckedUpdateManyWithoutBarberoNestedInput;
    horarios?: Prisma.HorarioBarberoUncheckedUpdateManyWithoutBarberoNestedInput;
};
export type BarberoUncheckedUpdateManyWithoutEspecialidadInput = {
    cedula_barbero?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    contrasena?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type BarberoCountOutputType
 */
export type BarberoCountOutputType = {
    citas: number;
    horarios: number;
};
export type BarberoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    citas?: boolean | BarberoCountOutputTypeCountCitasArgs;
    horarios?: boolean | BarberoCountOutputTypeCountHorariosArgs;
};
/**
 * BarberoCountOutputType without action
 */
export type BarberoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarberoCountOutputType
     */
    select?: Prisma.BarberoCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * BarberoCountOutputType without action
 */
export type BarberoCountOutputTypeCountCitasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CitaWhereInput;
};
/**
 * BarberoCountOutputType without action
 */
export type BarberoCountOutputTypeCountHorariosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HorarioBarberoWhereInput;
};
export type BarberoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    cedula_barbero?: boolean;
    nombre?: boolean;
    apellido?: boolean;
    id_especialidad?: boolean;
    correo?: boolean;
    contrasena?: boolean;
    telefono?: boolean;
    fecha_registro?: boolean;
    especialidad?: boolean | Prisma.EspecialidadDefaultArgs<ExtArgs>;
    citas?: boolean | Prisma.Barbero$citasArgs<ExtArgs>;
    horarios?: boolean | Prisma.Barbero$horariosArgs<ExtArgs>;
    _count?: boolean | Prisma.BarberoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["barbero"]>;
export type BarberoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    cedula_barbero?: boolean;
    nombre?: boolean;
    apellido?: boolean;
    id_especialidad?: boolean;
    correo?: boolean;
    contrasena?: boolean;
    telefono?: boolean;
    fecha_registro?: boolean;
    especialidad?: boolean | Prisma.EspecialidadDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["barbero"]>;
export type BarberoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    cedula_barbero?: boolean;
    nombre?: boolean;
    apellido?: boolean;
    id_especialidad?: boolean;
    correo?: boolean;
    contrasena?: boolean;
    telefono?: boolean;
    fecha_registro?: boolean;
    especialidad?: boolean | Prisma.EspecialidadDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["barbero"]>;
export type BarberoSelectScalar = {
    cedula_barbero?: boolean;
    nombre?: boolean;
    apellido?: boolean;
    id_especialidad?: boolean;
    correo?: boolean;
    contrasena?: boolean;
    telefono?: boolean;
    fecha_registro?: boolean;
};
export type BarberoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"cedula_barbero" | "nombre" | "apellido" | "id_especialidad" | "correo" | "contrasena" | "telefono" | "fecha_registro", ExtArgs["result"]["barbero"]>;
export type BarberoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    especialidad?: boolean | Prisma.EspecialidadDefaultArgs<ExtArgs>;
    citas?: boolean | Prisma.Barbero$citasArgs<ExtArgs>;
    horarios?: boolean | Prisma.Barbero$horariosArgs<ExtArgs>;
    _count?: boolean | Prisma.BarberoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type BarberoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    especialidad?: boolean | Prisma.EspecialidadDefaultArgs<ExtArgs>;
};
export type BarberoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    especialidad?: boolean | Prisma.EspecialidadDefaultArgs<ExtArgs>;
};
export type $BarberoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Barbero";
    objects: {
        especialidad: Prisma.$EspecialidadPayload<ExtArgs>;
        citas: Prisma.$CitaPayload<ExtArgs>[];
        horarios: Prisma.$HorarioBarberoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        cedula_barbero: string;
        nombre: string;
        apellido: string;
        id_especialidad: number;
        correo: string;
        contrasena: string;
        telefono: string;
        fecha_registro: Date;
    }, ExtArgs["result"]["barbero"]>;
    composites: {};
};
export type BarberoGetPayload<S extends boolean | null | undefined | BarberoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BarberoPayload, S>;
export type BarberoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BarberoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BarberoCountAggregateInputType | true;
};
export interface BarberoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Barbero'];
        meta: {
            name: 'Barbero';
        };
    };
    /**
     * Find zero or one Barbero that matches the filter.
     * @param {BarberoFindUniqueArgs} args - Arguments to find a Barbero
     * @example
     * // Get one Barbero
     * const barbero = await prisma.barbero.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BarberoFindUniqueArgs>(args: Prisma.SelectSubset<T, BarberoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BarberoClient<runtime.Types.Result.GetResult<Prisma.$BarberoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Barbero that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BarberoFindUniqueOrThrowArgs} args - Arguments to find a Barbero
     * @example
     * // Get one Barbero
     * const barbero = await prisma.barbero.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BarberoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BarberoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BarberoClient<runtime.Types.Result.GetResult<Prisma.$BarberoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Barbero that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarberoFindFirstArgs} args - Arguments to find a Barbero
     * @example
     * // Get one Barbero
     * const barbero = await prisma.barbero.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BarberoFindFirstArgs>(args?: Prisma.SelectSubset<T, BarberoFindFirstArgs<ExtArgs>>): Prisma.Prisma__BarberoClient<runtime.Types.Result.GetResult<Prisma.$BarberoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Barbero that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarberoFindFirstOrThrowArgs} args - Arguments to find a Barbero
     * @example
     * // Get one Barbero
     * const barbero = await prisma.barbero.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BarberoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BarberoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BarberoClient<runtime.Types.Result.GetResult<Prisma.$BarberoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Barberos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarberoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Barberos
     * const barberos = await prisma.barbero.findMany()
     *
     * // Get first 10 Barberos
     * const barberos = await prisma.barbero.findMany({ take: 10 })
     *
     * // Only select the `cedula_barbero`
     * const barberoWithCedula_barberoOnly = await prisma.barbero.findMany({ select: { cedula_barbero: true } })
     *
     */
    findMany<T extends BarberoFindManyArgs>(args?: Prisma.SelectSubset<T, BarberoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BarberoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Barbero.
     * @param {BarberoCreateArgs} args - Arguments to create a Barbero.
     * @example
     * // Create one Barbero
     * const Barbero = await prisma.barbero.create({
     *   data: {
     *     // ... data to create a Barbero
     *   }
     * })
     *
     */
    create<T extends BarberoCreateArgs>(args: Prisma.SelectSubset<T, BarberoCreateArgs<ExtArgs>>): Prisma.Prisma__BarberoClient<runtime.Types.Result.GetResult<Prisma.$BarberoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Barberos.
     * @param {BarberoCreateManyArgs} args - Arguments to create many Barberos.
     * @example
     * // Create many Barberos
     * const barbero = await prisma.barbero.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BarberoCreateManyArgs>(args?: Prisma.SelectSubset<T, BarberoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Barberos and returns the data saved in the database.
     * @param {BarberoCreateManyAndReturnArgs} args - Arguments to create many Barberos.
     * @example
     * // Create many Barberos
     * const barbero = await prisma.barbero.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Barberos and only return the `cedula_barbero`
     * const barberoWithCedula_barberoOnly = await prisma.barbero.createManyAndReturn({
     *   select: { cedula_barbero: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BarberoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BarberoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BarberoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Barbero.
     * @param {BarberoDeleteArgs} args - Arguments to delete one Barbero.
     * @example
     * // Delete one Barbero
     * const Barbero = await prisma.barbero.delete({
     *   where: {
     *     // ... filter to delete one Barbero
     *   }
     * })
     *
     */
    delete<T extends BarberoDeleteArgs>(args: Prisma.SelectSubset<T, BarberoDeleteArgs<ExtArgs>>): Prisma.Prisma__BarberoClient<runtime.Types.Result.GetResult<Prisma.$BarberoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Barbero.
     * @param {BarberoUpdateArgs} args - Arguments to update one Barbero.
     * @example
     * // Update one Barbero
     * const barbero = await prisma.barbero.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BarberoUpdateArgs>(args: Prisma.SelectSubset<T, BarberoUpdateArgs<ExtArgs>>): Prisma.Prisma__BarberoClient<runtime.Types.Result.GetResult<Prisma.$BarberoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Barberos.
     * @param {BarberoDeleteManyArgs} args - Arguments to filter Barberos to delete.
     * @example
     * // Delete a few Barberos
     * const { count } = await prisma.barbero.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BarberoDeleteManyArgs>(args?: Prisma.SelectSubset<T, BarberoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Barberos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarberoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Barberos
     * const barbero = await prisma.barbero.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BarberoUpdateManyArgs>(args: Prisma.SelectSubset<T, BarberoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Barberos and returns the data updated in the database.
     * @param {BarberoUpdateManyAndReturnArgs} args - Arguments to update many Barberos.
     * @example
     * // Update many Barberos
     * const barbero = await prisma.barbero.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Barberos and only return the `cedula_barbero`
     * const barberoWithCedula_barberoOnly = await prisma.barbero.updateManyAndReturn({
     *   select: { cedula_barbero: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends BarberoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BarberoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BarberoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Barbero.
     * @param {BarberoUpsertArgs} args - Arguments to update or create a Barbero.
     * @example
     * // Update or create a Barbero
     * const barbero = await prisma.barbero.upsert({
     *   create: {
     *     // ... data to create a Barbero
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Barbero we want to update
     *   }
     * })
     */
    upsert<T extends BarberoUpsertArgs>(args: Prisma.SelectSubset<T, BarberoUpsertArgs<ExtArgs>>): Prisma.Prisma__BarberoClient<runtime.Types.Result.GetResult<Prisma.$BarberoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Barberos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarberoCountArgs} args - Arguments to filter Barberos to count.
     * @example
     * // Count the number of Barberos
     * const count = await prisma.barbero.count({
     *   where: {
     *     // ... the filter for the Barberos we want to count
     *   }
     * })
    **/
    count<T extends BarberoCountArgs>(args?: Prisma.Subset<T, BarberoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BarberoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Barbero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarberoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BarberoAggregateArgs>(args: Prisma.Subset<T, BarberoAggregateArgs>): Prisma.PrismaPromise<GetBarberoAggregateType<T>>;
    /**
     * Group by Barbero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarberoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends BarberoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BarberoGroupByArgs['orderBy'];
    } : {
        orderBy?: BarberoGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BarberoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBarberoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Barbero model
     */
    readonly fields: BarberoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Barbero.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__BarberoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    especialidad<T extends Prisma.EspecialidadDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EspecialidadDefaultArgs<ExtArgs>>): Prisma.Prisma__EspecialidadClient<runtime.Types.Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    citas<T extends Prisma.Barbero$citasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Barbero$citasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    horarios<T extends Prisma.Barbero$horariosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Barbero$horariosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HorarioBarberoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Barbero model
 */
export interface BarberoFieldRefs {
    readonly cedula_barbero: Prisma.FieldRef<"Barbero", 'String'>;
    readonly nombre: Prisma.FieldRef<"Barbero", 'String'>;
    readonly apellido: Prisma.FieldRef<"Barbero", 'String'>;
    readonly id_especialidad: Prisma.FieldRef<"Barbero", 'Int'>;
    readonly correo: Prisma.FieldRef<"Barbero", 'String'>;
    readonly contrasena: Prisma.FieldRef<"Barbero", 'String'>;
    readonly telefono: Prisma.FieldRef<"Barbero", 'String'>;
    readonly fecha_registro: Prisma.FieldRef<"Barbero", 'DateTime'>;
}
/**
 * Barbero findUnique
 */
export type BarberoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbero
     */
    select?: Prisma.BarberoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Barbero
     */
    omit?: Prisma.BarberoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BarberoInclude<ExtArgs> | null;
    /**
     * Filter, which Barbero to fetch.
     */
    where: Prisma.BarberoWhereUniqueInput;
};
/**
 * Barbero findUniqueOrThrow
 */
export type BarberoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbero
     */
    select?: Prisma.BarberoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Barbero
     */
    omit?: Prisma.BarberoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BarberoInclude<ExtArgs> | null;
    /**
     * Filter, which Barbero to fetch.
     */
    where: Prisma.BarberoWhereUniqueInput;
};
/**
 * Barbero findFirst
 */
export type BarberoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbero
     */
    select?: Prisma.BarberoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Barbero
     */
    omit?: Prisma.BarberoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BarberoInclude<ExtArgs> | null;
    /**
     * Filter, which Barbero to fetch.
     */
    where?: Prisma.BarberoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Barberos to fetch.
     */
    orderBy?: Prisma.BarberoOrderByWithRelationInput | Prisma.BarberoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Barberos.
     */
    cursor?: Prisma.BarberoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Barberos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Barberos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Barberos.
     */
    distinct?: Prisma.BarberoScalarFieldEnum | Prisma.BarberoScalarFieldEnum[];
};
/**
 * Barbero findFirstOrThrow
 */
export type BarberoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbero
     */
    select?: Prisma.BarberoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Barbero
     */
    omit?: Prisma.BarberoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BarberoInclude<ExtArgs> | null;
    /**
     * Filter, which Barbero to fetch.
     */
    where?: Prisma.BarberoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Barberos to fetch.
     */
    orderBy?: Prisma.BarberoOrderByWithRelationInput | Prisma.BarberoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Barberos.
     */
    cursor?: Prisma.BarberoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Barberos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Barberos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Barberos.
     */
    distinct?: Prisma.BarberoScalarFieldEnum | Prisma.BarberoScalarFieldEnum[];
};
/**
 * Barbero findMany
 */
export type BarberoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbero
     */
    select?: Prisma.BarberoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Barbero
     */
    omit?: Prisma.BarberoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BarberoInclude<ExtArgs> | null;
    /**
     * Filter, which Barberos to fetch.
     */
    where?: Prisma.BarberoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Barberos to fetch.
     */
    orderBy?: Prisma.BarberoOrderByWithRelationInput | Prisma.BarberoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Barberos.
     */
    cursor?: Prisma.BarberoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Barberos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Barberos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Barberos.
     */
    distinct?: Prisma.BarberoScalarFieldEnum | Prisma.BarberoScalarFieldEnum[];
};
/**
 * Barbero create
 */
export type BarberoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbero
     */
    select?: Prisma.BarberoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Barbero
     */
    omit?: Prisma.BarberoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BarberoInclude<ExtArgs> | null;
    /**
     * The data needed to create a Barbero.
     */
    data: Prisma.XOR<Prisma.BarberoCreateInput, Prisma.BarberoUncheckedCreateInput>;
};
/**
 * Barbero createMany
 */
export type BarberoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Barberos.
     */
    data: Prisma.BarberoCreateManyInput | Prisma.BarberoCreateManyInput[];
};
/**
 * Barbero createManyAndReturn
 */
export type BarberoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbero
     */
    select?: Prisma.BarberoSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Barbero
     */
    omit?: Prisma.BarberoOmit<ExtArgs> | null;
    /**
     * The data used to create many Barberos.
     */
    data: Prisma.BarberoCreateManyInput | Prisma.BarberoCreateManyInput[];
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BarberoIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Barbero update
 */
export type BarberoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbero
     */
    select?: Prisma.BarberoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Barbero
     */
    omit?: Prisma.BarberoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BarberoInclude<ExtArgs> | null;
    /**
     * The data needed to update a Barbero.
     */
    data: Prisma.XOR<Prisma.BarberoUpdateInput, Prisma.BarberoUncheckedUpdateInput>;
    /**
     * Choose, which Barbero to update.
     */
    where: Prisma.BarberoWhereUniqueInput;
};
/**
 * Barbero updateMany
 */
export type BarberoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Barberos.
     */
    data: Prisma.XOR<Prisma.BarberoUpdateManyMutationInput, Prisma.BarberoUncheckedUpdateManyInput>;
    /**
     * Filter which Barberos to update
     */
    where?: Prisma.BarberoWhereInput;
    /**
     * Limit how many Barberos to update.
     */
    limit?: number;
};
/**
 * Barbero updateManyAndReturn
 */
export type BarberoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbero
     */
    select?: Prisma.BarberoSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Barbero
     */
    omit?: Prisma.BarberoOmit<ExtArgs> | null;
    /**
     * The data used to update Barberos.
     */
    data: Prisma.XOR<Prisma.BarberoUpdateManyMutationInput, Prisma.BarberoUncheckedUpdateManyInput>;
    /**
     * Filter which Barberos to update
     */
    where?: Prisma.BarberoWhereInput;
    /**
     * Limit how many Barberos to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BarberoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Barbero upsert
 */
export type BarberoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbero
     */
    select?: Prisma.BarberoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Barbero
     */
    omit?: Prisma.BarberoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BarberoInclude<ExtArgs> | null;
    /**
     * The filter to search for the Barbero to update in case it exists.
     */
    where: Prisma.BarberoWhereUniqueInput;
    /**
     * In case the Barbero found by the `where` argument doesn't exist, create a new Barbero with this data.
     */
    create: Prisma.XOR<Prisma.BarberoCreateInput, Prisma.BarberoUncheckedCreateInput>;
    /**
     * In case the Barbero was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.BarberoUpdateInput, Prisma.BarberoUncheckedUpdateInput>;
};
/**
 * Barbero delete
 */
export type BarberoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbero
     */
    select?: Prisma.BarberoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Barbero
     */
    omit?: Prisma.BarberoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BarberoInclude<ExtArgs> | null;
    /**
     * Filter which Barbero to delete.
     */
    where: Prisma.BarberoWhereUniqueInput;
};
/**
 * Barbero deleteMany
 */
export type BarberoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Barberos to delete
     */
    where?: Prisma.BarberoWhereInput;
    /**
     * Limit how many Barberos to delete.
     */
    limit?: number;
};
/**
 * Barbero.citas
 */
export type Barbero$citasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: Prisma.CitaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cita
     */
    omit?: Prisma.CitaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CitaInclude<ExtArgs> | null;
    where?: Prisma.CitaWhereInput;
    orderBy?: Prisma.CitaOrderByWithRelationInput | Prisma.CitaOrderByWithRelationInput[];
    cursor?: Prisma.CitaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CitaScalarFieldEnum | Prisma.CitaScalarFieldEnum[];
};
/**
 * Barbero.horarios
 */
export type Barbero$horariosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioBarbero
     */
    select?: Prisma.HorarioBarberoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HorarioBarbero
     */
    omit?: Prisma.HorarioBarberoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HorarioBarberoInclude<ExtArgs> | null;
    where?: Prisma.HorarioBarberoWhereInput;
    orderBy?: Prisma.HorarioBarberoOrderByWithRelationInput | Prisma.HorarioBarberoOrderByWithRelationInput[];
    cursor?: Prisma.HorarioBarberoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HorarioBarberoScalarFieldEnum | Prisma.HorarioBarberoScalarFieldEnum[];
};
/**
 * Barbero without action
 */
export type BarberoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbero
     */
    select?: Prisma.BarberoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Barbero
     */
    omit?: Prisma.BarberoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BarberoInclude<ExtArgs> | null;
};
//# sourceMappingURL=Barbero.d.ts.map