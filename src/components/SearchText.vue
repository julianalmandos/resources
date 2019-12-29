<template>
    <div class="searchtext">
        <div class="box">
            <div class="box__icon">
                <font-awesome-icon class="icon" icon="search"/>
            </div>
            <input class="box__input" type="text" placeholder="Search for resources..." v-model="searchValue" />
        </div>
        <h3 class="search-info" v-if="searchValue!=''">
            Searching for "{{searchValue}}" / {{currentResourcesCount}} results
            <a @click="clearSearch()" class="clear">clear</a>
        </h3>
    </div>
</template>

<script>
export default {
    name: 'SearchText',
    computed: {
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
        clearSearch() {
            this.searchValue = "";
        }
    }
}
</script>

<style scoped>
    .box {
        display: flex;
        align-items: center;
    }

    .box__input {
        width: 750px;
        height: 2.5em;
        border: 2px solid #2c3e50;
        box-sizing: border-box;
        padding: 12px;
        font-size: 15px;
    }

    .box__input:focus {
        border: 2px solid #60758b;
        outline: none;
    }

    .box__input-info {
        margin: 0px;
    }

    .icon {
        padding: 12px;
    }

    .box__icon {
        display: flex;
        align-items: center;
        height: 2.5em;
        box-sizing: border-box;
        background-color: #2c3e50;
        color: white;
    }

    .searchtext {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 30px;
    }

    .search-info {
        margin-bottom: 0;
    }
</style>