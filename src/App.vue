<template>
  <div id="app">
    <b-navbar id="nav-box"
              toggleable="lg"
              fixed="top"
              style="border-bottom: 1px solid rgba(30,35,42,.06);">
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
    <div id="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'

  function scroll() {
    //获取导航栏变色的位置距顶部的高度
    let top = $("#content").offset().top
    //获取当前窗口距顶部的高度
    let scrollTop = $(window).scrollTop()
    if (scrollTop - 10 <= top) {
      $('#nav-box').css('background', 'none')
    } else {
      $('#nav-box').css('background', 'white')
    }
  }

  $(window).on('scroll', function () {
    scroll()
  });

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
