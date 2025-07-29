<script setup lang="ts">
    interface PaginationProperties {
        page: number;
        totalPages: number;
    }
    const { page, totalPages } = defineProps<PaginationProperties>();
    const emit = defineEmits(['update:page']);

    const onPreviousClick = () => {
        emit('update:page', Math.max(1, page - 1));
    };

    const onNextClick = () => {
        emit('update:page', Math.min(totalPages, page + 1));
    };

    const onPageFirstClick = () => {
        emit('update:page', 1);
    };

    const onPageLastClick = () => {
        emit('update:page', totalPages);
    };
</script>

<template>
    <div class="flex items-center gap-2 mt-4">
        <button class="text-m" :disabled="page === 1" @click="onPageFirstClick">
            <Icon name="carbon:page-first" />
        </button>
        <button class="text-m" :disabled="page === 1" @click="onPreviousClick">
            <Icon name="carbon:previous-filled" />
        </button>
        <span class="text-l">Page {{ page }} / {{ totalPages }}</span>
        <button class="text-m" :disabled="page === totalPages" @click="onNextClick">
            <Icon name="carbon:next-filled" />
        </button>
        <button class="text-m" :disabled="page === totalPages" @click="onPageLastClick">
            <Icon name="carbon:page-last" />
        </button>
    </div>
</template>
