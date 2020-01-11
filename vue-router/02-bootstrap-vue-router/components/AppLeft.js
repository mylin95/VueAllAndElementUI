;(function() {

    const template = `
    <div class="col-sm-3 col-md-2 sidebar">
      <ul class="nav nav-sidebar">
        <li class="active">
          <router-link to="/">首页</router-link>
        </li>
        <li><router-link to="/news">新闻</router-link></li>
        <li><router-link to="/about">关于我们</router-link></li>
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