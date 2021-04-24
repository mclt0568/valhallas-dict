<template>
  <div id="home">
    <cv-grid kind="condensed" id="menu-grid">
      <cv-row>
        <cv-column :sm="0" :md="1" :lg="3"></cv-column>
        <cv-column :sm="4" :md="3" :lg="3">
          <div class="cv-grid-story__preview-col full">
            <div class="button-column full">
              <ButtonWrapper type="main">{{texts["list"]}}<Catalog32/></ButtonWrapper>
            </div>
          </div>
        </cv-column>
        <cv-column :sm="4" :md="3" :lg="3">
          <div class="cv-grid-story__preview-col">
            <div class="button-column sub">
              <ButtonWrapper>{{texts["bookmark"]}}<Bookmark32/></ButtonWrapper>
              <ButtonWrapper>{{texts["learn"]}}<Idea32/></ButtonWrapper>
              <ButtonWrapper>{{texts["about"]}}<Information32/></ButtonWrapper>
            </div>
          </div>
        </cv-column>
        <cv-column :sm="0" :md="1" :lg="3"></cv-column>
      </cv-row>
    </cv-grid>
  </div>
</template>

<script>
// @ is an alias to /src
import ButtonWrapper from "@/views/Home/ButtonWrapper";
import {Bookmark32, Catalog32, Idea32, Information32} from "@carbon/icons-vue";

export default {
  name: 'Home',
  components: {
    ButtonWrapper,
    Catalog32,
    Information32,
    Idea32,
    Bookmark32
  },
  data(){return{
    texts:{
      "list":"List of Valhallas Words",
      "bookmark":"Bookmarked Pages",
      "learn":"Learn Valhallas Language",
      "about":"About",
    }
  }}
}
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 672px) {
  .button-column.full{
    padding-top:1.5rem;
  }
  .button-column{
    padding:0 1.5rem;
  }
}
@media only screen and (min-width: 672px) {
  #home{
    display:grid;
    place-items: center;
  }
}
#home{
  height: calc(100vh - 3.5rem);
}
#menu-grid{
  width: 100%;
}
.full{
  height:100%;
}
.buttom-column{
  >button{
    max-width: none;
    width:100%;
  }
}
</style>