(function() {

    // 声明插件对象
    const MyPlugin = {}
    MyPlugin.install = function (Vue, options) {
        // 1.添加全局方法 或 属性
        Vue.myGlobalMethod = function () {
            alert("MyPlugin.myGlobalMethod全局方法被调用了")
        }

        // 2.添加全局资源（指令、组件、过滤器等）
        // 2.1 全局指令
        Vue.directive('my-directive', {
            inserted(el, binding) {
                el.innerHTML = 'MyPlugin.my-directive指令被调用了:' + binding.value
            }
        })

        // 3.添加实例方法 new Vue()
        Vue.prototype.$myMethod = function (value) {
            alert('Vue实例方法myMethod被调用了：' + value)
        }
    }

    // 将插件添加到window对象中 （暴露）
    window.MyPlugin = MyPlugin
})()