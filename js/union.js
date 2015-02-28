


function inicio(){
	$("header").css("opacity",1);
	
	$("a").on("click", function(e){
			e.preventDefault();
		});

	$('.navegacion a').click(function(){
	
		var el = $(this).attr('href');
		var elWrapped = $(el);
		
		scrollToDiv(elWrapped,10);
		
		return false;
	
	});

	JQuery(function(){
			
			JQuery('#camera_wrap_1').camera({
				thumbnails: true,
                height: '500px'
			});
		});


	$("#ep1").on("click",function(){
		$(".vid").removeClass("vid-act");
		$("#vid-1").addClass("vid-act");
	});
	$("#ep2").on("click",function(){
		$(".vid").removeClass("vid-act");
		$("#vid-2").addClass("vid-act");
	});
	$("#ep3").on("click",function(){
		$(".vid").removeClass("vid-act");
		$("#vid-3").addClass("vid-act");
	});

	$("#mandamientos").on("click",function(e){
		$("#im-dis").attr("src","imagenes/mandamientos.jpg");
		$("#im-dis").attr("alt","10 mandamientos");
		$(".img-g").fadeIn();
		e.stopPropagation();
	});

	$("#fam").on("click",function(e){
		$("#im-dis").attr("src","imagenes/familiafeliz.jpg");
		$("#im-dis").attr("alt","familia feliz");
		$(".img-g").fadeIn();
		e.stopPropagation();
	});
	$("#huella").on("click",function(e){
		$("#im-dis").attr("src","imagenes/tablero.jpg");
		$("#im-dis").attr("alt","la huella del narco en el senado");
		$(".img-g").fadeIn();
		e.stopPropagation();
	});
	$("#reflex").on("click",function(e){
		$(".img-g2").fadeIn();
		e.stopPropagation();
	});

	$(".img-g figure, .img-g2 div").on("click",function (e){
		e.stopPropagation();
	});

	$("html").on("click",function(){
			$(".img-g,.img-g2").fadeOut();
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
