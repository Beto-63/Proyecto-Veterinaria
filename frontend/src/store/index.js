import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const urlServer = "http://localhost:3000/";

export default new Vuex.Store({
  state: {
    profesionales: [],
    mascotas: [],
    clientes: [],
  },
  mutations: {
    setProfesionales(state, payload) {
      state.profesionales = payload;
    },
    setMascotas(state, payload) {
      state.mascotas = payload;
    },
    setClientes(state, payload) {
      state.clientes = payload;
    },
  },
  actions: {
    //tratamiendo de Profesionales entre el back end y el fron end
    async cargarProfesionales({ commit }) {
      const peticion = await fetch(urlServer + "profesional");  //indagar como es esto si se refiere a una ruta pero del backend
      //Obtener los datos de la petición
      const data = await peticion.json();
      console.log(data);
      commit('setProfesionales', data);
    },
    //Método para crear un profesional
    async crearProfesional({ commit }, objProfesional) {
      await fetch(urlServer + "profesional", {
        method: 'POST',
        //Indicar en la cabecera que se enviarán datos en formato json
        headers: {
          'Content-Type': 'application/json'
        },
        //Asignar el objeto js al cuerpo de la petición y convertirlo en un JSON
        body: JSON.stringify(objProfesional)
      });
    },
    //Método para conectar con la api de eliminar profesional
    async eliminarProfesional({ commit }, obj) {
      await fetch(urlServer + "profesional", {
        method: 'DELETE',
        //Indicar en la cabecera que se enviarán datos en formato json
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      })
    },
    //Método para conectar con la api de Actualizar profesional
    async actualizarProfesional({ commit }, objProfesional) {
      await fetch(urlServer + "profesional", {
        method: 'PUT',
        //Indicar en la cabecera que se enviarán datos en formato json
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(objProfesional)
      });
    },
    //Tratamiento de mascotas entre el Store y el back end
    async cargarMascotas({ commit }) {
      const peticion = await fetch(urlServer + "mascota");  //Es la ruta del back end
      //Obtener los datos de la petición
      const data = await peticion.json();
      console.log(data);
      commit('setMascotas', data);
    },
    //Método para crear una mascota
    async crearMascota({ commit }, objMascota) {
      await fetch(urlServer + "mascota", {
        method: 'POST',
        //Indicar en la cabecera que se enviarán datos en formato json
        headers: {
          'Content-Type': 'application/json'
        },
        //Asignar el objeto js al cuerpo de la petición y convertirlo en un JSON
        body: JSON.stringify(objMascota)
      });
    },
    //Método para conectar con la api de eliminar mascota
    async eliminarMascota({ commit }, obj) {
      await fetch(urlServer + "mascota", {
        method: 'DELETE', //Deberia pasar a un estado inactivo
        //Indicar en la cabecera que se enviarán datos en formato json
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      })
    },
    //Método para conectar con la api de Actualizar mascota
    async actualizarMascota({ commit }, objMascota) {
      await fetch(urlServer + "mascota", {
        method: 'PUT',
        //Indicar en la cabecera que se enviarán datos en formato json
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(objMascota)
      });
    },
    // Tratamiento de Clietes desde el Store para conectar back and front
    async cargarClientes({ commit }) {
      const peticion = await fetch(urlServer + "cliente");  //indagar como es esto si se refiere a una ruta pero del backend
      //Obtener los datos de la petición
      const data = await peticion.json();
      console.log(data);
      commit('setProfesionales', data);
    },
    //Método para crear un clente
    async crearCliente({ commit }, objCliente) {
      await fetch(urlServer + "cliente", {
        method: 'POST',
        //Indicar en la cabecera que se enviarán datos en formato json
        headers: {
          'Content-Type': 'application/json'
        },
        //Asignar el objeto js al cuerpo de la petición y convertirlo en un JSON
        body: JSON.stringify(objCliente)
      });
    },
    //Método para conectar con la api de eliminar cliente
    async eliminarCliente({ commit }, obj) {
      await fetch(urlServer + "cliente", {
        method: 'DELETE',
        //Indicar en la cabecera que se enviarán datos en formato json
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      })
    },
    //Método para conectar con la api de Actualizar cliente
    async actualizarCliente({ commit }, objCliente) {
      await fetch(urlServer + "cliente", {
        method: 'PUT',
        //Indicar en la cabecera que se enviarán datos en formato json
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(objCliente)
      });
    },

  },
  modules: {
  }
})
