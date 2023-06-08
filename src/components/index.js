// 把components中的所有组件进行全局话注册
// 通过插件的方式
import ImageView from '@/components/imageView/index.vue'
import Sku from '@/components/XtxSku/index.vue'

export const componentPlugin = {
    install (app) {
        // app.component('组件名'，‘组件配置对象’)
        app.component('XtxImageView',ImageView)
        app.component('XtxSku',Sku)
    }
}