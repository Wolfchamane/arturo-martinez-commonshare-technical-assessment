// @ts-nocheck
import { defineStore } from 'pinia';
import { type UserModel, USER_ROLES } from '~/utils/user.model';

export interface UsersStore {
    users: UserModel[];
    search: string;
    country: string;
    page: number;
    pageSize: number;
    totalPages: number;
}

const defaultUsersStore: UsersStore = {
    users: [],
    search: '',
    country: '',
    page: 1,
    pageSize: 10,
    totalPages: 0
};

export const useUsersStore = defineStore('users', {
    state: () => defaultUsersStore,
    getters: {
        filteredUsers(state): UserModel[] {
            let result = state.users;
            if (state.search) {
                result = result.filter(u => u.email.includes(state.search) || u.name.includes(state.search));
            }
            if (state.country) {
                result = result.filter(u => u.country === state.country);
            }
            return result;
        },
        paginatedUsers(state): UserModel[] {
            const start = (state.page - 1) * state.pageSize;
            return this.filteredUsers.slice(start, start + state.pageSize);
        },
        adminCount(state): number {
            return state.users.filter(u => u.role === USER_ROLES.ADMIN).length;
        },
        userCount(state): number {
            return state.users.filter(u => u.role === USER_ROLES.USER).length;
        }
    },
    actions: {
        async fetchUsers(): Promise<void> {
            const { data } = await useFetch('/api/users', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            this.users = data.value || [];
            this.totalPages = Math.ceil(this.users.length / this.pageSize);
        }
    }
});
