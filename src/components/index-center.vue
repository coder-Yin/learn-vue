<style scoped>
.index-main{position: absolute;top: 50%;-webkit-transform: translateY(-50%);
-ms-transform: translateY(-50%);
-o-transform: translateY(-50%);
transform: translateY(-50%);width: 100%;/*margin-top: -185px;*/}
.index-main .title{
    text-transform: uppercase;
    font-weight: 700;
    font-size: 85px;
    font-size: 70px\0;
    color: #7da755;
    line-height: 88px;
    letter-spacing: .05px;
    margin-bottom: 4px;
}

.index-main .sub-title {
    font-weight: 100;
    font-size: 21px;
    color: #5f6060;
    letter-spacing: 2px;
}

.index-main .container{margin-top: 100px;}

.index-main .each-col{text-align: center;margin-bottom: 15px;}

.index-main .each-col .img{
	width: 125px;
	height: 125px;
    margin: 0 auto;
}

.index-main .each-col .desc{margin-top: 25px;}

.index-main .each-col .desc a{
	font-weight: 100;
	font-size: 21px;
	color: #5f6060;
    letter-spacing: 2px;
    text-decoration: none;
}

.user-photo{
	border-radius: 50%;
	-webkit-transition: all .8s ease-in;
	-moz-transition: all .8s ease-in;
	-ms-transition: all .8s ease-in;
	-o-transition: all .8s ease-in;
	transition: all .8s ease-in;
}
.user-photo:hover{
	-webkit-transform: rotate(360deg);
	-moz-transform: rotate(360deg);
	-ms-transform: rotate(360deg);
	-o-transform: rotate(360deg);
	transform: rotate(360deg);
}


@media screen and (max-width: 768px){
/*	.index-main{margin-top: -300px;}*/
	.index-main .title{font-size: 28px;}
	.index-main .sub-title{font-size: 18px;}
	.index-main .container{margin-top: 50px;}
	.index-main .each-col .img{
		width: 80px;
		height: 80px;
	}
	.index-main .each-col .desc a{font-size: 16px;}
	.index-main{position: absolute;top: 80px;-webkit-transform: none;
	-ms-transform: none;
	-o-transform: none;
	transform: none;
	padding-bottom: 80px;
	}
}

@media screen and (max-width: 640px){
	.title{font-size: 20px;font-family: "microsoft yahei";}
	.sub-title{font-size: 12px;font-family: "microsoft yahei";line-height: 25px;}
}
</style>

<template>
<section class="container-fluid index-main text-center">
  <h1 class="title f-as">I am a web coder</h1>
  <h2 class="sub-title f-as mt15">you can contact me by <a href="mailto:yin_x_f@163.com?subject=我从您的博客看到您的联系信息">yin_x_f@163.com</a></h2>
  <div class="container">
    <div class="row">
      <div class="col-md-3 col sm-6 col-xs-6">
        <div class="each-col">
          <a href="mysite/html/resume/resume.html"><img src="../../static/img/index-icon1.png" alt="这里是图片" class="img user-photo"></a>
          <p class="desc"><a href="mysite/html/resume/resume.html">个人简历</a></p>
        </div>
      </div>
      <div class="col-md-3 col sm-6 col-xs-6">
        <div class="each-col">
          <a href="mysite/html/personalwork/medias.html"><img src="../../static/img/index-icon3.gif" alt="这里是图片" class="img user-photo"></a>
          <p class="desc"><a href="mysite/html/personalwork/medias.html">前端组件</a></p>
        </div>
      </div>
      <div class="col-md-3 col sm-6 col-xs-6">
        <div class="each-col">
          <a href="javascript:void(0);"><img src="../../static/img/index-icon2.svg" alt="这里是图片" class="img user-photo img-responsive"></a>
          <p class="desc"><a href="mysite/html/works/html5/index.html">个人作品</a></p>
        </div>
      </div>
      <div class="col-md-3 col sm-6 col-xs-6">
        <div class="each-col">
          <a href="javascript:void(0);"><img src="../../static/img/index-icon4.gif" alt="这里是图片" class="img user-photo"></a>
          <p class="desc"><a href="blog-index.html">个人博客</a></p>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script></script>
