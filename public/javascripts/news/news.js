//焦点图数据
var picdate = []

//新闻数据
var newsdate = [
]

newsdate.sort(function (a, b) {
	return b.id - a.id;
});

//新闻资讯
var newsdata = new Array();
$(newsdate).each(function (index, el) {
	if (el.type == "news") {
		newsdata.push(el);
	}
});

//公司动态数据
var industrydate = new Array();
$(newsdate).each(function (index, el) {
	if (el.type == "industry") {
		industrydate.push(el);
	}
});


//行业新闻数据
var dynamicdate = new Array();
$(newsdate).each(function (index, el) {
	if (el.type == "dynamic") {
		dynamicdate.push(el);
	}
});

//关爱社会数据
var societydate = new Array();
$(newsdate).each(function (index, el) {
	if (el.type == "society") {
		societydate.push(el);
	}
});

function addnews(x, y) {
	//设置当前显示项
	var typek = GetQueryString("type");
	if (typek == "dynamic") {
		$("#dynamic-tab").addClass('actv').siblings("span").removeClass("actv");
	} else if (typek == "industry") {
		$("#industry-tab").addClass('actv').siblings("span").removeClass("actv");
	} else if (typek == "society") {
		$("#society-tab").addClass('actv').siblings("span").removeClass("actv");
	} else {
		$("#news-tab").addClass('actv').siblings("span").removeClass("actv");
	}

	//显示当前的内容
	$(".newslist-tab span").each(function (index, el) {
		if ($(el).is(".actv")) {
			$(".news-list").eq(index).css({
				display: 'block'
			}).siblings("div.news-list").css({
				display: 'none'
			});
		}
	})

	//添加最新新闻焦点图
	var newnews = $("#new-news");
	var newnewsT = '<div class="swiper-container swiper-containerbox"><div class="swiper-wrapper" id="ben-text">';
	$(picdate).each(function (index, el) {
		newnewsT += '<div class="swiper-slide"><a href="news-new?id=' + el.id + '&type=' + el.type + '"><img src="' + el.img + '" alt="' + el.alt + '"><p class="title_text">' + el.title + '</p></a></div>';
	});
	newnewsT += '</div><div class="swiper-button-prev"></div><div class="swiper-button-next"></div><div class="swiper-pagination"></div></div>';
	newnews.append(newnewsT);

	//添加最新新闻头条
	var information = $("#information");
	var informationT = "<ul>";
	$(newsdate).each(function (index, el) {
		if (index < y) {
			informationT += '<li><h4><a href="news-new?id=' + el.id + '">' + el.title + '</a></h4>';
			informationT += '<div class="state"><span>' + el.source + '</span><time>' + el.id.substring(0, 4) + '.' + el.id.substring(4, 6) + '.' + el.id.substring(6, 8) + '</time>';
			// informationT+='<span class="share">分享<div><a href="javascript:void(0);">新浪微博</a><a href="javascript:void(0);">微信</a><a href="javascript:void(0);">QQ空间</a></div></span>';
			informationT += '<span class="share" id="news-shear">分享<div class="bdsharebuttonbox" data-tag="share_1"><a class="bds_tsina" data-cmd="tsina">新浪微博</a><a class="bds_mshare" data-cmd="weixin"">微信</a><a class="bds_qzone" data-cmd="qzone" href="#">QQ空间</a></div></span></div>';
			// informationT+='</div><p>'+el.text[0]+'</p></li>';
			//
			// //区分第一段图片与文字
			var imgtext = "";
			if (el.text[0].indexOf("<img src") > -1) {
				imgtext = '<p>' + el.text[1] + '</p>';
			} else {
				imgtext = '<p>' + el.text[0] + '</p>';
			}
			informationT += imgtext;
		};
		informationT += '</li>';
	});
	informationT += '</ul>';
	information.append(informationT);

	//添加新闻全部列表
	var informationlist = $("#information-list");
	var informationlistT = '<ul class="listul">';
	$(newsdate).each(function (index, el) {
		informationlistT += '<li><h4><a href="news?id=' + el.id + '">' + el.title + '</a></h4>';
		informationlistT += '<div class="img"><a href="news-new?id=' + el.id + '&type=' + el.type + '"><img src="' + el.img + '" alt="' + el.alt + '"></a></div>';
		informationlistT += '<div class="state"><span>' + el.source + '</span><time>' + el.id.substring(0, 4) + '.' + el.id.substring(4, 6) + '.' + el.id.substring(6, 8) + '</time>';
		// informationlistT+='<span class="share">分享<div><a href="javascript:void(0);">新浪微博</a><a href="javascript:void(0);">微信</a><a href="javascript:void(0);">QQ空间</a></div></span>';
		informationlistT += '<span class="share" id="news-shear">分享<div class="bdsharebuttonbox" data-tag="share_1"><a class="bds_tsina" data-cmd="tsina">新浪微博</a><a class="bds_mshare" data-cmd="weixin"">微信</a><a class="bds_qzone" data-cmd="qzone" href="#">QQ空间</a></div></span></div>';

		//区分第一段图片与文字
		var imgtext = "";
		if (el.text[0].indexOf("<img src") > -1) {
			imgtext = '<p>' + el.text[1] + '</p>';
		} else {
			imgtext = '<p>' + el.text[0] + '</p>';
		}
		informationlistT += imgtext;
		informationlistT += '</li>';

	});
	informationlistT += '</ul><a href="javascript:void(0);" class="news-more">查看更多</a>';
	informationlist.append(informationlistT);

	//添加新闻资讯
	// addlist($("#information-2"), newsdata);
	//添加公司动态
	// addlist($("#dynamic"), industrydate);
	//添加行业新闻
	// addlist($("#industry"), dynamicdate);
	//添加关爱社会
	// addlist($("#society"), societydate);

	//添加列表方法
	function addlist(box, list) {
		var dynamic = box;
		var dynamicT = '<ul class="listul">';
		$(list).each(function (index, el) {
			dynamicT += '<li><div class="dynamic-img"><a href="news-new?id=' + el.id + '&type=' + el.type + '"><img src="' + el.img + '" alt="' + el.alt + '"></a></div>'
			dynamicT += '<div class="dynamic-text"><h4><a href="news-new?id=' + el.id + '&type=' + el.type + '">' + el.title + '</a></h4>';
			dynamicT += '<div class="state"><span>' + el.source + '</span><time>' + el.id.substring(0, 4) + '.' + el.id.substring(4, 6) + '.' + el.id.substring(6, 8) + '</time>';
			dynamicT += '<span class="share" id="news-shear">分享<div class="bdsharebuttonbox" data-tag="share_1"><a data-cmd="tsina">新浪微博</a><a data-cmd="weixin"">微信</a><a data-cmd="qzone" href="#">QQ空间</a><a href="#" class="bds_tqq" data-cmd="tqq">qq</a></div></span>';

			// dynamicT+='<div id="news-shear" class="news-shear"><div class="bdsharebuttonbox" data-tag="share_1" ><span>分享到：</span><a class="bds_mshare" data-cmd="weixin"></a><a class="bds_tsina" data-cmd="tsina"></a><a class="bds_qzone" data-cmd="qzone" href="#"></a></div></div>';
			// dynamicT+='</div><p>'+el.text[0]+'</p></div></li>';
			//区分第一段图片与文字
			var imgtext = "";
			if (el.text[0].indexOf("<img src") > -1) {
				imgtext = '<p>' + el.text[1] + '</p>';
			} else {
				imgtext = '<p>' + el.text[0] + '</p>';
			}
			dynamicT += imgtext;
			dynamicT += '</li>';

		});
		dynamicT += '</ul><a href="javascript:void(0);" class="news-more">查看更多</a>';
		dynamic.append(dynamicT);
	}

	//点击加载更多新闻 显示个数 一次增加显示个数
	var p = 5;
	var s = 5;
	listmore(p)
	//初始化新闻列表显示个数
	function listmore(x) {
		$(".listul").each(function (index, el) {
			$(el).find("li").hide();
			$(el).find("li:lt(" + x + ")").show();
		})
	}

	//点击加载更多新闻
	$(".news-more").on("click", function () {
		var li = $(this).prev("ul.listul").find("li");
		if ((li.length - p) / s > 1) {
			p = p + s;
			li.hide();
			$(this).prev("ul.listul").find("li:lt(" + p + ")").show();
		} else {
			p = p + (li.length - p);
			li.hide();
			$(this).prev("ul.listul").find("li:lt(" + p + ")").show();
			$(this).hide();
		}
	})
}

//新闻详情数据读取
function addnewsmore() {
	//查找到当前新闻的数据在对应数组里的索引值
	var current, next, prev, lei;
	//获取地址栏id
	var src = GetQueryString("id");
	var typek = GetQueryString("type");

	// console.log(typek);
	var newsbox = $("#newsbox");
	var date = newsdate;

	//判断当前新闻属于哪个分类 选择对应的数组
	if (typek == "society") {
		date = societydate;
		lei = "关爱社会";
	} else if (typek == "dynamic") {
		date = dynamicdate;
		lei = "行业新闻";
	} else if (typek == "industry") {
		date = industrydate;
		lei = "公司动态";
	} else if (typek == "picnews") {
		date = picdate;
		lei = "新闻资讯";
	} else {
		date = newsdate;
	}

	$(date).each(function (index, el) {
		if (el.id == src) {
			current = index;
			//为上一篇下一篇索引防错
			if (index - 1 < 0) {
				prev = 0;
			} else {
				prev = index - 1;
			}

			if (index + 1 >= date.length - 1) {
				next = date.length - 1;
			} else {
				next = index + 1;
			}
		}
	});

	var newsboxT = '<div class="news-top"><div class="w"><div class="location"><a href="index.html"><img src="images/newsicon_00.png"></a>';
	//设置上一篇下一篇
	if (GetQueryString("type") == " " || GetQueryString("type") == undefined) {
		newsboxT += '<a href="newslist.html">新闻资讯</a><a href="newslist.html">' + '新闻资讯' + '</a></div>';
		newsboxT += '<dvi class="nex-por"><a href="news-new?id=' + date[prev].id + '"></a><a href="news?id=' + date[next].id + '"></a></dvi></div></div>';
		newsboxT += '<div class="news-text w"><h4 id="title">' + date[current].title + '</h4><div class="source"><span>' + date[current].source + '</span><span>' + date[current].id.substring(0, 4) + '.' + date[current].id.substring(4, 6) + '.' + date[current].id.substring(6, 8) + ' ' + date[current].id.substring(8, 10) + ':' + date[current].id.substring(10, 12) + '</span></div>';

	} else {
		newsboxT += '<a href="newslist.html">新闻资讯</a><a href="newslist.html?type=' + date[current].type + '">' + lei + '</a></div>';
		newsboxT += '<dvi class="nex-por"><a href="news-new?id=' + date[prev].id + '&type=' + date[prev].type + '"></a><a href="news?id=' + date[next].id + '&type=' + date[prev].type + '"></a></dvi></div></div>';
		newsboxT += '<div class="news-text w"><h4>' + date[current].title + '</h4><div class="source"><span>' + date[current].source + '</span><span>' + date[current].id.substring(0, 4) + '.' + date[current].id.substring(4, 6) + '.' + date[current].id.substring(6, 8) + ' ' + date[current].id.substring(8, 10) + ':' + date[current].id.substring(10, 12) + '</span></div>';
	}

	//添加文章段落
	var p = " ";
	$(date[current].text).each(function (index, el) {
		//区别图片跟文字的与小标题样式
		if (typeof el == "object") {
			if (el.class == "" || undefined) {
				p += '<h5>' + el.text + '</h5>'
			} else {
				p += '<h5 class="' + el.class + '">' + el.text + '</h5>'
			}
		} else {
			if (el.indexOf(".png") > -1 || el.indexOf(".jpg") > -1 || el.indexOf(".gif") > -1) {
				p += '<p class="img">' + el + '</p>'
			} else {
				p += '<p>' + el + '</p>'
			}
		}

	});
	newsboxT += p;
	// newsboxT+='<div class="news-shear"><span>分享到：</span><a href="javascript:void(0);"><img src="images/newsicon_08.png"></a><a href="javascript:void(0);"><img src="images/newsicon_09.png"></a><a href="javascript:void(0);"><img src="images/newsicon_07.png"></a></div></div>';
	newsboxT += '<div id="news-shear" class="news-shear"><div class="bdsharebuttonbox" data-tag="share_1" ><span>分享到：</span><a class="bds_mshare" data-cmd="weixin"></a><a class="bds_tsina" data-cmd="tsina"></a><a class="bds_qzone" data-cmd="qzone" href="#"></a></div></div>';
	newsbox.append(newsboxT);

	//判断 当前新闻是否是第一条或最后一天 让上一页下一页变灰
	$(".nex-por").find("a").hover(function () {
		if ($(this).index() == 0) {
			if (current == 0) {
				$(this).addClass('no').text(' ');
			} else {
				$(this).removeClass('no').text(date[prev].title.substring(0, 16) + '…');
			}
		} else if ($(this).index() == 1) {
			if (current == date.length - 1) {
				$(this).addClass('no').text(' ');
			} else {
				$(this).removeClass('no').text(date[next].title.substring(0, 16) + '…');
			}
		}
	}, function () {
		$(this).text(' ');
	})
}



//获取地址栏参数 id
function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]);
	return null;
}



//	var a=$(".news-text").find("h4").text();

//	$('title').value('$(".news-text").find("h4").text()')
