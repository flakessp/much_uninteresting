<template>
  <div class="project-card" 
    @mouseenter="drawHoveredImg"
    @mouseleave="destroyHoveredImg" 
    @mousemove="moveHoveredImg"
  >
    <div class="project-card-title">{{post.title}}</div>
    <hovered-img 
      :style="computedStyle"
      :title="post.img" 
      :showImage = "showHoveredImage"
    ></hovered-img>
  </div>
</template>

<script>
import HoveredImg from './HoveredImg';

export default {
  components: {
    HoveredImg
  },
  data: function() {
    return {
      'showHoveredImage': false,
      'clientX': 0,
      'clientY': 0,
    }
  },
  props: ['post'],
  methods: {
      moveHoveredImg(event) {
      this.clientY = event.layerY - 70 + 'px';
      this.clientX = event.clientX + 40 + 'px';
      // this.imgContainer.style.left = (event.clientX + 40) + 'px';
      // this.imgContainer.style.top = (event.clientY - 73) + 'px';
    },

    drawHoveredImg(imgSrc) {
      this.showHoveredImage = true;
      // this.imgContainer = document.querySelector('.img-hover-container');
      // this.img = document.createElement('img');
      // this.img.setAttribute('src', imgSrc);
      // this.imgContainer.appendChild(this.img);
    },

    destroyHoveredImg() {
      // this.img.parentNode.removeChild(this.img);
      this.showHoveredImage = false;
    }
  },
  computed: {
    computedStyle: function() {
      return {
        display: 'none',
        left: this.clientX,
        top: this.clientY
      }
    }
  }
  
}
</script>
