<template>
<!-- 商品列表区域 -->
    <div class="shopcar-container">
        <div class="goods-list">
            <div class="mui-card">
			    <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <mt-switch v-model="value"></mt-switch>
                    </div>
                    <img src="../../images/milk.jpg" alt="">
                    <div>
                        <p>蒙牛纯牛奶250ml*24 礼盒装</p>
                        <div class="goods-money">
                            <span>￥39</span>
                            <numbox></numbox>
                            <span class="goods-del">删除</span>
                        </div>
                    </div>
			</div>
		</div>
    </div>

    <!-- 商品结算区域 -->
    <div class="goods-pay">
        <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
                    <div class="left">
                        <p>总计（不含邮费）</p>
                        <p>已勾选商品<span>1</span>件，总价<span>￥39</span></p>
                    </div>
                    <div class="right">
                        <mt-button type="danger" size="small">去结算</mt-button>
                    </div> 
				</div>
			</div>
		</div>
    </div>    
    </div>
</template>
<script>
import numbox from '../subcomponents/GoodsNumBox.vue'
export default {
    data(){
        return {
            value: false
        }
    },
    components: {
        numbox
    }
}
</script>
<style lang="scss" scoped>
.shopcar-container {
    .goods-list {
        .mui-card-content {
            padding-top: 10px;
            padding-bottom: 10px;
            display: flex;
            img {
                width: 60px;
                height: 60px;
            }
            p {
                color: #000;
                font-weight: bold;
                font-size: 15px;
            }
            .goods-money {
                display: flex;
                justify-content: space-around;
                line-height: 30px;
                span {
                    color: red;
                }
                .goods-del {
                    color: #26A2ff;
                }
            }
        }
        
    }
    .goods-pay {
       .mui-card-content-inner {
           display: flex;
           justify-content: space-between;
           .right{
               padding-top: 15px;
           }
           .left {
               span {
                   font-size: 16px;
                   color: red;
                   font-weight: bold;
               }
           }
       }
    }
}
</style>
