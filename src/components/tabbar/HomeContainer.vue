<template>
  <div>
    <!-- 轮播图区域 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item></mt-swipe-item>
      <mt-swipe-item></mt-swipe-item>
      <mt-swipe-item></mt-swipe-item>

      <!-- 获取到轮播图的数据循环渲染 -->
      <!-- 在组件中使用v-for的时候一定要使用key -->
      <!-- <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
          <img :src="item.img" alt="">
      </mt-swipe-item>-->
    </mt-swipe>

    <!-- 六宫格区域 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <span class="mui-icon mui-icon-chat"></span>
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/sharepic">
          <span class="mui-icon mui-icon-image"></span>
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/shopping">
          <span class="mui-icon mui-icon-extra mui-icon-extra-gift"></span>
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/leavemsg">
          <span class="mui-icon mui-icon-email"></span>
          <div class="mui-media-body">留言反馈</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/movie">
          <span class="mui-icon mui-icon-videocam"></span>
          <div class="mui-media-body">视频专区</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/aboutUs">
          <span class="mui-icon mui-icon-phone"></span>
          <div class="mui-media-body">联系我们</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      lunbotuList: [] //保存轮播图的数组
    };
  },
  created() {
    // this.getLunbotu();
  },
  methods: {
    // getLunbotu(){
    //     // 获取轮播图数据(图片和url)的方法,使用vue-resource的this.$http.get获取数据
    //     // 获取到的数据保存到data身上，使用v-for循环渲染每个item项
    //     this.$http.get("api/xxx").then(result => {
    //         // console.log(result.body);
    //         if(result.body.status === 0){
    //             // 获取成功
    //             this.lunbotuList = result.body.message;
    //         }else{
    //             // 获取失败
    //             Toast('加载轮播图失败！');
    //         }
    //     })
    // }
  }
};
</script>
<style lang="scss" scoped>
// 轮播图样式
.mint-swipe {
  height: 200px;

  .mint-swipe-item {
    &:nth-child(1) {
      // background-color:skyblue;
      background: url("../../images/1.jpg") no-repeat;
      background-size: 100% 100%;
    }
    &:nth-child(2) {
      background: url("../../images/2.jpg") no-repeat;
      background-size: 100% 100%;
    }
    &:nth-child(3) {
      background: url("../../images/3.jpg") no-repeat;
      background-size: 100% 100%;
    }

    // img {
    //     width: 100%;
    //     height: 100%;
    // }
  }
}
//  六宫格样式
// 去除默认的ul背景和li的边框
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;

  .mui-media-body {
    font-size: 13px;
  }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: none;
}
</style>
