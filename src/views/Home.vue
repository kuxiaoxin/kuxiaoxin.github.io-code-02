<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <empty-div></empty-div>
  </div>
</template>

<script>
    import EmptyDiv from "@/components/EmptyDiv";
    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'Home',
        components: {
            HelloWorld,
            EmptyDiv
        }
    }
</script>
