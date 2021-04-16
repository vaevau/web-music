import { createRouter, createWebHistory } from 'vue-router';
import RcmdPage from '../views/TopMenu/SongsRcmd';
// import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'RcmdPage',
    component: RcmdPage
  },
  {
    path: '/NewMusic',
    name: 'NewMusicPage',
    component: () => import(   //动态加载组件
      '../views/TopMenu/NewMusic.vue'
    )
  },
  {
    path: '/Radio',
    name: 'RadioPage',
    component: () => import (
      '../views/TopMenu/Radio.vue'
    )
  },
  {
    path: '/Ranking',
    name: 'RankingPage',
    component: () => import (
      '../views/TopMenu/Ranking.vue'
    )
  },
  {
    path: '/Singer',
    name: 'SingerPage',
    component: () => import (
      '../views/TopMenu/Singer.vue'
    )
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
