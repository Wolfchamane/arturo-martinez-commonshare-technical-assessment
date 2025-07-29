import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import UserTable from './UserTable.vue';
import type { UserModel } from '~/utils/user.model';

const users: UserModel[] = [
    { id: '1', email: 'a@a.com', name: 'A', createdAt: '', updatedAt: '', password: '', country: 'ESP', role: 'admin' }
];

describe('UserTable', () => {
    it('Displays users', () => {
        const wrapper = mount(UserTable, { props: { users } });
        expect(wrapper.text()).toContain('a@a.com');
        expect(wrapper.text()).toContain('Spain');
    });
});
