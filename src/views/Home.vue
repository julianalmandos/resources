<template>
    <div class="home">
        <h1 class="title">My Resources ({{totalResources}})</h1>
        <h3 class="search-info" v-if="searchValue!=''">Searching for "{{searchValue}}" / {{currentResources.length}} results <a @click="clearSearch()" class="clear">clear</a></h3>
        <input id="search" type="text" placeholder="Buscar..." v-model="searchValue">
        <h3 class="search-category-info" v-if="selectedCategories.length!=0">Searching for 
            <span v-for="(category,index) of selectedCategories" :key="index">
                <span v-if="index!=0 && index!=selectedCategories.length-1">, </span>
                <span v-if="index==selectedCategories.length-1 && selectedCategories.length>1">and </span>
                {{getCategoryName(category)}}
            </span> / {{currentResources.length}} results

            <a @click="clearCategories()" class="clear">clear</a>
        </h3>
        <div class="categories">
            <Category v-for="(category,index) of categories" :key="index" :category="category" @select="selectCategory(category.id)"/>
        </div>
        <div v-if="currentResources.length!=0" class="grid" :class="currentResources.length < 3 ? (currentResources.length < 2 ? 'one-col-grid' : 'two-col-grid') : 'big-grid'">
            <Resource v-for="(resource,index) of currentResources" :key="index" :resource="resource"/>
        </div>  
        <div v-else class="error">
            <h3>No matching resources.</h3>
        </div>      
    </div>
</template>

<script>
// @ is an alias to /src
import Resource from "@/components/Resource.vue";
import Category from "@/components/Category.vue";
import axios from 'axios';

export default {
    name: "home",
    components: {
        Resource,
        Category,
    },
    data(){
        return {
            resources: [],
            currentResources: [],
            categories: [],
            selectedCategories: [],
            searchValue: '',
            totalResources: 0,
        }
    },
    watch: {
        searchValue: function(val,oldVal) {
            this.filterResources();
        },
        selectedCategories: function(val,oldVal) {
            this.filterResources();        
        }
    },
    beforeMount() {
        //Llamada axios y me traigo todos los recursos
        axios.get('http://localhost:3000/api/resources')
            .then(response => {
                console.log(response.data);
                this.resources=response.data;
                this.currentResources=this.resources;
                this.totalResources=this.resources.length;
            })
        axios.get('http://localhost:3000/api/categories')
            .then(response => {
                this.categories=response.data;
            })
    },
    methods: {
        selectCategory(id){
            if(this.selectedCategories.includes(id)){
                this.selectedCategories=this.selectedCategories.filter(cat => cat!=id);
            }else{
                this.selectedCategories.push(id);
            }            
        },
        filterResources(){
            if(this.searchValue!='' && this.selectedCategories.length!=0){
                //Search by both
                this.currentResources=this.resources.filter(res => {
                    return res.title.includes(this.searchValue) && this.selectedCategories.includes(res.category.id);
                })
            }else if(this.searchValue!=''){
                //Search by input
                this.currentResources=this.resources.filter(res => res.title.includes(this.searchValue));
            }else if(this.selectedCategories.length!=0){
                //Search by category
                this.currentResources=this.resources.filter(res => this.selectedCategories.includes(res.category.id));
            }else{
                //Reset
                this.currentResources=this.resources;
            }
        },
        getCategoryName(categoryId) {
            let category = this.categories.find(currentCategory => currentCategory.id==categoryId)
            return category.name;
        },
        clearCategories() {
            // WIP
        },
        clearSearch() {
            this.searchValue = '';
        },
    }
};
</script>

<style scoped>

    .home {
        display:flex;
        flex-direction: column;
        align-items:center;
    }

    .categories {
        display:flex;
        width:100%;
        flex-direction: row;
        justify-content: space-evenly;
        margin-top: 30px;
    }

    .title {
        background-color:#2c3e50;
        padding: 0 10px 0 10px;
        color:white;
        transform: skew(-10deg);
        width: 100%;
        text-align:center;
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
        width:60%;
        height:2.5rem;
        border:1px solid #bbbbbb;
        border-radius:5px;
        box-sizing: border-box;
        padding:12px;
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

    @media (max-width: 800px) {
        .grid {
            grid-template-columns: 1fr;
        }

        .categories {
            flex-direction: column;
            margin-top: 10px;
        }
        
        #search {
            width: 100%;
        }
    }
</style>
