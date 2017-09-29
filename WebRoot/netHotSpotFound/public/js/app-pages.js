
$(function () {  
//	选择样式
	$('.theme-list li a').click(function(){
//		alert($(this).attr('data-theme'));
		var link = $('<link />');  
	    link.attr('href', '../public/css/theme/'+$(this).attr('data-theme')+'.css');  
	    link.attr('rel', 'stylesheet');  
	    link.attr('data-red','red'),
	    link.appendTo($('head'));  
	});
// 弹出层动画 
	var maskTimer = null;
	
	//关闭按钮 main层 取消按钮
	$('.checkMask form em , .checkMask form .btnMask button.btn-danger').click(function(){
		clearInterval(maskTimer);
		$('.checkMask.main form').removeClass('bounceInDown',function(){
			$(this).addClass('bounceOutDown');
		});
		maskTimer = setTimeout(function(){
			$('.checkMask').hide();
		},500);
		return false;
	});
	
	$('.checkMask form em').hover(function(){
			$(this).css({'transform':'rotate(180deg)','transition':'all .8s'});
		},function(){
			$(this).css({'transform':'rotate(0)','transition':'all .8s'});
	});
	
//	删除弹出层取消按钮
	$('.checkMask.delete form .btnMask button.btn-danger , .checkMask.delete form em').bind('click',function(){
		clearInterval(maskTimer);
		$('.checkMask.delete form').removeClass('bounceInLeft').addClass('bounceOutRight');
		maskTimer = setTimeout(function(){
			$('.checkMask').hide();
		},500);
		return false;
	});
});

	//重置弹出层大小
function resetMask(num){
	$('.checkMask').css({'width':$(window).width()+$(document).scrollLeft(),'height':$(window).height()+$(document).scrollTop()});
	$('.checkMask form').css('top',($(window).height()-$(this).height())/2+$(document).scrollTop()+ num ).addClass('bounceInDown').removeClass('bounceOutDown');
	$('.checkMask.delete form').css('top',($(window).height()-$(this).height())/2+$(document).scrollTop()+ num ).addClass('bounceInLeft').removeClass('bounceOutRight');
}

