<template>
    <span
        :class="['category',{'selected' : !preview && category.selected}]"
        @click="!preview ? selectCategory() : null"
    >
        <span
            class="dot"
            :style="[{'background-color':category.color}]"
        >
        </span>
        {{category.name}} ({{$store.getters.getResourceCountForCategory(category.id)}})
    </span>
</template>

<script>
export default {
    name: 'Category',
    props: {
        category: {},
        preview: false,
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
        margin-top: 10px;
        border-radius: 5px;
        cursor: pointer;
        display: flex;
        align-items: center;
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
