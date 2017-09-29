var queryUserName='';
var queryRole='';
var queryEnable='';
var keyword='';

$(function(){
	//给每页显示的条数赋值
	$("#pageSizeSelect").val($("#limit").val());
	//当每页显示条数改变时执行查询
	$("#pageSizeSelect").change(function(){
		userButtonSubmit();
	});
	

	
})

// 点击事件
function buttonSubmit(roleId, enableId) {
	// 关键词
	keyword = document.getElementById("keyword").value;
	document.getElementById("searchUser").action = "/IOPM/app/appUsers_getUsers.action";
	// 关键词
	if (keyword != '' && keyword != undefined && keyword != null) {
		if (keyword == '请输入关键字') {
			keyword = '';
		}
		document.getElementById("keyword").value = keyword;
	}
	
	var name = document.getElementById("adminName").value;
	//登陆名称
	if (name != '' && name != undefined && name != null) {
		document.getElementById("adminName").value = name;
	}
	// 角色名称
	queryRole = findSelect("queryRole");
	if (queryRole != null && queryRole != undefined && $.trim(queryRole) != '') {
		var role = parseInt(queryRole);
		document.getElementById("roleId").value = role;
	} else {
		document.getElementById("roleId").value = '';
	}
	// 使用状态
	queryEnable = findSelect("queryEnable");
	if (queryEnable != null && queryEnable != undefined && $.trim(queryEnable) != '') {
		var enable = parseInt(queryEnable);
		document.getElementById("enableId").value = enable;
	} else {
		document.getElementById("enableId").value = '';
	}
	document.getElementById("limit").value = 15;
	document.getElementById("searchUser").submit();
}
//查询特定的用户
function userButtonSubmit(index){
	var userName = $("#check_name").val();
	var roleId = $("#searchconditionRole").val();
	var enableId = $("#enableIdList option:selected").val();
	if(index != null && index != undefined && index != ""){
		$("#statr").val(index);
	}
	document.getElementById("searchUser").action = "/IOPM/app/appUsers_getUsers.action";
	// 关键词
	if (userName != '' && userName != undefined && userName != null && userName != "请输入登录名称") {
		$("#checkname").val(userName);
	}else{
		$("#checkname").val("");
	}
	// 角色名称
	if (roleId != null && roleId != undefined && $.trim(roleId) != '') {
		var role = parseInt(roleId);
		$("#roleId").val(role);
		//$("#ThemeText").text($("#searchconditionRole option:selected").text());
	} else {
		$("#roleId").val("");
	}
	// 使用状态
	if (enableId != null && enableId != undefined && $.trim(enableId) != '') {
		var enable = parseInt(enableId);
		$("#enableId").val(enable);
		$("#enableIdList option").val(enable);
		$(".status_span").text($("#enableIdList option:selected").text());
	} else {
		$("#enableId").val("");
	}
	if($("#pageSizeSelect").val()==''||$("#pageSizeSelect").val()==undefined||$("#pageSizeSelect").val()==null){
		$("#pageSizeSelect").val(10);
	}
	document.getElementById("limitValue").value = $("#pageSizeSelect").val();
	document.getElementById("searchUser").submit();
	
}

//// 新增用户信息
//function addUserInfo() {
//
//	//增加
//
//		//清空弹出层数据
//		$('.checkMask main users form input').val('');
//		getSelect($('.checkMask form select'),'');
//		//弹出层设置
//		$('.checkMask main users .MaskTop').html('增加用户信息');
//		$('.checkMask main users form').css({'width':'40%','height':'450px'});
//		$('.checkMask main users').hide();
//		$('.checkMask main users').show();
//		resetMask(100);
//
//	//loadRole();
//	//openWindow();
//}
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
       		$("#searchconditionRole").html(htmlStr);
       		//给查询中角色下拉框赋值
       		if($("#roleId").val()!="" && $("#roleId").val()!= null){
       			$("#searchconditionRole").val($("#roleId").val());
       			$("#searchconditionRole").prev("em").text($("#searchconditionRole").find("option:selected").text());
       		}
       	}
	});
}
//// 更新用户信息
//function updateUserInfo(userId,fullName, userName, password, gender, email, msn, qq,
//		mobilephone, telephone, department, roleId, enable) {
//	$("#addUserId").val(userId);
//	$("#addFullName").val(fullName);
//	$("#addUserName").val(userName);
//	$("#addPassWord").val(password);
//	$("#addGender").val(gender);
//	$("#addEmail").val(email);
//	$("#addMSN").val(msn);
//	$("#addQQ").val(qq);
//	$("#addTelephone").val(mobilephone);
//	$("#addPhone").val(telephone);
//	$("#addDepartment").val(department);
//	$("#addRole").val(roleId);
//	$("#addEnable").val(enable);
//
//	//openWindow();
//}
////更新角色信息
//function updateRoleInfo(roleId,roleName,description){
//	$("#addRoleId").val(roleId);
//	$("#addRoleName").val(roleName);
//	$("#addRoleDescription").val(description);
//	$.ajax({
//   		url: '/IOPM/app/appSystems_getAllSystems.action',
//   		type: 'post',
//   		//async : false,
//   		data : {roleId:$("#addRoleId").val()},
//   		success: function(msg){
//   			//window.alert("success");
//   		}
//	});
//}



//翻页
function page(index) {
	document.getElementById("start").value = index;
	document.getElementById("searchUser").action ="/IOPM/app/appUsers_getUsers.action";
	document.getElementById("limitValue").value =$("#pageSizeSelect").val();
	var userName = $("#check_name").val();
	//var roleId = $("#searchconditionRole option:selected").val();
	var roleId=	$("#roleId").val();
	var enableId = $("#enableIdList option:selected").val();
	// 关键词
	if (userName != '' && userName != undefined && userName != null && userName != "请输入登录名称") {
		$("#checkname").val(userName);
	}else{
		$("#checkname").val("");
	}
	// 角色名称
	if (roleId != null && roleId != undefined && $.trim(roleId) != '') {
		var role = parseInt(roleId);
		$("#roleId").val(role);
		$("#searchconditionRole option").val(role);
	} else {
		$("#roleId").val("");
	}
	// 使用状态
	if (enableId != null && enableId != undefined && $.trim(enableId) != '') {
		var enable = parseInt(enableId);
		$("#enableId").val(enable);
		$("#enableIdList option").val(enable);
		$(".status_span").text($("#enableIdList option:selected").text());
	} else {
		$("#enableId").val("");
	}
	document.getElementById("searchUser").submit();
}


$(function(){
	//要查询的用户名
	var checkname1=$("#checkname1").val();
	//赋值 
	if(checkname1!=""){
		$("#check_name").val(checkname1);
	}
	loadRole();
	$(".Table02").find("tbody").find("tr").each(function(){
		$(this).click(function(){
			$(this).parent("tbody").children("tr").removeClass('current');
			$(this).addClass('current');
		});
	});
	
	
});


//初始化rolemgr.ftl界面中的检索下拉框
function getRole(){
	$.ajax({
		type:"post",
		url:"/IOPM/app/appRoles_getRole.action",
		dataType:"json",
		success : function(obj){
			var htmlStr="";
			$.each(obj, function(i,p){
				htmlStr=htmlStr+"<option value="+p.roleId+">"+p.roleName+"</option>";
			});
			$("#sect").append(htmlStr);
			if($("#roleId").val()!="" && $("#roleId").val()!= null){
     			$("#sect").val($("#roleId").val());
     		}
		},
		
	});
}