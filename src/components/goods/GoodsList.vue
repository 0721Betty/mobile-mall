<template>
    <div class="goods-list">
        <!-- <router-link class="goods-item" :to="'/home/goodsinfo/'+ item.id" tag="div"> -->
        <router-link class="goods-item" to="/home/goodsinfo" tag="div">
            <img src="../../images/milk.jpg" alt="">
            <h1 class="title">蒙牛 纯牛奶 PURE MILK 250ml*16 礼盒装</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥39</span>
                    <span class="old">￥59</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余30箱</span>
                </p>
            </div>
        </router-link>
        <div class="goods-item">
            <img src="../../images/phone.jpg" alt="">
            <h1 class="title">小米手机6G+128G</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥1799</span>
                    <span class="old">￥3199</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余50件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="../../images/milk.jpg" alt="">
            <h1 class="title">蒙牛 纯牛奶 PURE MILK 250ml*16 礼盒装</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥39</span>
                    <span class="old">￥59</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余30箱</span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .goods-list {
        display: flex;
        flex-wrap: wrap;
        padding: 8px;
        justify-content: space-between;
        .goods-item {
            width: 49%;
            border: 1px solid #ccc;
            box-shadow: 0 0 8px #ccc;
            margin: 4px 0;
            padding: 3px;
            min-height: 293px;
            // 让info灰色区域沉在最下面
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            img {
                width: 100%;
            }
            .title {
                font-size: 14px;
            }
            .info {
                background-color: rgb(223, 222, 222);
                p{
                    margin: 0px;
                    padding: 5px;
                }
                .price {
                    .now {
                        font-size: 16px;
                        color: red;
                        font-weight: 800;
                    }
                    .old {
                        font-size: 12px;
                        color: rgb(153, 151, 151);
                        text-decoration: line-through;
                        margin-left: 18px;
                    }
                }
                .sell {
                    display: flex;
                    justify-content: space-between;
                    font-size: 12px;
                }
            }
        }
    }
</style>
