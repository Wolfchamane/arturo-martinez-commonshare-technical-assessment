<script setup lang="ts">
    import { onMounted, type Ref, ref, nextTick } from 'vue';
    import NavBar from '~/components/NavBar.vue';
    import { useUsersStore } from '~/stores/users';

    const store = useUsersStore();
    const total: Ref<number> = ref(0);
    const admins: Ref<number> = ref(0);
    const users: Ref<number> = ref(0);

    const loadDashboardInformation = async (): Promise<void> => {
        await store.fetchUsers();
        await nextTick(() => {
            total.value = store.users.length;
            admins.value = store.adminCount;
            users.value = store.userCount;
        });
    };

    onMounted(() => {
        loadDashboardInformation();
    });
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
