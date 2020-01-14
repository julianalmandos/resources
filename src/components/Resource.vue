<template>
    <div class="resource" :ref="resource.id">
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
        <div class="footer">
            <div class="footer__creation-date"><em>Added on: {{resource.createdAt}}</em></div>
            <a class="footer__button" :href="resource.url" target="_blank">
                <span class="footer__button__text">
                    Go
                </span>
                <font-awesome-icon icon="chevron-right"/>
            </a>
        </div>
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

        text-decoration: none;
        color: #2c3e50;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
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

    .footer__creation-date {
        color: #aaaaaa;
        text-decoration: underline;
    }

    .footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
    }

    .footer__button {
        display: flex;
        align-items: center;

        background-color: #2c3e50;
        color: #eeeeee;
        border: 1px solid #2c3e50;
        padding: 4px 10px;
    }

    .footer__button:hover {
        background-color: #eeeeee;
        cursor: pointer;
        color :#2c3e50;
    }

    .footer__button:focus {
        outline: none;
    }

    .footer__button__text {
        margin-right: 5px;
    }

</style>
