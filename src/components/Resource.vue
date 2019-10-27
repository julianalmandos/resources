<template>
    <div class="resource">
        <h2 class="title"><a :style="{'color':resource.category.color}" target="_blank" :href="resource.url">{{resource.title}}</a></h2>
        <span class="description">{{resource.description}}</span>
        <span></span>
    </div>
</template>

<script>
export default {
    name: 'Resource',
    props: {
        resource:{},
    }
}
</script>

<style scoped>

    .resource {
        margin: 0 5% 10px 5%;
    }

    .title {
        margin-bottom: 0px;
        margin-top:0px;
    } 

    .description {
        width:100%;
        word-break: break-all;
    }

</style>
