$(function () {
	// homeViod($("#viod"));
	// navIn($("#header"));
	// mapNanv($("#map-nav"));
	// homeNews($("#index-news"));
	// benText($("#ben-text"));

})


function navIn(dom) {
	if (dom.length > 0) {
		var url = window.location.href;
		if (url.indexOf("index") > -1 || url.indexOf("") == -1) {
			console.log("现在是index");
			//头部滚动显示背景 更换logo
			$(window).scroll(function () {
				if ($(window).scrollTop() > 50) {

					// dom.addClass('h-bright');
					// dom.find("div").find("a.logo").find("img").attr("src", "images/logo1.png");
					// dom.find(".nav-list").css("top", "82px");
					// dom.find("ul.nav>li").css("padding", "15px 0");
					// dom.find("a.logo").css("padding", "15px 0");
					// dom.find(".language").css("padding", "15px 0");
					// $("ul.nav .li_box").addClass("scr");
					// if ($(window).width() < 860) {
					// 	$("ul.nav").css("top", "0px");
					// 	dom.find("ul.nav>li").css("padding", "0");
					// } else {
					// 	dom.find("ul.nav>li").css("padding", "15px 0");
					// }


					// dom.find(".li_box").addClass("li_bef");
				} else {
					// dom.find(".li_box").removeClass("li_bef");
					// dom.removeClass('h-bright');
					// // dom.find("div").find("a.logo").find("img").attr("src", "images/logo.png");
					// dom.find(".nav-list").css("top", "92px");
					// dom.find("ul.nav>li").css("padding", "20px 0");
					// dom.find("a.logo").css("padding", "20px 0");
					// dom.find(".language").css("padding", "20px 0");
					// $("ul.nav .li_box").removeClass("scr");
					// $("ul.nav").css("top", "0");
					// if ($(window).width() < 860) {
					// 	dom.find("ul.nav>li").css("padding", "0");
					// 	dom.find("a.logo").css("padding", "20px 0");
					// 	dom.find(".language").css("padding", "20px 0");
					// 	$("ul.nav").css("top", "0");
					// } else {
					// 	dom.find("div.header-main").css({
					// 		"paddingTop": "0",
					// 		"paddingBottom": "0"
					// 	});
					// 	dom.find("ul.nav>li").css("padding", "20px 0");
					// 	dom.find(".language").css("padding", "20px 0");
					// }

				}
			})
		} else {
			console.log("现在是其它");
			dom.find("div").find("a.logo").find("img").attr("src", "images/logo1.png");
			//头部滚动显示背景 更换logo
			//头部滚动显示背景 更换logo
			// $(window).scroll(function () {
			// 	if ($(window).scrollTop() > 50) {
			// 		dom.addClass('h-bright');
			// 		dom.find("div").find("a.logo").find("img").attr("src", "images/logo1.png");
			// 		dom.find(".nav-list").css("top", "82px");
			// 		dom.find("ul.nav>li").css("padding", "15px 0");
			// 		dom.find("a.logo").css("padding", "15px 0");
			// 		dom.find(".language").css("padding", "15px 0");
			// 		$("ul.nav .li_box").addClass("scr");

			// 		if ($(window).width() < 860) {
			// 			$("ul.nav").css("top", "0px");
			// 			dom.find("ul.nav>li").css("padding", "0");
			// 		} else {
			// 			dom.find("ul.nav>li").css("padding", "15px 0");
			// 		dom.find(".language").css("padding", "20px 0");

			// 		}
			// 		dom.find(".li_box").addClass("li_bef");
			// 	} else {
			// 		dom.find(".li_box").removeClass("li_bef");
			// 		dom.removeClass('h-bright');
			// 		dom.find("div").find("a.logo").find("img").attr("src", "images/logo1.png");
			// 		dom.find(".nav-list").css("top", "92px");
			// 		dom.find("ul.nav>li").css("padding", "20px 0");
			// 		dom.find("a.logo").css("padding", "20px 0");
			// 		dom.find(".language").css("padding", "20px 0");
			// 		$("ul.nav .li_box").removeClass("scr");
			// 		$("ul.nav").css("top", "0");
			// 		if ($(window).width() < 860) {
			// 			dom.find("ul.nav>li").css("padding", "0");
			// 			dom.find("a.logo").css("padding", "20px 0");
			// 			dom.find(".language").css("padding", "20px 0");
			// 			$("ul.nav").css("top", "0");
			// 		} else {
			// 			dom.find("div.header-main").css({
			// 				"paddingTop": "0",
			// 				"paddingBottom": "0"
			// 			});
			// 			dom.find("ul.nav>li").css("padding", "20px 0");
			// 		}

			// 	}
			// })
		}
	}
}
//鼠标hover头部时
$(".header").on("click",function () {
	$("#header").find("div").find("a.logo").find("img").attr("src", "images/logo1.png");
});

$(".header").hover(function () {
	$(this).find("div").find("a.logo").find("img").attr("src", "images/logo1.png");
}, function () {
	var url = window.location.href;
	if (url.indexOf("index.html") > -1 || url.indexOf(".html") == -1) {
		if ($(window).scrollTop() < 50) {
			// $(this).find("div").find("a.logo").find("img").attr("src", "images/logo.png");
		} else {
			$(this).find("div").find("a.logo").find("img").attr("src", "images/logo1.png");
		}
	}

})

//小于860px的时候 清除 nav-list
function reNavList() {
	if ($(window).width() < 843) {
		$(".li_box>div").removeClass("nav-list").addClass("m-nav-list");
		if ($(".li_box>div").hasClass("m-nav-list")) {
			$("ul.nav").css("right", "-310px");
		};
		$("ul.nav>li").css("padding", "0px");

	} else {
		$(".li_box>div").removeClass("m-nav-list").addClass("nav-list");
		if ($(".li_box>div").hasClass("nav-list")) {
			$("ul.nav").css("right", 0);
		}
		$("ul.nav>li").css("padding", "14px 0px");
		$("#nav .li_box .nav-list").css("display", "");
	}
}

// 点击下拉
function dropDown() {
	$("#nav .li_box>span").on("click", function () {
		if ($(this).siblings(".m-nav-list").css("display") == "none") {
			$(this).addClass("reduce");
			$(this).siblings(".m-nav-list").show();
		} else {
			$(this).removeClass("reduce");
			$(this).siblings(".m-nav-list").hide();
		}
	})
}

// 弹出的时候禁止touchmove
var preHandler = function(e){e.preventDefault();}
// 菜单点击弹出
function menuClick() {
	var zzW = $(window).width()-250;
	$(".menu").on("click", function () {
		$("ul.nav").animate({
			right: "0"
		});
		$(".zz").show();
		$(".zz").css("left",-zzW);
		$(".zz").css("width",zzW);
		$(".zz").animate({left:0});
		$('body').css("overflow","hidden");
		document.addEventListener('touchmove', preHandler, false);
	});
}

function forkClick() {
	var zzW = $(window).width()-250;
	$(".fork,.zz").on("click", function () {
		$("ul.nav").animate({
			right: "-310px"
		});
		$(".zz").animate({
			left: -zzW
		});
		$('body').css("overflow","auto");
		document.removeEventListener('touchmove', preHandler, false);
	});
}


//首页地图分布导航效果
function mapNanv(dom) {
	if (dom.length > 0) {
		var dl = dom.find("dl");
		//初始化
		dl.eq(0).find("dd").css({
			"width": "0",
			"padding": "0"
		});
		for (var i = 0; i < dl.length; i++) {
			var dt = dl.eq(i - 1).find("dt"),
				dd = dl.eq(i - 1).find("dd");
			var lastDt = dd.eq(dd.length - 1);

			lastDt.on("click", function () {
				$(this).animate({
					"width": '0',
					"padding": "0"
				}, 100).siblings('dd').animate({
					"width": '0',
					"padding": "0"
				}, 100);
				$(this).parent("dl").siblings('dl').find("dd").animate({
					"width": "50px",
					"padding": "0 10px"
				}, 100);
				lastDt.css({
					"width": "20px",
					"padding": "0"
				});
			})
		}
	}
}

//首页新闻模块tab切换 及数据读取
function homeNews(dom) {
	if (dom.length > 0) {
		var tab = dom.find("div.news-tab").find("span");
		var newsbox = dom.find("ul");
		//初始化数据源及tab
		datalist = industrydate;
		tab.eq(0).addClass('n-bright').siblings('span').removeClass('n-bright');
		newsList(datalist);
		//点击切换数据
		tab.on("click", function () {
			var dataId = $(this).data("id");
			$(this).addClass("n-bright").siblings('span').removeClass('n-bright');
			if (dataId == "dynamics") {
				console.log("111");
				datalist = industrydate;
			} else {
				datalist = dynamicdate;
				console.log("222");

			}
			newsList(datalist);
		})

		//重新插入新闻
		function newsList(datalist) {
			newsbox.find("li").remove();
			var newstext = " ";
			for (var i = 0; i < 5; i++) {
				newstext += '<li><a href="news.html?id=' + datalist[i].id + '&type=' + datalist[i].type + '">' + '<span>'+ datalist[i].id.substring(0, 4) + '.' + datalist[i].id.substring(4, 6) + '.' + datalist[i].id.substring(6, 8) + '</span><p>' + datalist[i].title + '</p></a></li>';
			}
			$(newsbox).append(newstext);
			console.log("333");

		}
	}
}


//改变关于我们视频图片板式
function homeViod(dom) {
	if (dom.length > 0) {
		if ($(window).width() < 680) {
			if (dom.find("video").length > 0) {
				dom.find("video").remove();
				dom.html('<p>点击播放集团视频 <img src="images/pay.png"></p>');
			}

		} else if ($(window).width() > 680) {
			if ($("#my-video").length = 0) {
				console.log("111");
				var img = '<video id="my-video" class="video-js" controls preload="auto" width="261" height="181" poster="vedio/zhifu.jpg" data-setup="{}"><source src="vedio/zhifu.mp4" type="video/mp4"></video>';
				console.log(img);
				dom.append(img);
				dom.html(img);
			}
		}
	}
}

//首页banner文字垂直居中
function benText(dom) {
	if (dom.length > 0) {
		var Box = dom.find("div.swiper-slide");
		Box.each(function (index, el) {
			var box = $(el).find("div");
			var H = $(el).height();
			var h = box.height();
			var top = "-" + h / 2 + "px";
			if ($(window).width() > 600) {
				box.css({
					"marginTop": top,
					"top": "46%"
				});
			} else {
				box.css({
					"marginTop": top,
					"top": "46%"
				});
			}
		});
	}
}

/*-----------------------------------------------------这是华丽的分割线----------------------------------------------------------------------*/
//八大业务页面banner 背景
function businessBaer(dom) {
	var list = dom.find("div.business-list");
	list.each(function (index, el) {
		var listBg = $(el).find("a div.business-bg");
		listBg.css({
			"background-image": "url(images/businessico_0" + (index + 1) + ".jpg)",
			"height": "400px"
		});

	});
}

//八大业务banner文字垂直居中
function businessText(box, list, texts) {
	if (box.length > 0) {
		var Box = box.find("div" + list);
		Box.each(function (index, el) {
			var text = $(el).find("div" + texts);
			var H = "-" + text.height() / 2 + "px";
			text.css({
				"marginTop": H,
				"top": "50%"
			});
		});
	}
}



//窗口缩放
$(window).resize(function () {
	// homeViod($("#viod"));
	benText($("#ben-text"));
	businessText($("#business"), ".business-list", ".business-tetx");
	reNavList();
	$(".zz").hide();
	menuClick();
	forkClick();
})
//限制字数溢出省略
function textMore(dom,x){
	$(dom).each(function(){
		var text=$(this).text();
		if ($(this).text().length > x) {
			$(this).text($(this).text().substring(0, x));
			$(this).text($(this).text() + '...');
		}
	});
}

//获取地址栏参数
function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]);
	return null;
}
