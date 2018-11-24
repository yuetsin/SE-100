<template>

  <div id="app">
    <Content/>
  </div>
</template>

<script src="../node_modules/vue-material/dist/vue-material.js"></script>

<script>
  let Vue = require('vue')
  let VueMaterial = require('vue-material')
  Vue.use(VueMaterial)
</script>

<script>
import Content from './components/Content'
export default {
  name: 'App',
  components: {
    Content
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<style src="vue-material/dist/vue-material.css"></style>
