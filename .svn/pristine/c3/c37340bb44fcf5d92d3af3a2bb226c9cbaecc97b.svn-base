<!DOCTYPE html>
<#include "../../include/header.ftl" />
<head>
	<meta charset="utf-8" />
	<title>APP管理</title>
	<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport" />
	<meta content="" name="description" />
	<meta content="" name="author" />
	
	
	<!-- ================== BEGIN BASE CSS STYLE ================== -->
	<link href="${base}/public/css/fontusero.css" rel="stylesheet">
	<link href="${base}/public/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
	<link href="${base}/public/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
	<link href="${base}/public/css/animate.min.css" rel="stylesheet" />
	<link href="${base}/public/css/style.min.css" rel="stylesheet" />
	<!--<link href="${base}/public/css/style-responsive.min.css" rel="stylesheet" />-->
	<link href="${base}/public/css/theme/default.css" rel="stylesheet" id="theme" />
	<link rel="stylesheet" type="text/css" href="${base}/public/css/daterangepicker-bs3.css">
	<!-- ================== END BASE CSS STYLE ================== -->
		
	<!-- ================== BEGIN PAGE LEVEL STYLE ================== -->
    <link href="${base}/public/plugins/gritter-1.7.4/css/jquery.gritter.css" rel="stylesheet" />	
	<!-- ================== END PAGE LEVEL STYLE ================== -->
	<!-- ================== BEGIN private JS ================== -->
	<!--时间-->
	<link rel="stylesheet" href="${base}/public/bootstrap-datepicker/css/datepicker.css" />
	<link rel="stylesheet" href="${base}/public/bootstrap-datepicker/css/datepicker3.css" />
	<link rel="stylesheet" href="${base}/public/bootstrap-datetimepicker/css/datetimepicker.css" />
	
	<link rel="stylesheet" href="${base}/public/calendar/ion.calendar.css" />
	<link href="${base}/public/plugins/DataTables/css/data-table.css" rel="stylesheet" />
	<link rel="stylesheet" href="${base}/public/css/checkmask.css" />
	<link rel="stylesheet" href="${base}/pages/APPmanage/css/APPmanage.css" />
	<link rel="stylesheet" href="${base}/public/switchery/switchery.min.css" />
	<!-- ================== BEGIN private JS ================== -->
	<!-- ================== BEGIN BASE JS ================== -->
	<script src="${base}/public/plugins/pace/pace.min.js"></script>
	<!-- ================== END BASE JS ================== -->
	
	<script src="${base}/public/plugins/slimscroll/jquery.slimscroll.min.js"></script>
	<script src="${base}/public/plugins/bootstrap/js/bootstrap.min.js"></script>
</head>
<body>

		
		<!-- begin #content -->
		<div id="content" class="content" style="margin:0; padding:0;">
		<input type="hidden" name="conditionAppInfo.appId" id="searchId" value="<#if conditionAppInfo?exists>${conditionAppInfo.appId?if_exists}</#if>"/>
		    <div class="panel panel-primary" style="margin-top: 20px;">
				<div class="panel-heading">
			        <h4 class="panel-title">高级检索</h4>
			    </div>
			    
			      <form id="searchAppInfo" action="/IOPM/appMgr/AppMgrAction_getAppInfoList.action" method="post">
				        <input type="hidden" id="start" name="start" value="${start?if_exists}">	
				        <input type="hidden" name="limit" value="${limit?if_exists}">
				        <input type="hidden" name="uploadPath" value="${uploadPath?if_exists}" id="uploadPath">
			    <div class="panel-body">			    	
			    	<dl class="srhManage">
			    		<dt>APP名称：</dt>
			    		<dd>
			    		<!--
			    			<select name="conditionAppInfo.appId" id="appId" class="selEventType form-control">
				        	</select>
				        -->	
				        <input type="hidden" id="conditionAppName" name="conditionAppName" value="${conditionAppName?if_exists}" />
			           		<input class="form-control inlblock" id="searchWord" type="text" value="" />
							<ul class="srhList" id="promptUl">
								
							</ul>
			    		</dd>
			    		<dt>监测状态：</dt>
			    		<dd>
			    			<select id="monitorType" name="conditionAppInfo.monitorType" class="event_level form-control">
				          		<option value="">全部</option>
                    			<option value="1" <#if conditionAppInfo?exists && conditionAppInfo.monitorType?exists && conditionAppInfo.monitorType == 1>selected</#if>>启用</option>
                    			<option value="0" <#if conditionAppInfo?exists && conditionAppInfo.monitorType?exists && conditionAppInfo.monitorType == 0>selected</#if>>关闭</option>
			           		</select>		
			    		</dd>
			    		<dd style="width: 10%;"><input type="button" style="width: 70%;" class="btn btn-success"  onClick="query();" value="筛选"></dd>
			    		<dd style="width: 10%;"><input type="button" style="width: 90%;" class="btn btn-success add" value="新增APP" ></dd>
			    	</dl>
			    	
			    </div>
			       </form>	 
			    <div class="panel-heading">
			        <h4 class="panel-title">APP管理</h4>
			    </div>
			     
			    <div class="panel-body">
			        <div class="box">
			        	<ul>
			        	   <#if pagination?exists>
								<#if pagination != ''>
								    <#assign ls= pagination.list.size()>
								    <#if ls!=0>
								    <#list pagination.list as alist>
			        			<li>
			        			<div class="appDetail">
			        				<div class="left">
			        				
			        					<a class="softImg" href="javascript:;" onClick="updateApp(event,'${alist.appId?if_exists}',
	        												   '${alist.appName?if_exists}',
	        												   '${alist.developer?if_exists}',
	        												   '${alist.downloadCount?if_exists}',	
	        												   '${alist.goodRate?if_exists}',
	        												   '${alist.summary?if_exists}','${alist.monitor?if_exists}')"><img src="${alist.imageUrl?if_exists}" class="imageUrl" alt="今日头条" />
	        												   <input type="hidden" value="${alist.storageUrl?if_exists}" class="storageUrl"/></a>
			        					
			        					
			        					<#if alist.monitor?exists>
			        						<#if alist.monitor==1>
			        							<i class="see"></i>
			        						</#if>
			        					</#if>
			        				</div>
			        				<div class="right">
			        					<table>
			        						<tr><td>APP名称:<input type="hidden" value="${alist.appId?if_exists}" class="appInfo_id"/>
			        						</td>
			        						<td class="softname">
			        								<#if alist.appName?if_exists?length gt 10>
				                                    		${alist.appName[0..8]}....
				                                    	<#else>
				                                    		${alist.appName?if_exists}
				                                    	</#if></td></tr>		        						
			        						<tr><td>开发商：<input type="hidden" value="${alist.developer?if_exists}" class="developer_name"/></td><td class="softhome">
			        							
			        								<#if alist.developer?if_exists?length gt 10>
				                                    		${alist.developer[0..8]}....
				                                    	<#else>
				                                    		${alist.developer?if_exists}
				                                    	</#if></td></tr>
			        						</td></tr>
			        						<tr><td>下载量：</td><td class="softVersion">${alist.downloadCount?if_exists}</td></tr>
			        						<tr><td>好评率：</td><td class="softstar">
			        							<div class="atar_Show">
									                <p tip="${alist.goodRate?if_exists}"></p>
									            </div>
									            </td></tr>
			        						<tr><td>功能简介：</td><td class="softpro break" title="这是一款可以提供多方面多信息的软件，拥有一亿用户量这是一款可以提供多方面多信息的软件，拥有一亿用户量" >
			        						${alist.summary?if_exists}</td></tr>
			        						<tr><td>是否监测：</td><td>
			        						<input type="hidden" class="monitor" />
			        						<#if alist.monitor?exists >
			        							<#if alist.monitor==1>
			        								<input type="checkbox" class="switch softsee" checked/>
			        							<#else>
			        								<input type="checkbox" class="switch softsee" />
			        							</#if>
			        						<#else>
			        							<input type="checkbox" class="switch softsee" />
			        						</#if>
			        							
			        				    </td></tr>
			        					</table>
			        				</div>
			        				
			        			</div>
			        		</li>
			        		 </#list></#if></#if></#if>
			        	<!--	<li>
			        			<div class="appDetail">
			        				<div class="left">
			        					<a class="softImg" href="javascript:;"><img src="${base}/pages/APPmanage/images/icon.png" alt="今日头条" /></a>
			        				</div>
			        				<div class="right">
			        					<table>
			        						<tr><td>APP名称：</td><td class="softname">今日头条</td></tr>		        						
			        						<tr><td>开发商：</td><td class="softhome">北京头条科技有限公司</td></tr>
			        						<tr><td>下载量：</td><td class="softVersion">494965</td></tr>
			        						<tr><td>好评率：</td><td class="softstar">
			        							<div class="atar_Show">
									                <p tip="5"></p>
									            </div></td></tr>
			        						<tr><td>功能简介：</td><td class="softpro break" title="这是一款可以提供多方面多信息的软件，拥有一亿用户量这是一款可以提供多方面多信息的软件，拥有一亿用户量" >这是一款可以提供多方面多信息的软件，拥有一亿用户量这是一款可以提供多方面多信息的软件，拥有一亿用户量</td></tr>
			        						<tr><td>是否监测：</td><td><input type="hidden" /><input type="checkbox" class="switch softsee" /></td></tr>
			        					</table>
			        				</div>
			        			</div>
			        		</li>-->
			        		
			        	</ul>
			        </div>
			    	<!--右侧分页-->
                    <div class="row">
                    			  <#assign end = (totalCount/limit)?int>
										<#if totalCount gt 0 && totalCount%limit == 0 >
											<#assign end = (totalCount/limit)?int-1>
										</#if>
										<#assign startNo = start-1>
										<#assign endNo = startNo+6>
										<#if endNo gt end>
											<#assign endNo = end>
										</#if>
										<#if end lte 7 >
											<#assign startNo = 0>
										</#if>
						<!--左侧文字-->
                    	<div class="col-md-4 pageText font16px fontcol text-left">
							<#assign end = (totalCount/limit)?int>
									<span>展示&nbsp;<a href="#"><#if start?exists><#if start  gt (end+1)&& end gt 0>${end+1}<#elseif start lt 1  >1<#else>${start}</#if><#else>1 </#if></a>&nbsp;至&nbsp;<a href="#">
							
								<#if totalCount gt 0 && totalCount%limit == 0 >
									<#assign end = (totalCount/limit)?int-1>
								</#if>
								<#assign endNo = start+6>
								<#if start gte (end - 6)>
									<#assign endNo = start+6>
								</#if>
								<#if endNo gt end>
									<#assign endNo = end>
								</#if>
								${endNo+1}
								</a>&nbsp;页，共&nbsp;<a href="#"><#if totalCount gt 0 && totalCount%limit == 0>${(totalCount/limit)?int}<#else>${(totalCount/limit)?int+1}</#if></a>&nbsp;页&nbsp;</span>
						</div>
						<!--左侧文字结束-->
						<div class="col-md-8">
							<div class="dataTables_paginate paging_simple_numbers textright" id="datatable_paginate">
								<ul class="pagination">
								 <#assign end = (totalCount/limit)?int>
										<#if totalCount gt 0 && totalCount%limit == 0 >
											<#assign end = (totalCount/limit)?int-1>
										</#if>
										<#assign startNo = start-1>
										<#assign endNo = start+6>
										<#if start gte (end - 6)>
											<#assign startNo = end -6>
											<#assign endNo = startNo+6>
										</#if>
										<#if endNo gt end>
											<#assign endNo = end>
										</#if>
										<#if end lte 6 >
											<#assign startNo =0>
										</#if>
									<#if start gt 1&& start lte (end+1) && end gte 1>
											<li class="paginate_button previous" id="datatable_previous">
												<a href="javascript:page('${start-1}');" aria-controls="datatable" data-dt-idx="0" tabindex="0">上一页</a>
											</li>
										</#if>
										
										<#if totalCount gt 0>
											<#list startNo..endNo as index>
												<#if start == 1+index>
													<li class="paginate_button active">
														<a  aria-controls="datatable" href="javascript:page('${index+1}');" data-dt-idx="1" tabindex="0">${index+1}</a>
													</li>
												<#else>
												   	<li class="paginate_button ">
														<a href="javascript:page('${index+1}');" aria-controls="datatable" data-dt-idx="2" tabindex="0">${index+1}</a>
													</li>
												</#if>
											</#list>
											<#if  end gte 1 && start lt (end+1)>
												<li class="paginate_button next" id="datatable_next">
													<a href="javascript:page('${start+1}');" aria-controls="datatable" data-dt-idx="7" tabindex="0">下一页</a>
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
		</div>		
		<!-- end #content -->
		
		<!--软件详细信息弹出层-->
			<div class="checkMask main softDetail">
				<div>
					<form action="/IOPM/appMgr/AppMgrAction_uploadImg.action" method="post" name="form1" class=" animated bounceInDown" id="myform" enctype="multipart/form-data">
					<input type="hidden" id="updateId" name="appInfo.appId"/>
					<input type="hidden" id="oldStar" />
					<input type="hidden"  name="appInfo.storageUrl"/>
					<input type="hidden" id="goodRate" name="appInfo.goodRate"/>
					
						<div class="MaskTop">新增APP信息</div>
					
						<em class="fa fa-times"></em>
						<div class="msgs">
							<table style="width: 96%;">
								<tr>
									
									<td>APP名称：</td><td><input id="softName" type="text" name="appInfo.appName" class="form-control" /></td>
									<td colspan="2" rowspan="5" >
										<!--<div class="tdImg"><img id="img" /></div>-->
										<!-- The table listing the files available for upload/download -->
										
											<p style="height:250px;width:300px;border:1px solid gray">
												<img id="preview" alt="" name="pic"  width="300" height="250"/>
											</p>
											<input id="f" type="file" name="file" onchange="change()"  />
									</td>
								</tr>
								<tr>
									
									<td>开发商：</td><td><input id="softHome" type="text" name="appInfo.developer" class="form-control" /></td>
								</tr>
								<tr>
									<td>下载量：</td><td><input id="softVersion" type="text" name="appInfo.downloadCount" class="form-control" /></td>
									
								</tr>
								<tr>
									<td>好评率：</td><td id="softstar" class="chakan"  style="padding-top: 13px;"></td>
									<td class="zengjia">
										<div id="startone"  class="block clearfix" style="margin-top: 6px;margin-left: -3px;">
								            <div class="star_score"></div>
								        </div>
								        
									</td>
								</tr>
								
								<tr>
									<td>是否监测：</td>
									<td style="text-align: left;"><select id="isMonitor" name="appInfo.monitor">
										<option value="-1">请选择</option>
										<option value="1">开启</option>
										<option value="0">关闭</option>
									</select></td>
									<td>
										<!--<div class="tdFile">
											<input type="file" class="form-control" onchange="getImgPath(this)" />
											<input type="button" class="btn btn-primary form-control" value="选择图片">
										</div>-->
										
									</td>
								</tr>
								<tr>
									<td style="vertical-align: top;">功能简介：</td><td colspan="3">
										<!--<input id="softPro" type="text" class="form-control" />-->
									<textarea id="softPro" class="form-control" name="appInfo.summary" rows="5" cols=""></textarea>
									</td>
								</tr>
							</table>
							
						</div>
						<div class="btnMask">
							<button class="btn btn-primary" type="button" onClick="updateSubmit()" value="确定">确定</button>
							<span></span>
							<button class="btn btn-danger" value="取消">取消</button>
							<span></span>
							<input class="btn btn-success delete" value="删除" type="button" ></input>
						</div>
					</form>
				</div>
			</div>
			<!--删除弹出层-->
			<div class="checkMask delete">
				<div>
					<form action="" method="post" class="animated bounceInLeft">
					<input type="hidden" id="delId" />
						<div class="MaskTop">删除APP</div>
						<em class="fa fa-times"></em>
						<div class="deleText">
							您确定删除此APP吗？
						</div>
						<div class="btnMask">
							<button class="btn btn-primary" type="button" onClick="deleteAppInfo()" value="确定">确定</button>
							<span></span>
						<button class="btn btn-danger" onClick="return cancleDel()" value="取消">取消</</button>
						</div>
					</form>
				</div>
			</div>
		
  
	
	<!-- ================== BEGIN BASE JS ================== -->
	<script src="${base}/public/plugins/jquery/jquery-1.9.1.min.js"></script>
	<script src="${base}/public/plugins/jquery/jquery-migrate-1.1.0.min.js"></script>
	<script src="${base}/public/plugins/jquery-ui/ui/minified/jquery-ui.min.js"></script>
	<script src="${base}/public/plugins/bootstrap/js/bootstrap.min.js"></script>
	<!--[if lt IE 9]>
		<script src="${base}/public/crossbrowserjs/html5shiv.js"></script>
		<script src="${base}/public/crossbrowserjs/respond.min.js"></script>
		<script src="${base}/public/crossbrowserjs/excanvas.min.js"></script>
	<!--[endif]-->
	
	
	<script src="${base}/public/plugins/slimscroll/jquery.slimscroll.min.js"></script>
	<script src="${base}/public/plugins/jquery-cookie/jquery.cookie.js"></script>
	<script src="${base}/public/js/daterangepicker.js" type="text/javascript"></script>
	<script src="${base}/public/js/apps.min.js"></script>
	<!-- ================== END BASE JS ================== -->
	<!-- ================== BEGIN private JS ================== -->
	<!--时间-->
	<script src="${base}/public/bootstrap-datepicker/js/bootstrap-datepicker.js" type="text/javascript" charset="utf-8"></script>
	<script src="${base}/public/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js" type="text/javascript" charset="utf-8"></script>
	<script src="${base}/public/bootstrap-timepicker/js/bootstrap-timepicker.min.js" type="text/javascript" charset="utf-8"></script>
	
	<script src="${base}/public/js/app-pages.js" type="text/javascript" charset="utf-8"></script>	
	<script src="${base}/pages/APPmanage/js/Appmanage.js" type="text/javascript" type="text/javascript" ></script>
	<script type="text/javascript" src="${base}/pages/APPmanage/js/startScore.js"></script>
	<script src="${base}/public/switchery/switchery.min.js" type="text/javascript" charset="utf-8"></script>
	<!-- 滚动条 -->
	<link rel="stylesheet" href="${base}/public/scrollbar/jquery.mCustomScrollbar.min.css" />
	<script src="${base}/public/scrollbar/jquery.mCustomScrollbar.concat.min.js" type="text/javascript" charset="utf-8"></script>
	<script src="${base}/pages/APPmanage/js/placeImage.js" type="text/javascript"></script>
	<!-- ================== BEGIN private JS ================== -->
	<script>
		scoreFun($("#startone"))
     scoreFun($("#starttwo"),{
           fen_d:22,//每一个a的宽度
           ScoreGrade:5//a的个数 10或者
         })
	</script>
	<script>
		$(document).ready(function() {
			App.init();
//			Calendar.init();
		});
	</script>
</body>
