<template>
    <span :class="['category',{'selected' : selected}]" @click="selectCategory"><span class="dot" :style="[{'background-color':category.color}]"></span>{{category.name}}</span>
</template>

<script>
export default {
    name: 'Category',
    props: {
        category:{},
    },
    data() {
        return {
            selected: false,
        }
    },
    methods: {
        selectCategory(){
            this.$emit('select');
            this.selected=!this.selected;            
        }
    }
}
</script>

<style scoped>

    .category {
        border: 1px solid #cccccc;
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
