<template>
  <div id="app">
    <b-navbar toggleable="lg"
              type="light"
              variant="light"
              fixed="top">
      <b-navbar-brand href="#">
        <img src="./assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
        三国趣闻
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav id="nav" class="ml-auto">
          <b-nav-item v-for="(item, index) in routeList" :key="index">
            <router-link :to="item.path">{{item.name}}</router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div style="margin-top: 56px;">
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        routeList: [
          {
            path: '/',
            name: '首页'
          },
          {
            path: '/hero',
            name: '论英雄'
          },
          {
            path: '/think',
            name: '锦囊'
          },
          {
            path: '/trickery',
            name: '权谋'
          },
          {
            path: '/book',
            name: '《三国演义》'
          },
          {
            path: '/about',
            name: '关于'
          }
        ]
      }
    }
  }
</script>

<style>
  #nav a {
    color: #2c3e50;
    text-align: center;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
