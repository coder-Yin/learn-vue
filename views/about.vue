<template>

    <nv-head></nv-head>
    <about-content></about-content>
    <nv-bottom></nv-bottom>

</template>
<script>
    export default {
        components:{
            "nvHead":require('../components/head.vue'),
            "nvBottom":require('../components/footer.vue'),
            "aboutContent":require('../components/about-content.vue')
        }
    }
</script>