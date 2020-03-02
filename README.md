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

version111
