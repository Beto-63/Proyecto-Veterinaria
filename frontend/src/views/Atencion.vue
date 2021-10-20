<template>
  <div>

    <navbar />
    <cliente />
    <form-mascota/>

  </div>
</template>

<script>


import Navbar from "../components/Navbar.vue";
import Cliente from "../components/Cliente2.vue";
import FormMascota from '../components/FormMascota.vue';
export default {
  components: {
    Navbar,
    Cliente,
    FormMascota,
  },
};

</script>

<style>
</style>