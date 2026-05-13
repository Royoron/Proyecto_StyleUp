import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Cliente
 *
 */
export type ClienteModel = runtime.Types.Result.DefaultSelection<Prisma.$ClientePayload>;
export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null;
    _min: ClienteMinAggregateOutputType | null;
    _max: ClienteMaxAggregateOutputType | null;
};
export type ClienteMinAggregateOutputType = {
    cedula_cliente: string | null;
    nombre: string | null;
    apellido: string | null;
    telefono: string | null;
    correo: string | null;
    contrasena: string | null;
    fecha_registro: Date | null;
};
export type ClienteMaxAggregateOutputType = {
    cedula_cliente: string | null;
    nombre: string | null;
    apellido: string | null;
    telefono: string | null;
    correo: string | null;
    contrasena: string | null;
    fecha_registro: Date | null;
};
export type ClienteCountAggregateOutputType = {
    cedula_cliente: number;
    nombre: number;
    apellido: number;
    telefono: number;
    correo: number;
    contrasena: number;
    fecha_registro: number;
    _all: number;
};
export type ClienteMinAggregateInputType = {
    cedula_cliente?: true;
    nombre?: true;
    apellido?: true;
    telefono?: true;
    correo?: true;
    contrasena?: true;
    fecha_registro?: true;
};
export type ClienteMaxAggregateInputType = {
    cedula_cliente?: true;
    nombre?: true;
    apellido?: true;
    telefono?: true;
    correo?: true;
    contrasena?: true;
    fecha_registro?: true;
};
export type ClienteCountAggregateInputType = {
    cedula_cliente?: true;
    nombre?: true;
    apellido?: true;
    telefono?: true;
    correo?: true;
    contrasena?: true;
    fecha_registro?: true;
    _all?: true;
};
export type ClienteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: Prisma.ClienteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Clientes to fetch.
     */
    orderBy?: Prisma.ClienteOrderByWithRelationInput | Prisma.ClienteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ClienteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Clientes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType;
};
export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
    [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCliente[P]> : Prisma.GetScalarType<T[P], AggregateCliente[P]>;
};
export type ClienteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClienteWhereInput;
    orderBy?: Prisma.ClienteOrderByWithAggregationInput | Prisma.ClienteOrderByWithAggregationInput[];
    by: Prisma.ClienteScalarFieldEnum[] | Prisma.ClienteScalarFieldEnum;
    having?: Prisma.ClienteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ClienteCountAggregateInputType | true;
    _min?: ClienteMinAggregateInputType;
    _max?: ClienteMaxAggregateInputType;
};
export type ClienteGroupByOutputType = {
    cedula_cliente: string;
    nombre: string;
    apellido: string;
    telefono: string;
    correo: string;
    contrasena: string;
    fecha_registro: Date;
    _count: ClienteCountAggregateOutputType | null;
    _min: ClienteMinAggregateOutputType | null;
    _max: ClienteMaxAggregateOutputType | null;
};
export type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ClienteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ClienteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ClienteGroupByOutputType[P]>;
}>>;
export type ClienteWhereInput = {
    AND?: Prisma.ClienteWhereInput | Prisma.ClienteWhereInput[];
    OR?: Prisma.ClienteWhereInput[];
    NOT?: Prisma.ClienteWhereInput | Prisma.ClienteWhereInput[];
    cedula_cliente?: Prisma.StringFilter<"Cliente"> | string;
    nombre?: Prisma.StringFilter<"Cliente"> | string;
    apellido?: Prisma.StringFilter<"Cliente"> | string;
    telefono?: Prisma.StringFilter<"Cliente"> | string;
    correo?: Prisma.StringFilter<"Cliente"> | string;
    contrasena?: Prisma.StringFilter<"Cliente"> | string;
    fecha_registro?: Prisma.DateTimeFilter<"Cliente"> | Date | string;
    citas?: Prisma.CitaListRelationFilter;
    historial?: Prisma.HistorialCitaListRelationFilter;
};
export type ClienteOrderByWithRelationInput = {
    cedula_cliente?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    apellido?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    correo?: Prisma.SortOrder;
    contrasena?: Prisma.SortOrder;
    fecha_registro?: Prisma.SortOrder;
    citas?: Prisma.CitaOrderByRelationAggregateInput;
    historial?: Prisma.HistorialCitaOrderByRelationAggregateInput;
};
export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    cedula_cliente?: string;
    correo?: string;
    AND?: Prisma.ClienteWhereInput | Prisma.ClienteWhereInput[];
    OR?: Prisma.ClienteWhereInput[];
    NOT?: Prisma.ClienteWhereInput | Prisma.ClienteWhereInput[];
    nombre?: Prisma.StringFilter<"Cliente"> | string;
    apellido?: Prisma.StringFilter<"Cliente"> | string;
    telefono?: Prisma.StringFilter<"Cliente"> | string;
    contrasena?: Prisma.StringFilter<"Cliente"> | string;
    fecha_registro?: Prisma.DateTimeFilter<"Cliente"> | Date | string;
    citas?: Prisma.CitaListRelationFilter;
    historial?: Prisma.HistorialCitaListRelationFilter;
}, "cedula_cliente" | "correo">;
export type ClienteOrderByWithAggregationInput = {
    cedula_cliente?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    apellido?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    correo?: Prisma.SortOrder;
    contrasena?: Prisma.SortOrder;
    fecha_registro?: Prisma.SortOrder;
    _count?: Prisma.ClienteCountOrderByAggregateInput;
    _max?: Prisma.ClienteMaxOrderByAggregateInput;
    _min?: Prisma.ClienteMinOrderByAggregateInput;
};
export type ClienteScalarWhereWithAggregatesInput = {
    AND?: Prisma.ClienteScalarWhereWithAggregatesInput | Prisma.ClienteScalarWhereWithAggregatesInput[];
    OR?: Prisma.ClienteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ClienteScalarWhereWithAggregatesInput | Prisma.ClienteScalarWhereWithAggregatesInput[];
    cedula_cliente?: Prisma.StringWithAggregatesFilter<"Cliente"> | string;
    nombre?: Prisma.StringWithAggregatesFilter<"Cliente"> | string;
    apellido?: Prisma.StringWithAggregatesFilter<"Cliente"> | string;
    telefono?: Prisma.StringWithAggregatesFilter<"Cliente"> | string;
    correo?: Prisma.StringWithAggregatesFilter<"Cliente"> | string;
    contrasena?: Prisma.StringWithAggregatesFilter<"Cliente"> | string;
    fecha_registro?: Prisma.DateTimeWithAggregatesFilter<"Cliente"> | Date | string;
};
export type ClienteCreateInput = {
    cedula_cliente: string;
    nombre: string;
    apellido: string;
    telefono: string;
    correo: string;
    contrasena: string;
    fecha_registro?: Date | string;
    citas?: Prisma.CitaCreateNestedManyWithoutClienteInput;
    historial?: Prisma.HistorialCitaCreateNestedManyWithoutClienteInput;
};
export type ClienteUncheckedCreateInput = {
    cedula_cliente: string;
    nombre: string;
    apellido: string;
    telefono: string;
    correo: string;
    contrasena: string;
    fecha_registro?: Date | string;
    citas?: Prisma.CitaUncheckedCreateNestedManyWithoutClienteInput;
    historial?: Prisma.HistorialCitaUncheckedCreateNestedManyWithoutClienteInput;
};
export type ClienteUpdateInput = {
    cedula_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    contrasena?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    citas?: Prisma.CitaUpdateManyWithoutClienteNestedInput;
    historial?: Prisma.HistorialCitaUpdateManyWithoutClienteNestedInput;
};
export type ClienteUncheckedUpdateInput = {
    cedula_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    contrasena?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    citas?: Prisma.CitaUncheckedUpdateManyWithoutClienteNestedInput;
    historial?: Prisma.HistorialCitaUncheckedUpdateManyWithoutClienteNestedInput;
};
export type ClienteCreateManyInput = {
    cedula_cliente: string;
    nombre: string;
    apellido: string;
    telefono: string;
    correo: string;
    contrasena: string;
    fecha_registro?: Date | string;
};
export type ClienteUpdateManyMutationInput = {
    cedula_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    contrasena?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClienteUncheckedUpdateManyInput = {
    cedula_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    contrasena?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClienteCountOrderByAggregateInput = {
    cedula_cliente?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    apellido?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    correo?: Prisma.SortOrder;
    contrasena?: Prisma.SortOrder;
    fecha_registro?: Prisma.SortOrder;
};
export type ClienteMaxOrderByAggregateInput = {
    cedula_cliente?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    apellido?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    correo?: Prisma.SortOrder;
    contrasena?: Prisma.SortOrder;
    fecha_registro?: Prisma.SortOrder;
};
export type ClienteMinOrderByAggregateInput = {
    cedula_cliente?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    apellido?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    correo?: Prisma.SortOrder;
    contrasena?: Prisma.SortOrder;
    fecha_registro?: Prisma.SortOrder;
};
export type ClienteScalarRelationFilter = {
    is?: Prisma.ClienteWhereInput;
    isNot?: Prisma.ClienteWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type ClienteCreateNestedOneWithoutCitasInput = {
    create?: Prisma.XOR<Prisma.ClienteCreateWithoutCitasInput, Prisma.ClienteUncheckedCreateWithoutCitasInput>;
    connectOrCreate?: Prisma.ClienteCreateOrConnectWithoutCitasInput;
    connect?: Prisma.ClienteWhereUniqueInput;
};
export type ClienteUpdateOneRequiredWithoutCitasNestedInput = {
    create?: Prisma.XOR<Prisma.ClienteCreateWithoutCitasInput, Prisma.ClienteUncheckedCreateWithoutCitasInput>;
    connectOrCreate?: Prisma.ClienteCreateOrConnectWithoutCitasInput;
    upsert?: Prisma.ClienteUpsertWithoutCitasInput;
    connect?: Prisma.ClienteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClienteUpdateToOneWithWhereWithoutCitasInput, Prisma.ClienteUpdateWithoutCitasInput>, Prisma.ClienteUncheckedUpdateWithoutCitasInput>;
};
export type ClienteCreateNestedOneWithoutHistorialInput = {
    create?: Prisma.XOR<Prisma.ClienteCreateWithoutHistorialInput, Prisma.ClienteUncheckedCreateWithoutHistorialInput>;
    connectOrCreate?: Prisma.ClienteCreateOrConnectWithoutHistorialInput;
    connect?: Prisma.ClienteWhereUniqueInput;
};
export type ClienteUpdateOneRequiredWithoutHistorialNestedInput = {
    create?: Prisma.XOR<Prisma.ClienteCreateWithoutHistorialInput, Prisma.ClienteUncheckedCreateWithoutHistorialInput>;
    connectOrCreate?: Prisma.ClienteCreateOrConnectWithoutHistorialInput;
    upsert?: Prisma.ClienteUpsertWithoutHistorialInput;
    connect?: Prisma.ClienteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClienteUpdateToOneWithWhereWithoutHistorialInput, Prisma.ClienteUpdateWithoutHistorialInput>, Prisma.ClienteUncheckedUpdateWithoutHistorialInput>;
};
export type ClienteCreateWithoutCitasInput = {
    cedula_cliente: string;
    nombre: string;
    apellido: string;
    telefono: string;
    correo: string;
    contrasena: string;
    fecha_registro?: Date | string;
    historial?: Prisma.HistorialCitaCreateNestedManyWithoutClienteInput;
};
export type ClienteUncheckedCreateWithoutCitasInput = {
    cedula_cliente: string;
    nombre: string;
    apellido: string;
    telefono: string;
    correo: string;
    contrasena: string;
    fecha_registro?: Date | string;
    historial?: Prisma.HistorialCitaUncheckedCreateNestedManyWithoutClienteInput;
};
export type ClienteCreateOrConnectWithoutCitasInput = {
    where: Prisma.ClienteWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClienteCreateWithoutCitasInput, Prisma.ClienteUncheckedCreateWithoutCitasInput>;
};
export type ClienteUpsertWithoutCitasInput = {
    update: Prisma.XOR<Prisma.ClienteUpdateWithoutCitasInput, Prisma.ClienteUncheckedUpdateWithoutCitasInput>;
    create: Prisma.XOR<Prisma.ClienteCreateWithoutCitasInput, Prisma.ClienteUncheckedCreateWithoutCitasInput>;
    where?: Prisma.ClienteWhereInput;
};
export type ClienteUpdateToOneWithWhereWithoutCitasInput = {
    where?: Prisma.ClienteWhereInput;
    data: Prisma.XOR<Prisma.ClienteUpdateWithoutCitasInput, Prisma.ClienteUncheckedUpdateWithoutCitasInput>;
};
export type ClienteUpdateWithoutCitasInput = {
    cedula_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    contrasena?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    historial?: Prisma.HistorialCitaUpdateManyWithoutClienteNestedInput;
};
export type ClienteUncheckedUpdateWithoutCitasInput = {
    cedula_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    contrasena?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    historial?: Prisma.HistorialCitaUncheckedUpdateManyWithoutClienteNestedInput;
};
export type ClienteCreateWithoutHistorialInput = {
    cedula_cliente: string;
    nombre: string;
    apellido: string;
    telefono: string;
    correo: string;
    contrasena: string;
    fecha_registro?: Date | string;
    citas?: Prisma.CitaCreateNestedManyWithoutClienteInput;
};
export type ClienteUncheckedCreateWithoutHistorialInput = {
    cedula_cliente: string;
    nombre: string;
    apellido: string;
    telefono: string;
    correo: string;
    contrasena: string;
    fecha_registro?: Date | string;
    citas?: Prisma.CitaUncheckedCreateNestedManyWithoutClienteInput;
};
export type ClienteCreateOrConnectWithoutHistorialInput = {
    where: Prisma.ClienteWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClienteCreateWithoutHistorialInput, Prisma.ClienteUncheckedCreateWithoutHistorialInput>;
};
export type ClienteUpsertWithoutHistorialInput = {
    update: Prisma.XOR<Prisma.ClienteUpdateWithoutHistorialInput, Prisma.ClienteUncheckedUpdateWithoutHistorialInput>;
    create: Prisma.XOR<Prisma.ClienteCreateWithoutHistorialInput, Prisma.ClienteUncheckedCreateWithoutHistorialInput>;
    where?: Prisma.ClienteWhereInput;
};
export type ClienteUpdateToOneWithWhereWithoutHistorialInput = {
    where?: Prisma.ClienteWhereInput;
    data: Prisma.XOR<Prisma.ClienteUpdateWithoutHistorialInput, Prisma.ClienteUncheckedUpdateWithoutHistorialInput>;
};
export type ClienteUpdateWithoutHistorialInput = {
    cedula_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    contrasena?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    citas?: Prisma.CitaUpdateManyWithoutClienteNestedInput;
};
export type ClienteUncheckedUpdateWithoutHistorialInput = {
    cedula_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellido?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    correo?: Prisma.StringFieldUpdateOperationsInput | string;
    contrasena?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    citas?: Prisma.CitaUncheckedUpdateManyWithoutClienteNestedInput;
};
/**
 * Count Type ClienteCountOutputType
 */
export type ClienteCountOutputType = {
    citas: number;
    historial: number;
};
export type ClienteCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    citas?: boolean | ClienteCountOutputTypeCountCitasArgs;
    historial?: boolean | ClienteCountOutputTypeCountHistorialArgs;
};
/**
 * ClienteCountOutputType without action
 */
export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: Prisma.ClienteCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ClienteCountOutputType without action
 */
export type ClienteCountOutputTypeCountCitasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CitaWhereInput;
};
/**
 * ClienteCountOutputType without action
 */
export type ClienteCountOutputTypeCountHistorialArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HistorialCitaWhereInput;
};
export type ClienteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    cedula_cliente?: boolean;
    nombre?: boolean;
    apellido?: boolean;
    telefono?: boolean;
    correo?: boolean;
    contrasena?: boolean;
    fecha_registro?: boolean;
    citas?: boolean | Prisma.Cliente$citasArgs<ExtArgs>;
    historial?: boolean | Prisma.Cliente$historialArgs<ExtArgs>;
    _count?: boolean | Prisma.ClienteCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cliente"]>;
export type ClienteSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    cedula_cliente?: boolean;
    nombre?: boolean;
    apellido?: boolean;
    telefono?: boolean;
    correo?: boolean;
    contrasena?: boolean;
    fecha_registro?: boolean;
}, ExtArgs["result"]["cliente"]>;
export type ClienteSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    cedula_cliente?: boolean;
    nombre?: boolean;
    apellido?: boolean;
    telefono?: boolean;
    correo?: boolean;
    contrasena?: boolean;
    fecha_registro?: boolean;
}, ExtArgs["result"]["cliente"]>;
export type ClienteSelectScalar = {
    cedula_cliente?: boolean;
    nombre?: boolean;
    apellido?: boolean;
    telefono?: boolean;
    correo?: boolean;
    contrasena?: boolean;
    fecha_registro?: boolean;
};
export type ClienteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"cedula_cliente" | "nombre" | "apellido" | "telefono" | "correo" | "contrasena" | "fecha_registro", ExtArgs["result"]["cliente"]>;
export type ClienteInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    citas?: boolean | Prisma.Cliente$citasArgs<ExtArgs>;
    historial?: boolean | Prisma.Cliente$historialArgs<ExtArgs>;
    _count?: boolean | Prisma.ClienteCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ClienteIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ClienteIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ClientePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Cliente";
    objects: {
        citas: Prisma.$CitaPayload<ExtArgs>[];
        historial: Prisma.$HistorialCitaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        cedula_cliente: string;
        nombre: string;
        apellido: string;
        telefono: string;
        correo: string;
        contrasena: string;
        fecha_registro: Date;
    }, ExtArgs["result"]["cliente"]>;
    composites: {};
};
export type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ClientePayload, S>;
export type ClienteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ClienteCountAggregateInputType | true;
};
export interface ClienteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Cliente'];
        meta: {
            name: 'Cliente';
        };
    };
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: Prisma.SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: Prisma.SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     *
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     *
     * // Only select the `cedula_cliente`
     * const clienteWithCedula_clienteOnly = await prisma.cliente.findMany({ select: { cedula_cliente: true } })
     *
     */
    findMany<T extends ClienteFindManyArgs>(args?: Prisma.SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     *
     */
    create<T extends ClienteCreateArgs>(args: Prisma.SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ClienteCreateManyArgs>(args?: Prisma.SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Clientes and only return the `cedula_cliente`
     * const clienteWithCedula_clienteOnly = await prisma.cliente.createManyAndReturn({
     *   select: { cedula_cliente: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     *
     */
    delete<T extends ClienteDeleteArgs>(args: Prisma.SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ClienteUpdateArgs>(args: Prisma.SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: Prisma.SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: Prisma.SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {ClienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Clientes and only return the `cedula_cliente`
     * const clienteWithCedula_clienteOnly = await prisma.cliente.updateManyAndReturn({
     *   select: { cedula_cliente: true },
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
    updateManyAndReturn<T extends ClienteUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: Prisma.SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(args?: Prisma.Subset<T, ClienteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ClienteCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClienteAggregateArgs>(args: Prisma.Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>;
    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ClienteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ClienteGroupByArgs['orderBy'];
    } : {
        orderBy?: ClienteGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Cliente model
     */
    readonly fields: ClienteFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Cliente.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    citas<T extends Prisma.Cliente$citasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Cliente$citasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    historial<T extends Prisma.Cliente$historialArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Cliente$historialArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HistorialCitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Cliente model
 */
export interface ClienteFieldRefs {
    readonly cedula_cliente: Prisma.FieldRef<"Cliente", 'String'>;
    readonly nombre: Prisma.FieldRef<"Cliente", 'String'>;
    readonly apellido: Prisma.FieldRef<"Cliente", 'String'>;
    readonly telefono: Prisma.FieldRef<"Cliente", 'String'>;
    readonly correo: Prisma.FieldRef<"Cliente", 'String'>;
    readonly contrasena: Prisma.FieldRef<"Cliente", 'String'>;
    readonly fecha_registro: Prisma.FieldRef<"Cliente", 'DateTime'>;
}
/**
 * Cliente findUnique
 */
export type ClienteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cliente
     */
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ClienteInclude<ExtArgs> | null;
    /**
     * Filter, which Cliente to fetch.
     */
    where: Prisma.ClienteWhereUniqueInput;
};
/**
 * Cliente findUniqueOrThrow
 */
export type ClienteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cliente
     */
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ClienteInclude<ExtArgs> | null;
    /**
     * Filter, which Cliente to fetch.
     */
    where: Prisma.ClienteWhereUniqueInput;
};
/**
 * Cliente findFirst
 */
export type ClienteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cliente
     */
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ClienteInclude<ExtArgs> | null;
    /**
     * Filter, which Cliente to fetch.
     */
    where?: Prisma.ClienteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Clientes to fetch.
     */
    orderBy?: Prisma.ClienteOrderByWithRelationInput | Prisma.ClienteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Clientes.
     */
    cursor?: Prisma.ClienteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Clientes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Clientes.
     */
    distinct?: Prisma.ClienteScalarFieldEnum | Prisma.ClienteScalarFieldEnum[];
};
/**
 * Cliente findFirstOrThrow
 */
export type ClienteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cliente
     */
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ClienteInclude<ExtArgs> | null;
    /**
     * Filter, which Cliente to fetch.
     */
    where?: Prisma.ClienteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Clientes to fetch.
     */
    orderBy?: Prisma.ClienteOrderByWithRelationInput | Prisma.ClienteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Clientes.
     */
    cursor?: Prisma.ClienteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Clientes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Clientes.
     */
    distinct?: Prisma.ClienteScalarFieldEnum | Prisma.ClienteScalarFieldEnum[];
};
/**
 * Cliente findMany
 */
export type ClienteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cliente
     */
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ClienteInclude<ExtArgs> | null;
    /**
     * Filter, which Clientes to fetch.
     */
    where?: Prisma.ClienteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Clientes to fetch.
     */
    orderBy?: Prisma.ClienteOrderByWithRelationInput | Prisma.ClienteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Clientes.
     */
    cursor?: Prisma.ClienteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Clientes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Clientes.
     */
    distinct?: Prisma.ClienteScalarFieldEnum | Prisma.ClienteScalarFieldEnum[];
};
/**
 * Cliente create
 */
export type ClienteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cliente
     */
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ClienteInclude<ExtArgs> | null;
    /**
     * The data needed to create a Cliente.
     */
    data: Prisma.XOR<Prisma.ClienteCreateInput, Prisma.ClienteUncheckedCreateInput>;
};
/**
 * Cliente createMany
 */
export type ClienteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: Prisma.ClienteCreateManyInput | Prisma.ClienteCreateManyInput[];
};
/**
 * Cliente createManyAndReturn
 */
export type ClienteCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: Prisma.ClienteSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Cliente
     */
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    /**
     * The data used to create many Clientes.
     */
    data: Prisma.ClienteCreateManyInput | Prisma.ClienteCreateManyInput[];
};
/**
 * Cliente update
 */
export type ClienteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cliente
     */
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ClienteInclude<ExtArgs> | null;
    /**
     * The data needed to update a Cliente.
     */
    data: Prisma.XOR<Prisma.ClienteUpdateInput, Prisma.ClienteUncheckedUpdateInput>;
    /**
     * Choose, which Cliente to update.
     */
    where: Prisma.ClienteWhereUniqueInput;
};
/**
 * Cliente updateMany
 */
export type ClienteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: Prisma.XOR<Prisma.ClienteUpdateManyMutationInput, Prisma.ClienteUncheckedUpdateManyInput>;
    /**
     * Filter which Clientes to update
     */
    where?: Prisma.ClienteWhereInput;
    /**
     * Limit how many Clientes to update.
     */
    limit?: number;
};
/**
 * Cliente updateManyAndReturn
 */
export type ClienteUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: Prisma.ClienteSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Cliente
     */
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    /**
     * The data used to update Clientes.
     */
    data: Prisma.XOR<Prisma.ClienteUpdateManyMutationInput, Prisma.ClienteUncheckedUpdateManyInput>;
    /**
     * Filter which Clientes to update
     */
    where?: Prisma.ClienteWhereInput;
    /**
     * Limit how many Clientes to update.
     */
    limit?: number;
};
/**
 * Cliente upsert
 */
export type ClienteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cliente
     */
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ClienteInclude<ExtArgs> | null;
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: Prisma.ClienteWhereUniqueInput;
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: Prisma.XOR<Prisma.ClienteCreateInput, Prisma.ClienteUncheckedCreateInput>;
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ClienteUpdateInput, Prisma.ClienteUncheckedUpdateInput>;
};
/**
 * Cliente delete
 */
export type ClienteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cliente
     */
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ClienteInclude<ExtArgs> | null;
    /**
     * Filter which Cliente to delete.
     */
    where: Prisma.ClienteWhereUniqueInput;
};
/**
 * Cliente deleteMany
 */
export type ClienteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: Prisma.ClienteWhereInput;
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number;
};
/**
 * Cliente.citas
 */
export type Cliente$citasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Cliente.historial
 */
export type Cliente$historialArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Cliente without action
 */
export type ClienteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cliente
     */
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ClienteInclude<ExtArgs> | null;
};
//# sourceMappingURL=Cliente.d.ts.map