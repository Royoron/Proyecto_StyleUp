import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Especialidad
 *
 */
export type EspecialidadModel = runtime.Types.Result.DefaultSelection<Prisma.$EspecialidadPayload>;
export type AggregateEspecialidad = {
    _count: EspecialidadCountAggregateOutputType | null;
    _avg: EspecialidadAvgAggregateOutputType | null;
    _sum: EspecialidadSumAggregateOutputType | null;
    _min: EspecialidadMinAggregateOutputType | null;
    _max: EspecialidadMaxAggregateOutputType | null;
};
export type EspecialidadAvgAggregateOutputType = {
    id_especialidad: number | null;
    tiempo_estimado: number | null;
};
export type EspecialidadSumAggregateOutputType = {
    id_especialidad: number | null;
    tiempo_estimado: number | null;
};
export type EspecialidadMinAggregateOutputType = {
    id_especialidad: number | null;
    especialidad: string | null;
    tiempo_estimado: number | null;
};
export type EspecialidadMaxAggregateOutputType = {
    id_especialidad: number | null;
    especialidad: string | null;
    tiempo_estimado: number | null;
};
export type EspecialidadCountAggregateOutputType = {
    id_especialidad: number;
    especialidad: number;
    tiempo_estimado: number;
    _all: number;
};
export type EspecialidadAvgAggregateInputType = {
    id_especialidad?: true;
    tiempo_estimado?: true;
};
export type EspecialidadSumAggregateInputType = {
    id_especialidad?: true;
    tiempo_estimado?: true;
};
export type EspecialidadMinAggregateInputType = {
    id_especialidad?: true;
    especialidad?: true;
    tiempo_estimado?: true;
};
export type EspecialidadMaxAggregateInputType = {
    id_especialidad?: true;
    especialidad?: true;
    tiempo_estimado?: true;
};
export type EspecialidadCountAggregateInputType = {
    id_especialidad?: true;
    especialidad?: true;
    tiempo_estimado?: true;
    _all?: true;
};
export type EspecialidadAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Especialidad to aggregate.
     */
    where?: Prisma.EspecialidadWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Especialidads to fetch.
     */
    orderBy?: Prisma.EspecialidadOrderByWithRelationInput | Prisma.EspecialidadOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.EspecialidadWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Especialidads from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Especialidads.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Especialidads
    **/
    _count?: true | EspecialidadCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: EspecialidadAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: EspecialidadSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: EspecialidadMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: EspecialidadMaxAggregateInputType;
};
export type GetEspecialidadAggregateType<T extends EspecialidadAggregateArgs> = {
    [P in keyof T & keyof AggregateEspecialidad]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEspecialidad[P]> : Prisma.GetScalarType<T[P], AggregateEspecialidad[P]>;
};
export type EspecialidadGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EspecialidadWhereInput;
    orderBy?: Prisma.EspecialidadOrderByWithAggregationInput | Prisma.EspecialidadOrderByWithAggregationInput[];
    by: Prisma.EspecialidadScalarFieldEnum[] | Prisma.EspecialidadScalarFieldEnum;
    having?: Prisma.EspecialidadScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EspecialidadCountAggregateInputType | true;
    _avg?: EspecialidadAvgAggregateInputType;
    _sum?: EspecialidadSumAggregateInputType;
    _min?: EspecialidadMinAggregateInputType;
    _max?: EspecialidadMaxAggregateInputType;
};
export type EspecialidadGroupByOutputType = {
    id_especialidad: number;
    especialidad: string;
    tiempo_estimado: number;
    _count: EspecialidadCountAggregateOutputType | null;
    _avg: EspecialidadAvgAggregateOutputType | null;
    _sum: EspecialidadSumAggregateOutputType | null;
    _min: EspecialidadMinAggregateOutputType | null;
    _max: EspecialidadMaxAggregateOutputType | null;
};
export type GetEspecialidadGroupByPayload<T extends EspecialidadGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EspecialidadGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EspecialidadGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EspecialidadGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EspecialidadGroupByOutputType[P]>;
}>>;
export type EspecialidadWhereInput = {
    AND?: Prisma.EspecialidadWhereInput | Prisma.EspecialidadWhereInput[];
    OR?: Prisma.EspecialidadWhereInput[];
    NOT?: Prisma.EspecialidadWhereInput | Prisma.EspecialidadWhereInput[];
    id_especialidad?: Prisma.IntFilter<"Especialidad"> | number;
    especialidad?: Prisma.StringFilter<"Especialidad"> | string;
    tiempo_estimado?: Prisma.IntFilter<"Especialidad"> | number;
    barberos?: Prisma.BarberoListRelationFilter;
    citas?: Prisma.CitaListRelationFilter;
};
export type EspecialidadOrderByWithRelationInput = {
    id_especialidad?: Prisma.SortOrder;
    especialidad?: Prisma.SortOrder;
    tiempo_estimado?: Prisma.SortOrder;
    barberos?: Prisma.BarberoOrderByRelationAggregateInput;
    citas?: Prisma.CitaOrderByRelationAggregateInput;
};
export type EspecialidadWhereUniqueInput = Prisma.AtLeast<{
    id_especialidad?: number;
    especialidad?: string;
    AND?: Prisma.EspecialidadWhereInput | Prisma.EspecialidadWhereInput[];
    OR?: Prisma.EspecialidadWhereInput[];
    NOT?: Prisma.EspecialidadWhereInput | Prisma.EspecialidadWhereInput[];
    tiempo_estimado?: Prisma.IntFilter<"Especialidad"> | number;
    barberos?: Prisma.BarberoListRelationFilter;
    citas?: Prisma.CitaListRelationFilter;
}, "id_especialidad" | "especialidad">;
export type EspecialidadOrderByWithAggregationInput = {
    id_especialidad?: Prisma.SortOrder;
    especialidad?: Prisma.SortOrder;
    tiempo_estimado?: Prisma.SortOrder;
    _count?: Prisma.EspecialidadCountOrderByAggregateInput;
    _avg?: Prisma.EspecialidadAvgOrderByAggregateInput;
    _max?: Prisma.EspecialidadMaxOrderByAggregateInput;
    _min?: Prisma.EspecialidadMinOrderByAggregateInput;
    _sum?: Prisma.EspecialidadSumOrderByAggregateInput;
};
export type EspecialidadScalarWhereWithAggregatesInput = {
    AND?: Prisma.EspecialidadScalarWhereWithAggregatesInput | Prisma.EspecialidadScalarWhereWithAggregatesInput[];
    OR?: Prisma.EspecialidadScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EspecialidadScalarWhereWithAggregatesInput | Prisma.EspecialidadScalarWhereWithAggregatesInput[];
    id_especialidad?: Prisma.IntWithAggregatesFilter<"Especialidad"> | number;
    especialidad?: Prisma.StringWithAggregatesFilter<"Especialidad"> | string;
    tiempo_estimado?: Prisma.IntWithAggregatesFilter<"Especialidad"> | number;
};
export type EspecialidadCreateInput = {
    especialidad: string;
    tiempo_estimado: number;
    barberos?: Prisma.BarberoCreateNestedManyWithoutEspecialidadInput;
    citas?: Prisma.CitaCreateNestedManyWithoutEspecialidadInput;
};
export type EspecialidadUncheckedCreateInput = {
    id_especialidad?: number;
    especialidad: string;
    tiempo_estimado: number;
    barberos?: Prisma.BarberoUncheckedCreateNestedManyWithoutEspecialidadInput;
    citas?: Prisma.CitaUncheckedCreateNestedManyWithoutEspecialidadInput;
};
export type EspecialidadUpdateInput = {
    especialidad?: Prisma.StringFieldUpdateOperationsInput | string;
    tiempo_estimado?: Prisma.IntFieldUpdateOperationsInput | number;
    barberos?: Prisma.BarberoUpdateManyWithoutEspecialidadNestedInput;
    citas?: Prisma.CitaUpdateManyWithoutEspecialidadNestedInput;
};
export type EspecialidadUncheckedUpdateInput = {
    id_especialidad?: Prisma.IntFieldUpdateOperationsInput | number;
    especialidad?: Prisma.StringFieldUpdateOperationsInput | string;
    tiempo_estimado?: Prisma.IntFieldUpdateOperationsInput | number;
    barberos?: Prisma.BarberoUncheckedUpdateManyWithoutEspecialidadNestedInput;
    citas?: Prisma.CitaUncheckedUpdateManyWithoutEspecialidadNestedInput;
};
export type EspecialidadCreateManyInput = {
    id_especialidad?: number;
    especialidad: string;
    tiempo_estimado: number;
};
export type EspecialidadUpdateManyMutationInput = {
    especialidad?: Prisma.StringFieldUpdateOperationsInput | string;
    tiempo_estimado?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type EspecialidadUncheckedUpdateManyInput = {
    id_especialidad?: Prisma.IntFieldUpdateOperationsInput | number;
    especialidad?: Prisma.StringFieldUpdateOperationsInput | string;
    tiempo_estimado?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type EspecialidadScalarRelationFilter = {
    is?: Prisma.EspecialidadWhereInput;
    isNot?: Prisma.EspecialidadWhereInput;
};
export type EspecialidadCountOrderByAggregateInput = {
    id_especialidad?: Prisma.SortOrder;
    especialidad?: Prisma.SortOrder;
    tiempo_estimado?: Prisma.SortOrder;
};
export type EspecialidadAvgOrderByAggregateInput = {
    id_especialidad?: Prisma.SortOrder;
    tiempo_estimado?: Prisma.SortOrder;
};
export type EspecialidadMaxOrderByAggregateInput = {
    id_especialidad?: Prisma.SortOrder;
    especialidad?: Prisma.SortOrder;
    tiempo_estimado?: Prisma.SortOrder;
};
export type EspecialidadMinOrderByAggregateInput = {
    id_especialidad?: Prisma.SortOrder;
    especialidad?: Prisma.SortOrder;
    tiempo_estimado?: Prisma.SortOrder;
};
export type EspecialidadSumOrderByAggregateInput = {
    id_especialidad?: Prisma.SortOrder;
    tiempo_estimado?: Prisma.SortOrder;
};
export type EspecialidadCreateNestedOneWithoutBarberosInput = {
    create?: Prisma.XOR<Prisma.EspecialidadCreateWithoutBarberosInput, Prisma.EspecialidadUncheckedCreateWithoutBarberosInput>;
    connectOrCreate?: Prisma.EspecialidadCreateOrConnectWithoutBarberosInput;
    connect?: Prisma.EspecialidadWhereUniqueInput;
};
export type EspecialidadUpdateOneRequiredWithoutBarberosNestedInput = {
    create?: Prisma.XOR<Prisma.EspecialidadCreateWithoutBarberosInput, Prisma.EspecialidadUncheckedCreateWithoutBarberosInput>;
    connectOrCreate?: Prisma.EspecialidadCreateOrConnectWithoutBarberosInput;
    upsert?: Prisma.EspecialidadUpsertWithoutBarberosInput;
    connect?: Prisma.EspecialidadWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EspecialidadUpdateToOneWithWhereWithoutBarberosInput, Prisma.EspecialidadUpdateWithoutBarberosInput>, Prisma.EspecialidadUncheckedUpdateWithoutBarberosInput>;
};
export type EspecialidadCreateNestedOneWithoutCitasInput = {
    create?: Prisma.XOR<Prisma.EspecialidadCreateWithoutCitasInput, Prisma.EspecialidadUncheckedCreateWithoutCitasInput>;
    connectOrCreate?: Prisma.EspecialidadCreateOrConnectWithoutCitasInput;
    connect?: Prisma.EspecialidadWhereUniqueInput;
};
export type EspecialidadUpdateOneRequiredWithoutCitasNestedInput = {
    create?: Prisma.XOR<Prisma.EspecialidadCreateWithoutCitasInput, Prisma.EspecialidadUncheckedCreateWithoutCitasInput>;
    connectOrCreate?: Prisma.EspecialidadCreateOrConnectWithoutCitasInput;
    upsert?: Prisma.EspecialidadUpsertWithoutCitasInput;
    connect?: Prisma.EspecialidadWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EspecialidadUpdateToOneWithWhereWithoutCitasInput, Prisma.EspecialidadUpdateWithoutCitasInput>, Prisma.EspecialidadUncheckedUpdateWithoutCitasInput>;
};
export type EspecialidadCreateWithoutBarberosInput = {
    especialidad: string;
    tiempo_estimado: number;
    citas?: Prisma.CitaCreateNestedManyWithoutEspecialidadInput;
};
export type EspecialidadUncheckedCreateWithoutBarberosInput = {
    id_especialidad?: number;
    especialidad: string;
    tiempo_estimado: number;
    citas?: Prisma.CitaUncheckedCreateNestedManyWithoutEspecialidadInput;
};
export type EspecialidadCreateOrConnectWithoutBarberosInput = {
    where: Prisma.EspecialidadWhereUniqueInput;
    create: Prisma.XOR<Prisma.EspecialidadCreateWithoutBarberosInput, Prisma.EspecialidadUncheckedCreateWithoutBarberosInput>;
};
export type EspecialidadUpsertWithoutBarberosInput = {
    update: Prisma.XOR<Prisma.EspecialidadUpdateWithoutBarberosInput, Prisma.EspecialidadUncheckedUpdateWithoutBarberosInput>;
    create: Prisma.XOR<Prisma.EspecialidadCreateWithoutBarberosInput, Prisma.EspecialidadUncheckedCreateWithoutBarberosInput>;
    where?: Prisma.EspecialidadWhereInput;
};
export type EspecialidadUpdateToOneWithWhereWithoutBarberosInput = {
    where?: Prisma.EspecialidadWhereInput;
    data: Prisma.XOR<Prisma.EspecialidadUpdateWithoutBarberosInput, Prisma.EspecialidadUncheckedUpdateWithoutBarberosInput>;
};
export type EspecialidadUpdateWithoutBarberosInput = {
    especialidad?: Prisma.StringFieldUpdateOperationsInput | string;
    tiempo_estimado?: Prisma.IntFieldUpdateOperationsInput | number;
    citas?: Prisma.CitaUpdateManyWithoutEspecialidadNestedInput;
};
export type EspecialidadUncheckedUpdateWithoutBarberosInput = {
    id_especialidad?: Prisma.IntFieldUpdateOperationsInput | number;
    especialidad?: Prisma.StringFieldUpdateOperationsInput | string;
    tiempo_estimado?: Prisma.IntFieldUpdateOperationsInput | number;
    citas?: Prisma.CitaUncheckedUpdateManyWithoutEspecialidadNestedInput;
};
export type EspecialidadCreateWithoutCitasInput = {
    especialidad: string;
    tiempo_estimado: number;
    barberos?: Prisma.BarberoCreateNestedManyWithoutEspecialidadInput;
};
export type EspecialidadUncheckedCreateWithoutCitasInput = {
    id_especialidad?: number;
    especialidad: string;
    tiempo_estimado: number;
    barberos?: Prisma.BarberoUncheckedCreateNestedManyWithoutEspecialidadInput;
};
export type EspecialidadCreateOrConnectWithoutCitasInput = {
    where: Prisma.EspecialidadWhereUniqueInput;
    create: Prisma.XOR<Prisma.EspecialidadCreateWithoutCitasInput, Prisma.EspecialidadUncheckedCreateWithoutCitasInput>;
};
export type EspecialidadUpsertWithoutCitasInput = {
    update: Prisma.XOR<Prisma.EspecialidadUpdateWithoutCitasInput, Prisma.EspecialidadUncheckedUpdateWithoutCitasInput>;
    create: Prisma.XOR<Prisma.EspecialidadCreateWithoutCitasInput, Prisma.EspecialidadUncheckedCreateWithoutCitasInput>;
    where?: Prisma.EspecialidadWhereInput;
};
export type EspecialidadUpdateToOneWithWhereWithoutCitasInput = {
    where?: Prisma.EspecialidadWhereInput;
    data: Prisma.XOR<Prisma.EspecialidadUpdateWithoutCitasInput, Prisma.EspecialidadUncheckedUpdateWithoutCitasInput>;
};
export type EspecialidadUpdateWithoutCitasInput = {
    especialidad?: Prisma.StringFieldUpdateOperationsInput | string;
    tiempo_estimado?: Prisma.IntFieldUpdateOperationsInput | number;
    barberos?: Prisma.BarberoUpdateManyWithoutEspecialidadNestedInput;
};
export type EspecialidadUncheckedUpdateWithoutCitasInput = {
    id_especialidad?: Prisma.IntFieldUpdateOperationsInput | number;
    especialidad?: Prisma.StringFieldUpdateOperationsInput | string;
    tiempo_estimado?: Prisma.IntFieldUpdateOperationsInput | number;
    barberos?: Prisma.BarberoUncheckedUpdateManyWithoutEspecialidadNestedInput;
};
/**
 * Count Type EspecialidadCountOutputType
 */
export type EspecialidadCountOutputType = {
    barberos: number;
    citas: number;
};
export type EspecialidadCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    barberos?: boolean | EspecialidadCountOutputTypeCountBarberosArgs;
    citas?: boolean | EspecialidadCountOutputTypeCountCitasArgs;
};
/**
 * EspecialidadCountOutputType without action
 */
export type EspecialidadCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspecialidadCountOutputType
     */
    select?: Prisma.EspecialidadCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * EspecialidadCountOutputType without action
 */
export type EspecialidadCountOutputTypeCountBarberosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BarberoWhereInput;
};
/**
 * EspecialidadCountOutputType without action
 */
export type EspecialidadCountOutputTypeCountCitasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CitaWhereInput;
};
export type EspecialidadSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_especialidad?: boolean;
    especialidad?: boolean;
    tiempo_estimado?: boolean;
    barberos?: boolean | Prisma.Especialidad$barberosArgs<ExtArgs>;
    citas?: boolean | Prisma.Especialidad$citasArgs<ExtArgs>;
    _count?: boolean | Prisma.EspecialidadCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["especialidad"]>;
export type EspecialidadSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_especialidad?: boolean;
    especialidad?: boolean;
    tiempo_estimado?: boolean;
}, ExtArgs["result"]["especialidad"]>;
export type EspecialidadSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_especialidad?: boolean;
    especialidad?: boolean;
    tiempo_estimado?: boolean;
}, ExtArgs["result"]["especialidad"]>;
export type EspecialidadSelectScalar = {
    id_especialidad?: boolean;
    especialidad?: boolean;
    tiempo_estimado?: boolean;
};
export type EspecialidadOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_especialidad" | "especialidad" | "tiempo_estimado", ExtArgs["result"]["especialidad"]>;
export type EspecialidadInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    barberos?: boolean | Prisma.Especialidad$barberosArgs<ExtArgs>;
    citas?: boolean | Prisma.Especialidad$citasArgs<ExtArgs>;
    _count?: boolean | Prisma.EspecialidadCountOutputTypeDefaultArgs<ExtArgs>;
};
export type EspecialidadIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type EspecialidadIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $EspecialidadPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Especialidad";
    objects: {
        barberos: Prisma.$BarberoPayload<ExtArgs>[];
        citas: Prisma.$CitaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_especialidad: number;
        especialidad: string;
        tiempo_estimado: number;
    }, ExtArgs["result"]["especialidad"]>;
    composites: {};
};
export type EspecialidadGetPayload<S extends boolean | null | undefined | EspecialidadDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EspecialidadPayload, S>;
export type EspecialidadCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EspecialidadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EspecialidadCountAggregateInputType | true;
};
export interface EspecialidadDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Especialidad'];
        meta: {
            name: 'Especialidad';
        };
    };
    /**
     * Find zero or one Especialidad that matches the filter.
     * @param {EspecialidadFindUniqueArgs} args - Arguments to find a Especialidad
     * @example
     * // Get one Especialidad
     * const especialidad = await prisma.especialidad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EspecialidadFindUniqueArgs>(args: Prisma.SelectSubset<T, EspecialidadFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EspecialidadClient<runtime.Types.Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Especialidad that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EspecialidadFindUniqueOrThrowArgs} args - Arguments to find a Especialidad
     * @example
     * // Get one Especialidad
     * const especialidad = await prisma.especialidad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EspecialidadFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EspecialidadFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EspecialidadClient<runtime.Types.Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Especialidad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadFindFirstArgs} args - Arguments to find a Especialidad
     * @example
     * // Get one Especialidad
     * const especialidad = await prisma.especialidad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EspecialidadFindFirstArgs>(args?: Prisma.SelectSubset<T, EspecialidadFindFirstArgs<ExtArgs>>): Prisma.Prisma__EspecialidadClient<runtime.Types.Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Especialidad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadFindFirstOrThrowArgs} args - Arguments to find a Especialidad
     * @example
     * // Get one Especialidad
     * const especialidad = await prisma.especialidad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EspecialidadFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EspecialidadFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EspecialidadClient<runtime.Types.Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Especialidads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Especialidads
     * const especialidads = await prisma.especialidad.findMany()
     *
     * // Get first 10 Especialidads
     * const especialidads = await prisma.especialidad.findMany({ take: 10 })
     *
     * // Only select the `id_especialidad`
     * const especialidadWithId_especialidadOnly = await prisma.especialidad.findMany({ select: { id_especialidad: true } })
     *
     */
    findMany<T extends EspecialidadFindManyArgs>(args?: Prisma.SelectSubset<T, EspecialidadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Especialidad.
     * @param {EspecialidadCreateArgs} args - Arguments to create a Especialidad.
     * @example
     * // Create one Especialidad
     * const Especialidad = await prisma.especialidad.create({
     *   data: {
     *     // ... data to create a Especialidad
     *   }
     * })
     *
     */
    create<T extends EspecialidadCreateArgs>(args: Prisma.SelectSubset<T, EspecialidadCreateArgs<ExtArgs>>): Prisma.Prisma__EspecialidadClient<runtime.Types.Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Especialidads.
     * @param {EspecialidadCreateManyArgs} args - Arguments to create many Especialidads.
     * @example
     * // Create many Especialidads
     * const especialidad = await prisma.especialidad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends EspecialidadCreateManyArgs>(args?: Prisma.SelectSubset<T, EspecialidadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Especialidads and returns the data saved in the database.
     * @param {EspecialidadCreateManyAndReturnArgs} args - Arguments to create many Especialidads.
     * @example
     * // Create many Especialidads
     * const especialidad = await prisma.especialidad.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Especialidads and only return the `id_especialidad`
     * const especialidadWithId_especialidadOnly = await prisma.especialidad.createManyAndReturn({
     *   select: { id_especialidad: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends EspecialidadCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EspecialidadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Especialidad.
     * @param {EspecialidadDeleteArgs} args - Arguments to delete one Especialidad.
     * @example
     * // Delete one Especialidad
     * const Especialidad = await prisma.especialidad.delete({
     *   where: {
     *     // ... filter to delete one Especialidad
     *   }
     * })
     *
     */
    delete<T extends EspecialidadDeleteArgs>(args: Prisma.SelectSubset<T, EspecialidadDeleteArgs<ExtArgs>>): Prisma.Prisma__EspecialidadClient<runtime.Types.Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Especialidad.
     * @param {EspecialidadUpdateArgs} args - Arguments to update one Especialidad.
     * @example
     * // Update one Especialidad
     * const especialidad = await prisma.especialidad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends EspecialidadUpdateArgs>(args: Prisma.SelectSubset<T, EspecialidadUpdateArgs<ExtArgs>>): Prisma.Prisma__EspecialidadClient<runtime.Types.Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Especialidads.
     * @param {EspecialidadDeleteManyArgs} args - Arguments to filter Especialidads to delete.
     * @example
     * // Delete a few Especialidads
     * const { count } = await prisma.especialidad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends EspecialidadDeleteManyArgs>(args?: Prisma.SelectSubset<T, EspecialidadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Especialidads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Especialidads
     * const especialidad = await prisma.especialidad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends EspecialidadUpdateManyArgs>(args: Prisma.SelectSubset<T, EspecialidadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Especialidads and returns the data updated in the database.
     * @param {EspecialidadUpdateManyAndReturnArgs} args - Arguments to update many Especialidads.
     * @example
     * // Update many Especialidads
     * const especialidad = await prisma.especialidad.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Especialidads and only return the `id_especialidad`
     * const especialidadWithId_especialidadOnly = await prisma.especialidad.updateManyAndReturn({
     *   select: { id_especialidad: true },
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
    updateManyAndReturn<T extends EspecialidadUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EspecialidadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Especialidad.
     * @param {EspecialidadUpsertArgs} args - Arguments to update or create a Especialidad.
     * @example
     * // Update or create a Especialidad
     * const especialidad = await prisma.especialidad.upsert({
     *   create: {
     *     // ... data to create a Especialidad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Especialidad we want to update
     *   }
     * })
     */
    upsert<T extends EspecialidadUpsertArgs>(args: Prisma.SelectSubset<T, EspecialidadUpsertArgs<ExtArgs>>): Prisma.Prisma__EspecialidadClient<runtime.Types.Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Especialidads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadCountArgs} args - Arguments to filter Especialidads to count.
     * @example
     * // Count the number of Especialidads
     * const count = await prisma.especialidad.count({
     *   where: {
     *     // ... the filter for the Especialidads we want to count
     *   }
     * })
    **/
    count<T extends EspecialidadCountArgs>(args?: Prisma.Subset<T, EspecialidadCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EspecialidadCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Especialidad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EspecialidadAggregateArgs>(args: Prisma.Subset<T, EspecialidadAggregateArgs>): Prisma.PrismaPromise<GetEspecialidadAggregateType<T>>;
    /**
     * Group by Especialidad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadGroupByArgs} args - Group by arguments.
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
    groupBy<T extends EspecialidadGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EspecialidadGroupByArgs['orderBy'];
    } : {
        orderBy?: EspecialidadGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EspecialidadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEspecialidadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Especialidad model
     */
    readonly fields: EspecialidadFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Especialidad.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__EspecialidadClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    barberos<T extends Prisma.Especialidad$barberosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Especialidad$barberosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BarberoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    citas<T extends Prisma.Especialidad$citasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Especialidad$citasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Especialidad model
 */
export interface EspecialidadFieldRefs {
    readonly id_especialidad: Prisma.FieldRef<"Especialidad", 'Int'>;
    readonly especialidad: Prisma.FieldRef<"Especialidad", 'String'>;
    readonly tiempo_estimado: Prisma.FieldRef<"Especialidad", 'Int'>;
}
/**
 * Especialidad findUnique
 */
export type EspecialidadFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: Prisma.EspecialidadSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: Prisma.EspecialidadOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EspecialidadInclude<ExtArgs> | null;
    /**
     * Filter, which Especialidad to fetch.
     */
    where: Prisma.EspecialidadWhereUniqueInput;
};
/**
 * Especialidad findUniqueOrThrow
 */
export type EspecialidadFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: Prisma.EspecialidadSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: Prisma.EspecialidadOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EspecialidadInclude<ExtArgs> | null;
    /**
     * Filter, which Especialidad to fetch.
     */
    where: Prisma.EspecialidadWhereUniqueInput;
};
/**
 * Especialidad findFirst
 */
export type EspecialidadFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: Prisma.EspecialidadSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: Prisma.EspecialidadOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EspecialidadInclude<ExtArgs> | null;
    /**
     * Filter, which Especialidad to fetch.
     */
    where?: Prisma.EspecialidadWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Especialidads to fetch.
     */
    orderBy?: Prisma.EspecialidadOrderByWithRelationInput | Prisma.EspecialidadOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Especialidads.
     */
    cursor?: Prisma.EspecialidadWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Especialidads from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Especialidads.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Especialidads.
     */
    distinct?: Prisma.EspecialidadScalarFieldEnum | Prisma.EspecialidadScalarFieldEnum[];
};
/**
 * Especialidad findFirstOrThrow
 */
export type EspecialidadFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: Prisma.EspecialidadSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: Prisma.EspecialidadOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EspecialidadInclude<ExtArgs> | null;
    /**
     * Filter, which Especialidad to fetch.
     */
    where?: Prisma.EspecialidadWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Especialidads to fetch.
     */
    orderBy?: Prisma.EspecialidadOrderByWithRelationInput | Prisma.EspecialidadOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Especialidads.
     */
    cursor?: Prisma.EspecialidadWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Especialidads from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Especialidads.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Especialidads.
     */
    distinct?: Prisma.EspecialidadScalarFieldEnum | Prisma.EspecialidadScalarFieldEnum[];
};
/**
 * Especialidad findMany
 */
export type EspecialidadFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: Prisma.EspecialidadSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: Prisma.EspecialidadOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EspecialidadInclude<ExtArgs> | null;
    /**
     * Filter, which Especialidads to fetch.
     */
    where?: Prisma.EspecialidadWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Especialidads to fetch.
     */
    orderBy?: Prisma.EspecialidadOrderByWithRelationInput | Prisma.EspecialidadOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Especialidads.
     */
    cursor?: Prisma.EspecialidadWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Especialidads from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Especialidads.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Especialidads.
     */
    distinct?: Prisma.EspecialidadScalarFieldEnum | Prisma.EspecialidadScalarFieldEnum[];
};
/**
 * Especialidad create
 */
export type EspecialidadCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: Prisma.EspecialidadSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: Prisma.EspecialidadOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EspecialidadInclude<ExtArgs> | null;
    /**
     * The data needed to create a Especialidad.
     */
    data: Prisma.XOR<Prisma.EspecialidadCreateInput, Prisma.EspecialidadUncheckedCreateInput>;
};
/**
 * Especialidad createMany
 */
export type EspecialidadCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Especialidads.
     */
    data: Prisma.EspecialidadCreateManyInput | Prisma.EspecialidadCreateManyInput[];
};
/**
 * Especialidad createManyAndReturn
 */
export type EspecialidadCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: Prisma.EspecialidadSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: Prisma.EspecialidadOmit<ExtArgs> | null;
    /**
     * The data used to create many Especialidads.
     */
    data: Prisma.EspecialidadCreateManyInput | Prisma.EspecialidadCreateManyInput[];
};
/**
 * Especialidad update
 */
export type EspecialidadUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: Prisma.EspecialidadSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: Prisma.EspecialidadOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EspecialidadInclude<ExtArgs> | null;
    /**
     * The data needed to update a Especialidad.
     */
    data: Prisma.XOR<Prisma.EspecialidadUpdateInput, Prisma.EspecialidadUncheckedUpdateInput>;
    /**
     * Choose, which Especialidad to update.
     */
    where: Prisma.EspecialidadWhereUniqueInput;
};
/**
 * Especialidad updateMany
 */
export type EspecialidadUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Especialidads.
     */
    data: Prisma.XOR<Prisma.EspecialidadUpdateManyMutationInput, Prisma.EspecialidadUncheckedUpdateManyInput>;
    /**
     * Filter which Especialidads to update
     */
    where?: Prisma.EspecialidadWhereInput;
    /**
     * Limit how many Especialidads to update.
     */
    limit?: number;
};
/**
 * Especialidad updateManyAndReturn
 */
export type EspecialidadUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: Prisma.EspecialidadSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: Prisma.EspecialidadOmit<ExtArgs> | null;
    /**
     * The data used to update Especialidads.
     */
    data: Prisma.XOR<Prisma.EspecialidadUpdateManyMutationInput, Prisma.EspecialidadUncheckedUpdateManyInput>;
    /**
     * Filter which Especialidads to update
     */
    where?: Prisma.EspecialidadWhereInput;
    /**
     * Limit how many Especialidads to update.
     */
    limit?: number;
};
/**
 * Especialidad upsert
 */
export type EspecialidadUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: Prisma.EspecialidadSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: Prisma.EspecialidadOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EspecialidadInclude<ExtArgs> | null;
    /**
     * The filter to search for the Especialidad to update in case it exists.
     */
    where: Prisma.EspecialidadWhereUniqueInput;
    /**
     * In case the Especialidad found by the `where` argument doesn't exist, create a new Especialidad with this data.
     */
    create: Prisma.XOR<Prisma.EspecialidadCreateInput, Prisma.EspecialidadUncheckedCreateInput>;
    /**
     * In case the Especialidad was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.EspecialidadUpdateInput, Prisma.EspecialidadUncheckedUpdateInput>;
};
/**
 * Especialidad delete
 */
export type EspecialidadDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: Prisma.EspecialidadSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: Prisma.EspecialidadOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EspecialidadInclude<ExtArgs> | null;
    /**
     * Filter which Especialidad to delete.
     */
    where: Prisma.EspecialidadWhereUniqueInput;
};
/**
 * Especialidad deleteMany
 */
export type EspecialidadDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Especialidads to delete
     */
    where?: Prisma.EspecialidadWhereInput;
    /**
     * Limit how many Especialidads to delete.
     */
    limit?: number;
};
/**
 * Especialidad.barberos
 */
export type Especialidad$barberosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.BarberoWhereInput;
    orderBy?: Prisma.BarberoOrderByWithRelationInput | Prisma.BarberoOrderByWithRelationInput[];
    cursor?: Prisma.BarberoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BarberoScalarFieldEnum | Prisma.BarberoScalarFieldEnum[];
};
/**
 * Especialidad.citas
 */
export type Especialidad$citasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Especialidad without action
 */
export type EspecialidadDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: Prisma.EspecialidadSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: Prisma.EspecialidadOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EspecialidadInclude<ExtArgs> | null;
};
//# sourceMappingURL=Especialidad.d.ts.map