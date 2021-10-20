<template>
  <div class="create-cliente-view">
    <!------FORMULARIO PARA CREAR CLIENTES----->
    <div>
      <h2 class="title">Iniciar Atención</h2>
      <!-----Fila para el nombre y apellido del profesional-->
      <div class="row">
        <!--Nombre-->
        <div class="col-6 mb-3">
          <input
            type="text"
            class="form-control"
            id="nombre"
            placeholder="Nombre"
            v-model="nombre"
          />
        </div>
        <!--Apellido-->
        <div class="col-6 mb-3">
          <input
            type="text"
            class="form-control"
            id="apellido"
            placeholder="Apellido"
            v-model="apellido"
          />
        </div>
      </div>
      <!-------Fila para Tipo Documento y numero---->
      <div class="row">
        <!--tipo de documento-->
        <div class="col-6 mb-3">
          <select
            v-model="tipoDocumento"
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
          <input
            type="number"
            class="form-control"
            id="numero"
            placeholder="Numero"
            v-model="numero"
          />
        </div>
      </div>
      <!-------Fila para email y telefono---->
      <div class="row">
        <!--eMail-->
        <div class="col-6 mb-3">
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="e-Mail"
            v-model="email"
          />
        </div>
        <!--Telefono-->
        <div class="col-6 mb-3">
          <input
            type="text"
            class="form-control"
            id="telefono"
            placeholder="Teléfono"
            v-model="telefono"
          />
        </div>
      </div>
      <!-----Botón de Buscar--->
      <button
        v-if="id == null"
        type="button"
        class="btn btn-success"
        @click="btnBuscarCliente"
      >
        Buscar: T.Doc y #
      </button>
      &nbsp;
      <!-----Botón de registro--->
      <button
        v-if="id == null"
        type="button"
        class="btn btn-success"
        @click="btnRegistrarCliente"
      >
        Registro Nuevo
      </button>
      <!----Botón Atender---->
      <button
        v-if="id != null"
        type="button"
        class="btn btn-secondary"
        @click="listarMascotas"
      >
        ATENDER
      </button>
      <!--Usar booleana para mostrar y esconder elemento de despliegue de mascotas-->
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
    </div>
    <!-----TABLA DE MASCOTAS----->
    <table class="table table-striped table-hover">
      <!---Cabecera de la tabla---->
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <!---Cuerpo de la tabla---->
      <tbody>
        <tr v-for="objCliente in clientes" :key="objCliente._id">
          <!---Nombre--->
          <td>{{ objCliente.nombre }}</td>
          <!---Apellido--->
          <td>{{ objCliente.Apellido }}</td>
          <!----Acciones--->
          <td>
            <!----Atender--->
            <button
              type="button"
              class="btn btn-primary"
              @click="btnDesplegarMascotas(objCliente._id)"
            >
              ATENDER
            </button>
            &nbsp;
            <!----Eliminar--->
            <button
              type="button"
              class="btn btn-danger"
              @click="btnEliminar(objCliente._id)"
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
const url = "http://localhost:3000/users";
export default {
  data() {
    return {
      nombre: null,
      especie: null,
      fechaNacimiento: null,
      genero: null,
      idPropietario: null,
      idProfesional: null,
      atencion: null,
      idMascota: null,
      objAtencion: null,
    };
  },
  methods: {},
  created: () => {
    store.dispatch("cargarClientes");
  },
  computed: {
    profesionales: () => {
      return store.state.clientes;
    },
  },
};
</script>

<style>
.create-cliente-view {
  padding: 10px;
}
</style>