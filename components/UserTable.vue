<script setup lang="ts">
    import type { UserModel } from '~/utils/user.model';
    import { countries } from '~/utils/countries';

    defineProps<{ users: UserModel[] }>();

    const mapUserCountryToCountryName = (code: string): string => {
        const country = countries.find(c => c.code === code);

        return country ? country.name : 'Unknown';
    };
</script>

<template>
    <table class="min-w-full bg-white">
        <thead>
            <tr>
                <th>Email</th>
                <th>Name</th>
                <th>Country</th>
                <th>Role</th>
                <th>Created at</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users" :key="user.id">
                <td>{{ user.email }}</td>
                <td>{{ user.name }}</td>
                <td>{{ mapUserCountryToCountryName(user.country) }}</td>
                <td>{{ user.role.toUpperCase() }}</td>
                <td>{{ new Date(user.createdAt).toLocaleDateString() }}</td>
            </tr>
        </tbody>
    </table>
</template>
