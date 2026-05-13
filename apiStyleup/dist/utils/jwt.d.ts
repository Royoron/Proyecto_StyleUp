import jwt from "jsonwebtoken";
export type UserRole = "CLIENTE" | "BARBERO" | "SUPERADMIN";
export type AccessTokenClaims = {
    sub: string;
    role: UserRole;
};
export declare function signAccessToken(claims: AccessTokenClaims): string;
export declare function signRefreshToken(claims: AccessTokenClaims): string;
export declare function verifyAccessToken(token: string): AccessTokenClaims & jwt.JwtPayload;
export declare function verifyRefreshToken(token: string): AccessTokenClaims & jwt.JwtPayload;
//# sourceMappingURL=jwt.d.ts.map