$(function(){
	
	
	
	//初始化违规类型
	//loadAPP();
	//初始化复选框
	var switchs = Array.prototype.slice.call(document.querySelectorAll('.switch'));
	switchs.forEach(function(html) {
	  var switchery = new Switchery(html);
	});
	
	
	
	for (var i=0;i<$('.box .appDetail .switch').length;i++) {
//		把值赋值隐藏域     
		$('.switch').eq(i).siblings('input').val($('.switch').eq(i).prop('checked'));
	}
	//复选框change事件
	$('.box .appDetail .switch').change(function() {
			//弹出复选框点击后的值
        	//alert($(this).prop('checked'));
			$(this).siblings('input').val($(this).prop('checked'));
        	if($(this).prop('checked')){
        		//给左侧添加监测中图表标示
        		$(this).closest('div').siblings('div.left').append('<i title="检测中" class="see"></i>');
        	}else{
        		$(this).closest('div').siblings().find('.see').remove();
        	}
      });
	
      
	//点击新增APP
	$('.add').click(function(){
		$('.checkMask form').css({'width':'50%','height':'700px'});
		$('.chakan').css('display','none');
		$('.btn-success.delete').css('display','none');
		$("#startone .star_score a").removeClass("clibg");
		$('.zengjia').css('display','block');
		$('.checkMask.softDetail #softName').val('');
		$('.checkMask.softDetail #softPro').html('');
		$('.checkMask.softDetail #softHome').val('');
		$('.checkMask.softDetail #softVersion').val('');
		$('.checkMask.softDetail #softstar').val('');
		$('.checkMask.softDetail #isMonitor').val(-1);
		$("#updateId").val("");
		$('.checkMask').hide();
		$("#preview").attr("src","");
		$("#f").val("");
		$('.checkMask.softDetail').show();
		$('.MaskTop').html('新增APP');
		resetMask(100);
	});
	//修改监测状态
	$(".switchery").click(function(){
		var isMonitor=$(this).siblings(".switch.softsee").attr("checked");
		var appId=$(this).parent().parent().siblings().find("td").find(".appInfo_id").val();
		var monitor=0;
		if(isMonitor=="checked"){
			monitor=1;
		}else{
			monitor=0;
		}
		var url ='/IOPM/appMgr/AppMgrAction_updateAppInfo.action';
		$.ajax({
			type:"post",
			url:url,
	        data:{
				'appInfo.appId':appId,	
				'appInfo.monitor': monitor
				},
			success:function(msg){
				$('.checkMask.softDetail').hide();
				var obj=eval("("+msg+")");
				alert(obj.info);
			
			},
			error:function(msg){
				alert("程序错误!");
			}
		})
		
	});


	//点击软件图片
	$('.softImg').click(function(){
		$('.checkMask form').css({'width':'50%','height':'700px'});
		//$('.chakan').css('display','block');
		$('.zengjia').css('display','block');
		$('.btn-success').css('display','inline-block');
		$('.MaskTop').html('APP详细信息');
		
//		//获取软件信息
		var $softDetail = $(this).closest('div').siblings('div');
		var appid=$softDetail.find("td .appInfo_id").val();
		$("#updateId").val(appid); 
		var $softname = $softDetail.find('td.softname');
		var $softpro = $softDetail.find('td.softpro');
		var storageUrl=$(this).find('.storageUrl');
		var $softhome = $softDetail.find('td .developer_name');
		var $softVersion = $softDetail.find('td.softVersion');
		var $softstar = $softDetail.find('td.softstar .atar_Show p');
		var $softsee = $softDetail.find('td .switch.softsee');
		var $imgUrl=$(this).find('.imageUrl');
		//alert($imgUrl.attr("src"));
		
		var imgUrl=$imgUrl.attr("src");
		$("#preview").attr("src",imgUrl);
		//var storageUrl=imgUrl.substring(0,imgUrl.lastIndexOf("/")+1);
		//赋值32
		console.log($softsee.attr("checked"));
		$('.checkMask.softDetail #softName').val($.trim($softname.text()));
		$('.checkMask.softDetail #softPro').html($.trim($softpro.html()));
		$('.checkMask.softDetail #softHome').val($.trim($softhome.val()));
		$('.checkMask.softDetail #softVersion').val($.trim($softVersion.html()));
		$('.checkMask.softDetail #storageUrl').val(storageUrl.val());//获取前置路径
		$(".checkMask.softDetail .kv-file-content img").attr("src",$imgUrl.attr("src"));
		var star=$softstar.attr("tip");
		
	
		
		$("#oldStar").val(star);//隐藏域存评分
		$("#startone .star_score a").removeClass("clibg");
		$("#startone .star_score a:eq("+(2*star-1)+")").addClass("clibg");
		
	//	$('.checkMask.softDetail #softstar').html($.trim($softstar.attr("tip")));
		if($softsee.attr("checked")=="checked"){
			$('.checkMask.softDetail #isMonitor').val(1);
		}else{
			$('.checkMask.softDetail #isMonitor').val(0);
		}
//		$('.checkMask.softDetail #isMonitor').val($softsee.html());
//		$softsee.val()=='true'?$('.checkMask.softDetail #isMonitor').html('监测中'):$('.checkMask.softDetail #isMonitor').html('未监测');
//		if($softsee.val()=='true'){
//			$('.checkMask.softDetail #see').text('监测中');
//		}else{
//			$('.checkMask.softDetail #see').text('未监测');
//		}
//		$('.checkMask.softDetail #see').html($softsee.val());
		$('.checkMask').hide();
		$('.checkMask.softDetail').show();
		resetMask(100);
	});
	
	var $del = $('.btnMask .btn-success.delete');
	//	删除
	$del.click(function(){
		//获取删除的id
		var delId=$("#updateId").val();
		$("#delId").val(delId);
			$('.checkMask.delete .MaskTop').html('删除APP');
			$('.checkMask.delete form').css({'width':'20%','height':'280px'});
			//$('.checkMask').hide();
			$('.checkMask.delete').show();
			resetMask(100);
	});
	
	
	
	//任务管理列表
	var $taskDo = $('.taskList td input.taskDo');
	var $reset = $('.taskList td input.reset');
	//开启停止任务
	$taskDo.change(function(){
		//把值赋值隐藏域     
		$(this).siblings('input').val($(this).prop('checked'));
		if($(this).prop('checked')){
			$(this).closest('tr').find('.stoptask').html('停止任务');
		}else{
			$(this).closest('tr').find('.stoptask').html('开启任务');
		}
	});
	
	
	//显示分数
	$(".panel-body .atar_Show p").each(function(index, element) {
	        var num=$(this).attr("tip");
	        var www=num*2*16;//
	        $(this).css("width",www);
	        $(this).parent(".atar_Show").siblings("div.score").text("评分："+num+"分");
	});
	//词库检索
	$('#searchWord').mouseover(function(){
		if($(this).val()==''){
			$('.srhList').hide();
		}else{
			alert(1111);
			//收集值
			var val = $(this).val();
			//ajax填充下拉框
			$.ajax({
				url : "/IOPM/AVMAction/AppVideoMonitorAction_getAppNameListByKeyword.action",
				type : "post",
				data : {"promptMessage":val},
				success : function(data){
					if(data!=null && data!=""){
						var senList = eval("("+data+")");
						var htmlStr = "";
						for(var i=0;i<senList.length;i++){
							htmlStr+="<li title="+senList[i].appName+" value="+senList[i].appId+">"+senList[i].appName+"</li>";
						}
						//alert(htmlStr);
						$("#promptUl #mCSB_1_container").html(htmlStr);
						$('#promptUl').show();
						$("#promptUl li").click(function(){
							var keywordValue = $(this).html();
							$("#searchWord").val(keywordValue);
							if(keywordValue != null && keywordValue != ""){
								//$("#conditionAppNameStr").val($(this).html());
								$("#conditionAppName").val($(this).attr("value"));
							}else{
								//$("#conditionAppNameStr").val("");
								$("#conditionAppName").val(-1);
							}
							$('.srhList').hide();
						});
					}
				}
			});
			
		}
	});
	$('#searchWord').keyup(function(){
		if($(this).val()==''){
			$('.srhList').hide();
		}else{
			//收集值
			var val = $(this).val();
			//ajax填充下拉框
			$.ajax({
				url : "/IOPM/AVMAction/AppVideoMonitorAction_getAppNameListByKeyword.action",
				type : "post",
				data : {"promptMessage":val},
				success : function(data){
					if(data!=null && data!=""){
						var senList = eval("("+data+")");
						var htmlStr = "";
						for(var i=0;i<senList.length;i++){
							htmlStr+="<li title="+senList[i].appName+" value="+senList[i].appId+">"+senList[i].appName+"</li>";
						}
						//alert(htmlStr);
						$("#promptUl #mCSB_1_container").html(htmlStr);
						$('#promptUl').show();
						$("#promptUl li").click(function(){
							var keywordValue = $(this).html();
							$("#searchWord").val(keywordValue);
							if(keywordValue != null && keywordValue != ""){
								//$("#conditionAppNameStr").val($(this).html());
								$("#conditionAppName").val($(this).attr("value"));
							}else{
								//$("#conditionAppNameStr").val("");
								$("#conditionAppName").val(-1);
							}
							$('#promptUl').hide();
						});
					}
				}
			});
			
		}
	});
	//词库检索滚动条
	/*$('.srhList').mCustomScrollbar({
		theme:"inset-dark"
	});*/
	$('html').click(function(){
		$('.srhList').hide();
	});
	
});

//查询
function query(){
	$("#start").val(1);
	$("#searchAppInfo").submit();
}   
//删除的取消
function cancleDel(){
	$('.checkMask.delete').hide();
	return false;
	
}
//加载违规类型
function loadAPP(){
	$.ajax({
		type:"post",
		url:"/IOPM/appMgr/AppMgrAction_getAppSelectList.action",
		success:function(msg){
			var html = '<option value="">全部</option>';
			if(msg != ''){
				var data = eval(msg);
				for(var i = 0; i < data.length; i++){
					html += '<option value="'+data[i].appId + '">'
					+data[i].appName + "</option>";
				}
				$("#appId").html(html);
				if($("#searchId").val()!=undefined&&$("#searchId").val()!=''){
					$("#appId").val($("#searchId").val());
				}
			}
		}
	})
}
//翻页
function page(index){
	$("#start").val(index);
	$("#searchAppInfo").submit();
}
//修改
//function updateApp(event,aId,aName,adeveloper,adownloadCount,agoodRate,asummary,amonitor){
//	//记录ID
//	var ev = event||window.event;
//	deleteAppId = aId;
//	var rate = agoodRate;
//	$('#softName').val(aName);
//	$('#softHome').val(adeveloper);
//	$('#softVersion').val(adownloadCount);
////	$('#goodRate').text(arr[0]);
//	$('#softPro').val(asummary);
//	$('#isMonitor').val(amonitor);
//	$(".star_score").append("<p tip='"+agoodRate+"'></P>");
//	var arr = new Array();
//	arr = rate.split(",");
//	if(arr[0].indexOf("星") != -1){
//	arr[0] = arr[0].substring(0,arr[0].indexOf("星"));
//	}
//	starCount = arr[0];
//	alert(starCount);
//	//var math = Math.round(arr[0]);
//
//
//	
//	$('#updateId').val(aId);
//	
//	$('#softHome').val(adeveloper);
//	$('#softVersion').val(adownloadCount);
////	$('#goodRate').text(arr[0]);
//	$('#softPro').val(asummary);
//	$('#isMonitor').val(amonitor);
//	alert($(this).closest('div').siblings('div').find('td.softstar').html());
//	$(".star_score").html( $(ev.target).closest('div').siblings('div').find('td.softstar').html());
//	
//}

//确认修改或者增加
function updateSubmit(){
//	//获取上传文件的路径
//	$.ajax({
//			type:"post",
//			url:"/IOPM/appMgr/AppMgrAction_getStorageUrl.action",
//			success:function(msg){
//		var obj=eval("("+msg+")");
//		alert(obj.info);
//		window.location.reload();
//			
//		},
//		
//	})
	if($("#updateId").val()==''||$("#updateId").val()==undefined||$("#updateId").val()==null){
		var url="/IOPM/appMgr/AppMgrAction_addOneAppInfo.action";
	}else{
		var url ='/IOPM/appMgr/AppMgrAction_updateAppInfo.action';
	}
	 var star=0;
	if($('.checkMask.softDetail #softstar p').attr("tip")==undefined||$('.checkMask.softDetail #softstar p').attr("tip")==''){
		var star=($(".star_score a.clibg").index()+1)*0.5;
	}else{
		star=$('.checkMask.softDetail #softstar p').attr("tip");
	}
	 $("#goodRate").val(star);
	 if( $('#isMonitor').val()==''|| $('#isMonitor').val()==-1|| $('#isMonitor').val()==undefined){
		 $('#isMonitor').val(0);
		 
	 }
	 $("#myform").attr("action",url);
	 $("#myform").submit();
//	$.ajax({
//		type:"post",
//		url:url,
//        data:{
//			'appInfo.appId': $('#updateId').val(),	
//			'appInfo.appName': $('#softName').val(),
//			'appInfo.developer': $('#softHome').val(),
//			'appInfo.downloadCount': $('#softVersion').val(),
//			'appInfo.goodRate': star,
//			'appInfo.summary': $('#softPro').val(),
//			'appInfo.monitor': $('#isMonitor').val()
//			},
//		success:function(msg){
//			$('.checkMask.softDetail').hide();
//			var obj=eval("("+msg+")");
//				alert(obj.info);
//				$("#updateId").val(null);
//				window.location.reload();
//		
//		},
//		error:function(msg){
//			alert(msg);
//		}
//	})
}

//删除
function deleteAppInfo(){
	var deleteAppId=$("#delId").val();
		$.ajax({
			type:"post",
			url:"/IOPM/appMgr/AppMgrAction_deleteAppInfo.action",
			data:{
				'appInfo.appId':deleteAppId
			},
			
			success:function(msg){
				var obj=eval("("+msg+")");
				alert(obj.info);
				window.location.reload();
					
				},
				error:function(msg){
					alert(msg);
				}
		})
	
}
////根据浏览器获取路径
//function getImgPath(obj){
//	
//	//obj.get(0).filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src=obj.value;
//	var file_url=obj.value;
//	alert(file_url);
//	obj.files.item(0).getAsDataURL();
//	$("#img").attr("src",file_url);
//}


