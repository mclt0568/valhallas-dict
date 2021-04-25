<template>
  <cv-header id="header-bar" aria-label="Carbon tutorial">
    <cv-skip-to-content href="#main-menu">Skip to content</cv-skip-to-content>
    <cv-header-name id="header-name" href="/">
      <div id="vel-name">LingaVëlhëlkaza Elvorkalesha</div>
      <div id="foreign-names">Dictionary of the Valhallas Language 維赫語詞典</div>
    </cv-header-name>
    <cv-header-nav>
      <!-- <cv-header-menu-item href="/repos">Repositories</cv-header-menu-item> -->
      <cv-text-input
        id="word-search"
        invalidText=""
        :placeholder=searchPlaceholder
      />
      <cv-dropdown
        :placeholder=searchLanguageOptionPlaceholder
        id="search-language-options"
        :items=searchLanguageOptions
        titleText="awa"
      />
    </cv-header-nav>
    <template slot="header-global">
      <cv-header-global-action :class=displayLanguageSelection[0] id="display-language-eng">ENG</cv-header-global-action>
      <cv-header-global-action :class=displayLanguageSelection[1] id="display-language-zhtw">繁中</cv-header-global-action>
      <cv-header-global-action :class=displayLanguageSelection[2] id="display-language-zhcn">简中</cv-header-global-action>
      <cv-header-global-action :class=displayLanguageSelection[3] id="display-language-vel">VËL</cv-header-global-action>
    </template>
  </cv-header>
</template>

<script>
export default {
  name: 'Header',
  props: {},
  data(){return{
    searchPlaceholder: "Enter a Word",
    searchLanguageOptionPlaceholder: "Select a language",
    searchLanguageOptions: ["Valhallas to English","Valhallas to Traditional Chinese","Valhallas to Simplified Chinese","Chinese to Valhallas","English to Valhallas"],
    displayLanguageSelection:["selected display-language-options","display-language-options","display-language-options","display-language-options"]
  }}
};
</script>

<style scoped lang="scss">
@import "../styles/theme.scss";
.display-language-options{
  height:3.5rem;
  width:3.5rem;
  color: $fg-sub;
}
.display-language-options.selected{
  color: $fg-main;
}
#search-language-options{
  padding-top:8px;
  padding-left:8px;
}
#header-bar{
  height:3.5rem;
  background: $bg-dark;
}
#header-name{
  padding-top: 7px;
  padding-left: 15px;
  display:block;
  margin-top:auto;
  overflow-x:hidden;
  overflow-y:hidden;
}
#header-name>div{
  min-width: 265px;
}
#header-name>#vel-name{
  font-family: "Marcellus", serif;
  font-size: 16px;
}
#header-name>#foreign-names{
  font-family: "Roboto", sans-serif;
  font-size: 11px;
  color: $fg-sub;
  font-weight: normal;
}
</style>
