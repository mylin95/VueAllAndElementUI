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
                component: News
            },
            {
                path: '/about',
                component: About
            }
        ]
    })
})()