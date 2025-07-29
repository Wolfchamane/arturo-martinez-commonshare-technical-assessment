<template>
    <input
        v-model="search"
        type="text"
        placeholder="Search by email or name"
        class="border p-2 w-full mb-2"
        @input="onInput"
    />
</template>
<script setup lang="ts">
    import { ref } from 'vue';
    const search = ref('');
    const emit = defineEmits(['update:search']);
    function onInput() {
        emit('update:search', search.value);
    }
</script>
