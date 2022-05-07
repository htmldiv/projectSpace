/*
 * @Description: 入口文件配置
 * @Author: wander
 * @Date: 2022-05-06 00:26:06
 * @LastEditors: wander
 * @LastEditTime: 2022-05-07 16:44:15
 */
import { createApp, Directive } from 'vue'
import App from './App.vue'
// import './pwa/registerServiceWorker'
import router from './router'
import { store } from './store'
import { loadAllPlugins } from './plugins'
import '@/assets/iconfont/iconfont.css'
import '@/styles/index.scss'
import 'normalize.css'
// import * as directives from '@/directives'
import '@/permission'
import Axios from 'axios'
import Particles from "particles.vue3";
// 按需要引入 element-plus
import { globalRegister } from './gloable'


const app = createApp(App)
// 加载所有插件
loadAllPlugins(app)
app.config.globalProperties.$http = Axios
app.use(Particles)
app.use(globalRegister)

console.log(process.env.VUE_APP_BASE_API)

// 自定义指令
// Object.keys(directives).forEach(key => {
//   app.directive(key, (directives as { [key: string ]: Directive })[key])
// })

app.use(store).use(router).mount('#app')
