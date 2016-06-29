<template>
    <nv-head></nv-head>
    <blog-center></blog-center>
</template>
<script>
    export default {
        components: {
            'nvHead': require('../components/head.vue'),
            'blogCenter': require('../components/blog-index-content.vue')
        }
    }
</script>