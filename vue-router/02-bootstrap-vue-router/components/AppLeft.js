;(function() {

    const template = `
    <div class="col-sm-3 col-md-2 sidebar">
      <ul class="nav nav-sidebar">

        <!-- router-link可以配置激活样式：
          单个配置（active-class), 
          router全局配置：linkActiveClass
        -->
        <router-link to="/" tag="li" exact>
          <a>首页</a>
        </router-link>

        <router-link to="/news" tag="li">
          <a>新闻管理</a>
        </router-link>

        <router-link to="/about" tag="li">
          <a>关于我们</a>
        </router-link>
        
      </ul>
    </div>`

    window.AppLeft = {
        template,
        data() {
          return {
            delNum: 0 // 已经删除的总数量
          }
        },
        created() {
          // 订阅消息
          PubSub.subscribe('changeNum', (event, num) => { // 箭头函数中的this，指的是它的父类
            // 事件的回调函数
            // 统计已经删除的函数
            this.delNum = this.delNum + num
          })
        },

      }
})()