import { createRouter, createWebHistory }    from 'vue-router'
import Index                                 from '../views/index.vue'
import Connexion                             from '../views/connexion.vue'
import personnalisation                      from '../views/personnalisation.vue'
import liste                                 from '../views/liste.vue'

import PocketBase from 'pocketbase';

const pb = new PocketBase('https://www.tavue.jfleurent.fr:443');
var pocketbase_ip=''
    if(import.meta.env.MODE === 'production')
        pocketbase_ip='https://www.tavue.jfleurent.fr:443'
    else
        pocketbase_ip='http://127.0.0.1:8090/'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',                       name: 'Index',                      component: Index },
    { path: '/personnalisation',       name: 'PersonnalisationView',       component: personnalisation },
    { path: '/connexion',              name: 'Connexion',                  component: Connexion },
    { path: '/liste',                  name: 'liste',                      component: liste },
  ]
})

export default router
