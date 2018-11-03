<template>
  <div class="projects-filter">
    <transition name="fade">
      <div class="projects-filter-column projects-filter-column-titled" v-if="isFilterOpen">
        <div class="projects-filter-title">Проекты</div>
        <div class="projects-filter-column">
          <div class="filter-column-title">тип работ:</div>
          <ul>
            <li v-for="item in workTypes" :key="item.title" :class="{'is-type-selected':item.selected}" @click="selectType(item, typeWork)">{{item.title}}</li>
          </ul>
        </div>
        <div class="projects-filter-column">
          <div class="filter-column-title">отрасль:</div>
          <ul>
            <li v-for="item in branchTypes" :key="item.title" :class="{'is-type-selected':item.selected}" @click="selectType(item, typeBranch)">{{item.title}}</li>
          </ul>
        </div>
      </div>
    </transition>
    <div class="projects-list-row">
      <div class="projects-filter-view-type">
        <!-- выбор отображения оптимизировать в компонент -->
        <div class="view-type-single" :class="{active: selectedViewType == 'плитка'}" @click="changeViewType('плитка')">плитка</div>
        <div class="view-type-single" :class="{active: selectedViewType == 'список'}" @click="changeViewType('список')">список</div>
      </div>
      <div class="projects-filter-hide" @click="toggleFilter">{{filterLabel}}</div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapMutations, mapState } from 'vuex';

  export default {
    
    props: {
         changeViewType: {
            type: Function
        }, selectedViewType: {
            type: String
        }
    },

    data() {
      return {
        isFilterOpen: true,
        filterLabel: 'Свернуть'
      }
    },

    methods: {
      ...mapMutations([
        'selectType'
      ]),
      toggleFilter: function () {
        this.isFilterOpen = !this.isFilterOpen;
        if (this.isFilterOpen) {
          this.filterLabel = 'Свернуть'
        } else {
          this.filterLabel = 'Фильтр'
        }
      },
    }, computed: mapState({
        workTypes: state => state.typeWork,
        branchTypes: state => state.typeBranch
      })
    }

</script>

<style lang="scss">
  .projects-filter {
    display: flex;
    flex-flow: column;
  }

  .projects-filter-column-titled {
    flex-flow: row;
  }

  .projects-filter-title {
    flex-grow: 1;
  }

  .projects-filter-view-type {
    font: 15px/2.3 'Aeroport-mono'
  }

  .view-type-single {
    position: relative;
    margin-right: 35px;
  }

  .view-type-single.active::before {
    content: '';
    width: 10px;
    height: 10px;
    background: black;
    position: absolute;
    top: 50%;
    left: -15px;
    transform: translateY(-50%);
  }

</style>
