<template>
  <div class="form-mascota">
    <h1>Formulario Mascota</h1>
    <form class="row g-3">
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Nombre</label>
        <input
          v-model="nombreMascota"
          type="text"
          class="form-control"
          id="inputEmail4"
          placeholder="Ej: Mateo"
        />
      </div>
      <div class="col-md-5">
        <label for="inputState" class="form-label">Especie</label>
        <select v-model="especieMascota" id="inputState" class="form-select">
          <option selected v-for="esp in especies" :key="esp">{{ esp }}</option>
        </select>
      </div>
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Fecha Nacimiento</label>
        <input
          v-model="fechaMascota"
          type="date"
          class="form-control"
          id="inputEmail4"
        />
      </div>
      <div class="col-md-5">
        <label for="inputState" class="form-label">Género</label>
        <select v-model="generoMascota" id="inputState" class="form-select">
          <option>Femenimo</option>
          <option>Masculino</option>
        </select>
      </div>
      <div class="col-5">
        <label for="inputAddress" class="form-label"
          >Número documento propietario</label
        >
        <input
          v-model="numDocPropietario"
          type="number"
          class="form-control"
          id="inputAddress"
          placeholder="Ej: 102020202"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      especies: ["Canino", "Felino", "Ave", "Roedor"],
      nombreMascota: null,
      especieMascota: null,
      fechaMascota: null,
      generoMascota: null,
      numDocPropietario: null,
    };
  },
};
</script>

<style>
.form-mascota {
  margin: 100px;
}
</style>