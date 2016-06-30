<template>
  <div class="container">
    <div class="container" id="app">
	  <vue-html-editor name="html-editor" :model.sync="text"></vue-html-editor>
	  <div style="margin-top:40px">
	    <div> The HTML contents are as follows:</div>
	    <hr>
	    <div >{{{text}}}</div>
	  </div>
	</div>
  </div>
</template>

<script>
var Vue = require("vue");
export default {
  data () {
    return {
      text: "Hello World!"
    }
  },
  components: {
    "vue-html-editor": require("vue-html-editor")
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
