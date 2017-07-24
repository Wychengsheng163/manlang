(function(doc,win){

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
        $('.tabControl').css({'display':'none'});
        $($(this).attr('href')).css({'display':'block'});
        $('.map .mapLink a:last-child').text($(this).text());
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