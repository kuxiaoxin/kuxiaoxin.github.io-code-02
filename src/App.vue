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
          <b-nav-item>
            <router-link to="/">首页</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/hero">论英雄</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/think">锦囊</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/trickery">权谋</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/book">《三国演义》</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/about">关于</router-link>
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
    name: 'App'
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
