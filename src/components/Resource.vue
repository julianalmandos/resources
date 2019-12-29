<template>
    <a class="resource" target="_blank" :href="resource.url">
        <div class="info">
            <div class="header">
                <h3 class="title"><a>{{resource.title}}</a></h3>
                <div class="actions">
                    <font-awesome-icon class="action" icon="link" alt="Copy link to clipboard"/>
                    <font-awesome-icon class="action" icon="pencil-alt" alt="Edit"/>
                    <font-awesome-icon class="action" icon="trash-alt" alt="Delete"/>
                </div>
            </div>
            <div><span class="dot" :style="{'background-color':resource.category.color}"></span>{{resource.category.name}}</div>
            <span class="description">{{resource.description}}</span>
        </div>
        <div class="creation-date"><em>Added on: {{resource.createdAt}}</em></div>
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
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .resource:hover {
        background-color: white;
    }

    .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .title {
        margin-bottom: 0px;
        margin-top:0px;
        width: 60%;
    }

    .actions {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .action {
        margin-left: 5px;
    }

    a {
        text-decoration: none;
    }

    .description {
        font-family: 'Open Sans', sans-serif;
        width:100%;
        word-break: break-all;
    }

    .creation-date {
        color: #aaaaaa;
        text-decoration: underline;
    }

</style>
