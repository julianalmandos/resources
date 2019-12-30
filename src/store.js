import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    resources: [],
    categories: [],
    searchValue: '',
    searchCategories: [],
    alert: null,
  },
  getters: {
    getFilteredResources(state) {
      //Filter code
      return state.resources.filter(resource => {
        return resource.title.toLowerCase().includes(state.searchValue.toLowerCase())
          && (state.searchCategories.length!=0 ? state.searchCategories.includes(resource.category.id) : true);
      });
    },
    getFilteredResourcesCount(state, getters) {
      return getters.getFilteredResources.length;
    },
    getCategoryName: state => categoryId => {
      let category = state.categories.find(currentCategory => {
        return currentCategory.id == categoryId;
      })
      return category.name;
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
    },
    selectCategory(state, category) {
      state.searchCategories.push(category);
    },
    deselectCategory(state, category) {
      state.searchCategories = state.searchCategories.filter(currentCategory => {
        return currentCategory != category;
      });
    },
    emptySearchCategories(state) {
      state.searchCategories = [];
      state.categories.forEach(category => {
        category.selected = false;
      })
    },
    setAlert(state, payload) {
      state.alert = null;
      state.alert = payload.alert;
      setTimeout(() => {
        state.alert == payload.alert ? state.alert = null : null;
      }, payload.duration)
    },
    removeAlert(state) {
      state.alert = null;
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
          response.data.forEach(category => {
            category.selected = false;
          })
          commit('getCategories', response.data);
        })
    },
    deleteResource({ dispatch }, resourceId) {
      Axios.delete('//localhost:3000/api/resources',{
        data: {
          id: resourceId
        }
      })
        .then(response => {
          dispatch('getResources');
        })
    }
  }
})
