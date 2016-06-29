<template>
	<!-- <img src="../lib/img/logo.png" /> -->
    <nv-head></nv-head>
    <index-center></index-center>
    <nv-bottom></nv-bottom>

</template>
<script>
  export default {
    components: {
      'nvHead': require('../components/head.vue'),
      'nvBottom': require('../components/footer.vue'),
      'indexCenter': require('../components/index-center.vue')
    }
  }
</script>