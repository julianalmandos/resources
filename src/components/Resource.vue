<template>
    <div class="resource" :ref="resource.id">
        <transition appear name="rotate">
            <font-awesome-icon @click="removeResourceFromFavourites" v-if="resource.favourite" class="icon favourite__icon" icon="star" size="2x"/>
        </transition>
        <transition appear name="rotate">
            <font-awesome-icon @click="removeResourceFromWorkingOn" v-if="workingOn" class="icon working-on__icon" icon="hammer" size="2x"/>
        </transition>
        <div class="info">
            <div class="header">
                <h3 class="title"><a>{{resource.title}}</a></h3>
                <div class="actions">
                    <a @click="addResourceToWorkingOn" v-if="!workingOn" class="body__action"><font-awesome-icon class="action" icon="hammer" alt="Add to Working On"/></a>
                    <a @click="addResourceToFavourites" v-if="!resource.favourite" class="body__action"><font-awesome-icon class="action" icon="star" alt="Add to favourites"/></a>
                    <a @click="copyUrl" class="body__action"><font-awesome-icon class="action" icon="link" alt="Copy link to clipboard"/></a>
                    <a @click="editResource" class="body__action"><font-awesome-icon class="action" icon="pencil-alt" alt="Edit"/></a>
                    <a @click="deleteResource" class="body__action"><font-awesome-icon class="action" icon="trash-alt" alt="Delete"/></a>
                </div>
            </div>
            <div class="body__category"><span class="dot" :style="{'background-color':resource.category.color}"></span>{{resource.category.name}}</div>
            <span class="description">{{resource.description}}</span>
        </div>
        <div class="footer">
            <div class="footer__creation-date">Added on: {{resource.createdAt}}</div>
            <a class="footer__button" :href="resource.url" target="_blank">
                <span class="footer__button__text">
                    <strong>Go</strong>
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
    data() {
        return {
            workingOn: false
        }
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
        },
        addResourceToFavourites() {
            this.$store.dispatch('addResourceToFavourites', this.resource.id);
            this.$store.commit('setAlert',{
                alert: {
                    message: 'Added "' + this.resource.title + '" to favourites!',
                    icon: 'star'
                },
                duration: 4000
            });
        },
        removeResourceFromFavourites() {
            this.$store.dispatch('removeResourceFromFavourites', this.resource.id);
            this.$store.commit('setAlert',{
                alert: {
                    message: 'Removed "' + this.resource.title + '" from favourites!',
                    icon: 'star'
                },
                duration: 4000
            });
        },
        addResourceToWorkingOn() {
            this.workingOn = true;
            this.$store.commit('setAlert',{
                alert: {
                    message: 'Added "' + this.resource.title + '" to Working On!',
                    icon: 'hammer'
                },
                duration: 4000
            });
        },
        removeResourceFromWorkingOn() {
            this.workingOn = false;
            this.$store.commit('setAlert',{
                alert: {
                    message: 'Removed "' + this.resource.title + '" from Working On!',
                    icon: 'hammer'
                },
                duration: 4000
            });
        }
    }
}
</script>

<style scoped>

    .resource {
        padding: 10px 25px;
        border: 2px solid #dfdfdf;

        text-decoration: none;
        color: #2c3e50;
        position: relative;

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

    .body__category {
        display: flex;
        align-items: center;
    }

    .body__action:hover {
        cursor: pointer;
    }

    .icon {
        stroke: #2c3e50;
        stroke-width: 30px;
        position: absolute;
        cursor: pointer;
    }

    .icon:hover {
        transform: scale(1.2);
        color: #9b2335;
    }

    .favourite__icon {
        color: #efc050;
        left: -17px;
        top: -17px;
    }

    .working-on__icon {
        color: #3ef17a;
        left: -17px;
        top: 18px;
    }

    .rotate-enter-active {
        animation: rotate .3s;
    }

    .rotate-leave-active {
        animation: rotate .3s reverse;
    }

    @keyframes rotate {
        0% {
            transform: rotateZ(0deg) scale(0);
        }

        25% {
            transform: rotateZ(20deg);
        }

        50% {
            transform: rotateZ(-20deg) scale(1.3);
        }

        75% {
            transform: rotateZ(20deg);
        }

        100% {
            transform: rotateZ(0deg) scale(1);
        }
    }

</style>
