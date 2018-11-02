<template>
  <div>
    <div class="projects-filter">
      <div class="projects-filter-column projects-filter-column-titled">
        <div class="projects-filter-title">Проекты</div>
        <div class="projects-filter-view-type">
          <div class="view-type-single ">плитка</div>
          <div class="view-type-single active">список</div>
        </div>
      </div>
      <div class="projects-filter-column">
        <div class="filter-column-title">тип работ:</div>
        <ul>
            <li v-for="item in typeWork" :key="item">{{item}}</li>
        </ul>
      </div>
      <div class="projects-filter-column">
        <div class="filter-column-title">отрасль:</div>
        <ul>
            <li v-for="item in typeBranch" :key="item">{{item}}</li>
        </ul>
      </div>
      <div class="projects-filter-hide">свернуть</div>
    </div>
    <div class="projects-gallery">
      <div class="project-card">
        <div class="project-card-image"><img src="./assets/images/yQKWXW.tif-80.jpg" alt=""></div>
        <div class="project-card-title">Третьяковская галерея на крымском валу</div>
      </div>
      <div class="project-card">
        <div class="project-card-image"><img src="./assets/images/yQKWXW.tif-80.jpg" alt=""></div>
        <div class="project-card-title">Третьяковская галерея на крымском валу</div>
      </div>
      <div class="project-card">
        <div class="project-card-image"><img src="./assets/images/yQKWXW.tif-80.jpg" alt=""></div>
        <div class="project-card-title">Третьяковская галерея на крымском валу</div>
      </div>
      <div class="project-card">
        <div class="project-card-image"><img src="./assets/images/yQKWXW.tif-80.jpg" alt=""></div>
        <div class="project-card-title">Третьяковская галерея на крымском валу</div>
      </div>
      <div class="projects-gallery-load-more">еще проекты</div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            typeWork: ['все','навигация','айдентика','концепция развития','стратегия','оформление пространств','сувениры','полиграфия','digital'],
            typeBranch: ['все','ритейл','fmcg','корпоративный брендинг','городская среда','культурные проекты','недвижимость'],

        }
    }
}
    
</script>

<style>

</style>
