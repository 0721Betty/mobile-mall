<template>
  <div class="ni-container">
    <!-- <h1>新闻详情页面-----{{id}}</h1> -->
    <h1>新闻详情页面</h1>
    <p>幸福是什么？幸福大概是能够安逸的躺上一天，什么都不用管，一切刚刚好。</p>
    <p>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
    <p>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
    <!-- <comment :id="this.id"></comment> -->
    <comment></comment>
  </div>
</template>
<script>
import comment from "../subcomponents/Comment.vue";

export default {
  data() {
    return {
      // id: this.$route.params.id //将url地址中的id值挂载在data上，方便以后调用
    };
  },
  methods: {},
  components: {
    comment
  }
};
</script>
<style lang="scss" scoped>
.ni-container {
  margin: 0 5px;
}
</style>

