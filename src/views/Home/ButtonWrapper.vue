<template>
  <div class="button-wrapper" :class=type>
    <cv-button :renderIcon=renderIcon class="menu-button" kind='secondary'>
      <slot></slot>
    </cv-button>
  </div>
</template>

<script>
export default {
  name: 'ButtonWrapper',
  components: {},
  props:[
    "type",
    "renderIcon"
  ]
}
</script>

<style lang="scss" scoped>
.button-wrapper{
  padding:4px;

  >button{
    max-width: none;
    width:100%;
    height:100%;
    padding: 15px;
  }
  
}
.main button{
  vertical-align: bottom;
}
.main, .main div{
  height:100%
}
</style>