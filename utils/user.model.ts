export type UserRole = 'admin' | 'user';
export const USER_ROLES: Readonly<Record<string, UserRole>> = Object.freeze({
    ADMIN: 'admin',
    USER: 'user'
});

export interface UserModel {
    id: string;
    email: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    password: string;
    country: string;
    role: UserRole;
}
