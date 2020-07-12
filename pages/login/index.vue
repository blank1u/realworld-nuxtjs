<template>
    <div class="auth-page">
        <div class="container page">
            <div class="row">

                <div class="col-md-6 offset-md-3 col-xs-12">
                    <h1 class="text-xs-center">{{isLogin?'Sign in':'Sign up'}}</h1>
                    <p class="text-xs-center">
                        <nuxt-link v-if="isLogin" to="/register">Need an account?</nuxt-link>
                        <nuxt-link v-else to="/login">Have an account?</nuxt-link>
                    </p>

                    <ul class="error-messages">
                        <template v-for="(messages,field) in errors">
                            <li v-for="item in messages">{{field}}{{item}}</li>
                        </template>
                    </ul>

                    <form @submit.prevent="handelSubmit">
                        <fieldset v-if="!isLogin" class="form-group">
                            <input v-model="user.username" required class="form-control form-control-lg" type="text"
                                   placeholder="Your Name">
                        </fieldset>
                        <fieldset class="form-group">
                            <input v-model="user.email" class="form-control form-control-lg" type="email"
                                   placeholder="Email">
                        </fieldset>
                        <fieldset class="form-group">
                            <input minlength="8" required v-model="user.password" class="form-control form-control-lg"
                                   type="password"
                                   placeholder="Password">
                        </fieldset>
                        <button class="btn btn-lg btn-primary pull-xs-right">
                            {{isLogin?'Sign in':'Sign up'}}
                        </button>
                    </form>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import {login, register} from '../../api/login'

    const Cookie = process.client ? require('js-cookie') : undefined
    export default {
        middleware: 'notAuth',
        name: "login",
        computed: {
            isLogin() {
                return this.$route.name === 'Login'
            }
        },
        data: () => {
            return {
                user: {
                    email: "",
                    password: "",
                    username: "",
                },
                errors: {}
            }
        },
        methods: {
            handelSubmit() {
                if (this.isLogin) {
                    this.login()
                } else {
                    this.users()
                }
            },
            async login() {
                delete this.user.username
                const raw = {
                    user: this.user
                }
                try {
                    const {data: {user}} = await login(raw)
                    this.$store.commit('setUser', user)
                    Cookie.set('user', user)
                    this.$router.push('/')
                } catch (e) {
                    this.errors = e.response.data.errors
                }
            },
            async users() {
                const raw = {
                    user: this.user
                }
                try {
                    const {data} = await register(raw)
                    this.$router.push('/login')
                } catch (e) {
                    this.errors = e.response.data.errors
                }

            }
        }
    }
</script>

<style scoped>

</style>