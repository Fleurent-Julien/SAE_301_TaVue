<template>
    <div>
  <img src="../assets/img/Connexion.webp" alt="Image page connexion lunettes" class="h-screen absolute max-sm:hidden">
        <div class="float-right">
            <h1 class="lg:pt-10 pb-10 lg:text-4xl lg:mr-60 pl-10 font-bold">Connexion</h1>
              <div class="lg:pb-2 lg:-ml-24">
      <label>E-Mail</label><br />
      <input type="email" required id="email" class="border rounded-md text-3xl w-11/12"/>
    </div>
    <div class="lg:pb-10 lg:-ml-24">
      <label>Mot de passe </label><br />
      <input type="password" required id="passwd" class="border rounded-md text-3xl w-11/12"/>
    </div>
    <div class="ml-5">
      <button v-on:click="login()" class="rounded-md text-2xl px-5 py-2 bg-orange-100 hover:bg-gradient-to-b hover:from-orange-100 hover:to-yellow-400 mb-3">Connexion</button><br/>
      <button v-on:click="google()" class="rounded-md text-2xl px-5 py-2 bg-orange-100 hover:bg-gradient-to-b hover:from-orange-100 hover:to-yellow-400 mb-3">Connexion avec Google</button><br/>
      <button v-on:click="github()" class="rounded-md text-2xl px-4 py-2 bg-orange-100 hover:bg-gradient-to-b hover:from-orange-100 hover:to-yellow-400 mb-3">Connexion avec Github</button><br/>
      <button v-on:click="facebook()" class="rounded-md text-2xl px-5 py-2 bg-orange-100 hover:bg-gradient-to-b hover:from-orange-100 hover:to-yellow-400">Connexion avec Facebook</button>
      <p class="mt-10">Pas de compte ? <RouterLink to="inscription.vue">Inscrivez-vous !</RouterLink></p>
    </div>
    </div>
        </div> 
        
</template>

<script>
import PocketBase from 'pocketbase'

var pocketbase_ip = "";
if (import.meta.env.MODE === "production")
  pocketbase_ip = "https://tavue.jfleurent:443/";
else pocketbase_ip = "http://127.0.0.1:8090/";
const pb = new PocketBase(pocketbase_ip);
var currentUser;
export default {
  methods: {
    //this method allows a new user to sign up the system. Once done, the user receives an email
    //asking for account validation. Once the validation made the user is added to the system
    async login() {
      await pb.collection("users").authWithOAuth2({ provider: "google" });
      if (pb.authStore.isValid) {
        document.getElementById("status").innerHTML = "You are now logged in";
        connected = true;
        currentUser=pb.authStore.model;
      }
    },

    async github() {
      await pb.collection("users").authWithOAuth2({ provider: "github" });
      if (pb.authStore.isValid) {
        document.getElementById("status").innerHTML = "You are now logged in";
        connected = true;
        currentUser=pb.authStore.model;
      }
    },

    async google() {
      await pb.collection("users").authWithOAuth2({ provider: "google" });
      if (pb.authStore.isValid) {
        document.getElementById("status").innerHTML = "You are now logged in";
        connected = true;
        currentUser=pb.authStore.model;
      }
    },
  },
};
</script>