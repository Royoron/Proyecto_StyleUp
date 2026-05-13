export declare function createCitaTx(input: {
    cedula_cliente: string;
    cedula_barbero: string;
    id_especialidad: number;
    fecha: Date | string;
    hora: string;
}): Promise<{
    cedula_cliente: string;
    cedula_barbero: string;
    id_especialidad: number;
    id_cita: string;
    fecha: Date;
    hora: string;
    estado: string;
}>;
export declare function cancelarCita(id_cita: string): Promise<{
    cedula_cliente: string;
    cedula_barbero: string;
    id_especialidad: number;
    id_cita: string;
    fecha: Date;
    hora: string;
    estado: string;
}>;
export declare function actualizarEstadoCita(id_cita: string, estado: string): Promise<{
    cedula_cliente: string;
    cedula_barbero: string;
    id_especialidad: number;
    id_cita: string;
    fecha: Date;
    hora: string;
    estado: string;
}>;
export declare function listarCitasPorDia(fechaIso: string): Promise<{
    cedula_cliente: string;
    cedula_barbero: string;
    id_especialidad: number;
    id_cita: string;
    fecha: Date;
    hora: string;
    estado: string;
}[]>;
export declare function listarCitasPorBarbero(cedula_barbero: string): Promise<{
    cedula_cliente: string;
    cedula_barbero: string;
    id_especialidad: number;
    id_cita: string;
    fecha: Date;
    hora: string;
    estado: string;
}[]>;
//# sourceMappingURL=cita.service.d.ts.map