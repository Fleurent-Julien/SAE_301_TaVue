<script setup></script>

<template>
    <div>
  <img src="../assets/img/Connexion.webp" alt="Image page connexion lunettes" class="h-screen absolute max-sm:hidden">
        <div class="float-right">
            <h1 class="lg:pt-10 pb-16 lg:text-4xl lg:mr-60 pl-10 font-bold">Inscrivez-vous</h1>
            <div class="lg:pb-10 lg:-ml-24">
      <label>E-Mail</label><br />
      <input type="email" required id="email" class="border rounded-md text-3xl w-11/12"/>
    </div>
    <div class="lg:pb-10 lg:-ml-24">
      <label>Mot de passe </label><br />
      <input type="password" required id="passwd" class="border rounded-md text-3xl w-11/12"/>
    </div>
    <div class="ml-5">
      <button v-on:click="login()" class="rounded-md text-2xl px-5 py-2 bg-orange-100 hover:bg-gradient-to-b hover:from-orange-100 hover:to-yellow-400 mb-3">S'inscrire avec Google</button><br/>
      <button v-on:click="github()" class="rounded-md text-2xl px-4 py-2 bg-orange-100 hover:bg-gradient-to-b hover:from-orange-100 hover:to-yellow-400 mb-3">S'inscrire avec Facebook</button><br/>
      <button v-on:click="add()" class="rounded-md text-2xl px-5 py-2 bg-orange-100 hover:bg-gradient-to-b hover:from-orange-100 hover:to-yellow-400">S'inscrire avec Github</button>
    </div>
    </div>
        </div>
</template>