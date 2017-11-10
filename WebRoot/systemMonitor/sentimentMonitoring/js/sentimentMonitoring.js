$(function(){
	//舆情概述
	$.ajax({
		url:'/IOPM/SystemMoniter/SystemMoniter_hotView.action',
		type:'post',
		data:{},
		dataType:'json',
		success:function(data){
			$('#gais').html(data.概述)
		}
	})
	
		//舆情统计
			var synchronous = echarts.init(document.getElementById('synchronous'));
			synchronous.showLoading()
	$.ajax({
		url:'/IOPM/SystemMoniter/SystemMoniter_articleInfoData.action',
		type:'post',
		data:{'dateCount':7},
		dataType:'json',
		success:function(data){
			$('#sy').html(data.hotView)
			delete data.hotView
			var time = []
			var allCount = []
			var adopt = []
			var unadopt = []
			var yuan = []
			var read = []
			var special = []
			var tuis = []
			var xinwen = []
			var weixin = []
			var weibo = []
			var luntan = []
			var app = []
			var shipin = []
			for(key in data){
				time.push(key)
				allCount.push(data[key].allCount)
				adopt.push(data[key][301])
				unadopt.push(data[key][302])
				yuan.push(data[key][303])
				read.push(data[key][304])
				special.push(data[key][305])
				tuis.push(data[key][306])
				xinwen.push(data[key][1])
				weixin.push(data[key][2])
				weibo.push(data[key][3])
				luntan.push(data[key][4])
				app.push(data[key][7])
				shipin.push(data[key][8])
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
								data:['总数据量','微博数据量','微信数据量','新闻数据量','论坛数据量','app数据量','视频数据量','采纳量','不采纳量','浏览量','跳转源网页量','设为专题数据量']
							},
							toolbox: {
								show : true,
								top:20,
								feature : {
									mark : {show: true},
									dataView : {show: true, readOnly: false},
									magicType: {show: true, type: ['line', 'bar']},
									restore : {show: true},
									saveAsImage : {show: true},
									
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
									name:'总数据量',
									type:'line',
									barWidth : 5,
									data:allCount
								},
								{
									name:'微博数据量',
									type:'line',
									barWidth : 5,
									data:weibo
								},
								{
									name:'微信数据量',
									type:'line',
									barWidth : 5,
									data:weixin
								},
								{
									name:'新闻数据量',
									type:'line',
									barWidth : 5,
									data:xinwen
								},
								{
									name:'论坛数据量',
									type:'line',
									barWidth : 5,
									data:luntan
								},
								{
									name:'app数据量',
									type:'line',
									barWidth : 5,
									data:app
								},
								{
									name:'视频数据量',
									type:'line',
									barWidth : 5,
									data:shipin
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
									name:'浏览量',
									type:'line',
									barWidth : 5,
									data:read
								},
								{
									name:'跳转源网页量',
									type:'line',
									barWidth : 5,
									data:yuan
								},
								{
									name:'推送微信量',
									type:'line',
									barWidth : 5,
									data:tuis
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
	
			
			//采纳vs不采纳
			$.ajax({
				url:'/IOPM/SystemMoniter/SystemMoniter_articleAccept.action',
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
					url:'/IOPM/SystemMoniter/SystemMoniter_articleAccept.action',
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
					url:'/IOPM/SystemMoniter/SystemMoniter_articleAccept.action',
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

