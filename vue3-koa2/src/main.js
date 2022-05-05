import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import Axios from 'axios'

const app = createApp(App)

app.config.globalProperties.$http = Axios

app
  .use(router)
  .mount('#app')
