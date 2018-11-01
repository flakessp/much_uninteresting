<template>
    <div class="zoloto-header">
        <div class="header-logo"></div>
        <div class="header-menu-main-page header-menu-icon" @click="toggleMenu">Меню</div>
        <div class="header-menu header-menu-main-page-closed" v-show="isMenuOpen">
        <ul>
            <li v-for="item in menu">{{item}}</li>
        </ul>
        </div>
        <div class="header-about">ZOLOTOgroup – это междисциплинарная команда, работающая над различными проектами в сферах развития территории, брендинга, создания систем навигации и визуальной стратегии коммуникации брендов.</div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                menu: ['проекты', 'о нас', 'новости', 'контакты', 'en'],
                isMenuOpen: false
            }
        },
        methods: {
            toggleMenu: function() {
                this.isMenuOpen = !this.isMenuOpen;
            }
        }
    }
</script>