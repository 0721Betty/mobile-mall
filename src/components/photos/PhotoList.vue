<template>
  <div>
    <!-- 需要去除mui-fullscreen类，滑动条无法正常的滚动，是JS组件，需要被初始化一下 -->
    <!-- 导入mui.js并且调用官方提供的方式 -->

    <!-- 顶部滑动条区域 -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            class="mui-control-item mui-active"
            href="#item1mobile"
            data-wid="tab-top-subpage-1.html"
          >推荐</a>
          <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">热点</a>
          <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">北京</a>
          <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">社会</a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">娱乐</a>
          <a class="mui-control-item" href="#item6mobile" data-wid="tab-top-subpage-6.html">科技</a>
        </div>
      </div>
    </div>
    <!-- 图片列表区域，使用懒加载，但是不能按需引入，需要全部引入mintui -->
    <!-- <ul>
      <li v-for="item in list">
        <img v-lazy="item" />
      </li>
    </ul> -->
  </div>
</template>
<script>
// mui实现懒加载的时候，用mui自带的点击事件，因为在真机上调试的时候，点击顶部导航栏切换图片有问题
// 导入mui.js
import mui from "../../lib/mui/js/mui.min.js";

export default {
  data() {
    return {
      list: []//图片列表的数组
    };
  },
  //   如果要操作元素应该在mounted中，因为这时候所有的元素是最新的
  mounted() {
    //当组件中的Dom结构被渲染好并放在页面中后
    // 初始化滑动控件
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>
<style lang="scss" scoped>
* {
  touch-action: pan-y;
}
// image[lazy=loading] {
//   width: 40px;
//   height: 300px;
//   margin: auto;
// }
</style>

