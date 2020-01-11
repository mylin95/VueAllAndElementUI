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
                children: [
                    {
                        path: '/news/sport',
                        component: Sport
                    },
                    {
                        path: 'tech',
                        component: Tech
                    },
                    {
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