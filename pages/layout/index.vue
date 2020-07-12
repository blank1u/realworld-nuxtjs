<template>
    <main>
        <nav class="navbar navbar-light">
            <div class="container">
                <nuxt-link class="navbar-brand" to="/">conduit</nuxt-link>
                <ul class="nav navbar-nav pull-xs-right">
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/">Home</nuxt-link>
                        <!-- Add "active" class when you're on that page" -->
                        <a class="" href=""></a>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/editor/11">
                            <i class="ion-compose"></i>&nbsp;New Post
                        </nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/settings">
                            <i class="ion-gear-a"></i>&nbsp;Settings
                        </nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link tag="a" class="nav-link" to="/login">Sign up</nuxt-link>
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
    export default {
        name: "index"
    }
</script>

<style scoped>

</style>