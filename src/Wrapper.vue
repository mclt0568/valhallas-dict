<template>
<div id="app">
  <Header/>
  <div id="main-stage">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
@import "./styles/theme.scss";
@import "./styles/carbon_theme.scss";
@import url('https://fonts.googleapis.com/css2?family=Marcellus&display=swap');
#main-stage{
  min-height: calc(100vh - 3.5rem);
  margin-top: 3.5rem;
}

#app{
  font-family: "Roboto", sans-serif;
  min-height: calc(100vh - 3.5rem);
  background-color: $ui-01;
  background-image: url("assets/grid.png");
}
</style>
<style lang="scss">
@media only screen and (max-width: 672px) {
  .desktop-view-page{
    display:none;
  }
  .mobile-view-page{
    display:unset;
  }
}
@media only screen and (min-width: 672px) {
  .desktop-view-page{
    display:unset;
  }
  .mobile-view-page{
    display:none;
  }
}
</style>