import Projects from './Project-list.vue';
import Home from './Home.vue'
import About from './About.vue';
import News from './News.vue'
import Contacts from './Contacts.vue'

export const routes = [
  {path: '/', component: Home},
  {path: '/projects', component: Projects},
  {path: '/news', component: News},
  {path: '/about', component: About},
  {path: '/contacts', component: Contacts}
]