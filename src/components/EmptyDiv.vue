<template>
  <div style="text-align: center">
    <div style="height: 300px;">
      <h3 style="line-height: 300px;">{{title}}-正在编写中。</h3>
    </div>
    <div v-for="i in times" :key="i">
      <h1>h1-你好 鱼非道!</h1>
      <h2>h2-你好 鱼非道!</h2>
      <h3>h3-你好 鱼非道!</h3>
      <h4>h4-你好 鱼非道!</h4>
      <h5>h5-你好 鱼非道!</h5>
      <h6>h6-你好 鱼非道!</h6>
      <p>p-你好 鱼非道!</p>
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
      title: {
        type: String,
        required: true
      },
      times: {
        type: Number,
        default: 20
      }
    }
  }
</script>

<style scoped>

</style>