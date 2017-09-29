$(function(){
	$('#sidebar .nav li').click(function(){
		$(this).addClass("active").siblings("#sidebar .nav li").removeClass("active");
		$('#content iframe').attr('src',$(this).attr('data-link'));
	});


	$(".circular-m a").each(function () {
		$(this).attr("title", $(this).text());
		$(this).css("cursor", 'pointer');
	});

	$('.circular-m a').each(function(index){
		var s = $(this).html();
		s = autoAddEllipsis(s, 18);
		$(this).html(s);
	})

	function autoAddEllipsis(str, cutLength){
		var len = 0;
		for (var i=0; i<str.length; i++) {
			var c = str.charCodeAt(i);
			//���ֽڼ�1
			if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) {
				len++;
			}else {
				len+=2;
			}
			if (len > cutLength){
				return str.substr(0, i) + '...';
			}
		}
		return str
	}
	Date.prototype.Format = function (fmt) { //author: meizz 
	    var o = {
	        "M+": this.getMonth() + 1, //月份 
	        "d+": this.getDate(), //日 
	        "h+": this.getHours(), //小时 
	        "m+": this.getMinutes(), //分 
	        "s+": this.getSeconds(), //秒 
	        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
	        "S": this.getMilliseconds() //毫秒 
	    };
	    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	    for (var k in o)
	    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	    return fmt;
	}
	
//	$('.news').css('transform','translateY(-92px)')
//	$('.news').css('transition','transform 0.5s 2s')
	$('.x').click(function(){
		console.log(3);
		var id = "";
		$(this).next().children().each(function(){
			id += $(this).children('input').val() + ",";
		});
		console.log(4);
		$.ajax({
			url:"/IOPM/NetHotSpot/NetHotSpotAction_UpdateNotice.action",
			type:"post",
			data:{"idList":id},
			success:function(data){
				console.log(13);
			$('.news').css('transform','translateY(92px)')
			$('.news').css('transition','transform 0.8s')
		}
			
		});
		
	})
	$('.x').mouseover(function(){
		$(this).css('transform','rotate(180deg)')
		$(this).css('transition','all 0.8s')
	})

	$('.x').mouseout(function(){	
		$(this).css('transform','rotate(0deg)')
		$(this).css('transition','all 0.8s')
	})
	
	var interval = setInterval(function refresh(){
		$.ajax({
			url:"/IOPM/NetHotSpot/NetHotSpotAction_RefreshNotice.action",
			type:"get",
			dataType:"json",
			success:function(data){
			console.log(11);
			if(data.length > 0){
				$('.news').css('transform','translateY(-92px)')
				$('.news').css('transition','transform 0.5s 2s')
			}else{
				$('.news').css('transform','translateY(92px)')
				$('.news').css('transition','transform 0.8s')
			}
			var html="";
			$.each(data,function(i,p){
				var date = new Date().Format("yyyy-MM-dd");
				console.log(date);
				var title = "";
				if(p.title.length > 9){
					title = p.title.substring(0,9) + "...";
				}
				html += `
			<li class="circular-m clear">
				<input type="hidden" value="${p.id}"/>
				<a href="${p.url}" target="_blank" title="${p.title}">${title}</a>
				<span>${date}</span>
				<img src="/IOPM/imgs/l.png" alt=""/>
			</li>`;
			})
			
			$('.news ul').html(html);
		}
			
		});
	},1000*120);
	
	
	
	
});
