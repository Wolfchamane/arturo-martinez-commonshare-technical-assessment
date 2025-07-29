<script setup lang="ts">
    import NavBar from '~/components/NavBar.vue';
    import UserTable from '~/components/UserTable.vue';
    import PaginationControls from '~/components/PaginationControls.vue';
    import SearchBox from '~/components/SearchBox.vue';
    import CountryFilter from '~/components/CountryFilter.vue';
    import { useUsersStore } from '~/stores/users';
    import { useAuthStore } from '~/stores/auth';
    import { type UserModel, USER_ROLES } from '~/utils/user.model';
    import { computed, ref, type Ref, type ComputedRef } from 'vue';

    const auth = useAuthStore();
    if (auth.user?.role !== USER_ROLES.ADMIN) {
        // @ts-ignore
        navigateTo('/');
    }

    const store = useUsersStore();
    await store.fetchUsers();

    const page: Ref<number> = ref(store.page);
    const totalPages: Ref<number> = ref(store.totalPages);
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
            <PaginationControls :page="page" :totalPages="totalPages" @update:page="onPageEvent" />
        </div>
    </div>
</template>
