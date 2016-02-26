<style scoped>
	.about-web{position: absolute;top: 50%;left: 50%;margin-top: -25px;margin-left: -115px;font-size: 24px;font-weight: bold;color: #333;}
	.about-web .content{font-size: 14px;color: #666;}
</style>

<template>
  <section class="container text-center">
        <p class="about-web">关于我们<span class="content">（{{ msg }}）</span></p>
  </section>
</template>



<script>
export default {
  ready: function() {
      this.$http.get('testJson.json', function(d) {
            this.$set('msg', d.data.info);
        }).error(function(data, status, request) {
            console.log('fail' + status + "," + request);
        })
  },
  data () {
    return {
      msg: '临时内容'
    }
  }
}
</script>