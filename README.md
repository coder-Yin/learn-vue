# learn-vue
使用vue.js搭建个人网站
##### 使用技术： vue.js+webpack
##### 项目说明： 此项目是本人空余时间搭建的。希望大家提供宝贵的意见和建议，谢谢。
##### 邮&emsp;&emsp;&ensp;箱： yin_x_f@163.com
##### 个人网站： http://www.coderyin.com/
##### 个人博客： http://www.jianshu.com/u/489e597a9cad
##### git 博 客： http://coder-yin.github.io/2016/07/04/hello-world/


### Build Setup

```
# git clone
git clone https://github.com/coder-Yin/learn-vue.git
 
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# 访问路径
http://localhost:8080/index.html#!/index

# 项目运行效果
http://www.jianshu.com/p/48ab268bc890
```

#### 历史更新
  *2016.07.02*

    1.SPA增加多页面入口的功能（访问路径：http://localhost:8080/test.html#!/index）；
    主要配置：
    01）webpack.base.conf.js
    entry: {
      app: './src/main.js',
      test:'./src/test.js'
    },
    02）webpack.dev.conf.js
    new HtmlWebpackPlugin({
      filename: 'test.html',
      template: 'test.html',
      chunks: ['test'],
      inject: true
    })
    03）webpack.prod.conf.js
    new HtmlWebpackPlugin({
      filename: process.env.NODE_ENV === 'testing'
        ? 'test.html'
        : config.build.test,
      template: 'test.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),
    04)根目录，新增config.js
    // see http://vuejs-templates.github.io/webpack for documentation.
	var path = require('path')
	module.exports = {
  	   build: {
    		index: path.resolve(__dirname, 'dist/index.html'),
    		test: path.resolve(__dirname, 'dist/test.html'),
    		assetsRoot: path.resolve(__dirname, 'dist'),
    		assetsSubDirectory: 'static',
    		assetsPublicPath: '/',
    		productionSourceMap: false
 		},
  		dev: {
    		port: 8080,
    		proxyTable: {}
  		}
	}

    
  *2016.06.30*

    1.增加表单验证（vue-validator,components/form-validate.vue,访问路径：http://localhost:8080/#!/form）；
    2.增加touch事件（vue-touch,components/vue-touch.vue,访问路径：http://localhost:8080/#!/touch）；
    3.增加博客管理页面（blog-manage,components/blog-manage-content.vue，访问路径：http://localhost:8080/#!/blogmanage)
    PS:form下不要用<button></button>,而要用 <input type="button" />，前者会导致不期望发生的事情——网页刷新；
    4.增加作品瀑布流（works,components/works-content.vue,访问路径：http://localhost:8080/#!/works）；
    5.修复移动端swipeleft,swiperight (VueTouch.config.swipe = {direction: 'horizontal'});

    
  *2016.06.29*

    1.重构项目；
    2.增加eslint检验，可以在配置文件中打开(build/webpack.base.conf.js中的注释打开)；
    
  *2016.04.20*

    1.使用sourcetree测试~

  *2016.03.21*
    
    1.增加博客管理组件（增加、删除记录）——blog-manage-content.vue;
    2.增加表单验证，jquery-validate.js;

  *2016.03.15*
    
    1.修改works-content.vue;
    2.增加页面之间的跳转链接;

  *2016.03.11*

    1.增加作品展示列表页面--views/work.vue（宽度固定，高度，背景颜色根据随机函数得出）;
    2.在.vue中增加自定义函数;
    3.引入瀑布流插件;

  *2016.03.02*

  1.修改博客首页，数据从.json文件读取，嵌套页面数据;

     注意点：绑定图片src应该这么写：<img v-bind:src=item.img alt="文章图片">（不加{{}}），不推荐src={{item.img}}

  2.博客首页增加分享功能;

  3.博客首页增加子组件嵌套子组件;

  *2016.03.01*
  
  1.增加博客版块页面;

  2.修改webpack配置文件webpack.config.js,以支持编译多个对应的js文件;
     
     原先：
     entry: './src/app.js',
     output: {
      path: './dist', //文件夹生成的目录
      publicPath: '../dist/', //静态文件（图片）的路径
      filename: 'app.js'
    },
    
    新的：
    entry: {
      app:['./src/app.js'],
      blog_index:['./src/blog_index.js']
    },
    output: {
      path: './dist', //文件夹生成的目录
      publicPath: '../dist/', //静态文件（图片）的路径
      filename: '[name].js'
    }
 
  3.博客版块json文件添加；
  
  *2016.02.26*
  
  	1. 增加页面跳转，url传参;
  	2. 增加get请求，模拟请求本地json文件，获得数据，重设数据源;
  	3. 添加公用方法库——utils.js,其中添加自定义方法获取浏览器地址栏参数;
  	4. 在组件中增加引用第三方库：jquery.highcharts,并完成页面操作;
  
  *2016.02.25*

  	1. 初始化项目搭建;

