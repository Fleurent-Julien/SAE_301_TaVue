<script setup>
import flash from '../components/flash.vue';
import headervue from '../components/header.vue';
import footervue from '../components/footer.vue';
import Lunettes from '../components/Lunette.vue'</script>

<template>
    <header>
        <headervue/>
    </header>
    <flash date="31 Oct 2023, 23:59:00" class="mt-10"/>
    <div class="grid grid-cols-2">
        <h1 class="text-5xl font-bold my-32 ml-10">Modifiez vos lunettes à ce qui vous correspond.</h1>
        <img src="../assets/img/Lunette.webp" alt="Lunettes TaVue" class="mt-20">
    </div>
    <p class="text-3xl flex justify-end ml-[600px] mb-10">Laissez cours à votre imagination pour créer la paire de lunette qui vous plaira le plus.</p>


    <div class="grid grid-cols-2">
        <div class="bg-white">
            <Lunettes />
        </div>
        <div class="mb-20 space-y-3">
            <div class="grid grid-cols-2">
                <div>
            <p class="text-3xl">Verres</p>
            <hr class="mr-10" />
            <div class="flex space-x-2">
                <div class="rounded-full bg-[#780404] w-12 h-12 mt-2"></div>
                <div class="rounded-full bg-[#060466] w-12 h-12 mt-2"></div>
                <div class="rounded-full bg-[#7A4507] w-12 h-12 mt-2"></div>
                <div class="rounded-full bg-[#FFECD6] w-12 h-12 mt-2"></div>
                <div class="rounded-full bg-[#CECECE] w-12 h-12 mt-2"></div>
            </div>
            </div>
            <div>
            <p class="text-3xl">Formes</p>
            <hr class="mr-10" />
            <div class="flex space-x-10">
           <div class="border-2 border-[#000000] h-12 w-12 mt-2"></div>
           <div class="rounded-3xl border-2 border-[#000000] h-12 w-10 mt-2"></div>
           <div class="rounded-full border-2 border-[#000000] h-12 w-12 mt-2"></div>
           </div>
           </div>
            </div>
            <p class="text-3xl">Cadre</p>
            <hr class="mr-10" />
            <div class="flex space-x-8 my-2">
                <div class="rounded-full bg-[#780404] w-12 h-12 mt-2"></div>
                <div class="rounded-full bg-[#060466] w-12 h-12 mt-2"></div>
                <div class="rounded-full bg-[#7A4507] w-12 h-12 mt-2"></div>
                <div class="rounded-full bg-[#FFECD6] w-12 h-12 mt-2"></div>
                <div class="rounded-full bg-[#CECECE] w-12 h-12 mt-2"></div>
            </div>
            <div class="grid grid-cols-2">
                <div>
            <p class="text-3xl">Branche</p>
            <hr class="mr-10" />
            <div class="flex space-x-2">
                <div class="rounded-full bg-[#780404] w-12 h-12 mt-2"></div>
                <div class="rounded-full bg-[#060466] w-12 h-12 mt-2"></div>
                <div class="rounded-full bg-[#7A4507] w-12 h-12 mt-2"></div>
                <div class="rounded-full bg-[#FFECD6] w-12 h-12 mt-2"></div>
                <div class="rounded-full bg-[#CECECE] w-12 h-12 mt-2"></div>
            </div>
        </div>
            <div>
            <p class="text-3xl">Matériaux</p>
            <hr class="mr-10" />
            <div class="flex space-x-5 w-12 h-12 mt-2">
            <img src="../assets/img/Alluminium.png" alt="Branches en alluminium">
            <img src="../assets/img/Metal.png" alt="Branches en métal">
            <img src="../assets/img/bois.png" alt="Branches en bois">
            </div>
            </div>
        </div>
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