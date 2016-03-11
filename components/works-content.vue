<style scoped>
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
       <ul class="clearfix ul-pic">
       		<li v-for="item in picStyles">
       			<p class="pic" v-bind:style="{height:item.height,backgroundColor:item.bgColor}"></p>
       			<p class="pic-desc">{{item.name}}</p>
       		</li>
       </ul>
  </section>
</template>



<script>
export default {
  ready: function() {

  	  var that = this;
  	  var tempData=[];
      for(var i=0;i<10;i++){
      	var bgColor=that.getColor();
      	var height = that.getHeight()+"px";
      	var name="第"+(i+1)+"张图片";
      	tempData[i]={"name":name,"height":height,"bgColor":bgColor};
      }

      this.$set('picStyles',tempData);
      
  },
  methods:{
	  getHeight: function(){
	  	return Math.floor(Math.random()*200 + 100);
	  },
	  getColor: function(){
	  	var colors =["#006699","#87c80c","#2294EA","#4ec83b","#f00","#111","#222","#333","#444","#555"];
	  	var randomIndex = Math.floor(Math.random()*10);
	  	return colors[randomIndex];
	  }
  },
  data () {
    return {
      picStyles: []
    }
  }
}
</script>