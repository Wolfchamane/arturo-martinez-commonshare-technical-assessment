<script setup lang="ts">
    import { ref, type Ref } from 'vue';
    import { countries } from '~/utils/countries';

    const emit = defineEmits(['update:country']);

    const selectedCountry: Ref<string> = ref('');

    const onChange = () => {
        emit('update:country', selectedCountry.value);
    };
</script>

<template>
    <select v-model="selectedCountry" class="border p-2 mb-2" @change="onChange">
        <option value="">All countries</option>
        <option v-for="c in countries" :key="`${c.code}-country-option`" :value="c.code">{{ c.name }}</option>
    </select>
</template>
