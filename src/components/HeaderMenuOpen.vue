<template>
  <div class="container">
      <div class="header-logo"></div>
      <div class="links--container">
        <ul class="nav--links" >
            <li v-for="item in menu" v-bind:key="item.title"><router-link :to="item.link">{{item.title}}</router-link></li>
        </ul>
        <ul class="social_links">
          <li v-for="item in socialLinks" v-bind:key="item.title">
            <a :href="item.link">{{item.title}}</a>
          </li>
        </ul>
      </div>
      
  </div>
</template>

<script>
  import { MENU_ELEMENTS } from '../data/menu_elements'
  import { SOCIAL_LINKS } from '../data/social_links'

  export default {
    data() {
      return {
        menu: MENU_ELEMENTS,
        socialLinks: SOCIAL_LINKS
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    display: flex;  
    height: calc(100vh - 60px);
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 33px;
  }

  .nav--links {
    font: 40px/.875  "Zoloto-display";
  }

  .social_links {
    font: 15px/ 26px 'Aeroport-mono';
    text-align: right;
  }

  .links--container {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
  }
</style>
