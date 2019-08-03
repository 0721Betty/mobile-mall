<template>
  <div class="app-container">
    <!-- 顶部header区域 -->
    <mt-header fixed title="移动商城"></mt-header>
    <!-- 返回按钮 -->
    <span class="back" @click="goBack">&lt;&nbsp;返回</span>

    <!-- 中间的路由router-view区域 -->
    <transition>
      <router-view></router-view>
    </transition>

    <!-- 底部Tabber 区域-->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item-change" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item-change" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item-change" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="badge">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item-change" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>
<script>
export default {
  data(){
    return {}
  },
  methods: {
    goBack(){
      this.$router.go(-1);//返回上一次浏览的页面
    }
  }
};
</script>
<style lang="scss" scoped>
.app-container {
  padding-top: 40px;
  padding-bottom: 51px;
  overflow-x: hidden;
  position: relative;
  .back {
    position: fixed;
    top: 10px;
    left: 10px;
    height: 20px;
    color: #fff;
    z-index: 999;
    font-size: 13px;
  }
}

/* 组件切换的动画效果 */
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

// 改类名解决点击tabbar无法切换页面问题，.mui-tab-item======>.mui-tab-item-change
.mui-bar-tab .mui-tab-item-change.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item-change {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-change .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-change .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
