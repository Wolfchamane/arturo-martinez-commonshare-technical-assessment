import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import PaginationControls from './PaginationControls.vue';

describe('PaginationControls', () => {
    it('Emits the page change event', async () => {
        const wrapper = mount(PaginationControls, { props: { page: 2, totalPages: 3 } });
        await wrapper.find('button').trigger('click');
        expect(wrapper.emitted()['update:page']).toBeTruthy();
    });
});
