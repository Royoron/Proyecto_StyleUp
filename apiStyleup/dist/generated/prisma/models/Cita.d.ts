import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Cita
 *
 */
export type CitaModel = runtime.Types.Result.DefaultSelection<Prisma.$CitaPayload>;
export type AggregateCita = {
    _count: CitaCountAggregateOutputType | null;
    _avg: CitaAvgAggregateOutputType | null;
    _sum: CitaSumAggregateOutputType | null;
    _min: CitaMinAggregateOutputType | null;
    _max: CitaMaxAggregateOutputType | null;
};
export type CitaAvgAggregateOutputType = {
    id_especialidad: number | null;
};
export type CitaSumAggregateOutputType = {
    id_especialidad: number | null;
};
export type CitaMinAggregateOutputType = {
    id_cita: string | null;
    cedula_cliente: string | null;
    cedula_barbero: string | null;
    id_especialidad: number | null;
    fecha: Date | null;
    hora: string | null;
    estado: string | null;
};
export type CitaMaxAggregateOutputType = {
    id_cita: string | null;
    cedula_cliente: string | null;
    cedula_barbero: string | null;
    id_especialidad: number | null;
    fecha: Date | null;
    hora: string | null;
    estado: string | null;
};
export type CitaCountAggregateOutputType = {
    id_cita: number;
    cedula_cliente: number;
    cedula_barbero: number;
    id_especialidad: number;
    fecha: number;
    hora: number;
    estado: number;
    _all: number;
};
export type CitaAvgAggregateInputType = {
    id_especialidad?: true;
};
export type CitaSumAggregateInputType = {
    id_especialidad?: true;
};
export type CitaMinAggregateInputType = {
    id_cita?: true;
    cedula_cliente?: true;
    cedula_barbero?: true;
    id_especialidad?: true;
    fecha?: true;
    hora?: true;
    estado?: true;
};
export type CitaMaxAggregateInputType = {
    id_cita?: true;
    cedula_cliente?: true;
    cedula_barbero?: true;
    id_especialidad?: true;
    fecha?: true;
    hora?: true;
    estado?: true;
};
export type CitaCountAggregateInputType = {
    id_cita?: true;
    cedula_cliente?: true;
    cedula_barbero?: true;
    id_especialidad?: true;
    fecha?: true;
    hora?: true;
    estado?: true;
    _all?: true;
};
export type CitaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Cita to aggregate.
     */
    where?: Prisma.CitaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Citas to fetch.
     */
    orderBy?: Prisma.CitaOrderByWithRelationInput | Prisma.CitaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.CitaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Citas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Citas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Citas
    **/
    _count?: true | CitaCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: CitaAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: CitaSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CitaMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CitaMaxAggregateInputType;
};
export type GetCitaAggregateType<T extends CitaAggregateArgs> = {
    [P in keyof T & keyof AggregateCita]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCita[P]> : Prisma.GetScalarType<T[P], AggregateCita[P]>;
};
export type CitaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CitaWhereInput;
    orderBy?: Prisma.CitaOrderByWithAggregationInput | Prisma.CitaOrderByWithAggregationInput[];
    by: Prisma.CitaScalarFieldEnum[] | Prisma.CitaScalarFieldEnum;
    having?: Prisma.CitaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CitaCountAggregateInputType | true;
    _avg?: CitaAvgAggregateInputType;
    _sum?: CitaSumAggregateInputType;
    _min?: CitaMinAggregateInputType;
    _max?: CitaMaxAggregateInputType;
};
export type CitaGroupByOutputType = {
    id_cita: string;
    cedula_cliente: string;
    cedula_barbero: string;
    id_especialidad: number;
    fecha: Date;
    hora: string;
    estado: string;
    _count: CitaCountAggregateOutputType | null;
    _avg: CitaAvgAggregateOutputType | null;
    _sum: CitaSumAggregateOutputType | null;
    _min: CitaMinAggregateOutputType | null;
    _max: CitaMaxAggregateOutputType | null;
};
export type GetCitaGroupByPayload<T extends CitaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CitaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CitaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CitaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CitaGroupByOutputType[P]>;
}>>;
export type CitaWhereInput = {
    AND?: Prisma.CitaWhereInput | Prisma.CitaWhereInput[];
    OR?: Prisma.CitaWhereInput[];
    NOT?: Prisma.CitaWhereInput | Prisma.CitaWhereInput[];
    id_cita?: Prisma.StringFilter<"Cita"> | string;
    cedula_cliente?: Prisma.StringFilter<"Cita"> | string;
    cedula_barbero?: Prisma.StringFilter<"Cita"> | string;
    id_especialidad?: Prisma.IntFilter<"Cita"> | number;
    fecha?: Prisma.DateTimeFilter<"Cita"> | Date | string;
    hora?: Prisma.StringFilter<"Cita"> | string;
    estado?: Prisma.StringFilter<"Cita"> | string;
    cliente?: Prisma.XOR<Prisma.ClienteScalarRelationFilter, Prisma.ClienteWhereInput>;
    barbero?: Prisma.XOR<Prisma.BarberoScalarRelationFilter, Prisma.BarberoWhereInput>;
    especialidad?: Prisma.XOR<Prisma.EspecialidadScalarRelationFilter, Prisma.EspecialidadWhereInput>;
    historial?: Prisma.HistorialCitaListRelationFilter;
};
export type CitaOrderByWithRelationInput = {
    id_cita?: Prisma.SortOrder;
    cedula_cliente?: Prisma.SortOrder;
    cedula_barbero?: Prisma.SortOrder;
    id_especialidad?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    hora?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    cliente?: Prisma.ClienteOrderByWithRelationInput;
    barbero?: Prisma.BarberoOrderByWithRelationInput;
    especialidad?: Prisma.EspecialidadOrderByWithRelationInput;
    historial?: Prisma.HistorialCitaOrderByRelationAggregateInput;
};
export type CitaWhereUniqueInput = Prisma.AtLeast<{
    id_cita?: string;
    AND?: Prisma.CitaWhereInput | Prisma.CitaWhereInput[];
    OR?: Prisma.CitaWhereInput[];
    NOT?: Prisma.CitaWhereInput | Prisma.CitaWhereInput[];
    cedula_cliente?: Prisma.StringFilter<"Cita"> | string;
    cedula_barbero?: Prisma.StringFilter<"Cita"> | string;
    id_especialidad?: Prisma.IntFilter<"Cita"> | number;
    fecha?: Prisma.DateTimeFilter<"Cita"> | Date | string;
    hora?: Prisma.StringFilter<"Cita"> | string;
    estado?: Prisma.StringFilter<"Cita"> | string;
    cliente?: Prisma.XOR<Prisma.ClienteScalarRelationFilter, Prisma.ClienteWhereInput>;
    barbero?: Prisma.XOR<Prisma.BarberoScalarRelationFilter, Prisma.BarberoWhereInput>;
    especialidad?: Prisma.XOR<Prisma.EspecialidadScalarRelationFilter, Prisma.EspecialidadWhereInput>;
    historial?: Prisma.HistorialCitaListRelationFilter;
}, "id_cita">;
export type CitaOrderByWithAggregationInput = {
    id_cita?: Prisma.SortOrder;
    cedula_cliente?: Prisma.SortOrder;
    cedula_barbero?: Prisma.SortOrder;
    id_especialidad?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    hora?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    _count?: Prisma.CitaCountOrderByAggregateInput;
    _avg?: Prisma.CitaAvgOrderByAggregateInput;
    _max?: Prisma.CitaMaxOrderByAggregateInput;
    _min?: Prisma.CitaMinOrderByAggregateInput;
    _sum?: Prisma.CitaSumOrderByAggregateInput;
};
export type CitaScalarWhereWithAggregatesInput = {
    AND?: Prisma.CitaScalarWhereWithAggregatesInput | Prisma.CitaScalarWhereWithAggregatesInput[];
    OR?: Prisma.CitaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CitaScalarWhereWithAggregatesInput | Prisma.CitaScalarWhereWithAggregatesInput[];
    id_cita?: Prisma.StringWithAggregatesFilter<"Cita"> | string;
    cedula_cliente?: Prisma.StringWithAggregatesFilter<"Cita"> | string;
    cedula_barbero?: Prisma.StringWithAggregatesFilter<"Cita"> | string;
    id_especialidad?: Prisma.IntWithAggregatesFilter<"Cita"> | number;
    fecha?: Prisma.DateTimeWithAggregatesFilter<"Cita"> | Date | string;
    hora?: Prisma.StringWithAggregatesFilter<"Cita"> | string;
    estado?: Prisma.StringWithAggregatesFilter<"Cita"> | string;
};
export type CitaCreateInput = {
    id_cita?: string;
    fecha: Date | string;
    hora: string;
    estado?: string;
    cliente: Prisma.ClienteCreateNestedOneWithoutCitasInput;
    barbero: Prisma.BarberoCreateNestedOneWithoutCitasInput;
    especialidad: Prisma.EspecialidadCreateNestedOneWithoutCitasInput;
    historial?: Prisma.HistorialCitaCreateNestedManyWithoutCitaInput;
};
export type CitaUncheckedCreateInput = {
    id_cita?: string;
    cedula_cliente: string;
    cedula_barbero: string;
    id_especialidad: number;
    fecha: Date | string;
    hora: string;
    estado?: string;
    historial?: Prisma.HistorialCitaUncheckedCreateNestedManyWithoutCitaInput;
};
export type CitaUpdateInput = {
    id_cita?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    cliente?: Prisma.ClienteUpdateOneRequiredWithoutCitasNestedInput;
    barbero?: Prisma.BarberoUpdateOneRequiredWithoutCitasNestedInput;
    especialidad?: Prisma.EspecialidadUpdateOneRequiredWithoutCitasNestedInput;
    historial?: Prisma.HistorialCitaUpdateManyWithoutCitaNestedInput;
};
export type CitaUncheckedUpdateInput = {
    id_cita?: Prisma.StringFieldUpdateOperationsInput | string;
    cedula_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    cedula_barbero?: Prisma.StringFieldUpdateOperationsInput | string;
    id_especialidad?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    historial?: Prisma.HistorialCitaUncheckedUpdateManyWithoutCitaNestedInput;
};
export type CitaCreateManyInput = {
    id_cita?: string;
    cedula_cliente: string;
    cedula_barbero: string;
    id_especialidad: number;
    fecha: Date | string;
    hora: string;
    estado?: string;
};
export type CitaUpdateManyMutationInput = {
    id_cita?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CitaUncheckedUpdateManyInput = {
    id_cita?: Prisma.StringFieldUpdateOperationsInput | string;
    cedula_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    cedula_barbero?: Prisma.StringFieldUpdateOperationsInput | string;
    id_especialidad?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CitaListRelationFilter = {
    every?: Prisma.CitaWhereInput;
    some?: Prisma.CitaWhereInput;
    none?: Prisma.CitaWhereInput;
};
export type CitaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CitaCountOrderByAggregateInput = {
    id_cita?: Prisma.SortOrder;
    cedula_cliente?: Prisma.SortOrder;
    cedula_barbero?: Prisma.SortOrder;
    id_especialidad?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    hora?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type CitaAvgOrderByAggregateInput = {
    id_especialidad?: Prisma.SortOrder;
};
export type CitaMaxOrderByAggregateInput = {
    id_cita?: Prisma.SortOrder;
    cedula_cliente?: Prisma.SortOrder;
    cedula_barbero?: Prisma.SortOrder;
    id_especialidad?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    hora?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type CitaMinOrderByAggregateInput = {
    id_cita?: Prisma.SortOrder;
    cedula_cliente?: Prisma.SortOrder;
    cedula_barbero?: Prisma.SortOrder;
    id_especialidad?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    hora?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type CitaSumOrderByAggregateInput = {
    id_especialidad?: Prisma.SortOrder;
};
export type CitaScalarRelationFilter = {
    is?: Prisma.CitaWhereInput;
    isNot?: Prisma.CitaWhereInput;
};
export type CitaCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.CitaCreateWithoutClienteInput, Prisma.CitaUncheckedCreateWithoutClienteInput> | Prisma.CitaCreateWithoutClienteInput[] | Prisma.CitaUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.CitaCreateOrConnectWithoutClienteInput | Prisma.CitaCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.CitaCreateManyClienteInputEnvelope;
    connect?: Prisma.CitaWhereUniqueInput | Prisma.CitaWhereUniqueInput[];
};
export type CitaUncheckedCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.CitaCreateWithoutClienteInput, Prisma.CitaUncheckedCreateWithoutClienteInput> | Prisma.CitaCreateWithoutClienteInput[] | Prisma.CitaUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.CitaCreateOrConnectWithoutClienteInput | Prisma.CitaCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.CitaCreateManyClienteInputEnvelope;
    connect?: Prisma.CitaWhereUniqueInput | Prisma.CitaWhereUniqueInput[];
};
export type CitaUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.CitaCreateWithoutClienteInput, Prisma.CitaUncheckedCreateWithoutClienteInput> | Prisma.CitaCreateWithoutClienteInput[] | Prisma.CitaUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.CitaCreateOrConnectWithoutClienteInput | Prisma.CitaCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.CitaUpsertWithWhereUniqueWithoutClienteInput | Prisma.CitaUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.CitaCreateManyClienteInputEnvelope;
    set?: Prisma.CitaWhereUniqueInput | Prisma.CitaWhereUniqueInput[];
    disconnect?: Prisma.CitaWhereUniqueInput | Prisma.CitaWhereUniqueInput[];
    delete?: Prisma.CitaWhereUniqueInput | Prisma.CitaWhereUniqueInput[];
    connect?: Prisma.CitaWhereUniqueInput | Prisma.CitaWhereUniqueInput[];
    update?: Prisma.CitaUpdateWithWhereUniqueWithoutClienteInput | Prisma.CitaUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.CitaUpdateManyWithWhereWithoutClienteInput | Prisma.CitaUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.CitaScalarWhereInput | Prisma.CitaScalarWhereInput[];
};
export type CitaUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.CitaCreateWithoutClienteInput, Prisma.CitaUncheckedCreateWithoutClienteInput> | Prisma.CitaCreateWithoutClienteInput[] | Prisma.CitaUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.CitaCreateOrConnectWithoutClienteInput | Prisma.CitaCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.CitaUpsertWithWhereUniqueWithoutClienteInput | Prisma.CitaUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.CitaCreateManyClienteInputEnvelope;
    set?: Prisma.CitaWhereUniqueInput | Prisma.CitaWhereUniqueInput[];
    disconnect?: Prisma.CitaWhereUniqueInput | Prisma.CitaWhereUniqueInput[];
    delete?: Prisma.CitaWhereUniqueInput | Prisma.CitaWhereUniqueInput[];
    connect?: Prisma.CitaWhereUniqueInput | Prisma.CitaWhereUniqueInput[];
    update?: Prisma.CitaUpdateWithWhereUniqueWithoutClienteInput | Prisma.CitaUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.CitaUpdateManyWithWhereWithoutClienteInput | Prisma.CitaUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.CitaScalarWhereInput | Prisma.CitaScalarWhereInput[];
};
export type CitaCreateNestedManyWithoutBarberoInput = {
    create?: Prisma.XOR<Prisma.CitaCreateWithoutBarberoInput, Prisma.CitaUncheckedCreateWithoutBarberoInput> | Prisma.CitaCreateWithoutBarberoInput[] | Prisma.CitaUncheckedCreateWithoutBarberoInput[];
    connectOrCreate?: Prisma.CitaCreateOrConnectWithoutBarberoInput | Prisma.CitaCreateOrConnectWithoutBarberoInput[];
    createMany?: Prisma.CitaCreateManyBarberoInputEnvelope;
    connect?: Prisma.CitaWhereUniqueInput | Prisma.CitaWhereUniqueInput[];
};
export type CitaUncheckedCreateNestedManyWithoutBarberoInput = {
    create?: Prisma.XOR<Prisma.CitaCreateWithoutBarberoInput, Prisma.CitaUncheckedCreateWithoutBarberoInput> | Prisma.CitaCreateWithoutBarberoInput[] | Prisma.CitaUncheckedCreateWithoutBarberoInput[];
    connectOrCreate?: Prisma.CitaCreateOrConnectWithoutBarberoInput | Prisma.CitaCreateOrConnectWithoutBarberoInput[];
    createMany?: Prisma.CitaCreateManyBarberoInputEnvelope;
    connect?: Prisma.CitaWhereUniqueInput | Prisma.CitaWhereUniqueInput[];
};
export type CitaUpdateManyWithoutBarberoNestedInput = {
    create?: Prisma.XOR<Prisma.CitaCreateWithoutBarberoInput, Prisma.CitaUncheckedCreateWithoutBarberoInput> | Prisma.CitaCreateWithoutBarberoInput[] | Prisma.CitaUncheckedCreateWithoutBarberoInput[];
    connectOrCreate?: Prisma.CitaCreateOrConnectWithoutBarberoInput | Prisma.CitaCreateOrConnectWithoutBarberoInput[];
    upsert?: Prisma.CitaUpsertWithWhereUniqueWithoutBarberoInput | Prisma.CitaUpsertWithWhereUniqueWithoutBarberoInput[];
    createMany?: Prisma.CitaCreateManyBarberoInputEnvelope;
    set?: Prisma.CitaWhereUniqueInput | Prisma.CitaWhereUniqueInput[];
    disconnect?: Prisma.CitaWhereUniqueInput | Prisma.CitaWhereUniqueInput[];
    delete?: Prisma.CitaWhereUniqueInput | Prisma.CitaWhereUniqueInput[];
    connect?: Prisma.CitaWhereUniqueInput | Prisma.CitaWhereUniqueInput[];
    update?: Prisma.CitaUpdateWithWhereUniqueWithoutBarberoInput | Prisma.CitaUpdateWithWhereUniqueWithoutBarberoInput[];
    updateMany?: Prisma.CitaUpdateManyWithWhereWithoutBarberoInput | Prisma.CitaUpdateManyWithWhereWithoutBarberoInput[];
    deleteMany?: Prisma.CitaScalarWhereInput | Prisma.CitaScalarWhereInput[];
};
export type CitaUncheckedUpdateManyWithoutBarberoNestedInput = {
    create?: Prisma.XOR<Prisma.CitaCreateWithoutBarberoInput, Prisma.CitaUncheckedCreateWithoutBarberoInput> | Prisma.CitaCreateWithoutBarberoInput[] | Prisma.CitaUncheckedCreateWithoutBarberoInput[];
    connectOrCreate?: Prisma.CitaCreateOrConnectWithoutBarberoInput | Prisma.CitaCreateOrConnectWithoutBarberoInput[];
    upsert?: Prisma.CitaUpsertWithWhereUniqueWithoutBarberoInput | Prisma.CitaUpsertWithWhereUniqueWithoutBarberoInput[];
    createMany?: Prisma.CitaCreateManyBarberoInputEnvelope;
    set?: Prisma.CitaWhereUniqueInput | Prisma.CitaWhereUniqueInput[];
    disconnect?: Prisma.CitaWhereUniqueInput | Prisma.CitaWhereUniqueInput[];
    delete?: Prisma.CitaWhereUniqueInput | Prisma.CitaWhereUniqueInput[];
    connect?: Prisma.CitaWhereUniqueInput | Prisma.CitaWhereUniqueInput[];
    update?: Prisma.CitaUpdateWithWhereUniqueWithoutBarberoInput | Prisma.CitaUpdateWithWhereUniqueWithoutBarberoInput[];
    updateMany?: Prisma.CitaUpdateManyWithWhereWithoutBarberoInput | Prisma.CitaUpdateManyWithWhereWithoutBarberoInput[];
    deleteMany?: Prisma.CitaScalarWhereInput | Prisma.CitaScalarWhereInput[];
};
export type CitaCreateNestedManyWithoutEspecialidadInput = {
    create?: Prisma.XOR<Prisma.CitaCreateWithoutEspecialidadInput, Prisma.CitaUncheckedCreateWithoutEspecialidadInput> | Prisma.CitaCreateWithoutEspecialidadInput[] | Prisma.CitaUncheckedCreateWithoutEspecialidadInput[];
    connectOrCreate?: Prisma.CitaCreateOrConnectWithoutEspecialidadInput | Prisma.CitaCreateOrConnectWithoutEspecialidadInput[];
    createMany?: Prisma.CitaCreateManyEspecialidadInputEnvelope;
    connect?: Prisma.CitaWhereUniqueInput | Prisma.CitaWhereUniqueInput[];
};
export type CitaUncheckedCreateNestedManyWithoutEspecialidadInput = {
    create?: Prisma.XOR<Prisma.CitaCreateWithoutEspecialidadInput, Prisma.CitaUncheckedCreateWithoutEspecialidadInput> | Prisma.CitaCreateWithoutEspecialidadInput[] | Prisma.CitaUncheckedCreateWithoutEspecialidadInput[];
    connectOrCreate?: Prisma.CitaCreateOrConnectWithoutEspecialidadInput | Prisma.CitaCreateOrConnectWithoutEspecialidadInput[];
    createMany?: Prisma.CitaCreateManyEspecialidadInputEnvelope;
    connect?: Prisma.CitaWhereUniqueInput | Prisma.CitaWhereUniqueInput[];
};
export type CitaUpdateManyWithoutEspecialidadNestedInput = {
    create?: Prisma.XOR<Prisma.CitaCreateWithoutEspecialidadInput, Prisma.CitaUncheckedCreateWithoutEspecialidadInput> | Prisma.CitaCreateWithoutEspecialidadInput[] | Prisma.CitaUncheckedCreateWithoutEspecialidadInput[];
    connectOrCreate?: Prisma.CitaCreateOrConnectWithoutEspecialidadInput | Prisma.CitaCreateOrConnectWithoutEspecialidadInput[];
    upsert?: Prisma.CitaUpsertWithWhereUniqueWithoutEspecialidadInput | Prisma.CitaUpsertWithWhereUniqueWithoutEspecialidadInput[];
    createMany?: Prisma.CitaCreateManyEspecialidadInputEnvelope;
    set?: Prisma.CitaWhereUniqueInput | Prisma.CitaWhereUniqueInput[];
    disconnect?: Prisma.CitaWhereUniqueInput | Prisma.CitaWhereUniqueInput[];
    delete?: Prisma.CitaWhereUniqueInput | Prisma.CitaWhereUniqueInput[];
    connect?: Prisma.CitaWhereUniqueInput | Prisma.CitaWhereUniqueInput[];
    update?: Prisma.CitaUpdateWithWhereUniqueWithoutEspecialidadInput | Prisma.CitaUpdateWithWhereUniqueWithoutEspecialidadInput[];
    updateMany?: Prisma.CitaUpdateManyWithWhereWithoutEspecialidadInput | Prisma.CitaUpdateManyWithWhereWithoutEspecialidadInput[];
    deleteMany?: Prisma.CitaScalarWhereInput | Prisma.CitaScalarWhereInput[];
};
export type CitaUncheckedUpdateManyWithoutEspecialidadNestedInput = {
    create?: Prisma.XOR<Prisma.CitaCreateWithoutEspecialidadInput, Prisma.CitaUncheckedCreateWithoutEspecialidadInput> | Prisma.CitaCreateWithoutEspecialidadInput[] | Prisma.CitaUncheckedCreateWithoutEspecialidadInput[];
    connectOrCreate?: Prisma.CitaCreateOrConnectWithoutEspecialidadInput | Prisma.CitaCreateOrConnectWithoutEspecialidadInput[];
    upsert?: Prisma.CitaUpsertWithWhereUniqueWithoutEspecialidadInput | Prisma.CitaUpsertWithWhereUniqueWithoutEspecialidadInput[];
    createMany?: Prisma.CitaCreateManyEspecialidadInputEnvelope;
    set?: Prisma.CitaWhereUniqueInput | Prisma.CitaWhereUniqueInput[];
    disconnect?: Prisma.CitaWhereUniqueInput | Prisma.CitaWhereUniqueInput[];
    delete?: Prisma.CitaWhereUniqueInput | Prisma.CitaWhereUniqueInput[];
    connect?: Prisma.CitaWhereUniqueInput | Prisma.CitaWhereUniqueInput[];
    update?: Prisma.CitaUpdateWithWhereUniqueWithoutEspecialidadInput | Prisma.CitaUpdateWithWhereUniqueWithoutEspecialidadInput[];
    updateMany?: Prisma.CitaUpdateManyWithWhereWithoutEspecialidadInput | Prisma.CitaUpdateManyWithWhereWithoutEspecialidadInput[];
    deleteMany?: Prisma.CitaScalarWhereInput | Prisma.CitaScalarWhereInput[];
};
export type CitaCreateNestedOneWithoutHistorialInput = {
    create?: Prisma.XOR<Prisma.CitaCreateWithoutHistorialInput, Prisma.CitaUncheckedCreateWithoutHistorialInput>;
    connectOrCreate?: Prisma.CitaCreateOrConnectWithoutHistorialInput;
    connect?: Prisma.CitaWhereUniqueInput;
};
export type CitaUpdateOneRequiredWithoutHistorialNestedInput = {
    create?: Prisma.XOR<Prisma.CitaCreateWithoutHistorialInput, Prisma.CitaUncheckedCreateWithoutHistorialInput>;
    connectOrCreate?: Prisma.CitaCreateOrConnectWithoutHistorialInput;
    upsert?: Prisma.CitaUpsertWithoutHistorialInput;
    connect?: Prisma.CitaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CitaUpdateToOneWithWhereWithoutHistorialInput, Prisma.CitaUpdateWithoutHistorialInput>, Prisma.CitaUncheckedUpdateWithoutHistorialInput>;
};
export type CitaCreateWithoutClienteInput = {
    id_cita?: string;
    fecha: Date | string;
    hora: string;
    estado?: string;
    barbero: Prisma.BarberoCreateNestedOneWithoutCitasInput;
    especialidad: Prisma.EspecialidadCreateNestedOneWithoutCitasInput;
    historial?: Prisma.HistorialCitaCreateNestedManyWithoutCitaInput;
};
export type CitaUncheckedCreateWithoutClienteInput = {
    id_cita?: string;
    cedula_barbero: string;
    id_especialidad: number;
    fecha: Date | string;
    hora: string;
    estado?: string;
    historial?: Prisma.HistorialCitaUncheckedCreateNestedManyWithoutCitaInput;
};
export type CitaCreateOrConnectWithoutClienteInput = {
    where: Prisma.CitaWhereUniqueInput;
    create: Prisma.XOR<Prisma.CitaCreateWithoutClienteInput, Prisma.CitaUncheckedCreateWithoutClienteInput>;
};
export type CitaCreateManyClienteInputEnvelope = {
    data: Prisma.CitaCreateManyClienteInput | Prisma.CitaCreateManyClienteInput[];
};
export type CitaUpsertWithWhereUniqueWithoutClienteInput = {
    where: Prisma.CitaWhereUniqueInput;
    update: Prisma.XOR<Prisma.CitaUpdateWithoutClienteInput, Prisma.CitaUncheckedUpdateWithoutClienteInput>;
    create: Prisma.XOR<Prisma.CitaCreateWithoutClienteInput, Prisma.CitaUncheckedCreateWithoutClienteInput>;
};
export type CitaUpdateWithWhereUniqueWithoutClienteInput = {
    where: Prisma.CitaWhereUniqueInput;
    data: Prisma.XOR<Prisma.CitaUpdateWithoutClienteInput, Prisma.CitaUncheckedUpdateWithoutClienteInput>;
};
export type CitaUpdateManyWithWhereWithoutClienteInput = {
    where: Prisma.CitaScalarWhereInput;
    data: Prisma.XOR<Prisma.CitaUpdateManyMutationInput, Prisma.CitaUncheckedUpdateManyWithoutClienteInput>;
};
export type CitaScalarWhereInput = {
    AND?: Prisma.CitaScalarWhereInput | Prisma.CitaScalarWhereInput[];
    OR?: Prisma.CitaScalarWhereInput[];
    NOT?: Prisma.CitaScalarWhereInput | Prisma.CitaScalarWhereInput[];
    id_cita?: Prisma.StringFilter<"Cita"> | string;
    cedula_cliente?: Prisma.StringFilter<"Cita"> | string;
    cedula_barbero?: Prisma.StringFilter<"Cita"> | string;
    id_especialidad?: Prisma.IntFilter<"Cita"> | number;
    fecha?: Prisma.DateTimeFilter<"Cita"> | Date | string;
    hora?: Prisma.StringFilter<"Cita"> | string;
    estado?: Prisma.StringFilter<"Cita"> | string;
};
export type CitaCreateWithoutBarberoInput = {
    id_cita?: string;
    fecha: Date | string;
    hora: string;
    estado?: string;
    cliente: Prisma.ClienteCreateNestedOneWithoutCitasInput;
    especialidad: Prisma.EspecialidadCreateNestedOneWithoutCitasInput;
    historial?: Prisma.HistorialCitaCreateNestedManyWithoutCitaInput;
};
export type CitaUncheckedCreateWithoutBarberoInput = {
    id_cita?: string;
    cedula_cliente: string;
    id_especialidad: number;
    fecha: Date | string;
    hora: string;
    estado?: string;
    historial?: Prisma.HistorialCitaUncheckedCreateNestedManyWithoutCitaInput;
};
export type CitaCreateOrConnectWithoutBarberoInput = {
    where: Prisma.CitaWhereUniqueInput;
    create: Prisma.XOR<Prisma.CitaCreateWithoutBarberoInput, Prisma.CitaUncheckedCreateWithoutBarberoInput>;
};
export type CitaCreateManyBarberoInputEnvelope = {
    data: Prisma.CitaCreateManyBarberoInput | Prisma.CitaCreateManyBarberoInput[];
};
export type CitaUpsertWithWhereUniqueWithoutBarberoInput = {
    where: Prisma.CitaWhereUniqueInput;
    update: Prisma.XOR<Prisma.CitaUpdateWithoutBarberoInput, Prisma.CitaUncheckedUpdateWithoutBarberoInput>;
    create: Prisma.XOR<Prisma.CitaCreateWithoutBarberoInput, Prisma.CitaUncheckedCreateWithoutBarberoInput>;
};
export type CitaUpdateWithWhereUniqueWithoutBarberoInput = {
    where: Prisma.CitaWhereUniqueInput;
    data: Prisma.XOR<Prisma.CitaUpdateWithoutBarberoInput, Prisma.CitaUncheckedUpdateWithoutBarberoInput>;
};
export type CitaUpdateManyWithWhereWithoutBarberoInput = {
    where: Prisma.CitaScalarWhereInput;
    data: Prisma.XOR<Prisma.CitaUpdateManyMutationInput, Prisma.CitaUncheckedUpdateManyWithoutBarberoInput>;
};
export type CitaCreateWithoutEspecialidadInput = {
    id_cita?: string;
    fecha: Date | string;
    hora: string;
    estado?: string;
    cliente: Prisma.ClienteCreateNestedOneWithoutCitasInput;
    barbero: Prisma.BarberoCreateNestedOneWithoutCitasInput;
    historial?: Prisma.HistorialCitaCreateNestedManyWithoutCitaInput;
};
export type CitaUncheckedCreateWithoutEspecialidadInput = {
    id_cita?: string;
    cedula_cliente: string;
    cedula_barbero: string;
    fecha: Date | string;
    hora: string;
    estado?: string;
    historial?: Prisma.HistorialCitaUncheckedCreateNestedManyWithoutCitaInput;
};
export type CitaCreateOrConnectWithoutEspecialidadInput = {
    where: Prisma.CitaWhereUniqueInput;
    create: Prisma.XOR<Prisma.CitaCreateWithoutEspecialidadInput, Prisma.CitaUncheckedCreateWithoutEspecialidadInput>;
};
export type CitaCreateManyEspecialidadInputEnvelope = {
    data: Prisma.CitaCreateManyEspecialidadInput | Prisma.CitaCreateManyEspecialidadInput[];
};
export type CitaUpsertWithWhereUniqueWithoutEspecialidadInput = {
    where: Prisma.CitaWhereUniqueInput;
    update: Prisma.XOR<Prisma.CitaUpdateWithoutEspecialidadInput, Prisma.CitaUncheckedUpdateWithoutEspecialidadInput>;
    create: Prisma.XOR<Prisma.CitaCreateWithoutEspecialidadInput, Prisma.CitaUncheckedCreateWithoutEspecialidadInput>;
};
export type CitaUpdateWithWhereUniqueWithoutEspecialidadInput = {
    where: Prisma.CitaWhereUniqueInput;
    data: Prisma.XOR<Prisma.CitaUpdateWithoutEspecialidadInput, Prisma.CitaUncheckedUpdateWithoutEspecialidadInput>;
};
export type CitaUpdateManyWithWhereWithoutEspecialidadInput = {
    where: Prisma.CitaScalarWhereInput;
    data: Prisma.XOR<Prisma.CitaUpdateManyMutationInput, Prisma.CitaUncheckedUpdateManyWithoutEspecialidadInput>;
};
export type CitaCreateWithoutHistorialInput = {
    id_cita?: string;
    fecha: Date | string;
    hora: string;
    estado?: string;
    cliente: Prisma.ClienteCreateNestedOneWithoutCitasInput;
    barbero: Prisma.BarberoCreateNestedOneWithoutCitasInput;
    especialidad: Prisma.EspecialidadCreateNestedOneWithoutCitasInput;
};
export type CitaUncheckedCreateWithoutHistorialInput = {
    id_cita?: string;
    cedula_cliente: string;
    cedula_barbero: string;
    id_especialidad: number;
    fecha: Date | string;
    hora: string;
    estado?: string;
};
export type CitaCreateOrConnectWithoutHistorialInput = {
    where: Prisma.CitaWhereUniqueInput;
    create: Prisma.XOR<Prisma.CitaCreateWithoutHistorialInput, Prisma.CitaUncheckedCreateWithoutHistorialInput>;
};
export type CitaUpsertWithoutHistorialInput = {
    update: Prisma.XOR<Prisma.CitaUpdateWithoutHistorialInput, Prisma.CitaUncheckedUpdateWithoutHistorialInput>;
    create: Prisma.XOR<Prisma.CitaCreateWithoutHistorialInput, Prisma.CitaUncheckedCreateWithoutHistorialInput>;
    where?: Prisma.CitaWhereInput;
};
export type CitaUpdateToOneWithWhereWithoutHistorialInput = {
    where?: Prisma.CitaWhereInput;
    data: Prisma.XOR<Prisma.CitaUpdateWithoutHistorialInput, Prisma.CitaUncheckedUpdateWithoutHistorialInput>;
};
export type CitaUpdateWithoutHistorialInput = {
    id_cita?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    cliente?: Prisma.ClienteUpdateOneRequiredWithoutCitasNestedInput;
    barbero?: Prisma.BarberoUpdateOneRequiredWithoutCitasNestedInput;
    especialidad?: Prisma.EspecialidadUpdateOneRequiredWithoutCitasNestedInput;
};
export type CitaUncheckedUpdateWithoutHistorialInput = {
    id_cita?: Prisma.StringFieldUpdateOperationsInput | string;
    cedula_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    cedula_barbero?: Prisma.StringFieldUpdateOperationsInput | string;
    id_especialidad?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CitaCreateManyClienteInput = {
    id_cita?: string;
    cedula_barbero: string;
    id_especialidad: number;
    fecha: Date | string;
    hora: string;
    estado?: string;
};
export type CitaUpdateWithoutClienteInput = {
    id_cita?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    barbero?: Prisma.BarberoUpdateOneRequiredWithoutCitasNestedInput;
    especialidad?: Prisma.EspecialidadUpdateOneRequiredWithoutCitasNestedInput;
    historial?: Prisma.HistorialCitaUpdateManyWithoutCitaNestedInput;
};
export type CitaUncheckedUpdateWithoutClienteInput = {
    id_cita?: Prisma.StringFieldUpdateOperationsInput | string;
    cedula_barbero?: Prisma.StringFieldUpdateOperationsInput | string;
    id_especialidad?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    historial?: Prisma.HistorialCitaUncheckedUpdateManyWithoutCitaNestedInput;
};
export type CitaUncheckedUpdateManyWithoutClienteInput = {
    id_cita?: Prisma.StringFieldUpdateOperationsInput | string;
    cedula_barbero?: Prisma.StringFieldUpdateOperationsInput | string;
    id_especialidad?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CitaCreateManyBarberoInput = {
    id_cita?: string;
    cedula_cliente: string;
    id_especialidad: number;
    fecha: Date | string;
    hora: string;
    estado?: string;
};
export type CitaUpdateWithoutBarberoInput = {
    id_cita?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    cliente?: Prisma.ClienteUpdateOneRequiredWithoutCitasNestedInput;
    especialidad?: Prisma.EspecialidadUpdateOneRequiredWithoutCitasNestedInput;
    historial?: Prisma.HistorialCitaUpdateManyWithoutCitaNestedInput;
};
export type CitaUncheckedUpdateWithoutBarberoInput = {
    id_cita?: Prisma.StringFieldUpdateOperationsInput | string;
    cedula_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    id_especialidad?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    historial?: Prisma.HistorialCitaUncheckedUpdateManyWithoutCitaNestedInput;
};
export type CitaUncheckedUpdateManyWithoutBarberoInput = {
    id_cita?: Prisma.StringFieldUpdateOperationsInput | string;
    cedula_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    id_especialidad?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CitaCreateManyEspecialidadInput = {
    id_cita?: string;
    cedula_cliente: string;
    cedula_barbero: string;
    fecha: Date | string;
    hora: string;
    estado?: string;
};
export type CitaUpdateWithoutEspecialidadInput = {
    id_cita?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    cliente?: Prisma.ClienteUpdateOneRequiredWithoutCitasNestedInput;
    barbero?: Prisma.BarberoUpdateOneRequiredWithoutCitasNestedInput;
    historial?: Prisma.HistorialCitaUpdateManyWithoutCitaNestedInput;
};
export type CitaUncheckedUpdateWithoutEspecialidadInput = {
    id_cita?: Prisma.StringFieldUpdateOperationsInput | string;
    cedula_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    cedula_barbero?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    historial?: Prisma.HistorialCitaUncheckedUpdateManyWithoutCitaNestedInput;
};
export type CitaUncheckedUpdateManyWithoutEspecialidadInput = {
    id_cita?: Prisma.StringFieldUpdateOperationsInput | string;
    cedula_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    cedula_barbero?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
};
/**
 * Count Type CitaCountOutputType
 */
export type CitaCountOutputType = {
    historial: number;
};
export type CitaCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    historial?: boolean | CitaCountOutputTypeCountHistorialArgs;
};
/**
 * CitaCountOutputType without action
 */
export type CitaCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CitaCountOutputType
     */
    select?: Prisma.CitaCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * CitaCountOutputType without action
 */
export type CitaCountOutputTypeCountHistorialArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HistorialCitaWhereInput;
};
export type CitaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_cita?: boolean;
    cedula_cliente?: boolean;
    cedula_barbero?: boolean;
    id_especialidad?: boolean;
    fecha?: boolean;
    hora?: boolean;
    estado?: boolean;
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
    barbero?: boolean | Prisma.BarberoDefaultArgs<ExtArgs>;
    especialidad?: boolean | Prisma.EspecialidadDefaultArgs<ExtArgs>;
    historial?: boolean | Prisma.Cita$historialArgs<ExtArgs>;
    _count?: boolean | Prisma.CitaCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cita"]>;
export type CitaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_cita?: boolean;
    cedula_cliente?: boolean;
    cedula_barbero?: boolean;
    id_especialidad?: boolean;
    fecha?: boolean;
    hora?: boolean;
    estado?: boolean;
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
    barbero?: boolean | Prisma.BarberoDefaultArgs<ExtArgs>;
    especialidad?: boolean | Prisma.EspecialidadDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cita"]>;
export type CitaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_cita?: boolean;
    cedula_cliente?: boolean;
    cedula_barbero?: boolean;
    id_especialidad?: boolean;
    fecha?: boolean;
    hora?: boolean;
    estado?: boolean;
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
    barbero?: boolean | Prisma.BarberoDefaultArgs<ExtArgs>;
    especialidad?: boolean | Prisma.EspecialidadDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cita"]>;
export type CitaSelectScalar = {
    id_cita?: boolean;
    cedula_cliente?: boolean;
    cedula_barbero?: boolean;
    id_especialidad?: boolean;
    fecha?: boolean;
    hora?: boolean;
    estado?: boolean;
};
export type CitaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_cita" | "cedula_cliente" | "cedula_barbero" | "id_especialidad" | "fecha" | "hora" | "estado", ExtArgs["result"]["cita"]>;
export type CitaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
    barbero?: boolean | Prisma.BarberoDefaultArgs<ExtArgs>;
    especialidad?: boolean | Prisma.EspecialidadDefaultArgs<ExtArgs>;
    historial?: boolean | Prisma.Cita$historialArgs<ExtArgs>;
    _count?: boolean | Prisma.CitaCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CitaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
    barbero?: boolean | Prisma.BarberoDefaultArgs<ExtArgs>;
    especialidad?: boolean | Prisma.EspecialidadDefaultArgs<ExtArgs>;
};
export type CitaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
    barbero?: boolean | Prisma.BarberoDefaultArgs<ExtArgs>;
    especialidad?: boolean | Prisma.EspecialidadDefaultArgs<ExtArgs>;
};
export type $CitaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Cita";
    objects: {
        cliente: Prisma.$ClientePayload<ExtArgs>;
        barbero: Prisma.$BarberoPayload<ExtArgs>;
        especialidad: Prisma.$EspecialidadPayload<ExtArgs>;
        historial: Prisma.$HistorialCitaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_cita: string;
        cedula_cliente: string;
        cedula_barbero: string;
        id_especialidad: number;
        fecha: Date;
        hora: string;
        estado: string;
    }, ExtArgs["result"]["cita"]>;
    composites: {};
};
export type CitaGetPayload<S extends boolean | null | undefined | CitaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CitaPayload, S>;
export type CitaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CitaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CitaCountAggregateInputType | true;
};
export interface CitaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Cita'];
        meta: {
            name: 'Cita';
        };
    };
    /**
     * Find zero or one Cita that matches the filter.
     * @param {CitaFindUniqueArgs} args - Arguments to find a Cita
     * @example
     * // Get one Cita
     * const cita = await prisma.cita.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CitaFindUniqueArgs>(args: Prisma.SelectSubset<T, CitaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CitaClient<runtime.Types.Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Cita that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CitaFindUniqueOrThrowArgs} args - Arguments to find a Cita
     * @example
     * // Get one Cita
     * const cita = await prisma.cita.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CitaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CitaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CitaClient<runtime.Types.Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Cita that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitaFindFirstArgs} args - Arguments to find a Cita
     * @example
     * // Get one Cita
     * const cita = await prisma.cita.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CitaFindFirstArgs>(args?: Prisma.SelectSubset<T, CitaFindFirstArgs<ExtArgs>>): Prisma.Prisma__CitaClient<runtime.Types.Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Cita that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitaFindFirstOrThrowArgs} args - Arguments to find a Cita
     * @example
     * // Get one Cita
     * const cita = await prisma.cita.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CitaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CitaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CitaClient<runtime.Types.Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Citas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Citas
     * const citas = await prisma.cita.findMany()
     *
     * // Get first 10 Citas
     * const citas = await prisma.cita.findMany({ take: 10 })
     *
     * // Only select the `id_cita`
     * const citaWithId_citaOnly = await prisma.cita.findMany({ select: { id_cita: true } })
     *
     */
    findMany<T extends CitaFindManyArgs>(args?: Prisma.SelectSubset<T, CitaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Cita.
     * @param {CitaCreateArgs} args - Arguments to create a Cita.
     * @example
     * // Create one Cita
     * const Cita = await prisma.cita.create({
     *   data: {
     *     // ... data to create a Cita
     *   }
     * })
     *
     */
    create<T extends CitaCreateArgs>(args: Prisma.SelectSubset<T, CitaCreateArgs<ExtArgs>>): Prisma.Prisma__CitaClient<runtime.Types.Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Citas.
     * @param {CitaCreateManyArgs} args - Arguments to create many Citas.
     * @example
     * // Create many Citas
     * const cita = await prisma.cita.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CitaCreateManyArgs>(args?: Prisma.SelectSubset<T, CitaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Citas and returns the data saved in the database.
     * @param {CitaCreateManyAndReturnArgs} args - Arguments to create many Citas.
     * @example
     * // Create many Citas
     * const cita = await prisma.cita.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Citas and only return the `id_cita`
     * const citaWithId_citaOnly = await prisma.cita.createManyAndReturn({
     *   select: { id_cita: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CitaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CitaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Cita.
     * @param {CitaDeleteArgs} args - Arguments to delete one Cita.
     * @example
     * // Delete one Cita
     * const Cita = await prisma.cita.delete({
     *   where: {
     *     // ... filter to delete one Cita
     *   }
     * })
     *
     */
    delete<T extends CitaDeleteArgs>(args: Prisma.SelectSubset<T, CitaDeleteArgs<ExtArgs>>): Prisma.Prisma__CitaClient<runtime.Types.Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Cita.
     * @param {CitaUpdateArgs} args - Arguments to update one Cita.
     * @example
     * // Update one Cita
     * const cita = await prisma.cita.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CitaUpdateArgs>(args: Prisma.SelectSubset<T, CitaUpdateArgs<ExtArgs>>): Prisma.Prisma__CitaClient<runtime.Types.Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Citas.
     * @param {CitaDeleteManyArgs} args - Arguments to filter Citas to delete.
     * @example
     * // Delete a few Citas
     * const { count } = await prisma.cita.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CitaDeleteManyArgs>(args?: Prisma.SelectSubset<T, CitaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Citas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Citas
     * const cita = await prisma.cita.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CitaUpdateManyArgs>(args: Prisma.SelectSubset<T, CitaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Citas and returns the data updated in the database.
     * @param {CitaUpdateManyAndReturnArgs} args - Arguments to update many Citas.
     * @example
     * // Update many Citas
     * const cita = await prisma.cita.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Citas and only return the `id_cita`
     * const citaWithId_citaOnly = await prisma.cita.updateManyAndReturn({
     *   select: { id_cita: true },
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
    updateManyAndReturn<T extends CitaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CitaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Cita.
     * @param {CitaUpsertArgs} args - Arguments to update or create a Cita.
     * @example
     * // Update or create a Cita
     * const cita = await prisma.cita.upsert({
     *   create: {
     *     // ... data to create a Cita
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cita we want to update
     *   }
     * })
     */
    upsert<T extends CitaUpsertArgs>(args: Prisma.SelectSubset<T, CitaUpsertArgs<ExtArgs>>): Prisma.Prisma__CitaClient<runtime.Types.Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Citas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitaCountArgs} args - Arguments to filter Citas to count.
     * @example
     * // Count the number of Citas
     * const count = await prisma.cita.count({
     *   where: {
     *     // ... the filter for the Citas we want to count
     *   }
     * })
    **/
    count<T extends CitaCountArgs>(args?: Prisma.Subset<T, CitaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CitaCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Cita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CitaAggregateArgs>(args: Prisma.Subset<T, CitaAggregateArgs>): Prisma.PrismaPromise<GetCitaAggregateType<T>>;
    /**
     * Group by Cita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitaGroupByArgs} args - Group by arguments.
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
    groupBy<T extends CitaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CitaGroupByArgs['orderBy'];
    } : {
        orderBy?: CitaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CitaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCitaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Cita model
     */
    readonly fields: CitaFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Cita.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__CitaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cliente<T extends Prisma.ClienteDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClienteDefaultArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    barbero<T extends Prisma.BarberoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BarberoDefaultArgs<ExtArgs>>): Prisma.Prisma__BarberoClient<runtime.Types.Result.GetResult<Prisma.$BarberoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    especialidad<T extends Prisma.EspecialidadDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EspecialidadDefaultArgs<ExtArgs>>): Prisma.Prisma__EspecialidadClient<runtime.Types.Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    historial<T extends Prisma.Cita$historialArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Cita$historialArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HistorialCitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Cita model
 */
export interface CitaFieldRefs {
    readonly id_cita: Prisma.FieldRef<"Cita", 'String'>;
    readonly cedula_cliente: Prisma.FieldRef<"Cita", 'String'>;
    readonly cedula_barbero: Prisma.FieldRef<"Cita", 'String'>;
    readonly id_especialidad: Prisma.FieldRef<"Cita", 'Int'>;
    readonly fecha: Prisma.FieldRef<"Cita", 'DateTime'>;
    readonly hora: Prisma.FieldRef<"Cita", 'String'>;
    readonly estado: Prisma.FieldRef<"Cita", 'String'>;
}
/**
 * Cita findUnique
 */
export type CitaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Cita to fetch.
     */
    where: Prisma.CitaWhereUniqueInput;
};
/**
 * Cita findUniqueOrThrow
 */
export type CitaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Cita to fetch.
     */
    where: Prisma.CitaWhereUniqueInput;
};
/**
 * Cita findFirst
 */
export type CitaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Cita to fetch.
     */
    where?: Prisma.CitaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Citas to fetch.
     */
    orderBy?: Prisma.CitaOrderByWithRelationInput | Prisma.CitaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Citas.
     */
    cursor?: Prisma.CitaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Citas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Citas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Citas.
     */
    distinct?: Prisma.CitaScalarFieldEnum | Prisma.CitaScalarFieldEnum[];
};
/**
 * Cita findFirstOrThrow
 */
export type CitaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Cita to fetch.
     */
    where?: Prisma.CitaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Citas to fetch.
     */
    orderBy?: Prisma.CitaOrderByWithRelationInput | Prisma.CitaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Citas.
     */
    cursor?: Prisma.CitaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Citas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Citas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Citas.
     */
    distinct?: Prisma.CitaScalarFieldEnum | Prisma.CitaScalarFieldEnum[];
};
/**
 * Cita findMany
 */
export type CitaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Citas to fetch.
     */
    where?: Prisma.CitaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Citas to fetch.
     */
    orderBy?: Prisma.CitaOrderByWithRelationInput | Prisma.CitaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Citas.
     */
    cursor?: Prisma.CitaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Citas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Citas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Citas.
     */
    distinct?: Prisma.CitaScalarFieldEnum | Prisma.CitaScalarFieldEnum[];
};
/**
 * Cita create
 */
export type CitaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Cita.
     */
    data: Prisma.XOR<Prisma.CitaCreateInput, Prisma.CitaUncheckedCreateInput>;
};
/**
 * Cita createMany
 */
export type CitaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Citas.
     */
    data: Prisma.CitaCreateManyInput | Prisma.CitaCreateManyInput[];
};
/**
 * Cita createManyAndReturn
 */
export type CitaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: Prisma.CitaSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Cita
     */
    omit?: Prisma.CitaOmit<ExtArgs> | null;
    /**
     * The data used to create many Citas.
     */
    data: Prisma.CitaCreateManyInput | Prisma.CitaCreateManyInput[];
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CitaIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Cita update
 */
export type CitaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Cita.
     */
    data: Prisma.XOR<Prisma.CitaUpdateInput, Prisma.CitaUncheckedUpdateInput>;
    /**
     * Choose, which Cita to update.
     */
    where: Prisma.CitaWhereUniqueInput;
};
/**
 * Cita updateMany
 */
export type CitaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Citas.
     */
    data: Prisma.XOR<Prisma.CitaUpdateManyMutationInput, Prisma.CitaUncheckedUpdateManyInput>;
    /**
     * Filter which Citas to update
     */
    where?: Prisma.CitaWhereInput;
    /**
     * Limit how many Citas to update.
     */
    limit?: number;
};
/**
 * Cita updateManyAndReturn
 */
export type CitaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: Prisma.CitaSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Cita
     */
    omit?: Prisma.CitaOmit<ExtArgs> | null;
    /**
     * The data used to update Citas.
     */
    data: Prisma.XOR<Prisma.CitaUpdateManyMutationInput, Prisma.CitaUncheckedUpdateManyInput>;
    /**
     * Filter which Citas to update
     */
    where?: Prisma.CitaWhereInput;
    /**
     * Limit how many Citas to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CitaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Cita upsert
 */
export type CitaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Cita to update in case it exists.
     */
    where: Prisma.CitaWhereUniqueInput;
    /**
     * In case the Cita found by the `where` argument doesn't exist, create a new Cita with this data.
     */
    create: Prisma.XOR<Prisma.CitaCreateInput, Prisma.CitaUncheckedCreateInput>;
    /**
     * In case the Cita was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.CitaUpdateInput, Prisma.CitaUncheckedUpdateInput>;
};
/**
 * Cita delete
 */
export type CitaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Cita to delete.
     */
    where: Prisma.CitaWhereUniqueInput;
};
/**
 * Cita deleteMany
 */
export type CitaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Citas to delete
     */
    where?: Prisma.CitaWhereInput;
    /**
     * Limit how many Citas to delete.
     */
    limit?: number;
};
/**
 * Cita.historial
 */
export type Cita$historialArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.HistorialCitaWhereInput;
    orderBy?: Prisma.HistorialCitaOrderByWithRelationInput | Prisma.HistorialCitaOrderByWithRelationInput[];
    cursor?: Prisma.HistorialCitaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HistorialCitaScalarFieldEnum | Prisma.HistorialCitaScalarFieldEnum[];
};
/**
 * Cita without action
 */
export type CitaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=Cita.d.ts.map