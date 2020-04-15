<template>
  <div class="home">
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
