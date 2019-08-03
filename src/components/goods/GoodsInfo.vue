<template>
  <div class="goodsinfo-container">
      <!-- 实现加入购物车小球的动画效果 -->
    <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>
    <!--商品轮播图区域  -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <mt-swipe :auto="4000">
            <mt-swipe-item></mt-swipe-item>
            <mt-swipe-item></mt-swipe-item>
            <mt-swipe-item></mt-swipe-item>
          </mt-swipe>
        </div>
      </div>
    </div>

    <!-- 商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">蒙牛 纯牛奶 PURE MILK 250ml*24 礼盒装</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            <span class="old">
              市场价：
              <span>￥59</span>
            </span>
            <span class="now">
              销售价：
              <span>￥39</span>
            </span>
          </p>
          <div class="goods-count">
            购买数量：&nbsp;<numbox @getCount="getSelectedCount"></numbox>
          </div>
          <!-- 实现点击加入购物车的时候，拿到用户选择的数量 -->
          <!-- 加入购物车按钮属于当前组件，但是数量属于GoodsNumBox.vue子组件，涉及到子组件向父组件传值（事件调用机制） -->
          <!-- 事件调用的本质：父向子传递方法，子调用这个方法，同时把数据当作参数传递给这个方法 -->
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>

    <!-- 商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品编号：SD124656413</p>
          <p>库存情况：100箱</p>
          <p>上架时间：2019-06-20 08:10:36</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain class="mtBtns" @click="toImgTextInfo">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain class="mtBtns" @click="toGoodsCmt">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
import numbox from '../subcomponents/GoodsNumBox.vue'
export default {
  data() {
    return {
      // id: this.$route.params.id, //将路由参数中的id挂载到data，方便以后调用
      // goodsinfo: {},//获取到商品的信息
      ballFlag: false,//控制小球隐藏和显示的标识符
      selectedCount: 1,//保存用户选择的数量（默认为1）
    };
  },
  components: {
    numbox
  },
  methods: {
    toImgTextInfo() {
      // 跳转到商品图文介绍页面
      this.$router.push("/home/goodimgtextinfo");
    },
    toGoodsCmt() {
      // 跳转到商品评论页面
      this.$router.push("/home/goodscomment");
    },
    addToShopCar() {
      // 添加到购物车
      this.ballFlag = !this.ballFlag;
      // [商品的id，count数量,price商品的单价，selected商品是否被选中]
      // 拼接出一个要保存到store中car数组里的商品信息对象
      // var goodsinfo = { id: this.id,count: this.selectedCount,price:this.goodsinfo.sell_price,selected: true}
      var goodsinfo = { count: this.selectedCount,selected: true};
      // 调用store中的mutations，将商品加入购物车
      this.$store.commit('addToCar',goodsinfo);
    },
    beforeEnter(el){
        el.style.transform = "translate(0,0)";
    },
    enter(el,done){
        el.offsetWidth;
        // 1.小球动画优化思路，只要分辨率和测试的时候不一样，或者滚动条有
        // 一定的滚定的时候，问题就出现了，2.所以小球最终移动到的位置（translate(x,y)）不能写死
        // 3.应该动态计算最终的位置
        // 4.先得到徽标的横纵坐标，再得到小球的横纵坐标，然后让y值求差，x值也求差，得到的结果就是小球横纵坐标要位移的距离
        // 5.dom.getBoundingClientRect().top/right/left/bottom获取距离四周的距离

        // 获取小球在页面中的位置
        const ballPosition = this.$refs.ball.getBoundingClientRect();
        //获取徽标在页面中的位置,在子组件中可以通过操作DOM获取到父组件中的任一个元素，只要不涉及数据
        const badgePosition = document.getElementById("badge").getBoundingClientRect();  
        
        const xDis = badgePosition.left - ballPosition.left;
        const yDis = badgePosition.top - ballPosition.top;

        el.style.transform = `translate(${xDis}px,${yDis}px)`;
        el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)";
        done();
    },
    afterEnter(el){
        this.ballFlag = !this.ballFlag;
    },
    getSelectedCount(count){
      // 获取用户选择的数量
      this.selectedCount = count; //当子组件把用户选择的数量传递给父组件时，将该数量保存到data上
      // console.log(this.selectedCount+"----");
    }
  }
};
</script>
<style lang="scss" scoped>
.goodsinfo-container {
  background-color: rgb(247, 245, 245);
  overflow: hidden;
  .mint-swipe {
    height: 200px;

    .mint-swipe-item {
      &:nth-child(1) {
        // background-color:skyblue;
        background: url("../../images/milk1.jpg") no-repeat;
        background-size: 100% 100%;
      }
      &:nth-child(2) {
        background: url("../../images/milk2.jpg") no-repeat;
        background-size: 100% 100%;
      }
      &:nth-child(3) {
        background: url("../../images/milk3.jpg") no-repeat;
        background-size: 100% 100%;
      }
    }
  }
  .price {
    font-size: 14px;
    color: #000;
    .old {
      span {
        text-decoration: line-through;
      }
    }
    .now {
      margin-left: 18px;
      span {
        color: red;
        font-size: 16px;
      }
    }
  }
  .goods-count {
    margin-bottom: 8px;
    display: flex;
  }
  .mui-card-footer {
    display: flex;
    flex-wrap: wrap;
    padding: 0 15px;
    padding-bottom: 15px;
    .mtBtns {
      margin-top: 15px;
    }
  }
  .ball {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    z-index: 99;
    top: 390px;
    left: 150px;
  }
}
</style>
