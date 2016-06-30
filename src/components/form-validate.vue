<template>
  <div class="container">

    <validator name="validation1">
      <form novalidate class="form-horizontal">
        <div class="username-field form-group">
          <label for="username" class="col-sm-3 control-label">用户名:</label>
          <div class="col-sm-6">
            <input id="username" type="text" class="form-control" initial="off" v-validate:username="{ required: true,minlength: 3,maxlength: 10 }">
          </div>
        </div>
        <div class="age-field form-group">
          <label for="age" class="col-sm-3 control-label">年龄:</label>
          <div class="col-sm-6">
            <input id="age" type="text" class="form-control">
          </div>
        </div>
        <div class="email-field form-group">
          <label for="email" class="col-sm-3 control-label">邮箱:</label>
          <div class="col-sm-6">
            <input id="email" type="text" class="form-control" initial="off" v-validate:email="['email']">
          </div>
        </div>
        <div class="comment-field form-group">
          <label for="comment" class="col-sm-3 control-label">备注:</label>
          <div class="col-sm-6">
            <input id="comment" type="text" class="form-control" v-validate:comment="{ maxlength: 10 }">
          </div>
        </div>
        <div class="comment-field form-group">
          <label for="comment" class="col-sm-3 control-label">编程语言:</label>
          <div class="col-sm-6">
            <select  class="form-control" initial="off" v-validate:lang="{ required: true }" initial="off">
              <option value="">----- select your favorite programming language -----</option>
              <option value="javascript">JavaScript</option>
              <option value="ruby">Ruby</option>
              <option value="python">Python</option>
              <option value="perl">Perl</option>
              <option value="lua">Lua</option>
              <option value="go">Go</option>
              <option value="rust">Rust</option>
              <option value="elixir">Elixir</option>
              <option value="c">C</option>
              <option value="none">Not a nothing here</option>
            </select>
          </div>
        </div>
        
        <div class="errors col-sm-offset-3 col-sm-6 c-f00 mb15">
          <p v-if="$validation1.username.required">请输入用户名.</p>
          <p v-if="$validation1.username.minlength">最小长度为3.</p>
          <p v-if="$validation1.username.maxlength">最大长度为10.</p>
          <p v-if="$validation1.email.email">邮箱格式不正确.</p>
          <p v-if="$validation1.comment.maxlength">Your comment is too long.</p>
          <p v-if="$validation1.lang.required">请选择编程语言</p>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-3 col-sm-6">
            <input type="submit" value="Submit" class="btn btn-default" @click="onSubmit"  > <!-- v-if="$validation1.valid" -->
          </div>
        </div>
          <!-- v-if="$validation1.valid" -->
      </form>
    </validator>

  </div>
</template>

<script>
var Vue = require('vue')
var VueValidator = require('vue-validator')
Vue.use(VueValidator)

Vue.validator('email', {
  message: 'invalid email address', // error message
  check: function (val) { // custome validator
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)
  }
})

export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      username: '',
      email: '',
      age: '',
      comment: '',
      lang: ''
    }
  },
  methods: {
    onSubmit: function (e) {
      // validate manually
      var self = this
      this.$validate(true, function () {
        if (self.$validation1.invalid) {
          alert('验证还没有通过');
        }else{
          alert('验证通过了');
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
