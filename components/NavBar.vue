<script setup lang="ts">
    import { useAuthStore } from '~/stores/auth';

    const auth = useAuthStore();

    const onLogout = () => {
        auth.logout();
    };
</script>

<template>
    <nav class="flex items-center justify-between mb-8 p-4 bg-gray-800 text-white">
        <p v-if="auth.user">Welcome {{ auth.user?.name || 'Unknown' }}!</p>
        <div class="flex gap-4">
            <NuxtLink to="/" class="flex items-center">
                <Icon name="carbon:home" class="mr-1" />
                <span>Home</span>
            </NuxtLink>
            <NuxtLink v-if="auth.isAdmin" to="/users" class="flex items-center">
                <Icon name="carbon:db2-database" class="mr-1" />
                <span>Users</span>
            </NuxtLink>
        </div>
        <button class="flex items-center justify-evenly bg-red-500 px-3 py-1 rounded" @click="onLogout">
            <span class="mr-2">Logout</span>
            <Icon name="carbon:logout" />
        </button>
    </nav>
</template>
