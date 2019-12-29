<template>
    <div class="searchcategory">
        <div class="categories">
            <Category
            v-for="(category,index) of categories"
            :key="index"
            :category="category"
            @select="selectCategory(category.id)"
            />
        </div>
        <h3 class="search-category-info" v-if="searchCategories.length!=0">
            Searching for
            <span v-for="(category,index) of searchCategories" :key="index">
                <span v-if="index!=0 && index!=searchCategories.length-1">,</span>
                <span v-if="index==searchCategories.length-1 && searchCategories.length>1">and</span>
                {{getCategoryName(category)}}
            </span>

            / {{currentResourcesCount}} results
            <a @click="clearCategories()" class="clear">clear</a>
        </h3>
    </div>
</template>

<script>
import Category from '@/components/Category.vue';
import Vuex from "vuex";

export default {
    name: 'SearchCategory',
    components: {
        Category,
    },
    beforeMount() {
        this.$store.dispatch('getCategories');
    },
    computed: {
        ...Vuex.mapState({
            categories: 'categories',
            searchCategories: 'searchCategories',
        }),
        currentResourcesCount: {
            get() {
                return this.$store.getters.getFilteredResourcesCount;
            }
        },
    },
    methods: {
        clearCategories() {
            this.$store.commit('emptySearchCategories');
        },
        getCategoryName(category) {
            return this.$store.getters.getCategoryName(category);
        }
    }
}
</script>

<style scoped>
    .searchcategory {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .categories {
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-evenly;
    }

    .search-category-info {
        margin-bottom: 0px;
    }

    @media (max-width: 800px) {
        .categories {
            flex-direction: column;
            margin-top: 10px;
        }
    }
</style>