<template>
  <div class="zoloto-news">
    <div class="zoloto-news-single">
      <h1 class="zoloto-news-header">новости</h1>
      <div class="zoloto-news-link-all">все</div>
    </div>
    <div class="zoloto-news-single"
      @mouseenter="drawHoveredImg"
      @mouseleave="destroyHoveredImg" 
      @mousemove="moveHoveredImg" 
      v-for="item in news" 
      :key="item"
    >
      <div class="news-single-title">{{item.title}}</div>
      <div class="news-single-date">{{item.date}}</div>
      <hovered-img
        :style="computedStyle"
        :title="item.img" 
        :showImage = "showHoveredImage"
      ></hovered-img>
    </div>
  </div>
</template>

<script>
import { news } from './data/news';
import HoveredImg from './components/HoveredImg'

export default {
    data() {
        return {
          news,
          'showHoveredImage': false,
          'clientX': 0,
          'clientY': 0,
        }
    },
    components: {
      HoveredImg
    },
    methods: {
      moveHoveredImg(event) {
        this.clientY = event.layerY - 70 + 'px';
        this.clientX = event.clientX + 40 + 'px';
      },
      drawHoveredImg(imgSrc) {
        this.showHoveredImage = true;
      },

      destroyHoveredImg() {
        this.showHoveredImage = false;
      },
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