$(function(){
	
	var kwSetA = new Set(),
	kwSetB = new Set();
	//渲染页面
	getLetter(1,5,'')
	
	//点击条数
	$('.fontcol .inlblock').change(function(){
		getLetter(1,$(this).val())
	})
	
	//点击确定
		$('#special .btn-primary').click(function(){
			 if ($('.increase #userC').val() == '' || $('.increase #lookStartTime').val() == '' || $('.increase #lookEndTime').val()== '' || $('.increase .textA').val()=='') {
		        	alert('请填写完整');
		            return false;
		        } else {
		        	$.ajax({
		        		url:'/IOPM/Subject/SubjectAction_updateSubjectOne.action',
		        		type:'post',
		        		data:{
		        			"name":$('#userC').val(),
		        			"startTime":$('#lookStartTime').val(),
		        			"endTime":$('#lookEndTime').val(),
		        			"keyword1":$('.textA').val(),
		        			"keyword2":$('.textB').val()
		        		},
		        		success:function(){
		        			
		        		},
		        		erorr:function(){
		        			alert('失败')
		        		}
		        		
		        	})
		        	$('.increase').hide();
		        	 return true;
		        }
		     })
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
	
	$('.c').each(function(){
		$(this).click(function(){
			
		})
	})
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
			
			getLetter(1,$('.fontcol .inlblock').val(),$('.srhText').val())
			
		})

});

function checkbox(a,b){
	var W = document.getElementById(a);
	var messArr = $(b);
	W.onclick=function(){
		for(var i=0;i<messArr.length;i++){
			messArr[i].checked = W.checked;
		}
	}
	for(var j=0;j<messArr.length;j++){
		messArr[j].onclick=function(){
			var flag = true;
			for(var j=0;j<messArr.length;j++){
				if(false == messArr[j].checked){
					flag = false;
				}
			}
			W.checked = flag;
		}
	}
}

//翻页
function getLetter(index,size,name){
	$.ajax({
		url:"/IOPM/Subject/SubjectAction_selectSubjectPage.action",
	    type:"post",
	    data:{"page":index,"size":size,"name":name},
	    dataType:'json',
	    success:function(data){
	    	var resultList = data.resultList
	    	var html="";
	    	for(var i=0;i<resultList.length;i++){

				html+='<tr>'+
							'<td style="width:10%">'+(i+1)+'<font name='+resultList[i].name+' start="'+resultList[i].startTime+'" end="'+resultList[i].endTime+'">'+resultList[i].keyword1+' </font><font class="fn">'+resultList[i].keyword12+'<font></td>'+                       
			                '<td style="width:25%" id='+resultList[i].id+'><a href="../report/report.ftl?name='+encodeURI(encodeURI(resultList[i].name))+'&id='+resultList[i].id+'">'+resultList[i].name+'</a></td>'+  
			                '<td style="width:25%"><span>'+resultList[i].startTime+'</span>至<span>'+resultList[i].endTime+'</span></td>'+  
			                '<td style="width:20%">'+(resultList[i].isSend ? "已推送" : "未推送") +'</td>'+  
			                '<td style="width:20%">'+  
			                	'<img src="/IOPM/subject/manager/imgs/b.png" class="b">'+  
			                	'<img src="/IOPM/subject/manager/imgs/a.png" class="a">'+  
			                '</td> '+  
			            '</tr>'
				}
				$('#data-table tbody').html(html)
				
	    	 var totalPage=Math.ceil(data.totalCounts/size);// 总页数
	         var html1="";
	         var pageNo=index;
	         var endNo=index+2;
	         var page=0;
       	 if(index>=totalPage-2){
       		 endNo=index+2;
       		 pageNo=totalPage-2;
       	   }
       	 if(endNo>totalPage){endNo=totalPage;}
       	 if(index>totalPage){index=totalPage;}
       	 if(totalPage<=2){pageNo=1;}
       	 if(pageNo!=1 && totalPage>=1){page=pageNo-1;}
       	 if(pageNo==1 && totalPage>=1){page=pageNo;}
       	 
       	 html1=data.totalCounts+'条'
		$('.tiao').html(html1)
				
			
				var html2="";// 拼接显示上一页部分
				if(index>1){
					html2+=`
						<div id="datatable">
							<ul class="pagination">							
											<li class="paginate_button previous" id="datatable_previous">
												<a href="javascript:getLetter(${index-1},${size},${name});" aria-controls="datatable" data-dt-idx="0" tabindex="0">上一页</a>
											</li>`;
					}else{
						html2+=`
						<div id="datatable">
							<ul class="pagination">							
											<li class="paginate_button previous disabled" id="datatable_previous">
												<a href="javascript:void(0);" aria-controls="datatable" data-dt-idx="0" tabindex="0">上一页</a>
											</li>`;	
					}
										
			    var html3="";// 拼接显示页标部分
			    if(data.totalCounts>0){
			         for(var i=index;i<=endNo;i++){
			        	 if(i==index){html3+=`<li class="paginate_button active">
							               <a href="#" aria-controls="datatable" data-dt-idx="1" tabindex="0">${i}</a></li>`;}
			        	 else{html3+=`<li class="paginate_button ">
							<a href="javascript:getLetter(${i},${size},${name});" aria-controls="datatable" data-dt-idx="2" tabindex="0">${i}</a>
							</li>`;}
			         }
			    }
			             
			    var html4="";// 拼接下一页部分
			    if(data.totalCounts>0){
			    	
			    	if(index!=totalPage){
			    		html4+=`<li class="paginate_button next" id="datatable_next">
						<a href="javascript:getLetter(${index+1},${size},${name});" aria-controls="datatable" data-dt-idx="7" tabindex="0">下一页</a>
						</li>`;
			    	}else{
			    		html4+=`<li class="paginate_button next disabled" id="datatable_next">
						<a href="javascript:void(0););" aria-controls="datatable" data-dt-idx="7" tabindex="0">下一页</a>
						</li>
						`;
			    	}
			    }
			    var html5=`
			    </ul>
				</div>
				<div class="goPage">
				<ul>
					<li>跳转到第</li>
					<li><input type="text" class="goNum" /></li>
					<li>页</li>
					<li><button type="button" id="goPageSecond" class="btn btn-primary" >GO</button></li>
				</ul>
			    </div>
			</div>`;
			$('.paging').html(html2+html3+html4+html5);
			$("#goPageSecond").click(function(){
		    	var text=parseInt($(this).parent().parent().children("li:first").next().children("input").val());	
		    	if(text>totalPage)text=totalPage;
		    	if(text!=null&&text!=""&&text!=undefined)getLetter(text);
		    });
			
			//删除按钮
			$('.a').each(function(){
				$(this).click(function(){
//		            $('.checkMask .MaskTop').html('删除关键词');
		            $('.checkMask .bounceInLeft').css({'width': '30%', 'height': '260px'});
		            $('.checkMask').hide();
		            $('.checkMask.delete').show();
		            resetMask(100);
					var id = $(this).parent().parent().children('td').eq(1).attr('id');
					$('.delete .btn-primary').click(function(){
						console.log(1)
						$.ajax({
							url:'/IOPM/Subject/SubjectAction_delectSubjectOne.action',
							type:'post',
							data:{"id":id},
							dataType:'json',
							success:function(){
								
								 alert('删除成功')
							}
						})
						 $('.checkMask.delete').hide();
						getLetter(1,$('.fontcol .inlblock').val(),$('.srhText').val())
					})
				});
			})
			
			//修改
			$('.b').each(function(){
				$(this).click(function(){
					var name = $(this).parent().parent().find('font').attr('name')
					var start = $(this).parent().parent().find('font').attr('start')
					var end = $(this).parent().parent().find('font').attr('end')
					var key1 = $(this).parent().parent().find('font').html()
					if($(this).parent().parent().find('.fn').html() == undefined){
						var key2 = $(this).parent().parent().find('.fn').html("")
					}else{
						var key2 = $(this).parent().parent().find('.fn').html()
					}
			
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
					$('#userC').val(name);
					$('#lookStartTime').val(start);
					$('#lookEndTime').val(end);
					$('.textA').val(key1)
					$('.textB').val(key2)
					kwSetA = new Set();
					kwSetB = new Set();
					$('.checkMask .hida').hide();
					$('.checkMask .hidb').hide();
					$('.checkMask .zbh').hide();
					$('.checkMask .bbh').hide();
					$('.checkMask.main.increase').show();
					resetMask(0);
			//			resetMaskVal();
				})
			
			})
	    }
	})
	
}

function ss(name){
	$.ajax({
		url:'/IOPM/Subject/SubjectAction_searchSubject.action',
		type:'post',
		data:{"name":name},
		dataType:'json',
		success:function(data){
			if(data == ''){
				alert('专题不存在')
			}else{
				var html = '<dt>专题:</dt><dd id='+data[0].id+'><a href="#">'+data[0].name+'</a></dd>'
				chuan(data[0].id)
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
}
