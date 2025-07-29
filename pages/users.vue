<script setup lang="ts">
    import NavBar from '~/components/NavBar.vue';
    import UserTable from '~/components/UserTable.vue';
    import PaginationControls from '~/components/PaginationControls.vue';
    import SearchBox from '~/components/SearchBox.vue';
    import CountryFilter from '~/components/CountryFilter.vue';
    import { useUsersStore } from '~/stores/users';
    import { useAuthStore } from '~/stores/auth';
    import { type UserModel, USER_ROLES } from '~/utils/user.model';
    import { computed, ref, type Ref, type ComputedRef, onMounted } from 'vue';

    const auth = useAuthStore();
    if (auth.user?.role !== USER_ROLES.ADMIN) {
        // @ts-expect-error navigateTo is missing in the type definitions
        navigateTo('/');
    }

    const store = useUsersStore();
    const page: Ref<number> = ref(1);
    const totalPages: Ref<number> = ref(0);
    const paginated: ComputedRef<UserModel[]> = computed(() => store.paginatedUsers as UserModel[]);

    const onSearchInput = (val: string) => {
        store.search = val;
        store.page = 1;
    };

    const onCountryChange = (val: string) => {
        store.country = val;
        store.page = 1;
    };

    const onPageEvent = (val: number) => {
        store.page = val;
        page.value = store.page;
    };

    const fetchUsers = async (): Promise<void> => {
        await store.fetchUsers();
        page.value = store.page;
        totalPages.value = store.totalPages;
    };

    onMounted(() => fetchUsers());
</script>

<template>
    <div class="p-6">
        <NavBar />
        <h1 class="text-2xl font-bold mb-4">Users Admin</h1>
        <div class="flex align-center justify-between">
            <SearchBox @update:search="onSearchInput" />
            <CountryFilter @update:country="onCountryChange" />
        </div>
        <div class="my-4 border border-rounded p-4">
            <UserTable :users="paginated" />
        </div>
        <div class="flex items-center justify-center mt-2">
            <PaginationControls :page="page" :total-pages="totalPages" @update:page="onPageEvent" />
        </div>
    </div>
</template>
