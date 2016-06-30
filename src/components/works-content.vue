<style scoped>
	.each-work-sery {
		margin-top: 25px;
	}

	.each-work-sery .works-title{
		font-size: 20px;
		font-weight: bold;
		color: #333;
	}

	.works-date{
		margin-top: 10px;
		font-size: 12px;
		color: #666;
	}

	.ul-pic li{
		float: left;
		width: 160px;
		margin-right: 15px;
		margin-bottom: 15px;
		list-style: none;
		text-align: center;
	}
	
	.ul-pic .pic{
		margin: 0;
	}
	.ul-pic .pic-desc{
		height: 30px;
		line-height: 30px;
		margin: 0;
		background: #5cb85c;
		color: #fff;
		font-family: "微软雅黑";
	}
</style>

<template>
  <section class="container">
  	   <div class="each-work-sery">	
	  	   <h2 class="works-title">作品图</h2>
	  	   <p class="works-date">2015.12-2016.03</p>
	       <ul class="clearfix ul-pic">
	       		<li v-for="item in items">
	       			<p class="pic" v-bind:style="{height:item.height,backgroundColor:item.bgColor}"></p>
	       			<p class="pic-desc">{{item.name}}</p>
	       		</li>
	       </ul>

       </div>
  </section>
</template>



<script>
//var $ = require('../../static/js/common/jquery')

export default {
  ready: function () {
    var that = this;
	var tempData = [];
    for(var i=0;i<10;i++){
      var bgColor = that.getColor();
      var height = that.getHeight()+"px";
      var name = "第"+(i+1)+"张图片";
      tempData[i] = {"name":name,"height":height,"bgColor":bgColor};
    }

    this.$set('items',tempData);
      
  },
  methods: {
	getHeight: function () {
	  return Math.floor(Math.random()*200 + 100);
	},
	getColor: function () {
	  var colors = ["#069","#87c80c","#2294EA","#4ec83b","#f00","#111","#222","#333","#444","#555"];
	  var randomIndex = Math.floor(Math.random()*10);
	  return colors[randomIndex];
	}
  },
  data () {
    return {
      items: []
    }
  }
}

$(function(){
  var $container = $('.ul-pic');
  $container.imagesLoaded(function() {
      $container.masonry({
              itemSelector: 'li',
              gutter: 10,
              isAnimated: true,
          });
   });

});
</script>