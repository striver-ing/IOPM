
$(function () {  
	//设置时间
	function current(){
		var d=new Date(),str='';
		var weekday=new Array(7)
		weekday[1]="星期一"
		weekday[2]="星期二"
		weekday[3]="星期三"
		weekday[4]="星期四"
		weekday[5]="星期五"
		weekday[6]="星期六"
		weekday[0]="星期日"        
		str +=d.getFullYear()+'-'; //获取当前年份
		str +=d.getMonth()+1+'-'; //获取当前月份（0——11）
		str +=d.getDate()+'';
		str +='&nbsp;'+weekday[d.getDay()]+'&nbsp;';//获取当前星期
		str +=d.getHours()<10?'0'+d.getHours()+':':+d.getHours()+':'; 
		str +=d.getMinutes()<10?'0'+d.getMinutes()+':':+d.getMinutes()+':'; 
		str +=d.getSeconds()<10?'0'+d.getSeconds():+d.getSeconds()+''; 
		return str; 
	}
	setInterval(function(){$("#nowTime").html(current)},1000);
		
	window.onload=function(){
		now = new Date(),hour = now.getHours() 
			if(hour < 9){$('#week').html("早上好，")} 
			else if (hour < 12){$('#week').html("上午好，")} 
			else if (hour < 17){$('#week').html("下午好，")} 
			else {$('#week').html("晚上好，")} 
	};

//	选择样式
	$('.theme-list li a').click(function(){
//		alert($(this).attr('data-theme'));
		var link = $('<link />');  
	    link.attr('href', 'css/theme/'+$(this).attr('data-theme')+'.css');  
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

