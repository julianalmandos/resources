<template>
    <a class="resource" target="_blank" :href="resource.url">
        <h2 class="title"><a>{{resource.title}}</a></h2>
        <div><span class="dot" :style="{'background-color':resource.category.color}"></span>{{resource.category.name}}</div>
        <span class="description">{{resource.description}}</span>
        <span></span>
    </a>
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
        padding: 10px 15px;
        border: 1px dashed #2c3e50;

        border-bottom-right-radius: 30px;

        text-decoration: none;
        color: #2c3e50;

        cursor: pointer;
    }

    .resource:hover {
        background-color: white;
    }

    .title {
        margin-bottom: 0px;
        margin-top:0px;
    }

    a {
        text-decoration: none;
    }

    .description {
        font-family: 'Open Sans', sans-serif;
        width:100%;
        word-break: break-all;
    }

</style>
