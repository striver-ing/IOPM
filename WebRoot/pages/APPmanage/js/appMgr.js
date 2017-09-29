//全局 变量
var type='';
var deleteAppId ='';
var index = '';
var starCount = '';

//查询
function query(){
	$("#start").val(0);
	$("#searchAppInfo").submit();
}

//翻页
function page(index){
	$("#start").val(index);
	$("#searchAppInfo").submit();
}

//打开窗口
function openWindow(){
	layer.open(index);
}
//关闭窗口
function closeWindow(){
	layer.close(index);
}
//增加APP
function addAppInfo(){
	$("#addAppFormId")[0].reset();
	//打分评分
    $('#addGoodRate').raty({
       hints: ['1', '2', '3', '4', '5'],
       path:"/IOPM/images",
//     starOff: 'start1.png', 
//     starOn: 'start2.png',
       size:24,
       click: function (score, evt) {
    	 starCount = score;
    	 
     }

    });
	index = $.layer({
		type: 1,
		title: false, //不显示默认标题栏
		//shade: [0], //不显示遮罩
		area: ['470px', '325px'],
		page: {dom : '#page_popup1'}
	});
}
//确认修改
function updateSubmit(){
	var url = '/IOPM/appMgr/AppMgrAction_updateAppInfo.action';
	$.ajax({
		type:"post",
		url:url,
        data:{
			'appInfo.appId': $('#updateId').val(),	
			'appInfo.appName': $('#appName').val(),
			'appInfo.developer': $('#developer').val(),
			'appInfo.downloadCount': $('#downloadCount').val(),
			'appInfo.goodRate': starCount,
			'appInfo.summary': $('#summary').val(),
			'appInfo.monitor': $('#isMonitor').val()
			},
		success:function(msg){
		closeWindow();
		var obj=eval("("+msg+")");
			AlertCallBack(obj.info,function(){
				window.location.reload();
			});
		},
		error:function(msg){
			Alert(msg);
		}
	})
}
//确认新增
function addSubmit(){
	var url = '/IOPM/appMgr/AppMgrAction_addOneAppInfo.action';
	$.ajax({
		type:"post",
		url:url,
        data:{
	
		'appInfo.appName': $('#addAppName').val(),
		'appInfo.developer': $('#addDeveloper').val(),
		'appInfo.downloadCount': $('#addDownloadCount').val(),
		'appInfo.goodRate': starCount,
		'appInfo.summary': $('#addSummary').val(),
		'appInfo.monitor': $('#addIsMonitor').val()
		},
		success:function(msg){
		closeWindow(index);
		var obj=eval("("+msg+")");
			AlertCallBack(obj.info,function(){
				window.location.reload();
			});
		},
		error:function(msg){
			Alert(msg);
		}
	})
}
//删除
function deleteAppInfo(){
	closeWindow(index);
	Confirm("您确定删除这种违规类型吗?",function(){
		$.ajax({
			type:"post",
			url:"/IOPM/appMgr/AppMgrAction_deleteAppInfo.action",
			data:{
				'appInfo.appId':deleteAppId
			},
			
			success:function(msg){
				var obj=eval("("+msg+")");
					AlertCallBack(obj.info,function(){
						window.location.reload();
					});
				},
				error:function(msg){
					Alert(msg);
				}
		})
	})
}
//验证窗体输入
function check(type){
	if(type == 1){
		var Name = $("#name").val();
		if(Name == ''){
			Alert("违规类型不能为空");
			return false;
		}
		var Keyword1 = $("#keyword1").val();
		var Keyword2 = $("#keyword2").val();
		var Keyword3 = $("#keyword3").val();
		if(Keyword1 == '' && Keyword2 == '' && Keyword3 == ''){
			Alert("请至少填写一个关键词");
			return false;
		}
	}
	if(type == 2){
		var kid = knowledgeId;
		if(kid == '' || kid == null){
			Alert("请选中一条数据");
			return false;
		}
	}
	return true;
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
			}
		}
	})
}
//修改
function updateApp(aId,aName,adeveloper,adownloadCount,agoodRate,asummary,amonitor){
	//记录ID
	deleteAppId = aId;
	var rate = agoodRate;
	var arr = new Array();
	arr = rate.split(",");
	if(arr[0].indexOf("星") != -1){
		arr[0] = arr[0].substring(0,arr[0].indexOf("星"));
	}
	starCount = arr[0];
	
//	var math = Math.round(arr[0]);
	
	//打分评分
    $('#goodRate').raty({
       hints: ['1', '2', '3', '4', '5'],
       path:"/IOPM/images",
       half  : true,
//     starOff: 'start1.png', 
//     starOn: 'start2.png',
       size:24,
       score:starCount,
       click: function (score, evt) {
      	 starCount = score;
       }
    });
	index=$.layer({
		type: 1,
		title: false, //不显示默认标题栏
		//shade: [0], //不显示遮罩
		area: ['470px', '325px'],
		page: {dom : '#page_popup'}
	});
	$('#updateId').val(aId);
	$('#appName').val(aName);
	$('#developer').val(adeveloper);
	$('#downloadCount').val(adownloadCount);
//	$('#goodRate').text(arr[0]);
	$('#summary').val(asummary);
	$('#isMonitor').val(amonitor);
}
$(window).resize(function(){
    var totalH = $(window).height() - 50;
	var totalW = $(".introd_cont").width() - 80;
	var rHeight =30;
	$(".index_cont").height(totalH-rHeight);
	$(".introd_img").width(totalW);
	$(".introd_list").width(totalW);
	/*$(".play_show").width(totalW);*/
});
$(function(){
    $(window).resize();
});
$(document).ready(function() {
	loadAPP();
    $("input#appStartTime,input#appEndTime").datepicker({
        changeYear:true,
        dateFormat:'yy-mm-dd'
      });
	$('.index_page .page_btn').click(function(){
		$(this).addClass('on').siblings().removeClass('on');
	});
})