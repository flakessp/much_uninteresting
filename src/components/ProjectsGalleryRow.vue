<template>
  <div class="projects-gallery-row">
    <div class="project-card" v-for="item in postsToShow" :key="item.title" @mouseenter="drawHoveredImg(item.img)"
      @mouseleave="destroyHoveredImg" @mousemove="moveHoveredImg">
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
    methods: {
       moveHoveredImg() {
        // передалать использую vue
        this.imgContainer.style.left = (event.clientX + 40) + 'px';
        this.imgContainer.style.top = (event.clientY - 73) + 'px';
      },

      drawHoveredImg(imgSrc) {
        this.imgContainer = document.querySelector('.img-hover-container');
        this.img = document.createElement('img');
        this.img.setAttribute('src', imgSrc);
        this.imgContainer.appendChild(this.img);
      },

      destroyHoveredImg() {
        this.img.parentNode.removeChild(this.img);
      }
    }
  }
</script>