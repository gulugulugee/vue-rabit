import { useIntersectionObserver } from '@vueuse/core'
//定义懒加载插件

export const lazyPlugin = {
    install(app) {
        //懒加载指令逻辑

        //定义全局指令(注册自定义指令)
//app.directive('指令名字',)
app.directive('img-lazy',{
    //mounted 在绑定的父组件和自己的子组件都加载完成后加载
    mounted(el,binding){
        //el: 指令绑定的元素 img
        //binding： binding.value 指令等于号后面绑定的表达式的值 图片url
        console.log(el,binding.value)
        //检查窗口是否在视线中
        const {stop} = useIntersectionObserver(
            //target：监听谁进入视线，target就指谁
            el,
            //isIntersecting：布尔值提示是否进入视线
            ([{isIntersecting}]) => {
                console.log(isIntersecting)
                //进入视线区域
                if(isIntersecting){
                    el.src = binding.value
                    stop()
                }
            },
        )
    }
})
    }
}