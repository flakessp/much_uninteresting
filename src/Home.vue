<template>
    <div>
        <zoloto-projects></zoloto-projects>
        <zoloto-news></zoloto-news>
    </div>      
</template>

<script>
import zolotoNews from './News.vue';
import zolotoProjects from './Projects.vue';
export default {
    components: {
    zolotoProjects,
    zolotoNews,
  }
}
</script>