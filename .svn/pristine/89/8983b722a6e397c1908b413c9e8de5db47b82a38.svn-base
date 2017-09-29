function loginUser(){
	var formobj = document.getElementById("myForm");
	formobj.submit();
}

$(function(){
	
	//切换登录界面的背景图片
	$(".login-bg-list li").click(function(){
			$(".login-bg-list li").removeClass("active");
			$(this).addClass(".active");
			var path=$(this).find("img").attr("src");
			$(".login-cover-image").find("img").attr("src",path);
			
			
			var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
			   
		    if (userAgent.indexOf("Chrome") > -1){
		    	alert('是谷歌')
		 }else{
			 alert('不是谷歌')
		 }
	});
	
	
	
})
//回车登录
function loginKeyDown(){
	if(event.keyCode==13){
		loginUser()
	}
	
}