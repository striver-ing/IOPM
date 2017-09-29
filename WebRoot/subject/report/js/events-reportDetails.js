$(function(){
	var kwSetA = new Set(),
		kwSetB = new Set();
	//侧边栏定位功能
	$(".sideCatalog-dot,.nslog").click(function(){
		$(this).closest('dd.sideCatalog-item1').addClass('sideCatalog-item1-highlight').siblings().removeClass('sideCatalog-item1-highlight');
		//定位功能
		$('html,body').animate({'scrollTop':$('#'+(1+parseInt($(this).siblings('.on_off_head').find('span').attr('auth_code')))+'').offset().top},600);
	});
	//显示隐藏按钮
	$('.on_off').click(function(){
		if($(this).find('span').text()=='ON'){
			$(this).find('span').addClass('off_click').removeClass('on_click').text('OFF').siblings('p').toggleClass('when_off');
			//auth_code   auth_for_show_hide
			//显示对应部分的内容
			$('[auth_for_show_hide="'+(1+parseInt($(this).find('span').attr('auth_code')))+'"]').hide();
		}else{
			$(this).find('span').addClass('on_click').removeClass('off_click').text('ON').siblings('p').toggleClass('when_off');
			$('[auth_for_show_hide="'+(1+parseInt($(this).find('span').attr('auth_code')))+'"]').show();
		}
	});
	//回到顶部位置设置
	$(window).scroll(function(){
		//页面滚动时  到某个位置与侧边栏对应
		var $scrollTitle = $('div.main-nesw.sideToolbar-title');
		for (var i=0;i<$scrollTitle.length;i++) {
			if($(document).scrollTop()+100>$scrollTitle.eq(i).offset().top){
				$('dd.sideCatalog-item1').eq(i).addClass('sideCatalog-item1-highlight').siblings().removeClass('sideCatalog-item1-highlight');
			}
		}
		//alert($(document).scrollTop())
		if($(document).scrollTop()>=1000){
			if(!$('#sideToolbar-up').hasClass('bounceInUp')){
				$('#sideToolbar-up').show().toggleClass('bounceInUp');
			}else{
				return;
			}
		}else{
			$('#sideToolbar-up').hide().removeClass('bounceInUp');
		}
	});
	//回到顶部
	$("#sideToolbar-up").click(function () {
        var speed=500;//滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
 	});
	//侧边栏显示或隐藏
	var sideOff = true;
	$('#sideCatalogBtn').click(function(){
		if(sideOff){
			$('#sideCatalog').show().toggleClass('bounceIn');
		}else{
			$('#sideCatalog').hide(300).toggleClass('bounceIn');
		}
		sideOff = !sideOff;
	});

	//渲染专题
	$.ajax({
		url:'/IOPM/Subject/SubjectAction_selectAllSubject.action',
		type:'post',
		data:{},
		dataType:'json',
		success:function(data){
			var html = '<dt>在控专题:</dt>';
			for(var i=0;i<data.length;i++){
				html+= '<dd id='+data[i].ID+'><a href="#">'+data[i].NAME+'</a></dd>'
			}
			$('.analyDiv .events dl').html(html)
			$('.analyDiv .events dl dd').eq(0).addClass('select')
			$('.analyDiv .events dl dd').each(function(){
				$(this).click(function(){
					$(this).addClass('select')
					$(this).siblings('dd').removeClass('select');
				})
			})
		}
	})
	
	$.ajax({
		url:'/IOPM/Subject/SubjectAction_startAndEndSbujectById.action',
		type:'post',
		data:{},
		dataType:'json',
		success:function(data){
			$('.summary1').html(data.Public_sentiment1)
			$('.summary2').html(data.Public_sentiment2)
		},
		erorr:function(){
			alert('失败')
		}
	})
	
	
	$('.add').click(function(){
		var timer = setInterval(function(){
			//监测hidc里ul的高度
			var ZB = $('.hidc .zbh span').length > 0 ? parseInt($('.hidc .zbh').css('height')):0;
			var BB = $('.hidc .bbh span').length > 0 ? parseInt($('.hidc .bbh').css('height')):0;
			if(ZB+BB > 205){
				$('.hidc ul').css('height',205);
				$('.hidc ul').css('overflow','auto');
			}
			if(ZB+BB < 205) {
				$('.hidc ul').css('height',ZB+BB);
			}
		},100)
		$('.checkMask .bounceInDown').css({'width': '40%'});
		$('#special input').val('');
		$('#special textarea').val('');
		$('.checkMask .bounceInUp #userC').attr('placeholder','请输入名称');
		$('.checkMask .bounceInUp input').css('border-color', '#ccc');
		$('.checkMask .bounceInDown textarea').css('border-color', '#ccc');
		$('.checkMask .bounceInDown textarea').css('placeholder', '关键词之间空格分割表示与， 逗号分割表示或。');
		$('.checkMask .hidc ul li span').remove();
		kwSetA = new Set();
		kwSetB = new Set();
		$('.checkMask .hida').hide();
		$('.checkMask .hidb').hide();
		$('.checkMask .zbh').hide();
		$('.checkMask .bbh').hide();
		$('.checkMask.main.increase').show();
		resetMask(0);
//		resetMaskVal();
	})
	
	$('#special .btn-primary').click(function(){
		 if ($('.increase #userC').val() == '' || $('.increase #lookStartTime').val() == '' || $('#lookEndTime').val()==null || $('.textA').val()=='') {
	        	alert('请填写完整');
	            return false;
	        } else {
	        	$.ajax({
	        		url:'http://192.168.110.162:8080/IOPM/Subject/SubjectAction_addSubject.action',
	        		type:'post',
	        		data:{
	        			"name":$('#userC').val(),
	        			"startTime":$('#lookStartTime').val(),
	        			"endTime":$('#lookEndTime').val(),
	        			"keyword1":$('.textA').val(),
	        			"keyword1":$('.textB').val()
	        		},
//	        		dataType:'json',
	        		success:function(){
	        			alert('成功')
	        		},
	        		erorr:function(){
	        			alert('失败')
	        		}
	        		
	        	})
	        	$('.increase').hide();
	        	 return true;
	        }
	     })
	           
	
	

	//名称失去光标
	$('#userC').blur(function () {
		if ($(this).val() == '') {
			$(this).css('border-color', 'red');
			$(this).attr('placeholder', '输入不能为空')
		} else {
			$(this).css('border-color', '#ccc');
		}
	})
	//开始时间按钮
	$('#lookStartTime').datepicker({
		todayHighlight: true,
		autoclose: true
	});
//结束时间按钮
	$('#lookEndTime').datepicker({
		todayHighlight: true,
		autoclose: true
	});
	$('#table1').mCustomScrollbar({
		theme:"inset-dark"
	});
	
	$('#forum_site_rank_list').mCustomScrollbar({
		theme:"inset-dark"
	});

	 // 当点击li变色，清空文本域中的内容，并把li中的内容和文本域中的内容放到预览
    $('.crux li').each(function (index) {
        $('.crux li').eq(index).click(function () {
            $(this).addClass('bg').siblings(".crux li").removeClass('bg');
            if ($(this).index() == 0) {
                $('.textA').show();
                $('.textB').hide();
            } else {
                $('.textB').show();
                $('.textA').hide();
            }
        })
    })
   
	
    // 当文本框失去光标
    $('.textA').blur(function(){ 
    	$('.hida').show();
		var txt = $(this).val();
		
		// 客户误操作输入中文逗号也按英文逗号处理 按逗号分隔数组
		var arrStr;
        var textStr='';
        if (txt.indexOf('，') > 0) {
            arrStr = txt.replace(/，/g, ',').split(',');
        } else {
            arrStr = txt.replace(/\n/g, ',').split(',')
        }

		// var arrStr = txt.replace(/，/g,',').split(',');
		
        arrStr.forEach((x) => {
			if(x.trim() != ''){
				var trim = x.trim()
				if(trim.indexOf('（') != -1 ||trim.indexOf('(') != -1){
					trim = trim.replace(/）/g, ')')
					trim = trim.replace(/（/g, '(')
					textStr+=trim+','
					 if(trim.indexOf('|') == -1){
						 var a;
						 var c = [];
						 for(var i=0;i<trim.length;i++){
						 	if(trim[i]==')'){
						 		c.push(trim.substring(a,i).replace(/\(/g,""));
						 		a=i+1
						 	}	
						 }
						 var stra;
						 if(c.length>1){
						 	var d = c[0];
						 	c = c.splice(1);
						 	for(var i=0;i<c.length;i++){
						 		var e = c[i];
						 		var h=[];
						 		h.push(d[0]+'&'+e[0])
						 		d = h;
						 	}
						 	stra = d;
						}else{
							stra = c[0];
						}
							stra.forEach((y) => {
								 kwSetA.add(y);
					 	})
					 }else{
						 var a;
						 var c = [];
						 for(var i=0;i<trim.length;i++){
						 	if(trim[i]==')'){
						 		c.push(trim.substring(a,i).replace(/\(/g,""));
						 		a=i+1
						 	}	
						 }
						 
						var stra;
						 if(c.length>1){
						 	var d = c[0].split('|');
						 	c = c.splice(1);
						 	for(var i=0;i<c.length;i++){
						 		var e = c[i].split('|');
						 		var h=[];
						 		for(var k=0;k<d.length;k++){
						 			for(var j=0;j<e.length;j++){
						 			h.push(d[k]+'&'+e[j])
						 			}
						 		}
						 		d = h;
						 		
						 	}
						 	stra = d;
						 }else{
						 	stra = c[0].split('|');
						 }
						 stra.forEach((y) => {
							 kwSetA.add(y);
						 })
					 }
				}else{
					textStr+=trim+','
					kwSetA.add(trim);
				}
			}
		});	
		
		let str     = '',

	    lastKey = '';
	for(var val of kwSetA){
		console.log(isRepeat(val,$('#myUpdateId').val()));
		if(isRepeat(val,$('#myUpdateId').val()) == true){
			str     += `<span style="background:red">${val}(已存在)<i></i></span>`;
		}else{
			str     += `<span>${val}<i></i></span>`;
		}
//		textStr += `${val},`;
		lastKey = val;
	}
	
	$('.checkMask .zbh').show().find('.zbhBox').html(str);
	$(this).val(textStr);
	console.log($('#myUpdateId').val());
	console.log(lastKey);
		
    });
    $('.textB').blur(function(){
    	$('.hida').show();
		var txt = $(this).val();
		// 客户误操作输入中文逗号也按英文逗号处理 按逗号分隔数组
		var arrStr;
        var textStr='';
        if (txt.indexOf('，') > 0) {
            arrStr = txt.replace(/，/g, ',').split(',');
        } else {
            arrStr = txt.replace(/\n/g, ',').split(',')
        }

		// var arrStr = txt.replace(/，/g,',').split(',');
        arrStr.forEach((x) => {
			if(x.trim() != ''){
				var trim = x.trim()
				if(trim.indexOf('（') != -1 ||trim.indexOf('(') != -1){
					trim = trim.replace(/）/g, ')')
					trim = trim.replace(/（/g, '(')
					textStr+=trim+','
					 if(trim.indexOf('|') == -1){
						 var a;
						 var c = [];
						 for(var i=0;i<trim.length;i++){
						 	if(trim[i]==')'){
						 		c.push(trim.substring(a,i).replace(/\(/g,""));
						 		a=i+1
						 	}	
						 }
						 var stra;
						 if(c.length>1){
						 	var d = c[0];
						 	c = c.splice(1);
						 	for(var i=0;i<c.length;i++){
						 		var e = c[i];
						 		var h=[];
						 		h.push(d[0]+'&'+e[0])
						 		d = h;
						 	}
						 	stra = d;
						}else{
							stra = c[0];
						}
							stra.forEach((y) => {
								 kwSetB.add(y);
					 	})
					 }else{
						 var a;
						 var c = [];
						 for(var i=0;i<trim.length;i++){
						 	if(trim[i]==')'){
						 		c.push(trim.substring(a,i).replace(/\(/g,""));
						 		a=i+1
						 	}	
						 }
						 
						var stra;
						 if(c.length>1){
						 	var d = c[0].split('|');
						 	c = c.splice(1);
						 	for(var i=0;i<c.length;i++){
						 		var e = c[i].split('|');
						 		var h=[];
						 		for(var k=0;k<d.length;k++){
						 			for(var j=0;j<e.length;j++){
						 			h.push(d[k]+'&'+e[j])
						 			}
						 		}
						 		d = h;
						 		
						 	}
						 	stra = d;
						 }else{
						 	stra = c[0].split('|');
						 }
						 stra.forEach((y) => {
							 kwSetB.add(y);
						 })
					 }
				}else{
					textStr+=trim+','
					kwSetB.add(trim);
				}
			}
		});	
    	let str     = '';
//			textStr = '';

		for(var val of kwSetB){
			str     += `<span>${val}<i></i></span>`;
//			textStr += `${val},`;
		}
		$('.checkMask .bbh').show().find('.bbhBox').html(str);

		$(this).val(textStr);
		console.log(kwSetB)
    });
    $('.textA').keyup(function (ev) {
        kwSetA = new Set();
        var keycode = ev.which;
        if(keycode == 188 || keycode == 13 || keycode == 229 && $(this).val() != ''){// 键入enter
																						// 同时判断值是否为空
            // console.log('dohao');
			$('.hida').show();
			var txt = $(this).val();
			// 客户误操作输入中文逗号也按英文逗号处理 按逗号分隔数组
			var arrStr;
	        var textStr='';
	        if (txt.indexOf('，') > 0) {
	            arrStr = txt.replace(/，/g, ',').split(',');
	        } else {
	            arrStr = txt.replace(/\n/g, ',').split(',')
	        }

			// var arrStr = txt.replace(/，/g,',').split(',');
	        arrStr.forEach((x) => {
				if(x.trim() != ''){
					var trim = x.trim()
					if(trim.indexOf('（') != -1 ||trim.indexOf('(') != -1){
						trim = trim.replace(/）/g, ')')
						trim = trim.replace(/（/g, '(')
						textStr+=trim+','
						 if(trim.indexOf('|') == -1){
							 var a;
							 var c = [];
							 for(var i=0;i<trim.length;i++){
							 	if(trim[i]==')'){
							 		c.push(trim.substring(a,i).replace(/\(/g,""));
							 		a=i+1
							 	}	
							 }
							 var stra;
							 if(c.length>1){
							 	var d = c[0];
							 	c = c.splice(1);
							 	for(var i=0;i<c.length;i++){
							 		var e = c[i];
							 		var h=[];
							 		h.push(d[0]+'&'+e[0])
							 		d = h;
							 	}
							 	stra = d;
							}else{
								stra = c[0];
							}
								stra.forEach((y) => {
									 kwSetA.add(y);
						 	})
						 }else{
							 var a;
							 var c = [];
							 for(var i=0;i<trim.length;i++){
							 	if(trim[i]==')'){
							 		c.push(trim.substring(a,i).replace(/\(/g,""));
							 		a=i+1
							 	}	
							 }
							 
							var stra;
							 if(c.length>1){
							 	var d = c[0].split('|');
							 	c = c.splice(1);
							 	for(var i=0;i<c.length;i++){
							 		var e = c[i].split('|');
							 		var h=[];
							 		for(var k=0;k<d.length;k++){
							 			for(var j=0;j<e.length;j++){
							 			h.push(d[k]+'&'+e[j])
							 			}
							 		}
							 		d = h;
							 		
							 	}
							 	stra = d;
							 }else{
							 	stra = c[0].split('|');
							 }
							 stra.forEach((y) => {
								 kwSetA.add(y);
							 })
						 }
					}else{
						textStr+=trim+','
						kwSetA.add(trim);
					}
				}
			});	
			
			let str     = '',
//			textStr = '',
		    lastKey = '';
		for(var val of kwSetA){
			console.log(isRepeat(val,$('#myUpdateId').val()));
			if(isRepeat(val,$('#myUpdateId').val()) == true){
				str     += `<span style="background:red">${val}(已存在)<i></i></span>`;
			}else{
				str     += `<span>${val}<i></i></span>`;
			}
//			textStr += `${val},`;
			lastKey = val;
		}
		
		$('.checkMask .zbh').show().find('.zbhBox').html(str);
		$(this).val(textStr);
		console.log($('#myUpdateId').val());
		console.log(lastKey);
			
		}
        
        // 文本域变色
        if ($('.hidc .zbh span').length > 0 || $('.hidc .bbh span').length > 0) {
            $('.textA').css('border-color', '#ccc');
            $('.textA').attr('placeholder','关键词之间空格分割表示与， 逗号分割表示或。');
            if ($('.hidc .bbh span').length <= 0) {
                $('.hida').show();
                $('.bbh').hide();
            }else{
                $('.bbh').show();
            }
        } else {
            $('.hida').hide();
            $('.bbh').hide();
            $('.textA').attr('placeholder','输入不能为空');
            $('.textA').css('border-color', 'red');
        }
         console.log(kwSetA)
    });

    // 文本域变色
    $('.textA').blur(function(){
        if($('.textA').val()!= '') {
            $('.textA').css('border-color', '#ccc');
            $('.textA').attr('placeholder','关键词之间空格分割表示与， 逗号分割表示或。');
        } else {
            $('.hida').hide();
            $('.textA').attr('placeholder','输入不能为空');
            $('.textA').css('border-color', 'red');
        }
    })

    // 删除包含
    $('.hidc li.zbh .zbhBox').on('click','i',function () {
	    $(this).closest('span').remove();
	    kwSetA.delete($(this).closest('span').text());
	    let str = '';
	    for(var val of kwSetA){
			str += `${val},`;
		}
		$('.textA').val(str);
		return false;
	});
	
	// 给右侧搜索框赋值
	$('.hidc li div').on('click','span',function(){
		$('.rightBox').show().find('#kwSrch').val($(this).text().trim()).focus();
	});
	
	
	// 不包含
    $('.textB').keyup(function (ev) {
        kwSetB = new Set();
        var keycode = ev.which;
		if(keycode == 188 || keycode == 13 || keycode == 229 && $(this).val() != ''){// 键入enter
																						// 同时判断值是否为空
// console.log('dohao');
			$('.hida').show();
			var txt = $(this).val();
			// 客户误操作输入中文逗号也按英文逗号处理 按逗号分隔数组
			var arrStr;
	        var textStr='';
	        if (txt.indexOf('，') > 0) {
	            arrStr = txt.replace(/，/g, ',').split(',');
	        } else {
	            arrStr = txt.replace(/\n/g, ',').split(',')
	        }

			// var arrStr = txt.replace(/，/g,',').split(',');
	        arrStr.forEach((x) => {
				if(x.trim() != ''){
					var trim = x.trim()
					if(trim.indexOf('（') != -1 ||trim.indexOf('(') != -1){
						trim = trim.replace(/）/g, ')')
						trim = trim.replace(/（/g, '(')
						textStr+=trim+','
						 if(trim.indexOf('|') == -1){
							 var a;
							 var c = [];
							 for(var i=0;i<trim.length;i++){
							 	if(trim[i]==')'){
							 		c.push(trim.substring(a,i).replace(/\(/g,""));
							 		a=i+1
							 	}	
							 }
							 var stra;
							 if(c.length>1){
							 	var d = c[0];
							 	c = c.splice(1);
							 	for(var i=0;i<c.length;i++){
							 		var e = c[i];
							 		var h=[];
							 		h.push(d[0]+'&'+e[0])
							 		d = h;
							 	}
							 	stra = d;
							}else{
								stra = c[0];
							}
								stra.forEach((y) => {
									 kwSetB.add(y);
						 	})
						 }else{
							 var a;
							 var c = [];
							 for(var i=0;i<trim.length;i++){
							 	if(trim[i]==')'){
							 		c.push(trim.substring(a,i).replace(/\(/g,""));
							 		a=i+1
							 	}	
							 }
							 
							var stra;
							 if(c.length>1){
							 	var d = c[0].split('|');
							 	c = c.splice(1);
							 	for(var i=0;i<c.length;i++){
							 		var e = c[i].split('|');
							 		var h=[];
							 		for(var k=0;k<d.length;k++){
							 			for(var j=0;j<e.length;j++){
							 			h.push(d[k]+'&'+e[j])
							 			}
							 		}
							 		d = h;
							 		
							 	}
							 	stra = d;
							 }else{
							 	stra = c[0].split('|');
							 }
							 stra.forEach((y) => {
								 kwSetB.add(y);
							 })
						 }
					}else{
						textStr+=trim+','
						kwSetB.add(trim);
					}
				}
			});	
				let str     = '';
//					textStr = '';

				for(var val of kwSetB){
					str     += `<span>${val}<i></i></span>`;
//					textStr += `${val},`;
				}
				$('.checkMask .bbh').show().find('.bbhBox').html(str);

				$(this).val(textStr);
		}

        // 文本域变色
        if ($('.hidc .bbh span').length > 0 || $('.hidc .zbh span').length > 0){
            $('.hida').show();
            $('.textB').css('border-color', '#ccc');
            $('.textB').attr('placeholder','关键词之间空格分割表示与， 逗号分割表示或。');
            if ($('.hidc .zbh span').length <= 0) {
                $('.hida').show();
                $('.zbh').hide();
            }else{
                $('.zbh').show();
            }
        } else {
            $('.hida').hide();
            $('.bbh').hide();
            $('.textB').attr('placeholder','输入不能为空');
            $('.textB').css('border-color', 'red');
        }
	
         console.log(kwSetB)
    });

    // 文本域变色
        $('.textB').blur(function(){
            if($('.textB').val()!= '') {
                $('.textB').css('border-color', '#ccc');
                $('.textB').attr('placeholder','关键词之间空格分割表示与， 逗号分割表示或。');
            } else {
                $('.bbh').hide();
                $('.textB').attr('placeholder','输入不能为空');
                $('.textB').css('border-color', 'red');
            }
        })

    // 删除不包含
	$('.hidc li.bbh .bbhBox').on('click','i',function () {
	    $(this).closest('span').remove();
	    kwSetB.delete($(this).closest('span').text().trim());
	    let str = '';
	    for(var val of kwSetB){
	    	
			str += `${val},`;
		}
		$('.textB').val(str);
		return false;
	})
	//第一个图 舆情统计
	var myChart = echarts.init(document.getElementById('kind-statistics'));
	var kind = {
		title : {
			text: '线索库类别信息量',
			x:'center'
		},
		tooltip : {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		legend: {
			x : 'center',
			y : 'bottom',
			data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
		},
		series : [
			{
				name: '访问来源',
				type: 'pie',
				radius : '55%',
				center: ['50%', '50%'],
				data:[
					{value:335, name:'直接访问'},
					{value:310, name:'邮件营销'},
					{value:234, name:'联盟广告'},
					{value:135, name:'视频广告'},
					{value:1548, name:'搜索引擎'}
				],
				itemStyle: {
					emphasis: {
						shadowBlur: 10,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)'
					}
				}
			}
		]
	};
	myChart.setOption(kind);
//舆情统计 滚动条
	$('#sidebar-i').mCustomScrollbar({
		theme:"inset-dark",
	});
	//右侧列表
	var sidebarT = [];
	$('#sidebar-T ul').click(function () {
		$(this).find('li').addClass('mo');
		$(this).find('a').css('color','#fff');
		$(this).siblings('ul').find('li').removeClass('mo');
		$(this).siblings('ul').find('a').css('color','#666');
		sidebarT.length = 0;
		sidebarT.push($(this).index());
	});
	$("#sidebar-T li").each(function () {
		$(this).attr("title", $(this).text());
		$(this).css("cursor", 'pointer');
	});

	$('#sidebar-T ul li').eq(1).each(function(index){
		var s = $(this).html();
		s = autoAddEllipsis(s, 20);
		$(this).html(s);
	})

	$('#sidebar').mCustomScrollbar({
			theme:"inset-dark",
	});
	//广电右侧列表
	var sidebarL = [];
	$('#sidebar-L ul').click(function () {
		$(this).find('li').addClass('mo');
		$(this).find('a').css('color','#fff');
		$(this).siblings('ul').find('li').removeClass('mo');
		$(this).siblings('ul').find('a').css('color','#666');
		sidebarL.length = 0;
		sidebarL.push($(this).index());
	});
	$("#sidebar-L li").each(function () {
		$(this).attr("title", $(this).text());
		$(this).css("cursor", 'pointer');
	});

	$('#sidebar-L ul li').eq(1).each(function(index){
		var s = $(this).html();
		s = autoAddEllipsis(s, 20);
		$(this).html(s);
	})

	function autoAddEllipsis(str, cutLength){
		var len = 0;
		for (var i=0; i<str.length; i++) {
			var c = str.charCodeAt(i);
			//单字节加1
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


	$('.mblog h1 p').each(function(){
		$(this).click(function(){
			$(this).addClass('p').siblings('.mblog h1 p').removeClass('p');
		})
	})

	$('.wechat h1 p').each(function(){
		$(this).click(function(){
			$(this).addClass('p').siblings('.wechat h1 p').removeClass('p');
		})
	})
	//第二个 云图
	var keywords = {
		"colorMappingBy": 85,
		"id": 18,
		"blurSize": 85,
		"minOpacity": 50,
		"maxOpacity": 54,
		"prevIcon": 12,
		"children": 21,
		"shape": 98,
		"nextIcon": 12,
		"showNextBtn": 17,
		"stopIcon": 21,
		"visibleMin": 83,
		"visualDimension": 97,
		"colorSaturation": 56,
		"colorAlpha": 66,
		"emptyItemWidth": 10,
		"inactiveOpacity": 4,
		"activeOpacity": 4,
		"showPrevBtn": 19,
		"playIcon": 26,
		"ellipsis": 19,
		"gapWidth": 19,
		"borderColorSaturation": 10,
		"handleIcon": 2,
		"handleStyle": 6,
		"borderType": 1,
		"constantSpeed": 1,
		"polyline": 2,
		"blendMode": 1,
		"dataBackground": 1,
		"textAlign": 1,
		"textBaseline": 1,
		"brush": 3
	};
	var world = echarts.init(document.getElementById('worldcloud'));
	var data = [];
	for (var key in keywords) {
		data.push({
			name: key,
			value: Math.sqrt(keywords[key])
		})
	}
	var option = {
		tooltip : {},
		series : [ {
			type : 'wordCloud',
			shape:'circle',
			gridSize : 2,
			sizeRange : [ 6, 32 ],
			rotationRange : [ 46, 80 ],
			textStyle : {
				normal : {
					color : function() {
						return 'rgb('
							+ [ Math.round(Math.random() * 160),
								Math.round(Math.random() * 160),
								Math.round(Math.random() * 160) ]
								.join(',') + ')';
					}
				},
				emphasis : {
					shadowBlur : 10,
					shadowColor : '#333'
				}
			},
			data : data
		} ]
	};
	world.setOption(option);

	//第三个  影响力趋势
	$('#influence_trend_line').css('width',$(window).width()*0.62);
	var influence_trend_line = echarts.init(document.getElementById('influence_trend_line'));

	option = {
		tooltip : {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				crossStyle: {
					color: '#999'
				}
			}
		},
		toolbox: {
			show : true,
			feature: {
				dataView: {show: true, readOnly: false},
				magicType: {show: true, type: ['line', 'bar']},
				restore: {show: true},
				saveAsImage: {show: true}
			}
		},
		calculable : true,
		grid: {
			top: '12%',
			left: '1%',
			right: '10%',
			containLabel: true
		},
		xAxis: [
			{
				type: 'category',
				bordercolor:'blue',
				data: ['17-07-20 00时','17-07-20 01时','17-07-20 02时','17-07-20 03时','17-07-20 04时','17-07-20 05时','17-07-20 06时','17-07-20 07时','17-07-20 08时','17-07-20 09时','17-07-20 10时','17-07-20 11时','17-07-20 11时','17-07-20 12时'],
			}
		],
		yAxis: [
			{
				type : 'value',
				name : '情感波动',
				axisLabel: {
					formatter: function (a) {
						a = +a;
						return isFinite(a)
							? echarts.format.addCommas(+a * 1000)
							: '';
					}
				}
			}
		],
		dataZoom: [
			{
				show: true,
				xAxisIndex: 0,
				filterMode: 'empty',
				width: '90%',
				height: 30,
				showDataShadow: false,
				left: '5%'
			},
		],
		series : [
			{
				name: '趋势',
				type: 'line',
				data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
			}
		]
	};

	influence_trend_line.setOption(option);


	//第四个 影响力评价
	var influence_evaluate_watch = echarts.init(document.getElementById('influence_evaluate_watch'));
	option = {
	    title: {
	        text: '',
	        subtext: '',
	        left: 'center',
	        padding: [140, 0],
	        link: 'http://www.baidu.com'
	    },
	    backgroundColor: '',
	    tooltip: {
	        formatter: '<div style="text-align: center;">影响力评价</div>{b} : {c}'
	    },
	    toolbox: {
	        feature: {
	            restore: {},
	            saveAsImage: {}
	        }
	    },
	    series: [{
	        axisLine: {
	            show: true,
	            lineStyle: {
	                color: [
	                    [0.25, '#91c7ae'],
	                    [0.75, '#EFC631'],
	                    [1, '#c23531']
	                ],
	                width: 30
	            }
	        },
	        axisTick: {
	            show: true
	        },
	        axisLabel: {
	            distance: 6,
	            textStyle: {
	                color: 'auto'
	            }
	        },
	        itemStyle: {
	            normal: {
	                color: 'auto'
	            }
	        },
	        radius: '100%',
	        pointer: {
	            width: 10
	        },
	        title: {
	        	textStyle:{
	              fontSize:24,
	              color:'#EFC631'
	            },
	            offsetCenter: [0, '80%']
	        },
	        detail: {
	            textStyle: {
	                fontWeight: 'bolder',
	                fontSize: 16,
	                color: 'black'
	            },
	            offsetCenter: [0, '58%'],
	            formatter: '{value}'
	        },
	        min: 0,
	        max: 100,
	        name: '米类仪表盘',
	        type: 'gauge',
	        show: false,
	        splitNumber: 8,
	
	        data: [{
	            value: '33',
	            name: '影响一般'
	        }]
	    }]
	};
	influence_evaluate_watch.setOption(option, true);

	//第五个图表  事件阶段演化
	
	$('#report').css('width',$(window).width()*0.96);
//	$.ajax({
//		url:'/IOPM/Subject/SubjectAction_consensusByKeyWord.action',
//		type:'post',
//		data:{},
//		dataType:'json',
//		success:function(data){
//			console.log(data)
//			alert('chen')
//		},
//		erorr:function(){
//			alert('错误')
//		}
//	})
	var report1 = echarts.init(document.getElementById('report'));
	option = {
		tooltip : {
			trigger: 'axis',
			axisPointer : {
				type : 'shadow'
			}
		},
		legend: {
			data:['主流媒体信息量','总信息量','微博','微信','新闻','论坛','app','视频']
		},
		toolbox: {
			show : true,
			feature : {
				mark : {show: true},
				dataView : {show: true, readOnly: false},
				magicType: {show: true, type: ['line', 'bar']},
				restore : {show: true},
				saveAsImage : {show: true}
			}
		},
		xAxis: [
			{
				type : 'category',
				data: ['17-07-20 00时','17-07-20 01时','17-07-20 02时','17-07-20 03时','17-07-20 04时','17-07-20 05时','17-07-20 06时','17-07-20 07时','17-07-20 08时','17-07-20 09时','17-07-20 10时','17-07-20 11时','17-07-20 11时','17-07-20 12时'],
			}
		],
		yAxis: [
			{
				type: 'value'
			}
		],
		dataZoom: [
			{
				show: true,
				xAxisIndex: 0,
				filterMode: 'empty',
				width: '90%',
				height: 30,
				showDataShadow: false,
				left: '5%'
			},
		],
		series : [

			{
				name:'主流媒体信息量',
				type:'line',
				barWidth : 5,
				data:[620, 732, 701, 734, 1090, 1130, 1120]
			},
			{
				name:'总信息量',
				type:'line',
				barWidth : 5,
				data:[120, 132, 101, 134, 290, 230, 220]
			},
			{
				name:'微博',
				type:'line',
				barWidth : 5,
				data:[60, 72, 71, 74, 190, 130, 110]
			},
			{
				name:'微信',
				type:'line',
				barWidth : 5,
				data:[120, 132, 101, 134, 290, 230, 220]
			},
			{
				name:'新闻',
				type:'line',
				barWidth : 5,
				data:[60, 72, 71, 74, 190, 130, 110]
			},
			{
				name:'论坛',
				type:'line',
				barWidth : 5,
				data:[120, 132, 101, 134, 290, 230, 220]
			},
			{
				name:'app',
				type:'line',
				barWidth : 5,
				data:[60, 72, 71, 74, 190, 130, 110]
			},
			{
				name:'视频',
				type:'line',
				barWidth : 5,
				data:[120, 132, 101, 134, 290, 230, 220]
			}
		]
	};
	report1.setOption(option);

	
	//第六个图表  新闻媒体传播趋势
	$('#spread_news_img').css('width',$(window).width()*0.6);
	$.ajax({
		url:'/IOPM/Subject/SubjectAction_evenStage.action',
		type:'post',
		data:{},
		datatype:'json',
		success:function(data){
			data = JSON.parse(data)
			var VIPCount = data.VIPCount
			var badEmiton = data.badEmiton
			var TIME = []
			var VIPCOUNT = []
			var BAD_EMOTION = []
			for(var i=0;i<VIPCount.length;i++){
				TIME.push(VIPCount[i].TIME)
				VIPCOUNT.push(VIPCount[i].VIPCOUNT)
			}
			for(var j=0;j<badEmiton.length;j++){
				BAD_EMOTION.push(badEmiton[j].BAD_EMOTION)
			}
			
			var spread_news_img = echarts.init(document.getElementById('spread_news_img'));
			option = {
				title : {
					text: '主流媒体信息量'
				},
				tooltip : {
					trigger: 'axis',
					axisPointer : {
						type : 'shadow'
					}
				},
				legend: {
					data:['总信息量','负面信息量']
				},
				toolbox: {
					show : true,
					feature : {
						dataView : {show: true, readOnly: false},
						magicType : {show: true, type: ['line', 'bar']},
						restore : {show: true},
						saveAsImage : {show: true}
					}
				},
				calculable : true,
				xAxis: [
					{
						type : 'category',
						data:TIME
					}
				],
				yAxis : [
					{
						type : 'value'
					}
				],
				dataZoom: [
					{
						show: true,
						xAxisIndex: 0,
						filterMode: 'empty',
						width: '90%',
						height: 30,
						showDataShadow: false,
						left: '5%'
					},
				],
				series : [
					{
						name:'总信息量',
						type:'line',
						barWidth : 5,
						data:VIPCOUNT,
						markPoint : {
							data : [
								{type : 'max', name: '最大值'},
								{type : 'min', name: '最小值'}
							]
						},
						markLine : {
							data : [
								{type : 'average', name: '平均值'}
							]
						}
					},
					{
						name:'负面信息量',
						type:'line',
						barWidth : 5,
						data:BAD_EMOTION,
						markPoint : {
							data : [
								{type : 'max', name: '最大值'},
								{type : 'min', name: '最小值'}
							]
						},
						markLine : {
							data : [
								{type : 'average', name: '平均值'}
							]
						}
					}
				]
			};
			spread_news_img.setOption(option);
		},
		erorr:function(){
			alert('错误')
		}
	})
	

	//第七个图表  境内论坛传播趋势
	$('#spread_forum_img').css('width',$(window).width()*0.615);
	var spread_forum_img = echarts.init(document.getElementById('spread_forum_img'));
	option = {
		title : {
			text: '境内信息量'
		},
		tooltip : {
			trigger: 'axis',
			axisPointer : {
				type : 'shadow'
			}
		},
		toolbox: {
			show : true,
			feature : {
				dataView : {show: true, readOnly: false},
				magicType : {show: true, type: ['line', 'bar']},
				restore : {show: true},
				saveAsImage : {show: true}
			}
		},
		calculable : true,
		xAxis: [
			{
				type : 'category',
				data: ['17-07-20 00时','17-07-20 01时','17-07-20 02时','17-07-20 03时','17-07-20 04时','17-07-20 05时','17-07-20 06时','17-07-20 07时','17-07-20 08时','17-07-20 09时','17-07-20 10时','17-07-20 11时','17-07-20 11时','17-07-20 12时'],
			}
		],
		yAxis : [
			{
				type : 'value'
			}
		],
		dataZoom: [
			{
				show: true,
				xAxisIndex: 0,
				filterMode: 'empty',
				width: '90%',
				height: 30,
				showDataShadow: false,
				left: '5%'
			},
		],
		series : [
			{
				name:'境内',
				type:'line',
				barWidth : 5,
				data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
				markPoint : {
					data : [
						{type : 'max', name: '最大值'},
						{type : 'min', name: '最小值'}
					]
				},
				markLine : {
					data : [
						{type : 'average', name: '平均值'}
					]
				}
			},
		]
	};
	    spread_forum_img.setOption(option);

	
	
	//第八个图表  微博传播统计
	   
	$('#spread_mblog_img').css('width',$(window).width()*0.95);
	 $.ajax({
	    	url:'/IOPM/Subject/SubjectAction_weiboCount.action',
	    	type:'post',
	    	data:{},
	    	dataType:'json',
	    	success:function(data){
	    		var TIME = []
	    		var WEIBO = []
	    		for(var i=0;i<data.length;i++){
	    			TIME.push(data[i].TIME)
	    			WEIBO.push(data[i].WEIBOCOUNT);
	    		}
	    		var spread_mblog_img = echarts.init(document.getElementById('spread_mblog_img'));
	    		option = {
	    			tooltip : {
	    				trigger: 'axis',
	    				axisPointer : {
	    					type : 'shadow'
	    				}
	    			},
	    			legend: {
	    				data:['腾讯微博']
	    			},
	    			toolbox: {
	    				show : true,
	    				feature : {
	    					mark : {show: true},
	    					dataView : {show: true, readOnly: false},
	    					magicType: {show: true, type: ['line', 'bar']},
	    					restore : {show: true},
	    					saveAsImage : {show: true}
	    				}
	    			},
	    			xAxis: [
	    				{
	    					type : 'category',
	    					data: TIME
	    				}
	    			],
	    			yAxis: [
	    				{
	    					type: 'value'
	    				}
	    			],
	    			dataZoom: [
	    				{
	    					show: true,
	    					xAxisIndex: 0,
	    					filterMode: 'empty',
	    					width: '90%',
	    					height: 30,
	    					showDataShadow: false,
	    					left: '5%'
	    				},
	    			],
	    			series : [

	    				{
	    					name:'腾讯微博',
	    					type:'line',
	    					barWidth : 5,
	    					data:WEIBO
	    				}
	    			]
	    		};
	    		spread_mblog_img.setOption(option);
	    	},
	    	erorr:function(){
	    		alert('错误')
	    	}
	    })
	    
	    
	    //微博列表
	    $.ajax({
	    	url:'/IOPM/Subject/SubjectAction_weiboTrendRank.action',
	    	type:'post',
	    	data:{},
	    	dataType:'json',
	    	success:function(data){
	    		var html = '<ul><li>排名</li><li>标题</li><li>时间</li><li>站点</li></ul>';
	    		var early = data.early
	    		for(var i=0;i<early.length;i++){
	    			html+= '<ul><li>'+(i+1)+'</li><li>'+early[i].TITLE+'</li><li>'+early[i].RELEASE_TIME+'</li><li>'+early[i].WEBSITE_NAME+'</li></ul>'
	    		}
	    		$('#sidebar-W').html(html)
	    	},
	    	erorr:function(){
	    		alert('错误')
	    	}
	    })
	    
	    
	    $('.mblog h1 p').eq(0).click(function(){
	    	$.ajax({
	    		url:'/IOPM/Subject/SubjectAction_weiboTrendRank.action',
		    	type:'post',
		    	data:{},
		    	dataType:'json',
		    	success:function(data){
		    		var html = '<ul><li>排名</li><li>标题</li><li>时间</li><li>站点</li></ul>';
		    		var early = data.early
		    		for(var i=0;i<early.length;i++){
		    			html+= '<ul><li>'+(i+1)+'</li><li>'+early[i].TITLE+'</li><li>'+early[i].RELEASE_TIME+'</li><li>'+early[i].WEBSITE_NAME+'</li></ul>'
		    		}
		    		$('#sidebar-W').html(html)
		    	},
		    	erorr:function(){
		    		alert('错误')
		    	}
	    	})
	    })
	    
	    $('.mblog h1 p').eq(1).click(function(){
	    	$.ajax({
	    		url:'/IOPM/Subject/SubjectAction_weiboTrendRank.action',
		    	type:'post',
		    	data:{},
		    	dataType:'json',
		    	success:function(data){
		    		var html = '<ul><li>排名</li><li>标题</li><li>时间</li><li>站点</li></ul>';
		    		var transmit = data.transmit
		    		for(var i=0;i<transmit.length;i++){
		    			html+= '<ul><li>'+(i+1)+'</li><li>'+transmit[i].TITLE+'</li><li>'+transmit[i].RELEASE_TIME+'</li><li>'+transmit[i].WEBSITE_NAME+'</li></ul>'
		    		}
		    		$('#sidebar-W').html(html)
		    	},
		    	erorr:function(){
		    		alert('错误')
		    	}
	    	})
	    })
	    
	    $('.mblog h1 p').eq(2).click(function(){
	    	$.ajax({
	    		url:'/IOPM/Subject/SubjectAction_weiboTrendRank.action',
		    	type:'post',
		    	data:{},
		    	dataType:'json',
		    	success:function(data){
		    		var html = '<ul><li>排名</li><li>标题</li><li>时间</li><li>站点</li></ul>';
		    		var upMax = data.upMax
		    		for(var i=0;i<upMax.length;i++){
		    			html+= '<ul><li>'+(i+1)+'</li><li>'+upMax[i].TITLE+'</li><li>'+upMax[i].RELEASE_TIME+'</li><li>'+upMax[i].WEBSITE_NAME+'</li></ul>'
		    		}
		    		$('#sidebar-W').html(html)
		    	},
		    	erorr:function(){
		    		alert('错误')
		    	}
	    	})
	    })
	    
	    $('.mblog h1 p').eq(3).click(function(){
	    	$.ajax({
	    		url:'/IOPM/Subject/SubjectAction_weiboTrendRank.action',
		    	type:'post',
		    	data:{},
		    	dataType:'json',
		    	success:function(data){
		    		var html = '<ul><li>排名</li><li>标题</li><li>时间</li><li>站点</li></ul>';
		    		var comment = data.early
		    		for(var i=0;i<comment.length;i++){
		    			html+= '<ul><li>'+(i+1)+'</li><li>'+comment[i].TITLE+'</li><li>'+comment[i].RELEASE_TIME+'</li><li>'+comment[i].WEBSITE_NAME+'</li></ul>'
		    		}
		    		$('#sidebar-W').html(html)
		    	},
		    	erorr:function(){
		    		alert('错误')
		    	}
	    	})
	    })
	    $.ajax({
	    	url:'/IOPM/Subject/SubjectAction_weiboTrendRandText.action',
	    	type:'post',
	    	data:{},
	    	dataType:'json',
	    	success:function(data){
	    		var html = data.text
	    		$('#spread_mblog_summary dd').html(html)
	    	}
	    })
	  
	

	//第九个图表  微信传播统计
	$('#spread_wechat_img').css('width',$(window).width()*0.95);
	$.ajax({
		url:'/IOPM/Subject/SubjectAction_weixinCount.action',
		type:'post',
		data:{},
		dataType:'json',
		success:function(data){
			var WEIXIN = []
			var TIME = []
			for(var i =0;i<data.length;i++){
				WEIXIN.push(data[i].WEIXINCOUNT)
				TIME.push(data[i].TIME)
			}
			var spread_wechat_img = echarts.init(document.getElementById('spread_wechat_img'));
			option = {
				tooltip : {
					trigger: 'axis',
					axisPointer : {
						type : 'shadow'
					}
				},
				legend: {
					data:['微信']
				},
				toolbox: {
					show : true,
					feature : {
						mark : {show: true},
						dataView : {show: true, readOnly: false},
						magicType: {show: true, type: ['line', 'bar']},
						restore : {show: true},
						saveAsImage : {show: true}
					}
				},
				xAxis: [
					{
						type : 'category',
						data:TIME
					}
				],
				yAxis: [
					{
						type: 'value'
					}
				],
				dataZoom: [
					{
						show: true,
						xAxisIndex: 0,
						filterMode: 'empty',
						width: '90%',
						height: 30,
						showDataShadow: false,
						left: '5%'
					},
				],
				series : [

					{
						name:'微信',
						type:'line',
						barWidth : 5,
						data:WEIXIN
					}
				]
			};
			spread_wechat_img.setOption(option);
		},
		erorr:function(){
			alert('失败')
		}
	})
	
	//微信列表
	    $.ajax({
	    	url:'/IOPM/Subject/SubjectAction_weixinTrendRank.action',
	    	type:'post',
	    	data:{},
	    	dataType:'json',
	    	success:function(data){
	    		var html = '<ul><li>排名</li><li>标题</li><li>时间</li><li>站点</li></ul>';
	    		var early = data.early
	    		for(var i=0;i<early.length;i++){
	    			html+= '<ul><li>'+(i+1)+'</li><li>'+early[i].TITLE+'</li><li>'+early[i].RELEASE_TIME+'</li><li>'+early[i].WEBSITE_NAME+'</li></ul>'
	    		}
	    		$('#sidebar-C').html(html)
	    	},
	    	erorr:function(){
	    		alert('错误')
	    	}
	    })
	    
	    
	    $('.wechat h1 p').eq(0).click(function(){
	    	$.ajax({
	    		url:'/IOPM/Subject/SubjectAction_weixinTrendRank.action',
		    	type:'post',
		    	data:{},
		    	dataType:'json',
		    	success:function(data){
		    		var html = '<ul><li>排名</li><li>标题</li><li>时间</li><li>站点</li></ul>';
		    		var early = data.early
		    		for(var i=0;i<early.length;i++){
		    			html+= '<ul><li>'+(i+1)+'</li><li>'+early[i].TITLE+'</li><li>'+early[i].RELEASE_TIME+'</li><li>'+early[i].WEBSITE_NAME+'</li></ul>'
		    		}
		    		$('#sidebar-C').html(html)
		    	},
		    	erorr:function(){
		    		alert('错误')
		    	}
	    	})
	    })
	   
	    
	    $('.wechat h1 p').eq(1).click(function(){
	    	$.ajax({
	    		url:'/IOPM/Subject/SubjectAction_weixinTrendRank.action',
		    	type:'post',
		    	data:{},
		    	dataType:'json',
		    	success:function(data){
		    		
		    		var html = '<ul><li>排名</li><li>标题</li><li>时间</li><li>站点</li></ul>';
		    		var upMax = data.upMax
		    		for(var i=0;i<upMax.length;i++){
		    			html+= '<ul><li>'+(i+1)+'</li><li>'+upMax[i].TITLE+'</li><li>'+upMax[i].RELEASE_TIME+'</li><li>'+upMax[i].WEBSITE_NAME+'</li></ul>'
		    		}
		    		$('#sidebar-C').html(html)
		    	},
		    	erorr:function(){
		    		alert('错误')
		    	}
	    	})
	    })
	    
	    $('.wechat h1 p').eq(2).click(function(){
	    	$.ajax({
	    		url:'/IOPM/Subject/SubjectAction_weixinTrendRank.action',
		    	type:'post',
		    	data:{},
		    	dataType:'json',
		    	success:function(data){
		    		var html = '<ul><li>排名</li><li>标题</li><li>时间</li><li>站点</li></ul>';
		    		var comment = data.comment
		    		for(var i=0;i<comment.length;i++){
		    			html+= '<ul><li>'+(i+1)+'</li><li>'+comment[i].TITLE+'</li><li>'+comment[i].RELEASE_TIME+'</li><li>'+comment[i].WEBSITE_NAME+'</li></ul>'
		    		}
		    		$('#sidebar-C').html(html)
		    	},
		    	erorr:function(){
		    		alert('错误')
		    	}
	    	})
	    })
	    
	    
	     $.ajax({
	    	url:'/IOPM/Subject/SubjectAction_weixinTrendRandText.action',
	    	type:'post',
	    	data:{},
	    	dataType:'json',
	    	success:function(data){
	    		var html = data.text
	    		html=html.substring(0,300)+'...'
	    		$('#spread_wechat_summary dd').html(html)
	    	}
	    })

	//第十个图表  网民情感波动
	$('#opinion_emotion_img_trend_line').css('width',$(window).width()*0.615);
	var opinion_emotion_img_trend_line = echarts.init(document.getElementById('opinion_emotion_img_trend_line'));
	option = {
		tooltip : {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				crossStyle: {
					color: '#999'
				}
			}
		},
		toolbox: {
			show : true,
			feature: {
				dataView: {show: true, readOnly: false},
				magicType: {show: true, type: ['line', 'bar']},
				restore: {show: true},
				saveAsImage: {show: true}
			}
		},
		calculable : true,
		legend: {
			data:['正面', '负面','中立'],
		},
		grid: {
			top: '12%',
			left: '1%',
			right: '10%',
			containLabel: true
		},
		xAxis: [
			{
				type: 'category',
				bordercolor:'blue',
				data: ['17-07-20 00时','17-07-20 01时','17-07-20 02时','17-07-20 03时','17-07-20 04时','17-07-20 05时','17-07-20 06时','17-07-20 07时','17-07-20 08时','17-07-20 09时','17-07-20 10时','17-07-20 11时','17-07-20 11时','17-07-20 12时'],
			}
		],
		yAxis: [
			{
				type : 'value',
				name : '情感波动',
				axisLabel: {
					formatter: function (a) {
						a = +a;
						return isFinite(a)
							? echarts.format.addCommas(+a * 1000)
							: '';
					}
				}
			}
		],
		dataZoom: [
			{
				show: true,
				xAxisIndex: 0,
				filterMode: 'empty',
				width: '90%',
				height: 30,
				showDataShadow: false,
				left: '5%'
			},
		],
		series : [
			{
				name: '正面',
				type: 'line',
				data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
			},
			{
				name: '负面',
				type: 'line',
				data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]

			},
			{
				name: '中立',
				type: 'line',
				data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
			}
		]
	};

	opinion_emotion_img_trend_line.setOption(option);

	
	//第十一个图表  网民情感分布
	$('#opinion_emotion_img_distribute').css('width',$(window).width()*0.295);
	var opinion_emotion_img_distribute = echarts.init(document.getElementById('opinion_emotion_img_distribute'));
	option = {
		title : {
			text: '情感倾向信息量',
			//subtext: '纯属虚构',
			x:'center'
		},
		tooltip : {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		legend: {
			orient: 'vertical',
			left: 'left',
			data: ['正面','负面','中立']
		},
		series : [
			{
				name: '情感倾向',
				type: 'pie',
				radius: ['50%', '70%'],
				center: ['50%', '60%'],
				data:[
					{value:335, name:'正面'},
					{value:310, name:'负面'},
					{value:234, name:'中立'}
				],
				itemStyle: {
					emphasis: {
						shadowBlur: 10,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)'
					}
				}
			}
		]
	};
	opinion_emotion_img_distribute.setOption(option);
	
	//第九个图表  网民互动及传播关键点分析
//$('#wlya').css('width',$(window).width()*0.8);
//	var wlya = echarts.init(document.getElementById('wlya'));
//	wlya.showLoading();
//	$.getJSON('data/npmdepgraph.json', function (json) {
//	    wlya.hideLoading();
//	    wlya.setOption(option = {
//
//	        animationDurationUpdate: 1500,
//	        animationEasingUpdate: 'quinticInOut',
//	        series : [
//	            {
//	                type: 'graph',
//	                layout: 'none',
//	                // progressiveThreshold: 700,
//	                data: json.nodes.map(function (node) {
//	                    return {
//	                        x: node.x,
//	                        y: node.y,
//	                        id: node.id,
//	                        name: node.label,
//	                        symbolSize: node.size,
//	                        itemStyle: {
//	                            normal: {
//	                                color: node.color
//	                            }
//	                        }
//	                    };
//	                }),
//	                edges: json.edges.map(function (edge) {
//	                    return {
//	                        source: edge.sourceID,
//	                        target: edge.targetID
//	                    };
//	                }),
//	                label: {
//	                    emphasis: {
//	                        position: 'right',
//	                        show: true
//	                    }
//	                },
//	                roam: true,
//	                focusNodeAdjacency: true,
//	                lineStyle: {
//	                    normal: {
//	                        width: 0.8,
//	                        curveness: 0.3,
//	                        opacity: 0.7
//	                    }
//	                }
//	            }
//	        ]
//	    }, true);
//	});
	
	
	
});
//判断是否重复
function isRepeat(keyword,id){
	var isTrue = false;
	$.ajax({
		type:"post",
		url:"/IOPM/KeyClues/KeyCluesAction_isRepeat.action",
		data:{'keyword2':keyword,
		      'id':id},
		async:false,
		success:function(msg){
			var obj = eval("("+msg+")");
			if(obj.info == 1){
				console.log("您刚填写的关键词 "+keyword+" 已存在");
				isTrue = true;
			}
		},
		error:function(msg){
			alert("error");
		}
	});
	return isTrue;
}



$(function(){
	var kwSetA = new Set(),
		kwSetB = new Set();
	//侧边栏定位功能
	$(".sideCatalog-dot,.nslog").click(function(){
		$(this).closest('dd.sideCatalog-item1').addClass('sideCatalog-item1-highlight').siblings().removeClass('sideCatalog-item1-highlight');
		//定位功能
		$('html,body').animate({'scrollTop':$('#'+(1+parseInt($(this).siblings('.on_off_head').find('span').attr('auth_code')))+'').offset().top},600);
	});
	//显示隐藏按钮
	$('.on_off').click(function(){
		if($(this).find('span').text()=='ON'){
			$(this).find('span').addClass('off_click').removeClass('on_click').text('OFF').siblings('p').toggleClass('when_off');
			//auth_code   auth_for_show_hide
			//显示对应部分的内容
			$('[auth_for_show_hide="'+(1+parseInt($(this).find('span').attr('auth_code')))+'"]').hide();
		}else{
			$(this).find('span').addClass('on_click').removeClass('off_click').text('ON').siblings('p').toggleClass('when_off');
			$('[auth_for_show_hide="'+(1+parseInt($(this).find('span').attr('auth_code')))+'"]').show();
		}
	});
	//回到顶部位置设置
	$(window).scroll(function(){
		//页面滚动时  到某个位置与侧边栏对应
		var $scrollTitle = $('div.main-nesw.sideToolbar-title');
		for (var i=0;i<$scrollTitle.length;i++) {
			if($(document).scrollTop()+100>$scrollTitle.eq(i).offset().top){
				$('dd.sideCatalog-item1').eq(i).addClass('sideCatalog-item1-highlight').siblings().removeClass('sideCatalog-item1-highlight');
			}
		}
		//alert($(document).scrollTop())
		if($(document).scrollTop()>=1000){
			if(!$('#sideToolbar-up').hasClass('bounceInUp')){
				$('#sideToolbar-up').show().toggleClass('bounceInUp');
			}else{
				return;
			}
		}else{
			$('#sideToolbar-up').hide().removeClass('bounceInUp');
		}
	});
	//回到顶部
	$("#sideToolbar-up").click(function () {
        var speed=500;//滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
 	});
	//侧边栏显示或隐藏
	var sideOff = true;
	$('#sideCatalogBtn').click(function(){
		if(sideOff){
			$('#sideCatalog').show().toggleClass('bounceIn');
		}else{
			$('#sideCatalog').hide(300).toggleClass('bounceIn');
		}
		sideOff = !sideOff;
	});

	//渲染专题
	$.ajax({
		url:'/IOPM/Subject/SubjectAction_selectAllSubject.action',
		type:'post',
		data:{},
		dataType:'json',
		success:function(data){
			var html = '<dt>在控专题:</dt>';
			for(var i=0;i<data.length;i++){
				html+= '<dd id='+data[i].ID+'><a href="#">'+data[i].NAME+'</a></dd>'
			}
			$('.analyDiv .events dl').html(html)
			$('.analyDiv .events dl dd').eq(0).addClass('select')
			$('.analyDiv .events dl dd').each(function(){
				$(this).click(function(){
					$(this).addClass('select')
					$(this).siblings('dd').removeClass('select');
				})
			})
		}
	})
	
	$.ajax({
		url:'/IOPM/Subject/SubjectAction_startAndEndSbujectById.action',
		type:'post',
		data:{},
		dataType:'json',
		success:function(data){
			$('.summary1').html(data.Public_sentiment1)
			$('.summary2').html(data.Public_sentiment2)
		},
		erorr:function(){
			alert('失败')
		}
	})
	
	
	$('.add').click(function(){
		var timer = setInterval(function(){
			//监测hidc里ul的高度
			var ZB = $('.hidc .zbh span').length > 0 ? parseInt($('.hidc .zbh').css('height')):0;
			var BB = $('.hidc .bbh span').length > 0 ? parseInt($('.hidc .bbh').css('height')):0;
			if(ZB+BB > 205){
				$('.hidc ul').css('height',205);
				$('.hidc ul').css('overflow','auto');
			}
			if(ZB+BB < 205) {
				$('.hidc ul').css('height',ZB+BB);
			}
		},100)
		$('.checkMask .bounceInDown').css({'width': '40%'});
		$('#special input').val('');
		$('#special textarea').val('');
		$('.checkMask .bounceInUp #userC').attr('placeholder','请输入名称');
		$('.checkMask .bounceInUp input').css('border-color', '#ccc');
		$('.checkMask .bounceInDown textarea').css('border-color', '#ccc');
		$('.checkMask .bounceInDown textarea').css('placeholder', '关键词之间空格分割表示与， 逗号分割表示或。');
		$('.checkMask .hidc ul li span').remove();
		kwSetA = new Set();
		kwSetB = new Set();
		$('.checkMask .hida').hide();
		$('.checkMask .hidb').hide();
		$('.checkMask .zbh').hide();
		$('.checkMask .bbh').hide();
		$('.checkMask.main.increase').show();
		resetMask(0);
//		resetMaskVal();
	})
	
	$('#special .btn-primary').click(function(){
		 if ($('.increase #userC').val() == '' || $('.increase #lookStartTime').val() == '' || $('#lookEndTime').val()==null || $('.textA').val()=='') {
	        	alert('请填写完整');
	            return false;
	        } else {
	        	$.ajax({
	        		url:'http://192.168.110.162:8080/IOPM/Subject/SubjectAction_addSubject.action',
	        		type:'post',
	        		data:{
	        			"name":$('#userC').val(),
	        			"startTime":$('#lookStartTime').val(),
	        			"endTime":$('#lookEndTime').val(),
	        			"keyword1":$('.textA').val(),
	        			"keyword1":$('.textB').val()
	        		},
//	        		dataType:'json',
	        		success:function(){
	        			alert('成功')
	        		},
	        		erorr:function(){
	        			alert('失败')
	        		}
	        		
	        	})
	        	$('.increase').hide();
	        	 return true;
	        }
	     })
	           
	
	

	//名称失去光标
	$('#userC').blur(function () {
		if ($(this).val() == '') {
			$(this).css('border-color', 'red');
			$(this).attr('placeholder', '输入不能为空')
		} else {
			$(this).css('border-color', '#ccc');
		}
	})
	//开始时间按钮
	$('#lookStartTime').datepicker({
		todayHighlight: true,
		autoclose: true
	});
//结束时间按钮
	$('#lookEndTime').datepicker({
		todayHighlight: true,
		autoclose: true
	});
	$('#table1').mCustomScrollbar({
		theme:"inset-dark"
	});
	
	$('#forum_site_rank_list').mCustomScrollbar({
		theme:"inset-dark"
	});

	 // 当点击li变色，清空文本域中的内容，并把li中的内容和文本域中的内容放到预览
    $('.crux li').each(function (index) {
        $('.crux li').eq(index).click(function () {
            $(this).addClass('bg').siblings(".crux li").removeClass('bg');
            if ($(this).index() == 0) {
                $('.textA').show();
                $('.textB').hide();
            } else {
                $('.textB').show();
                $('.textA').hide();
            }
        })
    })
   
	
    // 当文本框失去光标
    $('.textA').blur(function(){ 
    	$('.hida').show();
		var txt = $(this).val();
		
		// 客户误操作输入中文逗号也按英文逗号处理 按逗号分隔数组
		var arrStr;
        var textStr='';
        if (txt.indexOf('，') > 0) {
            arrStr = txt.replace(/，/g, ',').split(',');
        } else {
            arrStr = txt.replace(/\n/g, ',').split(',')
        }

		// var arrStr = txt.replace(/，/g,',').split(',');
		
        arrStr.forEach((x) => {
			if(x.trim() != ''){
				var trim = x.trim()
				if(trim.indexOf('（') != -1 ||trim.indexOf('(') != -1){
					trim = trim.replace(/）/g, ')')
					trim = trim.replace(/（/g, '(')
					textStr+=trim+','
					 if(trim.indexOf('|') == -1){
						 var a;
						 var c = [];
						 for(var i=0;i<trim.length;i++){
						 	if(trim[i]==')'){
						 		c.push(trim.substring(a,i).replace(/\(/g,""));
						 		a=i+1
						 	}	
						 }
						 var stra;
						 if(c.length>1){
						 	var d = c[0];
						 	c = c.splice(1);
						 	for(var i=0;i<c.length;i++){
						 		var e = c[i];
						 		var h=[];
						 		h.push(d[0]+'&'+e[0])
						 		d = h;
						 	}
						 	stra = d;
						}else{
							stra = c[0];
						}
							stra.forEach((y) => {
								 kwSetA.add(y);
					 	})
					 }else{
						 var a;
						 var c = [];
						 for(var i=0;i<trim.length;i++){
						 	if(trim[i]==')'){
						 		c.push(trim.substring(a,i).replace(/\(/g,""));
						 		a=i+1
						 	}	
						 }
						 
						var stra;
						 if(c.length>1){
						 	var d = c[0].split('|');
						 	c = c.splice(1);
						 	for(var i=0;i<c.length;i++){
						 		var e = c[i].split('|');
						 		var h=[];
						 		for(var k=0;k<d.length;k++){
						 			for(var j=0;j<e.length;j++){
						 			h.push(d[k]+'&'+e[j])
						 			}
						 		}
						 		d = h;
						 		
						 	}
						 	stra = d;
						 }else{
						 	stra = c[0].split('|');
						 }
						 stra.forEach((y) => {
							 kwSetA.add(y);
						 })
					 }
				}else{
					textStr+=trim+','
					kwSetA.add(trim);
				}
			}
		});	
		
		let str     = '',

	    lastKey = '';
	for(var val of kwSetA){
		console.log(isRepeat(val,$('#myUpdateId').val()));
		if(isRepeat(val,$('#myUpdateId').val()) == true){
			str     += `<span style="background:red">${val}(已存在)<i></i></span>`;
		}else{
			str     += `<span>${val}<i></i></span>`;
		}
//		textStr += `${val},`;
		lastKey = val;
	}
	
	$('.checkMask .zbh').show().find('.zbhBox').html(str);
	$(this).val(textStr);
	console.log($('#myUpdateId').val());
	console.log(lastKey);
		
    });
    $('.textB').blur(function(){
    	$('.hida').show();
		var txt = $(this).val();
		// 客户误操作输入中文逗号也按英文逗号处理 按逗号分隔数组
		var arrStr;
        var textStr='';
        if (txt.indexOf('，') > 0) {
            arrStr = txt.replace(/，/g, ',').split(',');
        } else {
            arrStr = txt.replace(/\n/g, ',').split(',')
        }

		// var arrStr = txt.replace(/，/g,',').split(',');
        arrStr.forEach((x) => {
			if(x.trim() != ''){
				var trim = x.trim()
				if(trim.indexOf('（') != -1 ||trim.indexOf('(') != -1){
					trim = trim.replace(/）/g, ')')
					trim = trim.replace(/（/g, '(')
					textStr+=trim+','
					 if(trim.indexOf('|') == -1){
						 var a;
						 var c = [];
						 for(var i=0;i<trim.length;i++){
						 	if(trim[i]==')'){
						 		c.push(trim.substring(a,i).replace(/\(/g,""));
						 		a=i+1
						 	}	
						 }
						 var stra;
						 if(c.length>1){
						 	var d = c[0];
						 	c = c.splice(1);
						 	for(var i=0;i<c.length;i++){
						 		var e = c[i];
						 		var h=[];
						 		h.push(d[0]+'&'+e[0])
						 		d = h;
						 	}
						 	stra = d;
						}else{
							stra = c[0];
						}
							stra.forEach((y) => {
								 kwSetB.add(y);
					 	})
					 }else{
						 var a;
						 var c = [];
						 for(var i=0;i<trim.length;i++){
						 	if(trim[i]==')'){
						 		c.push(trim.substring(a,i).replace(/\(/g,""));
						 		a=i+1
						 	}	
						 }
						 
						var stra;
						 if(c.length>1){
						 	var d = c[0].split('|');
						 	c = c.splice(1);
						 	for(var i=0;i<c.length;i++){
						 		var e = c[i].split('|');
						 		var h=[];
						 		for(var k=0;k<d.length;k++){
						 			for(var j=0;j<e.length;j++){
						 			h.push(d[k]+'&'+e[j])
						 			}
						 		}
						 		d = h;
						 		
						 	}
						 	stra = d;
						 }else{
						 	stra = c[0].split('|');
						 }
						 stra.forEach((y) => {
							 kwSetB.add(y);
						 })
					 }
				}else{
					textStr+=trim+','
					kwSetB.add(trim);
				}
			}
		});	
    	let str     = '';
//			textStr = '';

		for(var val of kwSetB){
			str     += `<span>${val}<i></i></span>`;
//			textStr += `${val},`;
		}
		$('.checkMask .bbh').show().find('.bbhBox').html(str);

		$(this).val(textStr);
		console.log(kwSetB)
    });
    $('.textA').keyup(function (ev) {
        kwSetA = new Set();
        var keycode = ev.which;
        if(keycode == 188 || keycode == 13 || keycode == 229 && $(this).val() != ''){// 键入enter
																						// 同时判断值是否为空
            // console.log('dohao');
			$('.hida').show();
			var txt = $(this).val();
			// 客户误操作输入中文逗号也按英文逗号处理 按逗号分隔数组
			var arrStr;
	        var textStr='';
	        if (txt.indexOf('，') > 0) {
	            arrStr = txt.replace(/，/g, ',').split(',');
	        } else {
	            arrStr = txt.replace(/\n/g, ',').split(',')
	        }

			// var arrStr = txt.replace(/，/g,',').split(',');
	        arrStr.forEach((x) => {
				if(x.trim() != ''){
					var trim = x.trim()
					if(trim.indexOf('（') != -1 ||trim.indexOf('(') != -1){
						trim = trim.replace(/）/g, ')')
						trim = trim.replace(/（/g, '(')
						textStr+=trim+','
						 if(trim.indexOf('|') == -1){
							 var a;
							 var c = [];
							 for(var i=0;i<trim.length;i++){
							 	if(trim[i]==')'){
							 		c.push(trim.substring(a,i).replace(/\(/g,""));
							 		a=i+1
							 	}	
							 }
							 var stra;
							 if(c.length>1){
							 	var d = c[0];
							 	c = c.splice(1);
							 	for(var i=0;i<c.length;i++){
							 		var e = c[i];
							 		var h=[];
							 		h.push(d[0]+'&'+e[0])
							 		d = h;
							 	}
							 	stra = d;
							}else{
								stra = c[0];
							}
								stra.forEach((y) => {
									 kwSetA.add(y);
						 	})
						 }else{
							 var a;
							 var c = [];
							 for(var i=0;i<trim.length;i++){
							 	if(trim[i]==')'){
							 		c.push(trim.substring(a,i).replace(/\(/g,""));
							 		a=i+1
							 	}	
							 }
							 
							var stra;
							 if(c.length>1){
							 	var d = c[0].split('|');
							 	c = c.splice(1);
							 	for(var i=0;i<c.length;i++){
							 		var e = c[i].split('|');
							 		var h=[];
							 		for(var k=0;k<d.length;k++){
							 			for(var j=0;j<e.length;j++){
							 			h.push(d[k]+'&'+e[j])
							 			}
							 		}
							 		d = h;
							 		
							 	}
							 	stra = d;
							 }else{
							 	stra = c[0].split('|');
							 }
							 stra.forEach((y) => {
								 kwSetA.add(y);
							 })
						 }
					}else{
						textStr+=trim+','
						kwSetA.add(trim);
					}
				}
			});	
			
			let str     = '',
//			textStr = '',
		    lastKey = '';
		for(var val of kwSetA){
			console.log(isRepeat(val,$('#myUpdateId').val()));
			if(isRepeat(val,$('#myUpdateId').val()) == true){
				str     += `<span style="background:red">${val}(已存在)<i></i></span>`;
			}else{
				str     += `<span>${val}<i></i></span>`;
			}
//			textStr += `${val},`;
			lastKey = val;
		}
		
		$('.checkMask .zbh').show().find('.zbhBox').html(str);
		$(this).val(textStr);
		console.log($('#myUpdateId').val());
		console.log(lastKey);
			
		}
        
        // 文本域变色
        if ($('.hidc .zbh span').length > 0 || $('.hidc .bbh span').length > 0) {
            $('.textA').css('border-color', '#ccc');
            $('.textA').attr('placeholder','关键词之间空格分割表示与， 逗号分割表示或。');
            if ($('.hidc .bbh span').length <= 0) {
                $('.hida').show();
                $('.bbh').hide();
            }else{
                $('.bbh').show();
            }
        } else {
            $('.hida').hide();
            $('.bbh').hide();
            $('.textA').attr('placeholder','输入不能为空');
            $('.textA').css('border-color', 'red');
        }
         console.log(kwSetA)
    });

    // 文本域变色
    $('.textA').blur(function(){
        if($('.textA').val()!= '') {
            $('.textA').css('border-color', '#ccc');
            $('.textA').attr('placeholder','关键词之间空格分割表示与， 逗号分割表示或。');
        } else {
            $('.hida').hide();
            $('.textA').attr('placeholder','输入不能为空');
            $('.textA').css('border-color', 'red');
        }
    })

    // 删除包含
    $('.hidc li.zbh .zbhBox').on('click','i',function () {
	    $(this).closest('span').remove();
	    kwSetA.delete($(this).closest('span').text());
	    let str = '';
	    for(var val of kwSetA){
			str += `${val},`;
		}
		$('.textA').val(str);
		return false;
	});
	
	// 给右侧搜索框赋值
	$('.hidc li div').on('click','span',function(){
		$('.rightBox').show().find('#kwSrch').val($(this).text().trim()).focus();
	});
	
	
	// 不包含
    $('.textB').keyup(function (ev) {
        kwSetB = new Set();
        var keycode = ev.which;
		if(keycode == 188 || keycode == 13 || keycode == 229 && $(this).val() != ''){// 键入enter
																						// 同时判断值是否为空
// console.log('dohao');
			$('.hida').show();
			var txt = $(this).val();
			// 客户误操作输入中文逗号也按英文逗号处理 按逗号分隔数组
			var arrStr;
	        var textStr='';
	        if (txt.indexOf('，') > 0) {
	            arrStr = txt.replace(/，/g, ',').split(',');
	        } else {
	            arrStr = txt.replace(/\n/g, ',').split(',')
	        }

			// var arrStr = txt.replace(/，/g,',').split(',');
	        arrStr.forEach((x) => {
				if(x.trim() != ''){
					var trim = x.trim()
					if(trim.indexOf('（') != -1 ||trim.indexOf('(') != -1){
						trim = trim.replace(/）/g, ')')
						trim = trim.replace(/（/g, '(')
						textStr+=trim+','
						 if(trim.indexOf('|') == -1){
							 var a;
							 var c = [];
							 for(var i=0;i<trim.length;i++){
							 	if(trim[i]==')'){
							 		c.push(trim.substring(a,i).replace(/\(/g,""));
							 		a=i+1
							 	}	
							 }
							 var stra;
							 if(c.length>1){
							 	var d = c[0];
							 	c = c.splice(1);
							 	for(var i=0;i<c.length;i++){
							 		var e = c[i];
							 		var h=[];
							 		h.push(d[0]+'&'+e[0])
							 		d = h;
							 	}
							 	stra = d;
							}else{
								stra = c[0];
							}
								stra.forEach((y) => {
									 kwSetB.add(y);
						 	})
						 }else{
							 var a;
							 var c = [];
							 for(var i=0;i<trim.length;i++){
							 	if(trim[i]==')'){
							 		c.push(trim.substring(a,i).replace(/\(/g,""));
							 		a=i+1
							 	}	
							 }
							 
							var stra;
							 if(c.length>1){
							 	var d = c[0].split('|');
							 	c = c.splice(1);
							 	for(var i=0;i<c.length;i++){
							 		var e = c[i].split('|');
							 		var h=[];
							 		for(var k=0;k<d.length;k++){
							 			for(var j=0;j<e.length;j++){
							 			h.push(d[k]+'&'+e[j])
							 			}
							 		}
							 		d = h;
							 		
							 	}
							 	stra = d;
							 }else{
							 	stra = c[0].split('|');
							 }
							 stra.forEach((y) => {
								 kwSetB.add(y);
							 })
						 }
					}else{
						textStr+=trim+','
						kwSetB.add(trim);
					}
				}
			});	
				let str     = '';
//					textStr = '';

				for(var val of kwSetB){
					str     += `<span>${val}<i></i></span>`;
//					textStr += `${val},`;
				}
				$('.checkMask .bbh').show().find('.bbhBox').html(str);

				$(this).val(textStr);
		}

        // 文本域变色
        if ($('.hidc .bbh span').length > 0 || $('.hidc .zbh span').length > 0){
            $('.hida').show();
            $('.textB').css('border-color', '#ccc');
            $('.textB').attr('placeholder','关键词之间空格分割表示与， 逗号分割表示或。');
            if ($('.hidc .zbh span').length <= 0) {
                $('.hida').show();
                $('.zbh').hide();
            }else{
                $('.zbh').show();
            }
        } else {
            $('.hida').hide();
            $('.bbh').hide();
            $('.textB').attr('placeholder','输入不能为空');
            $('.textB').css('border-color', 'red');
        }
	
         console.log(kwSetB)
    });

    // 文本域变色
        $('.textB').blur(function(){
            if($('.textB').val()!= '') {
                $('.textB').css('border-color', '#ccc');
                $('.textB').attr('placeholder','关键词之间空格分割表示与， 逗号分割表示或。');
            } else {
                $('.bbh').hide();
                $('.textB').attr('placeholder','输入不能为空');
                $('.textB').css('border-color', 'red');
            }
        })

    // 删除不包含
	$('.hidc li.bbh .bbhBox').on('click','i',function () {
	    $(this).closest('span').remove();
	    kwSetB.delete($(this).closest('span').text().trim());
	    let str = '';
	    for(var val of kwSetB){
	    	
			str += `${val},`;
		}
		$('.textB').val(str);
		return false;
	})
	//第一个图 舆情统计
	var myChart = echarts.init(document.getElementById('kind-statistics'));
	var kind = {
		title : {
			text: '线索库类别信息量',
			x:'center'
		},
		tooltip : {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		legend: {
			x : 'center',
			y : 'bottom',
			data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
		},
		series : [
			{
				name: '访问来源',
				type: 'pie',
				radius : '55%',
				center: ['50%', '50%'],
				data:[
					{value:335, name:'直接访问'},
					{value:310, name:'邮件营销'},
					{value:234, name:'联盟广告'},
					{value:135, name:'视频广告'},
					{value:1548, name:'搜索引擎'}
				],
				itemStyle: {
					emphasis: {
						shadowBlur: 10,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)'
					}
				}
			}
		]
	};
	myChart.setOption(kind);
//舆情统计 滚动条
	$('#sidebar-i').mCustomScrollbar({
		theme:"inset-dark",
	});
	//右侧列表
	var sidebarT = [];
	$('#sidebar-T ul').click(function () {
		$(this).find('li').addClass('mo');
		$(this).find('a').css('color','#fff');
		$(this).siblings('ul').find('li').removeClass('mo');
		$(this).siblings('ul').find('a').css('color','#666');
		sidebarT.length = 0;
		sidebarT.push($(this).index());
	});
	$("#sidebar-T li").each(function () {
		$(this).attr("title", $(this).text());
		$(this).css("cursor", 'pointer');
	});

	$('#sidebar-T ul li').eq(1).each(function(index){
		var s = $(this).html();
		s = autoAddEllipsis(s, 20);
		$(this).html(s);
	})

	$('#sidebar').mCustomScrollbar({
			theme:"inset-dark",
	});
	//广电右侧列表
	var sidebarL = [];
	$('#sidebar-L ul').click(function () {
		$(this).find('li').addClass('mo');
		$(this).find('a').css('color','#fff');
		$(this).siblings('ul').find('li').removeClass('mo');
		$(this).siblings('ul').find('a').css('color','#666');
		sidebarL.length = 0;
		sidebarL.push($(this).index());
	});
	$("#sidebar-L li").each(function () {
		$(this).attr("title", $(this).text());
		$(this).css("cursor", 'pointer');
	});

	$('#sidebar-L ul li').eq(1).each(function(index){
		var s = $(this).html();
		s = autoAddEllipsis(s, 20);
		$(this).html(s);
	})

	function autoAddEllipsis(str, cutLength){
		var len = 0;
		for (var i=0; i<str.length; i++) {
			var c = str.charCodeAt(i);
			//单字节加1
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


	$('.mblog h1 p').each(function(){
		$(this).click(function(){
			$(this).addClass('p').siblings('.mblog h1 p').removeClass('p');
		})
	})

	$('.wechat h1 p').each(function(){
		$(this).click(function(){
			$(this).addClass('p').siblings('.wechat h1 p').removeClass('p');
		})
	})
	//第二个 云图
	var keywords = {
		"colorMappingBy": 85,
		"id": 18,
		"blurSize": 85,
		"minOpacity": 50,
		"maxOpacity": 54,
		"prevIcon": 12,
		"children": 21,
		"shape": 98,
		"nextIcon": 12,
		"showNextBtn": 17,
		"stopIcon": 21,
		"visibleMin": 83,
		"visualDimension": 97,
		"colorSaturation": 56,
		"colorAlpha": 66,
		"emptyItemWidth": 10,
		"inactiveOpacity": 4,
		"activeOpacity": 4,
		"showPrevBtn": 19,
		"playIcon": 26,
		"ellipsis": 19,
		"gapWidth": 19,
		"borderColorSaturation": 10,
		"handleIcon": 2,
		"handleStyle": 6,
		"borderType": 1,
		"constantSpeed": 1,
		"polyline": 2,
		"blendMode": 1,
		"dataBackground": 1,
		"textAlign": 1,
		"textBaseline": 1,
		"brush": 3
	};
	var world = echarts.init(document.getElementById('worldcloud'));
	var data = [];
	for (var key in keywords) {
		data.push({
			name: key,
			value: Math.sqrt(keywords[key])
		})
	}
	var option = {
		tooltip : {},
		series : [ {
			type : 'wordCloud',
			shape:'circle',
			gridSize : 2,
			sizeRange : [ 6, 32 ],
			rotationRange : [ 46, 80 ],
			textStyle : {
				normal : {
					color : function() {
						return 'rgb('
							+ [ Math.round(Math.random() * 160),
								Math.round(Math.random() * 160),
								Math.round(Math.random() * 160) ]
								.join(',') + ')';
					}
				},
				emphasis : {
					shadowBlur : 10,
					shadowColor : '#333'
				}
			},
			data : data
		} ]
	};
	world.setOption(option);

	//第三个  影响力趋势
	$('#influence_trend_line').css('width',$(window).width()*0.62);
	var influence_trend_line = echarts.init(document.getElementById('influence_trend_line'));

	option = {
		tooltip : {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				crossStyle: {
					color: '#999'
				}
			}
		},
		toolbox: {
			show : true,
			feature: {
				dataView: {show: true, readOnly: false},
				magicType: {show: true, type: ['line', 'bar']},
				restore: {show: true},
				saveAsImage: {show: true}
			}
		},
		calculable : true,
		grid: {
			top: '12%',
			left: '1%',
			right: '10%',
			containLabel: true
		},
		xAxis: [
			{
				type: 'category',
				bordercolor:'blue',
				data: ['17-07-20 00时','17-07-20 01时','17-07-20 02时','17-07-20 03时','17-07-20 04时','17-07-20 05时','17-07-20 06时','17-07-20 07时','17-07-20 08时','17-07-20 09时','17-07-20 10时','17-07-20 11时','17-07-20 11时','17-07-20 12时'],
			}
		],
		yAxis: [
			{
				type : 'value',
				name : '情感波动',
				axisLabel: {
					formatter: function (a) {
						a = +a;
						return isFinite(a)
							? echarts.format.addCommas(+a * 1000)
							: '';
					}
				}
			}
		],
		dataZoom: [
			{
				show: true,
				xAxisIndex: 0,
				filterMode: 'empty',
				width: '90%',
				height: 30,
				showDataShadow: false,
				left: '5%'
			},
		],
		series : [
			{
				name: '趋势',
				type: 'line',
				data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
			}
		]
	};

	influence_trend_line.setOption(option);


	//第四个 影响力评价
	var influence_evaluate_watch = echarts.init(document.getElementById('influence_evaluate_watch'));
	option = {
	    title: {
	        text: '',
	        subtext: '',
	        left: 'center',
	        padding: [140, 0],
	        link: 'http://www.baidu.com'
	    },
	    backgroundColor: '',
	    tooltip: {
	        formatter: '<div style="text-align: center;">影响力评价</div>{b} : {c}'
	    },
	    toolbox: {
	        feature: {
	            restore: {},
	            saveAsImage: {}
	        }
	    },
	    series: [{
	        axisLine: {
	            show: true,
	            lineStyle: {
	                color: [
	                    [0.25, '#91c7ae'],
	                    [0.75, '#EFC631'],
	                    [1, '#c23531']
	                ],
	                width: 30
	            }
	        },
	        axisTick: {
	            show: true
	        },
	        axisLabel: {
	            distance: 6,
	            textStyle: {
	                color: 'auto'
	            }
	        },
	        itemStyle: {
	            normal: {
	                color: 'auto'
	            }
	        },
	        radius: '100%',
	        pointer: {
	            width: 10
	        },
	        title: {
	        	textStyle:{
	              fontSize:24,
	              color:'#EFC631'
	            },
	            offsetCenter: [0, '80%']
	        },
	        detail: {
	            textStyle: {
	                fontWeight: 'bolder',
	                fontSize: 16,
	                color: 'black'
	            },
	            offsetCenter: [0, '58%'],
	            formatter: '{value}'
	        },
	        min: 0,
	        max: 100,
	        name: '米类仪表盘',
	        type: 'gauge',
	        show: false,
	        splitNumber: 8,
	
	        data: [{
	            value: '33',
	            name: '影响一般'
	        }]
	    }]
	};
	influence_evaluate_watch.setOption(option, true);

	//第五个图表  事件阶段演化
	
	$('#report').css('width',$(window).width()*0.96);
//	$.ajax({
//		url:'/IOPM/Subject/SubjectAction_consensusByKeyWord.action',
//		type:'post',
//		data:{},
//		dataType:'json',
//		success:function(data){
//			console.log(data)
//			alert('chen')
//		},
//		erorr:function(){
//			alert('错误')
//		}
//	})
	var report1 = echarts.init(document.getElementById('report'));
	option = {
		tooltip : {
			trigger: 'axis',
			axisPointer : {
				type : 'shadow'
			}
		},
		legend: {
			data:['主流媒体信息量','总信息量','微博','微信','新闻','论坛','app','视频']
		},
		toolbox: {
			show : true,
			feature : {
				mark : {show: true},
				dataView : {show: true, readOnly: false},
				magicType: {show: true, type: ['line', 'bar']},
				restore : {show: true},
				saveAsImage : {show: true}
			}
		},
		xAxis: [
			{
				type : 'category',
				data: ['17-07-20 00时','17-07-20 01时','17-07-20 02时','17-07-20 03时','17-07-20 04时','17-07-20 05时','17-07-20 06时','17-07-20 07时','17-07-20 08时','17-07-20 09时','17-07-20 10时','17-07-20 11时','17-07-20 11时','17-07-20 12时'],
			}
		],
		yAxis: [
			{
				type: 'value'
			}
		],
		dataZoom: [
			{
				show: true,
				xAxisIndex: 0,
				filterMode: 'empty',
				width: '90%',
				height: 30,
				showDataShadow: false,
				left: '5%'
			},
		],
		series : [

			{
				name:'主流媒体信息量',
				type:'line',
				barWidth : 5,
				data:[620, 732, 701, 734, 1090, 1130, 1120]
			},
			{
				name:'总信息量',
				type:'line',
				barWidth : 5,
				data:[120, 132, 101, 134, 290, 230, 220]
			},
			{
				name:'微博',
				type:'line',
				barWidth : 5,
				data:[60, 72, 71, 74, 190, 130, 110]
			},
			{
				name:'微信',
				type:'line',
				barWidth : 5,
				data:[120, 132, 101, 134, 290, 230, 220]
			},
			{
				name:'新闻',
				type:'line',
				barWidth : 5,
				data:[60, 72, 71, 74, 190, 130, 110]
			},
			{
				name:'论坛',
				type:'line',
				barWidth : 5,
				data:[120, 132, 101, 134, 290, 230, 220]
			},
			{
				name:'app',
				type:'line',
				barWidth : 5,
				data:[60, 72, 71, 74, 190, 130, 110]
			},
			{
				name:'视频',
				type:'line',
				barWidth : 5,
				data:[120, 132, 101, 134, 290, 230, 220]
			}
		]
	};
	report1.setOption(option);

	
	//第六个图表  新闻媒体传播趋势
	$('#spread_news_img').css('width',$(window).width()*0.6);
	$.ajax({
		url:'/IOPM/Subject/SubjectAction_evenStage.action',
		type:'post',
		data:{},
		datatype:'json',
		success:function(data){
			data = JSON.parse(data)
			var VIPCount = data.VIPCount
			var badEmiton = data.badEmiton
			var TIME = []
			var VIPCOUNT = []
			var BAD_EMOTION = []
			for(var i=0;i<VIPCount.length;i++){
				TIME.push(VIPCount[i].TIME)
				VIPCOUNT.push(VIPCount[i].VIPCOUNT)
			}
			for(var j=0;j<badEmiton.length;j++){
				BAD_EMOTION.push(badEmiton[j].BAD_EMOTION)
			}
			
			var spread_news_img = echarts.init(document.getElementById('spread_news_img'));
			option = {
				title : {
					text: '主流媒体信息量'
				},
				tooltip : {
					trigger: 'axis',
					axisPointer : {
						type : 'shadow'
					}
				},
				legend: {
					data:['总信息量','负面信息量']
				},
				toolbox: {
					show : true,
					feature : {
						dataView : {show: true, readOnly: false},
						magicType : {show: true, type: ['line', 'bar']},
						restore : {show: true},
						saveAsImage : {show: true}
					}
				},
				calculable : true,
				xAxis: [
					{
						type : 'category',
						data:TIME
					}
				],
				yAxis : [
					{
						type : 'value'
					}
				],
				dataZoom: [
					{
						show: true,
						xAxisIndex: 0,
						filterMode: 'empty',
						width: '90%',
						height: 30,
						showDataShadow: false,
						left: '5%'
					},
				],
				series : [
					{
						name:'总信息量',
						type:'line',
						barWidth : 5,
						data:VIPCOUNT,
						markPoint : {
							data : [
								{type : 'max', name: '最大值'},
								{type : 'min', name: '最小值'}
							]
						},
						markLine : {
							data : [
								{type : 'average', name: '平均值'}
							]
						}
					},
					{
						name:'负面信息量',
						type:'line',
						barWidth : 5,
						data:BAD_EMOTION,
						markPoint : {
							data : [
								{type : 'max', name: '最大值'},
								{type : 'min', name: '最小值'}
							]
						},
						markLine : {
							data : [
								{type : 'average', name: '平均值'}
							]
						}
					}
				]
			};
			spread_news_img.setOption(option);
		},
		erorr:function(){
			alert('错误')
		}
	})
	

	//第七个图表  境内论坛传播趋势
	$('#spread_forum_img').css('width',$(window).width()*0.615);
	var spread_forum_img = echarts.init(document.getElementById('spread_forum_img'));
	option = {
		title : {
			text: '境内信息量'
		},
		tooltip : {
			trigger: 'axis',
			axisPointer : {
				type : 'shadow'
			}
		},
		toolbox: {
			show : true,
			feature : {
				dataView : {show: true, readOnly: false},
				magicType : {show: true, type: ['line', 'bar']},
				restore : {show: true},
				saveAsImage : {show: true}
			}
		},
		calculable : true,
		xAxis: [
			{
				type : 'category',
				data: ['17-07-20 00时','17-07-20 01时','17-07-20 02时','17-07-20 03时','17-07-20 04时','17-07-20 05时','17-07-20 06时','17-07-20 07时','17-07-20 08时','17-07-20 09时','17-07-20 10时','17-07-20 11时','17-07-20 11时','17-07-20 12时'],
			}
		],
		yAxis : [
			{
				type : 'value'
			}
		],
		dataZoom: [
			{
				show: true,
				xAxisIndex: 0,
				filterMode: 'empty',
				width: '90%',
				height: 30,
				showDataShadow: false,
				left: '5%'
			},
		],
		series : [
			{
				name:'境内',
				type:'line',
				barWidth : 5,
				data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
				markPoint : {
					data : [
						{type : 'max', name: '最大值'},
						{type : 'min', name: '最小值'}
					]
				},
				markLine : {
					data : [
						{type : 'average', name: '平均值'}
					]
				}
			},
		]
	};
	    spread_forum_img.setOption(option);

	
	
	//第八个图表  微博传播统计
	   
	$('#spread_mblog_img').css('width',$(window).width()*0.95);
	 $.ajax({
	    	url:'/IOPM/Subject/SubjectAction_weiboCount.action',
	    	type:'post',
	    	data:{},
	    	dataType:'json',
	    	success:function(data){
	    		var TIME = []
	    		var WEIBO = []
	    		for(var i=0;i<data.length;i++){
	    			TIME.push(data[i].TIME)
	    			WEIBO.push(data[i].WEIBOCOUNT);
	    		}
	    		var spread_mblog_img = echarts.init(document.getElementById('spread_mblog_img'));
	    		option = {
	    			tooltip : {
	    				trigger: 'axis',
	    				axisPointer : {
	    					type : 'shadow'
	    				}
	    			},
	    			legend: {
	    				data:['腾讯微博']
	    			},
	    			toolbox: {
	    				show : true,
	    				feature : {
	    					mark : {show: true},
	    					dataView : {show: true, readOnly: false},
	    					magicType: {show: true, type: ['line', 'bar']},
	    					restore : {show: true},
	    					saveAsImage : {show: true}
	    				}
	    			},
	    			xAxis: [
	    				{
	    					type : 'category',
	    					data: TIME
	    				}
	    			],
	    			yAxis: [
	    				{
	    					type: 'value'
	    				}
	    			],
	    			dataZoom: [
	    				{
	    					show: true,
	    					xAxisIndex: 0,
	    					filterMode: 'empty',
	    					width: '90%',
	    					height: 30,
	    					showDataShadow: false,
	    					left: '5%'
	    				},
	    			],
	    			series : [

	    				{
	    					name:'腾讯微博',
	    					type:'line',
	    					barWidth : 5,
	    					data:WEIBO
	    				}
	    			]
	    		};
	    		spread_mblog_img.setOption(option);
	    	},
	    	erorr:function(){
	    		alert('错误')
	    	}
	    })
	    
	    
	    //微博列表
	    $.ajax({
	    	url:'/IOPM/Subject/SubjectAction_weiboTrendRank.action',
	    	type:'post',
	    	data:{},
	    	dataType:'json',
	    	success:function(data){
	    		var html = '<ul><li>排名</li><li>标题</li><li>时间</li><li>站点</li></ul>';
	    		var early = data.early
	    		for(var i=0;i<early.length;i++){
	    			html+= '<ul><li>'+(i+1)+'</li><li>'+early[i].TITLE+'</li><li>'+early[i].RELEASE_TIME+'</li><li>'+early[i].WEBSITE_NAME+'</li></ul>'
	    		}
	    		$('#sidebar-W').html(html)
	    	},
	    	erorr:function(){
	    		alert('错误')
	    	}
	    })
	    
	    
	    $('.mblog h1 p').eq(0).click(function(){
	    	$.ajax({
	    		url:'/IOPM/Subject/SubjectAction_weiboTrendRank.action',
		    	type:'post',
		    	data:{},
		    	dataType:'json',
		    	success:function(data){
		    		var html = '<ul><li>排名</li><li>标题</li><li>时间</li><li>站点</li></ul>';
		    		var early = data.early
		    		for(var i=0;i<early.length;i++){
		    			html+= '<ul><li>'+(i+1)+'</li><li>'+early[i].TITLE+'</li><li>'+early[i].RELEASE_TIME+'</li><li>'+early[i].WEBSITE_NAME+'</li></ul>'
		    		}
		    		$('#sidebar-W').html(html)
		    	},
		    	erorr:function(){
		    		alert('错误')
		    	}
	    	})
	    })
	    
	    $('.mblog h1 p').eq(1).click(function(){
	    	$.ajax({
	    		url:'/IOPM/Subject/SubjectAction_weiboTrendRank.action',
		    	type:'post',
		    	data:{},
		    	dataType:'json',
		    	success:function(data){
		    		var html = '<ul><li>排名</li><li>标题</li><li>时间</li><li>站点</li></ul>';
		    		var transmit = data.transmit
		    		for(var i=0;i<transmit.length;i++){
		    			html+= '<ul><li>'+(i+1)+'</li><li>'+transmit[i].TITLE+'</li><li>'+transmit[i].RELEASE_TIME+'</li><li>'+transmit[i].WEBSITE_NAME+'</li></ul>'
		    		}
		    		$('#sidebar-W').html(html)
		    	},
		    	erorr:function(){
		    		alert('错误')
		    	}
	    	})
	    })
	    
	    $('.mblog h1 p').eq(2).click(function(){
	    	$.ajax({
	    		url:'/IOPM/Subject/SubjectAction_weiboTrendRank.action',
		    	type:'post',
		    	data:{},
		    	dataType:'json',
		    	success:function(data){
		    		var html = '<ul><li>排名</li><li>标题</li><li>时间</li><li>站点</li></ul>';
		    		var upMax = data.upMax
		    		for(var i=0;i<upMax.length;i++){
		    			html+= '<ul><li>'+(i+1)+'</li><li>'+upMax[i].TITLE+'</li><li>'+upMax[i].RELEASE_TIME+'</li><li>'+upMax[i].WEBSITE_NAME+'</li></ul>'
		    		}
		    		$('#sidebar-W').html(html)
		    	},
		    	erorr:function(){
		    		alert('错误')
		    	}
	    	})
	    })
	    
	    $('.mblog h1 p').eq(3).click(function(){
	    	$.ajax({
	    		url:'/IOPM/Subject/SubjectAction_weiboTrendRank.action',
		    	type:'post',
		    	data:{},
		    	dataType:'json',
		    	success:function(data){
		    		var html = '<ul><li>排名</li><li>标题</li><li>时间</li><li>站点</li></ul>';
		    		var comment = data.early
		    		for(var i=0;i<comment.length;i++){
		    			html+= '<ul><li>'+(i+1)+'</li><li>'+comment[i].TITLE+'</li><li>'+comment[i].RELEASE_TIME+'</li><li>'+comment[i].WEBSITE_NAME+'</li></ul>'
		    		}
		    		$('#sidebar-W').html(html)
		    	},
		    	erorr:function(){
		    		alert('错误')
		    	}
	    	})
	    })
	    $.ajax({
	    	url:'/IOPM/Subject/SubjectAction_weiboTrendRandText.action',
	    	type:'post',
	    	data:{},
	    	dataType:'json',
	    	success:function(data){
	    		var html = data.text
	    		$('#spread_mblog_summary dd').html(html)
	    	}
	    })
	  
	

	//第九个图表  微信传播统计
	$('#spread_wechat_img').css('width',$(window).width()*0.95);
	$.ajax({
		url:'/IOPM/Subject/SubjectAction_weixinCount.action',
		type:'post',
		data:{},
		dataType:'json',
		success:function(data){
			var WEIXIN = []
			var TIME = []
			for(var i =0;i<data.length;i++){
				WEIXIN.push(data[i].WEIXINCOUNT)
				TIME.push(data[i].TIME)
			}
			var spread_wechat_img = echarts.init(document.getElementById('spread_wechat_img'));
			option = {
				tooltip : {
					trigger: 'axis',
					axisPointer : {
						type : 'shadow'
					}
				},
				legend: {
					data:['微信']
				},
				toolbox: {
					show : true,
					feature : {
						mark : {show: true},
						dataView : {show: true, readOnly: false},
						magicType: {show: true, type: ['line', 'bar']},
						restore : {show: true},
						saveAsImage : {show: true}
					}
				},
				xAxis: [
					{
						type : 'category',
						data:TIME
					}
				],
				yAxis: [
					{
						type: 'value'
					}
				],
				dataZoom: [
					{
						show: true,
						xAxisIndex: 0,
						filterMode: 'empty',
						width: '90%',
						height: 30,
						showDataShadow: false,
						left: '5%'
					},
				],
				series : [

					{
						name:'微信',
						type:'line',
						barWidth : 5,
						data:WEIXIN
					}
				]
			};
			spread_wechat_img.setOption(option);
		},
		erorr:function(){
			alert('失败')
		}
	})
	
	//微信列表
	    $.ajax({
	    	url:'/IOPM/Subject/SubjectAction_weixinTrendRank.action',
	    	type:'post',
	    	data:{},
	    	dataType:'json',
	    	success:function(data){
	    		var html = '<ul><li>排名</li><li>标题</li><li>时间</li><li>站点</li></ul>';
	    		var early = data.early
	    		for(var i=0;i<early.length;i++){
	    			html+= '<ul><li>'+(i+1)+'</li><li>'+early[i].TITLE+'</li><li>'+early[i].RELEASE_TIME+'</li><li>'+early[i].WEBSITE_NAME+'</li></ul>'
	    		}
	    		$('#sidebar-C').html(html)
	    	},
	    	erorr:function(){
	    		alert('错误')
	    	}
	    })
	    
	    
	    $('.wechat h1 p').eq(0).click(function(){
	    	$.ajax({
	    		url:'/IOPM/Subject/SubjectAction_weixinTrendRank.action',
		    	type:'post',
		    	data:{},
		    	dataType:'json',
		    	success:function(data){
		    		var html = '<ul><li>排名</li><li>标题</li><li>时间</li><li>站点</li></ul>';
		    		var early = data.early
		    		for(var i=0;i<early.length;i++){
		    			html+= '<ul><li>'+(i+1)+'</li><li>'+early[i].TITLE+'</li><li>'+early[i].RELEASE_TIME+'</li><li>'+early[i].WEBSITE_NAME+'</li></ul>'
		    		}
		    		$('#sidebar-C').html(html)
		    	},
		    	erorr:function(){
		    		alert('错误')
		    	}
	    	})
	    })
	   
	    
	    $('.wechat h1 p').eq(1).click(function(){
	    	$.ajax({
	    		url:'/IOPM/Subject/SubjectAction_weixinTrendRank.action',
		    	type:'post',
		    	data:{},
		    	dataType:'json',
		    	success:function(data){
		    		
		    		var html = '<ul><li>排名</li><li>标题</li><li>时间</li><li>站点</li></ul>';
		    		var upMax = data.upMax
		    		for(var i=0;i<upMax.length;i++){
		    			html+= '<ul><li>'+(i+1)+'</li><li>'+upMax[i].TITLE+'</li><li>'+upMax[i].RELEASE_TIME+'</li><li>'+upMax[i].WEBSITE_NAME+'</li></ul>'
		    		}
		    		$('#sidebar-C').html(html)
		    	},
		    	erorr:function(){
		    		alert('错误')
		    	}
	    	})
	    })
	    
	    $('.wechat h1 p').eq(2).click(function(){
	    	$.ajax({
	    		url:'/IOPM/Subject/SubjectAction_weixinTrendRank.action',
		    	type:'post',
		    	data:{},
		    	dataType:'json',
		    	success:function(data){
		    		var html = '<ul><li>排名</li><li>标题</li><li>时间</li><li>站点</li></ul>';
		    		var comment = data.comment
		    		for(var i=0;i<comment.length;i++){
		    			html+= '<ul><li>'+(i+1)+'</li><li>'+comment[i].TITLE+'</li><li>'+comment[i].RELEASE_TIME+'</li><li>'+comment[i].WEBSITE_NAME+'</li></ul>'
		    		}
		    		$('#sidebar-C').html(html)
		    	},
		    	erorr:function(){
		    		alert('错误')
		    	}
	    	})
	    })
	    
	    
	     $.ajax({
	    	url:'/IOPM/Subject/SubjectAction_weixinTrendRandText.action',
	    	type:'post',
	    	data:{},
	    	dataType:'json',
	    	success:function(data){
	    		var html = data.text
	    		html=html.substring(0,300)+'...'
	    		$('#spread_wechat_summary dd').html(html)
	    	}
	    })

	//第十个图表  网民情感波动
	$('#opinion_emotion_img_trend_line').css('width',$(window).width()*0.615);
	var opinion_emotion_img_trend_line = echarts.init(document.getElementById('opinion_emotion_img_trend_line'));
	option = {
		tooltip : {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				crossStyle: {
					color: '#999'
				}
			}
		},
		toolbox: {
			show : true,
			feature: {
				dataView: {show: true, readOnly: false},
				magicType: {show: true, type: ['line', 'bar']},
				restore: {show: true},
				saveAsImage: {show: true}
			}
		},
		calculable : true,
		legend: {
			data:['正面', '负面','中立'],
		},
		grid: {
			top: '12%',
			left: '1%',
			right: '10%',
			containLabel: true
		},
		xAxis: [
			{
				type: 'category',
				bordercolor:'blue',
				data: ['17-07-20 00时','17-07-20 01时','17-07-20 02时','17-07-20 03时','17-07-20 04时','17-07-20 05时','17-07-20 06时','17-07-20 07时','17-07-20 08时','17-07-20 09时','17-07-20 10时','17-07-20 11时','17-07-20 11时','17-07-20 12时'],
			}
		],
		yAxis: [
			{
				type : 'value',
				name : '情感波动',
				axisLabel: {
					formatter: function (a) {
						a = +a;
						return isFinite(a)
							? echarts.format.addCommas(+a * 1000)
							: '';
					}
				}
			}
		],
		dataZoom: [
			{
				show: true,
				xAxisIndex: 0,
				filterMode: 'empty',
				width: '90%',
				height: 30,
				showDataShadow: false,
				left: '5%'
			},
		],
		series : [
			{
				name: '正面',
				type: 'line',
				data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
			},
			{
				name: '负面',
				type: 'line',
				data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]

			},
			{
				name: '中立',
				type: 'line',
				data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
			}
		]
	};

	opinion_emotion_img_trend_line.setOption(option);

	
	//第十一个图表  网民情感分布
	$('#opinion_emotion_img_distribute').css('width',$(window).width()*0.295);
	var opinion_emotion_img_distribute = echarts.init(document.getElementById('opinion_emotion_img_distribute'));
	option = {
		title : {
			text: '情感倾向信息量',
			//subtext: '纯属虚构',
			x:'center'
		},
		tooltip : {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		legend: {
			orient: 'vertical',
			left: 'left',
			data: ['正面','负面','中立']
		},
		series : [
			{
				name: '情感倾向',
				type: 'pie',
				radius: ['50%', '70%'],
				center: ['50%', '60%'],
				data:[
					{value:335, name:'正面'},
					{value:310, name:'负面'},
					{value:234, name:'中立'}
				],
				itemStyle: {
					emphasis: {
						shadowBlur: 10,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)'
					}
				}
			}
		]
	};
	opinion_emotion_img_distribute.setOption(option);
	
	//第九个图表  网民互动及传播关键点分析
//$('#wlya').css('width',$(window).width()*0.8);
//	var wlya = echarts.init(document.getElementById('wlya'));
//	wlya.showLoading();
//	$.getJSON('data/npmdepgraph.json', function (json) {
//	    wlya.hideLoading();
//	    wlya.setOption(option = {
//
//	        animationDurationUpdate: 1500,
//	        animationEasingUpdate: 'quinticInOut',
//	        series : [
//	            {
//	                type: 'graph',
//	                layout: 'none',
//	                // progressiveThreshold: 700,
//	                data: json.nodes.map(function (node) {
//	                    return {
//	                        x: node.x,
//	                        y: node.y,
//	                        id: node.id,
//	                        name: node.label,
//	                        symbolSize: node.size,
//	                        itemStyle: {
//	                            normal: {
//	                                color: node.color
//	                            }
//	                        }
//	                    };
//	                }),
//	                edges: json.edges.map(function (edge) {
//	                    return {
//	                        source: edge.sourceID,
//	                        target: edge.targetID
//	                    };
//	                }),
//	                label: {
//	                    emphasis: {
//	                        position: 'right',
//	                        show: true
//	                    }
//	                },
//	                roam: true,
//	                focusNodeAdjacency: true,
//	                lineStyle: {
//	                    normal: {
//	                        width: 0.8,
//	                        curveness: 0.3,
//	                        opacity: 0.7
//	                    }
//	                }
//	            }
//	        ]
//	    }, true);
//	});
	
	
	
});
//判断是否重复
function isRepeat(keyword,id){
	var isTrue = false;
	$.ajax({
		type:"post",
		url:"/IOPM/KeyClues/KeyCluesAction_isRepeat.action",
		data:{'keyword2':keyword,
		      'id':id},
		async:false,
		success:function(msg){
			var obj = eval("("+msg+")");
			if(obj.info == 1){
				console.log("您刚填写的关键词 "+keyword+" 已存在");
				isTrue = true;
			}
		},
		error:function(msg){
			alert("error");
		}
	});
	return isTrue;
}





