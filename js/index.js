$(document).ready(function(){
	vars();

	$(window).resize(function(){
		// window.location.href="";
		vars();
	});
	// 导航栏
	$('.nav-a').click(function(){
		$(this).addClass('active').parent().siblings().children('a').removeClass('active');
		// alert(this.text);
	});
	if ($(window).scrollTop() > 0) {

	}
	//设置为视窗高度
	var nowHeight = $(window).height(),
		nowWidth = $(window).width();
	$('.section1').css('height', nowHeight);
	$('.slider img').css('width', nowWidth);
	// 轮播图
	function vars(){
		imgLength = $('.slider li').length;
		offsetWidth = $('.slider').width();
		index = 0;
	}
	
		//克隆第一张轮播图到最后
		$('.slider').append($('.slider li').eq(0).clone());
		// 指示条
		$('.dots li').each(function(i){
			// console.log(i);
			$(this).click(function(){
				index = i;
				$('.slider').stop().animate({left: -offsetWidth*index}, 500);
				circleChange();
			});
		});
		function circleChange(){
			var idx = index;
			if (idx > imgLength-1) {
				idx = 0;
			}
			// $(this).addClass('activeA').siblings().removeClass('activeA');
			$('.dots li').eq(idx).addClass('activeA').siblings().removeClass('activeA');
		}
		// 下一张
		$('.next').click(nextImg);
		function nextImg(){
			index++;
			$('.slider').stop().animate({left: -offsetWidth*index}, 500,function(){
				//检查是否到达添加克隆的第一张
				if(index > imgLength-1){
					index = 0;
					//left重置为0
					$(this).css('left', '0px');
				}
			});
			circleChange();
		}
		// 自动轮播
		setInterval(function(){
			nextImg();
		},3000);
		// 上一张
		$('.prev').click(function(){
			index--;
			if (index < 0) {
				index = imgLength-1;
				$('.slider').css('left',-offsetWidth*(index+1));
			}
			$('.slider').stop().animate({left: -offsetWidth*index}, 500);
			circleChange();
		});
		//滚动淡入元素
		$('.frCon').children().css({
			opacity: '0'
		});
		$(window).scroll(function() {
			var winHeight = $(window).height();
			var sTop = $(window).scrollTop();
		  	if(sTop > winHeight){
		  		$('.frCon').children().css({opacity: '1'});
		  		$('.frCon').children().addClass('wow');
			}
		});
		//产品展示
		$(".product li").each(function(){
			var bgHeight = $(this).children().find(".product_info");
			var titileMar = $(this).children().find(".title");
			$(this).mouseenter(function() {
				bgHeight.stop().animate({
					height: "100%",
					backgroundColor: "rgba(0,0,0,0)"
				},200);
				titileMar.stop().animate({marginLeft: "20px"},200);
			});
			$(this).mouseleave(function() {
				bgHeight.stop().animate({
					height: "76px",
					backgroundColor: "#fff"
				},200);
				titileMar.stop().animate({marginLeft: "0px"},200);
			});
		});
		

});
//监听视窗大小改变
$(window).resize(function(){
	var nowHeight = $(this).height(),
		nowWidth = $(this).width();
	$('.section1').css('height', nowHeight);
	$('.slider img').css('width', nowWidth);
	// console.log($(this).height());

});