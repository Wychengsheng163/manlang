(function(doc,win){


	//地图控件
	var fnMaps = function(id){

		var coordinates,content;
		var json =  
		{
			'shanghai_map':
			{
				'coordinates': [121.472462,31.237777],
			 	'content': '<div style="margin:0;line-height:20px;padding:2px;">' +
	                		'地址：上海市静安区南京西路580号仲益大厦32C<br/>'+
	                		'电话：021-51096606<br/>' +
	                		'简介：汉之光华，您身边的专利管家' + 
	                		'</div>'
			},
			'hefei_map': 
			{
				'coordinates': [117.228381,31.82718],
			 	'content': '<div style="margin:0;line-height:20px;padding:2px;">' +
	                    	'地址：合肥市政务区南二环3818号天鹅湖万达广场8号楼1901室<br/>' + 
	                    	'电话：0551-65528587（8002）<br/>' +
	                    	'简介：汉之光华，您身边的专利管家' +
	                    	'</div>'
			},
			'chongqing_map': 
			{
				'coordinates': [106.539372,29.58045],
			 	'content': '<div style="margin:0;line-height:20px;padding:2px;">' +
		                   '地址：重庆市江北区建新北路一支路6号未来国际大厦24楼9号<br/>'+
		                   '电话：023-63054799      18623554138<br/>'+
		                   '简介：汉之光华，您身边的专利管家' +
		                   '</div>'
			},
			'shandong_map': 
			{
				'coordinates': [116.98544,36.655463],
			 	'content': '<div style="margin:0;line-height:20px;padding:2px;">' +
		                   '地址：济南市槐荫区和谐广场银座中型2号楼3513室<br/>'+
		                   '电话：0531-87964350      18560132701<br/>'+
		                   '简介：汉之光华，您身边的专利管家' +
		                   '</div>'
			},
			'beijing_map':
			{
				'coordinates': [116.327695,39.979454],
			 	'content': '<div style="margin:0;line-height:20px;padding:2px;">' +
		                   '地址：北京市海淀区知春里甲10号楼3层307室<br/>'+
		                   '电话：010-62620991     17801057185<br/>'+
		                   '简介：汉之光华，您身边的专利管家' +
		                   '</div>'
			},
			'hangzhou_map':
			{
				'coordinates': [120.006644,30.296625],
			 	'content': '<div style="margin:0;line-height:20px;padding:2px;">' +
		                   '地址：杭州市余杭区仓前街道景兴路999号11幢103室<br/>'+
		                   '电话：0571-86020881 18667130106<br/>'+
		                   '简介：汉之光华，您身边的专利管家' +
		                   '</div>'
			}
		};

		switch (true) 
		{
			case id == 'shanghai_map':
				coordinates = json.shanghai_map.coordinates , content = json.shanghai_map.content;
				break;
			case id == 'hefei_map':
				coordinates = json.hefei_map.coordinates , content = json.hefei_map.content;
				break;
			case id == 'chongqing_map':
				coordinates = json.chongqing_map.coordinates , content = json.chongqing_map.content;
				break;
			case id == 'shandong_map':
				coordinates = json.shandong_map.coordinates , content = json.shandong_map.content;
				break;
			case id == 'beijing_map':
				coordinates = json.beijing_map.coordinates , content = json.beijing_map.content;
				break;
			case id == 'hangzhou_map':
				coordinates = json.hangzhou_map.coordinates , content = json.hangzhou_map.content;
				break;
		}

		// 百度地图API功能
	    var map = new BMap.Map(id);
	    var poi = new BMap.Point(coordinates[0],coordinates[1]);
	    map.centerAndZoom(poi, 16);
	    map.enableScrollWheelZoom();

	    //创建检索信息窗口对象
	    var searchInfoWindow = null;
		searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
				title  : "上海汉光知识产权数据科技有限公司",      //标题
				width  : 280,             //宽度
				height : 60,              //高度
				panel  : "panel",         //检索结果面板
				enableAutoPan : true,     //自动平移
				searchTypes   :[
					BMAPLIB_TAB_SEARCH,   //周边检索
					BMAPLIB_TAB_TO_HERE,  //到这里去
					BMAPLIB_TAB_FROM_HERE //从这里出发
				]
		});
	    var marker = new BMap.Marker(poi); //创建marker对象
	    marker.enableDragging(); //marker可拖拽
	    marker.addEventListener("click", function(e){
		    searchInfoWindow.open(marker);
	    })
	    map.addOverlay(marker); //在地图中添加marker
	    searchInfoWindow.open(marker);

	};



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

		fnMaps( $(pargram).find('.maps').attr('id') );

		$('.map .mapLink a:last-child').text($(pargram).find(".tabSelect").text());
	}
	else 
	{
		$('#tabPiece_1').css({'display':'block'})

		fnMaps('shanghai_map');
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