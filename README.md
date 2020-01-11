# VueAllAndElementUI
    this is a Vue.js and ElementUI learning log
    2019年12月22日19:45:55 Vue核心篇
    1.数组遍历、对象遍历：vueCore/06-列表渲染.html
    2.Vue中使用原生的Dom属性：vueCore/07-事件处理.html
    3.事件修饰符：vueCore/07-事件处理.html
        常用的修饰符：click.stop='hello' 、 click.prevent='preventDefault' 、 click.once='changeOnce'
            用途：1.子标签的鼠标单击事件 2.表单提交事件的阻止默认事件（action） 3.
        按键事件(eg)：@keyup.enter='doEnterEvent'
    4.数据绑定：vueCore/08-表单数据双向绑定.html
        单向绑定（data中的数据）：数据变，视图变；视图变，数据不变
        双向绑定（v-model）：数据变 <=> 视图变
        用途：1.表单数据的双向绑定 2.表单提交事件的阻止默认事件
    
    2019年12月23日22:40:39
    5.vue的过渡效果（vue的过渡和动画效果，是通过自动切换特定格式的样式类名进行的，具体样式需要用css指定）
        transtation： VueTransaction/01-过渡效果.html
    6.vue的动画效果
        animation: VueTransaction/02-动画效果.html
    7.vue内置指令
        a.v-pre: 大文本去除vue编译，性能优化
        b.v-text: 防止{{}}闪烁
        c.v-clock: 防止{{}}闪烁
    8.自定义指令
        a.全局指令
        b.局部指令
    
    2019年12月28日13:56:24
    9.todomvc实战
        a.www.todomvc.com获取Vue的模板
        b.前端使用指南：先画页面，然后使用js数据动态化
            1)样式相关，首选能否在标签上使用指令，次之使用method
            2)使用template标签：使用div可能改变dom结构，使用template不会改变dom结构
            3)表单数据双向绑定：表单中使用v-model实现数据的双向绑定，而不是:value=""
            4)计算属性：
                get方法：方法体中的全局变量改变时 调用
                set方法：计算属性的值改变时调用，set方法只有一个参数（改变后的值）
            5）js的数组操作，实用
                尾加1个项：this.items.push(item)
                移除第一个：this.items.splice(0, 1)
                数组过滤函数：this.items.filter((item) => {    })
            6.自定义指令：全局指令、局部指令
            7.路由切换：window.location.hash获取路由尾部的hash值
            8.js使用const定义对象(属性 + 方法)：const itemStorage = { attribute1: '属性1', attribute2: '属性2', fetch: function() {}, save: function(param) {}
            9.使用localStorage本地存储
                set值：localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
                get值：JSON.parse( localStorage.getItem(STORAGE_KEY) || '[]')
        c.此项目实战中很多ES6的语法，值得学习掌握！
        d.VSCode快捷键：
            Ctrl + Enter：新建下一行，光标移动到下一行
            Alt + Up：当前行向上移动
            Shift + Alt + Up： 向上复制当前行

    2020年1月1日11:23:31
    10.Vue的过滤器和插件实战
        a.Vue过滤器：
            全局过滤器：Vue.filter('过滤函数名', function(param1...){ })
            局部过滤器：vue实例中的filters属性
            注：类似Vue自定义组件、Vue自定义组件的定义方式
        b.js文件中的自调用函数的定义方式： (function() {  /*自调用函数体*/  })()
        c.自定义插件
    2020年1月9日09:39:27
        组件间的消息传递：
            1.父=>子: 通过props传递数据（对象、函数等） 
            2.子=>父: 通过自定义事件绑定￥emit
            3.父组件通过插槽slot方式，向子组件传递 视图和数据
            4.兄弟组件、父子组件间传递数据的插件：PubSub
                消息订阅：绑定监听事件处理
                消息发布：触发事件
        箭头函数体中的this，指的是它的父类
            如果箭头函数存在Vue实例中，this指的就是Vue实例，
            如果使用function() {}这种方式，那么其中的this指window实例
    2020年1月11日19:27:58
        vue生命周期：
            三大类钩子函数
        vue结合ajax发送异步请求：
            1.vue1.x：使用vue-resource
            2.vue2.x：使用axios
        vue的路由管理：
            1.Js中定义路由管理：
                a.定义路由的方式有两种，类似组件的定义方式：全局定义、局部定义（详情见01-vue-router-demo.html)
            2.设置路由链接：
                a.<a href="#/foo">Go Foo</a>
                b.<router-link to="/foo">Go Foo</router-link>
            3.设置路由视图：
                <router-view></router-view>
        

            





