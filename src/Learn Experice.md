先创建axios获取数据 =》组件需要路由数据 =》在apis中封装获取数据的接口 =》组件中调用 =》页面中的调用请求重复 =》在pinia中对请求统一管理 =》组件通过pinia调取数据


使用到的技术：
    git版本管理；
    elementPlus设置主题色；
    axios设置拦截器，为api服务；
    vueuse组件
    吸顶导航设置；
    pinia状态控制，优化重复请求；
    图片懒加载设置，并将其内容封装在directives文件夹中；注册为全局插件
    对重复用到的组件进行封装复用；
    面包屑导航渲染；
    解决路由缓存（切换页面不重加载的问题）-> 精细化/父组件index修改
    将业务封装为函数，提升可维护性(use打头的函数,内部封装逻辑，return组件需要的数据和方法)
    无限加载
    放大镜效果
    SKU组件
    将Sku和ImageView封装并注册为全局插件
    用户数据持久化



export const componentPlugin = {
    install (app) {
        // app.component('组件名'，‘组件配置对象’)
        app.component('XtxImageView',ImageView)
        app.component('XtxSku',Sku)
    }
}
注册组件的方法,之后在main.js中用app.use（组件名）注册为全局插件


关于api？
    // 根据后端提供的数据类型定义响应式数据类型
    const categoryData = ref({})
    // 获取路由参数
    const route = useRoute()
    // 传参的形式与接口定义相关 接口处定义为params这里即用params
    const getCategoryData = async (id = route.params.id) => {
    //获取路由参数
    const res = await getCategoryAPI(id)
    // 赋值
    categoryData.value = res.result



Git
echo "# vue-rabit" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/gulugulugee/vue-rabit.git
git push -u origin master



12056258282
hm#qd@23!