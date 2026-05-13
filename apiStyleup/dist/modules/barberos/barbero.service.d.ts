export declare function createBarbero(input: {
    cedula_barbero: string;
    nombre: string;
    apellido: string;
    id_especialidad: number;
    correo: string;
    contrasena: string;
    telefono: string;
}): Promise<{
    correo: string;
    nombre: string;
    apellido: string;
    telefono: string;
    fecha_registro: Date;
    cedula_barbero: string;
    id_especialidad: number;
}>;
export declare function getBarberoByCedula(cedula_barbero: string): Promise<{
    correo: string;
    nombre: string;
    apellido: string;
    telefono: string;
    fecha_registro: Date;
    cedula_barbero: string;
    id_especialidad: number;
}>;
export declare function updateBarbero(cedula_barbero: string, patch: Partial<{
    nombre: string;
    apellido: string;
    id_especialidad: number;
    correo: string;
    contrasena: string;
    telefono: string;
}>): Promise<{
    correo: string;
    nombre: string;
    apellido: string;
    telefono: string;
    fecha_registro: Date;
    cedula_barbero: string;
    id_especialidad: number;
}>;
export declare function deleteBarbero(cedula_barbero: string): Promise<{
    deleted: boolean;
}>;
export declare function getBarberosDisponiblesByEspecialidad(id_especialidad: number): Promise<{
    correo: string;
    nombre: string;
    apellido: string;
    telefono: string;
    fecha_registro: Date;
    cedula_barbero: string;
    id_especialidad: number;
}[]>;
//# sourceMappingURL=barbero.service.d.ts.map