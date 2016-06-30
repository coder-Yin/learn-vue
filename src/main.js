// import Vue from 'vue'
// import App from './App'

// new Vue({
//   el: 'body',
//   components: { App }
// })

var Vue = require('vue')
var Index = require('./views/index.vue')
var blogManage = require('./views/blog-manage.vue')
var blog = require('./views/blog.vue')
var works = require('./views/works.vue')
var formValidate = require('./views/form.vue')
var vueTouch = require('./views/vuetouch.vue')
var vueEditor = require('./views/vueeditor.vue')

// new Vue({
//   el: 'body',
//   components: {
//     app: App2
//   }
// })

var VueRouter = require('vue-router')
Vue.use(VueRouter)

//get json数据
var VueResource = require('vue-resource')
Vue.use(VueResource)


//表单验证
// var VueValidator = require('vue-validator')
// Vue.use(VueValidator)

// 定义组件
var Foo = Vue.extend({
  template: '<p>This is foo!</p>'
})

var Bar = Vue.extend({
  template: '<p>This is bar!</p>'
})

// 路由器需要一个根组件。
// 出于演示的目的，这里使用一个空的组件，直接使用 HTML 作为应用的模板
var Apptest = Vue.extend({})

// 创建一个路由器实例
// 创建实例时可以传入配置参数进行定制，为保持简单，这里使用默认配置
var router = new VueRouter()

// 定义路由规则
// 每条路由规则应该映射到一个组件。这里的“组件”可以是一个使用 Vue.extend
// 创建的组件构造函数，也可以是一个组件选项对象。
// 稍后我们会讲解嵌套路由
router.map({
  '/index': {
    component: Index
  },
  '/blogmanage': {
    component: blogManage
  },
  '/blog': {
    component: blog
  },
  '/works': {
    component: works
  },
  '/form': {
    component: formValidate
  },
  '/touch': {
    component: vueTouch
  },
  '/editor': {
    component: vueEditor
  }
})

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
router.start(Apptest, '#test')

Vue.config.devtools = true
