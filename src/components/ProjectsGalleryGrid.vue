<template>
  <!-- отображение плиткой -->
  <div class="projects-gallery">
    <div class="project-card" v-for="item in postsToShow" :key="item.title">
      <div class="project-card-image"><img :src="item.img" alt=""></div>
      <div class="project-card-title">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    computed: {
      ...mapGetters([
        'postsToShow'
      ])
    },
  }
</script>
