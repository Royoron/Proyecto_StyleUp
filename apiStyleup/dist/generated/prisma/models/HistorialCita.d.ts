import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model HistorialCita
 *
 */
export type HistorialCitaModel = runtime.Types.Result.DefaultSelection<Prisma.$HistorialCitaPayload>;
export type AggregateHistorialCita = {
    _count: HistorialCitaCountAggregateOutputType | null;
    _avg: HistorialCitaAvgAggregateOutputType | null;
    _sum: HistorialCitaSumAggregateOutputType | null;
    _min: HistorialCitaMinAggregateOutputType | null;
    _max: HistorialCitaMaxAggregateOutputType | null;
};
export type HistorialCitaAvgAggregateOutputType = {
    id_historial: number | null;
};
export type HistorialCitaSumAggregateOutputType = {
    id_historial: number | null;
};
export type HistorialCitaMinAggregateOutputType = {
    id_historial: number | null;
    cedula_cliente: string | null;
    id_cita: string | null;
    fecha: Date | null;
};
export type HistorialCitaMaxAggregateOutputType = {
    id_historial: number | null;
    cedula_cliente: string | null;
    id_cita: string | null;
    fecha: Date | null;
};
export type HistorialCitaCountAggregateOutputType = {
    id_historial: number;
    cedula_cliente: number;
    id_cita: number;
    fecha: number;
    _all: number;
};
export type HistorialCitaAvgAggregateInputType = {
    id_historial?: true;
};
export type HistorialCitaSumAggregateInputType = {
    id_historial?: true;
};
export type HistorialCitaMinAggregateInputType = {
    id_historial?: true;
    cedula_cliente?: true;
    id_cita?: true;
    fecha?: true;
};
export type HistorialCitaMaxAggregateInputType = {
    id_historial?: true;
    cedula_cliente?: true;
    id_cita?: true;
    fecha?: true;
};
export type HistorialCitaCountAggregateInputType = {
    id_historial?: true;
    cedula_cliente?: true;
    id_cita?: true;
    fecha?: true;
    _all?: true;
};
export type HistorialCitaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which HistorialCita to aggregate.
     */
    where?: Prisma.HistorialCitaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of HistorialCitas to fetch.
     */
    orderBy?: Prisma.HistorialCitaOrderByWithRelationInput | Prisma.HistorialCitaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.HistorialCitaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` HistorialCitas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` HistorialCitas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned HistorialCitas
    **/
    _count?: true | HistorialCitaCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: HistorialCitaAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: HistorialCitaSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: HistorialCitaMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: HistorialCitaMaxAggregateInputType;
};
export type GetHistorialCitaAggregateType<T extends HistorialCitaAggregateArgs> = {
    [P in keyof T & keyof AggregateHistorialCita]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateHistorialCita[P]> : Prisma.GetScalarType<T[P], AggregateHistorialCita[P]>;
};
export type HistorialCitaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HistorialCitaWhereInput;
    orderBy?: Prisma.HistorialCitaOrderByWithAggregationInput | Prisma.HistorialCitaOrderByWithAggregationInput[];
    by: Prisma.HistorialCitaScalarFieldEnum[] | Prisma.HistorialCitaScalarFieldEnum;
    having?: Prisma.HistorialCitaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: HistorialCitaCountAggregateInputType | true;
    _avg?: HistorialCitaAvgAggregateInputType;
    _sum?: HistorialCitaSumAggregateInputType;
    _min?: HistorialCitaMinAggregateInputType;
    _max?: HistorialCitaMaxAggregateInputType;
};
export type HistorialCitaGroupByOutputType = {
    id_historial: number;
    cedula_cliente: string;
    id_cita: string;
    fecha: Date;
    _count: HistorialCitaCountAggregateOutputType | null;
    _avg: HistorialCitaAvgAggregateOutputType | null;
    _sum: HistorialCitaSumAggregateOutputType | null;
    _min: HistorialCitaMinAggregateOutputType | null;
    _max: HistorialCitaMaxAggregateOutputType | null;
};
export type GetHistorialCitaGroupByPayload<T extends HistorialCitaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<HistorialCitaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof HistorialCitaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], HistorialCitaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], HistorialCitaGroupByOutputType[P]>;
}>>;
export type HistorialCitaWhereInput = {
    AND?: Prisma.HistorialCitaWhereInput | Prisma.HistorialCitaWhereInput[];
    OR?: Prisma.HistorialCitaWhereInput[];
    NOT?: Prisma.HistorialCitaWhereInput | Prisma.HistorialCitaWhereInput[];
    id_historial?: Prisma.IntFilter<"HistorialCita"> | number;
    cedula_cliente?: Prisma.StringFilter<"HistorialCita"> | string;
    id_cita?: Prisma.StringFilter<"HistorialCita"> | string;
    fecha?: Prisma.DateTimeFilter<"HistorialCita"> | Date | string;
    cliente?: Prisma.XOR<Prisma.ClienteScalarRelationFilter, Prisma.ClienteWhereInput>;
    cita?: Prisma.XOR<Prisma.CitaScalarRelationFilter, Prisma.CitaWhereInput>;
};
export type HistorialCitaOrderByWithRelationInput = {
    id_historial?: Prisma.SortOrder;
    cedula_cliente?: Prisma.SortOrder;
    id_cita?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    cliente?: Prisma.ClienteOrderByWithRelationInput;
    cita?: Prisma.CitaOrderByWithRelationInput;
};
export type HistorialCitaWhereUniqueInput = Prisma.AtLeast<{
    id_historial?: number;
    AND?: Prisma.HistorialCitaWhereInput | Prisma.HistorialCitaWhereInput[];
    OR?: Prisma.HistorialCitaWhereInput[];
    NOT?: Prisma.HistorialCitaWhereInput | Prisma.HistorialCitaWhereInput[];
    cedula_cliente?: Prisma.StringFilter<"HistorialCita"> | string;
    id_cita?: Prisma.StringFilter<"HistorialCita"> | string;
    fecha?: Prisma.DateTimeFilter<"HistorialCita"> | Date | string;
    cliente?: Prisma.XOR<Prisma.ClienteScalarRelationFilter, Prisma.ClienteWhereInput>;
    cita?: Prisma.XOR<Prisma.CitaScalarRelationFilter, Prisma.CitaWhereInput>;
}, "id_historial">;
export type HistorialCitaOrderByWithAggregationInput = {
    id_historial?: Prisma.SortOrder;
    cedula_cliente?: Prisma.SortOrder;
    id_cita?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    _count?: Prisma.HistorialCitaCountOrderByAggregateInput;
    _avg?: Prisma.HistorialCitaAvgOrderByAggregateInput;
    _max?: Prisma.HistorialCitaMaxOrderByAggregateInput;
    _min?: Prisma.HistorialCitaMinOrderByAggregateInput;
    _sum?: Prisma.HistorialCitaSumOrderByAggregateInput;
};
export type HistorialCitaScalarWhereWithAggregatesInput = {
    AND?: Prisma.HistorialCitaScalarWhereWithAggregatesInput | Prisma.HistorialCitaScalarWhereWithAggregatesInput[];
    OR?: Prisma.HistorialCitaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.HistorialCitaScalarWhereWithAggregatesInput | Prisma.HistorialCitaScalarWhereWithAggregatesInput[];
    id_historial?: Prisma.IntWithAggregatesFilter<"HistorialCita"> | number;
    cedula_cliente?: Prisma.StringWithAggregatesFilter<"HistorialCita"> | string;
    id_cita?: Prisma.StringWithAggregatesFilter<"HistorialCita"> | string;
    fecha?: Prisma.DateTimeWithAggregatesFilter<"HistorialCita"> | Date | string;
};
export type HistorialCitaCreateInput = {
    fecha?: Date | string;
    cliente: Prisma.ClienteCreateNestedOneWithoutHistorialInput;
    cita: Prisma.CitaCreateNestedOneWithoutHistorialInput;
};
export type HistorialCitaUncheckedCreateInput = {
    id_historial?: number;
    cedula_cliente: string;
    id_cita: string;
    fecha?: Date | string;
};
export type HistorialCitaUpdateInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cliente?: Prisma.ClienteUpdateOneRequiredWithoutHistorialNestedInput;
    cita?: Prisma.CitaUpdateOneRequiredWithoutHistorialNestedInput;
};
export type HistorialCitaUncheckedUpdateInput = {
    id_historial?: Prisma.IntFieldUpdateOperationsInput | number;
    cedula_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    id_cita?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HistorialCitaCreateManyInput = {
    id_historial?: number;
    cedula_cliente: string;
    id_cita: string;
    fecha?: Date | string;
};
export type HistorialCitaUpdateManyMutationInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HistorialCitaUncheckedUpdateManyInput = {
    id_historial?: Prisma.IntFieldUpdateOperationsInput | number;
    cedula_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    id_cita?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HistorialCitaListRelationFilter = {
    every?: Prisma.HistorialCitaWhereInput;
    some?: Prisma.HistorialCitaWhereInput;
    none?: Prisma.HistorialCitaWhereInput;
};
export type HistorialCitaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type HistorialCitaCountOrderByAggregateInput = {
    id_historial?: Prisma.SortOrder;
    cedula_cliente?: Prisma.SortOrder;
    id_cita?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
};
export type HistorialCitaAvgOrderByAggregateInput = {
    id_historial?: Prisma.SortOrder;
};
export type HistorialCitaMaxOrderByAggregateInput = {
    id_historial?: Prisma.SortOrder;
    cedula_cliente?: Prisma.SortOrder;
    id_cita?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
};
export type HistorialCitaMinOrderByAggregateInput = {
    id_historial?: Prisma.SortOrder;
    cedula_cliente?: Prisma.SortOrder;
    id_cita?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
};
export type HistorialCitaSumOrderByAggregateInput = {
    id_historial?: Prisma.SortOrder;
};
export type HistorialCitaCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.HistorialCitaCreateWithoutClienteInput, Prisma.HistorialCitaUncheckedCreateWithoutClienteInput> | Prisma.HistorialCitaCreateWithoutClienteInput[] | Prisma.HistorialCitaUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.HistorialCitaCreateOrConnectWithoutClienteInput | Prisma.HistorialCitaCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.HistorialCitaCreateManyClienteInputEnvelope;
    connect?: Prisma.HistorialCitaWhereUniqueInput | Prisma.HistorialCitaWhereUniqueInput[];
};
export type HistorialCitaUncheckedCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.HistorialCitaCreateWithoutClienteInput, Prisma.HistorialCitaUncheckedCreateWithoutClienteInput> | Prisma.HistorialCitaCreateWithoutClienteInput[] | Prisma.HistorialCitaUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.HistorialCitaCreateOrConnectWithoutClienteInput | Prisma.HistorialCitaCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.HistorialCitaCreateManyClienteInputEnvelope;
    connect?: Prisma.HistorialCitaWhereUniqueInput | Prisma.HistorialCitaWhereUniqueInput[];
};
export type HistorialCitaUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.HistorialCitaCreateWithoutClienteInput, Prisma.HistorialCitaUncheckedCreateWithoutClienteInput> | Prisma.HistorialCitaCreateWithoutClienteInput[] | Prisma.HistorialCitaUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.HistorialCitaCreateOrConnectWithoutClienteInput | Prisma.HistorialCitaCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.HistorialCitaUpsertWithWhereUniqueWithoutClienteInput | Prisma.HistorialCitaUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.HistorialCitaCreateManyClienteInputEnvelope;
    set?: Prisma.HistorialCitaWhereUniqueInput | Prisma.HistorialCitaWhereUniqueInput[];
    disconnect?: Prisma.HistorialCitaWhereUniqueInput | Prisma.HistorialCitaWhereUniqueInput[];
    delete?: Prisma.HistorialCitaWhereUniqueInput | Prisma.HistorialCitaWhereUniqueInput[];
    connect?: Prisma.HistorialCitaWhereUniqueInput | Prisma.HistorialCitaWhereUniqueInput[];
    update?: Prisma.HistorialCitaUpdateWithWhereUniqueWithoutClienteInput | Prisma.HistorialCitaUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.HistorialCitaUpdateManyWithWhereWithoutClienteInput | Prisma.HistorialCitaUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.HistorialCitaScalarWhereInput | Prisma.HistorialCitaScalarWhereInput[];
};
export type HistorialCitaUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.HistorialCitaCreateWithoutClienteInput, Prisma.HistorialCitaUncheckedCreateWithoutClienteInput> | Prisma.HistorialCitaCreateWithoutClienteInput[] | Prisma.HistorialCitaUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.HistorialCitaCreateOrConnectWithoutClienteInput | Prisma.HistorialCitaCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.HistorialCitaUpsertWithWhereUniqueWithoutClienteInput | Prisma.HistorialCitaUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.HistorialCitaCreateManyClienteInputEnvelope;
    set?: Prisma.HistorialCitaWhereUniqueInput | Prisma.HistorialCitaWhereUniqueInput[];
    disconnect?: Prisma.HistorialCitaWhereUniqueInput | Prisma.HistorialCitaWhereUniqueInput[];
    delete?: Prisma.HistorialCitaWhereUniqueInput | Prisma.HistorialCitaWhereUniqueInput[];
    connect?: Prisma.HistorialCitaWhereUniqueInput | Prisma.HistorialCitaWhereUniqueInput[];
    update?: Prisma.HistorialCitaUpdateWithWhereUniqueWithoutClienteInput | Prisma.HistorialCitaUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.HistorialCitaUpdateManyWithWhereWithoutClienteInput | Prisma.HistorialCitaUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.HistorialCitaScalarWhereInput | Prisma.HistorialCitaScalarWhereInput[];
};
export type HistorialCitaCreateNestedManyWithoutCitaInput = {
    create?: Prisma.XOR<Prisma.HistorialCitaCreateWithoutCitaInput, Prisma.HistorialCitaUncheckedCreateWithoutCitaInput> | Prisma.HistorialCitaCreateWithoutCitaInput[] | Prisma.HistorialCitaUncheckedCreateWithoutCitaInput[];
    connectOrCreate?: Prisma.HistorialCitaCreateOrConnectWithoutCitaInput | Prisma.HistorialCitaCreateOrConnectWithoutCitaInput[];
    createMany?: Prisma.HistorialCitaCreateManyCitaInputEnvelope;
    connect?: Prisma.HistorialCitaWhereUniqueInput | Prisma.HistorialCitaWhereUniqueInput[];
};
export type HistorialCitaUncheckedCreateNestedManyWithoutCitaInput = {
    create?: Prisma.XOR<Prisma.HistorialCitaCreateWithoutCitaInput, Prisma.HistorialCitaUncheckedCreateWithoutCitaInput> | Prisma.HistorialCitaCreateWithoutCitaInput[] | Prisma.HistorialCitaUncheckedCreateWithoutCitaInput[];
    connectOrCreate?: Prisma.HistorialCitaCreateOrConnectWithoutCitaInput | Prisma.HistorialCitaCreateOrConnectWithoutCitaInput[];
    createMany?: Prisma.HistorialCitaCreateManyCitaInputEnvelope;
    connect?: Prisma.HistorialCitaWhereUniqueInput | Prisma.HistorialCitaWhereUniqueInput[];
};
export type HistorialCitaUpdateManyWithoutCitaNestedInput = {
    create?: Prisma.XOR<Prisma.HistorialCitaCreateWithoutCitaInput, Prisma.HistorialCitaUncheckedCreateWithoutCitaInput> | Prisma.HistorialCitaCreateWithoutCitaInput[] | Prisma.HistorialCitaUncheckedCreateWithoutCitaInput[];
    connectOrCreate?: Prisma.HistorialCitaCreateOrConnectWithoutCitaInput | Prisma.HistorialCitaCreateOrConnectWithoutCitaInput[];
    upsert?: Prisma.HistorialCitaUpsertWithWhereUniqueWithoutCitaInput | Prisma.HistorialCitaUpsertWithWhereUniqueWithoutCitaInput[];
    createMany?: Prisma.HistorialCitaCreateManyCitaInputEnvelope;
    set?: Prisma.HistorialCitaWhereUniqueInput | Prisma.HistorialCitaWhereUniqueInput[];
    disconnect?: Prisma.HistorialCitaWhereUniqueInput | Prisma.HistorialCitaWhereUniqueInput[];
    delete?: Prisma.HistorialCitaWhereUniqueInput | Prisma.HistorialCitaWhereUniqueInput[];
    connect?: Prisma.HistorialCitaWhereUniqueInput | Prisma.HistorialCitaWhereUniqueInput[];
    update?: Prisma.HistorialCitaUpdateWithWhereUniqueWithoutCitaInput | Prisma.HistorialCitaUpdateWithWhereUniqueWithoutCitaInput[];
    updateMany?: Prisma.HistorialCitaUpdateManyWithWhereWithoutCitaInput | Prisma.HistorialCitaUpdateManyWithWhereWithoutCitaInput[];
    deleteMany?: Prisma.HistorialCitaScalarWhereInput | Prisma.HistorialCitaScalarWhereInput[];
};
export type HistorialCitaUncheckedUpdateManyWithoutCitaNestedInput = {
    create?: Prisma.XOR<Prisma.HistorialCitaCreateWithoutCitaInput, Prisma.HistorialCitaUncheckedCreateWithoutCitaInput> | Prisma.HistorialCitaCreateWithoutCitaInput[] | Prisma.HistorialCitaUncheckedCreateWithoutCitaInput[];
    connectOrCreate?: Prisma.HistorialCitaCreateOrConnectWithoutCitaInput | Prisma.HistorialCitaCreateOrConnectWithoutCitaInput[];
    upsert?: Prisma.HistorialCitaUpsertWithWhereUniqueWithoutCitaInput | Prisma.HistorialCitaUpsertWithWhereUniqueWithoutCitaInput[];
    createMany?: Prisma.HistorialCitaCreateManyCitaInputEnvelope;
    set?: Prisma.HistorialCitaWhereUniqueInput | Prisma.HistorialCitaWhereUniqueInput[];
    disconnect?: Prisma.HistorialCitaWhereUniqueInput | Prisma.HistorialCitaWhereUniqueInput[];
    delete?: Prisma.HistorialCitaWhereUniqueInput | Prisma.HistorialCitaWhereUniqueInput[];
    connect?: Prisma.HistorialCitaWhereUniqueInput | Prisma.HistorialCitaWhereUniqueInput[];
    update?: Prisma.HistorialCitaUpdateWithWhereUniqueWithoutCitaInput | Prisma.HistorialCitaUpdateWithWhereUniqueWithoutCitaInput[];
    updateMany?: Prisma.HistorialCitaUpdateManyWithWhereWithoutCitaInput | Prisma.HistorialCitaUpdateManyWithWhereWithoutCitaInput[];
    deleteMany?: Prisma.HistorialCitaScalarWhereInput | Prisma.HistorialCitaScalarWhereInput[];
};
export type HistorialCitaCreateWithoutClienteInput = {
    fecha?: Date | string;
    cita: Prisma.CitaCreateNestedOneWithoutHistorialInput;
};
export type HistorialCitaUncheckedCreateWithoutClienteInput = {
    id_historial?: number;
    id_cita: string;
    fecha?: Date | string;
};
export type HistorialCitaCreateOrConnectWithoutClienteInput = {
    where: Prisma.HistorialCitaWhereUniqueInput;
    create: Prisma.XOR<Prisma.HistorialCitaCreateWithoutClienteInput, Prisma.HistorialCitaUncheckedCreateWithoutClienteInput>;
};
export type HistorialCitaCreateManyClienteInputEnvelope = {
    data: Prisma.HistorialCitaCreateManyClienteInput | Prisma.HistorialCitaCreateManyClienteInput[];
};
export type HistorialCitaUpsertWithWhereUniqueWithoutClienteInput = {
    where: Prisma.HistorialCitaWhereUniqueInput;
    update: Prisma.XOR<Prisma.HistorialCitaUpdateWithoutClienteInput, Prisma.HistorialCitaUncheckedUpdateWithoutClienteInput>;
    create: Prisma.XOR<Prisma.HistorialCitaCreateWithoutClienteInput, Prisma.HistorialCitaUncheckedCreateWithoutClienteInput>;
};
export type HistorialCitaUpdateWithWhereUniqueWithoutClienteInput = {
    where: Prisma.HistorialCitaWhereUniqueInput;
    data: Prisma.XOR<Prisma.HistorialCitaUpdateWithoutClienteInput, Prisma.HistorialCitaUncheckedUpdateWithoutClienteInput>;
};
export type HistorialCitaUpdateManyWithWhereWithoutClienteInput = {
    where: Prisma.HistorialCitaScalarWhereInput;
    data: Prisma.XOR<Prisma.HistorialCitaUpdateManyMutationInput, Prisma.HistorialCitaUncheckedUpdateManyWithoutClienteInput>;
};
export type HistorialCitaScalarWhereInput = {
    AND?: Prisma.HistorialCitaScalarWhereInput | Prisma.HistorialCitaScalarWhereInput[];
    OR?: Prisma.HistorialCitaScalarWhereInput[];
    NOT?: Prisma.HistorialCitaScalarWhereInput | Prisma.HistorialCitaScalarWhereInput[];
    id_historial?: Prisma.IntFilter<"HistorialCita"> | number;
    cedula_cliente?: Prisma.StringFilter<"HistorialCita"> | string;
    id_cita?: Prisma.StringFilter<"HistorialCita"> | string;
    fecha?: Prisma.DateTimeFilter<"HistorialCita"> | Date | string;
};
export type HistorialCitaCreateWithoutCitaInput = {
    fecha?: Date | string;
    cliente: Prisma.ClienteCreateNestedOneWithoutHistorialInput;
};
export type HistorialCitaUncheckedCreateWithoutCitaInput = {
    id_historial?: number;
    cedula_cliente: string;
    fecha?: Date | string;
};
export type HistorialCitaCreateOrConnectWithoutCitaInput = {
    where: Prisma.HistorialCitaWhereUniqueInput;
    create: Prisma.XOR<Prisma.HistorialCitaCreateWithoutCitaInput, Prisma.HistorialCitaUncheckedCreateWithoutCitaInput>;
};
export type HistorialCitaCreateManyCitaInputEnvelope = {
    data: Prisma.HistorialCitaCreateManyCitaInput | Prisma.HistorialCitaCreateManyCitaInput[];
};
export type HistorialCitaUpsertWithWhereUniqueWithoutCitaInput = {
    where: Prisma.HistorialCitaWhereUniqueInput;
    update: Prisma.XOR<Prisma.HistorialCitaUpdateWithoutCitaInput, Prisma.HistorialCitaUncheckedUpdateWithoutCitaInput>;
    create: Prisma.XOR<Prisma.HistorialCitaCreateWithoutCitaInput, Prisma.HistorialCitaUncheckedCreateWithoutCitaInput>;
};
export type HistorialCitaUpdateWithWhereUniqueWithoutCitaInput = {
    where: Prisma.HistorialCitaWhereUniqueInput;
    data: Prisma.XOR<Prisma.HistorialCitaUpdateWithoutCitaInput, Prisma.HistorialCitaUncheckedUpdateWithoutCitaInput>;
};
export type HistorialCitaUpdateManyWithWhereWithoutCitaInput = {
    where: Prisma.HistorialCitaScalarWhereInput;
    data: Prisma.XOR<Prisma.HistorialCitaUpdateManyMutationInput, Prisma.HistorialCitaUncheckedUpdateManyWithoutCitaInput>;
};
export type HistorialCitaCreateManyClienteInput = {
    id_historial?: number;
    id_cita: string;
    fecha?: Date | string;
};
export type HistorialCitaUpdateWithoutClienteInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cita?: Prisma.CitaUpdateOneRequiredWithoutHistorialNestedInput;
};
export type HistorialCitaUncheckedUpdateWithoutClienteInput = {
    id_historial?: Prisma.IntFieldUpdateOperationsInput | number;
    id_cita?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HistorialCitaUncheckedUpdateManyWithoutClienteInput = {
    id_historial?: Prisma.IntFieldUpdateOperationsInput | number;
    id_cita?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HistorialCitaCreateManyCitaInput = {
    id_historial?: number;
    cedula_cliente: string;
    fecha?: Date | string;
};
export type HistorialCitaUpdateWithoutCitaInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cliente?: Prisma.ClienteUpdateOneRequiredWithoutHistorialNestedInput;
};
export type HistorialCitaUncheckedUpdateWithoutCitaInput = {
    id_historial?: Prisma.IntFieldUpdateOperationsInput | number;
    cedula_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HistorialCitaUncheckedUpdateManyWithoutCitaInput = {
    id_historial?: Prisma.IntFieldUpdateOperationsInput | number;
    cedula_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HistorialCitaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_historial?: boolean;
    cedula_cliente?: boolean;
    id_cita?: boolean;
    fecha?: boolean;
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
    cita?: boolean | Prisma.CitaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["historialCita"]>;
export type HistorialCitaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_historial?: boolean;
    cedula_cliente?: boolean;
    id_cita?: boolean;
    fecha?: boolean;
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
    cita?: boolean | Prisma.CitaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["historialCita"]>;
export type HistorialCitaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_historial?: boolean;
    cedula_cliente?: boolean;
    id_cita?: boolean;
    fecha?: boolean;
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
    cita?: boolean | Prisma.CitaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["historialCita"]>;
export type HistorialCitaSelectScalar = {
    id_historial?: boolean;
    cedula_cliente?: boolean;
    id_cita?: boolean;
    fecha?: boolean;
};
export type HistorialCitaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_historial" | "cedula_cliente" | "id_cita" | "fecha", ExtArgs["result"]["historialCita"]>;
export type HistorialCitaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
    cita?: boolean | Prisma.CitaDefaultArgs<ExtArgs>;
};
export type HistorialCitaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
    cita?: boolean | Prisma.CitaDefaultArgs<ExtArgs>;
};
export type HistorialCitaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
    cita?: boolean | Prisma.CitaDefaultArgs<ExtArgs>;
};
export type $HistorialCitaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "HistorialCita";
    objects: {
        cliente: Prisma.$ClientePayload<ExtArgs>;
        cita: Prisma.$CitaPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_historial: number;
        cedula_cliente: string;
        id_cita: string;
        fecha: Date;
    }, ExtArgs["result"]["historialCita"]>;
    composites: {};
};
export type HistorialCitaGetPayload<S extends boolean | null | undefined | HistorialCitaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$HistorialCitaPayload, S>;
export type HistorialCitaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<HistorialCitaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: HistorialCitaCountAggregateInputType | true;
};
export interface HistorialCitaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['HistorialCita'];
        meta: {
            name: 'HistorialCita';
        };
    };
    /**
     * Find zero or one HistorialCita that matches the filter.
     * @param {HistorialCitaFindUniqueArgs} args - Arguments to find a HistorialCita
     * @example
     * // Get one HistorialCita
     * const historialCita = await prisma.historialCita.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistorialCitaFindUniqueArgs>(args: Prisma.SelectSubset<T, HistorialCitaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__HistorialCitaClient<runtime.Types.Result.GetResult<Prisma.$HistorialCitaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one HistorialCita that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HistorialCitaFindUniqueOrThrowArgs} args - Arguments to find a HistorialCita
     * @example
     * // Get one HistorialCita
     * const historialCita = await prisma.historialCita.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistorialCitaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, HistorialCitaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__HistorialCitaClient<runtime.Types.Result.GetResult<Prisma.$HistorialCitaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first HistorialCita that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialCitaFindFirstArgs} args - Arguments to find a HistorialCita
     * @example
     * // Get one HistorialCita
     * const historialCita = await prisma.historialCita.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistorialCitaFindFirstArgs>(args?: Prisma.SelectSubset<T, HistorialCitaFindFirstArgs<ExtArgs>>): Prisma.Prisma__HistorialCitaClient<runtime.Types.Result.GetResult<Prisma.$HistorialCitaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first HistorialCita that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialCitaFindFirstOrThrowArgs} args - Arguments to find a HistorialCita
     * @example
     * // Get one HistorialCita
     * const historialCita = await prisma.historialCita.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistorialCitaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, HistorialCitaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__HistorialCitaClient<runtime.Types.Result.GetResult<Prisma.$HistorialCitaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more HistorialCitas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialCitaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HistorialCitas
     * const historialCitas = await prisma.historialCita.findMany()
     *
     * // Get first 10 HistorialCitas
     * const historialCitas = await prisma.historialCita.findMany({ take: 10 })
     *
     * // Only select the `id_historial`
     * const historialCitaWithId_historialOnly = await prisma.historialCita.findMany({ select: { id_historial: true } })
     *
     */
    findMany<T extends HistorialCitaFindManyArgs>(args?: Prisma.SelectSubset<T, HistorialCitaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HistorialCitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a HistorialCita.
     * @param {HistorialCitaCreateArgs} args - Arguments to create a HistorialCita.
     * @example
     * // Create one HistorialCita
     * const HistorialCita = await prisma.historialCita.create({
     *   data: {
     *     // ... data to create a HistorialCita
     *   }
     * })
     *
     */
    create<T extends HistorialCitaCreateArgs>(args: Prisma.SelectSubset<T, HistorialCitaCreateArgs<ExtArgs>>): Prisma.Prisma__HistorialCitaClient<runtime.Types.Result.GetResult<Prisma.$HistorialCitaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many HistorialCitas.
     * @param {HistorialCitaCreateManyArgs} args - Arguments to create many HistorialCitas.
     * @example
     * // Create many HistorialCitas
     * const historialCita = await prisma.historialCita.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends HistorialCitaCreateManyArgs>(args?: Prisma.SelectSubset<T, HistorialCitaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many HistorialCitas and returns the data saved in the database.
     * @param {HistorialCitaCreateManyAndReturnArgs} args - Arguments to create many HistorialCitas.
     * @example
     * // Create many HistorialCitas
     * const historialCita = await prisma.historialCita.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many HistorialCitas and only return the `id_historial`
     * const historialCitaWithId_historialOnly = await prisma.historialCita.createManyAndReturn({
     *   select: { id_historial: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends HistorialCitaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, HistorialCitaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HistorialCitaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a HistorialCita.
     * @param {HistorialCitaDeleteArgs} args - Arguments to delete one HistorialCita.
     * @example
     * // Delete one HistorialCita
     * const HistorialCita = await prisma.historialCita.delete({
     *   where: {
     *     // ... filter to delete one HistorialCita
     *   }
     * })
     *
     */
    delete<T extends HistorialCitaDeleteArgs>(args: Prisma.SelectSubset<T, HistorialCitaDeleteArgs<ExtArgs>>): Prisma.Prisma__HistorialCitaClient<runtime.Types.Result.GetResult<Prisma.$HistorialCitaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one HistorialCita.
     * @param {HistorialCitaUpdateArgs} args - Arguments to update one HistorialCita.
     * @example
     * // Update one HistorialCita
     * const historialCita = await prisma.historialCita.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends HistorialCitaUpdateArgs>(args: Prisma.SelectSubset<T, HistorialCitaUpdateArgs<ExtArgs>>): Prisma.Prisma__HistorialCitaClient<runtime.Types.Result.GetResult<Prisma.$HistorialCitaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more HistorialCitas.
     * @param {HistorialCitaDeleteManyArgs} args - Arguments to filter HistorialCitas to delete.
     * @example
     * // Delete a few HistorialCitas
     * const { count } = await prisma.historialCita.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends HistorialCitaDeleteManyArgs>(args?: Prisma.SelectSubset<T, HistorialCitaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more HistorialCitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialCitaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HistorialCitas
     * const historialCita = await prisma.historialCita.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends HistorialCitaUpdateManyArgs>(args: Prisma.SelectSubset<T, HistorialCitaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more HistorialCitas and returns the data updated in the database.
     * @param {HistorialCitaUpdateManyAndReturnArgs} args - Arguments to update many HistorialCitas.
     * @example
     * // Update many HistorialCitas
     * const historialCita = await prisma.historialCita.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more HistorialCitas and only return the `id_historial`
     * const historialCitaWithId_historialOnly = await prisma.historialCita.updateManyAndReturn({
     *   select: { id_historial: true },
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
    updateManyAndReturn<T extends HistorialCitaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, HistorialCitaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HistorialCitaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one HistorialCita.
     * @param {HistorialCitaUpsertArgs} args - Arguments to update or create a HistorialCita.
     * @example
     * // Update or create a HistorialCita
     * const historialCita = await prisma.historialCita.upsert({
     *   create: {
     *     // ... data to create a HistorialCita
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HistorialCita we want to update
     *   }
     * })
     */
    upsert<T extends HistorialCitaUpsertArgs>(args: Prisma.SelectSubset<T, HistorialCitaUpsertArgs<ExtArgs>>): Prisma.Prisma__HistorialCitaClient<runtime.Types.Result.GetResult<Prisma.$HistorialCitaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of HistorialCitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialCitaCountArgs} args - Arguments to filter HistorialCitas to count.
     * @example
     * // Count the number of HistorialCitas
     * const count = await prisma.historialCita.count({
     *   where: {
     *     // ... the filter for the HistorialCitas we want to count
     *   }
     * })
    **/
    count<T extends HistorialCitaCountArgs>(args?: Prisma.Subset<T, HistorialCitaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], HistorialCitaCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a HistorialCita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialCitaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HistorialCitaAggregateArgs>(args: Prisma.Subset<T, HistorialCitaAggregateArgs>): Prisma.PrismaPromise<GetHistorialCitaAggregateType<T>>;
    /**
     * Group by HistorialCita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialCitaGroupByArgs} args - Group by arguments.
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
    groupBy<T extends HistorialCitaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: HistorialCitaGroupByArgs['orderBy'];
    } : {
        orderBy?: HistorialCitaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, HistorialCitaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistorialCitaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the HistorialCita model
     */
    readonly fields: HistorialCitaFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for HistorialCita.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__HistorialCitaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cliente<T extends Prisma.ClienteDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClienteDefaultArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    cita<T extends Prisma.CitaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CitaDefaultArgs<ExtArgs>>): Prisma.Prisma__CitaClient<runtime.Types.Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the HistorialCita model
 */
export interface HistorialCitaFieldRefs {
    readonly id_historial: Prisma.FieldRef<"HistorialCita", 'Int'>;
    readonly cedula_cliente: Prisma.FieldRef<"HistorialCita", 'String'>;
    readonly id_cita: Prisma.FieldRef<"HistorialCita", 'String'>;
    readonly fecha: Prisma.FieldRef<"HistorialCita", 'DateTime'>;
}
/**
 * HistorialCita findUnique
 */
export type HistorialCitaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialCita
     */
    select?: Prisma.HistorialCitaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HistorialCita
     */
    omit?: Prisma.HistorialCitaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HistorialCitaInclude<ExtArgs> | null;
    /**
     * Filter, which HistorialCita to fetch.
     */
    where: Prisma.HistorialCitaWhereUniqueInput;
};
/**
 * HistorialCita findUniqueOrThrow
 */
export type HistorialCitaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialCita
     */
    select?: Prisma.HistorialCitaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HistorialCita
     */
    omit?: Prisma.HistorialCitaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HistorialCitaInclude<ExtArgs> | null;
    /**
     * Filter, which HistorialCita to fetch.
     */
    where: Prisma.HistorialCitaWhereUniqueInput;
};
/**
 * HistorialCita findFirst
 */
export type HistorialCitaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialCita
     */
    select?: Prisma.HistorialCitaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HistorialCita
     */
    omit?: Prisma.HistorialCitaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HistorialCitaInclude<ExtArgs> | null;
    /**
     * Filter, which HistorialCita to fetch.
     */
    where?: Prisma.HistorialCitaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of HistorialCitas to fetch.
     */
    orderBy?: Prisma.HistorialCitaOrderByWithRelationInput | Prisma.HistorialCitaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for HistorialCitas.
     */
    cursor?: Prisma.HistorialCitaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` HistorialCitas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` HistorialCitas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of HistorialCitas.
     */
    distinct?: Prisma.HistorialCitaScalarFieldEnum | Prisma.HistorialCitaScalarFieldEnum[];
};
/**
 * HistorialCita findFirstOrThrow
 */
export type HistorialCitaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialCita
     */
    select?: Prisma.HistorialCitaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HistorialCita
     */
    omit?: Prisma.HistorialCitaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HistorialCitaInclude<ExtArgs> | null;
    /**
     * Filter, which HistorialCita to fetch.
     */
    where?: Prisma.HistorialCitaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of HistorialCitas to fetch.
     */
    orderBy?: Prisma.HistorialCitaOrderByWithRelationInput | Prisma.HistorialCitaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for HistorialCitas.
     */
    cursor?: Prisma.HistorialCitaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` HistorialCitas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` HistorialCitas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of HistorialCitas.
     */
    distinct?: Prisma.HistorialCitaScalarFieldEnum | Prisma.HistorialCitaScalarFieldEnum[];
};
/**
 * HistorialCita findMany
 */
export type HistorialCitaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialCita
     */
    select?: Prisma.HistorialCitaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HistorialCita
     */
    omit?: Prisma.HistorialCitaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HistorialCitaInclude<ExtArgs> | null;
    /**
     * Filter, which HistorialCitas to fetch.
     */
    where?: Prisma.HistorialCitaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of HistorialCitas to fetch.
     */
    orderBy?: Prisma.HistorialCitaOrderByWithRelationInput | Prisma.HistorialCitaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing HistorialCitas.
     */
    cursor?: Prisma.HistorialCitaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` HistorialCitas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` HistorialCitas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of HistorialCitas.
     */
    distinct?: Prisma.HistorialCitaScalarFieldEnum | Prisma.HistorialCitaScalarFieldEnum[];
};
/**
 * HistorialCita create
 */
export type HistorialCitaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialCita
     */
    select?: Prisma.HistorialCitaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HistorialCita
     */
    omit?: Prisma.HistorialCitaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HistorialCitaInclude<ExtArgs> | null;
    /**
     * The data needed to create a HistorialCita.
     */
    data: Prisma.XOR<Prisma.HistorialCitaCreateInput, Prisma.HistorialCitaUncheckedCreateInput>;
};
/**
 * HistorialCita createMany
 */
export type HistorialCitaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many HistorialCitas.
     */
    data: Prisma.HistorialCitaCreateManyInput | Prisma.HistorialCitaCreateManyInput[];
};
/**
 * HistorialCita createManyAndReturn
 */
export type HistorialCitaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialCita
     */
    select?: Prisma.HistorialCitaSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the HistorialCita
     */
    omit?: Prisma.HistorialCitaOmit<ExtArgs> | null;
    /**
     * The data used to create many HistorialCitas.
     */
    data: Prisma.HistorialCitaCreateManyInput | Prisma.HistorialCitaCreateManyInput[];
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HistorialCitaIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * HistorialCita update
 */
export type HistorialCitaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialCita
     */
    select?: Prisma.HistorialCitaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HistorialCita
     */
    omit?: Prisma.HistorialCitaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HistorialCitaInclude<ExtArgs> | null;
    /**
     * The data needed to update a HistorialCita.
     */
    data: Prisma.XOR<Prisma.HistorialCitaUpdateInput, Prisma.HistorialCitaUncheckedUpdateInput>;
    /**
     * Choose, which HistorialCita to update.
     */
    where: Prisma.HistorialCitaWhereUniqueInput;
};
/**
 * HistorialCita updateMany
 */
export type HistorialCitaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update HistorialCitas.
     */
    data: Prisma.XOR<Prisma.HistorialCitaUpdateManyMutationInput, Prisma.HistorialCitaUncheckedUpdateManyInput>;
    /**
     * Filter which HistorialCitas to update
     */
    where?: Prisma.HistorialCitaWhereInput;
    /**
     * Limit how many HistorialCitas to update.
     */
    limit?: number;
};
/**
 * HistorialCita updateManyAndReturn
 */
export type HistorialCitaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialCita
     */
    select?: Prisma.HistorialCitaSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the HistorialCita
     */
    omit?: Prisma.HistorialCitaOmit<ExtArgs> | null;
    /**
     * The data used to update HistorialCitas.
     */
    data: Prisma.XOR<Prisma.HistorialCitaUpdateManyMutationInput, Prisma.HistorialCitaUncheckedUpdateManyInput>;
    /**
     * Filter which HistorialCitas to update
     */
    where?: Prisma.HistorialCitaWhereInput;
    /**
     * Limit how many HistorialCitas to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HistorialCitaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * HistorialCita upsert
 */
export type HistorialCitaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialCita
     */
    select?: Prisma.HistorialCitaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HistorialCita
     */
    omit?: Prisma.HistorialCitaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HistorialCitaInclude<ExtArgs> | null;
    /**
     * The filter to search for the HistorialCita to update in case it exists.
     */
    where: Prisma.HistorialCitaWhereUniqueInput;
    /**
     * In case the HistorialCita found by the `where` argument doesn't exist, create a new HistorialCita with this data.
     */
    create: Prisma.XOR<Prisma.HistorialCitaCreateInput, Prisma.HistorialCitaUncheckedCreateInput>;
    /**
     * In case the HistorialCita was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.HistorialCitaUpdateInput, Prisma.HistorialCitaUncheckedUpdateInput>;
};
/**
 * HistorialCita delete
 */
export type HistorialCitaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialCita
     */
    select?: Prisma.HistorialCitaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HistorialCita
     */
    omit?: Prisma.HistorialCitaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HistorialCitaInclude<ExtArgs> | null;
    /**
     * Filter which HistorialCita to delete.
     */
    where: Prisma.HistorialCitaWhereUniqueInput;
};
/**
 * HistorialCita deleteMany
 */
export type HistorialCitaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which HistorialCitas to delete
     */
    where?: Prisma.HistorialCitaWhereInput;
    /**
     * Limit how many HistorialCitas to delete.
     */
    limit?: number;
};
/**
 * HistorialCita without action
 */
export type HistorialCitaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialCita
     */
    select?: Prisma.HistorialCitaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HistorialCita
     */
    omit?: Prisma.HistorialCitaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HistorialCitaInclude<ExtArgs> | null;
};
//# sourceMappingURL=HistorialCita.d.ts.map