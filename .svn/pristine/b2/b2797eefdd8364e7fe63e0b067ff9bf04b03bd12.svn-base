$(function(){
	//遮罩层
	var $mask=$('.zTreeMask');
	//权限界面
	var $setBox=$('.content_wrap');
	//按钮
	var $set=$('.setHon');
//	var $zTree=$('.zTreeBackground');
	//弹出遮罩层
	$set.click(function(){
		$('.zTreeMask').css({'display':'block','width':$(window).width(),'height':$(window).height()});
		$('.content_wrap').css('display','block');
	});
	$('.ok').click(function(){
		var checkArr=[];
		var $nowCheck=$('.checkbox_true_full');//获取所有被选中项 并添加到checkArr数组 然后返回
		$nowCheck.each(function(index){
			checkArr.push($nowCheck.eq(index).attr('id').split('_')[1]);
		});
		$mask.css('display','none');
		$setBox.css('display','none');
		console.log(checkArr);
		return checkArr;
	});
	$('.no').click(function(){
		$mask.css('display','none');
		$setBox.css('display','none');
		return false
	});
	
	$('div.zTreeBackground em').click(function(){
		$mask.css('display','none');
		$setBox.css('display','none');
	});
	//点击遮罩层自身会消失
//	$mask.click(function(){
//		$(this).css('display','none');
//		$setBox.css('display','none');
//	});

	$(document).ready(function(){
		$("#browser").treeview({
			toggle: function() {
//				console.log("%s was toggled.", $(this).find(">span").text());
			}
		});
		
		// 增加onclick事件处理函数			
			$("input[name=privilegeIds]").live("click",function(){
				var flag=true;
				// 当选中或取消某个权限时，同时也选中或取消所有的下级权限
				$(this).siblings("ul").find("input").prop("checked", this.checked);

				// 当选中某个权限时，应同时选中他的直系上的权限。
				if(this.checked == true){ // 可以直接写为 if(this.checked){..}
//					$("input[name=privilegeIds]:not eq(0)").each(function(){
//						
//						if($(this).checked!=true){
//							flag=false;
//						}
//					})
					$(this).parents("li").children("input[name=privilegeIds]").prop("checked", true);
//					if(flag==false){
//						$("input[name=privilegeIds]").first().prop("checked",false);
//					}else{
//						$("input[name=privilegeIds]").first().prop("checked",true);
//					}
				}
				
				// 当取消某个权限时，如果同级的权限都没有选择，就也取消上级权限
				else{
					if( $(this).parent().siblings("li").children("input:checked").size() == 0 ){
						$(this).parent().parent().siblings("input").prop("checked", false);
					}
				}
			});
	});
});	
