$(function(){
	//概述
	$.ajax({
		url:'/IOPM/SystemMoniter/SystemMoniter_clueOverview.action',
		type:'post',
		data:{},
		dataType:'json',
		success:function(data){
			$('#gais').html(data.text)
		}
	})
	
	//第一图
	nei(7)
	$('#neiw').change(function(){
		nei($(this).val())
	})
	function nei(s){
		var synchronous = echarts.init(document.getElementById('synchronous'));
		synchronous.showLoading()
		$.ajax({
				url:'/IOPM/SystemMoniter/SystemMoniter_clueSynchronizationNei.action',
				type:'post',
				data:{'dateCount':s},
				dataType:'json',
				success:function(data){
					var nei = data.nei
					var time = []
					var total = []
					var dele = [] 
					var updata = []
					var save = [] 
					var worn = []
					for(var i=0;i<nei.length;i++){
						time.push(nei[i].TIME)
						total.push(nei[i].TOTAL)
						dele.push(nei[i].DELETE_COUNT)
						updata.push(nei[i].UPDATE_COUNT)
						save.push(nei[i].SAVE_COUNT)
						worn.push(nei[i].WORN_CLUES_COUNT)
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
//					            color: ["#ffab1b", "#ff0000", "#d21de6", "#21de21", "#07e0ca", "#0000ff", "#ce0ace", "#158cf9", "#e037f7", "#c57d00", "#39a3ff"],
							legend: {
								data:['总线索量','新增量','删除量','同步量','失败量']
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
									data: time,
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
									name:'总线索量',
									type:'line',
									barWidth : 5,
									data:total
								},
								{
									name:'新增量',
									type:'line',
									barWidth : 5,
									data:save
								},
								{
									name:'删除量',
									type:'line',
									barWidth : 5,
									data:dele
								},
								{
									name:'同步量',
									type:'line',
									barWidth : 5,
									data:updata
								},
								{
									name:'失败量',
									type:'line',
									barWidth : 5,
									data:worn
								}
							]
						};
						synchronous.hideLoading();
						synchronous.setOption(option);
						
						//内网概述
						$('#neis').html(data.text)
					}
				})
	}
	



			
//外网
	wai(7)
	$('#waiw').change(function(){
		wai($(this).val())
	})
	function wai(s){
		var synchronou = echarts.init(document.getElementById('synchronous-w'));
		synchronou.showLoading()
		$.ajax({
			url:'/IOPM/SystemMoniter/SystemMoniter_clueSynchronizationWai.action',
			type:'post',
			data:{"dateCount":s},
			dataType:'json',
			success:function(data){
				var wai = data.wai
				var time = []
				var total = []
				var dele = [] 
				var updata = []
				var save = [] 
				var worn = []
				for(var i=0;i<wai.length;i++){
					time.push(wai[i].TIME)
					total.push(wai[i].TOTAL)
					dele.push(wai[i].DELETE_COUNT)
					updata.push(wai[i].UPDATE_COUNT)
					save.push(wai[i].SAVE_COUNT)
					worn.push(wai[i].WORN_CLUES_COUNT)
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
//			            color: ["#ffab1b", "#ff0000", "#d21de6", "#21de21", "#07e0ca", "#0000ff", "#ce0ace", "#158cf9", "#e037f7", "#c57d00", "#39a3ff"],
						legend: {
							data:['总线索量','新增量','删除量','同步量','失败量']
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
								data: time
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
								name:'总线索量',
								type:'line',
								barWidth : 5,
								data:total
							},
							{
								name:'新增量',
								type:'line',
								barWidth : 5,
								data:save
							},
							{
								name:'删除量',
								type:'line',
								barWidth : 5,
								data:dele
							},
							{
								name:'同步量',
								type:'line',
								barWidth : 5,
								data:updata
							},
							{
								name:'失败量',
								type:'line',
								barWidth : 5,
								data:worn
							}
						]
					};
					synchronou.hideLoading();
					synchronou.setOption(option);
					
					//外网概述
					$('#wais').html(data.text)
			}
		})
	}
	
	//活跃线索词
	active(100)
	$('#ac').blur(function(){
		active($(this).val())
	})
	function active(s){
		$.ajax({
			url:'/IOPM/SystemMoniter/SystemMoniter_activeWord.action ',
			type:'post',
			data:{'activeCount':s},
			dataType:'json',
			success:function(data){
				var pic = data.pictureAndRank
				//第二图
				var active= echarts.init(document.getElementById('active'));
				active.showLoading()
				var info = [];
				for(var j=0;j<100;j++) {
					info.push({
						name: pic[j].CLUEWORD,
						value: pic[j].INFOCOUNT
					})
				}
				option = {
					tooltip : {},
					series : [ {
						type : 'wordCloud',
						shape:'circle',
						gridSize : 2,
						sizeRange : [ 12, 50 ],
						rotationRange : [ 0, 0 ],
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
						data : info                                             
					} ]
				};
				
				active.setOption(option);
				active.hideLoading()
				
				var html = '<ul><li>分类</li><li>线索名</li><li>线索词</li><li>信息量</li></ul>'
				for(var i=0;i<100;i++){
					html+='<ul><li>'+pic[i].CLASSIFYNAME+'</li><li>'+pic[i].CLUENAME+'</li><li>'+pic[i].CLUEWORD+'</li><li>'+pic[i].INFOCOUNT+'</li></ul>'
				}
				$('.active-amount').html(html)
				$('#active_words').html(data.text)
				
			}
		})
	}
	
	$('#active-amount').mCustomScrollbar({
		theme:"inset-dark"
	});
	
	//僵尸线索词
	corpse(100)
	$('#co').blur(function(){
		corpse($(this).val())
	})
	function corpse(s){
		$.ajax({
			url:'/IOPM/SystemMoniter/SystemMoniter_activeWord.action ',
			type:'post',
			data:{'zombieCount':s},
			dataType:'json',
			success:function(data){
				var pic = data.pictureAndRank
				//第三图
				var corpse= echarts.init(document.getElementById('corpse'));
				corpse.showLoading()
				var info = [];
				for(var j=0;j<100;j++) {
					info.push({
						name: pic[j].CLUEWORD,
						value: pic[j].INFOCOUNT
					})
				}
				option = {
					tooltip : {},
					series : [ {
						type : 'wordCloud',
						shape:'circle',
						gridSize : 2,
						sizeRange : [ 12, 50 ],
						rotationRange : [ 0, 0 ],
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
						data : info                                             
					} ]
				};
				
				corpse.setOption(option);
				corpse.hideLoading();
				var html = '<ul><li>分类</li><li>线索名</li><li>线索词</li><li>信息量</li></ul>'
				for(var i=0;i<100;i++){
					html+='<ul><li>'+pic[i].CLASSIFYNAME+'</li><li>'+pic[i].CLUENAME+'</li><li>'+pic[i].CLUEWORD+'</li><li>'+pic[i].INFOCOUNT+'</li></ul>'
				}
				$('.corpse-amount').html(html)
				$('#zombie_word').html(data.text)
				
			}
		})
	}
	
	$('#corpse-amount').mCustomScrollbar({
		theme:"inset-dark"
	});
	
//第四图
	var effect = echarts.init(document.getElementById('effect'));
//	effect.showLoading()
	option = {
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    legend: {
	        data: ['直接访问', '邮件营销','联盟广告','视频广告','搜索引擎']
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis:  {
	        type: 'value'
	    },
	    yAxis: {
	        type: 'category',
	        data: ['周一','周二','周三','周四','周五','周六','周日']
	    },
	    series: [
	        {
	            name: '直接访问',
	            type: 'bar',
	            stack: '总量',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'insideRight'
	                }
	            },
	            data: [320, 302, 301, 334, 390, 330, 320]
	        },
	        {
	            name: '邮件营销',
	            type: 'bar',
	            stack: '总量',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'insideRight'
	                }
	            },
	            data: [120, 132, 101, 134, 90, 230, 210]
	        },
	        {
	            name: '联盟广告',
	            type: 'bar',
	            stack: '总量',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'insideRight'
	                }
	            },
	            data: [220, 182, 191, 234, 290, 330, 310]
	        },
	        {
	            name: '视频广告',
	            type: 'bar',
	            stack: '总量',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'insideRight'
	                }
	            },
	            data: [150, 212, 201, 154, 190, 330, 410]
	        },
	        {
	            name: '搜索引擎',
	            type: 'bar',
	            stack: '总量',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'insideRight'
	                }
	            },
	            data: [820, 832, 901, 934, 1290, 1330, 1320]
	        }
	    ]
	};    
//};	effect.hideLoading()
	effect.setOption(option);
})