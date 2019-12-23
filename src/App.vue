<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  #app {
    font-family: 'Nunito', sans-serif;
    font-size: 15px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    padding: 0 5% 0 5%;
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
</style>
