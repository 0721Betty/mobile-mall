<template>
  <div>
    <ul class="mui-table-view">
      <!-- 从后端获取数据并渲染 -->
      <!-- <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
					<router-link :to="'/home/newsinfo/'+.item.id">
                        <img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
                            <h1>{{ item.title }}</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：{{ item.time | dateFormat(YYYY-MM-DD) }}</span>
                                <span>点击次数：{{ item.click }}</span>
                            </p>
						</div>
					</router-link>
      </li>-->
      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/newsinfo">
          <img class="mui-media-object mui-pull-left" src="../../images/shuijiao.jpg" />
          <div class="mui-media-body">
            <h1>幸福是什么？</h1>
            <p class="mui-ellipsis">
              <span>发表时间：2019-08-02 10:10:10</span>
              <span>点击次数：2次</span>
            </p>
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/newsinfo">
          <img class="mui-media-object mui-pull-left" src="../../images/muwu.jpg" />
          <div class="mui-media-body">
            <h1>木屋</h1>
            <p class="mui-ellipsis">
              <span>发表时间：2019-08-02 10:10:10</span>
              <span>点击次数：2次</span>
            </p>
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/newsinfo">
          <img class="mui-media-object mui-pull-left" src="../../images/cbd.jpg" />
          <div class="mui-media-body">
            <h1>城市</h1>
            <p class="mui-ellipsis">
              <span>发表时间：2019-08-02 10:10:10</span>
              <span>点击次数：2次</span>
            </p>
          </div>
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
      newslist: [] //保存新闻列表
    };
  },
  created() {
    // this.getNewsList();
  },
  methods: {
    // getNewsList(){
    //     // 获取新闻列表
    //     this.$http.get('api/xxx').then(result => {
    //         if(result.body.status === 0){
    //             // 成功了，应该把数据保存在data身上
    //             this.newslist = result.body.message;
    //         }else{
    //             // 失败了
    //             Toast('获取新闻列表失败！');
    //         }
    //     })
    // }
  }
};
</script>
<style lang="scss" scoped>
.mui-table-view {
  li {
    h1 {
      font-size: 16px;
    }
    .mui-ellipsis {
      font-size: 12px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>

