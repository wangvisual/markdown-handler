/* CREATE TOC */

function createTOC() {
	var headers = $("h1, h2, h3, h4, h5"),
		toc = $("<ul id='innertoc' style='display: none;'></ul>"),
		wrapper = $("<div id='toc'><h2>Contents <span>&#8675;</span><span style='display: none'>&#8673;</span></h2></div>").append(toc);
		wrapper.find('h2').click(function() {
			$('#innertoc').toggle();
			$('#toc h2 span').toggle();
		});
	if (!headers.length) {
		return false;
	}
	headers.each(function (index) {
		var $elem = $(this),
			headerId = $elem.attr('id');
		if (!headerId) {
			headerId = "header-" + index;;
			$elem.before($("<a name=\"" + headerId + "\">"));
		}
		toc.append($("<li class=\"" + $elem.prop("tagName") + "\"><a href=\"#" + headerId + "\">" + $elem.html() + "</a></li>"));
	});
	
	return wrapper;
}

$(function () {
    $(this).attr("title", $("h1").first().text());
    if ($("#contents").length) {
	$("#contents").wrap('<div id="contentsWrapper" />');
	var toc = createTOC();
	if (toc) {
		$("#contents").html(toc);
	}

	var offset = $("#contents").offset().top - parseFloat($('#contents').css('marginTop').replace(/auto/, 0));
	var topPadding = 15;
	$(window).scroll(function() {
		if ($(this).scrollTop() > offset) {
			$("#contents").addClass('fixed');
/*
        		$("#contents").stop().animate({
				marginTop: $(window).scrollTop() - offset.top + topPadding
	             	});
*/
	        } else {
			$("#contents").removeClass('fixed');
/*
			$("#contents").stop().animate({
				marginTop: 0
	             	});
*/
		};
     	});
    };
 });
