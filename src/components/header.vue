<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav class="top-0 flex px-10 py-10 bg-zinc-50">
        <RouterLink to="/"><img src="../assets/img/TaVue_logo.webp" alt="Logo Site TaVue" class="max-h-16 absolute"></RouterLink>
        <div class="flex top-0 space-x-56 w-full z-1 pr-10 items-center justify-end">
        <RouterLink to=/liste><i class="fa fa-shopping-cart fa-3x"></i></RouterLink>
        <RouterLink to="/connexion">
        <i class="fa fa-user-circle fa-3x"></i>
        </RouterLink>
        </div>
    </nav>
</template>