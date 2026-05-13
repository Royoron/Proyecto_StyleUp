export declare function createCliente(input: {
    cedula_cliente: string;
    nombre: string;
    apellido: string;
    telefono: string;
    correo: string;
    contrasena: string;
}): Promise<{
    cedula_cliente: string;
    correo: string;
    nombre: string;
    apellido: string;
    telefono: string;
    fecha_registro: Date;
}>;
export declare function getClienteByCedula(cedula_cliente: string): Promise<{
    cedula_cliente: string;
    correo: string;
    nombre: string;
    apellido: string;
    telefono: string;
    fecha_registro: Date;
}>;
export declare function updateCliente(cedula_cliente: string, patch: Partial<{
    nombre: string;
    apellido: string;
    telefono: string;
    correo: string;
    contrasena: string;
}>): Promise<{
    cedula_cliente: string;
    correo: string;
    nombre: string;
    apellido: string;
    telefono: string;
    fecha_registro: Date;
}>;
export declare function deleteCliente(cedula_cliente: string): Promise<{
    deleted: boolean;
}>;
//# sourceMappingURL=cliente.service.d.ts.map