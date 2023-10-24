    <script setup></script>

<template>
    <div class="column">
  <img src="../assets/img/Connexion.webp" alt="Image page connexion lunettes">
        <div class="inscription">
            <h1>S'inscrire sur Tavue</h1>
            <button v-on:click="login()" class="google">S'inscrire avec Google</button>
      <button v-on:click="github()" class="facebook">Facebook</button>
      <div>
        <p class="text-center -ml-32">Ou</p>
    </div>
    <div class="column">
        <div>
      <label>Nom Complet</label><br/>
      <input type="name" required id="name" class="col2"/>
    </div>
    <div>
      <label>Nom d'utilisateur</label><br />
      <input type="username" required id="username"/>
    </div>
    </div>
     <div>
      <label>Adresse E-Mail</label><br />
      <input type="email" required id="email"/>
    </div>
    <div>
      <label>Mot de passe</label><br />
      <input type="password" required id="password"/>
    </div>
    <div>
      <input type="checkbox" required id="checkbox"/>
      <label class="box">Vie privée et politique</label>
    </div>
        
    <button v-on:click="login()" class="button_connexion">Créer son compte</button><br/>
       </div>
    </div>
</template>

<style scoped>

.box {
    margin-left: 20px;
}
.button_connexion {
    border-radius: 5px;
    font-size: 30px;
    color:white;
    padding:2px 150px 2px 150px;
    background-color:darkslategrey;
    margin-left: 30px;
    margin-top: 20px;
}

input {
    border-radius: 5px;
    background-color: bisque;
    margin-bottom: 10px;
    font-size: 25px;
}

.column {
    display: flex;
}

.col2 {
    margin-right: 20px;
}

img {
    height: 100vh;
}

h1 {
 margin-top: 50px;
 font-size: bold;
 font-size: 25px;
}

.inscription {
 float: right;
 margin-left: 50px;
}

.google {
    border-radius: 5px;
    font-size: 20px;
    padding: 5px 10px 5px 10px;
    margin: 5px 0px 5px 0px;
    background-color: mediumslateblue;
    color:white
}

.facebook {
    border-radius: 5px;
    font-size: 20px;
    padding: 5px 10px 5px 10px;
    margin: 5px 0px 5px 20px;
    background-color: bisque;
}
</style>