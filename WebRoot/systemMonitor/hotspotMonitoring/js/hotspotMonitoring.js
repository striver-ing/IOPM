$(function(){
	//热点概述
	$.ajax({
		url:'/IOPM/SystemMoniter/SystemMoniter_hotView.action',
		type:'post',
		data:{},
		dataType:'json',
		success:function(data){
			$('#hotg').html(data.概述)
		}
	})
	
	//热点统计
	hotInforData(7)
	$('#hot').change(function(){
		hotInforData($(this).val())
	})
	function hotInforData(s){
		var synchronous = echarts.init(document.getElementById('synchronous'));
		synchronous.showLoading()
		$.ajax({
			url:'/IOPM/SystemMoniter/SystemMoniter_hotInfoData.action',
			type:'post',
			data:{'dateCount':s},
			dataType:'json',
			success:function(data){
				$('#sy').html(data.hotView)
				delete data.hotView
				var time = []
				var allCount = []
				var adopt = []
				var unadopt = []
				var read = []
				var special = []
				for(key in data){
					time.push(key)
					allCount.push(data[key].allCount)
					adopt.push(data[key][301])
					unadopt.push(data[key][302])
					read.push(data[key][304])
					special.push(data[key][305])
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
//				            color: ["#ffab1b", "#ff0000", "#d21de6", "#21de21", "#07e0ca", "#0000ff", "#ce0ace", "#158cf9", "#e037f7", "#c57d00", "#39a3ff"],
							legend: {
								data:['每日数据量','每日采纳量','不采纳量','查看量','设为专题量']
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
									width: '80%',
									height: 30,
									showDataShadow: false,
									left: '10%'
								},
							],
							series : [

								{
									name:'每日数据量',
									type:'line',
									barWidth : 5,
									data:allCount
								},
								{
									name:'采纳量',
									type:'line',
									barWidth : 5,
									data:adopt
								},
								{
									name:'不采纳量',
									type:'line',
									barWidth : 5,
									data:unadopt
								},
								{
									name:'查看量',
									type:'line',
									barWidth : 5,
									data:read
								},
								{
									name:'设为专题量',
									type:'line',
									barWidth : 5,
									data:special
								}
							]
						};
						synchronous.hideLoading();
						synchronous.setOption(option);
			}
		})
	}
	
	
			
			
			//采纳vs不采纳
			$.ajax({
				url:'/IOPM/SystemMoniter/SystemMoniter_hotAccept.action',
				type:'post',
				data:{"acceptDays":1,"unAcceptDays":1},
				dataType:'json',
				success:function(data){
					$('#bottom').html(data.data)
					if(data.accept[0] != undefined){
						var html1=''
							for(var i=0;i<data.accept.length;i++){
								html1 += '<ul><li id='+data.accept[i].MSG_ID+'>'+data.accept[i].TITLE+'</li><li>'+data.accept[i].COUNT+'次</li></ul>'
							}
						$('#adopt').find('.td_td').html(html1)
					}else{
						$('#adopt').find('.td_td').html('')
					}
					if(data.Unaccept[0] != undefined){
						var html2=''
							for(var i=0;i<data.Unaccept.length;i++){
								html2 += '<ul><li id='+data.Unaccept[i].MSG_ID+'>'+data.Unaccept[i].TITLE+'</li><li>'+data.Unaccept[i].COUNT+'次</li></ul>'
							}
						$('#notAdopt').find('.td_not').html(html2)
					}else{
						$('#notAdopt').find('.td_not').html('')
					}
				}
			})
			
			$('#adopt_s').change(function(){
				$.ajax({
					url:'/IOPM/SystemMoniter/SystemMoniter_hotAccept.action',
					type:'post',
					data:{"acceptDays":$(this).val()},
					dataType:'json',
					success:function(data){
						$('#bottom').html(data.data)
						if(data.accept[0] != undefined){
							var html1=''
								for(var i=0;i<data.accept.length;i++){
									html1 += '<ul><li id='+data.accept[i].MSG_ID+'>'+data.accept[i].TITLE+'</li><li>'+data.accept[i].COUNT+'次</li></ul>'
								}
							$('#adopt').find('.td_td').html(html1)
						}else{
							$('#adopt').find('.td_td').html('')
						}
					}
				})
			})
			
			$('#notAdopt_s').change(function(){
				$.ajax({
					url:'/IOPM/SystemMoniter/SystemMoniter_hotAccept.action',
					type:'post',
					data:{"unAcceptDays":$(this).val()},
					dataType:'json',
					success:function(data){
						$('#bottom').html(data.data)
						if(data.Unaccept[0] != undefined){
							var html2=''
								for(var i=0;i<data.Unaccept.length;i++){
									html2 += '<ul><li id='+data.Unaccept[i].MSG_ID+'>'+data.Unaccept[i].TITLE+'</li><li>'+data.Unaccept[i].COUNT+'次</li></ul>'
								}
							$('#notAdopt').find('.td_not').html(html2)
						}else{
							$('#notAdopt').find('.td_not').html('')
						}
					}
				})
			})
			
			$('.td').mCustomScrollbar({
				theme:"inset-dark"
			});
			
})

