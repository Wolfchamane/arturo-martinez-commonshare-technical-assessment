<script setup lang="ts">
    const onLogoutClick = () => {
        // @ts-expect-error navigateTo is missing in the type definitions
        navigateTo('/login');
    };
</script>

<template>
    <div class="flex flex-col items-center justify-center min-h-screen">
        <h2 class="mb-4">Goodbye!</h2>
        <p class="mb-4">Hope we can see you again soon</p>
        <button class="bg-blue-600 text-white px-4 py-2 rounded" @click="onLogoutClick">Go back to login</button>
    </div>
</template>
