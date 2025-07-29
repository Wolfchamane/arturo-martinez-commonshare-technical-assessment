// @ts-nocheck
import { describe, it, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia, type Store } from 'pinia';
import { useUsersStore, type UsersStore } from './users';
import { type UserModel } from '~/utils/user.model';

const mockUsers: UserModel[] = [
    { id: '1', email: 'a@a.com', name: 'A', createdAt: '', updatedAt: '', password: '', country: 'ESP', role: 'admin' },
    { id: '2', email: 'b@b.com', name: 'B', createdAt: '', updatedAt: '', password: '', country: 'MEX', role: 'user' }
];

describe('Users Store', () => {
    let store: Store<'users', UsersStore, {}, { fetchUsers(): Promise<void> }> | undefined; // eslint-disable-line @typescript-eslint/no-empty-object-type
    beforeEach(() => {
        setActivePinia(createPinia());
        store = useUsersStore();
        store.users = mockUsers;
        store.country = '';
        store.search = '';
    });

    it('Should filter by country', () => {
        store!.country = 'ESP';
        expect(store?.filteredUsers.length).toBe(1);
        expect(store?.filteredUsers[0].country).toBe('ESP');
    });

    it('Should filter by any search', () => {
        store!.search = 'b@b.com';
        expect(store?.filteredUsers.length).toBe(1);
        expect(store?.filteredUsers[0].email).toBe('b@b.com');
    });

    it('Does counts the number of "admins" and "users"', () => {
        expect(store?.adminCount).toBe(1);
        expect(store?.userCount).toBe(1);
    });
});
