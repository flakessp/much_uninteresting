<template>
    <div>
      <zoloto-menu></zoloto-menu>
      <zoloto-menu-opened v-show="isMenuOpen"></zoloto-menu-opened>
      <transition name="fade">
        <router-view></router-view>
      </transition>
      <zoloto-footer></zoloto-footer>
      </div>
</template>

<script>

// TODO: перенести логику меню в отдельный компонент с названием хедер

import zolotoMenu from './components/Header.vue'
import zolotoFooter from './Footer.vue'
import zolotoMenuOpened from './components/HeaderMenuOpen'

export default {
  components: {
    zolotoMenu,
    zolotoFooter,
    zolotoMenuOpened
  },
  computed: {
    isMenuOpen () {
        return this.$store.state.menu.isOpen
    }
  }
}
</script>

<style lang="scss">

</style>
