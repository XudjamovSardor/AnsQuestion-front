import { Role } from "./role";

export interface User {
    id: number,
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    registrDate: String,
    role: Role
}