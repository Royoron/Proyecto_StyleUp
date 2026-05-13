export declare function loginCliente(cedula_cliente: string, contrasena: string): Promise<{
    accessToken: string;
    refreshToken: string;
}>;
export declare function loginBarbero(cedula_barbero: string, contrasena: string): Promise<{
    accessToken: string;
    refreshToken: string;
}>;
export declare function loginSuperAdmin(correo: string, contrasena: string): Promise<{
    accessToken: string;
    refreshToken: string;
}>;
export declare function refreshTokens(refreshToken: string): Promise<{
    accessToken: string;
    refreshToken: string;
}>;
export declare function logout(refreshToken: string): Promise<{
    ok: boolean;
}>;
//# sourceMappingURL=auth.service.d.ts.map