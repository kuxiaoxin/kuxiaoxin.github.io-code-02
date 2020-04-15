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
            <router-link to="/">Home</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/about">About</router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div style="margin-top: 70px;">
      <router-view/>
    </div>
  </div>
</template>

<style>
  #nav a {
    color: #2c3e50;
    text-align: center;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
