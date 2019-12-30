<template>
  <div id="app">
    <NavigationBar/>
    <router-view class="component"/>
    <transition name="slide-fade">
      <Alert v-if="alert!=null" :alert="alert"/>
    </transition>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import Alert from "@/components/Alert.vue";
import Vuex from "vuex";

export default {
    name: 'App',
    components: {
      NavigationBar,
      Alert
    },
    computed: {
      ...Vuex.mapState([
        'alert'
      ])
    }
}
</script>

<style>
  #app {
    font-family: 'Nunito', sans-serif;
    font-size: 15px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: 0 10% 0 10%;
  }

  .slide-fade-enter-active {
    transition: all .2s ease;
  }

  .slide-fade-leave-active {
    transition: all .2s ease;
  }

  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateY(50px);
    opacity: 0;
  }

  .dot {
    height: 0.7rem;
    width: 0.7rem;
    background-color: #bbb;
    display: inline-block;
    margin-right: 6px;
  }

  html, body{
    height:100vh;
    width:100%;
    margin:0;
    background-color:#eeeeee;
  }

  .component {
    margin-top: 100px;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #eeeeee;
  }

  ::-webkit-scrollbar-thumb {
    background: #2c3e50;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #2c3e50;
  }
</style>
