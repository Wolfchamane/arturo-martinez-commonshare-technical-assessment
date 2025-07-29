<script lang="ts" setup>
    import { useAuthStore } from '~/stores/auth';
    import { onMounted } from 'vue';

    const auth = useAuthStore();

    onMounted(() => {
        if (!auth.user) {
            // @ts-expect-error navigateTo is missing in the type definitions
            navigateTo('/login');
        }
    });
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
