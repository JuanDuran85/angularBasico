export interface AuthResponse {
    ok: boolean;
    msg?: string;
    name?: string;
    uid? : string;
    token?: string;
    email?: string;
}

export interface UserData {
    uid: string;
    name: string;
    email?: string;
}