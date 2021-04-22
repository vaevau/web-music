import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import resets from './assets/css/resets.css'
import common from './assets/css/common.scss'


createApp(App).use(store).use(router).mount('#app')
