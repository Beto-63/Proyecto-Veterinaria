<template>
  <div>

    <navbar />
    <cliente />
    <form-mascota/>
    <form-atencion/>

  </div>
</template>

<script>


import Navbar from "../components/Navbar.vue";
import Cliente from "../components/Cliente2.vue";
import FormMascota from '../components/FormMascota.vue';
import FormAtencion from '../components/FormAtencion.vue';
export default {
  components: {
    Navbar,
    Cliente,
    FormMascota,
    FormAtencion,
  },
};

</script>

<style>
</style>