<template>
    <div>
      <zoloto-menu></zoloto-menu>
      <transition name="fade">
        <router-view></router-view>
      </transition>
      <zoloto-footer></zoloto-footer>
      </div>
</template>

<script>
import zolotoMenu from './Menu.vue';
import zolotoFooter from './Footer.vue';
export default {
  components: {
    zolotoMenu,
    zolotoFooter
  }
}
</script>

<style lang="scss">

</style>
