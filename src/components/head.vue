<style scoped>
.logo{position: relative;top: -10px;}

.total-wrap{margin-top: 80px;text-align: center;}

.total-wrap .title{font-size: 26px;}

.top-middle{display: inline-block;padding-top: 15px;}

.bs-docs-nav .navbar-toggle .icon-bar {
    background-color: #58aff6;
}

#bs-navbar{background: #fff;}
#bs-navbar .navbar-nav li a.active,#bs-navbar .navbar-nav li a:hover{color: #58aff6;}
#bs-navbar .navbar-nav li:first-child  a.active{color: #5f6060;}

button.navbar-toggle{
  -webkit-transition: all 1.2s;
  -o-transition: all 1.2s;
  transition: all 1.2s;
}
button.navbar-toggle.open{
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);
}

@media screen and (max-width: 768px){
  #bs-navbar .navbar-nav li:first-child  a.active{color: #58aff6;}
  .total-wrap{position: absolute;top: 35px;width: 100%;}
}

.go-back{font-size: 18px;color: #58aff6;text-decoration: underline;letter-spacing: 1.5;
-webkit-transition: all .5s;
-o-transition: all .5s;
transition: all .5s;}
.go-back:hover{-webkit-transform: scale(1.5);
-ms-transform: scale(1.5);
-o-transform: scale(1.5);
transform: scale(1.5);}

/*右侧返回顶部、二维码*/
.aside{position: fixed;bottom: 50px;right: 40px;background: #fff;z-index: 999;}
.aside a{color: #999;font-size: 20px;display: block;width: 45px;height: 45px;line-height: 45px;text-align: center;}
.arrow-top{position: relative;z-index: 99999;border: 1px solid #ddd;border-bottom: 0 none;display: none;cursor: pointer;}
.arrow-top.hover{background: #F3F3F3;}
.qrcode{position: relative;z-index: 9999;border: 1px solid #ddd;}
.qr-wrap{position: relative;cursor: pointer;}
.qr-big{position: absolute;right: 20px;top: -44px;z-index: 999;padding: 5px;border: 1px solid #ddd;background: #fff;
  opacity: 0;
  -webkit-transition: all .8s;
  -o-transition: all .8s;
  transition: all .8s;
}
.qr-big img{width: 80px;height: 80px;}
</style>

<template>
  <header class="navbar navbar-static-top bs-docs-nav" id="top" role="banner">
      <div class="container">
        <div class="navbar-header">
          <button class="navbar-toggle collapsed js-navbar-collapse" type="button" data-toggle="collapse" data-target="#bs-navbar" aria-controls="bs-navbar" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a href="javascript:void(0);" class="navbar-brand c-blue logo"><img src="../../static/img/logo.png" alt="网站logo"></a>
        </div>
        <nav id="bs-navbar" class="navbar-collapse collapse" aria-expanded="false">
          <ul class="nav navbar-nav">
            <li>
              <a href="/#!/index" class="active">首页</a>
            </li>
            <li>
              <a href="http://www.coderyin.com/mysite/html/resume/resume.html">简历</a>
            </li>
            <li>
              <a href="http://www.coderyin.com/mysite/html/personalwork/medias.html">组件</a>
            </li>
            <li>
              <a href="/#!/works">作品</a>
            </li>
            <li>
              <a href="/#!/blogmanage">博客管理</a>
            </li>
            <li>
              <a href="/#!/blog">博客</a>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
           <li class="hidden-xs hidden-xs">
            <span class="f12 top-middle">试着用手机访问看看呢，缩小浏览器也可以~~</span>
           </li>
           <li>
              <!-- <a v-link="{ name: '#!/index', params: { testParam: 123 }}">关于本站</a> -->
              <a href="#/about?paramA='123'">关于本站</a> 
            </li>
          </ul>
        </nav>
      </div>
      <!-- <button v-on:click="hello">Hello</button> -->
    </header>
</template>

<script>
var alert;
export default {
  data () {
    return {
      msg: 'Hello from vue-loader!'
    }
  },
  methods: {
    hello: function () {
      this.msg = '我被修改啦'
    }
  }
}
</script>