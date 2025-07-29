import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import SearchBox from './SearchBox.vue';

describe('SearchBox', () => {
    it('Emits the search value', async () => {
        const wrapper = mount(SearchBox);
        await wrapper.find('input').setValue('test');
        await wrapper.find('input').trigger('input');
        expect(wrapper.emitted()['update:search'][0]).toEqual(['test']);
    });
});
