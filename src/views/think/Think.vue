<template>
  <div>
    <breadcrumb-route></breadcrumb-route>
    <empty-div title="锦囊"></empty-div>
  </div>
</template>

<script>
  import BreadcrumbRoute from "@/components/BreadcrumbRoute"
  import EmptyDiv from "@/components/EmptyDiv"

  export default {
    name: "Think",
    components: {
      BreadcrumbRoute,
      EmptyDiv
    }
  }
</script>

<style scoped>

</style>