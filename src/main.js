// 入口文件
import Vue from 'vue'
// 1.1导入路由的包并且安装路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)


// 注册vuex
import Vuex from 'vuex'
Vue.use(Vuex)

// 每次刚进入网站，肯定会调用main.js，在刚调用的时候，先从本地存储中，把购物车中的数据读出来放在store中
var car = JSON.parse(localStorage.getItem('car') || '[]')

var store = new Vuex.Store({
    state: {
        car: car,
        //将购物车中的商品数据，用一个数组存储起来，在car数组中存储一些商品的对象
        // 商品的id，count数量,price商品的单价，selected商品是否被选中

    },
    mutations: {
        // 点击加入购物车,把商品信息保存到store中的car上
        addToCar(state,goodsinfo){
            //如果购物车中已经有该商品，那么只需要更新数量
            // 如果没有，则直接把商品数据push到car中即可
            var flag = false;//假设购物车中没有对应的商品
            state.car.some(item => {
                if(item.id == goodsinfo.id){
                    item.count += parseInt(goodsinfo.count);
                    flag = true;
                    return true;
                }
            })
            // 如果最终循环完毕，得到的flag还是false,则把商品数据直接push到car中
            if(!flag){
                state.car.push(goodsinfo)
            }

            // 当更新car之后，把car数组存储到本地的localStorage中
            localStorage.setItem("car",JSON.stringify(state.car));
        }
    },
    getters: {
        // 得到所有的数量，在App.vue中获取到该数量，然后改变徽标数
        getAllCount(state){
            var c = 0;
            state.car.forEach(item => {
                c += item.count;
            })
            return c;
        }
    }
})

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
import { Header,Swipe, SwipeItem ,Button ,Lazyload ,Switch } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
Vue.component(Switch.name, Switch);
Vue.use(Lazyload)
import 'mint-ui/lib/style.css'


// 1.2导入自己的router.js模块
import router from './router.js'

// 导入App根组件
import app from './App.vue'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router, //1.3挂载路由对象到vm实例上
    store
})