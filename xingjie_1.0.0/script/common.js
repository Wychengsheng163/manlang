
(function(){ //公共尾函数

	var bool = true;
	var booking = $(".booking"), CloseBtn = $(".CloseBtn"), IsShowBtn = $(".IsShowBtn"), CustomBtn = $(".CustomBtn");

	var fnmain = function(str1,str2) {

		str1 == "down" ? (booking.stop().slideDown(300) && fnScrollButtom()) : booking.stop().slideUp(300);

		str2 == "out" ? CloseBtn.stop().slideUp(300) : CloseBtn.stop().slideDown(300);

		IsShowBtn.toggleClass("baseBA","baseTA");

		if ( bool ) {

			$("#mySelect").select({
				width: "218px",
				themeColor: "#bcbcbc",
				rowHoverColor: "#a00101",
				fontFamily: "微软雅黑",
				listMaxHeight: "120px",
				mainContent: "请选择",
			});
			//可选参数,不填就是默认值
			//width: "180px",            //生成的select框宽度
			//listMaxHeight:"200px",     //生成的下拉列表最大高度
			//themeColor: "#00bb9c",     //主题颜色
			//fontColor: "#000",         //字体颜色
			//fontFamily: "'Helvetica Neue', arial, sans-serif",    //字体种类
			//fontSize:"15px",           //字体大小
			//showSearch: false,         //是否启用搜索框
			//rowColor:"#fff",           //行原本的颜色
			//rowHoverColor: "#0faf03",  //移动选择时，每一行的hover底色
			//fontHoverColor: "#fff",    //移动选择时，每一行的字体hover颜色
			//mainContent: "请选择",     //选择显示框的默认文字
			//searchContent: "关键词搜索"   //搜索框的默认提示文字  

		} else {  $("#mySelect").nextAll().remove() }
	}


	IsShowBtn.click(function(){

		bool ? fnmain("down","in") : fnmain("up","out");

		bool = bool ? false : true; 

	});


	CustomBtn.click(function(){

		bool && fnmain("down","in"); 

		bool = false;

	});


	CloseBtn.click(function(){

		!bool && fnmain("up",'out');

		bool = true;

	});


}());






function fnScrollButtom(){ 
	$('html,body').animate({scrollTop: document.body.scrollHeight },300);
}

function fnBtnClick(obj) 
{
	obj.click(function(){
		$(".CustomBtn").trigger("click");
		fnScrollButtom();
	});
}

fnBtnClick($(".bookingbtn"));


	
