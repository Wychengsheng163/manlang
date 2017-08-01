(function(doc,win){

	/*返回顶部*/
	$(".returnTop").click(function(){
		$("html,body").animate({"scrollTop": 0},300);
	});

	/*移动端菜单切换*/
	$(".navIcon").click(function(){
		$(".container").addClass("slideLeft");
	});
	$(".shadow").click(function(){
		$(".container").removeClass("slideLeft");
	});

	/*Tab控件*/
	$('.tabControl').css({'display':'none'});


	/*跳转判断*/
	var pargram = window.location.hash;

	if (pargram) 
	{
		$(pargram).css({'display':'block'});

		$('.map .mapLink a:last-child').text($(pargram).find(".tabSelect").text());
	}
	else 
	{
		$('#tabPiece_1').css({'display':'block'})
	}
    

    /*菜单切换*/
    $('.tabControl').find('.tabTitle .aTit').click(function() {
    	var id = $(this).attr('href');

        $('.tabControl').css({'display':'none'});
        $(id).css({'display':'block'});
        $('.map .mapLink a:last-child').text($(this).text());

        $(id).find('.maps') && fnMaps( $(id).find('.maps').attr('id') );
    });


    /*Tab控件-二级菜单*/
    $('.twoMenuTitle span').click(function(){
    	$('.twoMenuTitle span').removeClass('active');
    	$(this).addClass('active');
    	$('.twoMenuCont li').hide();
    	$('.twoMenuCont').find('.'+$(this).attr('id')).show();
    });


    $(window).width() < 520 && $(".detail video").removeAttr("width height");

}(document, window));