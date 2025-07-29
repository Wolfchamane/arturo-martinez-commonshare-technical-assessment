// @ts-nocheck
import { defineStore } from 'pinia';
import { type UserModel, USER_ROLES } from '~/utils/user.model';

interface AuthState {
    user: UserModel | null;
    isAdmin: boolean;
    expiresAt: Date | null;
}

const defaultAutState: AuthState = {
    user: null,
    isAdmin: false,
    expiresAt: null
};

export const useAuthStore = defineStore('auth', {
    state: () => defaultAutState,
    actions: {
        async login(email: string, password: string) {
            const { data } = await useFetch<UserModel[]>('/api/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (data) {
                this.user = { ...data.value, password: '' };
                this.isAdmin = this.user?.role === USER_ROLES.ADMIN;
                this.expiresAt = new Date(Date.now() + 1000 * 60 * 60); // 1 hour expiration

                setInterval(
                    () => {
                        if (this.expiresAt && new Date() >= this.expiresAt) {
                            this.logout();
                            alert('Sesión expirada');
                        }
                    },
                    1000 * 60 * 10
                );

                navigateTo('/');
            } else {
                alert('Credenciales incorrectas');
            }
        },
        logout() {
            this.user = null;
            this.isAdmin = false;
            this.expiresAt = null;
            navigateTo('/logout');
        }
    }
});
