$(function(){
	$('#sidebar .nav li').click(function(){
		$(this).addClass("active").siblings("#sidebar .nav li").removeClass("active");
	});
	$('.sidebar .sub-menu>li>a').click(function(){
		$('.sidebar .sub-menu>li>a').css('color','white');
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
	
	$add.click(function(){
		
		$('.checkMask .MaskTop').html('增加角色');
		$('.checkMask form').css({'width':'20%','height':'280px'});
		$('.checkMask').hide();
		$('.checkMask.role').show();
		resetMask(100);
		
	});
//	修改
	$change.click(function(){
		if(selClickLi.length==0){
			confirm('请选择用户');
		}else{
			var $selLi = $('#data-table tbody tr').eq(selClickLi[0]);
			$('.checkMask .msgs #roleName').val($selLi.find('.roleName').text());
			$('.checkMask .msgs #rolePro').val($selLi.find('.rolePro').text());
			
			$('.checkMask .MaskTop').html('修改角色');
			$('.checkMask form').css({'width':'20%','height':'280px'});
			$('.checkMask').hide();
			$('.checkMask.role').show();
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
	//设置权限
	$setPower.click(function(){
		if(selClickLi.length==0){
			confirm('请选择用户');
		}else{
			$('.zTreeMask').css({'display':'block','width':$(window).width(),'height':$(window).height()+$(document).scrollTop()});
			$('.content_wrap').removeClass('bounceOutDown',function(){
				$(this).addClass('bounceInDown');
			}).show();
		}
	});
	
	
	//关闭按钮  设置权限层 取消按钮
	var maskTimer = null;
	$('.zTreeMask em , .zTreeMask .btnMask button.btn-danger').click(function(){
		clearInterval(maskTimer);
		$('.content_wrap').removeClass('bounceInDown',function(){
			$(this).addClass('bounceOutDown');
		});
		maskTimer = setTimeout(function(){
			$('.zTreeMask').hide();
		},500);
		return false;
	});
	
	$('.zTreeMask em').hover(function(){
			$(this).css({'transform':'rotate(180deg)','transition':'all .8s'});
		},function(){
			$(this).css({'transform':'rotate(0)','transition':'all .8s'});
	});
	
});