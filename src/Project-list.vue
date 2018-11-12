<template>
  <div>
    <projects-filter 
      :changeViewType="changeViewType" 
      :selectedViewType = "viewTypeSelected" ></projects-filter>
    
    <div class="projects-gallery-wrapper">
      
      <projects-gallery-grid 
        v-if="viewTypeSelected == 'плитка'" ></projects-gallery-grid>
      <projects-gallery-row v-else ></projects-gallery-row>
      
      <div class="projects-gallery-load-more" 
        @click="loadMoreProjects">еще проекты</div>

    </div>
    
    <div class="img-hover-container"></div>
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'
  import projectsFilter from './components/Filter';
  import projectsGalleryGrid from './components/ProjectsGalleryGrid';
  import projectsGalleryRow from './components/ProjectsGalleryRow';
  
  export default {
      components: {
          projectsFilter,
          projectsGalleryGrid,
          projectsGalleryRow
      },

    data() {
      return {
        viewTypeSelected: 'плитка',
        displayHoveredImage: false
      }
    },

    methods: {
      ...mapMutations([
          'loadMoreProjects'
      ]),

      changeViewType(newType) {
          this.viewTypeSelected = newType;
      },
    },
    computed: {
        ...mapGetters([
            'postsToShow'
        ])
    }
  }

  // done 1. у списков типов есть селектед по двум категориям которые отображют проекты и вещают на себя класс актив
  // done 2.  тип отображения список/плитка
  // 3. в списке плиткой изображение падает через :css в ховер
  // 4. кнопка еще проекты добавляет 4 проекта в масив
  // done 5. переделать кнопку "еще проекты" стоящей на месте вынести в подктейнер gallery
  // done 6. филтьтр проектов переверстать и вынести в два ряда, для более удобной анимации. Анимация: первый ряд исчезает, схлопывается height у контейнера
  // done 7. когда выбран какой-то другой тип, все переводятся в false, и наоборот
  // 8. вынести фильтр в отдельный компонент
  // 9. пушить selected в масив и показывать только проекты с этим типом

</script>

<style >
  .projects-filter-hide,
  .projects-filter-column li,
  .projects-filter-view-type div,
  .projects-gallery-load-more {
    cursor: pointer;
    user-select: none;
  }

  .is-type-selected {
    color: #C89F6E;
  }

  .projects-gallery-load-more {
    margin-bottom: 25px;
  }

  /* оптимиировать стили */

  .projects-list-row {
    display: flex;
    justify-content: space-between;
  }


  .projects-gallery-wrapper {
    padding: 0;
  }

  /* объединить стили анимации с меню  */
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: all 1s linear;
  }

  .fade-leave-active {
    transition: all .5s;
    opacity: 0;
  }

  .projects-gallery-row {
    flex-flow: column;
  }

  .projects-gallery-row .project-card {
    padding: 25px 33px;
    border-bottom: 1px solid black;
    margin-top: 0;
  }

  .projects-gallery-row .project-card:last-of-type {
    border-bottom: none;
  }

  .projects-gallery-row .project-card-title {
    margin-top: 0;
  }

</style>
