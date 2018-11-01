<template>
  <div class="zoloto-news">
    <div class="zoloto-news-single">
      <h1 class="zoloto-news-header">новости</h1>
      <div class="zoloto-news-link-all">все</div>
    </div>
    <div class="zoloto-news-single" v-for="item in news">
      <div class="news-single-title">{{item.title}}</div>
      <div class="news-single-date">{{item.date}}</div>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                news: [
                    { title: 'Мы запустили именной поезд метро “год экологии”',
                      date: 5.08 }, { title: 'Мы запустили именной поезд метро “год экологии”',
                      date: 5.08 }, { title: 'Департамент образования города москвы — создание системы ориентирования',
                      date: 5.08 }, { title: 'Aйдентика и навигационная система для парка митино”',
                      date: 5.08 }, { title: 'Мы запустили именной поезд метро “год экологии”',
                      date: 5.08 },
                ]
            }
        }
    }
</script>