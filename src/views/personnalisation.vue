<script setup>
import flash from '../components/flash.vue';
import headervue from '../components/header.vue';
import footervue from '../components/footer.vue';
import Lunettes from '../components/Lunette.vue'</script>

<template>
    <header>
        <headervue/>
    </header>
    <flash date="25 Oct 2023, 18:00:00" class="mt-10"/>
    <div class="grid grid-cols-2">
        <h1 class="text-5xl font-bold my-32 ml-10">Modifiez vos lunettes à ce qui vous correspond.</h1>
        <img src="../assets/img/Lunette.webp" alt="Lunettes TaVue" class="mt-20">
    </div>
    <p class="text-3xl flex justify-end ml-[600px] mb-10">Laissez cours à votre imagination pour créer la paire de lunette qui vous plaira le plus.</p>


    <div class="grid grid-cols-2">
        <div class="bg-white">
            <Lunettes />
        </div>
        <div class="mb-20">
            <p class="text-3xl">Verres</p>
            <hr class="mr-96 h-2" />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, voluptate!
            <p class="text-3xl">Cadre</p>
            <hr class="mr-96 h-2" />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, voluptate!
            <p class="text-3xl">Branche</p>
            <hr class="mr-96 h-5" />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, voluptate!
            <p class="text-3xl">Formes</p>
            <hr class="mr-96 h-5" />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, voluptate!
            <p class="text-3xl">Matériau</p>
            <hr class="mr-96 h-5" />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, voluptate!
        </div>
    </div>
<footer>
    <footervue />
</footer>
</template>

<style scoped>
hr {
        border: none;
        height: 2px;
        background: black;
    }
</style>