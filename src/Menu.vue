<template>
    <div class="zoloto-header" :class="{'menu-open':isMenuOpen, 'menu-closed': !isMenuOpen }">
        <router-link to="/">
            <div class="header-logo" :style="logoStyles"></div>
        </router-link>
        <div class="header-menu-main-page header-menu-icon menu-button" @click="toggleMenu">{{menuLabel}}</div>
        <transition name="fade">
            <ul class="header-menu header-menu-main-page-closed" v-if="isMenuOpen">
                <li v-for="item in menu" v-bind:key="item.title"><router-link :to="item.link">{{item.title}}</router-link></li>
            </ul>
        </transition>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                menu: [
                    { title: 'проекты', link: '/projects' },
                    { title: 'о нас', link: '/about' },
                    { title: 'новости', link: '/news' },
                    { title: 'контакты', link: '/contacts' }],
                isMenuOpen: false,
                menuLabel: 'Меню',
                logo: {
                    // initial (closed)
                    width: 47,
                    height: 40.64
                }
            }
        },
        methods: {
            toggleMenu: function() {
                this.isMenuOpen = !this.isMenuOpen;
                if (this.isMenuOpen) {
                    // open
                    this.menuLabel = 'Закрыть'
                    this.logo = {
                        width: 788,
                        height: 710,
                    }
                } else {
                    // closed
                    this.menuLabel = 'Меню'
                    this.logo = {
                        width: 47,
                        height: 40.65,
                    }
                }
            }
        },
        computed: {
            logoStyles(){
                return {
                    width: this.logo.width + 'px',
                    height: this.logo.height + 'px'
                }
            }
        }
    }
</script>

<style scoped>
    a {
        color: inherit;
        text-decoration: none;
    }
    ul {
        align-self: flex-end;
    }
    ul li {
        font: 40px/.875  "Zoloto-display";
    }
    .menu-button {
        cursor: pointer;
        user-select: none;
    }
    .menu-open {
        padding: 33px;
    }
    .menu-closed {
        padding: 10px 33px;
    }
    .header-logo {
        transition: all .7s linear;
        will-change: auto;
    }

    /* animation */
    .fade-enter {
        opacity:0;
    }
    .fade-enter-active {
        transition: opacity 1s linear;
    }
    .fade-leave-active {
        transition: opacity .5s;
        opacity: 0;
    }
</style>


