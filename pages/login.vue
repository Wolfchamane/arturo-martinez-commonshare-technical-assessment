<script setup lang="ts">
    import { type Ref, type ComputedRef, computed, ref } from 'vue';
    import { useAuthStore } from '~/stores/auth';
    const email: Ref<string> = ref('');
    const password: Ref<string> = ref('');
    const auth = useAuthStore();

    const canSubmit: ComputedRef<boolean> = computed(() => {
        return email.value.trim() !== '' && password.value.trim() !== '';
    });

    const onFormSubmit = async (): Promise<void> => {
        await auth.login(email.value, password.value);
    };
</script>

<template>
    <div class="flex flex-col items-center justify-center h-full">
        <h1 class="text-2xl">Welcome!</h1>
        <p class="my-4">Use your email and password to access</p>
        <form class="bg-white p-6 rounded shadow w-80" @submit.prevent="onFormSubmit">
            <input v-model="email" type="email" placeholder="Email" class="mb-2 w-full border p-2" />
            <input v-model="password" type="password" placeholder="Password" class="mb-2 w-full border p-2" />
            <button
                :disabled="!canSubmit"
                type="submit"
                :class="[
                    'flex',
                    'justify-evenly',
                    'items-center',
                    'w-full',
                    'text-white',
                    'py-2',
                    'rounded',
                    { 'bg-blue-600': canSubmit, 'bg-blue-600/50': !canSubmit }
                ]"
            >
                <span>Login</span>
                <Icon name="carbon:login" />
            </button>
        </form>
    </div>
</template>
