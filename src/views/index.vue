<script setup>
import { RouterLink } from 'vue-router';
import HeaderVue from '../components/header.vue'
import flash from '../components/flash.vue';
import FooterVue from '../components/footer.vue'
import MapView from '../components/map.vue'
</script>

<template>
    <header>
    <HeaderVue class="" />
    </header>
    <img src="../assets/img/Banniere_accueil.webp" alt="Bannière accueil TaVue" class="w-screen">
    <h1 class="text-5xl text-center my-4 font-bold">Voyez la vie sous une autre couleur !</h1>
    <flash date="25 Oct 2023, 18:00:00" class="mt-10"/>

    <section class="mt-20">
        <h2 class="font-bold text-4xl ml-5">Personnalisez votre paire de lunettes selon vos goûts.</h2>
        <img src="../assets/img/Image_accueil_TaVue.webp" alt="Image Avatar TaVue" class="w-1/3 h-1/3 float-right flex">
        <p class="mt-5 ml-5 text-2xl">Grâce à TaVue, vous aurez la possibilité de modifier chaque partie de votre paire de lunette et de le rendre unique sur vos yeux.</p>
        <p class="mt-5 mb-52 ml-5 text-2xl">Vous avez aussi la possibilité de pouvoir enregistrer mais aussi de commander les paires de lunettes que vous avez créées.</p>
    </section>
    <RouterLink to="/personnalisation"><p class="text-center rounded-md text-2xl mx-96 my-20 px-5 py-3 bg-orange-100 hover:bg-gradient-to-b hover:from-orange-100 hover:to-yellow-400">En savoir plus</p></RouterLink>

    <img src="../assets/img/Fabrication.webp" alt="Image fabriquée en France" class="w-1/2 m-auto">

    <h2 class="text-3xl font-bold text-center my-20">Ou sommes nous ?</h2>

    <MapView class="mx-52" />
    <footer class="mt-20">
        <FooterVue />
    </footer>
</template>