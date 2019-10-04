<template>
    <div class="home">
        <h1>My Resources ({{totalResources}})</h1>
        <h3 class="search-info" v-if="searchValue!=''">Searching for "{{searchValue}}" / {{resources.length}} results</h3>
        <input id="search" type="text" placeholder="Buscar..." v-model="searchValue">
        <div class="resources-grid grid" :class="resources.length < 3 ? (resources.length < 2 ? 'one-col-grid' : 'two-col-grid') : 'big-grid'">
            <Resource v-for="resource of resources" :key="resource.title" :resource="resource"/>
        </div>        
    </div>
</template>

<script>
// @ is an alias to /src
import Resource from "@/components/Resource.vue";
import axios from 'axios';

export default {
    name: "home",
    components: {
        Resource
    },
    data(){
        return {
            resources: [],
            searchValue: '',
            totalResources: 0,
        }
    },
    watch: {
        searchValue: function(val,oldVal) {
            console.log('asd');
            axios.get('http://localhost:3000/resources/'+this.searchValue)
                .then(response => {
                    console.log(response);
                    this.resources=response.data;
                })
        }
    },
    beforeMount() {
        //Llamada axios y me traigo todos los recursos
        axios.get('http://localhost:3000/resources')
            .then(response => {
                this.resources=response.data;
                this.totalResources=this.resources.length;
            })
    }
};
</script>

<style scoped>

    .home {
        display:flex;
        flex-direction: column;
        align-items:center;
    }

    #search {
        width:60%;
        height:2.5rem;
        border:1px solid #bbbbbb;
        border-radius:5px;
        box-sizing: border-box;
        padding:12px;
        font-size:16px;
    }

    .search-info {
        margin-top: 0px;
    }

    .grid {
        display:grid;
    }

    .one-col-grid {
        grid-template-columns: 1fr;
    }

    .two-col-grid {
        grid-template-columns: 1fr 1fr;
    }

    .big-grid {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 800px) {
        .grid {
            display:grid;
            grid-template-columns: 1fr;
        }
    }
</style>
