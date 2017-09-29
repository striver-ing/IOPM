<!DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en">
<!--<![endif]-->
<head>
	<meta charset="utf-8" />
	 <!-- ================== BEGIN BASE CSS STYLE ================== -->
	<link href="/IOPM/css/jquery-ui.min.css" rel="stylesheet" />
	<link href="/IOPM/css/bootstrap.min.css" rel="stylesheet" />
	<link href="/IOPM/css/font-awesome.min.css" rel="stylesheet" />
	<link href="/IOPM/css/animate.min.css" rel="stylesheet" />
	<link href="/IOPM/css/style.min.css" rel="stylesheet" />
	
	<link href="/IOPM/css/theme/default.css" rel="stylesheet" id="theme" />	     
	<link href="/IOPM/css/daterangepicker-bs3.css" rel="stylesheet" />
	<link rel="stylesheet" href="/IOPM/css/blue.css" />
	<link rel="stylesheet" href="/IOPM/css/select2.css" />
	<link rel="stylesheet" href="/IOPM/css/checkmask.css" />
	<!--时间-->
	<link rel="stylesheet" href="/IOPM/css/bootstrap-datepicker/css/datepicker.css" />
	
	<link rel="stylesheet" href="/IOPM/css/scrollbar/jquery.mCustomScrollbar.min.css" />
	<link rel="stylesheet" href="/IOPM/js/switchery/switchery.min.css" />
	<!-- ================== END BASE CSS STYLE ================== -->
	<link rel="stylesheet" href="/IOPM/css/checkmask.css" />
	<link rel="stylesheet" href="/IOPM/netHotSpotFound/netHotSpot/css/netHotSpot.css" />
	<link rel="stylesheet" href="/IOPM/netHotSpotFound/netHotSpot/css/srs.css" />
</head>
<body>
	<!-- begin #page-loader -->
	<div id="page-loader" class="fade in"><span class="spinner"></span></div>
	<!-- end #page-loader -->
	
	<!-- begin #page-container -->
	<div id="page-container" class="fade page-sidebar-fixed page-header-fixed">
		<!-- begin #header -->
		<!--<div id="header" class="header navbar navbar-default navbar-fixed-top">-->
			
		<!-- begin #content -->
		<div id="content" class="content" style="margin: 0;padding: 0;">
		    <div class="panel panel-inverse" style="margin-top: 20px;">
				<div class="panel-heading">
			        <h4 class="panel-title">网络热点发现
				        <div class="views">
				    		<input type="radio" id="national" name="view"  /><label for="national" data-num="0">全网热点</label>
				    		<input type="radio" id="local" name="view" checked/><label for="local" data-num="1">涉广电热点</label>
                          
                                                <img src="/IOPM/netHotSpotFound/netHotSpot/images/header.png" style="width:20px;height:20px;"/>
				    	</div>
				    	 <div class="sort">
					                                 排序规则：<input type="radio" id="hotdu" name="r"/><label for="hotdu" data-num="0">热度</label>
								          <input type="radio" id="xgdu" name="r"/><label for="xgdu" data-num="1" checked="checked">相关度</label>
						  </div>
				    	<div class="classify">
							<input type="checkbox" class="classifytype" value="1" id="figure" checked="checked" /><label for="figure">人物</label>
							<input type="checkbox" class="classifytype" value="2" id="policy" checked="checked" /><label for="policy">政策法规</label>
							<input type="checkbox" class="classifytype" value="3" id="institutions" checked="checked" /><label for="institutions">广电机构</label>
							<input type="checkbox" class="classifytype" value="4" id="sensitive" checked="checked" /><label for="sensitive">敏感节目</label>
							<input type="checkbox" class="classifytype" value="6" id="events" checked="checked" /><label for="events">事件</label>
							<!-- <input type="checkbox" class="classifytype" value="8" id="news" checked="checked" /><label for="events">新闻节目</label> -->
							<input type="checkbox" class="classifytype" value="5" id="others" checked="checked" /><label for="others">其他</label>
							<input type="checkbox" id="sensitives"  /><label for="sensitives">主流媒体</label>
						</div>
						
			    	</h4>
			        
			    </div>
			    <div class="panel-body">	
			    	<!--显示设置-->
			    	<div class="sets">
			    		
			    		<div class="date">
			    			<!-- <span class="todayHot">查看今日热点</span> -->
			    			<span>历史云视图</span>
			    			<select class="historyHot">
			    				<option value="1">近24小时</option>
			    				<option value="3">近3天</option>
			    				<option value="7">近7天</option>
			    				<option value="30">近30天</option>
			    			</select>
			    		</div>
			    	</div>
			    	<!--热度表-->
			    	<div class="hotTab">
			    		<table >
			    			<tr><td><input type="checkbox" checked data-hotStartNum="80" data-hotEndNum="100" id="red" /></td><td><label for="red"><span class="red"></span></label></td></tr>
			    			<tr><td><input type="checkbox" checked data-hotStartNum="60" data-hotEndNum="80" id="coral"  /></td><td><label for="brown"><span class="brown"></span></label></td></tr><!--褐色-->
			    			<tr><td><input type="checkbox" checked data-hotStartNum="40" data-hotEndNum="60"  id="yellow"  /></td><td><label for="yellow"><span class="yellow"></span></label></td></tr>
			    			<tr><td><input type="checkbox" checked data-hotStartNum="20" data-hotEndNum="40" id="#00acac"  /></td><td><label for="blue"><span class="blue"></span></label></td></tr>
			    			<tr><td><input type="checkbox" checked data-hotStartNum="0" data-hotEndNum="20" id="green" /></td><td><label for="green"><span class="green"></span></label></td></tr>
			    		</table>
			    	</div>
			    	<div class="tagBall tagNational">
				        <!--<a title="中科模识" class="tag" target="_blank" href="http://2.axescanvas.sinaapp.com/LoveDemo/secondLove.html">某某某</a>-->
				    </div>
				    <div class="tagBall tagLocal">
						<div class="tagLocal-list">
							
							<div class="tagLocal-con">
								<ul class=" clearfix">
									<li>排名</li>
									<li>热点</li>
									<li>热度</li>
									<li>相关度</li>
								</ul>
								<ul class=" clearfix">
									<li class="tag-red">1</li>
									<li class="tag-red">关键词</li>
									<li class="tag-red">6786989</li>
								</ul>
								<ul class=" clearfix">
									<li class="tag-brown">2</li>
									<li class="tag-brown">关键词</li>
									<li class="tag-brown">2873783</li>
								</ul>
								<ul class=" clearfix">
									<li class="tag-yellow">3</li>
									<li class="tag-yellow">关键词</li>
									<li class="tag-yellow">38838</li>
								</ul>
								<ul class=" clearfix">
									<li class="tag-blue">3</li>
									<li class="tag-blue">关键词</li>
									<li class="tag-blue">38838</li>
								</ul>
								<ul class=" clearfix">
									<li class="tag-green">3</li>
									<li class="tag-green">关键词</li>
									<li class="tag-green">38838</li>
								</ul>
								<ul class=" clearfix">
									<li>3</li>
									<li>关键词</li>
									<li>38838</li>
								</ul>
								<ul class=" clearfix">
									<li>3</li>
									<li>关键词</li>
									<li>38838</li>
								</ul>
								<ul class=" clearfix">
									<li class="tag-green">3</li>
									<li class="tag-green">关键词</li>
									<li class="tag-green">38838</li>
								</ul>
								<ul class=" clearfix">
									<li>3</li>
									<li>关键词</li>
									<li>38838</li>
								</ul>
								<ul class=" clearfix">
									<li>3</li>
									<li>关键词</li>
									<li>38838</li>
								</ul>
								<ul class=" clearfix">
									<li>3</li>
									<li>关键词</li>
									<li>38838</li>
								</ul>
								<ul class=" clearfix">
									<li>3</li>
									<li>关键词</li>
									<li>38838</li>
								</ul>
								<ul class=" clearfix">
									<li>3</li>
									<li>关键词</li>
									<li>38838</li>
								</ul>
								<ul class=" clearfix">
									<li>3</li>
									<li>关键词</li>
									<li>38838</li>
								</ul>
								<ul class=" clearfix">
									<li>3</li>
									<li>关键词</li>
									<li>38838</li>
								</ul>
								<ul class=" clearfix">
									<li>3</li>
									<li>关键词</li>
									<li>38838</li>
								</ul>
								<ul class=" clearfix">
									<li>3</li>
									<li>关键词</li>
									<li>38838</li>
								</ul>
								<ul class=" clearfix">
									<li>3</li>
									<li>关键词</li>
									<li>38838</li>
								</ul>
							</div>
						</div>
				    </div>
			    </div>
				<div class="Collation">
					<h2>热点排序规则<img src="/IOPM/netHotSpotFound/netHotSpot/images/mark.png" alt=""/></h2>
					<div class="Collation-title">
						<p>F(相关性) = α * H + β * A + γ * V + δ * E</p>
						<p>注：<br>
						    F: 热度相关性<br>
					        α：热度系数<br>
					        β：线索系数<br>
					        γ：主流媒体系数<br>
					        δ: 负面情感系数<br>
					        H：热度<br>
					        A：线索综合权重<br>
					        V：主流媒体综合权重<br>
					        E: 负面情感综合权重<br>
					    </p>
					    <p>
					        α + β + γ + δ = 1<br>
					        A = (c1j  + c2b + c3d + ..... )/ c1j  + c2b + c3d + c4...<br>
					        c1j、c2b、c3d 为命中线索的权重<br>
					        c4 为 c4分类的平均权重<br>
					                     即A的分子为命中线索的权重总和分母为命中线索的权重总和 加上 未命中的分类平均权重的总和<br>
					        V = 相关报道主流媒体总数 / 相关报道总数<br>
					        E = 相关报道负面情感总数 / 相关报道总数<br>
						</p>
						<p>
							*更新热点排序规则，同时也会更新舆情推荐相关性排序
						</p>
					</div>
					<div class="e-1">
						<label for="example-1">热点系数</label>
						<input id="example-1" name="example1" placeholder="0 - 1" type="number" min="0" max="1" step="0.1" value="0" data-color="#6324B5" class="srs">
					</div>
					<div class="e-2">
						<label for="example-2">线索系数</label>
						<input id="example-2" name="example2" placeholder="0 - 1" type="number" min="0" max="1" step="0.1" value="0" data-color="#1C8EC5" class="srs">
					</div>
					<div class="weighting">
						<div class="header">
							<span>线索权重：</span><a href="javascript:;">批量修改</a>
							<div id="box">
								<div id="hea">
									<ul class="header-one">
										<li>人物
											<ul class="header-two">
												<li>人物
													<ul class="header-three">
														<li>人物
															<ul class="header-four">
																<li>人物<input type="text" value="(1.5)"/></li>
																<li>政策法规<input type="text" value="(1.5)"/></li>
																<li>组织机构<input type="text" value="(1.5)"/></li>
															</ul>
														</li>
														<li>政策法规</li>
														<li>组织机构</li>
													</ul>
												</li>
												<li>政策法规</li>
												<li>组织机构</li>
											</ul>
										</li>
										<li>政策法规
											<ul class="header-two">
												<li>人物
													<ul class="header-three">
														<li>人物
															<ul class="header-four">
																<li>人物<input type="text" value="(1.5)"/></li>
																<li>政策法规<input type="text" value="(1.5)"/></li>
																<li>组织机构<input type="text" value="(1.5)"/></li>
															</ul>
														</li>
														<li>政策法规</li>
														<li>组织机构</li>
													</ul>
												</li>
												<li>政策法规</li>
												<li>组织机构</li>
											</ul>
										</li>
										<li>组织机构
											<ul class="header-two">
												<li>人物
													<ul class="header-three">
														<li>人物
															<ul class="header-four">
																<li>人物<input type="text" value="(1.5)"/></li>
																<li>政策法规<input type="text" value="(1.5)"/></li>
																<li>组织机构<input type="text" value="(1.5)"/></li>
															</ul>
														</li>
														<li>政策法规</li>
														<li>组织机构</li>
													</ul>
												</li>
												<li>政策法规</li>
												<li>组织机构</li>
											</ul>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="header-w">
							<span>线索权重：</span><a href="javascript:;">精细修改</a>
							<div id="box-b">
								<div id="hea-h">
									<ul class="header-one">
										<li>人物<input type="text" value="(1.5)"/>
											<ul class="header-two">
												<li>人物<input type="text" value="(1.5)"/>
													<ul class="header-three">
														<li>人物<input type="text" value="(1.5)"/></li>
														<li>政策法规<input type="text" value="(1.5)"/></li>
														<li>组织机构<input type="text" value="(1.5)"/></li>
													</ul>
												</li>
												<li>政策法规<input type="text" value="(1.5)"/></li>
												<li>组织机构<input type="text" value="(1.5)"/></li>
											</ul>
										</li>
										<li>政策法规<input type="text" value="(1.5)"/>
											<ul class="header-two">
												<li>人物<input type="text" value="(1.5)"/>
													<ul class="header-three">
														<li>人物<input type="text" value="(1.5)"/></li>
														<li>政策法规<input type="text" value="(1.5)"/></li>
														<li>组织机构<input type="text" value="(1.5)"/></li>
													</ul>
												</li>
												<li>政策法规<input type="text" value="(1.5)"/></li>
												<li>组织机构<input type="text" value="(1.5)"/></li>
											</ul>
										</li>
										<li>组织机构<input type="text" value="(1.5)"/>
											<ul class="header-two">
												<li>人物<input type="text" value="(1.5)"/>
													<ul class="header-three">
														<li>人物<input type="text" value="(1.5)"/></li>
														<li>政策法规<input type="text" value="(1.5)"/></li>
														<li>组织机构<input type="text" value="(1.5)"/></li>
													</ul>
												</li>
												<li>政策法规<input type="text" value="(1.5)"/></li>
												<li>组织机构<input type="text" value="(1.5)"/></li>
											</ul>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<ul class="Time clearfix">
							<li class="lefttd">起始：
								<input type="text" id="lookStartTime" class="input sel_event_stime hasDatepicker" placeholder="请输入开始时间"></li>
							<li class="lefttd">结束：
								<input type="text" id="lookEndTime" class="input sel_event_etime hasDatepicker" placeholder="请输入结束时间"></li>
						</ul>
						<div class="but">
							<button class="but-one">确定</button>
							<button class="but-two">回退</button>
						</div>
						<div class="progress">
							<div class="progress-bar"><span></span></div>
						</div>
						<div class="run" style="width: 100%;height:20px;overflow: hidden;">
							<marquee  behavior="scroll" direction="left" scrollamount="6" style="width: 100%;height: 20px" id="m">
								<span>正在更新热点相关性排序、舆情相关性排序及线索权重、热度系数、线索系数</span>
							</marquee>
						</div>
						<div id="completed" style="width: 100%;height:20px;text-align: center; display: none">
							已完成
						</div>
						<div id="has-withdrawn" style="width: 100%;height:20px;text-align: center;display: none;">
							已撤回
						</div>
					</div>
					<!--<div class="text">
						热点排序规则
					</div>-->
					<div class="marker"></div>
				</div>
			</div>	    
		</div>		
		<!-- end #content -->
		
		<!--热点详细信息弹出层-->
		<div class="checkMask main hotSpot">
				<div>
					<form method="" class=" animated bounceInDown">
						<div class="MaskTop">热点详细信息</div>
						<!--<em class="fa fa-times" id="em-hotSpot"></em>-->
						<img src="/IOPM/netHotSpotFound/netHotSpot/images/cha.png" alt="" class="cha"/>
						<div class="msgs text-center">
							<div class="newsTop">
								<span>云南大理40条措施整治旅游市场  取消定点购物</span>
							</div>
							<div class="newsInfo">
								<div class="info">
									<span>发布时间：</span><span class="infoSpan pushTime">2017-04-10 23:59:59</span>
									<span>作者：</span><span class="infoSpan author">20175559</span>
									<span>情感倾向：</span><span class="infoSpan emotion">今日头条 </span>
									<a href="http://www.baidu.com" target="_blank">查看源网页</a>
								</div>
							</div>
							<div class="newsContent">
								<img src="/IOPM/netHotSpotFound/netHotSpot/images/002.jpg"/>
								<p>
								</p>
							</div>
						</div>
					</form>
				</div>
			</div>
		<!--相关新闻-->
		<div class="checkMask news">
			<div>
				<form method="" class=" animated bounceInDown">
					<div class="MaskTop">相关新闻</div>
					<img src="/IOPM/netHotSpotFound/netHotSpot/images/add.png" alt=""/>
					<em class="fa fa-times" id="em-news"></em>
					<div class="msgs text-center">
						<div class="news-info">
							<h4>热点新闻标题</h4>
							<p>内容</p>
							<div class="details">
								<span>站点：</span><span class="infoSpan site">今日头条 </span>
								<span>作者：</span><span class="infoSpan source">今日头条 </span>
								<span>发布时间：</span><span class="infoSpan pushTime">2017-04-10 23:59:59</span>
								<span>评论数：</span><span class="infoSpan pushTime">20175559</span>
								<span>情感倾向:</span><span>正面</span>
								<a href="http://www.baidu.com" target="_blank">源网页</a>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
		<!--添加专题-->
		<div class="checkMask review">
			<div>
				<form action="" method="post" class=" animated bounceInDown">
					<div class="MaskTop">添加专题</div>
					<!--<em class="fa fa-times" id="em-review"></em>-->
					<img src="/IOPM/netHotSpotFound/netHotSpot/images/cha.png" alt="" class="cha"/>
					<div class="maskBox">
						<div class="top">
							<div class="maskHeader">
								<h4>基本信息</h4>
							</div>
							<p><label for="siteName">专题名称:</label>  <input class="form-control" type="text" name="siteName" id="siteName" placeholder="请输入站点名称" value=""/>
								<i class="fa fa-star"></i></p>
							<p><label for="inOut">专题分类:</label>
								<select class="form-control" name="inOut" id="inOut">
									<option value="">境内</option>
									<option value="">境外</option>
								</select>
								<i class="fa fa-star"></i>
							</p>
							<p><label for="doMain">开始时间:</label>  <input class="form-control" type="text" name="startTime" id="startTime" placeholder="请输入开始"/>
								<i class="fa fa-star"></i></p>
							<p><label for="doMain">结束时间:</label>  <input class="form-control" type="text" name="endTime" id="endTime" placeholder="请输入结束时间"/>
								<i class="fa fa-star"></i></p>
							<p><label for="inOut" >查看权限:</label>
								<select class="form-control" name="inOut" id="inOut"  >
									<option value="">境内</option>
									<option value="">境外</option>
								</select>
								<i class="fa fa-star"></i>
							</p>
							<p><label for="inOut">专题状态:</label>
								<input type="radio" name="spec" value="已发生" />已发生
								<span class="marSpan"></span>
								<input type="radio" name="spec" value="预埋" />预埋
							</p>
							<p><label for="kw" style="text-indent: 1em;">关键词:</label>
							<div class="kw">
								<div class="kwTop">
									<div class="btns">
										<span class="model advs select">高级模式</span>
										<span class="model coms">普通模式</span>
									</div>
									<div class="operat pull-right" style="margin-top: -3px;">
										<input type="button" value="历史" id="history" />
										<input type="button" value="导出" id="export" />
										<i class="fa fa-question"></i>
									</div>
								</div>
								<div class="kwBody">
									<!--高级模式-->
									<div class="advsMode">
										<textarea class="advText" name="" id=""></textarea>
									</div>
									<!--普通模式-->
									<div class="comsMode">
										<div class="comsText keyword">
											<div class="col-sm-12 text">
												<div class="">
													<p><input class="form-control" type="text" name="taskAnd" id="taskAnd" placeholder="请输入必须包含关键词"/></p>
													<!--<p><input class="form-control" type="text" name="taskOr" id="taskOr" placeholder="请输入包含一个关键词"/></p>-->
													<p><input class="form-control" type="text" name="taskNot" id="taskNot" placeholder="请输入不能包含关键词"/></p>
													<i class="fa fa-plus"></i>
												</div>
											</div>

										</div>
									</div>
									<!--历史记录-->
									<div class="history">
										<div class="textHead">历史关键词:</div>
										<div class="text">
											<div class="txtDiv">
												还没有配置关键词
											</div>
											<div class="txtDiv">
												<div class="pull-left">
													<span>(1)</span>
													关键词：
													<span>(谁最想扳倒中国)</span>
												</div>
												<div class="pull-right">
													配置时间：<span>2016-12-30 11:16:42</span>
												</div>
											</div>
											<div class="txtDiv">
												<div class="pull-left">
													<span>(1)</span>
													关键词：
													<span>(谁最想扳倒中国)</span>
												</div>
												<div class="pull-right">
													配置时间：<span>2016-12-30 11:16:42</span>
												</div>
											</div>
										</div>
									</div>
									<!--帮助-->
									<div class="help">
										<div class="textHead">关键词配置帮助：</div>
										<div class="text">
											高级模式支持关键词以表达式形式配置，表达式由空格、逗号、减号、乘号和分号构成。 空格“ ”表示“与”，逗号“,”表示“或”，减号“-”表示“非”，乘号“*”表示“积”。每组关键词只能包含一个“*”和“-”。多组关键词用分号“;”分隔。符号不区分全角半角。 例(山西,太原)*(反腐,贪污 腐败)-(楼盘);（系统性塌方式腐败）为两组关键词，表示包含关键词（山西 反腐）或（山西贪污 腐败）或（太原反腐）或（太原贪污 腐败）或（系统性塌方式腐败），同时排除关键词（楼盘）。
										</div>
									</div>
								</div>
							</div>
							</p>
						</div>
						<div class="bottom">
							<div class="maskHeader">
								<h4>扩展信息</h4>
								<div class="right pull-right">
									<span>展开 </span>
									<i class="fa fa-arrow-down"></i>
								</div>
							</div>
							<div class="maskBody">
								<div style="height: auto; overflow: hidden;">
									<label style="margin-top: 0; float: left;">专题描述:</label>
									<textarea class="form-control inlblock"></textarea>
								</div>
								<div class="files">
									<label>相关图片:</label>
									<img src="" alt="" />
									<span class="btn btn-primary fileinput">
	                                    <span>选择文件</span>
	                                    <input type="file" name="" multiple="">
                                	</span>
									<button type="button" class="btn btn-primary" id="clearImg">清空</button>
								</div>
								<div>
									<label style="text-indent: 3em;">人:</label>
									<input class="form-control" type="text" placeholder="人物关键词，可配置多组。组内关键词用'空格'分隔，表示与的关系；组与组之间用'分号(;)'分隔，表示或的关系。"/>
								</div>
								<div>
									<label style="text-indent: 3em;">地:</label>
									<input class="form-control" type="text" placeholder="人物关键词，可配置多组。组内关键词用'空格'分隔，表示与的关系；组与组之间用'分号(;)'分隔，表示或的关系。"/>
								</div>
								<div>
									<label style="text-indent: 3em;">事:</label>
									<input class="form-control" type="text" placeholder="人物关键词，可配置多组。组内关键词用'空格'分隔，表示与的关系；组与组之间用'分号(;)'分隔，表示或的关系。"/>
								</div>
								<div>
									<label style="text-indent: 3em;">物:</label>
									<input class="form-control" type="text" placeholder="人物关键词，可配置多组。组内关键词用'空格'分隔，表示与的关系；组与组之间用'分号(;)'分隔，表示或的关系。"/>
								</div>
								<div>
									<label style="text-indent: 2em;">组织:</label>
									<input class="form-control" type="text" placeholder="人物关键词，可配置多组。组内关键词用'空格'分隔，表示与的关系；组与组之间用'分号(;)'分隔，表示或的关系。"/>
								</div>
							</div>
						</div>
					</div>
					<div class="btnMask taskBtn">
						<button class="btn btn-primary" type="submit" value="确定">确定</button>
						<span></span>
						<button class="btn btn-danger" value="取消">取消</button>
					</div>
				</form>
			</div>
		</div>
	</div>
	<!-- end page container -->
	
	<!-- ================== BEGIN BASE JS ================== -->
	<script src="/IOPM/netHotSpotFound/public/plugins/jquery/jquery-1.9.1.min.js"></script>
	<script src="/IOPM/netHotSpotFound/public/plugins/jquery/jquery-migrate-1.1.0.min.js"></script>
	<script src="/IOPM/netHotSpotFound/public/plugins/jquery-ui/ui/minified/jquery-ui.min.js"></script>
	<script src="/IOPM/netHotSpotFound/public/plugins/bootstrap/js/bootstrap.min.js"></script>
	<!--[if lt IE 9]>
		<script src="/IOPM/netHotSpotFound/public/crossbrowserjs/html5shiv.js"></script>
		<script src="/IOPM/netHotSpotFound/public/crossbrowserjs/respond.min.js"></script>
		<script src="/IOPM/netHotSpotFound/public/crossbrowserjs/excanvas.min.js"></script>
	<!--[endif]-->
	<script src="/IOPM/netHotSpotFound/public/plugins/slimscroll/jquery.slimscroll.min.js"></script>
	<script src="/IOPM/netHotSpotFound/public/plugins/jquery-cookie/jquery.cookie.js"></script>
	<script src="/IOPM/netHotSpotFound/public/js/daterangepicker.js" type="text/javascript"></script>
	<script src="/IOPM/netHotSpotFound/public/js/apps.min.js"></script>
	<!-- ================== END BASE JS ================== -->
	<!-- ================== BEGIN private JS ================== -->
	<!--时间-->
	<script src="/IOPM/netHotSpotFound/public/bootstrap-datepicker/js/bootstrap-datepicker.js" type="text/javascript" charset="utf-8"></script>
	<script src="/IOPM/netHotSpotFound/public/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js" type="text/javascript" charset="utf-8"></script>
	<script src="/IOPM/netHotSpotFound/public/bootstrap-timepicker/js/bootstrap-timepicker.min.js" type="text/javascript" charset="utf-8"></script>
	<script src="/IOPM/netHotSpotFound/public/scrollbar/jquery.mCustomScrollbar.concat.min.js" type="text/javascript" charset="utf-8"></script>
	
	<script src="/IOPM/netHotSpotFound/public/js/app-pages.js" type="text/javascript" charset="utf-8"></script>	
	<script src="/IOPM/netHotSpotFound/netHotSpot/js/netHotSpot.js" type="text/javascript" charset="utf-8"></script>
	<script src="/IOPM/netHotSpotFound/netHotSpot/js/srs.js" type="text/javascript" charset="utf-8"></script>
	<!--<script type="text/javascript" src="js/startScore.js"></script>-->
	<script src="/IOPM/netHotSpotFound/public/switchery/switchery.min.js" type="text/javascript" charset="utf-8"></script>
	<script src="/IOPM/netHotSpotFound/clue/js/public_include.js" type="text/javascript" charset="utf-8"></script>
	<!-- ================== BEGIN private JS ================== -->
	
	<script>
//		scoreFun($("#startone"))
//     scoreFun($("#starttwo"),{
//           fen_d:22,//每一个a的宽度
//           ScoreGrade:5//a的个数 10或者
//         })
	</script>
	<script>
		$(document).ready(function() {
			App.init();
//			Calendar.init();
		});
	</script>

</body>
</html>