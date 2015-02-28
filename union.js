

var cursor,ver = false;

function inicio(){
	
	$("header").css("opacity",1);
	
	$("a").on("click", function(e){
			e.preventDefault();
		});

	$('.navegacion a').click(function(){
	
		var el = $(this).attr('href');
		var elWrapped = $(el);
		
		scrollToDiv(elWrapped,0);
		
		return false;
	
	});


	$("#ep1").on("click",function(){
		$(".vid").removeClass("vid-act");
		$("#vid-1").addClass("vid-act");
		$(".ep a").removeClass("btn-video");
		$("#ep1").addClass("btn-video");
	});
	$("#ep2").on("click",function(){
		$(".vid").removeClass("vid-act");
		$(".ep a").removeClass("btn-video");
		$("#vid-2").addClass("vid-act");
		$("#ep2").addClass("btn-video");
	});
	$("#ep3").on("click",function(){
		$(".vid").removeClass("vid-act");
		$("#vid-3").addClass("vid-act");
		$(".ep a").removeClass("btn-video");
		$("#ep3").addClass("btn-video");
	});

	$(".imgs-all a").on("click",imgGrande);

	$(".img-disp img").on("click",function (e){
		e.stopPropagation();
		if(cursor){
			$(this).css("height","100%");
			cursor = false;
		}else{
			$(this).css("height","auto");
			cursor = true;
		}
	});

	$(".img-disp-cont").on("click",function(){
		$(".img-disp-cont").fadeOut();
	});

	$("#ver-mas").on("click",function(){
		$(".art-oculto").slideToggle();
		if(ver){
			$("#ver-mas").html("ver más");
			ver = false;
		}else{
			$("#ver-mas").html("ocultar");
			ver = true;
		}
	});

}

function scrollToDiv(element,navheight){	
		var offset = element.offset();
		var offsetTop = offset.top;
		var totalScroll = offsetTop-navheight;
		
		$('body,html').animate({
				scrollTop: totalScroll
		}, 500);
}

function imgGrande(){
	var im= this.children[0].lastElementChild.attributes["src"].nodeValue;
	$(".img-disp img").css("height","100%");
	$(".img-disp img").attr("src",im);
	$(".img-disp-cont").fadeIn();
}
