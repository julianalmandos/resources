import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPencilAlt, faTrashAlt, faLink, faUser, faSignOutAlt, faQuestion, faHome, faPlus, faSearch, faTimes, faInfoCircle, faCheck, faChevronDown, faChevronUp, faChevronRight, faHammer, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPencilAlt,faTrashAlt,faLink,faUser,faSignOutAlt,faQuestion,faHome,faPlus,faSearch,faTimes,faInfoCircle,faCheck,faChevronDown,faChevronUp,faChevronRight,faHammer,faStar)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
