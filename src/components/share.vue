<style scoped>
	.bdshare_dialog_box{min-width: 310px;}
	.g-share a, .g-share.bdshare-button-style0-16 a{ 
		display: inline-block;
		width:36px;
		height: 36px;
		background: url(../../static/img/g-share-ico.png) no-repeat;
		margin: 0px 0px 0px 10px;
	}
	.g-share.bdshare-button-style0-16 .bds_qzone{background-position:  -1px -1px;}
	.g-share.bdshare-button-style0-16 .bds_weixin{background-position:  -50px -1px;}
	.g-share.bdshare-button-style0-16 .bds_sqq{background-position:  -99px -1px;}
	.g-share.bdshare-button-style0-16 .bds_tsina{background-position:  -149px -1px;}
	.g-share.bdshare-button-style0-16 .bds_more{background-position:  -203px -1px;}
</style>

<template>
	<div class="g-share bdsharebuttonbox bdshare-button-style0-16" data-tag="pageSharePreview" data-bd-bind="1456897676743">
		<a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>
		<a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a>
		<a href="#" class="bds_sqq" data-cmd="sqq" title="分享到QQ好友"></a>
		<a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
	</div>
</template>

<script>
export default {
  ready: function() {
  	window._bd_share_config = {
	  common : {
		bdText : '自定义分享内容',	
		bdDesc : '自定义分享摘要',	
		bdUrl : '自定义分享url地址', 	
		bdPic : '自定义分享图片'
	  },
      share : [{
		"bdSize" : 16
	  }],
	  slide : [{	   
		bdImg : 0,
		bdPos : "right",
		bdTop : 100
	  }],
      image : [{
		viewType : 'list',
		viewPos : 'top',
		viewColor : 'black',
		viewSize : '16',
		viewList : ['qzone','tsina','huaban','tqq','renren']
	  }],
	  selectShare : [{
		"bdselectMiniList" : ['qzone','tqq','kaixin001','bdxc','tqf']
	  }]
	}     
  }
}
</script>