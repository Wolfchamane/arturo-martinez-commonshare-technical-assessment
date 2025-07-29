<template>
    <div class="flex flex-col h-full overflow-hidden">
        <header class="border-b">
            <h1 class="text-xl text-center py-2">CommonShare Users Admin Tool</h1>
        </header>
        <main class="grow h-auto overflow-y-auto">
            <slot />
        </main>
        <footer>
            <a href="https://amartinez.dev" target="_blank">
                <p class="text-center text-s">&copy; 2025 - Arturo Martínez Díaz</p>
            </a>
        </footer>
    </div>
</template>
<script setup lang="ts"></script>
