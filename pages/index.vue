<script setup lang="ts">
    import NavBar from '~/components/NavBar.vue';
    import { useUsersStore } from '~/stores/users';
    const store = useUsersStore();
    await store.fetchUsers();
    const total = store.users.length;
    const admins = store.adminCount;
    const users = store.userCount;
</script>

<template>
    <div class="p-6">
        <NavBar />
        <h1 class="text-2xl font-bold mb-4">Dashboard</h1>
        <div class="flex gap-4">
            <div class="bg-blue-100 p-4 rounded"><span class="font-bold">Total number of users:</span> {{ total }}</div>
            <div class="bg-green-100 p-4 rounded"><span class="font-bold">Admins:</span> {{ admins }}</div>
            <div class="bg-yellow-100 p-4 rounded"><span class="font-bold">Regular users:</span> {{ users }}</div>
        </div>
    </div>
</template>
