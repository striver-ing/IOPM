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
			$('[auth_for_show_hide="'+(parseInt($(this).find('span').attr('auth_code')))+'"]').hide();
		}else{
			$(this).find('span').addClass('on_click').removeClass('off_click').text('ON').siblings('p').toggleClass('when_off');
			$('[auth_for_show_hide="'+(parseInt($(this).find('span').attr('auth_code')))+'"]').show();
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
	
	//联想搜索
		$('.srhText').keyup(function(ev){
			if($(this).val() != ''){
				var text = $(this).val()
				$.ajax({
					url:'/IOPM/Subject/SubjectAction_searchSubjectLikeByName.action',
					type:'post',
					data:{"subjectName":text},
					dataType:'json',
					success:function(data){
						if(data != ''){
							var html = '';
							for(var i=0;i<data.length;i++){
								html+='<li id='+data[i].ID+'>'+data[i].NAME+'</li>'
							}
							$('#lenovo').html(html)
							if($('#lenovo').children().length == 0){
								$('#len').hide()
							}else{
								$('#len').show()
								$('#lenovo li').each(function(){
									$(this).mouseover(function(){
										$(this).css('background','#ccc')
										$(this).click(function(){
											$('.srhText').val($(this).html())
											$('.srhText').attr('name',$(this).attr('id'))
											$('#len').hide()
										})
									})
									$(this).mouseout(function(){
										$(this).css('background','#fff')
									})
								})
								
							}
						}else{
							$('#len').hide()
						}
					},
					erorr:function(){
						alert(1)
					}
				})
			}else{
				$('#len').hide()
			}
			
		})
		
		
		$('body').click(function(){
			$('#len').hide()
		})
		
	$('#len').mCustomScrollbar({
		theme:"inset-dark"
	});
		$('#inlblock').click(function(){
			$.ajax({
				url:'/IOPM/Subject/SubjectAction_searchSubject.action',
				type:'post',
				data:{"name":$('.srhText').val()},
				dataType:'json',
				success:function(data){
					if(data == ''){
						alert('专题不存在')
					}else{
						var html = '<dt>专题:</dt><dd id='+data[0].ID+'><a href="#">'+data[0].NAME+'</a></dd>'
						chuan(data[0].ID)
						$('.analyDiv .events dl').html(html)
						$('.analyDiv .events dd').addClass('select')
						$('.srhText').keyup(function(){
							if($(this).val() == ''){
								//渲染专题
								Rendering()
							}
						})
					}
				}
			})
			
		})
	//渲染专题
	if(window.location.href.indexOf('?')+1  == 0){
		Rendering()
	}else{
		var url = window.location.href.slice(window.location.href.indexOf('?')+1).split('&')
		var vars = [];
		var hash = [];
		for(var i=0;i<url.length;i++){
			hash = url[i].split('=');
			vars.push(hash[1])
		}
		var html = '<dt>专题:</dt><dd id='+vars[1]+'><a href="#">'+decodeURI(decodeURI(vars[0]))+'</a></dd>'
		chuan(vars[1])
		$('.analyDiv .events dl').html(html)
		$('.analyDiv .events dd').addClass('select')
		$('.srhText').val(decodeURI(decodeURI(vars[0])))
		$('.srhText').keyup(function(){
			if($('.srhText').val() == ''){
				//渲染专题
				Rendering()
			}
		})
		
	}
	
	
	//点击添加专题
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
	
	//点击确定
	$('#special .btn-primary').click(function(){
		 if ($('.increase #userC').val() == '' || $('.increase #lookStartTime').val() == '' || $('#lookEndTime').val()== '' || $('.textA').val()=='') {
	        	alert('请填写完整');
	            return false;
	        } else {
	        	$.ajax({
	        		url:'/IOPM/Subject/SubjectAction_addSubject.action',
	        		type:'post',
	        		data:{
	        			"name":$('#userC').val(),
	        			"startTime":$('#lookStartTime').val(),
	        			"endTime":$('#lookEndTime').val(),
	        			"keyword1":$('.textA').val(),
	        			"keyword2":$('.textB').val()
	        		},
	        		success:function(){
	        			Rendering()
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
			$.ajax({
				url:'/IOPM/Subject/SubjectAction_searchSubject.action',
				type:'post',
				data:{"name":$('#userC').val()},
				dataType:'json',
				success:function(data){
					if(data == ''){
						$('#userC').css('border-color','#ccc')
						$('#special .btn-primary').css('background','#348fe2')
						$('#special .btn-primary').removeAttr('disabled')
					}else{
						$('#userC').css('border-color','red')
						$('#special .btn-primary').css('background','#ccc')
						$('#special .btn-primary').attr('disabled','disabled')
						alert('该专题已存在')
					}
				}
			})
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
		
		let str     = '';

		for(var val of kwSetA){
			str += `<span>${val}<i></i></span>`;
		}
	
		$('.checkMask .zbh').show().find('.zbhBox').html(str);
		$(this).val(textStr);
		
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
			
			let str     = '';
		for(var val of kwSetA){
			str     += `<span>${val}<i></i></span>`;
//			textStr += `${val},`;
		}
		
		$('.checkMask .zbh').show().find('.zbhBox').html(str);
		$(this).val(textStr);
			
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
	
	
	var jt = 0;
	$('#jt').click(function(){
		jt+=1
		if(jt%2 == 0){
			$('.analyDiv .events').css('height',50)
			$('.analyDiv .events').css('transition','height 1s linear')
			$(this).css('transform','rotate(0deg)')
			$(this).css('transition','all 1s linear')
		}else{
			$('.analyDiv .events').css('height','auto')
			$('.analyDiv .events').css('transition','height 1s linear')
			$(this).css('transform','rotate(180deg)')
			$(this).css('transition','all 1s linear')
		}
	})
	//第二个 云图
//	var keywords = {
//		"colorMappingBy": 85,
//		"id": 18,
//		"blurSize": 85,
//		"minOpacity": 50,
//		"maxOpacity": 54,
//		"prevIcon": 12,
//		"children": 21,
//		"shape": 98,
//		"nextIcon": 12,
//		"showNextBtn": 17,
//		"stopIcon": 21,
//		"visibleMin": 83,
//		"visualDimension": 97,
//		"colorSaturation": 56,
//		"colorAlpha": 66,
//		"emptyItemWidth": 10,
//		"inactiveOpacity": 4,
//		"activeOpacity": 4,
//		"showPrevBtn": 19,
//		"playIcon": 26,
//		"ellipsis": 19,
//		"gapWidth": 19,
//		"borderColorSaturation": 10,
//		"handleIcon": 2,
//		"handleStyle": 6,
//		"borderType": 1,
//		"constantSpeed": 1,
//		"polyline": 2,
//		"blendMode": 1,
//		"dataBackground": 1,
//		"textAlign": 1,
//		"textBaseline": 1,
//		"brush": 3
//	};
//	var world = echarts.init(document.getElementById('worldcloud'));
//	var data = [];
//	for (var key in keywords) {
//		data.push({
//			name: key,
//			value: Math.sqrt(keywords[key])
//		})
//	}
//	var option = {
//		tooltip : {},
//		series : [ {
//			type : 'wordCloud',
//			shape:'circle',
//			gridSize : 2,
//			sizeRange : [ 6, 32 ],
//			rotationRange : [ 46, 80 ],
//			textStyle : {
//				normal : {
//					color : function() {
//						return 'rgb('
//							+ [ Math.round(Math.random() * 160),
//								Math.round(Math.random() * 160),
//								Math.round(Math.random() * 160) ]
//								.join(',') + ')';
//					}
//				},
//				emphasis : {
//					shadowBlur : 10,
//					shadowColor : '#333'
//				}
//			},
//			data : data
//		} ]
//	};
//	world.setOption(option);


	//第七个图表  境内论坛传播趋势
//	$('#spread_forum_img').css('width',$(window).width()*0.615);
//	var spread_forum_img = echarts.init(document.getElementById('spread_forum_img'));
//	option = {
//		title : {
//			text: '境内信息量'
//		},
//		tooltip : {
//			trigger: 'axis',
//			axisPointer : {
//				type : 'shadow'
//			}
//		},
//		toolbox: {
//			show : true,
//			feature : {
//				dataView : {show: true, readOnly: false},
//				magicType : {show: true, type: ['line', 'bar']},
//				restore : {show: true},
//				saveAsImage : {show: true}
//			}
//		},
//		calculable : true,
//		xAxis: [
//			{
//				type : 'category',
//				data: ['17-07-20 00时','17-07-20 01时','17-07-20 02时','17-07-20 03时','17-07-20 04时','17-07-20 05时','17-07-20 06时','17-07-20 07时','17-07-20 08时','17-07-20 09时','17-07-20 10时','17-07-20 11时','17-07-20 11时','17-07-20 12时'],
//			}
//		],
//		yAxis : [
//			{
//				type : 'value'
//			}
//		],
//		dataZoom: [
//			{
//				show: true,
//				xAxisIndex: 0,
//				filterMode: 'empty',
//				width: '90%',
//				height: 30,
//				showDataShadow: false,
//				left: '5%'
//			},
//		],
//		series : [
//			{
//				name:'境内',
//				type:'line',
//				barWidth : 5,
//				data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
//				markPoint : {
//					data : [
//						{type : 'max', name: '最大值'},
//						{type : 'min', name: '最小值'}
//					]
//				},
//				markLine : {
//					data : [
//						{type : 'average', name: '平均值'}
//					]
//				}
//			},
//		]
//	};
//	    spread_forum_img.setOption(option);

	
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
		async:false,
		data:{'keyword2':keyword,
		      'id':id},
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

//渲染专题
function Rendering(){
	
	$.ajax({
		url:'/IOPM/Subject/SubjectAction_selectAllSubject.action',
		type:'post',
		data:{},
		dataType:'json',
		success:function(data){
			var html = '<dt>专题:</dt>';
			for(var i=0;i<data.length;i++){
				html+= '<dd id='+data[i].ID+'><a href="#">'+data[i].NAME+'</a></dd>'
			}
			$('.analyDiv .events dl').html(html)
			if($('.analyDiv .events dl').height()> 50){
				$('#jt').show()
			}else{
				$('#jt').hide()
			}
			$('.analyDiv .events dl dd').eq(0).addClass('select')
			var id = $('.analyDiv dd').eq(0).attr('id')
			chuan(id)
			$('.analyDiv .events dl dd').each(function(){
				$(this).click(function(){
					$(this).addClass('select')
					$(this).siblings('dd').removeClass('select');
					var id = $(this).attr('id')
					chuan(id)
					$('#event_report_title').html('')
					$('#report_start_time').html('')
					$('#report_end_time').html('')
					$('.summary1').html('')
					$('.summary2').html('')
					$('#sidebar-T').html('')
					$('#yuqing').html('')
					$('.table').html('')
					$('#effect_summay dd').html('')
					$('#stage_summary dd').html('')
					$('#spread_news_summary dd').html('')
		    		$('#sidebar-W').html('')
		    		$('#spread_mblog_summary dd').html('')
		    		$('#sidebar-C').html('')
		    		$('#spread_wechat_summary dd').html('')
		    		$('#trace_table tbody').html('')
		    		$('#t').html('')
					$('#yijian').html('')
					$('#positive').html('')
					$('#negative').html('')
					$('#neutral').html('')
					$('#zonghe').html('')
				})
				
			})			
		}
	})
}

//点击专题
function chuan(id){
	w('.main-bgao')
	$('.main-bgao h3').hide()
	$('.main-bgao p').hide()
	$.ajax({
		url:'/IOPM/Subject/SubjectAction_titleAndTimeById.action',
		type:'post',
		data:{"id":id},
		dataType:'json',
		success:function(data){
			$('#event_report_title').attr('title',data.title)
			$('#event_report_title').html(data.title)
			$('#report_start_time').html(data.startTime)
			$('#report_end_time').html(data.endTime)
			$('.main-bgao h3').show()
			$('.main-bgao p').show()
			var id = parseInt(data.id)
			content(id)
			$('.main-bgao .loading').hide()
			$('.main-bgao').css('height','auto')
		},
		erorr:function(){
			$('.main-bgao .loading').hide()
		}
	})	
}

function content(id){
	w('#report_summay')
	w('#yuqi')
	w('#sidebar-i')
	w('#table1')
	w('#sidebar-W')
	w('#effect_summay')
	w('#spread_mblog_summary')
	w('#sidebar-C')
	w('#spread_wechat_summary')
	w('#trace_table')
	w('#trace_summary')
	w('#stage_summary')
	w('#spread_news_summary')
	w('#opinion_emotion_summary')
	w('#pos')
	w('#neu')
	w('#neg')
	w('#zonghe')
	
	//舆情概述
	$.ajax({
		url:'/IOPM/Subject/SubjectAction_startAndEndSbujectById.action',
		type:'post',
		data:{"id":id},
		dataType:'json',
		success:function(data){
			$('.summary1').html(data.Public_sentiment1)
			$('.summary2').html(data.Public_sentiment2)
			$('#report_summay .loading').hide()
			$('#report_summay').css('height','auto')
		},
		erorr:function(){
			$('#report_summay .loading').hide()
		}
	})
	
	
	
	//第一个图 舆情统计
	var myChart = echarts.init(document.getElementById('kind-statistics'));
	myChart.showLoading();
	$.ajax({
		url:'/IOPM/Subject/SubjectAction_getClassifyMsgCount.action',
		type:'post',
		data:{"id":id},
		dataType:'json',
		success:function(data){
			var totalSort = data.totalSort
			var negativeSort = data.negativeSort
			var name = []
			var zong = []
			var da = []
			for(var i=0;i<totalSort.length;i++){
				name.push(totalSort[i].name)
				da.push({value:totalSort[i].totalMsg,name:totalSort[i].name})
			}
			
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
						data:name
					},
					series : [
						{
							name: '访问来源',
							type: 'pie',
							radius : '55%',
							center: ['50%', '50%'],
							data:da,
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
				myChart.hideLoading();
				myChart.setOption(kind);
				//舆情统计排名
				var html1 ='<ul>'+
					          '<li>排名</li>'+
					          '<li>线索类别</li>'+
					          '<li>信息总量</li>'+
					          '<li>负面信息量</li>'+
					      '</ul>'
					
				for(var j=0;j<negativeSort.length;j++){
					html1+='<ul>'+
					          '<li>'+(j+1)+'</li>'+
					          '<li>'+negativeSort[j].name+'</li>'+
					          '<li>'+negativeSort[j].totalMsg+'</li>'+
					          '<li>'+negativeSort[j].negativeEmotionCount+'</li>'+
					      '</ul>'
				}
		
				var html ='<ul>'+
					          '<li>排名</li>'+
					          '<li>线索类别</li>'+
					          '<li>信息总量</li>'+
					          '<li>负面信息量</li>'+
					      '</ul>'
				for(var k=0;k<totalSort.length;k++){
					html+='<ul>'+
					          '<li>'+(k+1)+'</li>'+
					          '<li>'+totalSort[k].name+'</li>'+
					          '<li>'+totalSort[k].totalMsg+'</li>'+
					          '<li>'+totalSort[k].negativeEmotionCount+'</li>'+
					      '</ul>'
				}
	        $('#sidebar-T').html(html)
	        
		        $('#e').change(function(){
					if($(this).val() == 1){
						 $('#sidebar-T').html(html)
						 
					}else {		
						 $('#sidebar-T').html(html1)
					}
				})
				$('#sidebar-i .loading').hide()
				
				var html2=data.summarize
				$('#yuqing').html(html2)
				$('#yuqi').find('.loading').hide()
				$('#yuqi').css('height','auto')
		},
		erorr:function(){
			$('#yuqi').find('.loading').hide()
			myChart.hideLoading();
		}
		
		
	})
	
	
	
	
	
	
	
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


	//第三个  影响力趋势 
	var n;
	$('#influence_trend_line').css('width',$(window).width()*0.62);
	var influence_trend_line = echarts.init(document.getElementById('influence_trend_line'));
	influence_trend_line.showLoading();
	
	var influence_evaluate_watch = echarts.init(document.getElementById('influence_evaluate_watch'));
	influence_evaluate_watch.showLoading();
	$.ajax({
		url:'/IOPM/Subject/SubjectAction_influenceTrends.action',
		type:'post',
		data:{"id":id},
		dataType:'json',
		success:function(data){
			var time=[]
			var value=[]
			for(key in data){
				time.push(key)
				value.push(data[key])
			}

			time.splice(-2,2)
			value.splice(-2,2)

			
			option = {
				tooltip : {
					trigger: 'axis',
					axisPointer:{
						type : 'shadow'
						
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
//						boundaryGap: false,
						data:time
					}
				],
				yAxis: [
					{
						type : 'value',
						name : '情感波动',
//						axisLabel: {
//							formatter: function (a) {
//								a = +a;
//								return isFinite(a)
//									? echarts.format.addCommas(+a * 1000)
//									: '';
//							}
//						}
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
						data:value
					}
				]
			};
			influence_trend_line.hideLoading();
			influence_trend_line.setOption(option);
			
			//第四个 影响力评价
			//var val = Math.ceil(data.effect)
			var val=(data.effect).toFixed(1)
			if(val>0 && val<=20){
				n = '影响较小'
			}else if(val>20 && val<=40){
				n = '影响一般'
			}else if(val>40 && val<=60){
				n = '影响较大'
			}else	if(val>60 && val<=80){
				n = '影响很大'
			}else	if(val>80 || val<=100){
				n = '影响极大'
			}
			option1 = {
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
			            offsetCenter: ['50%', '10%'],
			            formatter: '{value}'
			        },
			        min: 0,
			        max: 100,
			        name: '米类仪表盘',
			        type: 'gauge',
			        show: false,
			        splitNumber: 8,
			
			        data: [{
			            value: val,
			            name: n
			        }]
			    }]
			};
			influence_evaluate_watch.hideLoading();
			influence_evaluate_watch.setOption(option1, true);
			//下边文字
			$('#effect_summay dd').html(data.text);
			$('#effect_summay').find('.loading').hide()
			$('#effect_summay').css('height','auto')
		},
		erorr:function(){
			$('#effect_summay').find('.loading').hide()
			influence_evaluate_watch.hideLoading();
			influence_trend_line.hideLoading();
		}
	})
	function convertCanvasToImage(canvas) {
		var image = new Image();
		console.log(canvas.toDataURL())
		image.src = canvas.toDataURL("image/png");
		return image;
	}
//			console.log($('#influence_trend_line').find('canvas')[0].toDataURL)
//	convertCanvasToImage($('#influence_trend_line').find('canvas'))
	  

	//第五个图表  事件阶段演化
	
	$('#report').css('width',$(window).width()*0.96);
	var report1 = echarts.init(document.getElementById('report'));
	report1.showLoading()
	$.ajax({
		url:'/IOPM/Subject/SubjectAction_consensusByKeyWord.action',
		type:'post',
		data:{"id":id},
		dataType:'json',
		success:function(data){
			var time = []
			var vip =[]
			var all = []
			var weibo = []
			var weixin = []
			var xinwen = []
			var app = []
			var shipin = []
			for(v in data.vipCount){
				time.push(v)
				vip.push(data.vipCount[v])
			}
			for(a in data.allCount){
				all.push(data.allCount[a])
			}
			for(p in data.appCount){
				app.push(data.appCount[p])
			}
			for(wx in data.weixinCount){
				weixin.push(data.weixinCount[wx])
			}
			for(wb in data.weiboCount){
				weibo.push(data.weiboCount[wb])
			}
			for(xw in data.xinwenCount){
				xinwen.push(data.xinwenCount[xw])
			}
			for(sp in data.shipinCount){
				shipin.push(data.shipinCount[sp])
			}
			
			option = {
				tooltip : {
					trigger: 'axis',
					axisPointer : {
						type : 'shadow'
					},
					textStyle:{
						align:'left'
						},
				},
	            color: ["#ffab1b", "#ff0000", "#d21de6", "#21de21", "#07e0ca", "#0000ff", "#ce0ace", "#158cf9", "#e037f7", "#c57d00", "#39a3ff"],
				legend: {
					data:['总信息量','主流媒体信息量','微博','微信','新闻','app','视频']
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
						data:time
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
						name:'总信息量',
						type:'line',
						barWidth : 5,
						data:all
					},
					{
						name:'主流媒体信息量',
						type:'line',
						barWidth : 5,
						data:vip
					},
					{
						name:'微博',
						type:'line',
						barWidth : 5,
						data:weibo
					},
					{
						name:'微信',
						type:'line',
						barWidth : 5,
						data:weixin
					},
					{
						name:'新闻',
						type:'line',
						barWidth : 5,
						data:xinwen
					},
					{
						name:'app',
						type:'line',
						barWidth : 5,
						data:app
					},
					{
						name:'视频',
						type:'line',
						barWidth : 5,
						data:shipin
					}
				]
			};
			report1.hideLoading();
			report1.setOption(option);
			
			$('#stage_summary dd').html(data.text)
			$('#stage_summary').find('.loading').hide()
			$('#stage_summary').css('height','auto')
		},
		erorr:function(){
			$('#stage_summary').find('.loading').hide()
			report1.hideLoading();
		}
	})
	
	
	//第六个图表  新闻媒体传播趋势
	$('#spread_news_img').css('width',$(window).width()*0.6);
	var spread_news_img = echarts.init(document.getElementById('spread_news_img'));
	spread_news_img.showLoading();
	$.ajax({
		url:'/IOPM/Subject/SubjectAction_evenStage.action',
		type:'post',
		data:{"id":id},
		datatype:'json',
		success:function(data){
			data = JSON.parse(data)
			var vipCount = data.vipCount
			var emotion = data.emotion
			var TIME = []
			var VIPCOUNT = []
			var EMOTION = []
			for(key in vipCount){
				TIME.push(key)
				VIPCOUNT.push(vipCount[key])
			}
			for(a in emotion){
				EMOTION.push(emotion[a])
			}
			
			
			option = {
				title : {
					text: '主流媒体信息量'
				},
				tooltip : {
					trigger: 'axis',
					axisPointer : {
						type : 'shadow'
					},
					textStyle:{
						align:'left'
						},
				},
				color:['yellow','red'],
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
						itemStyle : {  
                            normal : {  
                                lineStyle:{  
                                    color:'yellow'  
                                }
                            }
                        },
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
						itemStyle : {  
                            normal : {  
                                lineStyle:{  
                                    color:'red'  
                                }
                            }
                        },
						data:EMOTION,
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
			spread_news_img.hideLoading();
			spread_news_img.setOption(option);
			
			
		},
		erorr:function(){
			spread_news_img.hideLoading();
		}
	})
	
	
	//主流媒体排名
	$.ajax({
		url:'/IOPM/Subject/SubjectAction_mainstreamMedia.action',
		type:'post',
		data:{"id":id},
		dataType:'json',
		success:function(data){
			var vip = data.VIP
			var vipa = data.VIPAndbadEmotion
			var html1 = '<div class="th" id="spread_table_first_line_news">'+
                            '<div class="span span1" style="width:20%;">排名</div>'+
                            '<div class="span span2" style="width:40%;">网站</div>'+
                            '<div class="span" style="width:40%;">负面信息量</div>'+
                        '</div>'
            for(var i=0;i<vipa.length;i++){
            	html1+='<div class="td">'+
                    '<span class="span1" style="width:20%;">'+(i+1)+'</span>'+
                    '<span class="span2" style="width:40%;">'+vipa[i].WEBSIT_NAME+'</span>'+
                    '<span class="region_td" style="width:40%;">'+vipa[i].INFO_COUNT_BAD+'</span>'+
                '</div>'
            } 
			var html = '<div class="th" id="spread_table_first_line_news">'+
                            '<div class="span span1" style="width:20%;">排名</div>'+
                            '<div class="span span2" style="width:40%;">网站</div>'+
                            '<div class="span" style="width:40%;">总信息量</div>'+
                        '</div>'
            for(var i=0;i<vip.length;i++){
            	html+='<div class="td">'+
                    '<span class="span1" style="width:20%;">'+(i+1)+'</span>'+
                    '<span class="span2" style="width:40%;">'+vip[i].WEBSIT_NAME+'</span>'+
                    '<span class="region_td" style="width:40%;">'+vip[i].INFO_COUNT+'</span>'+
                '</div>'
            }                
			$('.table').html(html)
			
			$('#s').change(function(){
				if($(this).val() == 1){
					$('.table').html(html)
				}else {
					$('.table').html(html1)
				}
			})
			$('#table1 .loading').hide()
			
			$('#spread_news_summary dd').html(data.text)
			$('#spread_news_summary').find('.loading').hide()
			$('#spread_news_summary').css('height','auto')
		},
		erorr:function(){
			$('#spread_news_summary').find('.loading').hide()
		}
	})
	
	
	

	
	//第八个图表  微博传播统计
	   
	$('#spread_mblog_img').css('width',$(window).width()*0.95);
	var spread_mblog_img = echarts.init(document.getElementById('spread_mblog_img'));
	spread_mblog_img.showLoading();
	 $.ajax({
	    	url:'/IOPM/Subject/SubjectAction_weiboCount.action',
	    	type:'post',
	    	data:{"id":id},
	    	dataType:'json',
	    	success:function(data){
	    		var TIME = []
	    		var WEIBO = []
	    		for(key in data){
	    			TIME.push(key)
	    			WEIBO.push(data[key]);
	    		}
	    		
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
	    		spread_mblog_img.hideLoading();
	    		spread_mblog_img.setOption(option);
	    	},
	    	erorr:function(){
	    		spread_mblog_img.hideLoading();
	    	}
	    })
	    
	    
	    //微博列表 title-content
	    $.ajax({
	    	url:'/IOPM/Subject/SubjectAction_weiboTrendRank.action',
	    	type:'post',
	    	data:{"id":id},
	    	dataType:'json',
	    	success:function(data){
	    		var html = '<ul><li>排名</li><li>标题</li><li>时间</li><li>站点</li><li>点赞数</li><li>转发数</li><li>评论数</li></ul>';
	    		var early = data.early
	    		for(var i=0;i<early.length;i++){
	    			html+= '<ul><li>'+(i+1)+'</li><li><a title='+early[i].CONTENT+' href='+early[i].URL+' target="_blank">'+early[i].CONTENT.replace(/(\r\n)|(\n)/g,'')+'</a></li><li>'+early[i].RELEASE_TIME+'</li><li>'+early[i].WEBSITE_NAME+'</li><li>'+early[i].UP_COUNT+'</li><li>'+early[i].TRANSMIT_COUNT+'</li><li>'+early[i].COMMENT_COUNT+'</li></ul></ul>'
	    		}
	    		
	    		var html1 = '<ul><li>排名</li><li>标题</li><li>时间</li><li>站点</li><li>点赞数</li><li>转发数</li><li>评论数</li></ul>';
	    		var transmit = data.transmit
	    		for(var j=0;j<transmit.length;j++){
	    			html1+= '<ul><li>'+(j+1)+'</li><li><a title='+transmit[j].CONTENT+' href='+transmit[j].URL+' target="_blank">'+transmit[j].CONTENT.replace(/(\r\n)|(\n)/g,'')+'</a></li><li>'+transmit[j].RELEASE_TIME+'</li><li>'+transmit[j].WEBSITE_NAME+'</li><li>'+transmit[j].UP_COUNT+'</li><li>'+transmit[j].TRANSMIT_COUNT+'</li><li>'+transmit[j].COMMENT_COUNT+'</li></ul></ul>'
	    		}
	    		
	    		var html2 = '<ul><li>排名</li><li>标题</li><li>时间</li><li>站点</li><li>点赞数</li><li>转发数</li><li>评论数</li></ul>';
	    		var upMax = data.upMax
	    		for(var k=0;k<upMax.length;k++){
	    			html2+= '<ul><li>'+(k+1)+'</li><li><a title='+upMax[k].CONTENT+' href='+upMax[k].URL+' target="_blank">'+upMax[k].CONTENT.replace(/(\r\n)|(\n)/g,'')+'</a></li><li>'+upMax[k].RELEASE_TIME+'</li><li>'+upMax[k].WEBSITE_NAME+'</li><li>'+upMax[k].UP_COUNT+'</li><li>'+upMax[k].TRANSMIT_COUNT+'</li><li>'+upMax[k].COMMENT_COUNT+'</li></ul></ul>'
	    		}
	    		
	    		var html3 = '<ul><li>排名</li><li>标题</li><li>时间</li><li>站点</li><li>点赞数</li><li>转发数</li><li>评论数</li></ul>';
				var comment = data.comment
				for(var l=0;l<comment.length;l++){
					html3+= '<ul><li>'+(l+1)+'</li><li><a title='+comment[l].CONTENT+' href='+comment[l].URL+' target="_blank">'+comment[l].CONTENT.replace(/(\r\n)|(\n)/g,'')+'</a></li><li>'+comment[l].RELEASE_TIME+'</li><li>'+comment[l].WEBSITE_NAME+'</li><li>'+comment[l].UP_COUNT+'</li><li>'+comment[l].TRANSMIT_COUNT+'</li><li>'+comment[l].COMMENT_COUNT+'</li></ul></ul>'
				}
				
	    		$('#sidebar-W').html(html)
	    		$('#sidebar-W .loading').hide()
	    		
	    		$('.mblog h1 p').eq(0).click(function(){
			    	$('#sidebar-W').html(html)
			    })
			    
			    $('.mblog h1 p').eq(1).click(function(){
					$('#sidebar-W').html(html1)
			    })
			    
			    $('.mblog h1 p').eq(2).click(function(){
					$('#sidebar-W').html(html2)
			    })
			    
			    $('.mblog h1 p').eq(3).click(function(){
					$('#sidebar-W').html(html3)	
			    })
	    	},
	    	erorr:function(){
	    		alert('错误')
	    	}
	    })
	    
	    
	    
	    $.ajax({
	    	url:'/IOPM/Subject/SubjectAction_weiboTrendRandText.action',
	    	type:'post',
	    	data:{"id":id},
	    	dataType:'json',
	    	success:function(data){
	    		var html = data.text
	    		$('#spread_mblog_summary dd').html(html)
	    		$('#spread_mblog_summary .loading').hide()
	    		$('#spread_mblog_summary ').css('height','auto')
	    	},
			erorr:function(){
				$('#spread_mblog_summary .loading').hide()
			}
	    })
	  
	

	//第九个图表  微信传播统计
	$('#spread_wechat_img').css('width',$(window).width()*0.95);
	 var spread_wechat_img = echarts.init(document.getElementById('spread_wechat_img'));
		spread_wechat_img.showLoading();
	$.ajax({
		url:'/IOPM/Subject/SubjectAction_weixinCount.action',
		type:'post',
		data:{"id":id},
		dataType:'json',
		success:function(data){
			var WEIXIN = []
			var TIME = []
			for(key in data){
				WEIXIN.push(data[key])
				TIME.push(key)
			}
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
			spread_wechat_img.hideLoading();
			spread_wechat_img.setOption(option);
		},
		erorr:function(){
			spread_wechat_img.hideLoading();
		}
	})
	
	//微信列表
	    $.ajax({
	    	url:'/IOPM/Subject/SubjectAction_weixinTrendRank.action',
	    	type:'post',
	    	data:{"id":id},
	    	dataType:'json',
	    	success:function(data){
	    		var html = '<ul><li>排名</li><li>标题</li><li>时间</li><li>站点</li><li>点赞数</li><li>阅读数</li></ul>';
	    		var early = data.early
	    		for(var i=0;i<early.length;i++){
	    			html+= '<ul><li>'+(i+1)+'</li><li><a title='+early[i].TITLE+' href='+early[i].URL+' target="_blank">'+early[i].TITLE.replace(/(\r\n)|(\n)/g,'')+'</a></li><li>'+early[i].RELEASE_TIME+'</li><li>'+early[i].WEBSITE_NAME+'</li><li>'+early[i].UP_COUNT+'</li><li>'+early[i].REVIEW_COUNT+'</li></ul>'
	    		}

	    		var html1 = '<ul><li>排名</li><li>标题</li><li>时间</li><li>站点</li><li>点赞数</li><li>阅读数</li></ul>';
	    		var upMax = data.upMax
	    		for(var j=0;j<upMax.length;j++){
	    			html1+= '<ul><li>'+(j+1)+'</li><li><a title='+upMax[j].TITLE+' href='+upMax[j].URL+' target="_blank">'+upMax[j].TITLE.replace(/(\r\n)|(\n)/g,'')+'</a></li><li>'+upMax[j].RELEASE_TIME+'</li><li>'+upMax[j].WEBSITE_NAME+'</li><li>'+upMax[j].UP_COUNT+'</li><li>'+upMax[j].REVIEW_COUNT+'</li></ul>'
	    		}

	    		var html2 = '<ul><li>排名</li><li>标题</li><li>时间</li><li>站点</li><li>点赞数</li><li>阅读数</li></ul>';
	    		var comment = data.comment
	    		for(var k=0;k<comment.length;k++){
	    			html2+= '<ul><li>'+(k+1)+'</li><li><a title='+comment[k].TITLE+' href='+comment[k].URL+' target="_blank">'+comment[k].TITLE.replace(/(\r\n)|(\n)/g,'')+'</a></li><li>'+comment[k].RELEASE_TIME+'</li><li>'+comment[k].WEBSITE_NAME+'</li><li>'+comment[k].UP_COUNT+'</li><li>'+comment[k].REVIEW_COUNT+'</li></ul>'
	    		}
	    		
	    		$('#sidebar-C').html(html)
	    		$('#sidebar-C .loading').hide()
	    		
	    		$('.wechat h1 p').eq(0).click(function(){
	    	    	$('#sidebar-C').html(html)	
	    	    })
	    	   
	    	    $('.wechat h1 p').eq(1).click(function(){
	        		$('#sidebar-C').html(html1)
	    	    })
	    	    
	    	    $('.wechat h1 p').eq(2).click(function(){
	    	    	$('#sidebar-C').html(html2)
	    	    })
	    	},
	    	erorr:function(){
	    		alert('错误')
	    	}
	    })
	    
	     $.ajax({
	    	url:'/IOPM/Subject/SubjectAction_weixinTrendRandText.action',
	    	type:'post',
	    	data:{"id":id},
	    	dataType:'json',
	    	success:function(data){
	    		var html = data.text
	    		html=html.substring(0,300)+'...'
	    		$('#spread_wechat_summary dd').html(html)
	    		$('#spread_wechat_summary .loading').hide()
	    		$('#spread_wechat_summary').css('height','auto')
	    	},
			erorr:function(){
				$('#spread_wechat_summary .loading').hide()
			}
	    })
	    
	    //事件溯源
	    $.ajax({
	    	url:'/IOPM/Subject/SubjectAction_getTimeInfoType.action',
	    	type:'post',
	    	data:{"id":id},
	    	dataType:'json',
	    	success:function(data){
	    		var gaiShu = data.gaiShu
	    		var paiXu = data.releaseTimePaiXu
	    		var html = '';
	    		var html1='';
	    		for(var i=0;i<paiXu.length;i++){
	    			if(paiXu[i].infoType == 1){
	    				html+='<tr>'+
	    				'<td title="新闻">新闻</td><td title='+paiXu[i].websiteName+'>'+paiXu[i].websiteName+'</td>'+
	    				'<td title='+paiXu[i].title+' style="text-align: left; padding-left: 2%;overflow: hidden;text-overflow: ellipsis;"><p>'+paiXu[i].title+'</p></td>'+
	    				'<td title='+paiXu[i].releaseTime+'>'+paiXu[i].releaseTime+'</td>'+
	    				'<td title='+paiXu[i].url+'style="text-align: left;padding-left: 2%;"><a target="_blank" href='+paiXu[i].url+'>'+paiXu[i].url+'</a></td>'+
	    				'</tr>'
	    			}else if(paiXu[i].infoType == 2){
	    				html+='<tr>'+
	    				'<td title="微信">微信</td><td title='+paiXu[i].websiteName+'>'+paiXu[i].websiteName+'</td>'+
	    				'<td title='+paiXu[i].title+' style="text-align: left; padding-left: 2%;overflow: hidden;text-overflow: ellipsis;"><p>'+paiXu[i].title+'</p></td>'+
	    				'<td title='+paiXu[i].releaseTime+'>'+paiXu[i].releaseTime+'</td>'+
	    				'<td title='+paiXu[i].url+'style="text-align: left;padding-left: 2%;"><a target="_blank" href='+paiXu[i].url+'>'+paiXu[i].url+'</a></td>'+
	    				'</tr>'
	    			}else if(paiXu[i].infoType == 3){
	    				html+='<tr>'+
	    				'<td title="微博">微博</td><td title='+paiXu[i].websiteName+'>'+paiXu[i].websiteName+'</td>'+
	    				'<td title='+paiXu[i].title+' style="text-align: left; padding-left: 2%;overflow: hidden;text-overflow: ellipsis;"><p>'+paiXu[i].title+'</p></td>'+
	    				'<td title='+paiXu[i].releaseTime+'>'+paiXu[i].releaseTime+'</td>'+
	    				'<td title='+paiXu[i].url+'style="text-align: left;padding-left: 2%;"><a target="_blank" href='+paiXu[i].url+'>'+paiXu[i].url+'</a></td>'+
	    				'</tr>'
	    			}
	    			
	    		}
	    		var infotype
	    		if(gaiShu.infoType == 1){
	    			infotype = '新闻'
	    		}else if(gaiShu.infoType == 2){
	    			infotype = '微信'
	    		}else if(gaiShu.infoType == 3){
	    			infotype = '微博'
	    		}
	    		$('#trace_table tbody').html(html);
	    		console.log(gaiShu.websiteName)
	    		if(gaiShu.websiteName==' '|| gaiShu.author==' '){
	    			$('#t').html("")
	    		}else{
	    			html1='经传播溯源分析发现,'+gaiShu.releaseTime +','+gaiShu.author+''+gaiShu.websiteName+'站点发布标题为《'+gaiShu.title+'》的'+infotype+'信息，是该事件传播的源头信息。其后'+gaiShu.firstWebsiteName+'、'+gaiShu.secondWebsiteName+'等站点相继发布相关信息，事件传播影响力渐次扩大.'
	    			$('#t').html(html1)
	    		}
	    		$('#trace_table .loading').hide()
	    		$('#trace_summary .loading').hide()
	    		$('#trace_summary').css('height','auto')
	    	},
			erorr:function(){
				$('#trace_table .loading').hide()
	    		$('#trace_summary .loading').hide()
			}
	    })
	    
	    

	    

	//第十个图表  网民情感波动
	$('#opinion_emotion_img_trend_line').css('width',$(window).width()*0.615);
	var opinion_emotion_img_trend_line = echarts.init(document.getElementById('opinion_emotion_img_trend_line'));
	opinion_emotion_img_trend_line.showLoading();
	$.ajax({
		url:'/IOPM/Subject/SubjectAction_getEmotionBoDong.action',
		type:'post',
		data:{"id":id},
		dataType:'json',
		success:function(data){
			data = data.emotionTimeAndcount
			var time = []
			var C1 = []
			var C2 = []
			var C3 = []
			
			for(var i=0;i<data.length;i++){
				time.push(data[i].TIME)
				C1.push(data[i].zheng)
				C2.push(data[i].fu)
				C3.push(data[i].zhong)
			}
			var c1 = emtion(time,C1)
			var c2 = emtion(time,C2)
			var c3 = emtion(time,C3)
			
	
			option = {
				tooltip : {
					trigger: 'axis',
					axisPointer:{
						type : 'shadow'
						
					},
					textStyle:{
						align:'left'
						},
				},
				color:[ '#3ae41c','red','yellow'],
				toolbox: {
					show : true,
					feature: {
						mark : {show: true},
						dataView : {show: true, readOnly: false},
						magicType: {show: true, type: ['line', 'bar']},
						restore : {show: true},
						saveAsImage : {show: true}
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
						data:time
					}
				],
				yAxis: [
					{
						type : 'value',
						name : '情感波动',
//						axisLabel: {
//							formatter: function (a) {
//								a = +a;
//								return isFinite(a)
//									? echarts.format.addCommas(+a * 1000)
//									: '';
//							}
//						}
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
						itemStyle : {  
                            normal : {  
                                lineStyle:{  
                                    color:'#3ae41c'  
                                }
                            }
                        },
						data:C1
					},
					{
						name: '负面',
						type: 'line',
						itemStyle : {  
                            normal : {  
                                lineStyle:{  
                                    color: 'red' 
                                } 
                            }
                        },
						data:C2

					},
					{
						name: '中立',
						type: 'line',
						itemStyle : {  
                            normal : {  
                                lineStyle:{  
                                    color:'yellow'  
                                }
                            }
                        },
						data:C3
					}
				]
			};
			opinion_emotion_img_trend_line.hideLoading();
			opinion_emotion_img_trend_line.setOption(option);
		},
		erorr:function(){
			opinion_emotion_img_trend_line.hideLoading();
		}
	})
	

	
	//第十一个图表  网民情感分布
	$('#opinion_emotion_img_distribute').css('width',$(window).width()*0.295);
	var opinion_emotion_img_distribute = echarts.init(document.getElementById('opinion_emotion_img_distribute'));
	opinion_emotion_img_distribute.showLoading();
	$.ajax({
		url:'/IOPM/Subject/SubjectAction_getEmotionBoDongBiLi.action',
		type:'post',
		data:{"id":id},
		dataType:'json',
		success:function(data){
			var html=''
			data = data.emotionTimeAndcount
			var a = parseInt(data.zheng)
			var b = parseInt(data.fu)
			var c = parseInt(data.zhong)
			var zong = a+b+c
			html+='截至2017年01月17日16时，共发布文章'+zong+'条。其中'+(a/zong*100).toFixed(2)+'%的网民持正面观点，'+(b/zong*100).toFixed(2)+'%的网民持负面观点，'+(c/zong*100).toFixed(2)+'%的网民持中立观点。'
		
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
				color:[ '#3ae41c','red','yellow'],
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
							{value:a, name:'正面'},
							{value:b, name:'负面'},
							{value:c, name:'中立'}
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
			opinion_emotion_img_distribute.hideLoading();
			opinion_emotion_img_distribute.setOption(option);
			$('#yijian').html(html)
			$('#opinion_emotion_summary .loading').hide()
			$('#opinion_emotion_summary').css('height','auto')
		},
		erorr:function(){
			$('#opinion_emotion_summary .loading').hide()
			opinion_emotion_img_distribute.hideLoading();
		}
	})
	
	//正面
	$.ajax({
		url:'/IOPM/Subject/SubjectAction_positiveView.action',
		type:'post',
		data:{"id":id},
		dataType:"json",
		success:function(data){
			$('#positive').html(data.text)
			$('#pos .loading').hide()
			$('#pos').css('height','auto')
		},
		erorr:function(){
			$('#pos .loading').hide()
		}
	})
	//负面
	$.ajax({
		url:'/IOPM/Subject/SubjectAction_negativeView.action',
		type:'post',
		data:{"id":id},
		dataType:"json",
		success:function(data){
			$('#negative').html(data.text)
			$('#neg .loading').hide()
			$('#neg').css('height','auto')
		},
		erorr:function(){
			$('#neg .loading').hide()
		}
	})
	
	//中立
	$.ajax({
		url:'/IOPM/Subject/SubjectAction_neutralView.action',
		type:'post',
		data:{"id":id},
		dataType:"json",
		success:function(data){
			$('#neutral').html(data.text)
			$('#neu .loading').hide()
			$('#neu').css('height','auto')
		},
		erorr:function(){
			$('#neu .loading').hide()
		}
	})
//	
	//综合
	$.ajax({
		url:'/IOPM/Subject/SubjectAction_comprehensive.action',
		type:'post',
		data:{"id":id},
		dataType:"json",
		success:function(data){
			var html = data.text1+'<span>'+n+'</span>'+data.text2
			$('#zonghe').html(html)
			$('#zonghe .loading').hide()
			$('#zonghe').css('height','auto')
		},
		erorr:function(){
			$('#zonghe .loading').hide()
		}
	})
	
	//生成word
	$('.weixin #word').click(function(){
		$.ajax({
			url:'/IOPM/Subject/SubjectAction_saveData.action',
			type:'post',
			data:{
				"type":1,
				"picture":JSON.stringify({
					"one":$('#kind-statistics').children().children()[0].toDataURL(),
					"two":$('#influence_trend_line').children().children()[0].toDataURL(),
					"three":$('#influence_evaluate_watch').children().children()[0].toDataURL(),
					"four":$('#report').children().children()[0].toDataURL(),
					"five":$('#spread_news_img').children().children()[0].toDataURL(),
					"six":$('#spread_mblog_img').children().children()[0].toDataURL(),
					"seven":$('#spread_wechat_img').children().children()[0].toDataURL(),
					"eight":$('#opinion_emotion_img_trend_line').children().children()[0].toDataURL(),
					"nine":$('#opinion_emotion_img_distribute').children().children()[0].toDataURL()
				}),
				"text":JSON.stringify({
					"summary1":$('.summary1').html(),
					"summary2":$('.summary2').html(),
					"yuqing":$('#yuqing').html(),
					"effect":$('#effect_summay dd').html(),
					"stage":$('#stage_summary dd').html(),
					"spread_news":$('#spread_news_summary dd').html(),
					"spread_mblog":$('#spread_mblog_summary dd').html(),
					"spread_wechat":$('#spread_wechat_summary dd').html(),
					"trace":$('#trace_summary dd').html(),
					"yijian":$('#yijian').html(),
					"positive":$('#positive').html(),
					"negative":$('#negative').html(),
					"neutral":$('#neutral').html(),
					"zonghe":$('#zonghe').html()
				})
			},
			success:function(data){
					location.href=data
			}
				
		})
	})
	
	//推送至微信
	$('.weixin #weix').click(function(){
		$('#marquee-a').html('')
		$('#marquee-b').html('')
		$.ajax({
			url:"http://192.168.60.30:8080/wechat/get_user_list",
			type:"post",
		    dataType: "jsonp",
		    jsonp:'callback',  
		    jsonpCallback:"successCallback",  
		    success:function(json){
		    	json = json.userlist
		    	var html = '<dt>全部</dt>'
		    		for(var i=0;i<json.length;i++){
		    			html+='<dd><img src="/IOPM/subject/report/imgs/addS.png" alt="" /><span id='+json[i].userid+'>'+json[i].name+'</span><b></b></dd>'
		    		}
			    	$('#marquee-a').html(html);
			    
			    	$('#marquee-a dt').click(function(ev){
	             		$('#marquee-a dd').each(function(){
	             			$(this).children('b').show();
	             			$(this).children('img').attr('src','/IOPM/subject/report/imgs/pushS.png');
	             			$('#marquee-b').append($(this))
	             		})
	             		$('#marquee-b dd b').each(function(){
	             			$(this).click(function(){
	             				$(this).parent().children('img').attr('src','/IOPM/subject/report/imgs/images/addS.png')
	             				$(this).hide();
	             				$('#marquee-a').append($(this).parent())
	             				return false;
	             			})
	             		})
	             		$('#marquee-b dd').each(function(){
	             			$(this).mouseover(function(){
	             				$(this).children('b').css('transform', 'scale(2)'); 
	             				$(this).children('b').css('transition','all 0.8s')
	             			}) 
	             		})
	             	
	             		$('#marquee-b dd ').each(function(){
	             			$(this).mouseout(function(){
	             				$(this).children('b').css('transform', 'scale(1)'); 
	             				$(this).children('b').css('transition','all 0.8s')
	             			})
	             		})
	             		
	             	ev.stopPropagation();
	             	})
	             	
	             	$('#marquee-a dd').each(function(){
	             		$(this).click(function(){
	             			$(this).children('b').show();
	             			$(this).children('img').attr('src','/IOPM/netHotSpotFound/relatedNews/images/pushS.png');
	             			$('#marquee-b').append($(this))
	             			
	             			$('#marquee-b dd b').each(function(){
	             				$(this).click(function(){
	             					$(this).hide();
   	 	             				$(this).parent().children('img').attr('src','/IOPM/netHotSpotFound/relatedNews/images/addS.png')
   	 	             				$('#marquee-a').append($(this).parent())         	 	             		
   	 	             				return false;
	             				})
	             			})
	             			$('#marquee-b dd').each(function(){
	             				$(this).mouseover(function(){
	             					$(this).children('b').css('transform', 'scale(2)'); 
	             					$(this).children('b').css('transition','all 0.8s')
	             				}) 
	             			})
	             	
   	 	             		$('#marquee-b dd ').each(function(){
   	 	             			$(this).mouseout(function(){
   	 	             				$(this).children('b').css('transform', 'scale(1)'); 
   	 	             				$(this).children('b').css('transition','all 0.8s')
   	 	             			})
   	 	             		})
   	 	             		
	             		})
	             	})	
		    	}
		})
		$('.checkMask.append').show();
		$('.checkMask.delete').hide();
		resetMask(0);	
	})
	
	$('.append .btn-primary').click(function(){
         	$('.checkMask.append').hide();
       		var userid=[];
       		$('#marquee-b dd').each(function(){
       			userid.push($(this).children('span').attr('id'));
       		})
       		if(userid.length > 1){
       			userid = userid.join("|")
       		}else{
       			userid = userid[0]
       		}
       		
		$.ajax({
			url:'/IOPM/Subject/SubjectAction_saveData.action',
			type:'post',
			data:{
				"type":2,
				"picture":JSON.stringify({
					"one":$('#kind-statistics').children().children()[0].toDataURL(),
					"two":$('#influence_trend_line').children().children()[0].toDataURL(),
					"three":$('#influence_evaluate_watch').children().children()[0].toDataURL(),
					"four":$('#report').children().children()[0].toDataURL(),
					"five":$('#spread_news_img').children().children()[0].toDataURL(),
					"six":$('#spread_mblog_img').children().children()[0].toDataURL(),
					"seven":$('#spread_wechat_img').children().children()[0].toDataURL(),
					"eight":$('#opinion_emotion_img_trend_line').children().children()[0].toDataURL(),
					"nine":$('#opinion_emotion_img_distribute').children().children()[0].toDataURL()
				}),
				"text":JSON.stringify({
					"summary1":$('.summary1').html(),
					"summary2":$('.summary2').html(),
					"yuqing":$('#yuqing').html(),
					"effect":$('#effect_summay dd').html(),
					"stage":$('#stage_summary dd').html(),
					"spread_news":$('#spread_news_summary dd').html(),
					"spread_mblog":$('#spread_mblog_summary dd').html(),
					"spread_wechat":$('#spread_wechat_summary dd').html(),
					"trace":$('#trace_summary dd').html(),
					"yijian":$('#yijian').html(),
					"positive":$('#positive').html(),
					"negative":$('#negative').html(),
					"neutral":$('#neutral').html(),
					"zonghe":$('#zonghe').html()
				})
			},
			success:function(data){
				$.ajax({
					url:data,
					type:'post',
					data:{"type":2},
					dataType:'json',
					success:function(data){
						console.log(data)
						if(data.status == 0){
							alert('页面正在加载中...\n请稍后重试')
						}else if(data.status == 1){
							$.ajax({
				       			url:'http://192.168.60.30:8080/wechat/send_file',
				       			type:'post',
				       			data:{ 'file_path':data.url,
				       			    	'users':userid
				       			     },
				       			dataType:'jsonp',
				       			jsonp:'callback',  
				   			    jsonpCallback:"successCallback", 
				       			success:function(json){
				       				if(json.errcode == 0){
				       					alert("发送成功")
				       				}else{
				       					alert("发送失败\n" + json.errmsg)
				       				}
				       				
				       			},
				       			erorr:function(json){
				       				alert('发送失败');
				       			}
				       		})
						}
						
					}
				})
				
			}
				
		})
	})
}	
		
		
	function w(s){
		if($(s).height() >150){
			var width = $(s).width()
			var height = $(s).height()
			$(s).find('.loading').css('width',width)
			$(s).find('.loading').css('height',height)
			$(s).find('.loading img').css('animation','zhuan 2s infinite linear');
		}else{
			$(s).css('height',150)
			$(s).find('.loading').css('width',976)
			$(s).find('.loading').css('height',150)
			$(s).find('.loading img').css('animation','zhuan 2s infinite linear');
		}
		$(s).find('.loading').show()
	}
	
	function emtion(time,d){
		var l = 0
		var a = 0
		var c = []
		for(;a<time.length;){
			if(time[a] == d[l].TIME){
				c.push(d[l].EMOTIONCOUNT)
				a+=1
				if(l<d.length-1){
					l+=1
				}
			}else{
				c.push(0)
				a+=1
			}
		}
		return c
	}

	
		