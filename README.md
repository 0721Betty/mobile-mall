#### 基于Vue的移动端的项目
- 按需引用Mint UI
- MUI(不能通过npm安装，只能下载包，然后将dist包放在lib文件夹中引用，相当于bootstrap,但是bootstrap可以通过npm安装)
#### 首页App.vue
- 完成Header区域和Tabbar区域
- 根据Tabbar区域的四个菜单实现路由跳转，跳转到不同的页面，让App.vue的中间展示不同的内容，Header区域固定在顶部不变
#### 完成了HomeContainer.vue的结构
  - 实现新闻资讯页面
     - 绘制界面
     - 使用vue-resource 获取数据
     - 渲染真实数据
  - 实现新闻资讯列表点击跳转到新闻详情
     - 把列表中的每一项改为router-link,同时在跳转的时候应该提供唯一的ID标识符
     - 创建新闻详情的组件页面 NewsInfo.vue
     - 在路由模块中，将新闻详情的路由地址和组件页面的地址相关联

#### 单独封装一个评论子组件comment.vue，方便其他需要使用的页面调用
- 显示评论功能（待完成从后台获取评论并渲染）
- 评论功能
- 加载更多评论功能