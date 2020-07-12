export default {
    router: {
        router: {
            linkActiveClass: 'active'
        },
        extendRoutes(routes, resolve) {
            routes.splice(0)
            routes.push({
                name: 'Layout',
                path: '/',
                component: resolve(__dirname, 'pages/layout/index.vue'),
                children: [
                    {
                        name: 'Home',
                        path: '',  // 默认 nuxt-child 路由
                        component: resolve(__dirname, 'pages/layout/home.vue'),
                    },
                    {
                        name: 'Login',
                        path: 'login',
                        component: resolve(__dirname, 'pages/login/index.vue'),
                    },
                    {
                        name: 'Register',
                        path: 'register',
                        component: resolve(__dirname, 'pages/login/index.vue'),
                    },
                    {
                        name: 'Profile',
                        path: 'profile/:username',
                        component: resolve(__dirname, 'pages/profile/index.vue'),
                    },
                    {
                        name: 'Settings',
                        path: '/settings',
                        component: resolve(__dirname, 'pages/settings/index.vue'),
                    },
                    {
                        name: 'Article',
                        path: '/article',
                        component: resolve(__dirname, 'pages/article/index.vue'),
                    },
                    {
                        name: 'Editor',
                        path: '/editor',
                        component: resolve(__dirname, 'pages/editor/index.vue'),
                    }
                ]
            })
        }
    }
}