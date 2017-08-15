
function testAnim(obj,x,callback) //animate效果切换
{ 
  	$(obj).removeClass().addClass(x + ' animated')
  	.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){ 
  		$(this).removeClass(x + ' animated') , callback && callback();
    });
}


function AddFavorite(sURL, sTitle) //加入收藏
{ 
    sURL = encodeURI(sURL);

    try 
    {
        window.external.addFavorite(sURL, sTitle);
    } 
    catch (e) 
    {

	    try 
	    {
	        window.sidebar.addPanel(sTitle, sURL, "");
	    } 
	    catch (e) 
	    {
	        alert("加入收藏失败,请使用Ctrl+D进行添加,或手动在浏览器里进行设置.");
        }
    }
}


function returntop() /* 返回顶部按钮 */
{
	$('html,body').animate({scrollTop: 0},300); 
}


(function(){ /* PC端导航&搜索框效果 */

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


(function(){ /* 移动端导航 */

	var body 		= $("body"); 			 
	var sMenu 		= $("#sMenu"); 
	var navbtnA 	= $("#navbtn-a");	 
	var navbtnB 	= $("#navbtn-b");
	var headboxes 	= $("#headboxes");  
	var masklayer 	= $("#masklayer");
	var viewboxes 	= $("#viewboxes");
	var fixtop 		= $("#fixtop");
	var mfooter 	= $("#mfooter");

	
	navbtnA.on("click",{bool: false},main); 

	navbtnB.on("click",{bool: true},main); 

	masklayer.on("click",{bool: true},main); 

	sMenu.find("li").click(function(){ //二级导航

		var menuTwo = $(this).find(".menu_2");

		menuTwo && menuTwo.toggleClass("menu_on");

	});


	function main(event) 
	{
		var bool = event.data.bool;
		
		mfooter.css("left",bool ? "0" : "18.75rem");//底部导航

		headboxes.css({"z-index": bool ? "-1" : "10",  "left": bool ? "-18.75rem" : "0"});//侧边栏

		fixtop.css("left",bool ? "0" : "18.75rem");//头部导航

		viewboxes.css("margin-left", bool ? "0" : "18.75rem");//正文区域

		body.css("overflow", bool ? "auto" : "hidden");//菜单滑出禁止页面滚动

		//侧边栏导航、与头部导航切换 ↓↓

		bool ? (navbtnA.fadeIn() && navbtnB.fadeOut()) : (navbtnB.fadeIn() && navbtnA.fadeOut());

		bool ? masklayer.removeClass("on") : masklayer.addClass("on");
	}

}());




