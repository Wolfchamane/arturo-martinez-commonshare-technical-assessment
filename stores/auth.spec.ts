// @ts-nocheck
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useAuthStore } from './auth';

globalThis.navigateTo = vi.fn();

describe('Auth Store', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('Initially does not have any user', () => {
        const store = useAuthStore();
        expect(store.user).toBeNull();
        expect(store.isAdmin).toBe(false);
        expect(store.expiresAt).toBeNull();
    });

    it('Should close session properly', () => {
        const store = useAuthStore();
        store.user = {
            id: '1',
            email: 'a@a.com',
            name: 'A',
            createdAt: '',
            updatedAt: '',
            password: '',
            country: 'ESP',
            role: 'admin'
        };
        store.isAdmin = true;
        store.expiresAt = new Date();
        store.logout();
        expect(store.user).toBeNull();
        expect(store.isAdmin).toBe(false);
        expect(store.expiresAt).toBeNull();
    });
});
