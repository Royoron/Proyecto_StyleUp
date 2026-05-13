import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model EstadoBarbero
 *
 */
export type EstadoBarberoModel = runtime.Types.Result.DefaultSelection<Prisma.$EstadoBarberoPayload>;
export type AggregateEstadoBarbero = {
    _count: EstadoBarberoCountAggregateOutputType | null;
    _avg: EstadoBarberoAvgAggregateOutputType | null;
    _sum: EstadoBarberoSumAggregateOutputType | null;
    _min: EstadoBarberoMinAggregateOutputType | null;
    _max: EstadoBarberoMaxAggregateOutputType | null;
};
export type EstadoBarberoAvgAggregateOutputType = {
    id_estado: number | null;
};
export type EstadoBarberoSumAggregateOutputType = {
    id_estado: number | null;
};
export type EstadoBarberoMinAggregateOutputType = {
    id_estado: number | null;
    estado: string | null;
};
export type EstadoBarberoMaxAggregateOutputType = {
    id_estado: number | null;
    estado: string | null;
};
export type EstadoBarberoCountAggregateOutputType = {
    id_estado: number;
    estado: number;
    _all: number;
};
export type EstadoBarberoAvgAggregateInputType = {
    id_estado?: true;
};
export type EstadoBarberoSumAggregateInputType = {
    id_estado?: true;
};
export type EstadoBarberoMinAggregateInputType = {
    id_estado?: true;
    estado?: true;
};
export type EstadoBarberoMaxAggregateInputType = {
    id_estado?: true;
    estado?: true;
};
export type EstadoBarberoCountAggregateInputType = {
    id_estado?: true;
    estado?: true;
    _all?: true;
};
export type EstadoBarberoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which EstadoBarbero to aggregate.
     */
    where?: Prisma.EstadoBarberoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EstadoBarberos to fetch.
     */
    orderBy?: Prisma.EstadoBarberoOrderByWithRelationInput | Prisma.EstadoBarberoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.EstadoBarberoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EstadoBarberos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EstadoBarberos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned EstadoBarberos
    **/
    _count?: true | EstadoBarberoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: EstadoBarberoAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: EstadoBarberoSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: EstadoBarberoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: EstadoBarberoMaxAggregateInputType;
};
export type GetEstadoBarberoAggregateType<T extends EstadoBarberoAggregateArgs> = {
    [P in keyof T & keyof AggregateEstadoBarbero]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEstadoBarbero[P]> : Prisma.GetScalarType<T[P], AggregateEstadoBarbero[P]>;
};
export type EstadoBarberoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EstadoBarberoWhereInput;
    orderBy?: Prisma.EstadoBarberoOrderByWithAggregationInput | Prisma.EstadoBarberoOrderByWithAggregationInput[];
    by: Prisma.EstadoBarberoScalarFieldEnum[] | Prisma.EstadoBarberoScalarFieldEnum;
    having?: Prisma.EstadoBarberoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EstadoBarberoCountAggregateInputType | true;
    _avg?: EstadoBarberoAvgAggregateInputType;
    _sum?: EstadoBarberoSumAggregateInputType;
    _min?: EstadoBarberoMinAggregateInputType;
    _max?: EstadoBarberoMaxAggregateInputType;
};
export type EstadoBarberoGroupByOutputType = {
    id_estado: number;
    estado: string;
    _count: EstadoBarberoCountAggregateOutputType | null;
    _avg: EstadoBarberoAvgAggregateOutputType | null;
    _sum: EstadoBarberoSumAggregateOutputType | null;
    _min: EstadoBarberoMinAggregateOutputType | null;
    _max: EstadoBarberoMaxAggregateOutputType | null;
};
export type GetEstadoBarberoGroupByPayload<T extends EstadoBarberoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EstadoBarberoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EstadoBarberoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EstadoBarberoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EstadoBarberoGroupByOutputType[P]>;
}>>;
export type EstadoBarberoWhereInput = {
    AND?: Prisma.EstadoBarberoWhereInput | Prisma.EstadoBarberoWhereInput[];
    OR?: Prisma.EstadoBarberoWhereInput[];
    NOT?: Prisma.EstadoBarberoWhereInput | Prisma.EstadoBarberoWhereInput[];
    id_estado?: Prisma.IntFilter<"EstadoBarbero"> | number;
    estado?: Prisma.StringFilter<"EstadoBarbero"> | string;
    horarios?: Prisma.HorarioBarberoListRelationFilter;
};
export type EstadoBarberoOrderByWithRelationInput = {
    id_estado?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    horarios?: Prisma.HorarioBarberoOrderByRelationAggregateInput;
};
export type EstadoBarberoWhereUniqueInput = Prisma.AtLeast<{
    id_estado?: number;
    estado?: string;
    AND?: Prisma.EstadoBarberoWhereInput | Prisma.EstadoBarberoWhereInput[];
    OR?: Prisma.EstadoBarberoWhereInput[];
    NOT?: Prisma.EstadoBarberoWhereInput | Prisma.EstadoBarberoWhereInput[];
    horarios?: Prisma.HorarioBarberoListRelationFilter;
}, "id_estado" | "estado">;
export type EstadoBarberoOrderByWithAggregationInput = {
    id_estado?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    _count?: Prisma.EstadoBarberoCountOrderByAggregateInput;
    _avg?: Prisma.EstadoBarberoAvgOrderByAggregateInput;
    _max?: Prisma.EstadoBarberoMaxOrderByAggregateInput;
    _min?: Prisma.EstadoBarberoMinOrderByAggregateInput;
    _sum?: Prisma.EstadoBarberoSumOrderByAggregateInput;
};
export type EstadoBarberoScalarWhereWithAggregatesInput = {
    AND?: Prisma.EstadoBarberoScalarWhereWithAggregatesInput | Prisma.EstadoBarberoScalarWhereWithAggregatesInput[];
    OR?: Prisma.EstadoBarberoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EstadoBarberoScalarWhereWithAggregatesInput | Prisma.EstadoBarberoScalarWhereWithAggregatesInput[];
    id_estado?: Prisma.IntWithAggregatesFilter<"EstadoBarbero"> | number;
    estado?: Prisma.StringWithAggregatesFilter<"EstadoBarbero"> | string;
};
export type EstadoBarberoCreateInput = {
    estado: string;
    horarios?: Prisma.HorarioBarberoCreateNestedManyWithoutEstadoInput;
};
export type EstadoBarberoUncheckedCreateInput = {
    id_estado?: number;
    estado: string;
    horarios?: Prisma.HorarioBarberoUncheckedCreateNestedManyWithoutEstadoInput;
};
export type EstadoBarberoUpdateInput = {
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    horarios?: Prisma.HorarioBarberoUpdateManyWithoutEstadoNestedInput;
};
export type EstadoBarberoUncheckedUpdateInput = {
    id_estado?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    horarios?: Prisma.HorarioBarberoUncheckedUpdateManyWithoutEstadoNestedInput;
};
export type EstadoBarberoCreateManyInput = {
    id_estado?: number;
    estado: string;
};
export type EstadoBarberoUpdateManyMutationInput = {
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EstadoBarberoUncheckedUpdateManyInput = {
    id_estado?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EstadoBarberoCountOrderByAggregateInput = {
    id_estado?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type EstadoBarberoAvgOrderByAggregateInput = {
    id_estado?: Prisma.SortOrder;
};
export type EstadoBarberoMaxOrderByAggregateInput = {
    id_estado?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type EstadoBarberoMinOrderByAggregateInput = {
    id_estado?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type EstadoBarberoSumOrderByAggregateInput = {
    id_estado?: Prisma.SortOrder;
};
export type EstadoBarberoScalarRelationFilter = {
    is?: Prisma.EstadoBarberoWhereInput;
    isNot?: Prisma.EstadoBarberoWhereInput;
};
export type EstadoBarberoCreateNestedOneWithoutHorariosInput = {
    create?: Prisma.XOR<Prisma.EstadoBarberoCreateWithoutHorariosInput, Prisma.EstadoBarberoUncheckedCreateWithoutHorariosInput>;
    connectOrCreate?: Prisma.EstadoBarberoCreateOrConnectWithoutHorariosInput;
    connect?: Prisma.EstadoBarberoWhereUniqueInput;
};
export type EstadoBarberoUpdateOneRequiredWithoutHorariosNestedInput = {
    create?: Prisma.XOR<Prisma.EstadoBarberoCreateWithoutHorariosInput, Prisma.EstadoBarberoUncheckedCreateWithoutHorariosInput>;
    connectOrCreate?: Prisma.EstadoBarberoCreateOrConnectWithoutHorariosInput;
    upsert?: Prisma.EstadoBarberoUpsertWithoutHorariosInput;
    connect?: Prisma.EstadoBarberoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EstadoBarberoUpdateToOneWithWhereWithoutHorariosInput, Prisma.EstadoBarberoUpdateWithoutHorariosInput>, Prisma.EstadoBarberoUncheckedUpdateWithoutHorariosInput>;
};
export type EstadoBarberoCreateWithoutHorariosInput = {
    estado: string;
};
export type EstadoBarberoUncheckedCreateWithoutHorariosInput = {
    id_estado?: number;
    estado: string;
};
export type EstadoBarberoCreateOrConnectWithoutHorariosInput = {
    where: Prisma.EstadoBarberoWhereUniqueInput;
    create: Prisma.XOR<Prisma.EstadoBarberoCreateWithoutHorariosInput, Prisma.EstadoBarberoUncheckedCreateWithoutHorariosInput>;
};
export type EstadoBarberoUpsertWithoutHorariosInput = {
    update: Prisma.XOR<Prisma.EstadoBarberoUpdateWithoutHorariosInput, Prisma.EstadoBarberoUncheckedUpdateWithoutHorariosInput>;
    create: Prisma.XOR<Prisma.EstadoBarberoCreateWithoutHorariosInput, Prisma.EstadoBarberoUncheckedCreateWithoutHorariosInput>;
    where?: Prisma.EstadoBarberoWhereInput;
};
export type EstadoBarberoUpdateToOneWithWhereWithoutHorariosInput = {
    where?: Prisma.EstadoBarberoWhereInput;
    data: Prisma.XOR<Prisma.EstadoBarberoUpdateWithoutHorariosInput, Prisma.EstadoBarberoUncheckedUpdateWithoutHorariosInput>;
};
export type EstadoBarberoUpdateWithoutHorariosInput = {
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EstadoBarberoUncheckedUpdateWithoutHorariosInput = {
    id_estado?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
};
/**
 * Count Type EstadoBarberoCountOutputType
 */
export type EstadoBarberoCountOutputType = {
    horarios: number;
};
export type EstadoBarberoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    horarios?: boolean | EstadoBarberoCountOutputTypeCountHorariosArgs;
};
/**
 * EstadoBarberoCountOutputType without action
 */
export type EstadoBarberoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoBarberoCountOutputType
     */
    select?: Prisma.EstadoBarberoCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * EstadoBarberoCountOutputType without action
 */
export type EstadoBarberoCountOutputTypeCountHorariosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HorarioBarberoWhereInput;
};
export type EstadoBarberoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_estado?: boolean;
    estado?: boolean;
    horarios?: boolean | Prisma.EstadoBarbero$horariosArgs<ExtArgs>;
    _count?: boolean | Prisma.EstadoBarberoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["estadoBarbero"]>;
export type EstadoBarberoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_estado?: boolean;
    estado?: boolean;
}, ExtArgs["result"]["estadoBarbero"]>;
export type EstadoBarberoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_estado?: boolean;
    estado?: boolean;
}, ExtArgs["result"]["estadoBarbero"]>;
export type EstadoBarberoSelectScalar = {
    id_estado?: boolean;
    estado?: boolean;
};
export type EstadoBarberoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_estado" | "estado", ExtArgs["result"]["estadoBarbero"]>;
export type EstadoBarberoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    horarios?: boolean | Prisma.EstadoBarbero$horariosArgs<ExtArgs>;
    _count?: boolean | Prisma.EstadoBarberoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type EstadoBarberoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type EstadoBarberoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $EstadoBarberoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EstadoBarbero";
    objects: {
        horarios: Prisma.$HorarioBarberoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_estado: number;
        estado: string;
    }, ExtArgs["result"]["estadoBarbero"]>;
    composites: {};
};
export type EstadoBarberoGetPayload<S extends boolean | null | undefined | EstadoBarberoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EstadoBarberoPayload, S>;
export type EstadoBarberoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EstadoBarberoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EstadoBarberoCountAggregateInputType | true;
};
export interface EstadoBarberoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EstadoBarbero'];
        meta: {
            name: 'EstadoBarbero';
        };
    };
    /**
     * Find zero or one EstadoBarbero that matches the filter.
     * @param {EstadoBarberoFindUniqueArgs} args - Arguments to find a EstadoBarbero
     * @example
     * // Get one EstadoBarbero
     * const estadoBarbero = await prisma.estadoBarbero.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EstadoBarberoFindUniqueArgs>(args: Prisma.SelectSubset<T, EstadoBarberoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EstadoBarberoClient<runtime.Types.Result.GetResult<Prisma.$EstadoBarberoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one EstadoBarbero that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EstadoBarberoFindUniqueOrThrowArgs} args - Arguments to find a EstadoBarbero
     * @example
     * // Get one EstadoBarbero
     * const estadoBarbero = await prisma.estadoBarbero.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EstadoBarberoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EstadoBarberoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EstadoBarberoClient<runtime.Types.Result.GetResult<Prisma.$EstadoBarberoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first EstadoBarbero that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoBarberoFindFirstArgs} args - Arguments to find a EstadoBarbero
     * @example
     * // Get one EstadoBarbero
     * const estadoBarbero = await prisma.estadoBarbero.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EstadoBarberoFindFirstArgs>(args?: Prisma.SelectSubset<T, EstadoBarberoFindFirstArgs<ExtArgs>>): Prisma.Prisma__EstadoBarberoClient<runtime.Types.Result.GetResult<Prisma.$EstadoBarberoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first EstadoBarbero that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoBarberoFindFirstOrThrowArgs} args - Arguments to find a EstadoBarbero
     * @example
     * // Get one EstadoBarbero
     * const estadoBarbero = await prisma.estadoBarbero.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EstadoBarberoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EstadoBarberoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EstadoBarberoClient<runtime.Types.Result.GetResult<Prisma.$EstadoBarberoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more EstadoBarberos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoBarberoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EstadoBarberos
     * const estadoBarberos = await prisma.estadoBarbero.findMany()
     *
     * // Get first 10 EstadoBarberos
     * const estadoBarberos = await prisma.estadoBarbero.findMany({ take: 10 })
     *
     * // Only select the `id_estado`
     * const estadoBarberoWithId_estadoOnly = await prisma.estadoBarbero.findMany({ select: { id_estado: true } })
     *
     */
    findMany<T extends EstadoBarberoFindManyArgs>(args?: Prisma.SelectSubset<T, EstadoBarberoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EstadoBarberoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a EstadoBarbero.
     * @param {EstadoBarberoCreateArgs} args - Arguments to create a EstadoBarbero.
     * @example
     * // Create one EstadoBarbero
     * const EstadoBarbero = await prisma.estadoBarbero.create({
     *   data: {
     *     // ... data to create a EstadoBarbero
     *   }
     * })
     *
     */
    create<T extends EstadoBarberoCreateArgs>(args: Prisma.SelectSubset<T, EstadoBarberoCreateArgs<ExtArgs>>): Prisma.Prisma__EstadoBarberoClient<runtime.Types.Result.GetResult<Prisma.$EstadoBarberoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many EstadoBarberos.
     * @param {EstadoBarberoCreateManyArgs} args - Arguments to create many EstadoBarberos.
     * @example
     * // Create many EstadoBarberos
     * const estadoBarbero = await prisma.estadoBarbero.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends EstadoBarberoCreateManyArgs>(args?: Prisma.SelectSubset<T, EstadoBarberoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many EstadoBarberos and returns the data saved in the database.
     * @param {EstadoBarberoCreateManyAndReturnArgs} args - Arguments to create many EstadoBarberos.
     * @example
     * // Create many EstadoBarberos
     * const estadoBarbero = await prisma.estadoBarbero.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many EstadoBarberos and only return the `id_estado`
     * const estadoBarberoWithId_estadoOnly = await prisma.estadoBarbero.createManyAndReturn({
     *   select: { id_estado: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends EstadoBarberoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EstadoBarberoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EstadoBarberoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a EstadoBarbero.
     * @param {EstadoBarberoDeleteArgs} args - Arguments to delete one EstadoBarbero.
     * @example
     * // Delete one EstadoBarbero
     * const EstadoBarbero = await prisma.estadoBarbero.delete({
     *   where: {
     *     // ... filter to delete one EstadoBarbero
     *   }
     * })
     *
     */
    delete<T extends EstadoBarberoDeleteArgs>(args: Prisma.SelectSubset<T, EstadoBarberoDeleteArgs<ExtArgs>>): Prisma.Prisma__EstadoBarberoClient<runtime.Types.Result.GetResult<Prisma.$EstadoBarberoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one EstadoBarbero.
     * @param {EstadoBarberoUpdateArgs} args - Arguments to update one EstadoBarbero.
     * @example
     * // Update one EstadoBarbero
     * const estadoBarbero = await prisma.estadoBarbero.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends EstadoBarberoUpdateArgs>(args: Prisma.SelectSubset<T, EstadoBarberoUpdateArgs<ExtArgs>>): Prisma.Prisma__EstadoBarberoClient<runtime.Types.Result.GetResult<Prisma.$EstadoBarberoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more EstadoBarberos.
     * @param {EstadoBarberoDeleteManyArgs} args - Arguments to filter EstadoBarberos to delete.
     * @example
     * // Delete a few EstadoBarberos
     * const { count } = await prisma.estadoBarbero.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends EstadoBarberoDeleteManyArgs>(args?: Prisma.SelectSubset<T, EstadoBarberoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more EstadoBarberos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoBarberoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EstadoBarberos
     * const estadoBarbero = await prisma.estadoBarbero.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends EstadoBarberoUpdateManyArgs>(args: Prisma.SelectSubset<T, EstadoBarberoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more EstadoBarberos and returns the data updated in the database.
     * @param {EstadoBarberoUpdateManyAndReturnArgs} args - Arguments to update many EstadoBarberos.
     * @example
     * // Update many EstadoBarberos
     * const estadoBarbero = await prisma.estadoBarbero.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more EstadoBarberos and only return the `id_estado`
     * const estadoBarberoWithId_estadoOnly = await prisma.estadoBarbero.updateManyAndReturn({
     *   select: { id_estado: true },
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
    updateManyAndReturn<T extends EstadoBarberoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EstadoBarberoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EstadoBarberoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one EstadoBarbero.
     * @param {EstadoBarberoUpsertArgs} args - Arguments to update or create a EstadoBarbero.
     * @example
     * // Update or create a EstadoBarbero
     * const estadoBarbero = await prisma.estadoBarbero.upsert({
     *   create: {
     *     // ... data to create a EstadoBarbero
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EstadoBarbero we want to update
     *   }
     * })
     */
    upsert<T extends EstadoBarberoUpsertArgs>(args: Prisma.SelectSubset<T, EstadoBarberoUpsertArgs<ExtArgs>>): Prisma.Prisma__EstadoBarberoClient<runtime.Types.Result.GetResult<Prisma.$EstadoBarberoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of EstadoBarberos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoBarberoCountArgs} args - Arguments to filter EstadoBarberos to count.
     * @example
     * // Count the number of EstadoBarberos
     * const count = await prisma.estadoBarbero.count({
     *   where: {
     *     // ... the filter for the EstadoBarberos we want to count
     *   }
     * })
    **/
    count<T extends EstadoBarberoCountArgs>(args?: Prisma.Subset<T, EstadoBarberoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EstadoBarberoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a EstadoBarbero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoBarberoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EstadoBarberoAggregateArgs>(args: Prisma.Subset<T, EstadoBarberoAggregateArgs>): Prisma.PrismaPromise<GetEstadoBarberoAggregateType<T>>;
    /**
     * Group by EstadoBarbero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoBarberoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends EstadoBarberoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EstadoBarberoGroupByArgs['orderBy'];
    } : {
        orderBy?: EstadoBarberoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EstadoBarberoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstadoBarberoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the EstadoBarbero model
     */
    readonly fields: EstadoBarberoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for EstadoBarbero.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__EstadoBarberoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    horarios<T extends Prisma.EstadoBarbero$horariosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EstadoBarbero$horariosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HorarioBarberoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the EstadoBarbero model
 */
export interface EstadoBarberoFieldRefs {
    readonly id_estado: Prisma.FieldRef<"EstadoBarbero", 'Int'>;
    readonly estado: Prisma.FieldRef<"EstadoBarbero", 'String'>;
}
/**
 * EstadoBarbero findUnique
 */
export type EstadoBarberoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoBarbero
     */
    select?: Prisma.EstadoBarberoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EstadoBarbero
     */
    omit?: Prisma.EstadoBarberoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EstadoBarberoInclude<ExtArgs> | null;
    /**
     * Filter, which EstadoBarbero to fetch.
     */
    where: Prisma.EstadoBarberoWhereUniqueInput;
};
/**
 * EstadoBarbero findUniqueOrThrow
 */
export type EstadoBarberoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoBarbero
     */
    select?: Prisma.EstadoBarberoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EstadoBarbero
     */
    omit?: Prisma.EstadoBarberoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EstadoBarberoInclude<ExtArgs> | null;
    /**
     * Filter, which EstadoBarbero to fetch.
     */
    where: Prisma.EstadoBarberoWhereUniqueInput;
};
/**
 * EstadoBarbero findFirst
 */
export type EstadoBarberoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoBarbero
     */
    select?: Prisma.EstadoBarberoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EstadoBarbero
     */
    omit?: Prisma.EstadoBarberoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EstadoBarberoInclude<ExtArgs> | null;
    /**
     * Filter, which EstadoBarbero to fetch.
     */
    where?: Prisma.EstadoBarberoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EstadoBarberos to fetch.
     */
    orderBy?: Prisma.EstadoBarberoOrderByWithRelationInput | Prisma.EstadoBarberoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EstadoBarberos.
     */
    cursor?: Prisma.EstadoBarberoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EstadoBarberos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EstadoBarberos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EstadoBarberos.
     */
    distinct?: Prisma.EstadoBarberoScalarFieldEnum | Prisma.EstadoBarberoScalarFieldEnum[];
};
/**
 * EstadoBarbero findFirstOrThrow
 */
export type EstadoBarberoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoBarbero
     */
    select?: Prisma.EstadoBarberoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EstadoBarbero
     */
    omit?: Prisma.EstadoBarberoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EstadoBarberoInclude<ExtArgs> | null;
    /**
     * Filter, which EstadoBarbero to fetch.
     */
    where?: Prisma.EstadoBarberoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EstadoBarberos to fetch.
     */
    orderBy?: Prisma.EstadoBarberoOrderByWithRelationInput | Prisma.EstadoBarberoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EstadoBarberos.
     */
    cursor?: Prisma.EstadoBarberoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EstadoBarberos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EstadoBarberos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EstadoBarberos.
     */
    distinct?: Prisma.EstadoBarberoScalarFieldEnum | Prisma.EstadoBarberoScalarFieldEnum[];
};
/**
 * EstadoBarbero findMany
 */
export type EstadoBarberoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoBarbero
     */
    select?: Prisma.EstadoBarberoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EstadoBarbero
     */
    omit?: Prisma.EstadoBarberoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EstadoBarberoInclude<ExtArgs> | null;
    /**
     * Filter, which EstadoBarberos to fetch.
     */
    where?: Prisma.EstadoBarberoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EstadoBarberos to fetch.
     */
    orderBy?: Prisma.EstadoBarberoOrderByWithRelationInput | Prisma.EstadoBarberoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing EstadoBarberos.
     */
    cursor?: Prisma.EstadoBarberoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EstadoBarberos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EstadoBarberos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EstadoBarberos.
     */
    distinct?: Prisma.EstadoBarberoScalarFieldEnum | Prisma.EstadoBarberoScalarFieldEnum[];
};
/**
 * EstadoBarbero create
 */
export type EstadoBarberoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoBarbero
     */
    select?: Prisma.EstadoBarberoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EstadoBarbero
     */
    omit?: Prisma.EstadoBarberoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EstadoBarberoInclude<ExtArgs> | null;
    /**
     * The data needed to create a EstadoBarbero.
     */
    data: Prisma.XOR<Prisma.EstadoBarberoCreateInput, Prisma.EstadoBarberoUncheckedCreateInput>;
};
/**
 * EstadoBarbero createMany
 */
export type EstadoBarberoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many EstadoBarberos.
     */
    data: Prisma.EstadoBarberoCreateManyInput | Prisma.EstadoBarberoCreateManyInput[];
};
/**
 * EstadoBarbero createManyAndReturn
 */
export type EstadoBarberoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoBarbero
     */
    select?: Prisma.EstadoBarberoSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EstadoBarbero
     */
    omit?: Prisma.EstadoBarberoOmit<ExtArgs> | null;
    /**
     * The data used to create many EstadoBarberos.
     */
    data: Prisma.EstadoBarberoCreateManyInput | Prisma.EstadoBarberoCreateManyInput[];
};
/**
 * EstadoBarbero update
 */
export type EstadoBarberoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoBarbero
     */
    select?: Prisma.EstadoBarberoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EstadoBarbero
     */
    omit?: Prisma.EstadoBarberoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EstadoBarberoInclude<ExtArgs> | null;
    /**
     * The data needed to update a EstadoBarbero.
     */
    data: Prisma.XOR<Prisma.EstadoBarberoUpdateInput, Prisma.EstadoBarberoUncheckedUpdateInput>;
    /**
     * Choose, which EstadoBarbero to update.
     */
    where: Prisma.EstadoBarberoWhereUniqueInput;
};
/**
 * EstadoBarbero updateMany
 */
export type EstadoBarberoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update EstadoBarberos.
     */
    data: Prisma.XOR<Prisma.EstadoBarberoUpdateManyMutationInput, Prisma.EstadoBarberoUncheckedUpdateManyInput>;
    /**
     * Filter which EstadoBarberos to update
     */
    where?: Prisma.EstadoBarberoWhereInput;
    /**
     * Limit how many EstadoBarberos to update.
     */
    limit?: number;
};
/**
 * EstadoBarbero updateManyAndReturn
 */
export type EstadoBarberoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoBarbero
     */
    select?: Prisma.EstadoBarberoSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EstadoBarbero
     */
    omit?: Prisma.EstadoBarberoOmit<ExtArgs> | null;
    /**
     * The data used to update EstadoBarberos.
     */
    data: Prisma.XOR<Prisma.EstadoBarberoUpdateManyMutationInput, Prisma.EstadoBarberoUncheckedUpdateManyInput>;
    /**
     * Filter which EstadoBarberos to update
     */
    where?: Prisma.EstadoBarberoWhereInput;
    /**
     * Limit how many EstadoBarberos to update.
     */
    limit?: number;
};
/**
 * EstadoBarbero upsert
 */
export type EstadoBarberoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoBarbero
     */
    select?: Prisma.EstadoBarberoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EstadoBarbero
     */
    omit?: Prisma.EstadoBarberoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EstadoBarberoInclude<ExtArgs> | null;
    /**
     * The filter to search for the EstadoBarbero to update in case it exists.
     */
    where: Prisma.EstadoBarberoWhereUniqueInput;
    /**
     * In case the EstadoBarbero found by the `where` argument doesn't exist, create a new EstadoBarbero with this data.
     */
    create: Prisma.XOR<Prisma.EstadoBarberoCreateInput, Prisma.EstadoBarberoUncheckedCreateInput>;
    /**
     * In case the EstadoBarbero was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.EstadoBarberoUpdateInput, Prisma.EstadoBarberoUncheckedUpdateInput>;
};
/**
 * EstadoBarbero delete
 */
export type EstadoBarberoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoBarbero
     */
    select?: Prisma.EstadoBarberoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EstadoBarbero
     */
    omit?: Prisma.EstadoBarberoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EstadoBarberoInclude<ExtArgs> | null;
    /**
     * Filter which EstadoBarbero to delete.
     */
    where: Prisma.EstadoBarberoWhereUniqueInput;
};
/**
 * EstadoBarbero deleteMany
 */
export type EstadoBarberoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which EstadoBarberos to delete
     */
    where?: Prisma.EstadoBarberoWhereInput;
    /**
     * Limit how many EstadoBarberos to delete.
     */
    limit?: number;
};
/**
 * EstadoBarbero.horarios
 */
export type EstadoBarbero$horariosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * EstadoBarbero without action
 */
export type EstadoBarberoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoBarbero
     */
    select?: Prisma.EstadoBarberoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EstadoBarbero
     */
    omit?: Prisma.EstadoBarberoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EstadoBarberoInclude<ExtArgs> | null;
};
//# sourceMappingURL=EstadoBarbero.d.ts.map