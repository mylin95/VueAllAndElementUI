;(function() {

    const template = `
    <div class="col-sm-3 col-md-2 sidebar">
      <ul class="nav nav-sidebar">
        <li class="active"><a href="#">Overview 
        <span v-show="delNum != 0">( {{ delNum }} )</span></a></li>
        <li><a href="#">Reports</a></li>
        <li><a href="#">Analytics</a></li>
        <li><a href="#">Export</a></li>
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