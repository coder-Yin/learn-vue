<style scoped>
</style>

<template>
  <section class="container">
        <table class="table table-hover">
	      <thead>
	        <tr>
	          <th>#</th>
	          <th>文章名</th>
	          <th>时间</th>
	          <th>内容</th>
	          <th>操作</th>
	        </tr>
	      </thead>
	      <tbody>
	        <tr v-for="item in blog_artciles">
	          <th scope="row">{{ $index+1 }}</th>
	          <td>{{item.title}}</td>
	          <td>{{item.date}}</td>
	          <td>{{item.content}}</td>
	          <td><button class="btn btn-danger btn-sm" v-on:click="deleteRecord($index)">删除</button></td>
	        </tr>
	      </tbody>
	    </table>
		
			<form id="form">
		  	    <div class="form-group">
				    <label for="recordTitle">标题名：<span> {{recordTitle}} </span></label>
				    <input type="text" class="form-control" id="recordTitle" name="recordTitle" v-model="recordTitle" placeholder="请输入记录的标题名称">
				</div>
				<!-- <div class="errors">
			        <p v-if="$validation1.recordtitle.required">标题名不能为空.</p>
			    </div> -->
		    	<button class="btn btn-primary btn-sm" v-on:click="addRecord">增加记录</button>
  	  </form>
  </section>
</template>

<script>
var $ = require('../../static/js/common/jquery')

export default {
  ready: function() {

    var that = this;

  	//文章列表
    $.getJSON('../../static/json/blog_articles.json', function(d) {
      		
      //判断接口是否请求成功
      if(d.code!=200){
        alert(d.msg);
        return false;
		  }
		  //设置数据
      that.$set('blog_artciles', d.data.article_list);
    }).error(function(data, status, request) {
      console.log('fail' + status + ',' + request);
    });
      
  },
  data () {
    return {
      recordTitle:'',
      blog_artciles: []
    }
  },
  methods:{
    deleteRecord: function(index){
      this.blog_artciles.splice(index, 1);
    },
    addRecord: function(){
      	
    	var title = this.recordTitle.trim();
    	if(title!=''){
      	var record ={'date':'1小时前','title':title,'content':'test content','desc':'test desc','img':'../lib/img/blog/pic-cannot-be-found.png'};
      	this.blog_artciles.push(record);
      	}
      }
  }
}
</script>