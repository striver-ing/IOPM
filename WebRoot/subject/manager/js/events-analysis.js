$(function(){
	//表格操作
	 	//删除按钮
	$('.a').each(function(){
		$(this).click(function(){
			alert('确定删除么？')
		});
	})
	$('.b').each(function(){
		$(this).click(function(){
			
		})
	})
	
	$('.c').each(function(){
		$(this).click(function(){
			
		})
	})
	//联想搜索
	$('.srhText').keyup(function(){
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
							$('#lenovo').hide()
						}else{
							$('#lenovo').show()
							$('#lenovo li').each(function(){
								$(this).mouseover(function(){
									$(this).css('background','#ccc')
									$(this).click(function(){
										$('.srhText').val($(this).html())
										$('#lenovo').hide()
									})
								})
							})
						}
					}else{
						$('#lenovo').hide()
					}
				},
				erorr:function(){
					alert(1)
				}
			})
		}
		
	})
$('#lenovo').mCustomScrollbar({
	theme:"inset-dark"
});

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
