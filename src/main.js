
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

//引入初始化的样式文件
import '@/styles/common.scss'
const app = createApp(App)
const pinia = createPinia()
// 注册持久化组件 保持本地数据和pinia数据时刻相同
// 调整pinia中的数据就同步调整了本地数据
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)

app.mount('#app')

//引入并注册懒加载指令插件
import {lazyPlugin} from '@/directives/index'
//引入全局组件插件
import {componentPlugin} from '@/components/index'
//通过app.use()进行注册
app.use(lazyPlugin)
app.use(componentPlugin)
