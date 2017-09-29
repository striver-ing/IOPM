<!DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en">
<!--<![endif]-->
<#assign user=Session ["login"] />
<head>
<#include "../../include/header.ftl" />
	<meta charset="utf-8" />
	<title>Rolemanage</title>
	<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport" />
	<meta content="" name="description" />
	<meta content="" name="author" />
	
	<!-- ================== BEGIN BASE CSS STYLE ================== -->
	<link href="${base}/public/css/fontusero.css" rel="stylesheet">
	<link href="${base}/public/plugins/jquery-ui/themes/base/minified/jquery-ui.min.css" rel="stylesheet" />
	<link href="${base}/public/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
	<link href="${base}/public/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
	<link href="${base}/public/css/animate.min.css" rel="stylesheet" />
	<link href="${base}/public/css/style.min.css" rel="stylesheet" />
	<!--<link href="../public/css/style-responsive.min.css" rel="stylesheet" />-->
	<link href="${base}/public/css/theme/default.css" rel="stylesheet" id="theme" />
	<link rel="stylesheet" type="text/css" href="${base}/public/css/daterangepicker-bs3.css">
	<!-- ================== END BASE CSS STYLE ================== -->
	
	<!-- ================== BEGIN PAGE LEVEL STYLE ================== -->
    <link href="../public/plugins/gritter-1.7.4/css/jquery.gritter.css" rel="stylesheet" />	
	<!-- ================== END PAGE LEVEL STYLE ================== -->
	
	<!-- ================== BEGIN private JS ================== -->
	<link rel="stylesheet" href="${base}/public/scrollbar/jquery.mCustomScrollbar.min.css" />
	<link rel="stylesheet" href="${base}/pages/1-Rolemanage/css/Rolemanage.css" />
	<link rel="stylesheet" href="${base}/public/css/checkmask.css" />
	<link rel="stylesheet" href="${base}/public/tree/jquery.treeview.css" />
	<link rel="stylesheet" href="${base}/public/tree/zTreeStyle.css" />
	<link rel="stylesheet" href="${base}/public/tree/power.css" />
	<!-- ================== BEGIN private JS ================== -->
	<!-- ================== BEGIN BASE JS ================== -->
	<script src="${base}/public/plugins/pace/pace.min.js"></script>
	<!-- ================== END BASE JS ================== -->
</head>
<body>
		<input type="hidden" name="limit" id="limit" value="${limit?if_exists}" />
		<input type="hidden" id="userName" name="userName" value="${user.userName}" />
			<input type="hidden" id="password" name="password" value="${user.password}" />
		<!--begin content-->
		<!-- begin #content -->
		<div id="content" class="content">
			<!-- begin breadcrumb -->
			<!-- end breadcrumb -->
			<!-- begin page-header -->
			<!-- end page-header -->
			
			<!-- begin row -->
			<div class="row col-md-12">
			    <!-- begin panel -->
		        <div class="panel panel-primary" data-sortable-id="ui-widget-1">
                    <div class="panel-heading">
                        <h4 class="panel-title">角色管理</h4>
                    </div>
                    <div class="panel-body">
                    	<!--搜索-->
		            	<div class="top">
                            <div class="search">
								<form action="" method="post"  id="searchRole">
									<input type="hidden" name="roleId" id="roleId" value="${roleId?if_exists}" />
									<input type="hidden" name="roleName" id="roleName" value="${roleName?if_exists}" />
									<input type="hidden" name="start" id="start" value="${start?if_exists}" />
				    				<input type="hidden" name="limit" id="limitValue"/>
									<!--<p><span><input type="text" placeholder=""  /></span><span><input type="submit" name="" value="搜索"/></span></p>-->
									<p><span>
										<select id="sect" name="roleName1" >
											<option value="">全部</option>
										</select></span>
										
										<span><input class="btn btn-primary" type="submit"  value="检索 "  onClick="querySearch(1)"/>
										<!--<span><input type="button" value="检索" /></span>-->
								</p>
								</form>
							<div class="btns">
								<input type="button" class="btn btn-primary add"  value="增加"/>
								<input type="button" class="btn btn-success change" value="修改"/>
								<input type="button"  class="btn btn-danger del" value="删除" onClick="goDel(${start?if_exists+1})"/>
								<input type="button"  class="btn btn-warning setPower" value="设置权限"/>
							</div>
							</div>
		            	</div>
		            	
                    </div>
                    
                    <div class="panel-heading">
			        <h4 class="panel-title">角色搜索列表</h4>
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
                    		</select>
                    		<span class="fontcol">条</span>
                    	</div>
                    	<!--<div class="col-md-2 font16px pull-right" style="margin-bottom: 15px;text-align: right;">
                    		<button class="btn btn-inverse" id="addSpec">添加专题</button>
                    	</div>-->
                        <table id="data-table" class="table table-striped table-bordered nowrap" width="100%">
                            <thead>
                                <tr>
                                    <th>序号</th>
                                    <th>角色名称</th>
                                    <th>角色描述</th>
                                </tr>
                            </thead>
                           		<tbody id="userInfolist">
							        <#if rolePgn?exists>
									<#if rolePgn != ''>
						            <#assign ls= rolePgn.list.size()>
						            <#if ls!=0>
						            <#list rolePgn.list as roleList>
						                  <tr>
						                 <!-- <a id="update" href="javascript:void(0);" onClick="updateRoleInfo(
						                  												'${roleList.roleId?if_exists}',
						                  												'${roleList.roleName?if_exists}',
						                  												'${roleList.description?if_exists}'
						                  												);"></a>-->
						                    <td>${(roleList_index+1)+(rolePgn.pageNo*rolePgn.pageSize)}<span style="display:none">${roleList.roleId?if_exists}</span></td>
						                    <td>${roleList.roleName?if_exists}</td>
						                    <td>${roleList.description?if_exists}</td>
						                  </a>
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
									<#if endNo gt end>
										<#assign endNo = end>
									</#if>
									<#if end lte 10 >
										<#assign startNo = 0>
									</#if>
									<#if start !=0 && end gt 1>
										<li  class="paginate_button previous disabled"  id="datatable_previous"><a class="first" href="javascript:pageRole('0');">首页</a></li>
										<li><a class="prev" href="javascript:pageRole('${start-1}');">上一页</a></li>
									</#if>
									<#if totalCount gt 0>
										<#list startNo..endNo as index>
											<#if start == index>
												<li  class="paginate_button active"><a href="#" class="current pagecolor">${index+1}</a></li>
											<#else>
											   	<li><a href="javascript:pageRole('${index}');">${index+1}</a></li>
											</#if>
										</#list>
										<#if endNo != end>
											<li><a class="next" href="javascript:pageRole('${start+1}');">下一页</a></li>
											<li><a class="last" href="javascript:pageRole('${end}');">尾页</a></li>
										</#if>
									</#if>
								</ul>
							</div>
						</div>
					</div>
					<!--分页结束-->
			    </div>
			
    			<!-- end panel -->
			</div>
		<!-- end #content -->
		<!-- begin #footer -->
		<!-- end #footer -->
		
		
		
		
		
		<!--end content-->
	
		
		<!-- begin scroll to top btn -->
		<a href="javascript:;" class="btn btn-icon btn-circle btn-success btn-scroll-to-top fade" data-click="scroll-top"><i class="fa fa-angle-up"></i></a>
		<!-- end scroll to top btn -->
	</div>
	<!-- end page container -->
	
	
	<!--弹出层-->
	<div class="checkMask main role">
		<div>
			<form action="" id="roleFormId" method="post" class=" animated bounceInDown">
				<input type="hidden" id="addRoleId" name="roleId" class="tctext">
				<div class="MaskTop">增加角色</div>
				<em class="fa fa-times"></em>
				<div class="msgs text-center">
					<table style="width: 96%;">
						<tr>
							<td>角色名称：</td><td><input id="roleName1" type="text" class="form-control"  placeholder="请输入角色名称" /></td>
						</tr>
						<tr>
							<td>角色描述：</td><td><input id="description1" type="text" class="form-control" placeholder="请输入角色描述" /></td>
						</tr>
					</table>
				</div>
				<div class="btnMask">
					<button class="btn btn-primary"  value="确定" onClick="return onSubmitRole()">确定</button>
					<span></span>
					<button class="btn btn-danger" value="取消">取消</</button>
				</div>
			</form>
		</div>
	</div>
	<!--删除弹出层-->
	<div class="checkMask delete" class="addChange">
		<div>
		<input type="hidden" id="pageNo"/>
			<form action="" method="post" class="animated bounceInLeft">
			<input type="hidden" id="delRoleId"/>
				<div class="MaskTop">删除任务</div>
				<em class="fa fa-times"></em>
				<div class="deleText">
					您确定删除此角色吗？
				</div>
				<div class="btnMask">
					<button class="btn btn-primary" type="submit" value="确定" onClick="return delRole()">确定</button>
					<span></span>
				<button class="btn btn-danger" value="取消">取消</</button>
				</div>
			</form>
		</div>
	</div>
		<!--操作提示弹出层-->
		<div class="checkMask submit">
			<div>
				<form action="" method="post" class="animated bounceInLeft" style="width: 20%; height: 280px; top: 100px;">
					<div class="MaskTop">操作提示</div>
					<em class="fa fa-times"></em>
					<div class="SubmitText">
						
					</div>
					<div class="btnMask">
						<button class="btn btn-primary" type="button" onClick="submitComplete()" value="确定">确定</button>
					</div>
				</form>
			</div>
		</div>

			<!--操作提示框 隐藏-->
				<div class="checkMask  submitChoose" id="SubmitMessageChoose">
					<div>
						<form action="" method="post" class="animated bounceInLeft" >
							<div class="MaskTop">操作提示</div>
							<em class="fa fa-times"></em>
							<div class="SubmitTextChoose">
							</div>
							<div class="btnMask">
								<button class="btn btn-primary" type="button" onClick="submitChoose()" value="确定">确定</button>
							</div>
						</form>
					</div>
				</div>
				<!--验证提示框-->
				<div class="checkMask  checksubmitChoose" id="checkSubmitMessageChoose">
					<div>
						<form action="" method="post" class="animated bounceInLeft">
							<div class="MaskTop check">操作提示</div>
							<em class="fa fa-times"></em>
							<div class="checkSubmitTextChoose">
							</div>
							<div class="btnMask">
								<button class="btn btn-primary" type="button" onClick="checkSubmitChoose()" value="确定">确定</button>
							</div>
						</form>
					</div>
				</div>
	
	<!--设置权限弹窗-->
	<div class="zTreeMask">
		<div class="content_wrap animated bounceInDown">
			<div class="zTreeBackground">
				<span>权限分配</span>
				<em class="fa fa-times"></em>
				<div id="main" style="height:470px;">
					<ul id="browser" class="filetree treeview-famfamfam">
						<li><input type="checkbox" name="privilegeIds" /><span class="folder">全选</span>
							<ul id="setPowerUl">
									
							</ul>
						</li>
					</ul>
				</div>
				<div class="btnMask text-center">
					<button class="btn btn-primary" type="submit" value="确定"  class="ok"  onClick="javascript:grantAddRole();">确定</button>
					<button class="btn btn-danger" value="取消" class="no">取消</</button>
				</div>
			</div>
		</div>
	</div>
	
	<!-- ================== BEGIN BASE JS ================== -->
	<script src="${base}/public/plugins/jquery/jquery-1.9.1.min.js"></script>
	<script src="${base}/public/plugins/jquery/jquery-migrate-1.1.0.min.js"></script>
	<script src="${base}/public/plugins/jquery-ui/ui/minified/jquery-ui.min.js"></script>
	<script src="${base}/public/plugins/bootstrap/js/bootstrap.min.js"></script>
	<!--[if lt IE 9]>
		<script src="../public/crossbrowserjs/html5shiv.js"></script>
		<script src="../public/crossbrowserjs/respond.min.js"></script>
		<script src="../public/crossbrowserjs/excanvas.min.js"></script>
	<![endif]-->
	<script src="${base}/public/plugins/slimscroll/jquery.slimscroll.min.js"></script>
	<script src="${base}/public/plugins/jquery-cookie/jquery.cookie.js"></script>
	<script src="${base}/public/js/daterangepicker.js" type="text/javascript"></script>
	<script src="${base}/public/js/moment.min.js" type="text/javascript"></script>
	<script src="${base}/public/js/apps.min.js"></script>
	<script src="${base}/public/js/app-pages.js" type="text/javascript" charset="utf-8"></script>
	<!-- ================== END BASE JS ================== -->
	<!-- ================== BEGIN private JS ================== -->
	<script src="${base}/public/scrollbar/jquery.mCustomScrollbar.concat.min.js" type="text/javascript" charset="utf-8"></script>
	<script src="${base}/pages/1-Rolemanage/js/Rolemanage.js" type="text/javascript" charset="utf-8"></script>
	<script src="${base}/public/tree/jquery.treeview.js" type="text/javascript" charset="utf-8"></script>
	<script src="${base}/public/tree/power.js" type="text/javascript" charset="utf-8"></script>
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
