import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const urlServer = "http://localhost:3000/";

export default new Vuex.Store({
  state: {
    profesionales: []
  },
  mutations: {
    setProfesionales(state, payload) {
      state.profesionales = payload;
    }
  },
  actions: {
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
    }

  },
  modules: {
  }
})
