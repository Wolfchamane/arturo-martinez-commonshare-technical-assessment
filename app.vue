<script lang="ts" setup>
    import { useAuthStore } from '~/stores/auth';
    import { onMounted } from 'vue';
    import { navigateTo } from 'nuxt/app';

    const auth = useAuthStore();

    onMounted(() => {
        if (!auth.user) {
            navigateTo('/login');
        }
    });
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
