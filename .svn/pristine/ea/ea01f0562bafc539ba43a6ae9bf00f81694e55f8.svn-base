
var selClickLi=[];
$(function(){
	//刷新当前页面
	$(".checkMask.submit .fa").click(function(){
		window.location.reload(true);
	})
			//隐藏弹出框
	$(".checkMask.submitChoose .fa").click(function(){
		$("#SubmitMessageChoose").hide();
	})
	//给每页显示的条数赋值
	$("#pageSizeSelect").val($("#limit").val());
	//当每页显示条数改变时执行查询
	$("#pageSizeSelect").change(function(){
		querySearch();
	});
	
	$('#data-table tbody tr').click(function(){
		$(this).find('td').addClass('move');
		$(this).siblings('tr').find('td').removeClass('move');
		selClickLi.length=0;
		selClickLi.push($(this).index());
	});
	
	loadRole();
//	增删改查
	var $add = $('.btns input.add');
	var $change = $('.btns input.change');
//	var $del = $('.btns input.del');
	var $setPower = $('.btns input.setPower');
	//弹出层按钮
	var $addChange=$(".checkMask main role");
	var $submit=$('.btn btn-primary');
	var $exit=$('.btn btn-danger');
	$add.click(function(){
		$("#addRoleId").val('');
		$('#roleName1').val('');
		$('#description1').val('');
		$('.checkMask .MaskTop').html('增加角色');
		$('.checkMask form').css({'width':'360px','height':'280px'});
		$('.checkMask').hide();
		$('.checkMask.role').show();
		resetMask(100);
//		//提交按钮
//		$submit.click(function(){
//			console.log(selClickLi[selClickLi.length-1]);
//			$addChange.hide();
//		});
//		//取消按钮
//		$exit.click(function(){
//			$addChange.hide();
//			return false;
//		});
		//resetMask();
		//$('.zTreeMask').hide();
	});
		//$addChange.css({'display':'block','width':$(window).width(),'height':$(window).height()+$(document).scrollTop()});
//		$('.addChange form input[name="roleName"]').val('');
//		$('.addChange form input[name="description"]').val('');
//		$('.addChange form input[name="regularName"]').val('');
//		$('.addChange form input[name="regularIntro"]').val('');
//		$('.addChange form input[name="remark"]').val('');
//		//提交按钮
//		$submit.click(function(){
//			$addChange.hide();
//		});
//		//取消按钮
//		$exit.click(function(){
//			$addChange.hide();
//			return false;
//		});
//		resetMask();
//		$('.zTreeMask').hide();
		

//	修改
	$change.click(function(){
		if(selClickLi.length==0){
			confirm('请选择用户');
		}else{
		var $selLi = $('#data-table tbody tr').eq(selClickLi[0]);
		var roleId=$selLi.find('td').eq(0).find("span").text();
	
			$("#addRoleId").val(roleId);
			$('#roleName1').val($selLi.find('td').eq(1).text());
			$('#description1').val($selLi.find('td').eq(2).text());
			
			$('.checkMask .MaskTop').html('修改角色');
			$('.checkMask form').css({'width':'360px','height':'280px'});
			$('.checkMask').hide();
			$('.checkMask.role').show();
			resetMask(100);
		}
//		//提交按钮
//		$submit.click(function(){
//			console.log(selClickLi[selClickLi.length-1]);
//			$addChange.hide();
//		});
//		//取消按钮
//		$exit.click(function(){
//			$addChange.hide();
//			return false;
//		});
	});
//	删除
//	$del.click(function(){
//		if(selClickLi.length==0){
//			confirm('请选择用户');
//		}else{
//			$('.checkMask .MaskTop').html('删除角色');
//			$('.checkMask form').css({'width':'20%','height':'280px'});
//			$('.checkMask').hide();
//			$('.checkMask.delete').show();
//			resetMask(100);
//		}
//	});
	


	//设置权限
	$setPower.click(function(){
		if(selClickLi.length!=0){
			var $selLi = $('#data-table tbody tr').eq(selClickLi[0]);
			//获取角色的Id
			var roleId=$selLi.find('td').eq(0).find("span").text();
			$("#addRoleId").val(roleId);
			$.ajax({
	       		url: '/IOPM/app/appSystems_getAllSystemsJson.action',
	       		type: 'post',
	       		//async : false,
	       		dataType : 'json',
	       		data : {roleId:$("#addRoleId").val()},
	       		success: function(json){
	       			var htmlStr = "";
	       			$.each(json,function(i,p){
	       				var systemID = p.systemID;
	       				var sourceId = p.sourceId;
	       				var checked1=p.checked;
	       				var flag = 0;
	       				$.each(json,function(i,p){
	       					if(p.sourceId != 0 && p.sourceId == systemID){
	       						if(p.checked == "true"){
	       							flag = 1;
	       						}
	       					}
	       				});
	       				if((sourceId == 0 && flag == 1)||(sourceId==0&&(checked1==true||checked1=="true"))){
	       					htmlStr = htmlStr + "<li><input type='checkbox' checked name='privilegeIds' title='"+p.systemID+"' /><span class='folder' style='color:black;'>"+p.systemName+"</span>";
	       				}else if(sourceId == 0){
	       					htmlStr = htmlStr + "<li><input type='checkbox' name='privilegeIds' title='"+p.systemID+"' /><span class='folder' style='color:black;'>"+p.systemName+"</span>";
	       				}
	       				htmlStr = htmlStr + "<ul>";
	       				$.each(json,function(ii,pp){
	       					var sourceId1 = pp.sourceId;
	       					var systemID1 = pp.systemID;
	       					var checked = pp.checked;
	       					if(sourceId1 == systemID){
	       						if(checked == true || checked == "true"){
	       							htmlStr = htmlStr + "<li><input type='checkbox' checked name='privilegeIds' title='"+pp.systemID+"' /><span class='file' style='color:black;'>"+pp.systemName+"</span></li>";
	       						}else{
	       							htmlStr = htmlStr + "<li><input type='checkbox' name='privilegeIds' title='"+pp.systemID+"' /><span class='file' style='color:black;'>"+pp.systemName+"</span></li>";
	       						}
	       					}
	       				});
	       				htmlStr = htmlStr + "</ul>";
	       				htmlStr = htmlStr + "</li>";
	       			});
	       			$("#setPowerUl").html(htmlStr);
	       		}
			});
			$('.zTreeMask').css({'display':'block','width':$(window).width(),'height':$(window).height()+$(document).scrollTop()});
			$('.content_wrap').css('display','block');
		}else{
			confirm("请选择角色！");
		}
	});
	
	
//	//关闭按钮  设置权限层 取消按钮
	var maskTimer = null;
	$('.zTreeMask em , .zTreeMask .btnMask button.btn-danger').click(function(){
		$('.zTreeMask').hide();
//		clearInterval(maskTimer);
//		$('.content_wrap').removeClass('bounceInDown',function(){
//			$(this).addClass('bounceOutDown');
//		});
//		maskTimer = setTimeout(function(){
//			$('.zTreeMask').hide();
//		});
//		return false;
	});

})
	
	//角色赋权
	function grantAddRole(){
		var value =[];
		$('input[name="privilegeIds"]:checked').each(function(){
			value.push($(this).attr("title"));
		});
			var permissionIds ='';
			var roleId=$("#addRoleId").val();
		
			if(value != null && value != '' && value != "undefined" && value != "null" ){
				var permissionIds = value.toString();
			}
			var loginId=window.parent.document.getElementById("loginId").value;
		
		
				$.ajax({
						type:"post",
						url:"/IOPM/app/appRoles_RoleAuthorize.action",
						data:{'roleId':roleId,'permissionIds':permissionIds},
						success: function(msg){
							
			 			if(msg!=null&&""!=msg){
			 			
			 				submitWindow(msg);
			 				$('.zTreeMask').hide();
			 				//获取登录的角色id
			 			var loginId=window.parent.document.getElementById("loginId").value;
			 			//若是当前角色登录则重新登录，否则刷新当前
			 				if(roleId==loginId){
			 					//window.parent.location.href="/IOPM/Login/login/login.ftl";
			 					window.parent.location.reload(true);
			 				}else{
			 					//window.location.reload(true);
			 				}
			 			}else{
			 				submitWindow("授权失败！");
			 			}
			 			
				    },
						error:function(msg){
				    	gocheckSubmitWindow(msg);
						}
					});
			
	}
	

//	
//	$('.zTreeMask em').hover(function(){
//			$(this).css({'transform':'rotate(180deg)','transition':'all .8s'});
//		},function(){
//			$(this).css({'transform':'rotate(0)','transition':'all .8s'});
//	});
//	
//});
	//加载角色信息
	function loadRole(){
		jQuery.ajax({
	       	url: '/IOPM/app/appRoles_getRole.action',
	       	type: 'post',
	       	dataType:'json',
	       	success: function(obj){
	       		var htmlStr="<option value=''>全部</option> ";
	       		$.each(obj, function(i, p) {  
	       			htmlStr=htmlStr+'<option value='+p.roleId+'>'+p.roleName+'</option> ';
	       		});
	       		$("#sect").html(htmlStr);
	       		//给查询中角色下拉框赋值
	       		if($("#roleId").val()!="" && $("#roleId").val()!= null){
	       			$("#sect").val($("#roleId").val());
	       		}
	       	}
		});
	}

//查询角色
function querySearch(index){
	var roleName=$('#sect option:selected').text();
	document.getElementById("searchRole").action = "/IOPM/app/appRoles_getRoles.action";
	if (roleName != '' && roleName != undefined && roleName != null) {
  		if(roleName=='全部'){
  			roleName='';
  		}
  		$('#roleName').val(roleName);
  		$("#roleId").val($('#sect option:selected').val());
	}
	if(index != null && index != undefined && index != ""){
		$("#statr").val(index);
	}
	document.getElementById("limitValue").value = $("#pageSizeSelect").val();
	document.getElementById("searchRole").submit();
	}

//角色分页
function pageRole(index){
	if(index<0){index=1;}
	document.getElementById("start").value = index;
	document.getElementById("searchRole").action = "/IOPM/app/appRoles_getRoles.action";
	document.getElementById("limitValue").value =$("#pageSizeSelect").val();
	document.getElementById("searchRole").submit();
}
//检测角色名
function checkRoleName(){
	var roleName=$("#roleName1").val();
	if(roleName==""||roleName==undefined||roleName==null){
		gocheckSubmitWindow("角色名字不能为空！");
		return false;
	}else{
		return true;
	}
	
}
//添加角色信息
function onSubmitRole() {
	if( checkRoleName()){
		//alert($("#roleFormId").serialize());
		var roleId=$("#addRoleId").val();
		var roleName=$("#roleName1").val();
		var description=$("#description1").val();
		var limit= $("#pageSizeSelect").val();
		$.ajax( {
			type : "post",
			async:false,
			url : "/IOPM/app/appRoles_saveUpdateRole.action",
			data : "roleId="+roleId+"&roleName="+roleName+"&description="+description+"&limit="+limit,
			success : function(msg) {
			if(msg!=""&&msg!=null){
				submitWindow(msg);
			}else{
				submitWindow("操作失败！");
			}
			},
			error : function(msg) {
				gocheckSubmitWindow(msg);
			}
		});
	}
	return false;
}


//删除
function goDel(index){
	$("#pageNo").val(index);
		if(selClickLi.length==0){
			confirm('请选择用户');
		}else{
			var $userInfolist=$('#data-table tbody tr');
			
			var $nowClick=$userInfolist.eq(selClickLi[0]);
			//获取用户的Id
			var userId=$nowClick.find('td').eq(0).find("span").html();
			
			$("#delRoleId").val(userId);
			$('.checkMask .MaskTop').html('删除角色');
			$('.checkMask form').css({'width':'360px','height':'280px'});
			$('.checkMask').hide();
			$('.checkMask.delete').show();
			resetMask(100);
//			//提交按钮
//			$submit.click(function(){
//				console.log(selClickLi[selClickLi.length-1]);
//				$(".checkMask delete").hide();
//			});
//			//取消按钮
//			$exit.click(function(){
//				$(".checkMask delete").hide();
//				return false;
//			});
		}
}

function delRole(){
	//获取当前页码
	var pageNo=$("#pageNo").val();
	$.ajax({
        url:"/IOPM/app/appRoles_deleteRole.action?roleId="+$("#delRoleId").val(),
        async:false,
        type:'POST',
        dateType:"text",
        success:function(msg){
			if(msg!=""&&msg!=null){
				submitWindow(msg);
			}else{
				submitWindow("删除角色失败！");
			}
		},error:function(){
			gocheckSubmitWindow("删除用户失败,系统错误");
		}
   });
	return false;
}
//操作提示
function submitWindow(text){
	$('.checkMask').hide();
	
	$('.checkMask.submit').show();
	$(".SubmitText").html(text);
	resetMask(200);
	
}
//隐藏提示框
function submitComplete(){
	$('.checkMask').hide();
	window.location.reload(true);//回到当前页面
}

//操作提示 --只提示并隐藏其他对话框
function gosubmitChoose(text){
	$('.checkMask').hide();
	$(".MaskTop").html("操作提示");
	$("#SubmitMessageChoose").show();
	$(".SubmitTextChoose").html(text);
	resetMask();
}
//隐藏提示框
function submitChoose(){
	$('.checkMask').hide();
}

//验证提示框
function gocheckSubmitWindow(text){
	$("#checkSubmitMessageChoose form").css({"width":"20%","height":"250px","top":"200px"});
	$("#checkSubmitMessageChoose").show();
	$("#checkSubmitMessageChoose").css("z-index",1600);
	
	$(".MaskTop.check").html("验证提示"); 
	$(".checkSubmitTextChoose").html(text).css({"font-size": "20px","font-weight":"bold","text-align":"center","margin-top":"50px"});
	resetMask(200);
	
}
//隐藏验证提示框
function checkSubmitChoose(){
	$("#checkSubmitMessageChoose").css("z-index",1500);
	$('#checkSubmitMessageChoose').hide();
}
