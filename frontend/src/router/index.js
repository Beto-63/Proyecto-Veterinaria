import Vue from 'vue'
import VueRouter from 'vue-router'
//views
import Home from '../views/Home.vue'
import Administrador from '../views/Administrador.vue'
import Atencion from '../views/Atencion.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Administrador',
    name: 'Crear_Profesionales',
    component: Administrador
  },
  {
    path: '/Atencion',
    name: 'Atencion_Mascotas',
    component: Atencion
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
