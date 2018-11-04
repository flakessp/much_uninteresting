<template>
  <transition name="fade">
    <div class="project-card">
        <div class="project-card-image"><img :src="img" alt=""></div>
        <div class="project-card-title">{{title}}</div>
    </div>
  </transition>
</template>

<script>
  export default {
    props: ['title', 'img']
  }
</script>
