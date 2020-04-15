<template>
  <div>
    <breadcrumb-route></breadcrumb-route>
    <empty-div title="论英雄"></empty-div>
  </div>
</template>

<script>
  import BreadcrumbRoute from "@/components/BreadcrumbRoute"
  import EmptyDiv from "@/components/EmptyDiv"

  export default {
    name: "Hero",
    components: {
      BreadcrumbRoute,
      EmptyDiv
    }
  }
</script>

<style scoped>

</style>