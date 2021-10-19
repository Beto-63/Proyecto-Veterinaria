<template>
  <div>
    <h2 class="title">Inicio de Atención</h2>
    <!-- formulario usuario -->
    <form id="formulario" class="row g-3">
      <div class="col-md-6">
        <label for="nombre" class="form-label">Nombres</label>
        <input
          v-model="nombre"
          type="text"
          class="form-control"
          id="nombre"
          placeholder="Ej: Juan Esteban"
        />
      </div>
      <div class="col-md-6">
        <label for="apellido" class="form-label">Apellidos</label>
        <input
          v-model="apellido"
          type="text"
          class="form-control"
          id="apellido"
          placeholder="Ej: Franco Estacio"
        />
      </div>
      <div class="col-md-6">
        <label for="tipoDocumento" class="form-label">Tipo de documento</label>
        <select v-model="tipoDocumento" id="tipoDocumento" class="form-select">
          <option selected value="null">Tipo de Documento</option>
          <option value="Cedula">Cedula de Ciudadania</option>
          <option value="TIdentidad">Tarjeta de Identidad</option>
          <option value="CExtranjeria">Cedula Extranjeria</option>
          <option value="Pasaporte">Pasaporte</option>
        </select>
      </div>
      <div class="col-6">
        <label for="numero" class="form-label">Número de documento</label>
        <input
          v-model="numero"
          type="number"
          class="form-control"
          id="numero"
          placeholder="Ej: 102020202"
        />
      </div>
      <div class="col-md-6">
        <label for="email" class="form-label">e-Mail</label>
        <input
          v-model="email"
          type="email"
          class="form-control"
          id="email"
          placeholder="Ej: j.esteban.F@mail.com"
        />
      </div>
      <div class="col-md-6">
        <label for="telefono" class="form-label">Teléfono</label>
        <input
          v-model="telefono"
          type="text"
          class="form-control"
          id="telefono"
          placeholder="Ej: Franco Estacio"
        />
      </div>
    </form>

    <!-----TABLA DE MmASCOTAS----->
    <table class="table table-striped table-hover">
      <!---Cabecera de la tabla---->
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Especie</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <!---Cuerpo de la tabla---->
      <tbody>
        <tr>
          <!-- v-for="objMascota in mascotas" :key="mascota._id" -->
          <!---Nombre--->
          <td>{{ objMascota.nombre }}</td>
          <!---Especie--->
          <td>{{ objmascota.especie }}</td>

          <!----Acciones--->
          <td>
            <!----Editar--->
            <button
              type="button"
              class="btn btn-primary"
              @click="btnEditarMascota(objMascota)"
            >
              Editar
            </button>
            &nbsp;
            <!----Eliminar--->
            <button
              type="button"
              class="btn btn-danger"
              @click="btnEliminarMascota(objMascota._id)"
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
export default {
  data() {},
  methods: {},
  created: () => {},
  Computed: {},
};
</script>

<style>
#formulario {
  padding: 10px;
}
</style>