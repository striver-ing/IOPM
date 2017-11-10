var html1="";
var html2="";
// var zero=['人物','政策法规','广电机构','敏感节目'];
// var zero=['政策法规','人民文化','历史','科技'];
$(function(){
	
// $(".userZERO").text(zero[Number($(".userZERO").text())-1]);
//    
// var html1="<option value=''>全部</option> ";
// $.each(zero, function(i, p) {
// html1=html1+'<option value='+(i+1)+'>'+p+'</option> ';
// });
// $('.select0').html(html1);
	console.log($('#querySearch').val());
	if($('#querySearch').val() != "" && $('#querySearch').val() != null)$('#query').val($('#querySearch').val());
	$('#query').prev('em').text($('#query option:selected').text());
	$('#query').change(function(){
		$(this).prev('em').text($(this).text());
		console.log($(this).val());
	})
	$.ajax({
		url:'/IOPM/KeyClues/KeyCluesAction_getManage.action',
		type:'post',
		dataType:'json',
		data:{},
		success:function(data){
			var html1="<option value=''>请选择一级分类</option> ";
			
			$.each(data,function(i,p){
				html1=html1+'<option value='+p.zero_id+'>'+p.zero_name+'</option>';
			});
			$('#enableIdList0').html(html1);
			
		}
	});
	$.ajax({
		url:'/IOPM/KeyClues/KeyCluesAction_getManage.action',
		type:'post',
		dataType:'json',
		data:{},
		success:function(data){
	    	var html1="<option value=''>全部</option> ";
	    	var selZero=$('#enableId6').val();
	    	if(selZero == "" || selZero == null || selZero == undefined){
	    		html1="<option value='' selected>全部</option> ";
	    	}
	    	$.each(data,function(i,p){
	    		if(selZero==p.zero_id){
	    			html1=html1+'<option value='+p.zero_id+' selected>'+p.zero_name+'</option>';
	    		}else{
	    			html1=html1+'<option value='+p.zero_id+'>'+p.zero_name+'</option>';
	    		}
	    	});
	    	
	    	$('#enableIdList6').html(html1);
	    	$("#enableIdList6").prev("em").text($("#enableIdList6").find("option:selected").text());
	    	// 二级回显
	    	var sel2=$('#enableId6').val();
	    	if(sel2!=null&&sel2!=""&&sel2!=undefined){
	    		
	    		$.ajax({
	    		    url:"/IOPM/KeyClues/KeyCluesAction_getFirstClassify.action",
	    		    type:"post",
	    		    dataType:"json",
	    		    data:{'zero_id':sel2},
	    		    success:function(data){	
	    		    	console.log(data[0].first_classify);
	    		    	var html7="<option value=''>全部</option>";
	    		    	var selTwo=$('#enableId').val();
	    		    	$.each(data,function(i,p){
	    		    		if(selTwo==p.first_classify){
	    		    			html7=html7+'<option value='+p.first_classify+' selected>'+p.first_classify+'</option>';	
	    		    		}else{
	    		    			html7=html7+'<option value='+p.first_classify+'>'+p.first_classify+'</option>';
	    		    		}
	    		    		
	    		    	});
	    		    	$('#enableIdList').html(html7);
	    		    	$("#enableIdList").prev("em").text($("#enableIdList").find("option:selected").text());
	    		    	
	    		    	// 渲染三级
	    		    	
	    		    	$.ajax({
	    		    		url:'/IOPM/KeyClues/KeyCluesAction_getSecondClassify.action',
	    		    		type:'post',
	    		    		dataType:'json',
	    		    		data:{'classify_name':$("#enableId").val()},
	    		    		success:function(data){
	    		    			var selThree=$('#enableId4').val();
	    		    			html4="<option value=''>全部</option> ";
	    		    			if(selThree == "" || selThree == null || selThree == undefined){
	    		    	    		html1="<option value='' selected>全部</option> ";
	    		    	    	}
	    		    			$.each(data,function(i,p){
	    		    				if(selThree == p.second_classify){
	    		    					html4=html4+'<option value='+p.second_classify+' selected>'+p.second_classify+'</option> ';
	    		    				}else{
	    		    					html4=html4+'<option value='+p.second_classify+'>'+p.second_classify+'</option> ';
	    		    				}
	    		    			});

	    		    			$('#enableIdList2').html(html4);
	    		            	// $("#enableIdList2").val($("#enableId4").val());
	    		            	$("#enableIdList2").prev("em").text($("#enableIdList2").find("option:selected").text());
	    		            	
	    		            }		
	    		    	})
	    		    },
	    		    
	    		});
	    	}
	    	
	    }
	});
	
	
	// 二级改变给三级赋值
	$('#enableIdList').change(function(){		
		$('#enableIdList2').val("");
		$('#enableIdList2').html("<option value=''>全部</option> ");
		$('#enableIdList2').prev("em").text("全部");
		$.ajax({
			url:'/IOPM/KeyClues/KeyCluesAction_getSecondClassify.action',
			type:'post',
			dataType:'json',
			data:{'classify_name':$(this).val()},
			success:function(data){
				html3="<option value=''>全部</option> ";
				$.each(data,function(i,p){
					html3=html3+'<option value='+p.second_classify+'>'+p.second_classify+'</option> ';
				});
				
				$('#enableIdList2').html(html3);
			}
		});
	})
	
	
})
// 增加模态框二级分类
$("#enableIdList0").change(function(){
	  $('.hid ul').html("");
	  $('.hidp ul').html("");
	  $('#userD').val("");
	  $('#userL').val("");
      var zero=$(this).val();
      $.ajax({
    		url:'/IOPM/KeyClues/KeyCluesAction_getFirstClassify.action',
    		type:'post',
    		dataType:'json',
    		data:{'zero_id':zero},
            success:function(data){	
		    	
		    	var html="";
		    	$.each(data,function(i,p){
		    		html=html+'<li>'+p.first_classify+'</li>';	
		    	});
		    	$('.de').html(html);
		    	$('.secdType .hid li').click(function(){
		            $('#userL').val($(this).html());
		            $('#userL').css('border-color', '#ccc');
		        })
		    } 	
             
      })

})

$(function(){
	// 给每页显示的条数赋值
	$("#pageSizeSelect").val($("#limitValue").val());
	// 给关键字框赋值
	$("#check_name").val($("#checkname1").val());
	// 在类别下拉框赋值
	$("#enableIdList6").val($("#enableId6").val());
	$("#pageSizeSelect").change(function(){
		userButtonSubmit();
	});
	// 增加部分下拉框
	$('#enableIdList0').change(function(){
		
		var text=$(this).find("option:selected").text();
	
		var options=$(this).val();
		$('#userZ').val(options);
	})
	// 一级改变二级渲染
	$("#enableIdList6").change(function(){
		var options=$(this).val();
		$('#enableIdList').val("");
		$('#enableIdList2').val("");
		$('#enableIdList').prev('em').text("全部")
		$('#enableIdList').html("<option value=''>全部</option> ");
		$('#enableIdList2').prev('em').text("全部")
		$('#enableIdList2').html("<option value=''>全部</option> ");
		$.ajax({
		    url:"/IOPM/KeyClues/KeyCluesAction_getFirstClassify.action",
		    type:"post",
		    dataType:"json",
		    data:{'zero_id':options},
		    success:function(data){	
		    	
		    	var html="<option value=''>全部</option> ";
		    	$.each(data,function(i,p){
		    		html=html+'<option value='+p.first_classify+'>'+p.first_classify+'</option>';	
		    	});
		    	$('#enableIdList').html(html)
		    }
		});
	})
	// 二级联动下拉
	$("#enableIdList").change(function(){
		var second=$("#enableIdList").find("option:selected").text();
		jQuery.ajax({
			url:"",
			type:'post',
			dataType:'json',
			data:{'classify_name':second},
			success:function(obj){
				var html="";
				$.each(obj,function(i,p){
					if(p.second_classify!=null&&p.second_classify!="")
					html=html+'<option value='+p.second_classify_id+'>'+p.second_classify+'</option>';
				});
			}
		});
	})
	
	// 在类别下拉框赋值
    
	$("#enableIdList6").prev("em").text($("#enableIdList6").find("option:selected").text());
	
	var selOff = true;
	$('.top form select').click(function(){
		if(selOff){
			$(this).parent('b').addClass('on');
		}else{
			$(this).parent('b').removeClass('on');
		}
		selOff = !selOff;
	});
	$('.top form select').change(function(){
		// alert($(this).selectIndex());
		$(this).siblings('em').text($(this).find('option:selected').text());
		$(this).parent('b').attr('title',$(this).find('option:selected').text());
		$(this).parent('b').css('cursor','pointer');
	});

	
})

$(function(){
	$("#userK1").val($('.checkMask .bbh').html());
	
})


$(function(){
	var kwSetA = new Set(),
    kwSetB = new Set();
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
	$(".odd td").each(function () {  
        $(this).attr("title", $(this).text());  
        $(this).css("cursor", 'pointer');  
    }); 

    $('.odd div').each(function(index){
        var s = $(this).html();     
        if(strlen(s) > 12){
	        var strD = s.substr(0,6);	
	        $(this).html(strD+'...');
        }
    })
    function strlen(str) {
  // /<summary>获得字符串实际长度，中文2，英文1</summary>
  // /<param name="str">要获得长度的字符串</param>
  var realLength = 0, len = str.length, charCode = -1;
  for (var i = 0; i < len; i++) {
    charCode = str.charCodeAt(i);
    if (charCode >= 0 && charCode <= 128) 
       realLength += 1;
    else
       realLength += 2;
  }
  return realLength;
}
	// 翻页
	function page(index){
		$("#start").val(index);
		$("#searchRole").submit();
	}

//	$.ajax({
//		url:'http://localhost:8080/IOPM/KeyClues/KeyCluesAction_exportExcels.action',
//		type:'post',
//		data:{},
//		dataType:'json',
//		success:function(data){
//			console.log(data.file_path)
//			$('#a').attr('href',data.file_path)
//		}
//	})

    //增删改查
    var $add = $('.btns input.add');
    var $change = $('.btns input.change');
    var $del = $('.btns input.del');
    var $dao = $('.btns input.dao');
    //导出
    $dao.click(function(){
    	location.href='/IOPM/KeyClues/KeyCluesAction_exportExcels.action'
    })
    
    
     
    // 增加
    $add.click(function () {
        clearInterval(timer);
        var timer = setInterval(function(){
        var formH = $("#myfirstform").css('height');
        $(".rightBox").css('transition','height 0.3s linear');
        $(".rightBox").css('height',formH);
        var deH = parseInt(formH)-144;
        $("#detailsBody").css('transition','height 0.3s linear');
        $('#detailsBody').css('height',deH);

        // 监测hidc里ul的高度
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
        // 清空弹出层数据
        $('.checkMask .bounceInUp input').val('');
        $('.checkMask .bounceInUp textarea').val('');
        $('.checkMask .bounceInUp textarea').css('border-color', '#ccc');
        $('.checkMask .bounceInUp textarea').css('placeholder', '关键词之间空格分割表示与， 逗号分割表示或。');
        $('.checkMask .bounceInUp #userC').attr('placeholder','请输入名称');
        $('.checkMask .bounceInUp #userL').attr('placeholder','请输入类别');
        $('.checkMask .bounceInUp input').css('border-color', '#ccc');
        $('.checkMask .bounceInUp .one').css('border-color', '#ccc');
        $('.checkMask .hidc ul li span').remove();
        kwSetA = new Set();
        kwSetB = new Set();
        getSelect($('.checkMask .bounceInUp select'), '');
        // 弹出层设置
        $('.checkMask .MaskTop').html('增加线索');
        $('.checkMask .bounceInUP').css({'width': '40%'});
        $('.checkMask').hide();
        $('.checkMask .cc').hide();
        $('.checkMask .dd').hide();
        $('.checkMask .hida').hide();
        $('.checkMask .hidb').hide();
        $('.checkMask .zbh').hide();
        $('.checkMask .bbh').hide();
        $('.checkMask.increase').show();
        resetMask(100);
    });
    
    // 名称失去光标
    $('#userC').blur(function () {
        if ($(this).val() == '') {
            $(this).css('border-color', 'red');
            $(this).attr('placeholder', '输入不能为空')
        } else {
            $(this).css('border-color', '#ccc');
        }
    })
    // 失去光标
    $('.one').blur(function () {
        if ($(this).val() == '') {
            $(this).css('border-color', 'red');
            $(this).attr('placeholder', '输入不能为空')
        } else {
            $(this).css('border-color', '#ccc');
        }
    })

    // 二级失去光标
    $('#userL').blur(function () {
    	
        if ($(this).val() == '') {
            $(this).css('border-color', 'red');
            $(this).attr('placeholder', '输入不能为空')
        } else {
            $(this).css('border-color', '#ccc');
        }
    })

    $('.secdType .hid li').click(function(){
        $('#userL').val($(this).html());
        $('#userL').css('border-color', '#ccc');
    })
	$('.kwType input.kwTypeInp').click(function(){
		$('div.hid').hide();
		$(this).siblings('div.hid').show();
	});
    // 类别
    $('.de').on("click","li",function(){
        $('#userD').val("");
        $('.ee').html('');
        if ($(this).html() == '政策法规') {
            $('.ee').append('<li>' + '政策1' + '</li>' + '<li>' + '政策2' + '</li>' + '<li>' + '政策3' + '</li>')
        }
        // 给三级分类框赋值
        $.ajax({
    		url:'/IOPM/KeyClues/KeyCluesAction_getSecondClassify.action',
    		type:'post',
    		dataType:'json',
    		data:{'classify_name':$(this).html()},
            success:function(data){	
		    	var html="";
		    	$.each(data,function(i,p){
		    		html=html+'<li>'+p.second_classify+'</li>';	
		    	});
		    	$('.ee').html(html);
		    } 	
      })
        // 给一级分类赋值 并让二级分类显示
        $('#userL').val($(this).html());
        $('.dd').show();
		
        // 点击
        $('.ee').on("click","li",function(){
            $('#userD').val($(this).html());
            $('div.hid').hide();
        })
        $('div.hid').hide();
    })
    $('.kwType input.kwTypeInp').blur(function(){
		setTimeout(function(){
			$('div.hid').hide();
		},500);
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
					kwSetA.add(trim);
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
						kwSetA.add(trim);
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
	
// 修改
    $change.click(function () {
        if (selClickLi.length == 0) {
            confirm('请选择线索');
        } else {
	clearInterval(timer);
        var timer = setInterval(function(){
        var formH = $("#myfirstform").css('height');
        $(".rightBox").css('transition','height 0.3s linear');
        $(".rightBox").css('height',formH);
        var deH = parseInt(formH)-144;
        $("#detailsBody").css('transition','height 0.3s linear');
        $('#detailsBody').css('height',deH);

        // 监测hidc里ul的高度
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
            // 清空弹出层数据
     $('.checkMask .bounceInUp input').val('');
            $('.checkMask .bounceInUp textarea').val('');
            $('.checkMask .bounceInUp textarea').css('border-color', '#ccc');
            $('.checkMask .bounceInUp textarea').css('placeholder', '关键词之间空格分割表示与， 逗号分割表示或。');
            $('.checkMask .bounceInUp #userC').attr('placeholder','请输入名称');
            $('.checkMask .bounceInUp #userL').attr('placeholder','请输入类别');
        	var $selLi = $('#data-table tbody tr').eq(selClickLi[0]);
            $('.checkMask .bounceInUp input').val('');            
            $('.checkMask .msgs #userC').val($selLi.find('.userName').attr('title'));
            if($selLi.find('.userloginName').text()!='--')$('.checkMask .msgs .textA').val($selLi.find('.userloginName').attr('title'));
            if($selLi.find('.userloginPwd').text()!='--')$('.checkMask .msgs .textB').val($selLi.find('.userloginPwd').attr('title'));
			$('#myUpdateId').val($selLi.find('#iopm_id').val());
            $('.checkMask .msgs #userL').val($selLi.find('.userSex').attr('title'));			
			if($selLi.find('.secondCL').text()!='--')$('.checkMask .msgs #userD').val($selLi.find('.secondCL').attr('title'));
			// $("#enableIdList0").find("option[value='"+$selLi.find('.userZER').val()+"']").attr("selected",true);
			// $('#enableIdList0').val($selLi.find('.userZER').val());
			$.ajax({
				url:'/IOPM/KeyClues/KeyCluesAction_getManage.action',
				type:'post',
				dataType:'json',
				data:{},
				success:function(data){
					var html1="<option value=''>请选择一级分类</option> ";
					
					$.each(data,function(i,p){
						if($selLi.find('.userZER').val()==p.zero_id){
							html1=html1+'<option value='+p.zero_id+' selected>'+p.zero_name+'</option>';
						 }else{
							html1=html1+'<option value='+p.zero_id+'>'+p.zero_name+'</option>';
						 }
						
					});
					$('#enableIdList0').html(html1);
					
				}
			});
			// $('#enableIdList0').text($selLi.find('.userZERO').val());
			$('.checkMask .bounceInUp input').css('border-color', '#ccc');
            $('.checkMask .bounceInUp .one').css('border-color', '#ccc');
            $('.checkMask .hidc ul li span').remove();
            kwSetA = new Set();
            kwSetB = new Set();
            getSelect($('.checkMask .bounceInUp select'), '');
            // 弹出层设置
            $('.checkMask .MaskTop').html('修改线索');
            $('.checkMask .bounceInUP').css({'width': '40%'});
            $('.checkMask').hide();
            $('.checkMask .cc').hide();
            $('.checkMask .dd').hide();
            $('.checkMask .hida').hide();
            $('.checkMask .hidb').hide();
            $('.checkMask .zbh').hide();
            $('.checkMask .bbh').hide();
            $('.checkMask.increase').show();
            resetMask(100);
        }
    });

// 删除
    $del.click(function () {
        if (selClickLi.length == 0) {
            confirm('请选择关键词');
        } else {
        	
            $('.checkMask .MaskTop').html('删除关键词');
            $('.checkMask .bounceInLeft').css({'width': '20%', 'height': '260px'});
            $('.checkMask').hide();
            var $selLi = $('#data-table tbody tr').eq(selClickLi[0]);
			$('#deleteId').val($selLi.find('#iopm_id').val());
            $('.checkMask.delete').show();
            resetMask(100);
        }
    });

    // 点击确定判断是否全部填写
    $('.increase .btn-primary').click(function () {
        if ($('.increase #userC').val() == '' || $('.increase #userL').val() == '' || $('#enableIdList0').val()==null || $('#enableIdList0').val()=='') {
        	alert('请填写完整');
            return false;
        } else {
            return true;
        }
    });
    
    $('.rightBox .kwDetails i').click(function(){
    	$('.rightBox').hide();
        $('#detailsBody .none-D').show();
        $('#detailsBody .play').hide();
    });

    $('.rightBox #kwSrch').focus(function () {
        $('.increase .btn-primary').attr('type', 'button');
        $('.rightBox #kwSrch').keydown(function (ev) {
            var key = ev.which;
            if (key == 13) {
                $('#detailsBody .play').show();
                $('#detailsBody .none-D').hide();
                $('iframe').attr('src','https://m.baidu.com/s?word='+$('#kwSrch').val());
                $('#detailsBody .play').css('animation','zhuan 1s 0.3s linear');
                setTimeout(function(){
                    $('#detailsBody .play').hide();
                    $('#detailsBody .play').removeAttr('animation');
                },1500)
                return false;
            }
        })
        $('.rightBox .kwBox img').click(function(){
            $('#detailsBody .play').show();
            $('#detailsBody .none-D').hide();
            $('iframe').attr('src','https://m.baidu.com/s?word='+$('#kwSrch').val());
            $('#detailsBody .play').css('animation','zhuan 1s 0.3s linear');
            setTimeout(function(){
                $('#detailsBody .play').hide();
                $('#detailsBody .play').removeAttr('animation');
            },1500)
            return false;
        })
    })

    $('.rightBox #kwSrch').blur(function () {
        $('.increase .btn-primary').attr('type', 'submit');
    })

    $('.increase .btn-primary').click(function(){
        clearInterval(timer);
    })
    $('.increase .btn-danger').click(function(){
        clearInterval(timer);
    })

//问号
$('.Collation h2 img').mouseover(function(){
    $('.Collation .Collation-title').show();
    $('.text').hide();
})
$('.Collation h2 img').mouseout(function(){
    $('.Collation .Collation-title').hide();
    $('.text').show();
})



//进出
var text = 0
var heaw1 = [];
var heaw2 = [];
var heaw3 = [];
var heaw4 = [];
var va;
$('.text').click(function(){
    text+=1;
    $.ajax({
		type:'post',
		url:'/IOPM/KeyClues/KeyCluesAction_createDate.action',
		dataType:'json',
		data:{},
		success:function(data){
			data = data[1].clues_weight;
			var html='';
			for(var i=0;i<data.length;i++) {
	            html +='<li id='+data[i].id+'><img src="/IOPM/netHotSpotFound/clue/img/san.png">'+data[i].name+'<input type="text" value='+'('+data[i].value+')'+'><ul class="header-two"></ul></li>'
	        }
	        $('.header-one').html(html);

	        for(var j =0;j<data.length;j++) {
	            var two = '';
	            var n = data[j].chiled
	            for (var k = 0; k < n.length; k++) {
	                if (n[k].chiled != undefined && n[k].chiled.length > 0) {
	                    two += '<li id=' + n[k].id + '><img src="/IOPM/netHotSpotFound/clue/img/san.png">' + n[k].name+'<input type="text" value='+'('+n[k].value+')'+'><ul class="header-three"></ul></li>'

	                } else {
	                    two += '<li style="margin-left:30px;" id=' + n[k].id + '>' + n[k].name+'<input type="text" value='+'('+n[k].value+')'+'></li>'
	                }
	            }
	            $('.header-two').eq(j).html(two)
	        }
	       
	       for(var a =0;a<data.length;a++) {
	           var b = data[a].chiled
	           for (var c = 0; c < b.length; c++) {
	               if(b[c].chiled != undefined && b[c].chiled.length >0){
	                   var d = b[c].chiled
	                   var x = b[c].id
	                   var three = '';
	                   for(var e=0;e<d.length;e++){
	                       if (d[e].chiled != undefined && d[e].chiled.length > 0) {
	                           three += '<li id=' + d[e].id + '><img src="/IOPM/netHotSpotFound/clue/img/san.png">' + d[e].name +'<input type="text" value='+'('+d[e].value+')'+ '><ul class="header-four"></ul></li>'
	                       } else {
	                           three += '<li style="margin-left:30px;" id=' + d[e].id + '>' + d[e].name + '<input type="text" value='+'('+d[e].value+')'+'></li>'
	                       }
	                   }
	                  $('.header-two>li').each(function(){
	                	  if($(this).attr('id') == x){
	                		  $(this).children('ul').html(three);
	                	  }
	                  })
	               }
	           }
	       }

	       for(var f =0;f<data.length;f++) {
	           var g = data[f].chiled
	           for (var l = 0; l < g.length; l++) {
	               if(g[l].chiled != undefined && g[l].chiled.length >0){
	                   var m = g[l].chiled
	                   for(var o=0;o<m.length;o++){
	                       if (m[o].chiled != undefined && m[o].chiled.length > 0) {
	                           var p = m[o].chiled
	                           var r = m[o].id
	                           var four = '';
	                           for(var s=0;s< p.length;s++){
	                               four+='<li title='+p[s].name+' style="margin-left:30px;" id='+p[s].id+'><span>'+p[s].name+'</span><input type="text" value='+'('+p[s].value+')'+'></li>'
	                           }
	                           $('.header-three>li').each(function(){
	 		                	  if($(this).attr('id') == r){
	 		                		  $(this).children('ul').html(four);
	 		                	  }
	 		                  })
	                       }
	                   }
	               }
	           }
	       }
	       $('.header-one>li').each(function(){
	           var numa =0;
	           $(this).on('click',function(){
	               console.log(1)
	               numa+=1;
	               if(numa%2 !=0){
	                   $(this).children('img').css('transform','rotate(90deg)')
	                   var h = $(this).children('ul').height();
	                   $(this).css('padding-bottom',h+40);
	                   $(this).children('ul').show();
	                   if($('#hea').height() > 360){
	                       $('#box').height(360);
	                       $('#box').css('overflow','hidden');
	                       $('#box').mCustomScrollbar({
	                           theme:"inset-dark"
	                       });
	                   }else{
	                       $('#box').height('auto');
	                       $('#box').removeAttr('overflow');
	                   }
	               }else{
	                   $(this).children('img').css('transform','rotate(0deg)')
	                   $(this).css('padding-bottom',0);
	                   $(this).children('ul').hide();
	                   if($('#hea').height() > 360){
	                       $('#box').height(360);
	                       $('#box').css('overflow','hidden');
	                       $('#box').mCustomScrollbar({
	                           theme:"inset-dark"
	                       });
	                   }else{
	                       $('#box').height('auto');
	                       $('#box').removeAttr('overflow');
	                   }
	               }
	               return false;
	           })
	       })

	       $('.header-two>li').each(function(){
	           var numb =0;
	           if($(this).children().length > 1) {
	               $(this).on('click',function(){
	                   console.log(2)
	                   numb += 1;
	                   if (numb % 2 != 0) {
	                       $(this).children('img').css('transform', 'rotate(90deg)')
	                       var h = $(this).children('ul').height();
	                       $(this).css('padding-bottom', h + 40);
	                       if ($(this).parent().parent().siblings().length > 0) {
	                           var p = $(this).parent().height()
	                           $(this).parent().parent().css('padding-bottom', p + 40);
	                       }
	                       $(this).children('ul').show();
	                       if ($('#hea').height() > 360) {
	                           $('#box').height(360);
	                           $('#box').css('overflow', 'hidden');
	                           $('#box').mCustomScrollbar({
	                               theme: "inset-dark"
	                           });
	                       } else {
	                           $('#box').height('auto');
	                           $('#box').removeAttr('overflow');
	                       }
	                   } else {
	                       $(this).children('img').css('transform', 'rotate(0deg)')
	                       $(this).css('padding-bottom', 0);
	                       var pp = $(this).parent().height();
	                       $(this).parent().parent().css('padding-bottom', pp + 40);
	                       $(this).children('ul').hide();
	                       if ($('#hea').height() > 360) {
	                           $('#box').height(360);
	                           $('#box').css('overflow', 'hidden');
	                           $('#box').mCustomScrollbar({
	                               theme: "inset-dark"
	                           });
	                       } else {
	                           $('#box').height('auto');
	                           $('#box').removeAttr('overflow');
	                       }
	                   }
	                   return false;
	               })
	           }else{
	                   $(this).on('click',function(){
	                       return false;
	                   })
	               }
	       })

	       $('.header-three>li').each(function(){
	           var numc = 0;
	           if($(this).children().length > 1){
	               $(this).on('click',function(){
	                   console.log(3)
	                   numc+=1;
	                   if(numc%2 !=0){
	                       $(this).children('img').css('transform','rotate(90deg)')
	                       var h = $(this).children('ul').height();
	                       $(this).css('padding-bottom',h+40);
	                       if($(this).parent().parent().siblings().length>0){
	                           var p = $(this).parent().height();
	                           $(this).parent().parent().css('padding-bottom',p+40);
	                       }
	                       if($(this).parent().parent().parent().siblings().length>0){
	                           $(this).parent().parent().parent().css('padding-bottom',h+p+40);
	                       }
	                       if($(this).parent().parent().parent().parent().siblings().length>0){
	                    	   var s = $(this).parent().parent().parent().height();
	                           $(this).parent().parent().parent().parent().css('padding-bottom',s+40);
	                       }
	                       $(this).children('ul').show();
	                       if($('#hea').height() > 360){
	                           $('#box').height(360);
	                           $('#box').css('overflow','hidden');
	                           $('#box').mCustomScrollbar({
	                               theme:"inset-dark"
	                           });
	                       }else{
	                           $('#box').height('auto');
	                           $('#box').removeAttr('overflow');
	                       }
	                   }else{
	                       $(this).children('img').css('transform','rotate(0deg)')
	                       $(this).css('padding-bottom',0);
	                       var pp = $(this).parent().height();
	                       $(this).parent().parent().css('padding-bottom',pp+40);
	                       var h = $(this).parent().parent().parent().height();
	                       $(this).parent().parent().parent().parent().css('padding-bottom',h+40);
	                       $(this).children('ul').hide();
	                       if($('#hea').height() > 360){
	                           $('#box').height(360);
	                           $('#box').css('overflow','hidden');
	                           $('#box').mCustomScrollbar({
	                               theme:"inset-dark"
	                           });
	                       }else{
	                           $('#box').height('auto');
	                           $('#box').removeAttr('overflow');
	                       }
	                   }
	                   return false;
	               })

	           }else{
	               $(this).on('click',function(){
	                   return false;
	               })
	           }
	       })

	       $('.header-four>li').each(function(){
	    	   $(this).on('click',function(){
	    		   return false;
	    	   })
	       })
	       
	
    $('.header-one>li>input').each(function(){
    	$(this).on('focus',function(){
            $(this).select()
            va= $(this).val();
        })
        $(this).on('blur',function(){
            if($(this).val() == '' || IsNum($(this).val()) == false){
                $(this).val(va);
            }else{
                heaw1.push([$(this).attr('id'),$(this).val()]);
                console.log(heaw1);
                $(this).val('('+$(this).val()+')');
            }
        })
    })

    $('.header-two>li>input').each(function(){
    	$(this).on('focus',function(){
            $(this).select()
            va= $(this).val();
        })
        $(this).on('blur',function(){
            if($(this).val() == '' || IsNum($(this).val()) == false){
                $(this).val(va);
            }else{
                heaw2.push([$(this).attr('id'),$(this).val()]);
                console.log(heaw2);
                $(this).val('('+$(this).val()+')');
            }
        })
    })

    $('.header-three>li>input').each(function(){
    	$(this).on('focus',function(){
            $(this).select()
            va= $(this).val();
        })
        $(this).on('blur',function(){
            if($(this).val() == '' || IsNum($(this).val()) == false){
                $(this).val(va);
            }else{
                heaw3.push([$(this).attr('id'),$(this).val()]);
                console.log(heaw3);
                $(this).val('('+$(this).val()+')');
            }
        })
    })

    $('.header-four>li>input').each(function(){
    	$(this).on('focus',function(){
            $(this).select()
            va= $(this).val();
        })
        $(this).on('blur',function(){
            if($(this).val() == '' || IsNum($(this).val()) == false){
                $(this).val(va);
            }else{
                heaw4.push([$(this).attr('id'),$(this).val()]);
                console.log(heaw4);
                $(this).val('('+$(this).val()+')');
            }
        })
    })
    //点击确定
$('.but-one').click(function(){
	var data1 = heaw1
	var data2 = heaw2
	var data3 = heaw3
	var data4 = heaw4
	$.ajax({
		type:'post',
		url:'http://localhost:8081/IOPM/KeyClues/KeyCluesAction_updateCoefficient.action',
		data:{'data1':data1,
		'data2':data2,
		'data3':data3,
		'data4':data4},
		success:function(){
			alert('成功')
		}
	})
})
		}	
		
	})
	
    if(text%2 != 0){
        $('.Collation').css('transform','translate(400px)');
        $('.Collation').css('transition','all 0.5s linear');
    }else{
        $('.Collation').css('transform','translate(0px)');
        $('.Collation').css('transition','all 0.5s linear');
    }
    event.stopPropagation();
    
})

	
});
function IsNum(num){
    var reNum=/^[0-9]+.?[0-9]*$/;
    return(reNum.test(num));
}

//系数
$('.e-1 input').click(function(){
    $(this).select();
    $(this).blur(function(){
        
            if($(this).val() == '' || IsNum($(this).val()) == false){
                $(this).select();
            }else{
                $(this).val($(this).val());
            }
       
    })
})

  $('.e-2 input').click(function(){
        $(this).select();
        $(this).keydown(function(ev){
            var keycode = ev.which;
            if(keycode == 13){
                if($(this).val() == '' || IsNum($(this).val()) == false){
                    $(this).select();
                }else{
                    $(this).val($(this).val());
                }
            }
        })
})

$('.e-3 input').click(function(){
            $(this).select();
            $(this).keydown(function(ev){
                var keycode = ev.which;
                if(keycode == 13){
                    if($(this).val() == '' || IsNum($(this).val()) == false){
                        $(this).select();
                    }else{
                        $(this).val($(this).val());
                    }
                }
            })
    })

    $('.e-4 input').click(function(){
        $(this).select();
        $(this).keydown(function(ev){
            var keycode = ev.which;
            if(keycode == 13){
                if($(this).val() == '' || IsNum($(this).val()) == false){
                    $(this).select();
                }else{
                    $(this).val($(this).val());
                }
            }
        })
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



//进度条
var bar = null;
var b = null;
$('.but-one').click(function(){
    $('#completed').hide();
    $('#has-withdrawn').hide();
    $('.mark').height($('.Collation').height());
    $('.mark').show();
    $('.progress').show();
    $('.run').show();
    $('#m').show();
    clearInterval(b);
    clearInterval(bar);
    var current;
    if($('.progress-bar span').html() != "" && $('.progress-bar span').html() != '100%'&& $('.progress-bar span').html() != '0%'){
        current = parseInt($('.progress-bar span').html());
    }else{
        current = 0;
        $('.progress-bar').css('width',current+'%')
    }
    bar = setInterval(function(){
        current++;
        $('.progress-bar span').html(current+'%');
        $('.progress-bar').css('width',current+'%')
        if(current == 100) {
            current = 0;
            $('.mark').hide();
            $('.progress').hide();
            $('.run').hide()
            $('#m').hide();
            $('#completed').slideDown();
            clearInterval(bar);
        }
    },100);
})

$('.but-two').click(function(){
    $('#completed').hide();
    $('#has-withdrawn').hide();
    $('.mark').height($('.Collation').height());
    clearInterval(bar);
    clearInterval(b);
    var current;
    if($('.progress-bar span').html() == "" || $('.progress-bar span').html() == '0%'){
        current = 100;
        $('.progress-bar').css('width',current+'%')
    }else{
        current = parseInt($('.progress-bar span').html());
    }
    setTimeout(function(){
        $('.mark').show();
        $('.progress').show();
        $('.run').show();
        $('#m').show();
        b = setInterval(function(){
            current--;
            $('.progress-bar span').html(current+'%');
            $('.progress-bar').css('width',current+'%')
            if(current == 0) {
                $('.mark').hide();
                $('.progress').hide();
                $('.run').hide();
                $('#m').hide();
                $('#has-withdrawn').slideDown();
                clearInterval(b);
            }
        },100);
    },300)

})
// 根据表格的数据给弹出层对应的地方复制
function getSelect(sele, target) {
    if (target)
        sele.find('option').each(function (i, elem) {
// console.log($(elem).text())
            if (target.text() == $(elem).text()) {
                $(elem).attr('selected', true);
            }
        });
    else
        sele.find('option:first-child').attr('selected', true);
}
// 确认增加
function addSubmit(){
// //获取上传文件的路径
// $.ajax({
// type:"post",
// url:"/MVMS/appMgr/AppMgrAction_getStorageUrl.action",
// success:function(msg){
// var obj=eval("("+msg+")");
// alert(obj.info);
// window.location.reload();
//			
// },
//		
// })
	
	 var url="/IOPM/KeyClues/KeyCluesAction_addKeyword.action";
	 $.ajax({
		type:"post",
		url:url,
        data:{
        	'id':$('#myUpdateId').val(),
			'name': $('#userC').val(),	
			'classify_name': $('#userL').val(),
			'zero_id':$('#enableIdList0').val(),
			'weight':$('#userWE').val(),
			'classifyTwo_name':$('#userD').val(),
			'keyword2':$('.textA').val(),
			'keyword3':$('.textB').val(),
			},
		success:function(msg){			
			var obj=eval("("+msg+")");
				alert(obj.info);
				window.location.reload();
		
		},
		error:function(msg){
			
		alert(msg);
		return false;
		}
	})
}
// 确认修改
function updateSubmit(){

	
	 var url="/IOPM/KeyClues/KeyCluesAction_updateKey.action";
	 $.ajax({
		type:"post",
		url:url,
        data:{
        	'id':$('#myUpdateId').val(),
			'name': $('#userQ').val(),	
			'keyword2': $('.checkMask .zbhh').text(),
			'keyword3': $('.checkMask .bbhh').text(),
			'classifyTwo_name':$('#userE').val(),
			'classify_name':$('#userW').val(),
			},
			async:false,
	        dateType:"text",
	        success:function(msg){
				if(msg!=""&&msg!=null){
					alert(msg);
					submitWindow(msg);
				}else{
					submitWindow("删除失败！");
				}
			},error:function(){
				gocheckSubmitWindow("删除失败,系统错误");
			}
	   });
		return false;
}
// 删除
function deleteKey(){
	var deleteId=$("#deleteId").val();
		$.ajax({
			type:"post",
			url:"/IOPM/KeyClues/KeyCluesAction_deleteKey.action",
			data:{
				'id':deleteId
			},
			
			success:function(msg){
				var obj=eval("("+msg+")");
				alert(obj.info);
				window.location.reload();
					
				},
				error:function(msg){
					alert(msg);
				}
		})
	
}

// 查询特定的关键词
function userButtonSubmit(index){
	var query = $("#query option:selected").val()
	var queryText = $("#query option:selected").text()
	var userName = $("#check_name").val();
	var enableId = $("#enableIdList option:selected").val();
    var enableId6=$("#enableIdList6 option:selected").val();
    var enableId4 = $("#enableIdList2 option:selected").val();
    console.log(query);
    $("#querySearch").val(query);
	if(index != null && index != undefined && index != ""){
		$("#start").val(index-1);
	}
	// 关键词
	if (userName != '' && userName != undefined && userName != null && userName != "请输入名称") {
		
		$("#checkname1").val(userName);
	}else{
		$("#checkname1").val("");
	}
	
	// 使用状态
	if (enableId != null && enableId != undefined && $.trim(enableId) != '') {
	    
		$("#enableId").val(enableId); 
		
	} else {
		$("#enableId").val("");
	}
	if($("#pageSizeSelect").val()==''||$("#pageSizeSelect").val()==undefined||$("#pageSizeSelect").val()==null){
		$("#pageSizeSelect").val(5);
	}
if (enableId6 != null && enableId6 != undefined && $.trim(enableId6) != '') {
	    
		$("#enableId6").val(enableId6);
       
	
	} else {
		$("#enableId6").val("");
	}
if (enableId4 != null && enableId4 != undefined && $.trim(enableId4) != '') {
    
	$("#enableId4").val(enableId4);
   

} else {
	$("#enableId4").val("");
}
	document.getElementById("limitValue").value = $("#pageSizeSelect").val();
	document.getElementById("searchRole").action = "/IOPM/KeyClues/KeyCluesAction_selectClassify.action";
	
	document.getElementById("searchRole").submit();
	
}
// 翻页
function page(index) {
	document.getElementById("start").value = index;
	document.getElementById("searchRole").action ="/IOPM/KeyClues/KeyCluesAction_selectClassify.action";
	var userName = $("#check_name").val();
	var query = $("#query option:selected").val()
	console.log(query);
    $("#querySearch").val(query);
	// var roleId = $("#searchconditionRole option:selected").val();
	var enableId = $("#enableIdList option:selected").val();
	var numberId = $("#pageSizeSelect option:selected").val();
	var enableId6=$("#enableIdList6 option:selected").val();
    var enableId4 = $("#enableIdList2 option:selected").val();
	// 关键词
	if (userName != '' && userName != undefined && userName != null && userName != "请输入名称") {
		$("#checkname1").val(userName);
	}else{
		$("#checkname1").val("");
	}
	
	// 页面信息数
	if (numberId != null && numberId != undefined && $.trim(numberId) != '') {
		
		$("#numberId").val(numberId);
		
		$("#pageSizeSelect option").val(numberId);
		
		$(".inlblock").text($("#pageSizeSelect option:selected").text());
	} else {
		$("#numberId").val("");
	}
	// 使用状态
	if (enableId != null && enableId != undefined && $.trim(enableId) != '') {
		$("#enableId").val(enableId);
		$("#enableIdList").val(enableId);
		$(".status_option").text($("#enableIdList option:selected").text());
	} else {
		$("#enableId").val("");
	}
if (enableId6 != null && enableId6 != undefined && $.trim(enableId6) != '') {
	    
		$("#enableId6").val(enableId6);
		$("#enableIdList6 option").val(enableId6);
		$(".status_option").text($("#enableIdList6 option:selected").text());
	
	} else {
		$("#enableId6").val("");
	}
if (enableId4 != null && enableId4 != undefined && $.trim(enableId4) != '') {
    
	$("#enableId4").val(enableId4);
	$("#enableIdList2").val(enableId4);
	$(".status_option").text($("#enableIdList2 option:selected").text());

} else {
	$("#enableId4").val("");
}
	document.getElementById("searchRole").submit();
}


// 查询角色
function querySearch(){
	var enableId = $("#enableIdList option:selected").val();
	var numberId = $("#pageSizeSelect option:selected").val();
	// 页面信息数
	if (numberId != null && numberId != undefined && $.trim(numberId) != '') {
		
		$("#numberId").val(numberId);
		
		$("#pageSizeSelect option").val(numberId);
		
		$(".inlblock").text($("#pageSizeSelect option:selected").text());
	} else {
		$("#numberId").val("");
	}
	// 使用状态
	if (enableId != null && enableId != undefined && $.trim(enableId) != 'a') {
		$("#enableId").val(enableId);
		$("#enableIdList").val(enableId);
		$(".status_option").text($("#enableIdList option:selected").text());
	} else {
		$("#enableId").val("a");
	}
	document.getElementById("limitValue").value = $("#pageSizeSelect").val();
	document.getElementById("searchRole").submit();
	}

function cancleDel(){
	$('.checkMask.delete').hide();
	return false;
	
}
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