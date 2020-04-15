<template>
  <div class="about">
    <div class="wow slideInUp" data-wow-duration="1s" data-wow-delay="1s">
      <h1>This is an about page</h1>
    </div>
    <empty-div title="关于"></empty-div>
  </div>
</template>

<script>
    import EmptyDiv from "@/components/EmptyDiv"
    import { WOW } from 'wowjs'

    export default {
        name: 'About',
        components: {
            EmptyDiv
        },
        mounted() {
            let wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 0,
                mobile: true
            })
            wow.init();
        }
    }
</script>