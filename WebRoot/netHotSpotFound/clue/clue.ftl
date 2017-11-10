 
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
	<!-- ================== END BASE CSS STYLE ================== -->
    <link rel="stylesheet" href="/IOPM/netHotSpotFound/clue/css/clue.css" />
<link rel="stylesheet" href="/IOPM/netHotSpotFound/clue/css/srs.css" />
</head>
<body>

<!-- begin #page-loader -->
<div id="page-loader" class="fade in"><span class="spinner"></span></div>
<!-- end #page-loader -->

<!-- begin #page-container -->
<div id="page-container" class="fade page-header-fixed page-sidebar-fixed">
    
    <!-- begin #content -->
    <div id="content" class="content" style="margin: 0; padding: 0;">
        <!-- begin page-header -->
        <div class="panel panel-inverse" style="margin-top:20px;">
            <div class="panel-heading">
                <h4 class="panel-title">线索库</h4>
            </div>
            <div class="panel-body">
                <!--搜索-->
                <div class="top">
                    <div class="search left pull-left">
                        <form action="" method="post" id="searchRole">
                            <div>
                                <span>关键词：</span>
                                <input type="hidden" name="start" id="start" value="${start?if_exists}" />
                                <input type="hidden" name="zero_id" id="enableId6" value="${zero_id?if_exists}" />
                                <input type="hidden" name="classify_name" id="enableId" value="${classify_name?if_exists}" />
                                <input type="hidden" name="classifyTwo_name" id="enableId4" value="${classifyTwo_name?if_exists}" />
				    		    <input type="hidden" name="limit" id="limitValue" value="${limit?if_exists}"/>
                                <input name="name" type="hidden" id="checkname1" value="${name?if_exists}" />
                                <input type="text"  id="check_name" placeholder="请输入关键词" />
                            </div>
                            <div>
                                
                                <input name="keyword3" type="hidden" placeholder="请输入不包含关键词" value="${keyword2?if_exists}" />
                            </div>
                            
                            <div>
                                <span>一级分类：</span>
                                <b>
                                    <em>全部</em>
                                    <select id="enableIdList6" class="select0">
                                      
                                    </select>
                                </b>
                            </div>
                            
                            <div>
                                <span>二级分类：</span>
                                <b>
                                    <em>全部</em>
                                    <select id="enableIdList" class="select1">
                                         <option class="status_option" value="">全部</option>
                                    </select>
                                </b>
                            </div>
                            
                            <div>
                                <span>三级分类：</span>
                                <b>
                                    <em>全部</em>
                                    <select id="enableIdList2">
                                        <option class="status_option" value="">全部</option>
                               
                                    </select>
                                </b>
                            </div>
                            <div>
                                <input type="hidden" id="querySearch" name="queryMethod" value="${queryMethod?if_exists}"/>
                                <span>查询方式：</span>
                                 <b>
                                    <em>模糊查询</em>
                                    <select id="query">
                                        <option class="status_option" value="0">模糊查询</option>
                                        <option class="status_option" value="1">精确查询</option>
                                    </select>
                                 </b>
                            </div>
                            <div>
                                <input  type="button" class="btn btn-primary" onClick="javascript:userButtonSubmit(1);" value="搜索" />
                            </div>
                            
                            
                        </form>
                    </div>
                    <div class="right pull-right">
                        <div class="btns">
                            <input type="button" class="btn btn-primary add" value="增加"/>
                            <input type="button" class="btn btn-success change" value="修改"/>
                            <input type="button"  class="btn btn-danger del" value="删除"/>
                            <input type="button"  class="btn btn-dao dao" value="导出报表"/>
                        </div>
                    </div>
                </div>
            </div>

            <div class="panel-heading">
                <h4 class="panel-title">线索库列表</h4>
            </div>
            <div class="panel-body">
                <div class="table-responsive">
                    <div class="col-md-10 font16px" style="margin-bottom: 15px;">
                        <!--每页展示12条-->
                        <span class="fontcol">每页展示</span>
                        <select name="limit" id="pageSizeSelect" class="inlblock">
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                        </select>
                        <span class="fontcol">条</span>
                        <span class="fontcol">共${totalCount?if_exists}条</span>
                    </div>
                    <!--<div class="col-md-2 font16px pull-right" style="margin-bottom: 15px;text-align: right;">
                        <button class="btn btn-inverse" id="addSpec">添加专题</button>
                    </div>-->
                    <table id="data-table" class="table table-striped table-bordered nowrap" width="100%">
                        <thead>
                        <tr>                            
                            <th>序号</th>                       
                            <th>名称</th>
                            <th>包含关键词</th>
                            <th>不包含关键词</th>
                            <th>一级分类</th>
                            <th>二级分类</th>
                            <th>三级分类</th>
                            <th>信息总量</th>
                            <th>今日信息量</th>
                            <th>创建时间</th>
                            <th>更新时间</th>
                        </tr>
                        </thead>
                        <tbody>
                        <#if rolePgn?exists>
						<#if rolePgn != ''>
						<#assign ls= rolePgn.list.size()>
					    <#if ls!=0>
					    <#list rolePgn.list as roleList>
                        <tr class="odd gradeX">
                            <td class="userIndex">${(roleList_index+1)+(rolePgn.pageNo*rolePgn.pageSize)}<span style="display:none">${roleList.id?if_exists}</span></td>
						    <input id="iopm_id" value="${roleList.id?if_exists}" type="hidden"/>
						    <td class="userName"><div>${roleList.name?if_exists}</div></td>
						    <td class="userloginName"><div>${roleList.keyword2!'--'}</div></td>
                            <td class="userloginPwd"><div>${roleList.keyword3!'--'}</div></td>
                            <input class="userZER" value="${roleList.zero_id?if_exists}" type="hidden"/>
                            <td class="userZERO"><div>${roleList.zero_name!'--'}</div></td>
                            <td class="userSex"><div>${roleList.first_classify!'--'}</div></td>
                            <td class="secondCL"><div>${roleList.second_classify!'--'}</div></td>
                            <td class="userMail">${roleList.total_msg!'--'}</td>
                            <td class="userQQ">${roleList.today_msg!'--'}</td>
                            <td class="userTel">${roleList.record_time?datetime}</td>
                            <td class="userTel">${(roleList.update_time?datetime)!'--'}</td>
                        </tr>    
                        </#list></#if></#if></#if>                 
                        </tbody>
                    </table>

                </div>

               <!--右侧分页-->
                    <div class="row">
						<!--左侧文字-->
                    	<div class="col-md-6 pageText font16px fontcol">
								<span>展示&nbsp;<a href="#">${start?if_exists+1}</a>&nbsp;至&nbsp;<a href="#">
								<#assign end = (totalCount/limit)?int>
								<#if totalCount gt 0 && totalCount%limit == 0 >
									<#assign end = (totalCount/limit)?int-1>
								</#if>
								<#assign endNo = start+2>
								<#if start gte (end - 2)>
									<#assign endNo = start+2>
								</#if>
								<#if endNo gt end>
									<#assign endNo = end>
								</#if>
								<#if start gt end>
									<#assign start = end>
								</#if>
								${endNo+1}
								</a>&nbsp;页，共&nbsp;<a href="#"><#if totalCount gt 0 && totalCount%limit == 0>${(totalCount/limit)?int}<#else>${(totalCount/limit)?int+1}</#if></a>&nbsp;页&nbsp;</span>
						</div>
						<!--左侧文字结束-->
						<div class="col-md-6 text-right">
							<div class="dataTables_paginate paging_simple_numbers textright" id="datatable_paginate">
								<ul class="pagination">
								<#assign end = (totalCount/limit)?int>
											<#if totalCount gt 0 && totalCount%limit == 0 >
												<#assign end = (totalCount/limit)?int-1>
											</#if>
											<#assign startNo = start>
											<#assign endNo = start+2>
											<#if start gte (end - 2)>
												<#assign startNo = end -2>
												<#assign endNo = start+2>
											</#if>
											<#if endNo gt end>
												<#assign endNo = end>
											</#if>
											<#if end lte 2 >
												<#assign startNo = 0>
											</#if>
											<#if start !=0 && end gte 1>
												<li class="paginate_button previous" id="datatable_previous">
													<a href="javascript:page('${start-1}');" aria-controls="datatable" data-dt-idx="0" tabindex="0">上一页</a>
												</li>
											</#if>
											<#if start == 0 && end gte 1>
												<li class="paginate_button previous disabled" id="datatable_previous">
													<a href="javascript:void(0););" aria-controls="datatable" data-dt-idx="0" tabindex="0">上一页</a>
												</li>
											</#if>
											<#if totalCount gt 0>
												<#list startNo..endNo as index>
													<#if start == index>
														<li class="paginate_button active">
															<a href="#" aria-controls="datatable" data-dt-idx="1" tabindex="0">${index+1}</a>
														</li>
													<#else>
													   	<li class="paginate_button ">
															<a href="javascript:page('${index}');" aria-controls="datatable" data-dt-idx="2" tabindex="0">${index+1}</a>
														</li>
													</#if>
												</#list>
												<#if start != end>
													<li class="paginate_button next" id="datatable_next">
														<a href="javascript:page('${start+1}');" aria-controls="datatable" data-dt-idx="7" tabindex="0">下一页</a>
													</li>
												<#elseif end gt 1>
												<li class="paginate_button next disabled" id="datatable_next">
													<a href="javascript:void(0););" aria-controls="datatable" data-dt-idx="7" tabindex="0">下一页</a>
												</li>
												</#if>
											</#if>
								</ul>
							</div>
						</div>
					</div>
					<!--分页结束-->
                </div>
           </div>
			<!-- end panel -->
 		<div class="Collation">
            <h2>相关度排序规则<img src="/IOPM/netHotSpotFound/clue/img/mark.png" alt=""/></h2>
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
					<font color = 'red'>*更新相关度排序规则，会影响到热点及舆情相关度排序</font>
				</p>
			</div>
			<form method="post" id="example">
			<div class="e-1">
                    <label for="example-1">热点系数：</label>
                    <input type="text" id="example-1" style="margin-left:32px;" value="请输入0-1之间的数字">
                </div>
                <div class="e-2">
                    <label for="example-2">线索系数：</label>
                    <input type="text" id="example-2" style="margin-left:32px;" value="请输入0-1之间的数字">
                </div>
            <div class="e-3">
                <label for="example-3">负面权重：</label>
                <input type="text" id="example-3" style="margin-left:32px;" name="example3" value="请输入0-1之间的数字">
            </div>
            <div class="e-4">
                <label for="example-3">主流媒体权重：</label>
                <input type="text" id="example-4" name="example4" value="请输入0-1之间的数字">
            </div>
            <div id="tt"></div>
            <div class="weighting">
                <div class="header">
                    <span>线索权重：</span><a href="javascript:;">修改</a>
                    <div id="box">
                        <div id="hea">
                            <ul class="header-one">
                               
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
            <div class="text">
                相关度排序规则
            </div>
            <div class="marker"></div>
            </form>
        </div>
    </div>
		<!-- end #content -->
<!--增加弹出层-->
<div class="checkMask main increase">
    <form action="" method="post" id="myfirstform" class=" animated bounceInUp">
        <div class="left">
        <div class="MaskTop">增加线索</div>
        <em class="fa fa-times"></em>
        <div class="msgs text-center">
            <table style="width: 96%;">
                <tr>
                    <td><i>*</i>名称：</td><td><input id="userC" name="name" type="text" class="form-control" placeholder="请输入名称" /></td>
                </tr>
                <tr>
                    <td><input id="myUpdateId" type="hidden" name="zero_name" class="form-control" /></td>
                    <td><input id="userZ" type="hidden" name="zero_name" class="form-control" /></td>
                    
                </tr>
                <tr>
                    <td><i>*</i>一级类别：</td>
                    <td>
                       
                          <select id="enableIdList0" class="select0" style="width: 100%;height: 36px;border-radius: 3px;">
                                      
                          </select>
                      
                    </td>
                </tr>
                    
                <tr>
                    <td><i>*</i>二级类别：</td><td class="kwType secdType"><input id="userL" type="text" name="classify_name" class="form-control kwTypeInp" placeholder="请输入类别" />
                    <div class="hid">
                    	<!--<span>常用类别：</span><br>-->
                        <ul class="de">
                            
                        </ul>
                    </div>
                    </td>
                </tr>
                
                <tr>
                    <td>三级类别：</td><td class="kwType thrdType"><input id="userD" type="text" class="form-control kwTypeInp" placeholder="请输入类别" />
                    <div class="hid hidp">
	                    <!--<span>常用类别：</span><br>-->
	                    <ul class="ee">
	                    </ul>
	                </div>
                    </td>
                </tr>
            </table>

            <div class="cruxUp">
                <span class="span"><i>*</i>关键词：</span>
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
            <!--<div class="hidb">-->
                <!--<span class="span">推荐：</span>-->
                <!--<div class="hidd"></div>-->
            <!--</div>-->
        </div>
        <div class="btnMask">
            <button class="btn btn-primary" type="button" onclick="javascript:addSubmit();" value="确定">确定</button>
            <span></span>
            <button class="btn btn-danger" value="取消">取消</button>
        </div>
        </div>
        <!--右側-->
        <div class="rightBox">
        	<div class="kwDetails">
        		<div class="MaskTo">信息预览</div>
       			<i class="fa fa-times"></i>
       			<div class="srch">
       				<form action="" method="post">
       					<div class="kwBox">
       						<input type="text" id="kwSrch" value="" placeholder="请输入关键词" />
       						<!--<img src="img/srch.png"/>-->
       					</div>
       					<!--<input type="submit" value=""/>-->
       				</form>
       			</div>
       			<div id="detailsBody">
                                        <img src="/IOPM/netHotSpotFound/clue/img/play.png" alt="" class="play"/>
                    <div class="none-D"><img src="/IOPM/netHotSpotFound/clue/img/none.png" alt="" class="none"/><div>暂无数据</div></div>
       				<ul>
       				</ul>
                     <iframe src="" style="border:none;" width="100%" height="100%" scrolling="none" ></iframe>
       			</div>
        	</div>
        </div>
    </form>
</div>
<!--修改弹出层-->
<!--修改弹出层-->
<div class="checkMask main users">
    <form action="" method="post" class=" animated bounceInTop">
        <div class="MaskTop">增加线索</div>
        <em class="fa fa-times"></em>
        <div class="msgs text-center">
            <table style="width: 96%;">
                <tr>
                   <td><input id="myUpdateId" type="hidden" class="form-control" placeholder="请输入id" /></td>
                </tr>
                <tr>
                    <td>名称：</td><td><input id="userQ" type="text" class="form-control" placeholder="请输入名称" /></td>
                </tr>
                <tr>
                    <td>一级类别：</td><td><input id="userW" type="text" class="form-control" placeholder="请输入类别" /></td>
                </tr>
                <tr class="ccc">
                    <td colspan="2">
                        <div class="hidd">
                            <span>常用类别：</span><br>
                            <ul>
                            <#list iopmList as iio>
                                  <li>${iio.first_classify!''}</li>
                            </#list>
                            </ul>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>二级类别：</td><td><input id="userE" type="text" class="form-control" placeholder="请输入类别" /></td>
                </tr>
                <tr class="ddd">
                    <td colspan="2">
                        <div class="hidd hidpp">
                            <span>常用类别：</span><br>
                            <ul class="eee">
                            </ul>
                        </div>
                    </td>
                </tr>
            </table>

            <div class="cruxDown">
                <span class="span">关键词：</span>
                <div class="cruxx">
                    <ul>
                        <li class="bgg">包含</li>
                        <!--<li>至少包含一个</li>-->
                        <li>不包含</li>
                    </ul>
                    <textarea class="textt" placeholder="关键词之间空格分割表示与， 逗号分割表示或。"></textarea>
                </div>
            </div>
            <div class="hidaa">
                <span class="span">预览：</span>
                <div class="hidcc">
                    <ul>
                        <!--<li class="qbh">全包含：</li>-->
                        <li class="zbhh">包含：</li>
                        <li class="bbhh">不包含：</li>
                    </ul>
                </div>
            </div>
            <div class="hidbb">
                <span class="span">推荐：</span>
                <div class="hiddd"></div>
            </div>
        </div>
        <div class="btnMask">
            <button class="btn btn-primary" type="submit" onClick="updateSubmit()" value="确定">确定</button>
            <span></span>
            <button class="btn btn-danger" value="取消">取消</button>
        </div>
    </form>
</div>
<!--删除弹出层-->
<div class="checkMask delete">
    <div>
        <form action="" method="post" class="animated bounceInLeft">
            <div class="MaskTop">删除线索</div>
            <em class="fa fa-times"></em>
            <div class="deleText">
                您确定删除此线索吗？
            </div>
            <div class="btnMask">
                <input id="deleteId" name="id" type="hidden"/>
                <button class="btn btn-primary" type="button" onClick="deleteKey()" value="确定">确定</button>
                <span></span>
                <button class="btn btn-danger" onClick="return cancleDel()" value="取消">取消</button>
            </div>
        </form>
    </div>
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
<![endif]-->
<script src="/IOPM/netHotSpotFound/public/plugins/slimscroll/jquery.slimscroll.min.js"></script>
<script src="/IOPM/netHotSpotFound/public/plugins/jquery-cookie/jquery.cookie.js"></script>
<script src="/IOPM/netHotSpotFound/public/js/daterangepicker.js" type="text/javascript"></script>
<script src="/IOPM/netHotSpotFound/public/js/moment.min.js" type="text/javascript"></script>
<script src="/IOPM/netHotSpotFound/public/js/apps.min.js"></script>
<script src="/IOPM/netHotSpotFound/public/js/app-pages.js" type="text/javascript" charset="utf-8"></script>
<!-- ================== END BASE JS ================== -->
<!-- ================== BEGIN private JS ================== -->
<script src="/IOPM/netHotSpotFound/clue/js/clue.js" type="text/javascript" charset="utf-8"></script>
<script src="/IOPM/netHotSpotFound/clue/js/my.js" type="text/javascript" charset="utf-8"></script>
<script src="/IOPM/netHotSpotFound/clue/js/srs.js" type="text/javascript" charset="utf-8"></script>
<script src="/IOPM/js/moment.min.js" type="text/javascript"></script>
<script src="/IOPM/netHotSpotFound/clue/js/public_include.js" type="text/javascript" charset="utf-8"></script>
<!-- ================== BEGIN private JS ================== -->


<script>
    $(document).ready(function() {
        App.init();
    });
    
</script>
<script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-53034621-1', 'auto');
    ga('send', 'pageview');
</script>
</body>
</html>
