<template>
  <div class="projects-gallery-row">
    <projects-gallery-row-element
      v-for="item in postsToShow"
      :post = "item"
      :key="item.title"
      > 
    </projects-gallery-row-element>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import ProjectsGalleryRowElement from './ProjectsGalleryRowElement'
  export default {
    components: {
      ProjectsGalleryRowElement
    },
    computed: {
      ...mapGetters([
        'postsToShow'
      ]), 
    },
  }
</script>