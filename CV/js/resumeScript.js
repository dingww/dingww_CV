$(function() {
	$('#lang a').hover(function() {
		$(this).addClass('fbgColor');
	}, function() {
		$(this).removeClass('fbgColor');
	});

	$("#nav li").mouseover(function() {
		var $index = $(this).index();
		indexFunc($index);
	});

	var h = $(window).height();
	$("#nav li").click(function(event) {
		$target = event.target.className;
		var $index = $(this).index();
		console.log(($index * h));
		$("#main .wrap").animate({
			top: -($index * h) + 'px'
		}, 600);

		indexFunc($index);
	});

	// 使用滚轮事件
	var flag = 0;
	var i = 0;
	$(document).on("mousewheel DOMMouseScroll", function(e) {
		var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) || // chrome & ie
			(e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1)); // firefox

		if (delta > 0) {
			// 向上滚
			if (flag == 0) {
				if (i < 0 && i >= -4) {
					i++;
					flag = 1;
				} else {
					i = 0;
					flag = 1;
				}
			}
			if (i == 0) {
				$('.wrap').stop().animate({
					top: i * h + 'px'
				}, 1000);
				flag = 0;
			}
			$('.wrap').stop().animate({
				top: i * h + 'px'
			}, 1000, function() {
				flag = 0;
			});

			var $index = Math.abs(i);
			indexFunc($index);

		} else if (delta < 0) {
			// 向下滚
			if (flag == 0) {
				if (i > -4) {
					i--;
					flag = 1;
				} else {
					i = -4;
					flag = 1;
				}
			}

			if (i == -4) {
				$('.wrap').stop().animate({
					top: i * h + 'px'
				}, 1000);
				flag = 0;
			}
			$('.wrap').stop().animate({
				top: i * h + 'px'
			}, 1000, function() {
				flag = 0;
			});

			var $index = Math.abs(i);
			indexFunc($index);
		}
	});

	indexFunc(0);

	function indexFunc(index) {
		$('#nav ul li').removeClass('fbgColor');
		$('#nav ul li').eq(index).addClass('fbgColor');
	}

});