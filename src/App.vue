<template  id="app-geral">
  <div id="app">
    <Menu />
  </div>
</template>

<script>
import Menu from './components/Menu.vue'

export default {
  name: 'App',
  components: {
    Menu
  }
}

</script>

<style>
  #app-geral {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  background-color: black;
  min-height: 100vh;
  margin: 20px;
  padding: 20px;
  color: white;
}

</style>