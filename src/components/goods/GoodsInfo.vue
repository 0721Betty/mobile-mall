<template>
  <div class="goodsinfo-container">
      <!-- 实现加入购物车小球的动画效果 -->
    <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag"></div>
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
            购买数量：
            <div class="mui-numbox" data-numbox-min="1" data-numbox-max="9">
              <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
              <input id="test" class="mui-input-numbox" type="number" value="5" />
              <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
            </div>
          </div>
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
export default {
  data() {
    return {
      ballFlag: false //控制小球隐藏和显示的标识符
    };
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
    },
    beforeEnter(el){
        el.style.transform = "translate(0,0)";
    },
    enter(el,done){
        el.offsetWidth;
        el.style.transform = "translate(91px,404px)";
        el.style.transition = "all 1s cubic-bezier(.4,-0.3,1,.68)";
        done();
    },
    afterEnter(el){
        this.ballFlag = !this.ballFlag;
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
    .mui-numbox {
      height: 30px;
    }
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
