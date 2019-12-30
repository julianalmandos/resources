<template>
    <div class="alert">
        <h4 class="alert__message"><font-awesome-icon :icon="alert.icon"/> {{alert.message}}</h4>
        <font-awesome-icon class="alert__close" icon="times" @click="dismissAlert"/>
    </div>
</template>

<script>
export default {
    name: 'Alert',
    props: {
        alert: {}
    },
    methods: {
        dismissAlert() {
            this.$store.commit('removeAlert');
        }
    }
}
</script>

<style scoped>
    .alert {
        position: fixed;
        bottom: 50px;
        right: 50px;
        background-color: #2c3e50;
        color: white;

        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .alert__message {
        margin: 10px 20px;
    }

    .alert__close {
        margin: 10px 20px 10px 0;
    }

    .alert__close:hover {
        color: #cccccc;
    }
</style>