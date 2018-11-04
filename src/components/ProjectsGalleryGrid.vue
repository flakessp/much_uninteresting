<template>
  <!-- отображение плиткой -->
  <div class="projects-gallery">
    <project-card v-for="item in postsToShow" :key="item.title" :title="item.title" :img="item.img"></project-card>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import ProjectCard from './ProjectCard.vue';
  export default {
    components: {
      ProjectCard
    },
    computed: {
      ...mapGetters([
        'postsToShow'
      ])
    }, 
  }
</script>
