export declare function listEspecialidades(): Promise<{
    id_especialidad: number;
    especialidad: string;
    tiempo_estimado: number;
}[]>;
export declare function getEspecialidadById(id_especialidad: number): Promise<{
    id_especialidad: number;
    especialidad: string;
    tiempo_estimado: number;
}>;
export declare function createEspecialidad(input: {
    especialidad: string;
    tiempo_estimado: number;
}): Promise<{
    id_especialidad: number;
    especialidad: string;
    tiempo_estimado: number;
}>;
export declare function updateEspecialidad(id_especialidad: number, patch: Partial<{
    especialidad: string;
    tiempo_estimado: number;
}>): Promise<{
    id_especialidad: number;
    especialidad: string;
    tiempo_estimado: number;
}>;
export declare function deleteEspecialidad(id_especialidad: number): Promise<{
    deleted: boolean;
}>;
//# sourceMappingURL=especialidad.service.d.ts.map