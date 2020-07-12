<template>
    <main>
        <nav class="navbar navbar-light">
            <div class="container">
                <nuxt-link class="navbar-brand" to="/">conduit</nuxt-link>
                <ul v-if="user" class="nav navbar-nav pull-xs-right">
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/">Home</nuxt-link>
                        <!-- Add "active" class when you're on that page" -->
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/editor/11">
                            <i class="ion-compose"></i>&nbsp;New Article
                        </nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/settings">
                            <i class="ion-gear-a"></i>&nbsp;Settings
                        </nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link
                                class="nav-link"
                                :to="{name:'Profile'}">
                            <img :src="user.image" class="user-pic">{{user.username}}
                        </nuxt-link>
                    </li>
                </ul>
                <ul v-else class="nav navbar-nav pull-xs-right">
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/">Home</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/login">Sign in</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/register">Sign up</nuxt-link>
                    </li>
                </ul>
            </div>
        </nav>
        <nuxt-child></nuxt-child>
        <footer>
            <div class="container">
                <a href="/" class="logo-font">conduit</a>
                <span class="attribution">
          An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.
        </span>
            </div>
        </footer>
    </main>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "index",
        computed: {
            ...mapState(['user'])
        }
    }
</script>

<style scoped>

</style>