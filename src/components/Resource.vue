<template>
    <div class="resource" :ref="resource.id" target="_blank" :href="resource.url">
        <div class="info">
            <div class="header">
                <h3 class="title"><a>{{resource.title}}</a></h3>
                <div class="actions">
                    <a @click="copyUrl"><font-awesome-icon class="action" icon="link" alt="Copy link to clipboard"/></a>
                    <a @click="editResource"><font-awesome-icon class="action" icon="pencil-alt" alt="Edit"/></a>
                    <a @click="deleteResource"><font-awesome-icon class="action" icon="trash-alt" alt="Delete"/></a>
                </div>
            </div>
            <div><span class="dot" :style="{'background-color':resource.category.color}"></span>{{resource.category.name}}</div>
            <span class="description">{{resource.description}}</span>
        </div>
        <div class="creation-date"><em>Added on: {{resource.createdAt}}</em></div>
    </div>
</template>

<script>
import Alert from '@/components/Alert.vue';

export default {
    name: 'Resource',
    components: {
        Alert,
    },
    props: {
        resource:{},
    },
    methods: {
        deleteResource() {
            this.$store.dispatch('deleteResource',this.resource.id);
            this.$store.commit('setAlert',{
                alert: {
                    message: 'Resource deleted successfully!',
                    icon: 'trash-alt'
                },
                duration: 4000
            });
        },
        copyUrl() {
            navigator.clipboard.writeText(this.$refs[this.resource.id].getAttribute('href'))
                .then(() => {
                    this.$store.commit('setAlert',{
                        alert: {
                            message: 'Copied to clipboard!',
                            icon: 'link'
                        },
                        duration: 4000
                    });
                })
        },
        editResource() {
            this.$router.push('/edit/'+this.resource.id);
        }
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
    }

    .creation-date {
        color: #aaaaaa;
        text-decoration: underline;
    }

</style>
