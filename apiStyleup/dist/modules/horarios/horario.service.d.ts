type DiaSemana = "Lunes" | "Martes" | "Miércoles" | "Jueves" | "Viernes" | "Sábado" | "Domingo";
type FranjaSemanal = {
    dia: DiaSemana;
    hora_inicio: string;
    hora_fin: string;
};
export declare function createHorario(input: {
    cedula_barbero: string;
    id_estado: number;
    hora_inicio: string;
    hora_fin: string;
    fecha: Date;
}): Promise<{
    cedula_barbero: string;
    fecha: Date;
    hora_inicio: string;
    hora_fin: string;
    id_horario: number;
    id_estado: number;
}>;
export declare function getHorarioById(id_horario: number): Promise<{
    cedula_barbero: string;
    fecha: Date;
    hora_inicio: string;
    hora_fin: string;
    id_horario: number;
    id_estado: number;
}>;
export declare function updateHorario(id_horario: number, patch: Partial<{
    id_estado: number;
    hora_inicio: string;
    hora_fin: string;
    fecha: Date;
}>): Promise<{
    cedula_barbero: string;
    fecha: Date;
    hora_inicio: string;
    hora_fin: string;
    id_horario: number;
    id_estado: number;
}>;
export declare function deleteHorario(id_horario: number): Promise<{
    deleted: boolean;
}>;
export declare function listHorariosByBarbero(cedula_barbero: string): Promise<{
    cedula_barbero: string;
    fecha: Date;
    hora_inicio: string;
    hora_fin: string;
    id_horario: number;
    id_estado: number;
}[]>;
export declare function replaceHorarioSemanalBarbero(cedula_barbero: string, horario: FranjaSemanal[]): Promise<{
    cedula_barbero: string;
    fecha: Date;
    hora_inicio: string;
    hora_fin: string;
    id_horario: number;
    id_estado: number;
}[]>;
export {};
//# sourceMappingURL=horario.service.d.ts.map