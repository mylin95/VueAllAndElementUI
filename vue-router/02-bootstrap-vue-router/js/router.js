;(function() {
    window.router = new VueRouter({
        linkActiveClass: 'active',
        routes: [
            {
                path: '/',
                component: AppHome,
            },
            {
                path: '/news',
                component: News,
                // 配置嵌套路由
                children: [
                    {
                        // 类似绝对路径
                        path: '/news/sport',
                        component: Sport
                    },
                    {
                        // 类似相对路径
                        path: 'tech',
                        component: Tech
                    },
                    {
                        // 配置嵌套路由 的默认路由，
                        // 单路由地址为：/news 时，重定向到/news/sport
                        path: '',
                        redirect: '/news/sport'
                    }
                ]
            },
            {
                path: '/about',
                component: About
            }
        ]
    })
})()