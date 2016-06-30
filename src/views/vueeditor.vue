<template>
    <nv-head></nv-head>
    <vue-editor></vue-editor>
</template>
<script>
    export default {
        components: {
            'nvHead': require('../components/head.vue'),
            'vueEditor': require('../components/vue-editor.vue')
        }
    }
</script>