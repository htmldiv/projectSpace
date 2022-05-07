/*
 * @Description: 项目主文件
 * @Author: wander
 * @Date: 2022-05-05 11:14:05
 * @LastEditors: wander
 * @LastEditTime: 2022-05-05 17:40:26
 */
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

import { store } from './store'
import { loadAllPlugins } from './plugins'
import '@/assets/iconfont/iconfont.css'
import '@/styles/index.scss'
import 'normalize.css'
import Axios from 'axios'
import VueParticles from "vue-particles";



const app = createApp(App)
// 加载所有插件
loadAllPlugins(app)
app.use(VueParticles)

app.config.globalProperties.$http = Axios

app
  .use(router)
  .mount('#app')
