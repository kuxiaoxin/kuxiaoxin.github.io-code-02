<template>
  <div>
    <breadcrumb-route></breadcrumb-route>
    <empty-div title="权谋"></empty-div>
  </div>
</template>

<script>
  import BreadcrumbRoute from "@/components/BreadcrumbRoute"
  import EmptyDiv from "@/components/EmptyDiv"

  export default {
    name: "Trickery",
    components: {
      BreadcrumbRoute,
      EmptyDiv
    }
  }
</script>

<style scoped>

</style>