import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model HorarioBarbero
 *
 */
export type HorarioBarberoModel = runtime.Types.Result.DefaultSelection<Prisma.$HorarioBarberoPayload>;
export type AggregateHorarioBarbero = {
    _count: HorarioBarberoCountAggregateOutputType | null;
    _avg: HorarioBarberoAvgAggregateOutputType | null;
    _sum: HorarioBarberoSumAggregateOutputType | null;
    _min: HorarioBarberoMinAggregateOutputType | null;
    _max: HorarioBarberoMaxAggregateOutputType | null;
};
export type HorarioBarberoAvgAggregateOutputType = {
    id_horario: number | null;
    id_estado: number | null;
};
export type HorarioBarberoSumAggregateOutputType = {
    id_horario: number | null;
    id_estado: number | null;
};
export type HorarioBarberoMinAggregateOutputType = {
    id_horario: number | null;
    cedula_barbero: string | null;
    id_estado: number | null;
    hora_inicio: string | null;
    hora_fin: string | null;
    fecha: Date | null;
};
export type HorarioBarberoMaxAggregateOutputType = {
    id_horario: number | null;
    cedula_barbero: string | null;
    id_estado: number | null;
    hora_inicio: string | null;
    hora_fin: string | null;
    fecha: Date | null;
};
export type HorarioBarberoCountAggregateOutputType = {
    id_horario: number;
    cedula_barbero: number;
    id_estado: number;
    hora_inicio: number;
    hora_fin: number;
    fecha: number;
    _all: number;
};
export type HorarioBarberoAvgAggregateInputType = {
    id_horario?: true;
    id_estado?: true;
};
export type HorarioBarberoSumAggregateInputType = {
    id_horario?: true;
    id_estado?: true;
};
export type HorarioBarberoMinAggregateInputType = {
    id_horario?: true;
    cedula_barbero?: true;
    id_estado?: true;
    hora_inicio?: true;
    hora_fin?: true;
    fecha?: true;
};
export type HorarioBarberoMaxAggregateInputType = {
    id_horario?: true;
    cedula_barbero?: true;
    id_estado?: true;
    hora_inicio?: true;
    hora_fin?: true;
    fecha?: true;
};
export type HorarioBarberoCountAggregateInputType = {
    id_horario?: true;
    cedula_barbero?: true;
    id_estado?: true;
    hora_inicio?: true;
    hora_fin?: true;
    fecha?: true;
    _all?: true;
};
export type HorarioBarberoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which HorarioBarbero to aggregate.
     */
    where?: Prisma.HorarioBarberoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of HorarioBarberos to fetch.
     */
    orderBy?: Prisma.HorarioBarberoOrderByWithRelationInput | Prisma.HorarioBarberoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.HorarioBarberoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` HorarioBarberos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` HorarioBarberos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned HorarioBarberos
    **/
    _count?: true | HorarioBarberoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: HorarioBarberoAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: HorarioBarberoSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: HorarioBarberoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: HorarioBarberoMaxAggregateInputType;
};
export type GetHorarioBarberoAggregateType<T extends HorarioBarberoAggregateArgs> = {
    [P in keyof T & keyof AggregateHorarioBarbero]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateHorarioBarbero[P]> : Prisma.GetScalarType<T[P], AggregateHorarioBarbero[P]>;
};
export type HorarioBarberoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HorarioBarberoWhereInput;
    orderBy?: Prisma.HorarioBarberoOrderByWithAggregationInput | Prisma.HorarioBarberoOrderByWithAggregationInput[];
    by: Prisma.HorarioBarberoScalarFieldEnum[] | Prisma.HorarioBarberoScalarFieldEnum;
    having?: Prisma.HorarioBarberoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: HorarioBarberoCountAggregateInputType | true;
    _avg?: HorarioBarberoAvgAggregateInputType;
    _sum?: HorarioBarberoSumAggregateInputType;
    _min?: HorarioBarberoMinAggregateInputType;
    _max?: HorarioBarberoMaxAggregateInputType;
};
export type HorarioBarberoGroupByOutputType = {
    id_horario: number;
    cedula_barbero: string;
    id_estado: number;
    hora_inicio: string;
    hora_fin: string;
    fecha: Date;
    _count: HorarioBarberoCountAggregateOutputType | null;
    _avg: HorarioBarberoAvgAggregateOutputType | null;
    _sum: HorarioBarberoSumAggregateOutputType | null;
    _min: HorarioBarberoMinAggregateOutputType | null;
    _max: HorarioBarberoMaxAggregateOutputType | null;
};
export type GetHorarioBarberoGroupByPayload<T extends HorarioBarberoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<HorarioBarberoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof HorarioBarberoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], HorarioBarberoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], HorarioBarberoGroupByOutputType[P]>;
}>>;
export type HorarioBarberoWhereInput = {
    AND?: Prisma.HorarioBarberoWhereInput | Prisma.HorarioBarberoWhereInput[];
    OR?: Prisma.HorarioBarberoWhereInput[];
    NOT?: Prisma.HorarioBarberoWhereInput | Prisma.HorarioBarberoWhereInput[];
    id_horario?: Prisma.IntFilter<"HorarioBarbero"> | number;
    cedula_barbero?: Prisma.StringFilter<"HorarioBarbero"> | string;
    id_estado?: Prisma.IntFilter<"HorarioBarbero"> | number;
    hora_inicio?: Prisma.StringFilter<"HorarioBarbero"> | string;
    hora_fin?: Prisma.StringFilter<"HorarioBarbero"> | string;
    fecha?: Prisma.DateTimeFilter<"HorarioBarbero"> | Date | string;
    barbero?: Prisma.XOR<Prisma.BarberoScalarRelationFilter, Prisma.BarberoWhereInput>;
    estado?: Prisma.XOR<Prisma.EstadoBarberoScalarRelationFilter, Prisma.EstadoBarberoWhereInput>;
};
export type HorarioBarberoOrderByWithRelationInput = {
    id_horario?: Prisma.SortOrder;
    cedula_barbero?: Prisma.SortOrder;
    id_estado?: Prisma.SortOrder;
    hora_inicio?: Prisma.SortOrder;
    hora_fin?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    barbero?: Prisma.BarberoOrderByWithRelationInput;
    estado?: Prisma.EstadoBarberoOrderByWithRelationInput;
};
export type HorarioBarberoWhereUniqueInput = Prisma.AtLeast<{
    id_horario?: number;
    AND?: Prisma.HorarioBarberoWhereInput | Prisma.HorarioBarberoWhereInput[];
    OR?: Prisma.HorarioBarberoWhereInput[];
    NOT?: Prisma.HorarioBarberoWhereInput | Prisma.HorarioBarberoWhereInput[];
    cedula_barbero?: Prisma.StringFilter<"HorarioBarbero"> | string;
    id_estado?: Prisma.IntFilter<"HorarioBarbero"> | number;
    hora_inicio?: Prisma.StringFilter<"HorarioBarbero"> | string;
    hora_fin?: Prisma.StringFilter<"HorarioBarbero"> | string;
    fecha?: Prisma.DateTimeFilter<"HorarioBarbero"> | Date | string;
    barbero?: Prisma.XOR<Prisma.BarberoScalarRelationFilter, Prisma.BarberoWhereInput>;
    estado?: Prisma.XOR<Prisma.EstadoBarberoScalarRelationFilter, Prisma.EstadoBarberoWhereInput>;
}, "id_horario">;
export type HorarioBarberoOrderByWithAggregationInput = {
    id_horario?: Prisma.SortOrder;
    cedula_barbero?: Prisma.SortOrder;
    id_estado?: Prisma.SortOrder;
    hora_inicio?: Prisma.SortOrder;
    hora_fin?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    _count?: Prisma.HorarioBarberoCountOrderByAggregateInput;
    _avg?: Prisma.HorarioBarberoAvgOrderByAggregateInput;
    _max?: Prisma.HorarioBarberoMaxOrderByAggregateInput;
    _min?: Prisma.HorarioBarberoMinOrderByAggregateInput;
    _sum?: Prisma.HorarioBarberoSumOrderByAggregateInput;
};
export type HorarioBarberoScalarWhereWithAggregatesInput = {
    AND?: Prisma.HorarioBarberoScalarWhereWithAggregatesInput | Prisma.HorarioBarberoScalarWhereWithAggregatesInput[];
    OR?: Prisma.HorarioBarberoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.HorarioBarberoScalarWhereWithAggregatesInput | Prisma.HorarioBarberoScalarWhereWithAggregatesInput[];
    id_horario?: Prisma.IntWithAggregatesFilter<"HorarioBarbero"> | number;
    cedula_barbero?: Prisma.StringWithAggregatesFilter<"HorarioBarbero"> | string;
    id_estado?: Prisma.IntWithAggregatesFilter<"HorarioBarbero"> | number;
    hora_inicio?: Prisma.StringWithAggregatesFilter<"HorarioBarbero"> | string;
    hora_fin?: Prisma.StringWithAggregatesFilter<"HorarioBarbero"> | string;
    fecha?: Prisma.DateTimeWithAggregatesFilter<"HorarioBarbero"> | Date | string;
};
export type HorarioBarberoCreateInput = {
    hora_inicio: string;
    hora_fin: string;
    fecha: Date | string;
    barbero: Prisma.BarberoCreateNestedOneWithoutHorariosInput;
    estado: Prisma.EstadoBarberoCreateNestedOneWithoutHorariosInput;
};
export type HorarioBarberoUncheckedCreateInput = {
    id_horario?: number;
    cedula_barbero: string;
    id_estado: number;
    hora_inicio: string;
    hora_fin: string;
    fecha: Date | string;
};
export type HorarioBarberoUpdateInput = {
    hora_inicio?: Prisma.StringFieldUpdateOperationsInput | string;
    hora_fin?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    barbero?: Prisma.BarberoUpdateOneRequiredWithoutHorariosNestedInput;
    estado?: Prisma.EstadoBarberoUpdateOneRequiredWithoutHorariosNestedInput;
};
export type HorarioBarberoUncheckedUpdateInput = {
    id_horario?: Prisma.IntFieldUpdateOperationsInput | number;
    cedula_barbero?: Prisma.StringFieldUpdateOperationsInput | string;
    id_estado?: Prisma.IntFieldUpdateOperationsInput | number;
    hora_inicio?: Prisma.StringFieldUpdateOperationsInput | string;
    hora_fin?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HorarioBarberoCreateManyInput = {
    id_horario?: number;
    cedula_barbero: string;
    id_estado: number;
    hora_inicio: string;
    hora_fin: string;
    fecha: Date | string;
};
export type HorarioBarberoUpdateManyMutationInput = {
    hora_inicio?: Prisma.StringFieldUpdateOperationsInput | string;
    hora_fin?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HorarioBarberoUncheckedUpdateManyInput = {
    id_horario?: Prisma.IntFieldUpdateOperationsInput | number;
    cedula_barbero?: Prisma.StringFieldUpdateOperationsInput | string;
    id_estado?: Prisma.IntFieldUpdateOperationsInput | number;
    hora_inicio?: Prisma.StringFieldUpdateOperationsInput | string;
    hora_fin?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HorarioBarberoListRelationFilter = {
    every?: Prisma.HorarioBarberoWhereInput;
    some?: Prisma.HorarioBarberoWhereInput;
    none?: Prisma.HorarioBarberoWhereInput;
};
export type HorarioBarberoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type HorarioBarberoCountOrderByAggregateInput = {
    id_horario?: Prisma.SortOrder;
    cedula_barbero?: Prisma.SortOrder;
    id_estado?: Prisma.SortOrder;
    hora_inicio?: Prisma.SortOrder;
    hora_fin?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
};
export type HorarioBarberoAvgOrderByAggregateInput = {
    id_horario?: Prisma.SortOrder;
    id_estado?: Prisma.SortOrder;
};
export type HorarioBarberoMaxOrderByAggregateInput = {
    id_horario?: Prisma.SortOrder;
    cedula_barbero?: Prisma.SortOrder;
    id_estado?: Prisma.SortOrder;
    hora_inicio?: Prisma.SortOrder;
    hora_fin?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
};
export type HorarioBarberoMinOrderByAggregateInput = {
    id_horario?: Prisma.SortOrder;
    cedula_barbero?: Prisma.SortOrder;
    id_estado?: Prisma.SortOrder;
    hora_inicio?: Prisma.SortOrder;
    hora_fin?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
};
export type HorarioBarberoSumOrderByAggregateInput = {
    id_horario?: Prisma.SortOrder;
    id_estado?: Prisma.SortOrder;
};
export type HorarioBarberoCreateNestedManyWithoutBarberoInput = {
    create?: Prisma.XOR<Prisma.HorarioBarberoCreateWithoutBarberoInput, Prisma.HorarioBarberoUncheckedCreateWithoutBarberoInput> | Prisma.HorarioBarberoCreateWithoutBarberoInput[] | Prisma.HorarioBarberoUncheckedCreateWithoutBarberoInput[];
    connectOrCreate?: Prisma.HorarioBarberoCreateOrConnectWithoutBarberoInput | Prisma.HorarioBarberoCreateOrConnectWithoutBarberoInput[];
    createMany?: Prisma.HorarioBarberoCreateManyBarberoInputEnvelope;
    connect?: Prisma.HorarioBarberoWhereUniqueInput | Prisma.HorarioBarberoWhereUniqueInput[];
};
export type HorarioBarberoUncheckedCreateNestedManyWithoutBarberoInput = {
    create?: Prisma.XOR<Prisma.HorarioBarberoCreateWithoutBarberoInput, Prisma.HorarioBarberoUncheckedCreateWithoutBarberoInput> | Prisma.HorarioBarberoCreateWithoutBarberoInput[] | Prisma.HorarioBarberoUncheckedCreateWithoutBarberoInput[];
    connectOrCreate?: Prisma.HorarioBarberoCreateOrConnectWithoutBarberoInput | Prisma.HorarioBarberoCreateOrConnectWithoutBarberoInput[];
    createMany?: Prisma.HorarioBarberoCreateManyBarberoInputEnvelope;
    connect?: Prisma.HorarioBarberoWhereUniqueInput | Prisma.HorarioBarberoWhereUniqueInput[];
};
export type HorarioBarberoUpdateManyWithoutBarberoNestedInput = {
    create?: Prisma.XOR<Prisma.HorarioBarberoCreateWithoutBarberoInput, Prisma.HorarioBarberoUncheckedCreateWithoutBarberoInput> | Prisma.HorarioBarberoCreateWithoutBarberoInput[] | Prisma.HorarioBarberoUncheckedCreateWithoutBarberoInput[];
    connectOrCreate?: Prisma.HorarioBarberoCreateOrConnectWithoutBarberoInput | Prisma.HorarioBarberoCreateOrConnectWithoutBarberoInput[];
    upsert?: Prisma.HorarioBarberoUpsertWithWhereUniqueWithoutBarberoInput | Prisma.HorarioBarberoUpsertWithWhereUniqueWithoutBarberoInput[];
    createMany?: Prisma.HorarioBarberoCreateManyBarberoInputEnvelope;
    set?: Prisma.HorarioBarberoWhereUniqueInput | Prisma.HorarioBarberoWhereUniqueInput[];
    disconnect?: Prisma.HorarioBarberoWhereUniqueInput | Prisma.HorarioBarberoWhereUniqueInput[];
    delete?: Prisma.HorarioBarberoWhereUniqueInput | Prisma.HorarioBarberoWhereUniqueInput[];
    connect?: Prisma.HorarioBarberoWhereUniqueInput | Prisma.HorarioBarberoWhereUniqueInput[];
    update?: Prisma.HorarioBarberoUpdateWithWhereUniqueWithoutBarberoInput | Prisma.HorarioBarberoUpdateWithWhereUniqueWithoutBarberoInput[];
    updateMany?: Prisma.HorarioBarberoUpdateManyWithWhereWithoutBarberoInput | Prisma.HorarioBarberoUpdateManyWithWhereWithoutBarberoInput[];
    deleteMany?: Prisma.HorarioBarberoScalarWhereInput | Prisma.HorarioBarberoScalarWhereInput[];
};
export type HorarioBarberoUncheckedUpdateManyWithoutBarberoNestedInput = {
    create?: Prisma.XOR<Prisma.HorarioBarberoCreateWithoutBarberoInput, Prisma.HorarioBarberoUncheckedCreateWithoutBarberoInput> | Prisma.HorarioBarberoCreateWithoutBarberoInput[] | Prisma.HorarioBarberoUncheckedCreateWithoutBarberoInput[];
    connectOrCreate?: Prisma.HorarioBarberoCreateOrConnectWithoutBarberoInput | Prisma.HorarioBarberoCreateOrConnectWithoutBarberoInput[];
    upsert?: Prisma.HorarioBarberoUpsertWithWhereUniqueWithoutBarberoInput | Prisma.HorarioBarberoUpsertWithWhereUniqueWithoutBarberoInput[];
    createMany?: Prisma.HorarioBarberoCreateManyBarberoInputEnvelope;
    set?: Prisma.HorarioBarberoWhereUniqueInput | Prisma.HorarioBarberoWhereUniqueInput[];
    disconnect?: Prisma.HorarioBarberoWhereUniqueInput | Prisma.HorarioBarberoWhereUniqueInput[];
    delete?: Prisma.HorarioBarberoWhereUniqueInput | Prisma.HorarioBarberoWhereUniqueInput[];
    connect?: Prisma.HorarioBarberoWhereUniqueInput | Prisma.HorarioBarberoWhereUniqueInput[];
    update?: Prisma.HorarioBarberoUpdateWithWhereUniqueWithoutBarberoInput | Prisma.HorarioBarberoUpdateWithWhereUniqueWithoutBarberoInput[];
    updateMany?: Prisma.HorarioBarberoUpdateManyWithWhereWithoutBarberoInput | Prisma.HorarioBarberoUpdateManyWithWhereWithoutBarberoInput[];
    deleteMany?: Prisma.HorarioBarberoScalarWhereInput | Prisma.HorarioBarberoScalarWhereInput[];
};
export type HorarioBarberoCreateNestedManyWithoutEstadoInput = {
    create?: Prisma.XOR<Prisma.HorarioBarberoCreateWithoutEstadoInput, Prisma.HorarioBarberoUncheckedCreateWithoutEstadoInput> | Prisma.HorarioBarberoCreateWithoutEstadoInput[] | Prisma.HorarioBarberoUncheckedCreateWithoutEstadoInput[];
    connectOrCreate?: Prisma.HorarioBarberoCreateOrConnectWithoutEstadoInput | Prisma.HorarioBarberoCreateOrConnectWithoutEstadoInput[];
    createMany?: Prisma.HorarioBarberoCreateManyEstadoInputEnvelope;
    connect?: Prisma.HorarioBarberoWhereUniqueInput | Prisma.HorarioBarberoWhereUniqueInput[];
};
export type HorarioBarberoUncheckedCreateNestedManyWithoutEstadoInput = {
    create?: Prisma.XOR<Prisma.HorarioBarberoCreateWithoutEstadoInput, Prisma.HorarioBarberoUncheckedCreateWithoutEstadoInput> | Prisma.HorarioBarberoCreateWithoutEstadoInput[] | Prisma.HorarioBarberoUncheckedCreateWithoutEstadoInput[];
    connectOrCreate?: Prisma.HorarioBarberoCreateOrConnectWithoutEstadoInput | Prisma.HorarioBarberoCreateOrConnectWithoutEstadoInput[];
    createMany?: Prisma.HorarioBarberoCreateManyEstadoInputEnvelope;
    connect?: Prisma.HorarioBarberoWhereUniqueInput | Prisma.HorarioBarberoWhereUniqueInput[];
};
export type HorarioBarberoUpdateManyWithoutEstadoNestedInput = {
    create?: Prisma.XOR<Prisma.HorarioBarberoCreateWithoutEstadoInput, Prisma.HorarioBarberoUncheckedCreateWithoutEstadoInput> | Prisma.HorarioBarberoCreateWithoutEstadoInput[] | Prisma.HorarioBarberoUncheckedCreateWithoutEstadoInput[];
    connectOrCreate?: Prisma.HorarioBarberoCreateOrConnectWithoutEstadoInput | Prisma.HorarioBarberoCreateOrConnectWithoutEstadoInput[];
    upsert?: Prisma.HorarioBarberoUpsertWithWhereUniqueWithoutEstadoInput | Prisma.HorarioBarberoUpsertWithWhereUniqueWithoutEstadoInput[];
    createMany?: Prisma.HorarioBarberoCreateManyEstadoInputEnvelope;
    set?: Prisma.HorarioBarberoWhereUniqueInput | Prisma.HorarioBarberoWhereUniqueInput[];
    disconnect?: Prisma.HorarioBarberoWhereUniqueInput | Prisma.HorarioBarberoWhereUniqueInput[];
    delete?: Prisma.HorarioBarberoWhereUniqueInput | Prisma.HorarioBarberoWhereUniqueInput[];
    connect?: Prisma.HorarioBarberoWhereUniqueInput | Prisma.HorarioBarberoWhereUniqueInput[];
    update?: Prisma.HorarioBarberoUpdateWithWhereUniqueWithoutEstadoInput | Prisma.HorarioBarberoUpdateWithWhereUniqueWithoutEstadoInput[];
    updateMany?: Prisma.HorarioBarberoUpdateManyWithWhereWithoutEstadoInput | Prisma.HorarioBarberoUpdateManyWithWhereWithoutEstadoInput[];
    deleteMany?: Prisma.HorarioBarberoScalarWhereInput | Prisma.HorarioBarberoScalarWhereInput[];
};
export type HorarioBarberoUncheckedUpdateManyWithoutEstadoNestedInput = {
    create?: Prisma.XOR<Prisma.HorarioBarberoCreateWithoutEstadoInput, Prisma.HorarioBarberoUncheckedCreateWithoutEstadoInput> | Prisma.HorarioBarberoCreateWithoutEstadoInput[] | Prisma.HorarioBarberoUncheckedCreateWithoutEstadoInput[];
    connectOrCreate?: Prisma.HorarioBarberoCreateOrConnectWithoutEstadoInput | Prisma.HorarioBarberoCreateOrConnectWithoutEstadoInput[];
    upsert?: Prisma.HorarioBarberoUpsertWithWhereUniqueWithoutEstadoInput | Prisma.HorarioBarberoUpsertWithWhereUniqueWithoutEstadoInput[];
    createMany?: Prisma.HorarioBarberoCreateManyEstadoInputEnvelope;
    set?: Prisma.HorarioBarberoWhereUniqueInput | Prisma.HorarioBarberoWhereUniqueInput[];
    disconnect?: Prisma.HorarioBarberoWhereUniqueInput | Prisma.HorarioBarberoWhereUniqueInput[];
    delete?: Prisma.HorarioBarberoWhereUniqueInput | Prisma.HorarioBarberoWhereUniqueInput[];
    connect?: Prisma.HorarioBarberoWhereUniqueInput | Prisma.HorarioBarberoWhereUniqueInput[];
    update?: Prisma.HorarioBarberoUpdateWithWhereUniqueWithoutEstadoInput | Prisma.HorarioBarberoUpdateWithWhereUniqueWithoutEstadoInput[];
    updateMany?: Prisma.HorarioBarberoUpdateManyWithWhereWithoutEstadoInput | Prisma.HorarioBarberoUpdateManyWithWhereWithoutEstadoInput[];
    deleteMany?: Prisma.HorarioBarberoScalarWhereInput | Prisma.HorarioBarberoScalarWhereInput[];
};
export type HorarioBarberoCreateWithoutBarberoInput = {
    hora_inicio: string;
    hora_fin: string;
    fecha: Date | string;
    estado: Prisma.EstadoBarberoCreateNestedOneWithoutHorariosInput;
};
export type HorarioBarberoUncheckedCreateWithoutBarberoInput = {
    id_horario?: number;
    id_estado: number;
    hora_inicio: string;
    hora_fin: string;
    fecha: Date | string;
};
export type HorarioBarberoCreateOrConnectWithoutBarberoInput = {
    where: Prisma.HorarioBarberoWhereUniqueInput;
    create: Prisma.XOR<Prisma.HorarioBarberoCreateWithoutBarberoInput, Prisma.HorarioBarberoUncheckedCreateWithoutBarberoInput>;
};
export type HorarioBarberoCreateManyBarberoInputEnvelope = {
    data: Prisma.HorarioBarberoCreateManyBarberoInput | Prisma.HorarioBarberoCreateManyBarberoInput[];
};
export type HorarioBarberoUpsertWithWhereUniqueWithoutBarberoInput = {
    where: Prisma.HorarioBarberoWhereUniqueInput;
    update: Prisma.XOR<Prisma.HorarioBarberoUpdateWithoutBarberoInput, Prisma.HorarioBarberoUncheckedUpdateWithoutBarberoInput>;
    create: Prisma.XOR<Prisma.HorarioBarberoCreateWithoutBarberoInput, Prisma.HorarioBarberoUncheckedCreateWithoutBarberoInput>;
};
export type HorarioBarberoUpdateWithWhereUniqueWithoutBarberoInput = {
    where: Prisma.HorarioBarberoWhereUniqueInput;
    data: Prisma.XOR<Prisma.HorarioBarberoUpdateWithoutBarberoInput, Prisma.HorarioBarberoUncheckedUpdateWithoutBarberoInput>;
};
export type HorarioBarberoUpdateManyWithWhereWithoutBarberoInput = {
    where: Prisma.HorarioBarberoScalarWhereInput;
    data: Prisma.XOR<Prisma.HorarioBarberoUpdateManyMutationInput, Prisma.HorarioBarberoUncheckedUpdateManyWithoutBarberoInput>;
};
export type HorarioBarberoScalarWhereInput = {
    AND?: Prisma.HorarioBarberoScalarWhereInput | Prisma.HorarioBarberoScalarWhereInput[];
    OR?: Prisma.HorarioBarberoScalarWhereInput[];
    NOT?: Prisma.HorarioBarberoScalarWhereInput | Prisma.HorarioBarberoScalarWhereInput[];
    id_horario?: Prisma.IntFilter<"HorarioBarbero"> | number;
    cedula_barbero?: Prisma.StringFilter<"HorarioBarbero"> | string;
    id_estado?: Prisma.IntFilter<"HorarioBarbero"> | number;
    hora_inicio?: Prisma.StringFilter<"HorarioBarbero"> | string;
    hora_fin?: Prisma.StringFilter<"HorarioBarbero"> | string;
    fecha?: Prisma.DateTimeFilter<"HorarioBarbero"> | Date | string;
};
export type HorarioBarberoCreateWithoutEstadoInput = {
    hora_inicio: string;
    hora_fin: string;
    fecha: Date | string;
    barbero: Prisma.BarberoCreateNestedOneWithoutHorariosInput;
};
export type HorarioBarberoUncheckedCreateWithoutEstadoInput = {
    id_horario?: number;
    cedula_barbero: string;
    hora_inicio: string;
    hora_fin: string;
    fecha: Date | string;
};
export type HorarioBarberoCreateOrConnectWithoutEstadoInput = {
    where: Prisma.HorarioBarberoWhereUniqueInput;
    create: Prisma.XOR<Prisma.HorarioBarberoCreateWithoutEstadoInput, Prisma.HorarioBarberoUncheckedCreateWithoutEstadoInput>;
};
export type HorarioBarberoCreateManyEstadoInputEnvelope = {
    data: Prisma.HorarioBarberoCreateManyEstadoInput | Prisma.HorarioBarberoCreateManyEstadoInput[];
};
export type HorarioBarberoUpsertWithWhereUniqueWithoutEstadoInput = {
    where: Prisma.HorarioBarberoWhereUniqueInput;
    update: Prisma.XOR<Prisma.HorarioBarberoUpdateWithoutEstadoInput, Prisma.HorarioBarberoUncheckedUpdateWithoutEstadoInput>;
    create: Prisma.XOR<Prisma.HorarioBarberoCreateWithoutEstadoInput, Prisma.HorarioBarberoUncheckedCreateWithoutEstadoInput>;
};
export type HorarioBarberoUpdateWithWhereUniqueWithoutEstadoInput = {
    where: Prisma.HorarioBarberoWhereUniqueInput;
    data: Prisma.XOR<Prisma.HorarioBarberoUpdateWithoutEstadoInput, Prisma.HorarioBarberoUncheckedUpdateWithoutEstadoInput>;
};
export type HorarioBarberoUpdateManyWithWhereWithoutEstadoInput = {
    where: Prisma.HorarioBarberoScalarWhereInput;
    data: Prisma.XOR<Prisma.HorarioBarberoUpdateManyMutationInput, Prisma.HorarioBarberoUncheckedUpdateManyWithoutEstadoInput>;
};
export type HorarioBarberoCreateManyBarberoInput = {
    id_horario?: number;
    id_estado: number;
    hora_inicio: string;
    hora_fin: string;
    fecha: Date | string;
};
export type HorarioBarberoUpdateWithoutBarberoInput = {
    hora_inicio?: Prisma.StringFieldUpdateOperationsInput | string;
    hora_fin?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.EstadoBarberoUpdateOneRequiredWithoutHorariosNestedInput;
};
export type HorarioBarberoUncheckedUpdateWithoutBarberoInput = {
    id_horario?: Prisma.IntFieldUpdateOperationsInput | number;
    id_estado?: Prisma.IntFieldUpdateOperationsInput | number;
    hora_inicio?: Prisma.StringFieldUpdateOperationsInput | string;
    hora_fin?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HorarioBarberoUncheckedUpdateManyWithoutBarberoInput = {
    id_horario?: Prisma.IntFieldUpdateOperationsInput | number;
    id_estado?: Prisma.IntFieldUpdateOperationsInput | number;
    hora_inicio?: Prisma.StringFieldUpdateOperationsInput | string;
    hora_fin?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HorarioBarberoCreateManyEstadoInput = {
    id_horario?: number;
    cedula_barbero: string;
    hora_inicio: string;
    hora_fin: string;
    fecha: Date | string;
};
export type HorarioBarberoUpdateWithoutEstadoInput = {
    hora_inicio?: Prisma.StringFieldUpdateOperationsInput | string;
    hora_fin?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    barbero?: Prisma.BarberoUpdateOneRequiredWithoutHorariosNestedInput;
};
export type HorarioBarberoUncheckedUpdateWithoutEstadoInput = {
    id_horario?: Prisma.IntFieldUpdateOperationsInput | number;
    cedula_barbero?: Prisma.StringFieldUpdateOperationsInput | string;
    hora_inicio?: Prisma.StringFieldUpdateOperationsInput | string;
    hora_fin?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HorarioBarberoUncheckedUpdateManyWithoutEstadoInput = {
    id_horario?: Prisma.IntFieldUpdateOperationsInput | number;
    cedula_barbero?: Prisma.StringFieldUpdateOperationsInput | string;
    hora_inicio?: Prisma.StringFieldUpdateOperationsInput | string;
    hora_fin?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HorarioBarberoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_horario?: boolean;
    cedula_barbero?: boolean;
    id_estado?: boolean;
    hora_inicio?: boolean;
    hora_fin?: boolean;
    fecha?: boolean;
    barbero?: boolean | Prisma.BarberoDefaultArgs<ExtArgs>;
    estado?: boolean | Prisma.EstadoBarberoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["horarioBarbero"]>;
export type HorarioBarberoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_horario?: boolean;
    cedula_barbero?: boolean;
    id_estado?: boolean;
    hora_inicio?: boolean;
    hora_fin?: boolean;
    fecha?: boolean;
    barbero?: boolean | Prisma.BarberoDefaultArgs<ExtArgs>;
    estado?: boolean | Prisma.EstadoBarberoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["horarioBarbero"]>;
export type HorarioBarberoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_horario?: boolean;
    cedula_barbero?: boolean;
    id_estado?: boolean;
    hora_inicio?: boolean;
    hora_fin?: boolean;
    fecha?: boolean;
    barbero?: boolean | Prisma.BarberoDefaultArgs<ExtArgs>;
    estado?: boolean | Prisma.EstadoBarberoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["horarioBarbero"]>;
export type HorarioBarberoSelectScalar = {
    id_horario?: boolean;
    cedula_barbero?: boolean;
    id_estado?: boolean;
    hora_inicio?: boolean;
    hora_fin?: boolean;
    fecha?: boolean;
};
export type HorarioBarberoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_horario" | "cedula_barbero" | "id_estado" | "hora_inicio" | "hora_fin" | "fecha", ExtArgs["result"]["horarioBarbero"]>;
export type HorarioBarberoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    barbero?: boolean | Prisma.BarberoDefaultArgs<ExtArgs>;
    estado?: boolean | Prisma.EstadoBarberoDefaultArgs<ExtArgs>;
};
export type HorarioBarberoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    barbero?: boolean | Prisma.BarberoDefaultArgs<ExtArgs>;
    estado?: boolean | Prisma.EstadoBarberoDefaultArgs<ExtArgs>;
};
export type HorarioBarberoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    barbero?: boolean | Prisma.BarberoDefaultArgs<ExtArgs>;
    estado?: boolean | Prisma.EstadoBarberoDefaultArgs<ExtArgs>;
};
export type $HorarioBarberoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "HorarioBarbero";
    objects: {
        barbero: Prisma.$BarberoPayload<ExtArgs>;
        estado: Prisma.$EstadoBarberoPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_horario: number;
        cedula_barbero: string;
        id_estado: number;
        hora_inicio: string;
        hora_fin: string;
        fecha: Date;
    }, ExtArgs["result"]["horarioBarbero"]>;
    composites: {};
};
export type HorarioBarberoGetPayload<S extends boolean | null | undefined | HorarioBarberoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$HorarioBarberoPayload, S>;
export type HorarioBarberoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<HorarioBarberoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: HorarioBarberoCountAggregateInputType | true;
};
export interface HorarioBarberoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['HorarioBarbero'];
        meta: {
            name: 'HorarioBarbero';
        };
    };
    /**
     * Find zero or one HorarioBarbero that matches the filter.
     * @param {HorarioBarberoFindUniqueArgs} args - Arguments to find a HorarioBarbero
     * @example
     * // Get one HorarioBarbero
     * const horarioBarbero = await prisma.horarioBarbero.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HorarioBarberoFindUniqueArgs>(args: Prisma.SelectSubset<T, HorarioBarberoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__HorarioBarberoClient<runtime.Types.Result.GetResult<Prisma.$HorarioBarberoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one HorarioBarbero that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HorarioBarberoFindUniqueOrThrowArgs} args - Arguments to find a HorarioBarbero
     * @example
     * // Get one HorarioBarbero
     * const horarioBarbero = await prisma.horarioBarbero.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HorarioBarberoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, HorarioBarberoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__HorarioBarberoClient<runtime.Types.Result.GetResult<Prisma.$HorarioBarberoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first HorarioBarbero that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioBarberoFindFirstArgs} args - Arguments to find a HorarioBarbero
     * @example
     * // Get one HorarioBarbero
     * const horarioBarbero = await prisma.horarioBarbero.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HorarioBarberoFindFirstArgs>(args?: Prisma.SelectSubset<T, HorarioBarberoFindFirstArgs<ExtArgs>>): Prisma.Prisma__HorarioBarberoClient<runtime.Types.Result.GetResult<Prisma.$HorarioBarberoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first HorarioBarbero that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioBarberoFindFirstOrThrowArgs} args - Arguments to find a HorarioBarbero
     * @example
     * // Get one HorarioBarbero
     * const horarioBarbero = await prisma.horarioBarbero.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HorarioBarberoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, HorarioBarberoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__HorarioBarberoClient<runtime.Types.Result.GetResult<Prisma.$HorarioBarberoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more HorarioBarberos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioBarberoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HorarioBarberos
     * const horarioBarberos = await prisma.horarioBarbero.findMany()
     *
     * // Get first 10 HorarioBarberos
     * const horarioBarberos = await prisma.horarioBarbero.findMany({ take: 10 })
     *
     * // Only select the `id_horario`
     * const horarioBarberoWithId_horarioOnly = await prisma.horarioBarbero.findMany({ select: { id_horario: true } })
     *
     */
    findMany<T extends HorarioBarberoFindManyArgs>(args?: Prisma.SelectSubset<T, HorarioBarberoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HorarioBarberoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a HorarioBarbero.
     * @param {HorarioBarberoCreateArgs} args - Arguments to create a HorarioBarbero.
     * @example
     * // Create one HorarioBarbero
     * const HorarioBarbero = await prisma.horarioBarbero.create({
     *   data: {
     *     // ... data to create a HorarioBarbero
     *   }
     * })
     *
     */
    create<T extends HorarioBarberoCreateArgs>(args: Prisma.SelectSubset<T, HorarioBarberoCreateArgs<ExtArgs>>): Prisma.Prisma__HorarioBarberoClient<runtime.Types.Result.GetResult<Prisma.$HorarioBarberoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many HorarioBarberos.
     * @param {HorarioBarberoCreateManyArgs} args - Arguments to create many HorarioBarberos.
     * @example
     * // Create many HorarioBarberos
     * const horarioBarbero = await prisma.horarioBarbero.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends HorarioBarberoCreateManyArgs>(args?: Prisma.SelectSubset<T, HorarioBarberoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many HorarioBarberos and returns the data saved in the database.
     * @param {HorarioBarberoCreateManyAndReturnArgs} args - Arguments to create many HorarioBarberos.
     * @example
     * // Create many HorarioBarberos
     * const horarioBarbero = await prisma.horarioBarbero.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many HorarioBarberos and only return the `id_horario`
     * const horarioBarberoWithId_horarioOnly = await prisma.horarioBarbero.createManyAndReturn({
     *   select: { id_horario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends HorarioBarberoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, HorarioBarberoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HorarioBarberoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a HorarioBarbero.
     * @param {HorarioBarberoDeleteArgs} args - Arguments to delete one HorarioBarbero.
     * @example
     * // Delete one HorarioBarbero
     * const HorarioBarbero = await prisma.horarioBarbero.delete({
     *   where: {
     *     // ... filter to delete one HorarioBarbero
     *   }
     * })
     *
     */
    delete<T extends HorarioBarberoDeleteArgs>(args: Prisma.SelectSubset<T, HorarioBarberoDeleteArgs<ExtArgs>>): Prisma.Prisma__HorarioBarberoClient<runtime.Types.Result.GetResult<Prisma.$HorarioBarberoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one HorarioBarbero.
     * @param {HorarioBarberoUpdateArgs} args - Arguments to update one HorarioBarbero.
     * @example
     * // Update one HorarioBarbero
     * const horarioBarbero = await prisma.horarioBarbero.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends HorarioBarberoUpdateArgs>(args: Prisma.SelectSubset<T, HorarioBarberoUpdateArgs<ExtArgs>>): Prisma.Prisma__HorarioBarberoClient<runtime.Types.Result.GetResult<Prisma.$HorarioBarberoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more HorarioBarberos.
     * @param {HorarioBarberoDeleteManyArgs} args - Arguments to filter HorarioBarberos to delete.
     * @example
     * // Delete a few HorarioBarberos
     * const { count } = await prisma.horarioBarbero.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends HorarioBarberoDeleteManyArgs>(args?: Prisma.SelectSubset<T, HorarioBarberoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more HorarioBarberos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioBarberoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HorarioBarberos
     * const horarioBarbero = await prisma.horarioBarbero.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends HorarioBarberoUpdateManyArgs>(args: Prisma.SelectSubset<T, HorarioBarberoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more HorarioBarberos and returns the data updated in the database.
     * @param {HorarioBarberoUpdateManyAndReturnArgs} args - Arguments to update many HorarioBarberos.
     * @example
     * // Update many HorarioBarberos
     * const horarioBarbero = await prisma.horarioBarbero.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more HorarioBarberos and only return the `id_horario`
     * const horarioBarberoWithId_horarioOnly = await prisma.horarioBarbero.updateManyAndReturn({
     *   select: { id_horario: true },
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
    updateManyAndReturn<T extends HorarioBarberoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, HorarioBarberoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HorarioBarberoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one HorarioBarbero.
     * @param {HorarioBarberoUpsertArgs} args - Arguments to update or create a HorarioBarbero.
     * @example
     * // Update or create a HorarioBarbero
     * const horarioBarbero = await prisma.horarioBarbero.upsert({
     *   create: {
     *     // ... data to create a HorarioBarbero
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HorarioBarbero we want to update
     *   }
     * })
     */
    upsert<T extends HorarioBarberoUpsertArgs>(args: Prisma.SelectSubset<T, HorarioBarberoUpsertArgs<ExtArgs>>): Prisma.Prisma__HorarioBarberoClient<runtime.Types.Result.GetResult<Prisma.$HorarioBarberoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of HorarioBarberos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioBarberoCountArgs} args - Arguments to filter HorarioBarberos to count.
     * @example
     * // Count the number of HorarioBarberos
     * const count = await prisma.horarioBarbero.count({
     *   where: {
     *     // ... the filter for the HorarioBarberos we want to count
     *   }
     * })
    **/
    count<T extends HorarioBarberoCountArgs>(args?: Prisma.Subset<T, HorarioBarberoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], HorarioBarberoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a HorarioBarbero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioBarberoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HorarioBarberoAggregateArgs>(args: Prisma.Subset<T, HorarioBarberoAggregateArgs>): Prisma.PrismaPromise<GetHorarioBarberoAggregateType<T>>;
    /**
     * Group by HorarioBarbero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioBarberoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends HorarioBarberoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: HorarioBarberoGroupByArgs['orderBy'];
    } : {
        orderBy?: HorarioBarberoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, HorarioBarberoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHorarioBarberoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the HorarioBarbero model
     */
    readonly fields: HorarioBarberoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for HorarioBarbero.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__HorarioBarberoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    barbero<T extends Prisma.BarberoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BarberoDefaultArgs<ExtArgs>>): Prisma.Prisma__BarberoClient<runtime.Types.Result.GetResult<Prisma.$BarberoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    estado<T extends Prisma.EstadoBarberoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EstadoBarberoDefaultArgs<ExtArgs>>): Prisma.Prisma__EstadoBarberoClient<runtime.Types.Result.GetResult<Prisma.$EstadoBarberoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the HorarioBarbero model
 */
export interface HorarioBarberoFieldRefs {
    readonly id_horario: Prisma.FieldRef<"HorarioBarbero", 'Int'>;
    readonly cedula_barbero: Prisma.FieldRef<"HorarioBarbero", 'String'>;
    readonly id_estado: Prisma.FieldRef<"HorarioBarbero", 'Int'>;
    readonly hora_inicio: Prisma.FieldRef<"HorarioBarbero", 'String'>;
    readonly hora_fin: Prisma.FieldRef<"HorarioBarbero", 'String'>;
    readonly fecha: Prisma.FieldRef<"HorarioBarbero", 'DateTime'>;
}
/**
 * HorarioBarbero findUnique
 */
export type HorarioBarberoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which HorarioBarbero to fetch.
     */
    where: Prisma.HorarioBarberoWhereUniqueInput;
};
/**
 * HorarioBarbero findUniqueOrThrow
 */
export type HorarioBarberoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which HorarioBarbero to fetch.
     */
    where: Prisma.HorarioBarberoWhereUniqueInput;
};
/**
 * HorarioBarbero findFirst
 */
export type HorarioBarberoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which HorarioBarbero to fetch.
     */
    where?: Prisma.HorarioBarberoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of HorarioBarberos to fetch.
     */
    orderBy?: Prisma.HorarioBarberoOrderByWithRelationInput | Prisma.HorarioBarberoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for HorarioBarberos.
     */
    cursor?: Prisma.HorarioBarberoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` HorarioBarberos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` HorarioBarberos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of HorarioBarberos.
     */
    distinct?: Prisma.HorarioBarberoScalarFieldEnum | Prisma.HorarioBarberoScalarFieldEnum[];
};
/**
 * HorarioBarbero findFirstOrThrow
 */
export type HorarioBarberoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which HorarioBarbero to fetch.
     */
    where?: Prisma.HorarioBarberoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of HorarioBarberos to fetch.
     */
    orderBy?: Prisma.HorarioBarberoOrderByWithRelationInput | Prisma.HorarioBarberoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for HorarioBarberos.
     */
    cursor?: Prisma.HorarioBarberoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` HorarioBarberos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` HorarioBarberos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of HorarioBarberos.
     */
    distinct?: Prisma.HorarioBarberoScalarFieldEnum | Prisma.HorarioBarberoScalarFieldEnum[];
};
/**
 * HorarioBarbero findMany
 */
export type HorarioBarberoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which HorarioBarberos to fetch.
     */
    where?: Prisma.HorarioBarberoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of HorarioBarberos to fetch.
     */
    orderBy?: Prisma.HorarioBarberoOrderByWithRelationInput | Prisma.HorarioBarberoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing HorarioBarberos.
     */
    cursor?: Prisma.HorarioBarberoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` HorarioBarberos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` HorarioBarberos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of HorarioBarberos.
     */
    distinct?: Prisma.HorarioBarberoScalarFieldEnum | Prisma.HorarioBarberoScalarFieldEnum[];
};
/**
 * HorarioBarbero create
 */
export type HorarioBarberoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a HorarioBarbero.
     */
    data: Prisma.XOR<Prisma.HorarioBarberoCreateInput, Prisma.HorarioBarberoUncheckedCreateInput>;
};
/**
 * HorarioBarbero createMany
 */
export type HorarioBarberoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many HorarioBarberos.
     */
    data: Prisma.HorarioBarberoCreateManyInput | Prisma.HorarioBarberoCreateManyInput[];
};
/**
 * HorarioBarbero createManyAndReturn
 */
export type HorarioBarberoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioBarbero
     */
    select?: Prisma.HorarioBarberoSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the HorarioBarbero
     */
    omit?: Prisma.HorarioBarberoOmit<ExtArgs> | null;
    /**
     * The data used to create many HorarioBarberos.
     */
    data: Prisma.HorarioBarberoCreateManyInput | Prisma.HorarioBarberoCreateManyInput[];
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HorarioBarberoIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * HorarioBarbero update
 */
export type HorarioBarberoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a HorarioBarbero.
     */
    data: Prisma.XOR<Prisma.HorarioBarberoUpdateInput, Prisma.HorarioBarberoUncheckedUpdateInput>;
    /**
     * Choose, which HorarioBarbero to update.
     */
    where: Prisma.HorarioBarberoWhereUniqueInput;
};
/**
 * HorarioBarbero updateMany
 */
export type HorarioBarberoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update HorarioBarberos.
     */
    data: Prisma.XOR<Prisma.HorarioBarberoUpdateManyMutationInput, Prisma.HorarioBarberoUncheckedUpdateManyInput>;
    /**
     * Filter which HorarioBarberos to update
     */
    where?: Prisma.HorarioBarberoWhereInput;
    /**
     * Limit how many HorarioBarberos to update.
     */
    limit?: number;
};
/**
 * HorarioBarbero updateManyAndReturn
 */
export type HorarioBarberoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioBarbero
     */
    select?: Prisma.HorarioBarberoSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the HorarioBarbero
     */
    omit?: Prisma.HorarioBarberoOmit<ExtArgs> | null;
    /**
     * The data used to update HorarioBarberos.
     */
    data: Prisma.XOR<Prisma.HorarioBarberoUpdateManyMutationInput, Prisma.HorarioBarberoUncheckedUpdateManyInput>;
    /**
     * Filter which HorarioBarberos to update
     */
    where?: Prisma.HorarioBarberoWhereInput;
    /**
     * Limit how many HorarioBarberos to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HorarioBarberoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * HorarioBarbero upsert
 */
export type HorarioBarberoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the HorarioBarbero to update in case it exists.
     */
    where: Prisma.HorarioBarberoWhereUniqueInput;
    /**
     * In case the HorarioBarbero found by the `where` argument doesn't exist, create a new HorarioBarbero with this data.
     */
    create: Prisma.XOR<Prisma.HorarioBarberoCreateInput, Prisma.HorarioBarberoUncheckedCreateInput>;
    /**
     * In case the HorarioBarbero was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.HorarioBarberoUpdateInput, Prisma.HorarioBarberoUncheckedUpdateInput>;
};
/**
 * HorarioBarbero delete
 */
export type HorarioBarberoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which HorarioBarbero to delete.
     */
    where: Prisma.HorarioBarberoWhereUniqueInput;
};
/**
 * HorarioBarbero deleteMany
 */
export type HorarioBarberoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which HorarioBarberos to delete
     */
    where?: Prisma.HorarioBarberoWhereInput;
    /**
     * Limit how many HorarioBarberos to delete.
     */
    limit?: number;
};
/**
 * HorarioBarbero without action
 */
export type HorarioBarberoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=HorarioBarbero.d.ts.map