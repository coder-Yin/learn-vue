<style scoped>
	.about-web{position: absolute;top: 50%;left: 50%;margin-top: -25px;margin-left: -115px;font-size: 24px;font-weight: bold;color: #333;}
	.about-web .content{font-size: 14px;color: #666;}
</style>

<template>
  <section class="container text-center">
        <p class="about-web">关于我们<span class="content">（{{ msg }}）</span></p>
        <div id="container"></div>
  </section>
</template>

<script>
var utils = require('../lib/js/common/utils')       //加载公用函数
var $ = require('../lib/js/common/jquery')
var Highcharts = require('../lib/js/plugins/highcharts')
export default {
  ready: function () {
    //获得地址栏特定键的参数
    var paramA = utils.getUrlParam('paramA');
    console.log(paramA);
    this.$http.get('testJson.json', function(d) {
      this.$set('msg', d.data.info);
    }).error(function(data, status, request) {
      console.log('fail' + status + "," + request);
    });

    $('#container').html('abcdefg--我是jquery操作dom结构出来的数据');
      
  },
  data () {
    return {
      msg: '临时内容'
    }
  }
}
</script>