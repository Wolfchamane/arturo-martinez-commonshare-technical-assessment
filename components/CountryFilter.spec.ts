import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import CountryFilter from './CountryFilter.vue';

describe('CountryFilter', () => {
    it('Emits the selected country', async () => {
        const wrapper = mount(CountryFilter);
        await wrapper.find('select').setValue('MEX');
        await wrapper.find('select').trigger('change');
        expect(wrapper.emitted()['update:country'][0]).toEqual(['MEX']);
    });
});
