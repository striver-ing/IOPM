$(function(){
	$('#sidebar .nav li').click(function(){
		$(this).addClass("active").siblings("#sidebar .nav li").removeClass("active");
	});
	$('.sidebar .sub-menu>li>a').click(function(){
		$('.sidebar .sub-menu>li>a').css('color','white');
	});
	
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
//		alert($(this).val());
		$(this).siblings('em').text($(this).val());
	});
	
	
	var selClickLi=[];
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
		$('.checkMask form').css({'width':'40%','height':'450px'});
		$('.checkMask').hide();
		$('.checkMask.users').show();
		resetMask(100);
	});
//	修改
	$change.click(function(){
		if(selClickLi.length==0){
			confirm('请选择用户');
		}else{
			var $selLi = $('#data-table tbody tr').eq(selClickLi[0]);
			
			$('.checkMask .msgs #userName').val($selLi.find('.userName').text());
			$('.checkMask .msgs #userloginName').val($selLi.find('.userloginName').text());
			$('.checkMask .msgs #userloginPwd').val($selLi.find('.userloginPwd').text());
			//性别
			getSelect($('.checkMask .msgs #userSex'),$selLi.find('.userSex'));
			
			$('.checkMask .msgs #userMail').val($selLi.find('.userMail').text());
			$('.checkMask .msgs #userQQ').val($selLi.find('.userQQ').text());
			$('.checkMask .msgs #userPhone').val($selLi.find('.userPhone').text());
			$('.checkMask .msgs #userTel').val($selLi.find('.userTel').text());
			
			//部门
			getSelect($('.checkMask .msgs #userDepart'),$selLi.find('.userDepart'));
			
			$('.checkMask .msgs #userRoleName').val($selLi.find('.userRoleName').text());
			
			//状态
			getSelect($('.checkMask .msgs #userState'),$selLi.find('.userState'));
			
			
			
			
			$('.checkMask .MaskTop').html('修改角色');
			$('.checkMask form').css({'width':'40%','height':'450px'});
			$('.checkMask').hide();
			$('.checkMask.users').show();
			resetMask(100);
		}
	});
//	删除
	$del.click(function(){
		if(selClickLi.length==0){
			confirm('请选择用户');
		}else{
			$('.checkMask .MaskTop').html('删除角色');
			$('.checkMask form').css({'width':'20%','height':'280px'});
			$('.checkMask').hide();
			$('.checkMask.delete').show();
			resetMask(100);
		}
	});
});

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