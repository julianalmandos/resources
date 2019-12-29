<template>
  <div class="filter">
    <h3 class="search-info" v-if="searchValue!=''">
      Searching for "{{searchValue}}" / {{currentResourcesCount}} results
    <a @click="clearSearch()" class="clear">clear</a>
    </h3>
    <input id="search" type="text" placeholder="Search..." v-model="searchValue" />
    <!--<h3 class="search-category-info" v-if="selectedCategories.length!=0">
      Searching for
      <span v-for="(category,index) of selectedCategories" :key="index">
        <span v-if="index!=0 && index!=selectedCategories.length-1">,</span>
        <span v-if="index==selectedCategories.length-1 && selectedCategories.length>1">and</span>
        {{getCategoryName(category)}}
      </span>

      / {{currentResources.length}} results
      <a @click="clearCategories()" class="clear">clear</a>
    </h3>-->
    <div class="categories">
      <Category
        v-for="(category,index) of categories"
        :key="index"
        :category="category"
        @select="selectCategory(category.id)"
      />
    </div>
  </div>
</template>

<script>
import Category from "@/components/Category.vue";
import Vuex from "vuex";

export default {
    name: 'Filter',
    components: {
        Category,
    },
    beforeMount() {
        this.$store.dispatch('getCategories');
    },
    computed: {
        ...Vuex.mapState({
            categories: 'categories',
        }),
        searchValue: {
            get() {
                return this.$store.state.searchValue;
            },
            set(value) {
                this.$store.commit('setSearchValue', value);
            }
        },
        currentResourcesCount: {
            get() {
                return this.$store.getters.getFilteredResourcesCount;
            }
        },
    },
    methods: {
        clearCategories() {
        // WIP
        },
        clearSearch() {
            this.searchValue = "";
        }
    }
}
</script>

<style>
    .filter {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
    .categories {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 30px;
}

.clear {
  color: #cccccc;
  text-decoration: none;
}

.clear:hover {
  color: #2c3e50;
  cursor: pointer;
}

#search {
  width: 60%;
  height: 2.5rem;
  border: 1px solid #bbbbbb;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 12px;
  font-size: 16px;
}

.error {
  margin-top: 30px;
}

.search-info {
  margin-top: 0px;
}

.search-category-info {
  margin-bottom: 0px;
}

@media (max-width: 800px) {

  .categories {
    flex-direction: column;
    margin-top: 10px;
  }

  #search {
    width: 100%;
  }
}
</style>