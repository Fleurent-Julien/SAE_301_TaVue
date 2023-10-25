import { createRouter, createWebHistory } from 'vue-router'
import Index                        from '../views/index.vue'
import Connexion             from '../views/connexion.vue'
import personnalisation                      from '../views/personnalisation.vue'
import liste from '../views/liste.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',                 name: 'Index',                component: Index },
    { path: '/personnalisation',        name: 'PersonnalisationView',       component: personnalisation },
    { path: '/connexion',                name: 'Connexion',               component: Connexion },
    { path: '/liste',                name: 'liste',               component: liste },
  ]
})

export default router
