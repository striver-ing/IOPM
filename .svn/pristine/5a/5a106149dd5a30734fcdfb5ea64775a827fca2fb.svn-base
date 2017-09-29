
$(function(){
	var type = 1;//获取要显示的试图类型(0-全网热点1-涉广电热点)
	var period = 1;//周期：1-近24H；3-近3天；7-近7天；30-近30天
	var zero_idList="";
	var sort = 1;
	var classifyVar="";
	var spreadMedia = 0;
//	alert(0);
	$('#xgdu').attr('checked','checked');
	//点击radio
	$(".views input[type='radio']").click(function(){
		type = $(this).next("label").data("num");
		renderPageData(type,period,sort,classifyVar,spreadMedia);
	});
	//点击时间下拉框
	$(".historyHot").change(function(){
		period = $(this).val();
		renderPageData(type,period,sort,classifyVar,spreadMedia);
	});
	//点击排序radio
	$(".sort input[type='radio']").click(function(){
		sort = $(this).next("label").data("num");
		renderPageData(type,period,sort,classifyVar,spreadMedia);
	});
	
	$('.classify input[class="classifytype"]:checked').each(function(){// 得到类型checkbox的value
		classifyVar+=$(this).val()+',';
	});
	
	//点击classify checkbox
	$(".classify input[type='checkbox']").click(function(){
		classifyVar="";
		$('.classify input[class="classifytype"]:checked').each(function(){// 得到类型checkbox的value
			classifyVar+=$(this).val()+',';
		});
		if ($('#sensitives').prop("checked")) {
			spreadMedia = 1;
		} else {
			spreadMedia = 0;
		}
//		alert("2: " +  spreadMedia);
		renderPageData(type,period,sort,classifyVar,spreadMedia);
	});
	
	var moveTime = null;
	//点击成列表
  $('.views img').click(function () {
      
      if ($(this).attr('src') == '/IOPM/netHotSpotFound/netHotSpot/images/header.png') {
          $(this).attr('src', '/IOPM/netHotSpotFound/netHotSpot/images/qiu.png');
          $('.tagBall.tagLocal .tagLocal-list').show();
          $('.tagBall.tagNational').css('display', 'none');
          $('.tagBall.tagLocal').css('display', 'block');
          $('.tagBall.tagLocal .tagLocal-list').css('display', 'block');
          $('.tagBall.tagLocal .tagLocal-con').css('animation','show 0.8s linear');
          $('.tagBall.tagLocal .tagLocal-con').css('display', 'block');
      } else {
          $(this).attr('src', '/IOPM/netHotSpotFound/netHotSpot/images/header.png');
          $('.tagBall.tagLocal .tagLocal-list').hide();
          $('.tagBall.tagLocal').css('display', 'none');
          $('.tagBall.tagLocal .tagLocal-list').css('display', 'none');
          $('.tagBall.tagLocal .tagLocal-con').css('display', 'none');
          $('.tagBall.tagNational').css('display', 'block');
          $('.tagBall.tagNational').css('animation','show 0.8s linear');
      }
  })
	//默认加载视图
	renderPageData(type,period,sort,classifyVar,spreadMedia);
//  $("#local").parent().siblings().children('input').attr('checked','checked');
  $('.classify').show();
//  
  
  	$('#national').click(function(){
		$('.classify').slideUp();
		$('.sort').css('dispaly','none');
	})
	$('#local').click(function(){
		$(this).parent().siblings().children('input').attr('checked','checked');
		$('.classify').slideDown();
		$('.classify .sensitives').slideUp();
//		alert(33);
//		alert($('#sensitives').prop("checked"));
		$('#sensitives').prop("checked",false);
//		alert($('#sensitives').prop("checked"));
		$('.sort').show();
		//重新渲染数据
		classifyVar = "";
		$('.classify input[class="classifytype"]:checked').each(function(){// 得到类型checkbox的value
			classifyVar+=$(this).val()+',';
		});
		renderPageData(type,period,sort,classifyVar,spreadMedia);
	})
});
function IsNum(num){
	  var reNum=/^[0-9]+.?[0-9]*$/;
	  return(reNum.test(num));
	}
function parse(num){
	  var reNum=/^\d*$/;
	  return(reNum.test(num))
}
function initPage(type){	
//	console.log(type);
	 var $todayHot = $('.sets .date span.todayHot');
	 var $historyHot = $('.sets .date .historyHot');
	 //今日视图
	 $todayHot.click(function(){
	 	$historyHot.each(function(){
	 		$(this).find('option').eq(0).prop('selected',true);
	 	})
	 	$(this).hide();
	 });
//	 日起选择视图
	 $historyHot.change(function(){
	 	if($(this).val()=='今日'){
	 		$todayHot.hide();
	 	}else{
	 		$todayHot.show();
	 	}
	 });

//	$('#national').click(function(){
//		$('.classify').slideUp();
//		$('.sort').hide();
//	})
//	$('#local').click(function(){
//		$(this).parent().siblings().children('input').attr('checked','checked');
//		$('.classify').slideDown();
//		$('.sort').show();
//	})
	//点击成列表
//    $('.views img').click(function () {
//        clearInterval(moveTime);
//        if ($(this).attr('src') == '/IOPM/netHotSpotFound/netHotSpot/images/header.png') {
//            $(this).attr('src', '/IOPM/netHotSpotFound/netHotSpot/images/qiu.png');
//            $('.tagBall.tagLocal .tagLocal-list').show();
//            $('.tagBall.tagNational').css('display', 'none');
//            $('.tagBall.tagLocal').css('display', 'block');
//            $('.tagBall.tagLocal .tagLocal-list').css('display', 'block');
//            $('.tagBall.tagLocal .tagLocal-con').css('animation','show 0.8s linear');
//            $('.tagBall.tagLocal .tagLocal-con').css('display', 'block');
//            $('.tagLocal-con').show();
//        } else {
//            $(this).attr('src', '/IOPM/netHotSpotFound/netHotSpot/images/header.png');
//            $('.tagBall.tagLocal .tagLocal-list').hide();
//            $('.tagBall.tagNational').css('display', 'block');
//            $('.tagBall.tagLocal').css('display', 'none');
//            $('.tagBall.tagLocal .tagLocal-list').css('display', 'none');
//            $('.tagBall.tagLocal .tagLocal-con').css('display', 'none');
//            $('.tagBall.tagNational').css('animation','show 0.8s linear');
//            $('.tagLocal-con').hide();
//        }
//    })

    $('.tagLocal-list').mCustomScrollbar();
    
    //点击列表热点
    $('.tagBall.tagLocal ul').each(function(){
        $(this).children('li').eq(1).click(function(){
        	if(type == 1){
        		var keywords = $(this).parent().attr("title");
        		var id = $(this).parent().attr('id');
        		$.ajax({
        			type:'post',
        			url:'http://localhost:8081/IOPM/NetHotSpot/NetHotSpotAction_addUserAct.action',
					data:{action_type : 304,msg_id : id,watch : 'watch'},
        			dataType:'json',
        			success:function(){
        				alert('成功')
        			}
        		})
//        		alert("keywords: " + keywords);
        		window.location.href = "/IOPM/RelatedNews/RelatedNewsAction_getRelatedFtl.action?hot_id="+id+"&keywords="+keywords;
        	}else if(type == 0){
        		var top = $(this).html();
        		var idList = $(this).parent().attr("title");
        		tanChu(top,idList);
        	}
        	  
//            $('.checkMask.news').show();
//            resetMask(100);
//            return false;
        })
    })
    function tanChu(top,idList){
    	$.ajax({
			url: "/IOPM/NetHotSpot/NetHotSpotAction_getNetHotSpotDetailList.action",
			type: "post",
			data: {"infoIds":idList},
			dataType:"json",
			success:function(hotDetail){
				var html2 = `<div class="MaskTop">${top} 的相关新闻  <img src="images/add.png" alt=""/></div>`;
				for(var j = 0;j < hotDetail.data.length;j ++){
					 var emotion = hotDetail.data[j].emotion;
					 if(emotion == 1)emotion = "正面";
					 if(emotion == 2)emotion = "负面";
					 if(emotion == 3)emotion = "中立";
					 if(emotion == "" || emotion == null || emotion == undefined)emotion = "暂无";
					 hotDetail.data[j].content = hotDetail.data[j].content.replace(/(\r\n)|(\n)/g,'<br>');
					 html2+=`
						<em class="fa fa-times" id="em-news"></em>
						<div class="msgs text-center">
							<div class="news-info">
								<h4>${hotDetail.data[j].title}</h4>
								<p>${hotDetail.data[j].content}</p>
								<div class="details">
									<span>站点：</span><span class="infoSpan site">${hotDetail.data[j].site} </span>
									<span>作者：</span><span class="infoSpan source">${hotDetail.data[j].author} </span>
									<span>发布时间：</span><span class="infoSpan pushTime">${hotDetail.data[j].pubtime}</span>
									<span>情感倾向:</span><span class="infoSpan emotion">${emotion}</span>
									<a href="${hotDetail.data[j].url}" target="_blank">源网页</a>
								</div>
							</div>
						</div>
						`;
					}
				$('.checkMask.news').find('form').html(html2);
				$(".news-info p").each(function(index){	
					var s=$(this).html();
					$(this).attr("title",s);
					$(this).css("cursor", 'pointer'); 
					if(s.length > 200){
				        var s = s.substr(0,200);	
				        $(this).html(s+'...');
			        }
				});
				$('.news h4').click(function(){
					$('.newsTop').find('span').html($(this).html());
					$('.newsContent').find('p').html($(this).next().attr('title'));
					$('.info .pushTime').html($(this).siblings('div').find('.pushTime').html());
					$('.info .author').html($(this).siblings('div').find('.source').html());
					$('.info .emotion').html($(this).siblings('div').find('.emotion').html());
					$('.info a').attr("href",$(this).siblings('div').find('a').attr("href"));
					$('.news').hide();
					$('.hotSpot').show();
				});
				$('em').click(function(){
					$('.checkMask.news').hide();
				});
			}
		});
		$('.checkMask.news').show();
		resetMask(100);
		return false;
    }
	//点击标题弹出框
	$('.tag .tit').click(function() {
		if(type == 0){
		var top = $(this).html();
		var idList = $(this).prev().val();
		tanChu(top,idList);
		}
	})
    
	//加号
	$('.news img').mouseover(function(){
		$(this).css('transform','scale(1.5)');
		$(this).css('transition','all 0.5s');
	})
	$('.news img').mouseout(function(){
		$(this).css('transform','scale(1)');
		$(this).css('transition','all 0.5s');
	})
//	$('.news img').click(function(){
//		$('.news').hide()
//		$('.review').show();
//	})
	//点击标题
	$('.news h4').click(function(){
		$('.news').hide();
		$('.hotSpot').show();
	})
	//返回箭头
	$('.cha').mouseover(function(){
		$(this).css('transform','scale(1.5)');
		$(this).css('transition','all 0.5s');
	})
	$('.cha').mouseout(function(){
		$(this).css('transform','scale(1)');
		$(this).css('transition','all 0.5s');
	})
	$('.hotSpot .cha').click(function(){
		$('.hotSpot').hide();
		$('.news').show();
	})

	$('.review .cha').click(function(){
		$('.review').hide();
		$('.news').show();
	})

	//全国、地方视图切换
	 var $viewsInput = $('.views input');
	 var $tagBall = $('.tagBall');
	 $viewsInput.click(function(){
	 	//默认热度值全部选中
	 	$('.hotTab td input').attr('checked','checked');
		//全国云视图
		if($(this).index('input')==0){
			//document.getElementsByClassName('tagBall')[0].innerHTML=html1;
			//热点标题鼠标hover事件
			$('.tag').hover(function(){
				clearInterval(moveTime);
				$(this).css('z-index','99999')
				$(this).find('.tip').show()
			},function(){
				$(this).css('z-index','1');
				$(this).find('.tip').hide();
				animate();
			});

			//热点标题鼠标点击事件

			//热点标题点击 事件
			$('.tag .tip').click(function(){
				
				$(this).hide();
				$('.checkMask.hotSpot').show();
				resetMask(100);
				return false;
			});
			var tagEle = "querySelectorAll" in document ? document.querySelectorAll(".tag") : getClass("tag"),
		paper = "querySelectorAll" in document ? document.querySelector(".tagBall") : getClass("tagBall")[0],
        RADIUS =650,
        fallLength =700,
        tags=[],
        angleX = Math.PI/700,
        angleY = Math.PI/700,
        CX = paper.offsetWidth/2,
        CY = paper.offsetHeight/2,
        EX = paper.offsetLeft + document.body.scrollLeft + document.documentElement.scrollLeft,
        EY = paper.offsetTop + document.body.scrollTop + document.documentElement.scrollTop;
	    function getClass(className){
	        var ele = document.getElementsByTagName("*");
	        var classEle = [];
	        for(var i=0;i<ele.length;i++){
	            var cn = ele[i].className;
	            if(cn === className){
	                classEle.push(ele[i]);
	            }
	        }
	        return classEle;
	    }
	
	    function innit(){
	        for(var i=0;i<tagEle.length;i++){
	            var a , b;
	            var k = (2*(i+1)-1)/tagEle.length - 1;
	            var a = Math.acos(k);
	            var b = a*Math.sqrt(tagEle.length*Math.PI);
	            // var a = Math.random()*2*Math.PI;
	            // var b = Math.random()*2*Math.PI;
	            var x = RADIUS * Math.sin(a) * Math.cos(b);
	            var y = RADIUS * Math.sin(a) * Math.sin(b); 
	            var z = RADIUS * Math.cos(a);
	            var t = new tag(tagEle[i] , x , y , z);
	            //渲染字体颜色
	            var $hotNum = $('.hotTab td input');//获取热度
	            var startNum = 0;
	            var endNum = 20;
	            var nowNum = parseInt($(tagEle[i]).attr('data-hot'));
	            $.each($hotNum,function(index){
	            	startNum = $($hotNum[index]).attr("data-hotStartNum");
	            	startNum = parseInt(startNum);
	            	endNum = $($hotNum[index]).attr("data-hotEndNum");
	            	endNum = parseInt(endNum);
//	            	console.log(startNum+"-"+nowNum+"-"+endNum);
	            	if(nowNum > startNum && nowNum <= endNum){
	            		tagEle[i].style.color = $($hotNum[index]).attr("id");
	            	}
	            });
	            //根据数据库中取出的关键词、事件热度分配颜色  只是举个栗子
	            //parseInt(tagEle[i].getAttribute('data-hot'))>12?tagEle[i].style.color="white":tagEle[i].style.color="red";
	//              tagEle[i].style.color = "rgb("+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+")";
	            tags.push(t);
	            t.move();
	        }
	    }
	
	    Array.prototype.forEach = function(callback){
	        for(var i=0;i<this.length;i++){
	            callback.call(this[i]);
	        }
	    }
		
	    function animate(){
	        moveTime = setInterval(function(){
	            rotateX();
	            rotateY();
	            tags.forEach(function(){
	                this.move();
	            })
	        } , 300)
	    }
	
	    if("addEventListener" in window){
	        paper.addEventListener("mousemove" , function(event){
	            var x = event.clientX - EX - CX;
	            var y = event.clientY - EY - CY;
	            // angleY = -x* (Math.sqrt(Math.pow(x , 2) + Math.pow(y , 2)) > RADIUS/4 ? 0.0002 : 0.0001);
	            // angleX = -y* (Math.sqrt(Math.pow(x , 2) + Math.pow(y , 2)) > RADIUS/4 ? 0.0002 : 0.0001);
	            angleY = x*0.0001;
	            angleX = y*0.0001;
	        });
	    }
	    else {
	        paper.attachEvent("onmousemove" , function(event){
	            var x = event.clientX - EX - CX;
	            var y = event.clientY - EY - CY;
	            angleY = x*0.0001;
	            angleX = y*0.0001;
	        });
	    }
	    
	    function rotateX(){
	        var cos = Math.cos(angleX);
	        var sin = Math.sin(angleX);
	        tags.forEach(function(){
	            var y1 = this.y * cos - this.z * sin;
	            var z1 = this.z * cos + this.y * sin;
	            this.y = y1;
	            this.z = z1;
	        })
	        
	    }
	
	    function rotateY(){
	        var cos = Math.cos(angleY);
	        var sin = Math.sin(angleY);
	        tags.forEach(function(){
	            var x1 = this.x * cos - this.z * sin;
	            var z1 = this.z * cos + this.x * sin;
	            this.x = x1;
	            this.z = z1;
	        })
	    }
	
	    var tag = function(ele , x , y , z){
	        this.ele = ele;
	        this.x = x;
	        this.y = y;
	        this.z = z;
	    }
	
	    tag.prototype = {
	        move:function(){
	            var scale = fallLength/(fallLength-this.z);
	            var alpha = (this.z+RADIUS)/(2*RADIUS);
	            this.ele.style.fontSize = 3 * scale + "px";
	            this.ele.style.opacity = alpha+0.5;
	            this.ele.style.filter = "alpha(opacity = "+(alpha+0.5)*100+")";
	            this.ele.style.zIndex = parseInt(scale*100);
	            this.ele.style.left = this.x + CX - this.ele.offsetWidth/2 +"px";
	            this.ele.style.top = this.y + CY - this.ele.offsetHeight/2 +"px";
	        }
	    }
	    innit();
	    animate();
		}else{
			//地方云视图
			//document.getElementsByClassName('tagBall')[0].innerHTML=html2;
			//热点标题鼠标hover事件
			$('.tag').hover(function(){
				clearInterval(moveTime);
				$(this).css('z-index','99999')
				$(this).find('.tip').show()
			},function(){
				$(this).css('z-index','1');
				$(this).find('.tip').hide();
				animate();
			});
			//热点标题点击 事件
			$('.tag .tip').click(function(){
				$(this).hide();
				$('.checkMask.hotSpot').show();
				resetMask(100);
				return false;
			});
			var tagEle = "querySelectorAll" in document ? document.querySelectorAll(".tag") : getClass("tag"),
		paper = "querySelectorAll" in document ? document.querySelector(".tagBall") : getClass("tagBall")[0],
        RADIUS =650,
        fallLength = 700,
        tags=[],
        angleX = Math.PI/700,
        angleY = Math.PI/700,
        CX = paper.offsetWidth/2,
        CY = paper.offsetHeight/2,
        EX = paper.offsetLeft + document.body.scrollLeft + document.documentElement.scrollLeft,
        EY = paper.offsetTop + document.body.scrollTop + document.documentElement.scrollTop;
	    function getClass(className){
	        var ele = document.getElementsByTagName("*");
	        var classEle = [];
	        for(var i=0;i<ele.length;i++){
	            var cn = ele[i].className;
	            if(cn === className){
	                classEle.push(ele[i]);
	            }
	        }
	        return classEle;
	    }
	
	    function innit(){
	        for(var i=0;i<tagEle.length;i++){
	            var a , b;
	            var k = (2*(i+1)-1)/tagEle.length - 1;
	            var a = Math.acos(k);
	            var b = a*Math.sqrt(tagEle.length*Math.PI);
	            // var a = Math.random()*2*Math.PI;
	            // var b = Math.random()*2*Math.PI;
	            var x = RADIUS * Math.sin(a) * Math.cos(b);
	            var y = RADIUS * Math.sin(a) * Math.sin(b); 
	            var z = RADIUS * Math.cos(a);
	            var t = new tag(tagEle[i] , x , y , z);
	            
	            //渲染字体颜色
	            var $hotNum = $('.hotTab td input');//获取热度
	            var startNum = 0;
	            var endNum = 20;
	            var nowNum = parseInt($(tagEle[i]).attr('data-hot'));
	            $.each($hotNum,function(index){
	            	startNum = $($hotNum[index]).attr("data-hotStartNum");
	            	startNum = parseInt(startNum);
	            	endNum = $($hotNum[index]).attr("data-hotEndNum");
	            	endNum = parseInt(endNum);
//	            	console.log(startNum+"-"+nowNum+"-"+endNum);
	            	if(nowNum > startNum && nowNum <= endNum){
	            		tagEle[i].style.color = $($hotNum[index]).attr("id");
	            	}
	            });
	            
	           //根据数据库中取出的关键词、事件热度分配颜色  只是举个栗子
	           // parseInt(tagEle[i].getAttribute('data-hot'))>12?tagEle[i].style.color="white":tagEle[i].style.color="red";
	//              tagEle[i].style.color = "rgb("+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+")";
	            tags.push(t);
	            t.move();
	        }
	    }
	
	    Array.prototype.forEach = function(callback){
	        for(var i=0;i<this.length;i++){
	            callback.call(this[i]);
	        }
	    }
		
	    function animate(){
	        moveTime = setInterval(function(){
	            rotateX();
	            rotateY();
	            tags.forEach(function(){
	                this.move();
	            })
	        } , 300)
	    }
	
	    if("addEventListener" in window){
	        paper.addEventListener("mousemove" , function(event){
	            var x = event.clientX - EX - CX;
	            var y = event.clientY - EY - CY;
	            // angleY = -x* (Math.sqrt(Math.pow(x , 2) + Math.pow(y , 2)) > RADIUS/4 ? 0.0002 : 0.0001);
	            // angleX = -y* (Math.sqrt(Math.pow(x , 2) + Math.pow(y , 2)) > RADIUS/4 ? 0.0002 : 0.0001);
	            angleY = x*0.0001;
	            angleX = y*0.0001;
	        });
	    }
	    else {
	        paper.attachEvent("onmousemove" , function(event){
	            var x = event.clientX - EX - CX;
	            var y = event.clientY - EY - CY;
	            angleY = x*0.0001;
	            angleX = y*0.0001;
	        });
	    }
	    
	    function rotateX(){
	        var cos = Math.cos(angleX);
	        var sin = Math.sin(angleX);
	        tags.forEach(function(){
	            var y1 = this.y * cos - this.z * sin;
	            var z1 = this.z * cos + this.y * sin;
	            this.y = y1;
	            this.z = z1;
	        })
	        
	    }
	
	    function rotateY(){
	        var cos = Math.cos(angleY);
	        var sin = Math.sin(angleY);
	        tags.forEach(function(){
	            var x1 = this.x * cos - this.z * sin;
	            var z1 = this.z * cos + this.x * sin;
	            this.x = x1;
	            this.z = z1;
	        })
	    }
	
	    var tag = function(ele , x , y , z){
	        this.ele = ele;
	        this.x = x;
	        this.y = y;
	        this.z = z;
	    }
	
	    tag.prototype = {
	        move:function(){
	            var scale = fallLength/(fallLength-this.z);
	            var alpha = (this.z+RADIUS)/(2*RADIUS);
	            this.ele.style.fontSize = 3 * scale + "px";
	            this.ele.style.opacity = alpha+0.5;
	            this.ele.style.filter = "alpha(opacity = "+(alpha+0.5)*100+")";
	            this.ele.style.zIndex = parseInt(scale*100);
	            this.ele.style.left = this.x + CX - this.ele.offsetWidth/2 +"px";
	            this.ele.style.top = this.y + CY - this.ele.offsetHeight/2 +"px";
	        }
	    }
	    innit();
	    animate();
		}
	 });
	
	//热点标题鼠标hover事件
	$('.tag').hover(function(){
		clearInterval(moveTime);
		$(this).css('z-index','99999')
		$(this).find('.tip').show()
	},function(){
		$(this).css('z-index','1');
		$(this).find('.tip').hide();
		animate();
	});
	//热点标题点击 事件
	$('.tag .tip').click(function(){
		$(this).hide();
		$('.checkMask.hotSpot').show();
		resetMask(100);
		return false;
	});
	//热度值过滤
	var $hotNum = $('.hotTab td input');
	//初始化(当查询后重新给页面中文字填充颜色)
	$.each($hotNum,function(index,obj){
		var startNum = parseInt($(obj).attr("data-hotStartNum"));
		var endNum = parseInt($(obj).attr("data-hotEndNum"));
		var $tag = $('.tag');
		var tagNum = '';
		if($(obj).attr('checked')){//显示所选热度
			for (var i=0;i<$tag.length;i++) {
				tagNum = parseInt($tag.eq(i).attr('data-hot'));
				if(tagNum >= startNum && tagNum <= endNum){
					$tag.eq(i).show();
				}
			}
		}else{//隐藏所选热度
			for (var i=0;i<$tag.length;i++) {
				tagNum = parseInt($tag.eq(i).attr('data-hot'));
				if(tagNum >= startNum && tagNum <= endNum){
					$tag.eq(i).hide();
				}
			}
		}
	});
	
	//点击事件
	$hotNum.click(function(){
		var startNum = parseInt($(this).attr("data-hotStartNum"));
		var endNum = parseInt($(this).attr("data-hotEndNum"));
		var $tag = $('.tag');
		var tagNum = '';
		if($(this).attr('checked')){//显示所选热度
//			console.log('yes');
			for (var i=0;i<$tag.length;i++) {
				tagNum = parseInt($tag.eq(i).attr('data-hot'));
				if(tagNum >= startNum && tagNum <= endNum){
					$tag.eq(i).show();
				}
			}
		}else{//隐藏所选热度
//			console.log('no');
//			console.log(startNum+" 到 "+endNum);
			for (var i=0;i<$tag.length;i++) {
				tagNum = parseInt($tag.eq(i).attr('data-hot'));
//				console.log(startNum+" "+$tag.eq(i).attr('data-hot')+" "+endNum);
				if(tagNum >= startNum && tagNum <= endNum){
//					console.log(tagNum);
					$tag.eq(i).hide();
				}
			}
		}
		
	});
	
	
	//3d方法
	var tagEle = "querySelectorAll" in document ? document.querySelectorAll(".tag") : getClass("tag"),
		paper = "querySelectorAll" in document ? document.querySelector(".tagBall") : getClass("tagBall")[0],
		tagFix = "querySelectorAll" in document ? document.querySelectorAll(".clearfix") : getClass("clearfix"),		
        RADIUS =650,
        fallLength = 700,
        tags=[],
        angleX = Math.PI/700,
        angleY = Math.PI/700,
        CX = paper.offsetWidth/2,
        CY = paper.offsetHeight/2,
        EX = paper.offsetLeft + document.body.scrollLeft + document.documentElement.scrollLeft,
        EY = paper.offsetTop + document.body.scrollTop + document.documentElement.scrollTop;
    function getClass(className){
        var ele = document.getElementsByTagName("*");
        var classEle = [];
        for(var i=0;i<ele.length;i++){
            var cn = ele[i].className;
            if(cn === className){
                classEle.push(ele[i]);
            }
        }
        return classEle;
    }

    function innit(){
        for(var i = 0; i < tagEle.length; i++){
            var a , b;
            var k = (2*(i+1)-1)/tagEle.length - 1;
            var a = Math.acos(k);
            var b = a*Math.sqrt(tagEle.length*Math.PI);
            // var a = Math.random()*2*Math.PI;
            // var b = Math.random()*2*Math.PI;
            var x = RADIUS * Math.sin(a) * Math.cos(b);
            var y = RADIUS * Math.sin(a) * Math.sin(b); 
            var z = RADIUS * Math.cos(a);
            var t = new tag(tagEle[i] , x , y , z);
          //渲染字体颜色
            var $hotNum = $('.hotTab td input');//获取热度
            var startNum = 0;
            var endNum = 20;
            var nowNum = parseInt($(tagEle[i]).attr('data-hot'));
            var fixNum = parseInt($(tagFix[i]).attr('data-hot'));
            $.each($hotNum,function(index){
            	startNum = $($hotNum[index]).attr("data-hotStartNum");
            	endNum = $($hotNum[index]).attr("data-hotEndNum");
            	//console.log(startNum+"-"+nowNum+"-"+endNum);
            	
                if(nowNum > startNum && nowNum <= endNum){
            	    tagEle[i].style.color = $($hotNum[index]).attr("id");
            	}
            	
            	if(fixNum > startNum && fixNum <= endNum){
            		tagFix[i].style.color = $($hotNum[index]).attr("id");
            	}
            });
            
            //根据数据库中取出的关键词、事件热度分配颜色  只是举个栗子
            //parseInt(tagEle[i].getAttribute('data-hot'))>12?tagEle[i].style.color="white":tagEle[i].style.color="red";
//              tagEle[i].style.color = "rgb("+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+")";
            tags.push(t);
            t.move();
        }
        //列表部分颜色渲染
        for(var i = 0; i < tagFix.length; i++){
        	var a , b;
            var k = (2*(i+1)-1)/tagFix.length - 1;
            var a = Math.acos(k);
            var b = a*Math.sqrt(tagFix.length*Math.PI);
            // var a = Math.random()*2*Math.PI;
            // var b = Math.random()*2*Math.PI;
            var x = RADIUS * Math.sin(a) * Math.cos(b);
            var y = RADIUS * Math.sin(a) * Math.sin(b); 
            var z = RADIUS * Math.cos(a);
            var t = new tag(tagFix[i] , x , y , z);
          //渲染字体颜色
            var $hotNum = $('.hotTab td input');//获取热度
            var startNum = 0;
            var endNum = 20;
            var fixNum = parseInt($(tagFix[i]).attr('data-hot'));
            $.each($hotNum,function(index){
            	startNum = $($hotNum[index]).attr("data-hotStartNum");
            	endNum = $($hotNum[index]).attr("data-hotEndNum");
            	//console.log(startNum+"-"+nowNum+"-"+endNum);
            	if(fixNum > startNum && fixNum <= endNum){
            		tagFix[i].style.color = $($hotNum[index]).attr("id");
            	}
            });
        }
    }

    Array.prototype.forEach = function(callback){
        for(var i=0;i<this.length;i++){
            callback.call(this[i]);
        }
    }

    function animate(){
        moveTime = setInterval(function(){
            rotateX();
            rotateY();
            tags.forEach(function(){
                this.move();
            })
        } , 300)
    }

    if("addEventListener" in window){
        paper.addEventListener("mousemove" , function(event){
            var x = event.clientX - EX - CX;
            var y = event.clientY - EY - CY;
            // angleY = -x* (Math.sqrt(Math.pow(x , 2) + Math.pow(y , 2)) > RADIUS/4 ? 0.0002 : 0.0001);
            // angleX = -y* (Math.sqrt(Math.pow(x , 2) + Math.pow(y , 2)) > RADIUS/4 ? 0.0002 : 0.0001);
            angleY = x*0.0001;
            angleX = y*0.0001;
        });
    }
    else {
        paper.attachEvent("onmousemove" , function(event){
            var x = event.clientX - EX - CX;
            var y = event.clientY - EY - CY;
            angleY = x*0.0001;
            angleX = y*0.0001;
        });
    }
    
    function rotateX(){
        var cos = Math.cos(angleX);
        var sin = Math.sin(angleX);
        tags.forEach(function(){
            var y1 = this.y * cos - this.z * sin;
            var z1 = this.z * cos + this.y * sin;
            this.y = y1;
            this.z = z1;
        })
        
    }

    function rotateY(){
        var cos = Math.cos(angleY);
        var sin = Math.sin(angleY);
        tags.forEach(function(){
            var x1 = this.x * cos - this.z * sin;
            var z1 = this.z * cos + this.x * sin;
            this.x = x1;
            this.z = z1;
        })
    }

    var tag = function(ele , x , y , z){
        this.ele = ele;
        this.x = x;
        this.y = y;
        this.z = z;
    }

    tag.prototype = {
        move:function(){
            var scale = fallLength/(fallLength-this.z);
            var alpha = (this.z+RADIUS)/(2*RADIUS);
            this.ele.style.fontSize = 3 * scale + "px";
            this.ele.style.opacity = alpha+0.5;
            this.ele.style.filter = "alpha(opacity = "+(alpha+0.5)*100+")";
            this.ele.style.zIndex = parseInt(scale*100);
            this.ele.style.left = this.x + CX - this.ele.offsetWidth/2 +"px";
            this.ele.style.top = this.y + CY - this.ele.offsetHeight/2 +"px";
        }
    }
    innit();
    animate();
}
//渲染数据
function renderPageData(type,period,sort,classifyVar,spreadMedia){
//	alert("renderPageData_classifyVar : " + classifyVar);
//	alert("renderPageData_spreadMedia : " + spreadMedia);
	//默认加载视图
	$.ajax( {
		type : "post",
		url : "/IOPM/NetHotSpot/NetHotSpotAction_getNetHotSpotList.action",
		async: false,//注意这里要用同步
		dataType : "text",
		data : {
			'type' : type,
			'period' : period
			,'classify':classifyVar
			,'spreadMedia':spreadMedia
		},
		success : function(msg) {
			var mesgs = JSON.parse(msg);
			var html1 = "";
			var html2 =`
			<ul class=" clearfi">
			  <li>排名</li>
			  <li>热点</li>
			  <li>热度</li>
		    </ul>
			`;
			console.log(mesgs.status);
			var title = mesgs.status;//return head message
			if (title == 1 && type == 0) {
				for ( var i = 0; i < mesgs.data.length; i++) {
					//html1+='<a class="tag" href="javascript:;" target="_blank" href="javascript:;" data-hot="'+ mesgs.data[i].hot +'"><span class="tit">'+ mesgs.data[i].kw.substring(0,6) +'</span><div class="tip"><div class="top"><span class="newsStyle">[新闻]</span><span class="newsTitle">asdfasdf</span></div><div class="contents"><div class="newsContent">adsjflajsdkljfakl;jsdofjowejflkajsdlkfjalksjflajlsjfowjeofjawlfkjslkf</div></div><div class="newInfo"><span>站点：</span><span class="site">www.baidu.com</span><span>发布时间：</span><span class="pushTime">2017-04-10 18:20:59</span><br/><span>关键词：</span><span class="kw">超标 违规 超标 违规 大肆违法</span></div></div></a>';
					var idList = mesgs.data[i].infoIds;
//					console.log(idList);
//					//获取某个热点详细信息
//					$.ajax({
//						url: "/IOPM/NetHotSpot/NetHotSpotAction_getNetHotSpotDetailList.action",
//						type: "post",
//						async: false,//注意这里要用同步
//						data: {"infoIds":idList},
//						success: function(hotDetail){
//							
//							//新搞法   可视化拼接字符串  清晰简单  如果报错 clear掉 语法么问题
//							var hotType = hotDetail.data[0].type;
//							//1，新闻；2，微信；3，微博；4，论坛；7，app；8，视频
//							if(hotType == 1){
//								hotType = "新闻";
//							}else if(hotType == 2){
//								hotType = "微信";
//							}else if(hotType == 3){
//								hotType = "微博";
//							}else if(hotType == 4){
//								hotType = "论坛";
//							}else if(hotType == 7){
//								hotType = "app";
//							}else if(hotType == 8){
//								hotType = "视频";
//							}
//							//console.log(`hotDetail.data[i].title====${hotDetail.data[0].title}`);
//							//"showHotDetailDialog('${hotDetail.data[0].title}','${hotDetail.data[0].pubtime}','${hotDetail.data[0].site}','${hotDetail.data[0].url}','${hotDetail.data[0].keywords}','${hotDetail.data[0].content}','${hotDetail.data[0].picture}');"
//							var title = hotDetail.data[0].title;
//							var pubtime = hotDetail.data[0].pubtime;
//							var site = hotDetail.data[0].site;
//							var url = hotDetail.data[0].url;
//							console.log(url);
//							var keywords = hotDetail.data[0].keywords;
//							var author = hotDetail.data[0].author;
////							console.log("author"+author);
//							var emotion = hotDetail.data[0].emotion;
//							if(emotion==1)emotion="正面";
//		                	if(emotion==2)emotion="负面";
//		                	if(emotion==3)emotion="中立";
//							var content = hotDetail.data[0].content;
////							console.log("content:"+content);
//							var picture = hotDetail.data[0].picture;
//							if(content != null && content != ""){
//								content = content.replace(/(\r\n)|(\n)/g,'<br>');//去除行尾空白
//							}else{
//								content = "无";
//							}
//							var contentT="";
//							if(content.length > 200){
//						        var contentT = content.substr(0,200)+"...";	
//						        
//					        }
							//showHotDetailDialog('${title}','${pubtime}','${site}','${url}','${keywords}','${content}','${picture}','${emotion}','${author}');
							if(i <= 50){
								html1 += `
								<a class="tag" target="_blank" href="javascript:;" data-hot="${mesgs.data[i].hot}" >
									<input type="hidden" value="${idList}"/>
						            <span class="tit">${mesgs.data[i].kw.substring(0,15)}</span>
									
								</a>
							`;
							}
							
								
								html2+=`
								   <ul class=" clearfix"  data-hot="${mesgs.data[i].hot}" title="${idList}">
									<li>${i+1}</li>
									<li>${mesgs.data[i].kw.substring(0,15)}</li>
									<li>${mesgs.data[i].hot}</li>
								   </ul>
								   `;
//						}
//					});
				}
				$('.tagLocal-con').html(html2);
				document.getElementsByClassName('tagNational')[0].innerHTML=html1;
				initPage(type);
			}else if(type == 1 && title == 1){
			  html2=`
				<ul class=" clearfi">
				  <li>排名</li>
				  <li>热点</li>
				  <li>热度</li>
				  <li>相关度</li>
				  <li>采纳情况</li>
				  <li>观看数</li>
			    </ul>
				`;
				var objArray = new Array();      //全部存在数组里
				for(var i = 0; i < mesgs.data.length; i++){
					var key = "";
					var value = "";
					for(var item in mesgs.data[i]){
							value = mesgs.data[i][item];
							key = item
					}
					var name = "";
					$.ajax({
						url:"/IOPM/NetHotSpot/NetHotSpotAction_getCluesById.action",
						async: false,
						type:"post",
						data:{'clues_id':key},
						success:function(msg){
							message = eval("("+msg+")");
							if(message != null){
								name = message.name;
							}
						}
					})
					for(var j = 0; j < value.data.length; j++){
						var obj = new Object();
						obj.clues_ids = key;
						obj.name = name;
						obj.id = value.data[j].id;
						obj.kw = value.data[j].kw;
						obj.kg = value.data[j].kg;
						obj.hot = value.data[j].hot;
						obj.weight = value.data[j].weight;
						obj.acceptcount = value.data[j].acceptcount;
						obj.unacceptcount = value.data[j].unacceptcount;
						obj.watchcount = value.data[j].watchcount;
						objArray.push(obj);
					}
				}
				if(sort == 1){
					var compare = function (obj1, obj2) {
					    var val1 = obj1.weight;
					    var val2 = obj2.weight;
					    if (val1 < val2) {
					        return 1;
					    } else if (val1 > val2) {
					        return -1;
					    } else {
					        return 0;
					    }            
					}
				}else{
					var compare = function (obj1, obj2) {
					    var val1 = obj1.hot;
					    var val2 = obj2.hot;
					    if (val1 < val2) {
					        return 1;
					    } else if (val1 > val2) {
					        return -1;
					    } else {
					        return 0;
					    }            
					}
				}
				 
				
				objArray = objArray.sort(compare);
				//涉广电热点球显示部分
				var length;
				if(mesgs.data.length > 50){
					length = 50;
				}else{
					length = mesgs.data.length;
				}
				for(var i = 0; i < length; i++){
//					console.log(objArray[i].clues_ids);
//					if(objArray[i].name == objArray[i].kw || objArray[i].name == ""){
					if(true){
						html1 += `
						<a class="tag" href="/IOPM/RelatedNews/RelatedNewsAction_getRelatedFtl.action?hot_id=${objArray[i].id}&keywords=${objArray[i].kg}" data-hot="${objArray[i].hot}" >
				            <span class="tit">${objArray[i].kw}</span>
						</a>
						`;
					}else{
						html1 += `
						<a class="tag" href="/IOPM/RelatedNews/RelatedNewsAction_getRelatedFtl.action?hot_id=${objArray[i].id}&keywords=${objArray[i].kg}" data-hot="${objArray[i].hot}" >
				            <span class="tit">${objArray[i].name.substring(0,10)}:${objArray[i].kw.substring(0,15)}</span>
						</a>
					   `;
					}
					
				}
				//涉广电热点列表显示
				for(var i = 0; i < objArray.length; i++){
//					 if(objArray[i].name == objArray[i].kw  || objArray[i].name == ""){
					if(true){
						 html2+=`
						   <ul class=" clearfix"  data-hot="${objArray[i].hot}" title="${objArray[i].kg}" id="${objArray[i].id}">
							<li>${i+1}</li>
							<li>${objArray[i].kw}</li>
							<li>${objArray[i].hot}</li>
							<li>${objArray[i].weight}</li>

							<li class="adopt"><img src="/IOPM/netHotSpotFound/netHotSpot/images/svg1.png" class="svg1"><span>${objArray[i].acceptcount}</span>
							<img src="/IOPM/netHotSpotFound/netHotSpot/images/svg2.png" class="svg2"><span>${objArray[i].unacceptcount}</span>
							</li>
							<li>${objArray[i].watchcount}</li>
							<input type="hidden" value="${objArray[i].id}"/>
						   </ul>
						   `;
					 }else{
						 html2+=`
						 
						 
						   <ul class=" clearfix"  data-hot="${objArray[i].hot}" title="${objArray[i].kg}" id="${objArray[i].id}">
							<li>${i+1}</li>
							<li>${objArray[i].name}：${objArray[i].kw}</li>
							<li>${objArray[i].hot}</li>
							<li>${objArray[i].weight}</li>
					
							<li class="adopt"><img src="/IOPM/netHotSpotFound/netHotSpot/images/svg1.png" class="svg1"><span>${objArray[i].acceptcount}</span>
							<img src="/IOPM/netHotSpotFound/netHotSpot/images/svg2.png" class="svg2"><span>${objArray[i].unacceptcount}</span></li>
							<li>${objArray[i].watchcount}</li>
							<input type="hidden" value="${objArray[i].id}"/>
						   </ul>
						   `; 
					 }
				}
				$('.tagLocal-con').html(html2);
				document.getElementsByClassName('tagNational')[0].innerHTML=html1;
				initPage(type);
					$('.svg1').each(function(){
						$(this).click(function(){
							var i = parseInt($(this).next('span').html());
							var id= $(this).parent().parent().attr('id');
							$(this).next('span').html(i+1);
							$(this).off("click");
							$(this).siblings().off("click");
							$.ajax({
								type:'post',
								url:'/IOPM/NetHotSpot/NetHotSpotAction_addUserAct.action',
								data:{'action_type':301,
									'msg_id' : id,
									'accept' : 'accept'},
								dataType:'json',
								success:function(){
									alert('成功')
								}
							})
					})
					})
					
					$('.svg2').each(function(){
						$(this).click(function(){
							var i = parseInt($(this).next('span').html());
							var id= $(this).parent().parent().attr('id');
							$(this).next('span').html(i+1);
							$(this).off("click");
							$(this).siblings().off("click");
							$.ajax({
								type:'post',
								url:'/IOPM/NetHotSpot/NetHotSpotAction_addUserAct.action',
								data:{action_type : 302,msg_id : id,unaccept : "unaccept"},
								dataType:'json',
								success:function(){
									alert('成功')
								}
							})
					})
					})
				
			}else{
				alert('查询失败');
			}
			
		},
		error : function(msg) {
			alert('error');
		}
		
	});
}

//热点详细信息对话框
function showHotDetailDialog(title,pubtime,site,url,keywords,picture,content,emotion,author){
//	console.log(title+" "+pubtime+" "+site+" "+url+" "+keywords+" "+picture+"  "+emotion+" "+author);
	//清空原来的值
	$(".newsTop span").text("");//标题
	$(".newsInfo .info span.pubTime").text("");//时间
	$(".newsInfo .info span.emotion").text("");//情感
	$(".newsInfo .info span.author").text("");//作者
	$(".newsInfo .info span.source").text("");//站点
	$(".newsInfo .info a").attr("href","");//查看原网页
	$(".newsContent img").attr("src","");//图片
	$(".newsContent p").text("");//主要内容
	//填充值
	//关键词标红
	if(keywords!=null&&keywords!=""&&keywords!=undefined){
		
    var keyArray=keywords.split(',');
    for(var j=0;j<keyArray.length;j++){
      String.prototype.replaceAll = function(s1,s2){ 
			return this.replace(new RegExp(s1,"gm"),s2); 
			}
	   content=content.replaceAll(keyArray[j],"<font color='red' >"+keyArray[j]+"</font>");
	   title=title.replaceAll(keyArray[j],"<font color='red' >"+keyArray[j]+"</font>");
       }
	 } 
	$(".newsTop span").html(title);//标题
	$(".newsInfo .info span.pubTime").text(pubtime);//时间
	$(".newsInfo .info a").attr("href",url);//查看原网页
	$(".newsInfo .info span.emotion").text(emotion);//情感
	$(".newsInfo .info span.author").text(author);//作者
	$(".newsInfo .info span.source").text(site);//站点
	$(".newsContent img").attr("src",picture);//图片
	$(".newsContent img").hide();
	$(".newsContent p").html(content);//主要内容
}
function showAllHot(a,html2){
	var html=a.innerHTML;
	alert(html);
	//console.log(html2);
}
function getKey(key,name){
	$.ajax({
		url:"/IOPM/NetHotSpot/NetHotSpotAction_getCluesById.action",
		async: false,
		type:"post",
		data:{'clues_id':key},
		success:function(msg){
			name = msg.name;
		}
	});
}

function clickClassify(){
	
	$('input[class="classifytype"]:checked').each(function(){// 得到类型checkbox的value
		classifyVar+=$(this).val()+',';
	});
	alert(classifyVar);
	renderPageData(type,period,sort);
}