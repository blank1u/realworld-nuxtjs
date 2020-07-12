const cookieparser = process.server ? require('cookieparser') : undefined
export const state = () => {
    return {
        user: null
    }
}

export const mutations = {
    setUser(state, data) {
        state.user = data
    }
}

export const actions = {

    /**
     *
     *  这个方法会在服务器渲染时被自动调用
     *  Nuxt特有的action函数，解决 JWT 问题
     *  https://zh.nuxtjs.org/examples/auth-external-jwt
     *  作用：初始化容器数据，传递数据给客户端使用
     * @param commit
     * @param req
     */
    //
    //
    nuxtServerInit({commit}, {req}) {
        let user = null
        // https://github.com/nuxt-community/nuxt-i18n/issues/53
        if (req && req.headers && req.headers.cookie) {
            const parsed = cookieparser.parse(req.headers.cookie)
            try {
                user = JSON.parse(parsed.user)
            } catch (err) {
                // No valid cookie found
            }
        }
        commit('setUser', user)
    }
}