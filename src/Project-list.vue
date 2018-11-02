<template>
  <div>
    <div class="projects-filter">
        <transition name="fade">
            <div class="projects-filter-column projects-filter-column-titled" v-if="isFilterOpen">
                <div class="projects-filter-title">Проекты</div>
                <div class="projects-filter-column">
                    <div class="filter-column-title">тип работ:</div>
                    <ul>
                        <li v-for="item in typeWork" :key="item.title" :class="{'is-type-selected':item.selected}" @click="selectType(item, typeWork)">{{item.title}}</li>
                    </ul>
                </div>
                <div class="projects-filter-column">
                    <div class="filter-column-title">отрасль:</div>
                    <ul>
                        <li v-for="item in typeBranch" :key="item.title" :class="{'is-type-selected':item.selected}" @click="selectType(item, typeBranch)">{{item.title}}</li>
                    </ul>
                </div>
            </div>
        </transition>
      <div class="projects-list-row">
        <div class="projects-filter-view-type">
            <!-- выбор отображения оптимизировать в компонент -->
          <div class="view-type-single" :class="{active: viewTypeSelected == 'плитка'}" @click="viewTypeSelected='плитка'">плитка</div>
          <div class="view-type-single" :class="{active: viewTypeSelected == 'список'}" @click="viewTypeSelected='список'">список</div>
        </div>
        <div class="projects-filter-hide" @click="toggleFilter">{{filterLabel}}</div>
      </div>
        
    </div>
    <div class="projects-gallery-wrapper">
            <!-- отображение плиткой -->
        <div class="projects-gallery" v-if="viewTypeSelected == 'плитка'">
            <div class="project-card" v-for="item in projects" :key="item.title">
                <div class="project-card-image"><img :src="item.img" alt=""></div>
                <div class="project-card-title">{{item.title}}</div>
            </div>
        </div>
            <!-- отображение списком -->
        <div class="projects-gallery-row" v-else >
            <div class="project-card" v-for="item in projects" :key="item.title"   @mouseenter="drawHoveredImg(item.img)" 
                @mouseleave="destroyHoveredImg" 
                @mousemove="moveHoveredImg">
                <!-- <div class="project-card-image"><img :src="item.img" alt=""></div> -->
                <div class="project-card-title">{{item.title}}</div>
                
            </div>
        </div>
      <div class="projects-gallery-load-more" @click="moreProjects">еще проекты</div>
    </div>
<div class="img-hover-container"></div>
  </div>
  
</template>

<script>
import projects from './data/projects.js'
export default {
    // done 1. у списков типов есть селектед по двум категориям которые отображют проекты и вещают на себя класс актив
    // 2. есть тип отображения список/плитка
    // 3. в списке плиткой изображение падает через :css в ховер
    // 4. кнопка еще проекты добавляет 4 проекта в масик
    // 5. переделать кнопку "еще проекты" стоящей на месте вынести в подктейнер gallery
    // 6. филтьтр проектов переверстать и вынести в два ряда, для более удобной анимации. Анимация: первый ряд исчезает, схлопывается height у контейнера
    // done 7. когда выбран какой-то другой тип, все переводятся в false, и наоборот
    // 8. вынести фильтр в отдельный компонент
    // 9. пушить selected в масив и показывать только проекты с этим типом
    data() {
        return {
            typeWork: [{title:'все',selected:true},{title:'навигация',selected:false},{title:'айдентика', selected:false},{title:'концепция развития',selected:false},{title:'стратегия',selected:false},{title:'оформление пространств',selected:false},{title:'сувениры',selected:false},{title:'полиграфия',selected:false},{title:'digital',selected:false}],
            typeBranch: [{title:'все',selected:true},{title:'ритейл',selected:false},{title:'fmcg',selected:false},{title:'корпоративный брендинг',selected:false},{title:'городская среда',selected:false},{title:'культурные проекты',selected:false},{title:'недвижимость',selected:false}],
            projects,
            viewTypeSelected: 'плитка',
            selectedTypes: ['все'],
            isFilterOpen: true,
            filterLabel: 'Свернуть',
            displayHoveredImage: false
        }
    }, methods: {
        moreProjects () {
            this.projects.push({
                img: require('./assets/images/yQKWXW.tif-80.jpg'),
                title: 'Третьяковская галерея на крымском валу',
                link: '',
                type: ''
            })
        }, selectType(item, obj) {
            const type = item.title;

            if (type == 'все' && item.selected == true) {
                return;
            } else if ( type == 'все' ) {
                obj.forEach(function( element,index ) {
                    // пройтись по всему массиву и выключить остальные выбранные в фильтре
                    if ( index == 0 ) return;
                    element.selected = false;
                });
            } else {
                obj[0].selected = false;
            }
            item.selected = !item.selected;
            // отправить в массив выбранных selectedTypes
            this.selectedTypes.push(item.title);
        }, toggleFilter: function() {
                this.isFilterOpen = !this.isFilterOpen;
                if (this.isFilterOpen) {
                    this.filterLabel = 'Свернуть'
                } else {
                    this.filterLabel = 'Фильтр'
                }
        }, moveHoveredImg() {
            // передалать использую vue
            this.imgContainer.style.left  = (event.clientX + 40) + 'px';
            this.imgContainer.style.top = (event.clientY - 73) + 'px';

        }, drawHoveredImg(imgSrc) {
            this.imgContainer = document.querySelector('.img-hover-container');
            this.img = document.createElement('img');
            this.img.setAttribute('src', imgSrc);
            this.imgContainer.appendChild(this.img);
        }, destroyHoveredImg() {
            this.img.parentNode.removeChild(this.img);
        }
    }, computed: {
        postsToShow() {
            // возвращает массив на основе выбранных типов
            if (this.selectedTypes == 'все') {
                return this.projects;
            }
            
            const posts = [];
            // для каждого объекта в массиве медиа
            this.mediaList.forEach((item) => {
            if(!this.posts.includes(item.type)) {
                // если объекта с таким типом нет в массиве -> добавить его в новый массив
                posts.push(item.type);
            }
            });
            return posts;
        }
    }
}
    
</script>

<style scoped>
    .projects-filter-hide, .projects-filter-column li, .projects-filter-view-type div, .projects-gallery-load-more{
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

    .projects-filter {
        display: flex;
        flex-flow: column;
    }

    .projects-filter-column-titled {
        flex-flow:row;
    }

    .projects-filter-title {
        flex-grow: 1;
    }

    .projects-list-row {
        display: flex;
        justify-content: space-between;
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
    .projects-gallery-wrapper {
        padding: 0;
        border-bottom: 1px solid black;
    }

        /* объединить стили анимации с меню  */
    .fade-enter {
        opacity:0;
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
    .projects-gallery-row .project-card:last-of-type{
        border-bottom: none;
    }
    .projects-gallery-row .project-card-title {
        margin-top: 0;
    }
    .img-hover-container {
        position: absolute;
        width: 218px;
        height: 145px;
        z-index: 1;
        overflow: hidden;
    }
</style>
