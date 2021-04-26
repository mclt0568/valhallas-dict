<template>
  <cv-header id="header-bar" aria-label="Carbon tutorial">
    <cv-skip-to-content href="#main-menu">Skip to content</cv-skip-to-content>
    <cv-header-name id="header-name" href="/">
      <div id="vel-name">LingaVëlhëlkaza Elvorkalesha</div>
      <div id="foreign-names">Dictionary of the Valhallas Language 維赫語詞典</div>
    </cv-header-name>
    <cv-header-nav>
      <cv-text-input
        id="word-search"
        invalidText=""
        :placeholder=display_language_content.search_placeholder
      />
      <cv-dropdown
        :placeholder=display_language_content.search_language_placeholder
        id="search-language-options"
        :items=display_language_content.search_language_options
        titleText="awa"
      />
    </cv-header-nav>
    <template slot="header-global">
      <cv-header-global-action class="display-language-options" :class=display_language_selection[0] @click=onSetLangClick($event) id="display-language-eng">ENG</cv-header-global-action>
      <cv-header-global-action class="display-language-options" :class=display_language_selection[1] @click=onSetLangClick($event) id="display-language-zhtw">繁中</cv-header-global-action>
      <cv-header-global-action class="display-language-options" :class=display_language_selection[2] @click=onSetLangClick($event) id="display-language-zhcn">简中</cv-header-global-action>
      <cv-header-global-action class="display-language-options" :class=display_language_selection[3] @click=onSetLangClick($event) id="display-language-vel">VËL</cv-header-global-action>
    </template>
  </cv-header>
</template>

<script>
import language_contents from "@/languages/Header.json";

export default {
  name: 'Desktop View',
  props: {},
  data(){return{
    // search_placeholder: "Enter a Word",
    // search_language_placeholder: "Select a language",
    // search_language_options: ["Valhallas to English","Valhallas to Traditional Chinese","Valhallas to Simplified Chinese","Chinese to Valhallas","English to Valhallas"],
    display_language_content: {
		"search_placeholder": "Enter a Word",
		"search_language_placeholder": "Select a language",
		"search_language_options": [
			"Valhallas to English",
			"Valhallas to Traditional Chinese",
			"Valhallas to Simplified Chinese",
			"Chinese to Valhallas",
			"English to Valhallas"
		]
	},
    display_language_selection:["","","",""]
  }},
  async mounted(){
    await this.updateDisplayLanguage();
  },
  methods:{
    onSetLangClick(event){
      const id_langcode_ref = {
        "display-language-eng":"eng",
        "display-language-zhtw":"zhtw",
        "display-language-zhcn":"zhcn",
        "display-language-vel":"vel",
      };
      const lang_code = id_langcode_ref[event.target.id];
      this.setDisplayLanguage(lang_code);
      this.updateDisplayLanguage();
      window.location.reload();
    },
    async updateDisplayLanguage(){
      // Update Selection
      var display_language = localStorage.getItem("displayLang") || "eng";
      switch(display_language){
        case "eng":
          this.display_language_selection = ["selected","","",""];
        break;
        case "zhtw":
          this.display_language_selection = ["","selected","",""];
        break;
        case "zhcn":
          this.display_language_selection = ["","","selected",""];
        break;
        case "vel":
          this.display_language_selection = ["","","","selected"];
        break;
      }

      this.display_language_content = language_contents[display_language];
    },
    setDisplayLanguage(lang){
      localStorage.setItem("displayLang",lang);
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/styles/theme.scss";
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
