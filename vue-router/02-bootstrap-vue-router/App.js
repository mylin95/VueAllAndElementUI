;(function() {
    const template = `
    <div>
        <!--头部导航区域-->
        <app-nav></app-nav>
        <!--核心区域:分左右两边-->
        <div class="container-fluid">
            <div class="row">
            <!--左边菜单栏区域-->
            <app-left></app-left>
            <!--右边主页面区域: 分上下两个区域
            <app-home>
                <h1 slot="dashboard" class="page-header">{{title}}</h1>
            </app-home>-->
            <!-- 改成使用vue-router管理路由的方式 -->
            <router-view></router-view>
            </div>
        </div>
    </div>`
    window.App = {
        template,
        data() {
            return {
                title: "仪表盘"
            }
        },
        router,
        components: {
            AppNav,
            AppLeft,
            AppHome
        }
    }
})()