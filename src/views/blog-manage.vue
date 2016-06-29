<template>
    <nv-head></nv-head>
    <blog-manage-content></blog-manage-content>
</template>
<script>
  export default {
    components: {
      'nvHead': require('../components/head.vue'),
      'blogManageContent': require('../components/blog-manage-content.vue')
    }
  }
</script>