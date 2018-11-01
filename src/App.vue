<template>
    <div>
      <zoloto-menu></zoloto-menu>
      <router-view></router-view>
      <zoloto-footer></zoloto-footer>
      </div>
</template>

<script>
import zolotoMenu from './Menu.vue';
import zolotoFooter from './Footer.vue';
export default {
  components: {
    zolotoMenu,
    zolotoProjects,
    zolotoNews,
    zolotoFooter
  }
}
</script>

<style lang="scss">

</style>
