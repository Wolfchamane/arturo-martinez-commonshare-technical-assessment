<script setup lang="ts">
    import { ref } from 'vue';
    import { useAuthStore } from '~/stores/auth';
    const email = ref('');
    const password = ref('');
    const auth = useAuthStore();
    async function login() {
        await auth.login(email.value, password.value);
    }
</script>

<template>
    <div class="flex flex-col items-center justify-center min-h-screen">
        <h1>Welcome!</h1>
        <form class="bg-white mt-4 p-6 rounded shadow w-80" @submit.prevent="login">
            <input v-model="email" type="email" placeholder="Email" class="mb-2 w-full border p-2" />
            <input v-model="password" type="password" placeholder="Password" class="mb-2 w-full border p-2" />
            <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded">Login</button>
        </form>
    </div>
</template>
