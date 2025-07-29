<script setup lang="ts">
    interface PaginationProperties {
        page: number;
        totalPages: number;
    }
    const { page, totalPages } = defineProps<PaginationProperties>();
    const emit = defineEmits(['update:page']);
    function prev() {
        debugger;
        emit('update:page', Math.max(1, page - 1));
    }
    function next() {
        debugger;
        emit('update:page', Math.min(totalPages, page + 1));
    }
</script>

<template>
    <div class="flex gap-2 mt-4">
        <button :disabled="page === 1" @click="next">Previous</button>
        <span>Page {{ page }} / {{ totalPages }}</span>
        <button :disabled="page === totalPages" @click="next">Next</button>
    </div>
</template>
