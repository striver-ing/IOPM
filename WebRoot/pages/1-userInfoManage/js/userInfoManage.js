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
	$("#enableIdList").prev("em").text($("#enableIdList").find("option:selected").text());
	
	var selOff = true;
	$('.top form select').click(function(){
		if(selOff){
			$(this).siblings('em').addClass('on');
		}else{
			$(this).siblings('em').removeClass('on');
		}
		selOff = !selOff;
	});
	$('.top form select').change(function(){
		//alert($(this).selectIndex());
		$(this).siblings('em').text($(this).find('option:selected').text());
	});
	
	
	$('#data-table tbody tr').click(function(){
		$(this).find('td').addClass('move');
		$(this).siblings('tr').find('td').removeClass('move');
		selClickLi.length=0;
		selClickLi.push($(this).index());
	});
	
//	增删改查
	var $add = $('.btns input.add');
	var $change = $('.btns input.change');
	var $del = $('.btns input.del');
	var $setPower = $('.btns input.setPower');
	
	
	//增加
	$add.click(function(){
		//清空弹出层数据
		$('.checkMask form input').val('');
		getSelect($('.checkMask form select'),'');
		//弹出层设置
		$('.checkMask .MaskTop').html('增加用户信息');
		$('.checkMask form').css({'width':'600px','height':'450px'});
		$('.checkMask').hide();
		$('.checkMask.users').show();
		resetMask(100);
		loadAddRole();
	
	});
})
	//添加用户
	function onSubmit(){
		if(checkUserInfo()){
		$.ajax( {
			type : "post",
			async: false,
			url : "/IOPM/app/appUsers_saveUpdateUser.action",
			data : $("#userFormId").serialize(),
			success : function(msg) {
				if(msg!=""&&msg!=null){
					$("#searchconditionRole").val("");
					submitWindow(msg);
				}else{
					submitWindow("操作失败！");
				}
					
				
					
			},
			error : function() {
				gocheckSubmitWindow("系统错误！");
			}
		});
	}
		return false;
 }
	//对用户的信息进行非空验证
function checkUserInfo(){
	var userName=$("#userName").val();
	var userLoginName=$("#userloginName").val();
	var userLoginPwd=$("#userloginPwd").val();
	if(userName==""||userName==undefined||userName==null){
		gocheckSubmitWindow("用户名不能为空");
		return false;
	}
	if(userLoginName==null||userLoginName==undefined||userLoginName==""){
		gocheckSubmitWindow("用户登录名不能为空");
		return  false;
	}
	if(userLoginPwd==""||userLoginPwd==null||userLoginPwd==undefined){
		gocheckSubmitWindow("用户登录密码不能为空!");
		return false;
	}
	return true;
	
}

//	点击角色tr
//	$userInfolist.click(function(){
//		//$(this).addClass('dataID').css('background','#ccc').siblings().removeClass('dataID').css('background','');
//		selClickLi.length=0;
//		selClickLi.push($(this).index());
//	});



//	修改
	function goUpdateUser(index){
		
		$("#updatePageNo").val(index);
	//获取index
		if(selClickLi.length==0){
			confirm('请选择用户');
		}else{
			loadAddRole();
			var $userInfolist=$('#data-table tbody tr');
		
			var $nowClick=$userInfolist.eq(selClickLi[0]);
			//获取用户的Id
			var userId=$nowClick.find('td').eq(0).find("span").html();
			$("#addUserId").val(userId);
			//$('#userFormId input[name="powerName"]').val($nowClick.find('td').eq(1).html());
		//	$('#userFormId input[name="powerIntro"]').val($nowClick.find('td').eq(2).html());
			$('#userFormId input[name="fullName"]').val($nowClick.find('td').eq(1).html());
			$('#userFormId input[name="userName"]').val($nowClick.find('td').eq(2).html());
			$('#userFormId input[name="password"]').val($nowClick.find('td').eq(3).html());
			$('#userFormId select[name="gender"]').val(($nowClick.find('td').eq(4).html()=="男"?1:0));
			$('#userFormId input[name="email"]').val($nowClick.find('td').eq(5).html());
			$('#userFormId input[name="qq"]').val($nowClick.find('td').eq(6).html());
			$('#userFormId input[name="mobilephone"]').val($nowClick.find('td').eq(7).html());
			$('#userFormId input[name="telephone"]').val($nowClick.find('td').eq(8).html());
			$('#userFormId input[name="department"]').val($nowClick.find('td').eq(9).html());
			$('#userFormId input[name="enable"]').val($nowClick.find('td').eq(11).html()=="启用"?1:0);
			$("#addRole option").each(function(){
				if($(this).val()==$nowClick.find('td').eq(10).find("span").html()){
					$("#addRole").val($(this).val());
				//	$(this).selected=true;
				}
			});
			
			$('.checkMask .MaskTop').html('修改用户');
			$('.checkMask form').css({'width':'600px','height':'450px'});
			$('.checkMask').hide();
			$('.checkMask.users').show();
			resetMask(100);
		}
	};
//	删除
function goDel(index){
	$("#pageNo").val(index);
		if(selClickLi.length==0){
			confirm('请选择用户');
		}else{
			var $userInfolist=$('#data-table tbody tr');
			
			var $nowClick=$userInfolist.eq(selClickLi[0]);
			//获取用户的Id
			var userId=$nowClick.find('td').eq(0).find("span").html();
			
			$("#delUserId").val(userId);
			$('.checkMask .MaskTop').html('删除角色');
			$('.checkMask form').css({'width':'360px','height':'280px'});
			$('.checkMask').hide();
			$('.checkMask.delete').show();
			resetMask(100);
		}
}
//删除用户
function delUser(){
	//获取当前页码
	var pageNo=$("#pageNo").val();
	$.ajax({
        url:"/IOPM/app/appUsers_deleteUser.action",
        type:'POST',
        async:false,
        data:"userId="+$("#delUserId").val(),
        dateType:"json",
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
	$('.checkMask .MaskTop').html('操作提示');
	$('.checkMask form').css({'width':'20%','height':'280px','top':'100px'});
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
	$("#checkSubmitMessageChoose form").css({"width":"25%","height":"250px","top":"200px"});
	$("#checkSubmitMessageChoose").show();
	$("#checkSubmitMessageChoose").css("z-index",1501);
	
	$(".MaskTop.check").html("验证提示");
	$(".checkSubmitTextChoose").html(text);
	resetMask(200);
	
}
//隐藏验证提示框
function checkSubmitChoose(){
	$("#checkSubmitMessageChoose").css("z-index",1500);
	$('#checkSubmitMessageChoose').hide();
}
//根据表格的数据给弹出层对应的地方复制
function getSelect (sele , target){
	if(target)
	sele.find('option').each(function(i,elem){
//	console.log($(elem).text())
		if(target.text() == $(elem).text()){
			$(elem).attr('selected',true);
		}
	});
	else
	sele.find('option:first-child').attr('selected',true);
}


function loadAddRole(){
	jQuery.ajax({
       	url: '/IOPM/app/appRoles_getRole.action',
       	type: 'post',
       	dataType:'json',
       	success: function(obj){
       		var htmlStr="";
       		$.each(obj, function(i, p) {  
       			htmlStr=htmlStr+'<option value='+p.roleId+'>'+p.roleName+'</option> ';
       		});
       		
       		$("#addRole").html(htmlStr);
       		//给查询中角色下拉框赋值
       		if($("#roleId").val()!="" && $("#roleId").val()!= null){
       			$("#addRole").val($("#roleId").val());
       			
       		}
       	}
	});
}