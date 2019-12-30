<template>
  <div class="home">
	<Search/>
    <div
      v-if="currentResources.length!=0"
      class="grid"
      :class="currentResources.length < 3 ? (currentResources.length < 2 ? 'one-col-grid' : 'two-col-grid') : 'big-grid'"
    >
      <Resource v-for="(resource,index) of currentResources" :key="index" :resource="resource" />
    </div>
    <div v-else class="error">
      <h3>No matching resources.</h3>
    </div>
  </div>
</template>

<script>
import Resource from "@/components/Resource.vue";
import Search from "@/components/Search.vue";
import Axios from "axios";
import Vuex from "vuex";

export default {
  name: "home",
  components: {
	Resource,
	Search,
  },
  data() {
	  return {

	  }
  },
  beforeMount() {
	//Llamada axios y me traigo todos los recursos
	this.$store.dispatch('getResources');
  },
  computed: {
	  ...Vuex.mapState({
		  currentResources() {
			  return this.$store.getters.getFilteredResources;
		  }
	  }),
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.grid {
  display: grid;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
}

.one-col-grid {
  grid-template-columns: 1fr;
}

.two-col-grid {
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 3%;
  grid-row-gap: 20px;
}

.big-grid {
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 3%;
  grid-row-gap: 20px;
}

@media (max-width: 1000px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
