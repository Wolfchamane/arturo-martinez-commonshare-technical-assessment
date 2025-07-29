<script lang="ts" setup>
    import { useAuthStore } from '~/stores/auth';
    import { onMounted } from 'vue';

    const auth = useAuthStore();

    onMounted(() => {
        if (!auth.user) {
            // @ts-ignore
            navigateTo('/login');
        }
    });
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
