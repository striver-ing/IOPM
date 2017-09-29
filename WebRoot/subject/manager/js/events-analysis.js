$(function(){
	//表格操作
		//查看详情按钮
	$('#nav-pills-tab-8 i.fa-eye').click(function(){
		
	});
	 	//删除按钮
	$('#nav-pills-tab-8 i.fa-archive').click(function(){
		alert('确定删除么？')
	});

});

function checkbox(a,b){
	var W = document.getElementById(a);
	var messArr = $(b);
	W.onclick=function(){
		for(var i=0;i<messArr.length;i++){
			messArr[i].checked = W.checked;
		}
	}
	for(var j=0;j<messArr.length;j++){
		messArr[j].onclick=function(){
			var flag = true;
			for(var j=0;j<messArr.length;j++){
				if(false == messArr[j].checked){
					flag = false;
				}
			}
			W.checked = flag;
		}
	}
}
