<style>
</style>

<template>
  <section class="container text-center">
        <div id="container"></div>
  </section>
</template>



<script>
var $ = require('./../static/js/common/jquery')
var Highcharts = require('./../static/js/plugins/highcharts')
export default {
  ready: function() {
      
    //highcharts绘图
    $(function () {
      var chart = new Highcharts.Chart({  
      chart: {  
        renderTo:'container',//目标容器  
        type: 'bar'  
      },  
      title: {  
        text: 'Fruit Consumption'  
      },  
      xAxis: {  
        categories: ['Apples', 'Bananas', 'Oranges']  
      },  
      yAxis: {  
        title: {  
          text: 'Fruit eaten'  
        }  
      },  
      series: [{  
        name: 'Jane',  
        data: [1, 0, 4]  
      }, {  
        name: 'John',  
        data: [5, 7, 3]  
      }]  
    });
    });
  },
  data () {
    return {
      
    }
  }
}
</script>