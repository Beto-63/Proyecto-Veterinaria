<template>
  <div class="form-cliente">
    <!------FORMULARIO PARA CREAR CLIENTES----->
    <!-----Fila para el nombre y apellido del profesional-->
    <h1 class="title">Iniciar Atención</h1>
    <form class="row g-3">
      <!--Nombre-->
      <div class="col-md-6">
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
      <div class="col-md-6">
        <label for="apellido" class="form-label">Apellidos</label>
        <input
          type="text"
          class="form-control"
          id="apellido"
          placeholder="Ej: Cortes Madero"
          v-model="apellido"
        />
      </div>
      <!-------Fila para Tipo Documento y numero---->
      <!--tipo de documento-->
      <div class="col-md-6">
        <label for="tipoDocumento" class="form-label">Tipo de Documento</label>
        <select
          v-model="tipoDocumento"
          id="tipoDocumento"
          class="form-select"
          aria-label="Default select example"
        >
          <option selected value="null" aria-placeholder="Tipo de Documento">
            Tipo de Documento
          </option>
          <option value="Cedula">Cedula de Ciudadania</option>
          <option value="TIdentidad">Tarjeta de Identidad</option>
          <option value="CExtranjeria">Cedula Extranjeria</option>
          <option value="Pasaporte">Pasaporte</option>
        </select>
      </div>
      <!--numero-->
      <div class="col-md-6">
        <label for="numero" class="form-label">Numero del Documento</label>
        <input
          type="number"
          class="form-control"
          id="numero"
          placeholder="Ej: 102020202"
          v-model="numero"
        />
      </div>
      <!-------Fila para email y telefono---->
      <!--eMail-->
      <div class="col-md-6">
        <label for="email" class="form-label">e-Mail</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="ma.jo@mail.com"
          v-model="email"
        />
      </div>
      <!--Telefono-->
      <div class="col-md-6">
        <label for="telefono" class="form-label">Teléfono</label>
        <input
          type="text"
          class="form-control"
          id="telefono"
          placeholder="Ej: 102020202"
          v-model="telefono"
        />
      </div>
    </form>
    <br /><br /><br />
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
      clienteSeleccionado = false,
      mascotaSeleccionada = false,
    };
  },
  methods: {

//Aquie es donde debo definir la funcionalidad

  },
  created: () => {
    store.dispatch("cargarClientes");
  },
  computed: {
    clientes: () => {
      return store.state.clientes;
    },
  },
};
</script>

<style>
.form-cliente {
  padding: 30px;
}
</style>