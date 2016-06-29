<template>
    <nv-head></nv-head>
    <works-center></works-center>
</template>
<script>
  export default {
    components: {
      'nvHead': require('../components/head.vue'),
      'worksCenter': require('../components/works-content.vue')
    }
  }
</script>