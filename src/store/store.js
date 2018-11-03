import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


import { projects } from '../data/projects';
import { typeBranch } from '../data/typeBranch';
import { typeWork } from '../data/typeWork';


export const store = new Vuex.Store({
    state: {
        projects,
        typeBranch,
        typeWork
    },
    getters: {
        postsToShow(state) {
            const posts = [];
    
            state.typeBranch.forEach(function (type) {
              if (type.title == "все" && type.selected) {
                posts.push(...state.projects);
              } else if (type.selected) {
                posts.push(...state.projects.filter(project => (project.type == type.title)));
              }
            });
    
            return posts
          }
    }, 
    mutations: {
      loadMoreProjects(state) {
        state.projects.push({
          img: require('../assets/images/yQKWXW.tif-80.jpg'),
          title: 'Третьяковская галерея на крымском валу',
          link: '',
          type: ''
        })
      },

      selectType(state, item, obj) {
        const type = item.title;
        if (type == 'все' && item.selected == true) {
          return;
        } else if (type == 'все') {
          obj.forEach(function (element, index) {
            if (index == 0) return;
            element.selected = false;
          });
        } else {
          obj[0].selected = false;
        }
        item.selected = !item.selected;
      },

    }
})