<template>
  <div class="img-hover-container" v-show="showImage">
    <img :src="title" alt="">
  </div>
</template>

<script>
  export default {
    props: ['title', 'showImage'],
  }
</script>

<style scoped>

</style>
