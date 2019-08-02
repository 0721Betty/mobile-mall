// 入口文件
import Vue from 'vue'
// 1.1导入路由的包并且安装路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat',function(dataStr,pattern = "YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(pattern)
})



// 2.1导入vue-resource并且安装
import VueResource from 'vue-resource'
Vue.use(VueResource)
// 设置请求的根路径
// Vue.http.options.root = 'http://xxxx'



// 导入mui样式
import './lib/mui/css/mui.min.css'
// 为了使用mui中的图标，需要引入下面的css文件
import './lib/mui/css/icons-extra.css'

// 按需导入Mint-UI中的组件
import { Header,Swipe, SwipeItem ,Button ,Lazyload  } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
Vue.use(Lazyload)
import 'mint-ui/lib/style.css'


// 1.2导入自己的router.js模块
import router from './router.js'

// 导入App根组件
import app from './App.vue'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router //1.3挂载路由对象到vm实例上
})