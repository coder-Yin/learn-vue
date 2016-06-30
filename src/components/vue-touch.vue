<template>
  <div class="container tc">
	  <h2 class="mb15">请在红色区块内操作：触摸，左滑，右滑...</h2>	
	  <div class="block" 
	      v-touch:tap="test($event)"
	      v-touch:pan="test"
	      v-touch-options:pan="{ direction: 'up', threshold: 100 }"
	      v-touch:press="test"
	      v-touch:swipeleft="test"
	      v-touch:swiperight="test"
	      v-touch-options:swipe="{ direction: 'horizontal' }"
	      v-touch:pinch="test"
	      v-touch:rotate="test"
	      v-touch:doubletap="test">
	    </div>
	    <p class="mt15">touch事件名称：{{event}}</p>
    </div>
</template>

<script>
var $ = require('../../static/js/common/jquery')
var Vue = require('vue')
var VueTouch = require('vue-touch')
VueTouch.config.swipe = {
  direction: 'horizontal'
};
Vue.use(VueTouch)

VueTouch.registerCustomEvent('doubletap', {
  type: 'tap',
  taps: 2
})

export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      event: ''
    }
  },
  methods: {
    test: function (e) {
      this.event = e.type
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.block{
      width: 300px;
      height: 300px;
      margin: 0 auto;
      background-color: #f00;
    }
</style>
