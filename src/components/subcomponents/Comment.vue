<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr />
    <textarea placeholder="请发表内容（不多于120字）" maxlength="120"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-title">第一楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2016-06-16 10:10:10</div>
        <div class="cmt-body">简单的事情重复做，你就是专家。</div>
      </div>
      <div class="cmt-item">
        <div class="cmt-title">第二楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2016-06-16 10:10:10</div>
        <div class="cmt-body">简单的事情重复做，你就是专家。</div>
      </div>
      <div class="cmt-item">
        <div class="cmt-title">第三楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2016-06-16 10:10:10</div>
        <div class="cmt-body">简单的事情重复做，你就是专家。</div>
      </div>
    </div>
    <!-- <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button> -->
    <mt-button type="danger" size="large" plain>加载更多</mt-button>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      // pageIndex: 1, //展示默认第一页数据
      // comments: [] //所有的评论数据
    };
  },
  created() {
    // this.getComments();
  },
  methods: {
    // getComments(){
    //     this.$http.get("api/getcomments/"+this.id+"?pageindex="+this.pageIndex)
    //         .then(result => {
    //            if(result.body.status === 0){
    //                //成功
    //                //this.comments = result.body.message;
    //                //每当获取新数据的时候，不清空覆盖老数据，而是老数据拼接新数据
    //                  this.comments = this.comments.concat(result.body.message);
    //            }else{
    //                Toast('获取评论失败！');
    //            }
    //         })
    // },
    // getMore(){//加载更多
    //     this.pageIndex++;
    //     this.getComments();
    // }
  }
  // props: ["id"]
};
</script>
<style lang="scss" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 90px;
    margin: 0;
  }
  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        background-color: #ccc;
        line-height: 35px;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>

