<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="wow slideInUp" data-wow-duration="1s" data-wow-delay="1s">
      <h1>This is an about page</h1>
    </div>
  </div>
</template>

<script>
    import {WOW} from 'wowjs'

    export default {
        name: 'About',
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