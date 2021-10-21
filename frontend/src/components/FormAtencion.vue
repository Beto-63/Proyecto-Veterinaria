<template>
  <div class="ajustar-form">
    <h2 class="title">Formulario Atención</h2>
    <form class="row g-3">
      <div class="col-6">
        <label for="inputTipo" class="form-label"
          >Tipo Documento de Profesional</label
        >
        <select
          id="inputTipo"
          v-model="tipoDocumentoProf"
          class="form-select"
          aria-label="Default select example"
        >
          <option value="Cedula">Cedula de Ciudadania</option>
          <option value="TIdentidad">Tarjeta de Identidad</option>
          <option value="CExtranjeria">Cedula Extranjeria</option>
          <option value="Pasaporte">Pasaporte</option>
        </select>
      </div>
      <div class="col-md-6">
        <label for="inputNum" class="form-label"
          >Número de documento de Profesional</label
        >
        <input
          id="inputNum"
          v-model="numDocumentoProf"
          type="number"
          class="form-control"
          placeholder="Ej: 1920912"
        />
      </div>
      <div class="col-md-6">
        <label for="inputFechaa" class="form-label">Fecha de atención</label>
        <input
          v-model="fechaAtencion"
          type="date"
          class="form-control"
          id="inputFechaa"
        />
      </div>
      <div class="col-md-6">
        <label for="inputPeso" class="form-label">Peso</label>
        <input
          id="inputPeso"
          v-model="peso"
          type="number"
          class="form-control"
          placeholder="Ej: 10kg"
        />
      </div>
      <div class="col-md-6">
        <label for="inputCard" class="form-label">Frecuencia cardiaca</label>
        <input
          id="inputCard"
          v-model="frecCardiaca"
          type="number"
          class="form-control"
          placeholder="Ej: 5 /s"
        />
      </div>
      <div class="col-md-6">
        <label for="inputRes" class="form-label">Frecuencia respiratoria</label>
        <input
          id="inputRes"
          v-model="frecRespiratoria"
          type="number"
          class="form-control"
          placeholder="Ej: 1 /s"
        />
      </div>
      <div class="col-md-6">
        <label for="inputAlim" class="form-label">Alimentación</label>
        <input
          id="inputAlim"
          v-model="alimentacion"
          type="text"
          class="form-control"
          placeholder="Ej: carnivoro"
        />
      </div>
      <div class="col-md-6">
        <label for="inputHab" class="form-label">Habitat</label>
        <input
          id="inputHab"
          v-model="habitat"
          type="text"
          class="form-control"
          placeholder="Ej: sedentario"
        />
      </div>
      <div class="col-md-6">
        <label for="inputObs" class="form-label">Observaciones</label>
        <textarea
          id="inputObs"
          v-model="observacion"
          type="text"
          class="form-control"
        />
      </div>
      <div class="col-md-6">
        <label for="inputDiag" class="form-label">Diagnostico</label>
        <textarea
          id="inputDiag"
          v-model="diagnostico"
          type="text"
          class="form-control"
        />
      </div>
      <div class="col-md-6">
        <label for="inputRec" class="form-label">Receta</label>
        <textarea
          id="inputRec"
          v-model="receta"
          type="text"
          class="form-control"
        />
      </div>

      <div class="col-10">
        <button type="button" class="btn btn-success">Registrar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tipoDocumentoProf: null,
      numDocumentoProf: null,
      fechaAtencion: null,
      peso: null,
      frecCardiaca: null,
      frecRespiratoria: null,
      alimentacion: null,
      habitat: null,
      observacion: null,
      diagnostico: null,
      receta: null
    };
  },
};
</script>

<style>
</style>