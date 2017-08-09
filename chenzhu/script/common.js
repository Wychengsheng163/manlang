
function testAnim(obj,x,callback) //CSS3效果切换
{ 
  	$(obj).removeClass().addClass(x + ' animated')
  	.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){ 
  		$(this).removeClass(x + ' animated') , callback && callback();
    });
}



(function(){ //PC端导航&搜索框效果

	var headsearch 	= $("#headsearch");
	var navboxes 	= $("#navboxes");
	var headnav		= $("#headnav");
	var navbtn 		= $(".js_navbtn");
	var searchbtn 	= $(".js_searchbtn");
	
	var fnSearch = function() {

		headsearch.toggleClass("search_on");

		setTimeout(function(){ $("#searchInput").focus() },500);

	}

	var fnNav = function() {

		navbtn.fadeOut(300,function(){ headnav.addClass("nav_on") });

		testAnim("#navboxes","bounceInRight");

	}

	navbtn.click(function(){

		if ( headsearch.hasClass("search_on") ) {

			headsearch.removeClass("search_on");

			setTimeout(fnNav,300);

		} else {

			fnNav();

		}

	});

	searchbtn.click(function(){

		if ( headnav.hasClass("nav_on") ) {

			testAnim("#navboxes","bounceOutRight",function(){

				headnav.removeClass("nav_on");

				navbtn.fadeIn(200);

				fnSearch();

			});

		} else {

			fnSearch();

		}

	});

}());




