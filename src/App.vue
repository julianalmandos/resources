<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  #app {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    padding: 0 5% 0 5%;
  }

  html, body{
    height:100vh;
    width:100%;
    margin:0;
    background-color:#eeeeee;
  }
</style>
