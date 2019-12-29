<template>
    <div class="search">
        <SearchText/>
        <SearchCategory/>
    </div>
</template>

<script>
import SearchText from "@/components/SearchText.vue";
import SearchCategory from "@/components/SearchCategory.vue";
import Vuex from "vuex";

export default {
    name: 'Search',
    components: {
        SearchCategory,
        SearchText
    },
}
</script>

<style>
    .search {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .clear {
        color: #cccccc;
        text-decoration: none;
    }

    .clear:hover {
        color: #2c3e50;
        cursor: pointer;
    }
</style>