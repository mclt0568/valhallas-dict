<template>
  <div id="app">
    <Header/>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style lang="scss">
  @import "./styles/carbon";
  @import "./styles/theme.scss";
  @import url('https://fonts.googleapis.com/css2?family=Marcellus&display=swap');

#app{
  font-family: "Roboto", sans-serif;
  min-height: 100vh;
  background-color: $bg-light;
}
</style>
