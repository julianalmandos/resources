<template>
    <span :class="['category',{'selected' : category.selected}]" @click="selectCategory"><span class="dot" :style="[{'background-color':category.color}]"></span>{{category.name}}</span>
</template>

<script>
export default {
    name: 'Category',
    props: {
        category:{},
    },
    data() {
        return {
        }
    },
    methods: {
        selectCategory(){
            !this.category.selected
                ? this.$store.commit('selectCategory', this.category.id)
                : this.$store.commit('deselectCategory', this.category.id);
            this.category.selected=!this.category.selected;
        }
    }
}
</script>

<style scoped>

    .category {
        border: 1px solid #2c3e50;;
        padding: 2px 20px 2px 20px;
        border-radius: 5px;
        cursor: pointer;
    }

    .selected {
        background-color:white;
    }

    .category:hover {
        background-color:white;
    }

    @media (max-width: 800px) {
        .category {
            margin-bottom: 10px;
        }
    }

</style>
