<template>

    <nv-head></nv-head>
    <hello></hello>
    <nv-bottom></nv-bottom>

</template>
<script>
  export default {
    components: {
      'nvHead': require('../components/head.vue'),
      'nvBottom': require('../components/footer.vue'),
      'hello': require('../components/Hello.vue')
    }
  }
</script>