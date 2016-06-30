<template>
    <nv-head></nv-head>
    <form-validate></form-validate>
</template>
<script>
    export default {
        components: {
            'nvHead': require('../components/head.vue'),
            'formValidate': require('../components/form-validate.vue')
        }
    }
</script>