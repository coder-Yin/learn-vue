<style scoped>
		.oh{overflow: hidden;}
		.bg-gray{background: #FAFAFA;}
		.bg-white{background: #fff;}
		.pd15{padding: 15px 0;}
		.blog-index{font-family: 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', STHeitiSC-Light, 'Microsoft YaHei', 微软雅黑, Arial, sans-serif;}
		.index-left h1{font-size: 32px;color: rgb(92, 107, 119);font-weight: 300;}
		.article-list{list-style: none;padding: 0;margin: 0;}
		.article-list .each-article{position: relative;margin-bottom: 20px;border: 1px solid rgba(0, 0, 0, 0.07);}
		.each-article .media-body{padding: 20px;}
		.each-article .date{color: rgb(119, 119, 119);font-size: 15px;line-height: 1.8;font-weight: bold;}
		.each-article .title{font-size: 18px;font-weight: 300;line-height: 33px;}
		.each-article .content{color: #7F8888;}
		.each-article .desc{position: absolute;bottom: 15px;left: 20px;padding: 15px 0 0 0;font-size: 16px;color: #7C7C84;line-height: 24px;}
		.each-article .desc .glyphicon{margin-right: 10px;}
		.each-article .media-right{max-width: 195px;overflow: hidden;}
		.each-article .media-right img{max-width: 195px;}
		@media screen and (max-width: 768px) {
			.each-article .desc{position: static;}
		}

		/*.index-right{padding-bottom: 9999px;margin-bottom: -9999px;}*/
		.author-info{padding: 25px 10px;text-align: center;}
		.author-info .img-author{width: 90px;height: 90px;border-radius: 50%;}
		.author-info .author-name{color: #555;font-size: 19px;font-weight: bold;margin-top: 15px;margin-bottom: 10px;}
		.author-info .author-name img{width: 24px;height: 24px;margin-left: 5px;vertical-align: middle;border-radius: 3px;}
		.author-info .author-intro,.author-info .author-blog{ font-size: 12px;line-height: 24px;}
		.author-info .author-blog a{text-decoration: none;color: #555;}
		.mt15{margin-top: 15px;}
		.right-tags{padding: 15px;}
		.right-tags .title{font-family: 'Montserrat';font-weight: 600;font-size: 12px;color: #666;}
		.tags-body .btn{margin-top: 10px;border-radius: 15px;padding: 4px 15px;margin-right: 5px;}

		.pagination>li>a, .pagination>li>span { border-radius: 50% !important;margin: 0 5px;}
		.pagination>.active>a, .pagination>.active>a:focus, .pagination>.active>a:hover, .pagination>.active>span, .pagination>.active>span:focus, .pagination>.active>span:hover{
		    background-color: #8A7DBE;
		    border-color: #8A7DBE;
		}

		.pagination>li>a:focus, .pagination>li>a:hover, .pagination>li>span:focus, .pagination>li>span:hover{
		    color: rgb(0, 0, 0);
		}

		.pagination>li>a, .pagination>li>span{
		    color: rgba(41, 44, 47, 0.22);
		}
</style>

<template>
  <div class="container-fuild blog-index bg-gray pd15">
	<div class="container oh">
		<!--左侧-->
		<div class="col-md-9 col-sm-12 col-xs-12 index-left bg-white">
			<h1>最新</h1>
			<ul class="article-list">
				<li class="each-article">
					<div class="media">
						<div class="media-body">
							<p class="date">1天之前</p>
							<p class="title">jsonp跨域实践（附其他实现跨域的方法）</p>
							<p class="content">
								面试中常常会问到如何使用jsonp跨域（jsonp跨域的原理是什么），这篇文章就给大家介绍一下相关的知识，如有不对，麻烦指出 ~
							</p>
							<p class="desc"><span class="glyphicon glyphicon-folder-open"></span>web前端系列</p>
						</div>
						<div class="media-right hidden-xs">
							<img src="../lib/img/blog/pic-vue.png" alt="文章图片">
						</div>
					</div>
				</li>
				<li class="each-article">
					<div class="media">
						<div class="media-body">
							<p class="date">5天之前</p>
							<p class="title">vue.js+webpack 实践</p>
							<p class="content">
								随着前端的快速发展，非常多的js框架被应用到项目中。在比较了vue.js、angular.js以及react后，决定动手使用vue.js搭建一个网站当做学习，主要是想用它的组件化及路由。
							</p>
							<p class="desc"><span class="glyphicon glyphicon-folder-open"></span>web前端系列</p>
						</div>
						<div class="media-right hidden-xs">
							<img src="../lib/img/blog/pic-cannot-be-found.png" alt="文章图片">
						</div>
					</div>
				</li>
				<li class="each-article">
					<div class="media">
						<div class="media-body">
							<p class="date">大约1个月之前</p>
							<p class="title">Lantern—无需任何配置翻墙</p>
							<p class="content">
								今天直奔主题，我们该如何采用最便捷的方式实现翻墙。
							</p>
							<p class="desc"><span class="glyphicon glyphicon-folder-open"></span>工具系列</p>
						</div>
						<div class="media-right hidden-xs">
							<img src="../lib/img/blog/pic-lattern.png" alt="文章图片">
						</div>
					</div>
				</li>
			</ul>

			<ul class="pagination">
			    <li class="disabled"><a href="javascript:void(0);" rel="prev">«</a></li>
			    <li class="active"><a href="javascript:void(0);">1</a></li>
			    <li><a href="javascript:void(0);">2</a></li>
			    <li><span>3</span></li>
			    <li><a href="javascript:void(0);">4</a></li>
			    <li><a href="javascript:void(0);">5</a></li>
			    <li><a href="javascript:void(0);" rel="next">»</a></li>
			</ul>

		</div>
		<!--end 左侧-->
		<!--右侧-->
		<div class="col-md-3 hidden-sm hidden-xs">
			<div class="index-right">
				<div class="author-info bg-white">
					<img src="../lib/img/blog/author.jpg" alt="作者头像" class="img-author">
					<div class="author-name">殷晓飞<a href="http://weibo.com/2684694903/profile?topnav=1&wvr=6&is_all=1" target="_blank"><img src="../lib/img/blog/weibo.png" alt="微博图片"></a></div>
					<div class="author-intro">一个有情怀的前端攻城狮。</div>
					<div class="author-blog">个人站点：<a href="http://www.coderyin.com/" target="_blank">http://www.coderyin.com/</a></div>
					<div class="author-blog">简书链接：<a href="http://www.jianshu.com/users/489e597a9cad/latest_articles" target="_blank">点击此处</a></div>
				</div>

				<div class="right-tags bg-white mt15">
                    <div class="title">标签
                    </div>
                    <div class="tags-body">
                        <a href="javascript:void(0);" class="btn btn-default btn-sm  btn-rounded m-r-5 m-b-10">前端</a>
                        <a href="javascript:void(0);" class="btn btn-default btn-sm  btn-rounded m-r-5 m-b-10">vue.js</a>
                        <a href="javascript:void(0);" class="btn btn-default btn-sm  btn-rounded m-r-5 m-b-10">webpack</a>
                        <a href="javascript:void(0);" class="btn btn-default btn-sm  btn-rounded m-r-5 m-b-10">工具</a>
                    </div>
	            </div>
			</div>        
		</div>
		<!--end 右侧-->
	</div>
</div>
</template>

<script>

</script>