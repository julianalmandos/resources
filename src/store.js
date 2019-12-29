import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    resources: [],
    categories: [],
    searchValue: '',
    searchCategories: []
  },
  getters: {
    getFilteredResources(state) {
      //Filter code
      return state.resources.filter(resource => {
        return resource.title.toLowerCase().includes(state.searchValue.toLowerCase());
      });
    },
    getFilteredResourcesCount(state, getters) {
      return getters.getFilteredResources.length;
    }
  },
  mutations: {
    getResources(state, resources) {
      state.resources = resources;
    },
    getCategories(state, categories) {
      state.categories = categories;
    },
    setSearchValue(state, value) {
      state.searchValue = value;
    }
  },
  actions: {
    getResources({ commit }) {
      Axios.get('//localhost:3000/api/resources')
        .then(response => {
          commit('getResources', response.data);
        })
    },
    getCategories({ commit }) {
      Axios.get('//localhost:3000/api/categories')
        .then(response => {
          commit('getCategories', response.data);
        })
    },
  }
})
