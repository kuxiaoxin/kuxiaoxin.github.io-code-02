<template>
  <div>
    <div v-for="i in times" :key="i">
      <h1>h1-Hello Fidel!</h1>
      <h2>h2-Hello Fidel!</h2>
      <h3>h3-Hello Fidel!</h3>
      <h4>h4-Hello Fidel!</h4>
      <h5>h5-Hello Fidel!</h5>
      <h6>h6-Hello Fidel!</h6>
      <p>p-Hello Fidel!</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "EmptyDiv",
        props: {
            times: {
                type: Number,
                default: 20
            }
        }
    }
</script>

<style scoped>

</style>