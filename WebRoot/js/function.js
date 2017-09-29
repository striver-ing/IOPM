function openPage(path,titleName){
	$("#main",parent.document.body).attr("src", path);
	var htmlStr = "";
	htmlStr += "<li><a href='#'>涉广电舆情智能推荐系统</a></li>";
	htmlStr += "<li><a href='#'>"+titleName+"</a></li>";
	$("#navigationTitle").html(htmlStr);
}

function exitSystem(){
	if(confirm("您确定要退出系统吗？")){
				window.location.href="${base}/logout/submit.action";
		
	}
}
//iframe自适应高度
//function iFrameHeight(){
//	var ifm=document.getElementById("iframepage");
//	var subWeb=document.frames?document.frames["iframepage"].doucment:ifm.contentDocument;
//	if(ifm!=null&&subWeb!=null){
//		ifm.height=subWeb.body.scrollHeight;
//	}
//}