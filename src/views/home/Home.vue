<template>
  <div class="home">
    <div style="position: relative">
      <img style="width: 100%;" src="../../assets/image/home/nav-background.jpg" alt="首页图片">
      <div style="height: 100%;width: 100%;opacity: .3;background: black;position: absolute;top: 0;left: 0"></div>
    </div>
    <breadcrumb-route></breadcrumb-route>
    <empty-div title="首页"></empty-div>
  </div>
</template>

<script>
  import BreadcrumbRoute from "@/components/BreadcrumbRoute"
  import EmptyDiv from "@/components/EmptyDiv"

  export default {
    name: 'Home',
    components: {
      BreadcrumbRoute,
      EmptyDiv
    }
  }
</script>
