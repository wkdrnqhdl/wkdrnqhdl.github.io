var Main = (function(){
	var datas = [];

	//입구
	function init () {
		initData();
		$(window).scroll(doMovie)
	}




	function doMovie () {
		var scrolltop = getScrollTop();
		var data, status;
		for (var i = 0; i <datas.length; i++) {
			data = datas[i];
			if(scrolltop>=data.y && scrolltop < data.y+data.height){
				
				status = i;
				break;
				
			}
			
		};

		var movingImgY = Math.round((scrolltop-data.y)*0.7);
		var movingTxtY = Math.round((scrolltop-data.y)*0.5);
		if(status >0){
			movingTxtY += 100;
		}
		$(data.node).find(".img").css("margin-top",movingImgY);
		$(data.node).find(".txt").css("padding-top",movingTxtY);
				
		console.log(scrolltop,"----data.y=",data.y)

	}





	function initData(){
		$.each($(".content").children("div"),function(i){
			datas[i] =  {
				node: this,
				y: $(this).position().top,
				height: $(this).height()
			}
		})
	}




	function getScrollTop(){
		 return $("body").scrollTop();
	}














	return{
		init:init
	}
})();

$(Main.init);