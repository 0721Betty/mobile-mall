#### 基于Vue的移动端的项目
- 按需引用Mint UI
- MUI(不能通过npm安装，只能下载包，然后将dist包放在lib文件夹中引用，相当于bootstrap,但是bootstrap可以通过npm安装)
--- 
#### 首页App.vue
- 完成Header区域和Tabbar区域
- 根据Tabbar区域的四个菜单实现路由跳转，跳转到不同的页面，让App.vue的中间展示不同的内容，Header区域固定在顶部不变
#### 完成了HomeContainer.vue的结构
#### 实现新闻资讯页面
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
   - 把文本框做双向数据绑定
   - 为发表评论按钮绑定一个事件
   - 校验评论内容，为空则提示用户不能为空，不是空的把评论内容通过vue-resource发送一个请求给服务器
   - 发表评论成功后，重新刷新列表，以查看最新的评论，手动拼接出一个最新的评论对象，然后调用数组的unshift方法，把最新的评论追加到data中comments的开头，这样就能实现最新的评论在开头
- 加载更多评论功能
#### 图片分享页面
- 顶部的nav
- 图片内容和描述
#### 商品购买页面
- 所有商品页面
- 商品详情页面
- 商品图文页面
- 商品评论页面
- 加入购物车的小球动画
--- 
#### 移动端的真机调试
- 保证手机与电脑处于同一个WIFI环境中，也就是说手机可以访问到电脑的IP
- 查看电脑的无线网ip地址`ipconfig`
- 在项目的package.json文件中，在dev脚本中，添加一个--host指令，在这个指令后面加上上面查到的ip地址
- 在电脑上重新运行npm run dev
- 打开手机浏览器输入项目运行的地址
--- 
#### 网页中的跳转方式
- 使用a标签进行跳转
- 使用window.location.href的形式进行跳转（编程式导航）