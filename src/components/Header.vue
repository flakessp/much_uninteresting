<template>
    <div class="zoloto-header">
        <router-link to="/">
            <div class="logo--text">zoloto group</div>
        </router-link>
        <div class="header-menu-main-page header-menu-icon menu-button" @click="toggleMenu">{{menuLabel}}</div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'

    export default {
        data () {
            return {
                logo: {
                    // initial (closed)
                    width: 47,
                    height: 40.64
                }
            }
        },
        methods: {
            ...mapMutations([
                'toggleMenu'
            ]),
        },
        computed: {
            logoStyles(){
                return {
                    width: this.logo.width + 'px',
                    height: this.logo.height + 'px'
                }
            },
            menuLabel() {
                return this.$store.state.menu.label;
            }
        }
    }
</script>

<style scoped>
    ul {
        align-self: flex-end;
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

    /* logo */

    .logo--text {
        font: 20px/15px Zoloto-display;
        text-transform: uppercase;
        word-spacing: 100vw;
    }

    /* container  */

    .zoloto-header {
        height: 60px;
        display: flex;
        align-items: center;
        padding: 0 33px;
    }
</style>


