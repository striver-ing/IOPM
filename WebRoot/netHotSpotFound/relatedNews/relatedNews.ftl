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
	<link rel="stylesheet" href="/IOPM/public/bootstrap-datepicker/css/datepicker.css" />
	<link rel="stylesheet" href="/IOPM/public/bootstrap-datepicker/css/datepicker3.css" />
	<link href="/IOPM/css/font-awesome.min.css" rel="stylesheet" />
	<link href="/IOPM/css/animate.min.css" rel="stylesheet" />
	<link href="/IOPM/css/style.min.css" rel="stylesheet" />
	
	<link href="/IOPM/css/theme/default.css" rel="stylesheet" id="theme" />	     
	<link href="/IOPM/css/daterangepicker-bs3.css" rel="stylesheet" />
	<link rel="stylesheet" href="/IOPM/css/blue.css" />
	<link rel="stylesheet" href="/IOPM/css/select2.css" />
	
	<!--时间-->
	<link rel="stylesheet" href="/IOPM/css/bootstrap-datepicker/css/datepicker.css" />
	
	<link rel="stylesheet" href="/IOPM/css/scrollbar/jquery.mCustomScrollbar.min.css" />
	<link rel="stylesheet" href="/IOPM/js/switchery/switchery.min.css" />
	<!-- ================== END BASE CSS STYLE ================== -->
	<link rel="stylesheet" href="/IOPM/public/css/checkmask.css" />
	<link rel="stylesheet" href="/IOPM/netHotSpotFound/relatedNews/css/relatedNews.css" />
   
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
			    <div class="panel-body">	
			    	<!--搜索按钮-->
			    	<!--<div class="search">-->
			    		<!--<input type="text" class="form-control" placeholder="请输入检索内容" />-->
			    		<!--<input type="button" class="btn btn-primary" value="检索" />-->
						<!--<img src="images/add.png" alt="" id="addSpec"/>-->
			    	<!--</div>-->
			    	<!--搜索新闻分类-->
			    	<!--<div class="newsCates">-->
			    		<!--<ul>-->
			    			<!--<li class="all cur">全部</li>-->
			    			<!--<li>微信</li>-->
			    			<!--<li>微博</li>-->
			    			<!--<li>新闻门户</li>-->
			    			<!--<li>视听</li>-->
			    			<!--<li>论坛</li>-->
			    			<!--<li>境外</li>-->
			    		<!--</ul>-->
			    	<!--</div>-->
					<!--一级分类-->
					<div class="analyDiv">
					    <input type="hidden" id="hot_id" name="hot_id" value="${hot_id?if_exists}"/>
					    <input type="hidden" id="clus_ids" name="clus_ids" value="${clus_ids?if_exists}"/>
					    <input type="hidden" id="firstCal"/>
					    <input type="hidden" id="secondCal"/>
					    <input type="hidden" id="thirdCal"/>
						<dl class="analyDiv-one">
							<dt>涉广电：</dt>
							<dd class="select">
								<a href="javasript:;">全部</a>
							</dd>
							<dd>
								<a href="javasript:;">人物</a>
							</dd>
							<dd>
								<a href="javasript:;">政策</a>
							</dd>
							<dd>
								<a href="javasript:;">机构</a>
							</dd>
							<dd>
								<a href="javasript:;">敏感节目</a>
							</dd>
						</dl>
						<dl class="analyDiv-two">
							<dd class="select">
								<a href="javasript:;">全部</a>
							</dd>
							<dd>
								<a href="javasript:;">人物</a>
							</dd>
							<dd>
								<a href="javasript:;">政策</a>
							</dd>
							<dd>
								<a href="javasript:;">机构</a>
							</dd>
							<dd>
								<a href="javasript:;">敏感节目</a>
							</dd>
						</dl>
						<dl class="analyDiv-three">
							<dd class="select">
								<a href="javasript:;">全部</a>
							</dd>
							<dd>
								<a href="javasript:;">人物</a>
							</dd>
							<dd>
								<a href="javasript:;">政策</a>
							</dd>
							<dd>
								<a href="javasript:;">机构</a>
							</dd>
							<dd>
								<a href="javasript:;">敏感节目</a>
							</dd>
						</dl>
					</div>
			    	<!--搜索列表-->
			    	<div class="newsList">
						<div class="header">
							<!--<h3>高级搜索</h3>-->
							<form>
								<fieldset>
								   
									<legend>筛选条件</legend>
									关键词：<input type="text" id="key" name="keywords" value="${keywords?if_exists}"/>
									<ul class="Time clear">
										<li class="lefttd">开始时间：
											<input type="text" id="lookStartTime" class="input sel_event_stime hasDatepicker" value="${startTime?if_exists}" placeholder="请输入开始时间"></li>
										<li class="lefttd">结束时间：
											<input type="text" id="lookEndTime" class="input sel_event_etime hasDatepicker" value="${endTime?if_exists}" placeholder="请输入结束时间"></li>
									</ul>
									<ul class="message clear">
										<li>信息来源：</li>
										<li><input type="checkbox" id="message-W" value="0" checked="checked">全部</li>
										<li><input type="checkbox" class="mess" value="1" checked="checked">新闻</li>
										<li><input type="checkbox" class="mess" value="2" checked="checked">微信</li>
										<li><input type="checkbox" class="mess" value="3" checked="checked">微博</li>
										<li><input type="checkbox" class="mess" value="4" checked="checked">论坛</li>
										<li><input type="checkbox" class="mess" value="7" checked="checked">App</li>
										<li><input type="checkbox" class="mess" value="8" checked="checked">视频</li>
									</ul>
									<ul class="message clear">
										<li>传播途径：</li>
										<li><input type="checkbox" id="spread" value="1" >主流媒体</li>
									</ul>
									<ul class="maskbox clear">
										<li>情感倾向：</li>
										<li><input type="checkbox" id="whole" value="0" checked="checked">全部</li>
										<li><input type="checkbox" class="box" value="1" checked="checked">正面</li>
										<li><input type="checkbox" class="box" value="2" checked="checked">反面</li>
										<li><input type="checkbox" class="box" value="3" checked="checked">中立</li>
										<li><input type="checkbox" class="box" value="3" checked="checked">未知</li>
									</ul>
									<input type="button" id="sub" onClick="javascript:getRelated(1);" value="查  询"/>
									<input type="button" id="addSpec" value="设为专题"/>
								</fieldset>
							</form>
						</div>
						<div class="statistics clearfix">
							<div id="kind-statistics" style="width: 36%;height:240px;"></div>
							<div id="message-source" style="width: 34%;height:240px;"></div>
							<div id="emotional-tendency" style="width: 30%;height:240px;"></div>
						</div>
						<div class="top-C">
							<div class="Top-left">舆情推荐</div>
							<ul class="header-C">
								<li>查询结果：<span></span></li>
								<!--<li class="screening">-->
								<!--<a href="javascript:;">筛选</a><img src="/IOPM/netHotSpotFound/relatedNews/images/selectArrowdown.png" alt="" class="arrow">-->
								<!--</li>-->
								<li class="right">每页展示
									<select name="selc" id="selc">
										<option value="20">20</option>
										<option value="25">25</option>
										<option value="30">30</option>
										<option value="40">40</option>
									</select>条</li>
								<li class="sort">排序规则：
								<input type="hidden"/>
								<span>相关度</span><i><img src="/IOPM/netHotSpotFound/relatedNews/images/selectArrowdown.png"/></i>
								<span>发布时间</span><i><img src="/IOPM/netHotSpotFound/relatedNews/images/selectArrowdown.png"/></i>
								<span>评论数</span><i><img src="/IOPM/netHotSpotFound/relatedNews/images/selectArrowdown.png"/></i>
								</li>
							</ul>
						</div>
						<div class="con">
							<!--<div class="img-a">
								<img src="/IOPM/netHotSpotFound/relatedNews/images/loding.png"/>
							</div>-->
						</div>
			    	</div>
					<!-- 侧边栏 -->
					<div class="sidebar-R">
						<img src="/IOPM/netHotSpotFound/relatedNews/images/weixin.png" alt="" class="weixin"/>
						<div class="weixin-time"><span class="i">微信热议</span><span>时间选择</span>：<input type="text" id="checkStartTime" class="form-control inlblock width47" placeholder="请选择开始时间" /><span class="marSpan">~</span><input type="text" id="checkEndTime" class="form-control inlblock width47"  placeholder="请选择结束时间" /></div>
						<table cellpadding="0" cellspacing="0" border="0" width="100%" bordercolor="#ccc" class="table-striped">
							<thead>
								<tr>
									<th>序号</th>
									<th>标题</th>
									<th>博主</th>
									<th>点赞数</th>
									<th>阅读数</th>
									<th>发布时间</th>
								</tr>
							</thead>
							<tbody>
							</tbody>
						</table>
						<div class="paging">
							<div class="ro">
							 <div>
									<div class="dataTables_paginate paging_simple_numbers textright" id="datatable_paginate">
										<ul class="pagination">
											<li class="paginate_button previous disabled" id="datatable_previous">
												<a href="#" aria-controls="datatable" data-dt-idx="0" tabindex="0">上一页</a>
											</li>
											<li class="paginate_button active">
												<a href="#" aria-controls="datatable" data-dt-idx="1" tabindex="0">1</a>
											</li>
											<li class="paginate_button ">
												<a href="#" aria-controls="datatable" data-dt-idx="2" tabindex="0">2</a>
											</li>
											<li class="paginate_button ">
												<a href="#" aria-controls="datatable" data-dt-idx="3" tabindex="0">3</a>
											</li>
											<li class="paginate_button ">
												<a href="#" aria-controls="datatable" data-dt-idx="3" tabindex="0">4</a>
											</li>
											<li class="paginate_button ">
												<a href="#" aria-controls="datatable" data-dt-idx="3" tabindex="0">5</a>
											</li>
											<li class="paginate_button next" id="datatable_next">
												<a href="#" aria-controls="datatable" data-dt-idx="7" tabindex="0">下一页</a>
											</li>
										</ul>
									</div>
									<div class="goPage">
										<ul>
											<li>跳转到第</li>
											<li><input type="text" class="goNum" /></li>
											<li>页</li>
											<li><button type="button" class="btn btn-primary" >GO</button></li>
										</ul>
									</div>
								</div>
						    </div>
						</div>
					</div>
					<div class="sidebar-B">
						<img src="/IOPM/netHotSpotFound/relatedNews/images/weibo.png" alt="" class="weibo"/>
						<div class="weibo-time"><span class="i">微博热议</span><span>时间选择</span>：<input type="text" id="checkStart" class="form-control inlblock width47" placeholder="请选择开始时间" /><span class="marSpan">~</span><input type="text" id="checkEnd" class="form-control inlblock width47"  placeholder="请选择结束时间" /><button value="确定">确定</button></div>
						<table cellpadding="0" cellspacing="0" border="0" width="100%" bordercolor="#ccc" class="table-striped">
							<thead>
								<tr>
									<th>序号</th>
									<th>标题</th>
									<th>博主</th>
									<th>转发量</th>
									<th>评论量</th>
									<th>发布时间</th>
								</tr>
							</thead>
							<tbody>
							</tbody>
						</table>
						<div class="paging">
							<div class="ro">
							    <div>
									<div class="dataTables_paginate paging_simple_numbers textright" id="datatable_paginate">
										<ul class="pagination">
											<li class="paginate_button previous disabled" id="datatable_previous">
												<a href="#" aria-controls="datatable" data-dt-idx="0" tabindex="0">上一页</a>
											</li>
											<li class="paginate_button active">
												<a href="#" aria-controls="datatable" data-dt-idx="1" tabindex="0">1</a>
											</li>
											<li class="paginate_button ">
												<a href="#" aria-controls="datatable" data-dt-idx="2" tabindex="0">2</a>
											</li>
											<li class="paginate_button ">
												<a href="#" aria-controls="datatable" data-dt-idx="3" tabindex="0">3</a>
											</li>
											<li class="paginate_button ">
												<a href="#" aria-controls="datatable" data-dt-idx="3" tabindex="0">4</a>
											</li>
											<li class="paginate_button ">
												<a href="#" aria-controls="datatable" data-dt-idx="3" tabindex="0">5</a>
											</li>
											<li class="paginate_button next" id="datatable_next">
												<a href="#" aria-controls="datatable" data-dt-idx="7" tabindex="0">下一页</a>
											</li>
										</ul>
									</div>
									<div class="goPage">
										<ul>
											<li>跳转到第</li>
											<li><input type="text" class="goNum" /></li>
											<li>页</li>
											<li><button type="button" class="btn btn-primary" >GO</button></li>
										</ul>
									</div>
								</div>
							</div>	
						</div>
					</div>
					<!--左侧边栏-->
					<div class="sidebar-L">
						<div class="L-title">线索词总信息量排名</div>
						<div id="L-over">
							<ul>
								<li>排名</li>
								<li>线索</li>
								<li>信息总量</li>
								<li>情感倾向(正/中/负)</li>
							</ul>
							<ul>
								<li>1</li>
								<li><a href="">线索</a></li>
								<li>20000</li>
								<li><span class="green">1000</span> / <span class="red">222</span> / <span class="blue">8999</span></li>
							</ul>
						</div>
					</div>
					<div class="sidebar-A">
						<div class="A-title">线索词负面信息排名</div>
						<div id="A-over">
							<ul>
								<li>排名</li>
								<li>线索</li>
								<li>信息总量</li>
								<li>负面情感倾向</li>
							</ul>
							<ul>
								<li>1</li>
								<li><a href="">线索</a></li>
								<li>20000</li>
								<li>10000</li>
							</ul>
							<ul>
								<li>2</li>
								<li><a href="">线索</a></li>
								<li>20000</li>
								<li>10000</li>
							</ul>
							<ul>
								<li>3</li>
								<li><a href="">线索</a></li>
								<li>20000</li>
								<li>10000</li>
							</ul>
							<ul>
								<li>4</li>
								<li><a href="">线索</a></li>
								<li>20000</li>
								<li>10000</li>
							</ul>
							<ul>
								<li>5</li>
								<li><a href="">线索</a></li>
								<li>20000</li>
								<li>10000</li>
							</ul>
							<ul>
								<li>6</li>
								<li><a href="">线索</a></li>
								<li>20000</li>
								<li>10000</li>
							</ul>
							<ul>
								<li>7</li>
								<li><a href="">线索</a></li>
								<li>20000</li>
								<li>10000</li>
							</ul>
							<ul>
								<li>8</li>
								<li><a href="">线索</a></li>
								<li>20000</li>
								<li>10000</li>
							</ul>
							<ul>
								<li>9</li>
								<li><a href="">线索</a></li>
								<li>20000</li>
								<li>10000</li>
							</ul>
							<ul>
								<li>10</li>
								<li><a href="">线索</a></li>
								<li>20000</li>
								<li>10000</li>
							</ul>
						</div>
					</div>
					<!--右侧分页-->
					<div class="firstRow">
					</div>
					<!--分页结束-->

			    </div>
			    
			</div>	    
		</div>
		<!-- end #content -->
	</div>
	<!-- end page container -->
	<!--新建任务弹出层-->
	<div class="checkMask review">
		<div>
			<form action="" method="post" class=" animated bounceInDown">
				 <div class="MaskTop">添加专题</div>
                <em class="fa fa-times"></em>
                <div class="maskBox">
                    <ul class="Times clearfix">
                        <li>名称：<input type="text" style="margin-left:26px;" id="userC" placeholder="请输入名称"/></li>
                        <li class="lefttd">起始时间：
                            <input type="text" id="startTime" class="input sel_event_stime hasDatepicker" placeholder="请输入开始时间"></li>
                        <li class="lefttd">结束时间：
                            <input type="text" id="endTime" class="input sel_event_etime hasDatepicker" placeholder="请输入结束时间"></li>
                    </ul>
                    <div class="cruxUp">
                        <span class="span">关键词：</span>
                        <div class="crux">
                            <ul>
                                <li class="bg">包含</li>
                                <!--<li>至少包含一个</li>-->
                                <li>不包含</li>
                            </ul>
                            <textarea class="textA" placeholder="关键词之间空格分割表示与， 回车、逗号分割表示或。"></textarea>
                            <textarea class="textB" placeholder="关键词之间空格分割表示与， 回车、逗号分割表示或。"></textarea>
                        </div>
                    </div>
                    <div class="hida">
                        <span class="span">预览：</span>
                        <div class="hidc">
                            <ul>
                                <!--<li class="qbh">全包含：</li>-->
                                <li class="zbh">
                                    <b>　包含：</b>
                                    <div class="zbhBox"></div>
                                </li>
                                <li class="bbh">
                                    <b>不包含：</b>
                                    <div class="bbhBox"></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="btnMask taskBtn">
                    <a href="../../IOPM/subject/report/report.ftl"><button class="btn btn-primary" type="button" value="确定" id="saa">确定</button></a>
                    <span></span>
                    <button class="btn btn-danger" value="取消">取消</button>
                </div>
			</form>
		</div>
	</div>
	
	
	<!--删除弹出层-->
	<div class="checkMask delete">
		<div>
			<form action="" method="post" class="animated bounceInLeft">
				<div class="MaskTop">删除任务</div>
				<em class="fa fa-times"></em>
				<div class="deleText">
					您确定删除此任务吗？
				</div>
				<div class="btnMask">
					<button class="btn btn-primary" type="submit" value="确定">确定</button>
					<span></span>
					<button class="btn btn-danger" value="取消">取消</button>
				</div>
			</form>
		</div>
	</div>
	<!--热点详细信息弹出层-->
	<div class="checkMask main hotSpot">
		<div>
			<form method="" class=" animated bounceInDown">
				<div class="MaskTop">舆情详情</div>
				<em class="fa fa-times"></em>
				<div class="msgs text-center">
					<div class="newsTop">
						<span>云南大理40条措施整治旅游市场  取消定点购物</span>
					</div>
					<div class="newsInfo">
						<div class="info">
							<span>发布时间：</span><span class="infoSpan pushTime">2017-04-10 23:59:59</span>
							<span>站点：</span><span class="infoSpan site">今日头条 </span>
							<span>作者：</span><span class="infoSpan source">今日头条 </span>
							<span>评论数：</span><span class="infoSpan talk">今日头条 </span>
							<span>点赞数：</span><span class="infoSpan commt">今日头条 </span>
							<span>阅读数：</span><span class="infoSpan review">今日头条 </span>
							<span><a href="http://www.baidu.com" target = "_blank">查看源网页</a><span>
						</div>
					</div>
					<div class="svg">
						<div class="svg-img" onclick="userAct2(0)">
							<input type="hidden" id="msgId2" />
							<img src="/IOPM/netHotSpotFound/relatedNews/images/svg1.png" alt="采纳"/><span style="color:green;">采纳</span>&nbsp<i id="adopt" style="color:green;">1</i>
						</div>
						<div class="svg-img" onclick="userAct2(1)">
							<img src="/IOPM/netHotSpotFound/relatedNews/images/svg2.png" alt="不采纳"/><span style="color:red;">不采纳</span>&nbsp<i id="notAdopt" style="color:red;">1</i>
						</div>
					</div>
					<div class="newsContent">
						<div class="Hot">
							<img src="/IOPM/netHotSpotFound/relatedNews/images/002.jpg" class="image"/>
							<div class="Hotspot">
								
								
							</div>
						</div>
						<div class="comment">
							<div class="comment-Top">
								<ul>
									<li>评论区：</li>
									<li>情感倾向：
										<select name="sela" id="sela">
											<option>全部</option>
											<option>正面</option>
											<option>负面</option>
											<option>中立</option>
										</select>
									</li>
									<li>
										<span>时间</span><i><img src="/IOPM/netHotSpotFound/relatedNews/images/selectArrowdown.png"/></i>
									<span>点赞数</span><i><img src="/IOPM/netHotSpotFound/relatedNews/images/selectArrowdown.png"/></i>
									</li>
								</ul>
							</div>
						</div>
						<div class="comment-content">
							<div class="comment-C">
								<div><span>网名：</span><span>xxx</span></div>
								<div><span>内容：</span><span>xxx</span></div>
								<ul class="clear">
									<li>发布时间：<span>2017/0718</span></li>
									<li>点赞数：<span>xxx</span></li>
									<li>情感倾向：<span>正面</span></li>
								</ul>
							</div>
							<div class="comment-C">
								<div><span>网名：</span><span>xxx</span></div>
								<div><span>内容：</span><span>xxx</span></div>
								<ul class="clear">
									<li>发布时间：<span>2017/0718</span></li>
									<li>点赞数：<span>xxx</span></li>
									<li>情感倾向：<span>正面</span></li>
								</ul>
							</div>
							<div class="comment-C">
								<div><span>网名：</span><span>xxx</span></div>
								<div><span>内容：</span><span>xxx</span></div>
								<ul class="clear">
									<li>发布时间：<span>2017/0718</span></li>
									<li>点赞数：<span>xxx</span></li>
									<li>情感倾向：<span>正面</span></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
<!--推送至微信-->
	<div class="checkMask append">
    <form action="" method="post" class=" animated bounceInRight">
        <div class="MaskTop">选择发送范围</div>
        <em class="fa fa-times"></em>

        <div class="msgs">
        	<dl id="marquee-a">
        		<!--<dt>全部</dt>
        		<dd><img src="images/addS.png" alt="" /><span>姓名</span></dd>
        		<dd><img src="images/addS.png" alt="" /><span>姓名1</span></dd>
        		<dd><img src="images/addS.png" alt="" /><span>姓名2</span></dd>
        		<dd><img src="images/addS.png" alt="" /><span>姓名3</span></dd>-->
        	</dl>
        	<dl id="marquee-b">
        		
        	</dl>
        </div>
        <div class="btnMask">
            <button class="btn btn-primary" type="button" value="确定">确定</button>
            <span></span>
            <button class="btn btn-danger" value="取消">取消</button>
        </div>
    </form>
</div>


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
	<script src="/IOPM/netHotSpotFound/relatedNews/js/relatedNews.js" type="text/javascript" charset="utf-8"></script>
	<script src="/IOPM/netHotSpotFound/relatedNews/js/echarts.common.min.js" type="text/javascript" charset="utf-8"></script>
	<script src="/IOPM/netHotSpotFound/public/switchery/switchery.min.js" type="text/javascript" charset="utf-8"></script>
	<script src="/IOPM/netHotSpotFound/relatedNews/js/public_include.js" type="text/javascript" charset="utf-8"></script>
	<!-- ================== BEGIN private JS ================== -->
	<script>
		$(document).ready(function() {
			App.init();
//			Calendar.init();
		});
	</script> 

</body>
</html>