<template>
  <div class="form-profesional">
    <!------FORMULARIO PARA CREAR PROFESIONALES----->
    <h1>Crear Profesional:</h1>
    <form class="row g-3">
      <!-----Fila para el nombre y apellido del profesional-->

      <!--Nombre-->
      <div class="col-6 mb-3">
        <label for="nombre" class="form-label">Nombre</label>
        <input
          type="text"
          class="form-control"
          id="nombre"
          placeholder="Ej: Maria José"
          v-model="nombre"
        />
      </div>
      <!--Apellido-->
      <div class="col-6 mb-3">
        <label for="apellido" class="form-label">Apellido</label>
        <input
          type="text"
          class="form-control"
          id="apellido"
          placeholder="Ej: Cortes Madero"
          v-model="apellido"
        />
      </div>

      <!-------Fila para cargo y Especialidad---->

      <!--Cargos-->
      <div class="col-6 mb-3">
        <label for="cargo" class="form-label">cargo</label>
        <select
          v-model="cargo"
          id="cargo"
          class="form-select"
          aria-label="Default select example"
        >
          <option selected value="null">Cargo</option>
          <option value="Vaterinario">Veterinario</option>
          <option value="Enfermero">Enferemero</option>
          <option value="Ayudante">Ayudante</option>
        </select>
      </div>
      <!--Descripción-->
      <div class="col-6 mb-3">
        <label for="Especilidad" class="form-label">Especialidad</label>
        <input
          type="text"
          class="form-control"
          id="especialidad"
          placeholder="Ej: Perros y Aves"
          v-model="especialidad"
        />
      </div>

      <!-------Fila para Tipo Documento y numero---->

      <!--tipo de documento-->
      <div class="col-6 mb-3">
        <label for="tipoDocumento" class="form-label">Especie</label>
        <select
          v-model="tipoDocumento"
          id="tipoDocumento"
          class="form-select"
          aria-label="Default select example"
        >
          <option selected value="null">Tipo de Documento</option>
          <option value="Cedula">Cedula de Ciudadania</option>
          <option value="TIdentidad">Tarjeta de Identidad</option>
          <option value="CExtranjeria">Cedula Extranjeria</option>
          <option value="Pasaporte">Pasaporte</option>
        </select>
      </div>
      <!--numero-->
      <div class="col-6 mb-3">
        <label for="nimero" class="form-label">Numero</label>
        <input
          type="number"
          class="form-control"
          id="numero"
          placeholder="Ej: 102020202"
          v-model="numero"
        />
      </div>
    </form>
    <br />
    <!-----Botón de registro--->
    <button
      v-if="id == null"
      type="button"
      class="btn btn-success"
      @click="btnRegistrarProfesional"
    >
      Registrar
    </button>
    &nbsp;
    <!----Botón cancelar---->
    <button
      v-if="id != null"
      type="button"
      class="btn btn-secondary"
      @click="limpiarCampos"
    >
      Cancelar
    </button>
    &nbsp;
    <!---botón de actualizar---->
    <button
      v-if="id != null"
      type="button"
      class="btn btn-warning"
      @click="btnActualizar"
    >
      Actualizar
    </button>
    <br /><br />
    <!-----TABLA DE PROFESIONALES----->
    <table class="table table-striped table-hover">
      <!---Cabecera de la tabla---->
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Cargo</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <!---Cuerpo de la tabla---->
      <tbody>
        <tr v-for="objProfesional in profesionales" :key="objProfesional._id">
          <!---Nombre--->
          <td>{{ objProfesional.nombre }}</td>
          <!---Apellido--->
          <td>{{ objProfesional.apellido }}</td>
          <!---Cargo--->
          <td>{{ objProfesional.cargo }}</td>
          <!----Acciones--->
          <td>
            <!----Editar--->
            <button
              type="button"
              class="btn btn-primary"
              @click="btnEditar(objProfesional)"
            >
              Editar
            </button>
            &nbsp;
            <!----Eliminar--->
            <button
              type="button"
              class="btn btn-danger"
              @click="btnEliminar(objProfesional._id)"
            >
              Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import store from "../store/index.js";
export default {
  data() {
    return {
      nombre: null,
      apellido: null,
      cargo: null,
      especialidad: null,
      tipoDocumento: null,
      numero: null,
      id: null,
    };
  },
  methods: {
    btnRegistrarProfesional() {
      if (
        this.nombre != null &&
        this.apellido != null &&
        this.cargo != null &&
        this.especialidad != null &&
        this.tipoDocumento != null &&
        this.numero != null
      ) {
        let objProfesional = {
          nombre: this.nombre,
          apellido: this.apellido,
          cargo: this.cargo,
          especialidad: this.especialidad,
          tipoDocumento: this.tipoDocumento,
          numero: this.numero,
        };
        store.dispatch("crearProfesional", objProfesional).then(() => {
          this.limpiarCampos();
          store.dispatch("cargarProfesionales");
        });
      }
    },
    limpiarCampos() {
      this.nombre = null;
      this.apellido = null;
      this.cargo = null;
      this.especialidad = null;
      this.tipoDocumento = null;
      this.numero = null;
      this.id = null;
    },
    btnEliminar(id) {
      let obj = {
        id,
      };
      store.dispatch("eliminarProfesional", obj).then(() => {
        store.dispatch("cargarProfesionales");
      });
    },
    btnEditar(objProfesional) {
      this.nombre = objProfesional.nombre;
      this.apellido = objProfesional.apellido;
      this.cargo = objProfesional.cargo;
      this.especialidad = objProfesional.especialidad;
      this.tipoDocumento = objProfesional.tipoDocumento;
      this.numero = objProfesional.numero;
      this.id = objProfesional._id;
    },
    btnActualizar() {
      let objProfesional = {
        id: this.id,
        nombre: this.nombre,
        apellido: this.apellido,
        cargo: this.cargo,
        especialidad: this.especialidad,
        tipoDocumento: this.tipoDocumento,
        numero: this.numero,
      };
      console.log(objProfesional);
      //Llamar las acciones del store
      store.dispatch("actualizarProfesional", objProfesional).then(() => {
        this.limpiarCampos();
        store.dispatch("cargarProfesionales");
      });
    },
  },
  created: () => {
    store.dispatch("cargarProfesionales");
  },
  computed: {
    profesionales: () => {
      return store.state.profesionales;
    },
  },
};
</script>

<style>
.form-profesional {
  padding: 30px;
}
</style>