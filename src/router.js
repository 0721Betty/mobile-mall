import VueRouter from 'vue-router'

// 导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopCarContainer from './components/tabbar/ShopCarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'

import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'

import PhotoList from './components/photos/PhotoList.vue'

import GoodsList from './components/goods/GoodsList.vue'
import GoodsInfo from './components/goods/GoodsInfo.vue'
import GoodsImgTextInfo from './components/goods/GoodsImgTextInfo.vue'
import GoodsComment from './components/goods/GoodsComment.vue'
var router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: '首页页面',
            component: HomeContainer
        },
        {
            path: '/member',
            name: '会员页面',
            component: MemberContainer
        },
        {
            path: '/shopcar',
            name: '购物车页面',
            component: ShopCarContainer
        },
        {
            path: '/search',
            name: '搜索页面',
            component: SearchContainer
        },
        {
            path: '/home/newslist',
            name: '新闻资讯页面',
            component: NewsList
        },
        {
            path: '/home/newsinfo',
            name: '新闻资讯详情页面',
            component: NewsInfo
        },
        {
            path: '/home/photolist',
            name: '图片分享页面',
            component: PhotoList
        },
        {
            path: '/home/goodslist',
            name: '商品购买列表',
            component: GoodsList
        },
        {
            // path: '/home/goodsinfo/:id',
            path: '/home/goodsinfo',
            name: '商品详情页面',
            component: GoodsInfo
        },
        {
            path: '/home/goodimgtextinfo',
            name: '商品图文介绍页面',
            component: GoodsImgTextInfo
        },
        {
            path: '/home/goodscomment',
            name: '商品评论页面',
            component: GoodsComment
        }
    ],
    linkActiveClass: 'mui-active' //覆盖默认的路由高亮类，默认的类是router-link-active
})

export default router