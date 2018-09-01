$(function () {//same as document.addEventListener('DomContentLoaded',function(){});
	
	//same as document.querySelector('.navbar-toggler').addEventListener('blur',function(){});
	$('.navbar-toggler').blur(function (argument) {
		var screenWidth = window.innerWidth;
		if(screenWidth < 768){
			$('#service').collapse('hide');
		}
	});
});


(function (global) {
	var dc={};

	var homeHtml="snippets/home-snippet.html";

	//insert innerHTML for 'selector'
	var insertHtml = function (selector,html) {
		var targetElem = document.querySelector(selector);
		targetElem.innerHTML = html;
	};

	//show loading icon inside element identified by 'selector'
	var showLoading = function (selector) {
		var html="<div class='text-center'>";
		html += "<img src='img/ajax-loader.gif'></div>";
		insertHtml(selector,html);
	};

	document.addEventListener('DOMContentLoaded',function (event) {
		//show home view
		showLoading('#main-content');
		$ajaxUtils.sendGetRequest(homeHtml,function (responseText) {
			document.querySelector('#main-content').innerHTML=responseText;
		},
		false);
	});

	global.$dc = dc;
})(window);