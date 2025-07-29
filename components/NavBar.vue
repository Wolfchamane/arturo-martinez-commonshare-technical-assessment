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
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink v-if="auth.isAdmin" to="/users">Users</NuxtLink>
        </div>
        <button class="bg-red-500 px-3 py-1 rounded" @click="onLogout">Logout</button>
    </nav>
</template>
