'use strict'

/**
 * @param  {参数名}
 * @return {[浏览器地址栏中传的参数——参数名对应的value]}
 */
const getUrlParam = function(name)
{
	var locationUrl = decodeURIComponent(window.location.href);

	var paramArrays = [];
	var paramMap    = {};

	//获得参数
    paramArrays = (locationUrl.split("?")[1]).split("&");

    //获得参数，拼凑成字典，形式为{"paramNameA":"a","paramNameB":"b"}
    var length = paramArrays.length;
    for(var i=0;i<length;i++){
    	var tempArr = paramArrays[i].split("=");
        paramMap[tempArr[0]]=tempArr[1];
    }
   
    return paramMap[name];
}

exports.getUrlParam = getUrlParam;

