
import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'

//引入初始化的样式文件
import '@/styles/common.scss'
const app = createApp(App)
app.use(createPinia())
app.use(router)

app.mount('#app')

//引入并注册懒加载指令插件
import {lazyPlugin} from '@/directives/index'
//通过app.use()进行注册
app.use(lazyPlugin)
