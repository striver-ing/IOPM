
<!--[if IE 8]> <html lang="en" class="ie8"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en">
<!--<![endif]-->
<head>
<#include "../../include/header.ftl" />
	<meta charset="utf-8" />
	<title>userInfoManage</title>
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
    <link href="${base}/public/plugins/gritter-1.7.4/css/jquery.gritter.css" rel="stylesheet" />	
	<!-- ================== END PAGE LEVEL STYLE ================== -->
	
	<!-- ================== BEGIN private JS ================== -->
	<link rel="stylesheet" href="${base}/public/scrollbar/jquery.mCustomScrollbar.min.css" />
	<link rel="stylesheet" href="${base}/pages/1-userInfoManage/css/userInfoManage.css" />
	<link rel="stylesheet" href="${base}/public/css/checkmask.css" />
	<!-- ================== BEGIN private JS ================== -->
	<!-- ================== BEGIN BASE JS ================== -->
	<script src="${base}/public/plugins/pace/pace.min.js"></script>
		<!-- ================== BEGIN BASE JS ================== -->
	<script src="${base}/public/plugins/jquery/jquery-1.9.1.min.js"></script>
	<script src="${base}/public/plugins/jquery/jquery-migrate-1.1.0.min.js"></script>
	<script src="${base}/public/plugins/jquery-ui/ui/minified/jquery-ui.min.js"></script>
	<script src="${base}/public/plugins/bootstrap/js/bootstrap.min.js"></script>
	<!--[if lt IE 9]>
		<script src="${base}/public/crossbrowserjs/html5shiv.js"></script>
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
	<script src="${base}/pages/1-userInfoManage/js/userInfoManage.js" type="text/javascript" charset="utf-8"></script>
	<script src="${base}/pages/1-userInfoManage/js/function.js" type="text/javascript" charset="utf-8"></script>
	<!-- ================== END BASE JS ================== -->
</head>
<body>

		<!-- end #sidebar -->
		<input type="hidden" name="limit" id="limit" value="${limit?if_exists}" />
		<!--begin content-->
		<!-- begin #content -->
		<div id="content" class="content">
			<!-- begin breadcrumb -->
			<!-- end breadcrumb -->
			<!-- begin page-header -->
			
			
			
	        <div class="panel panel-primary">
	        	<div class="panel-heading">
                    <h4 class="panel-title">用户信息管理</h4>
                </div>
                <div class="panel-body">
                	<!--搜索-->
                <!--搜索-->
	            	<div class="top">
	            		<div class="search left pull-left">
	            			<input type="hidden" name="userName" id="checkname1" value="${checkName1?if_exists}" />
			    			
							<form action=""  id="searchUser" method="get">
								<input type="hidden" name="roleId" id="roleId" value="${roleId?if_exists}" />
	    						<input type="hidden" name="enableId" id="enableId" value="${enableId?if_exists}" />
								<input type="hidden" name="start" id="start" value="${start?if_exists}" />
			    					<input type="hidden" name="limit" id="limitValue"/>
			    					<input type="hidden" name="userName" id="checkname" value="${userName?if_exists}" />
								<span>登录名称：</span>
								<input type="text"  id="check_name" name="checkName" placeholder="请输入登录名称"  />
									<span>角色名称：</span>
									<i>
										<em>全部</em>
									    <select class="select" id="searchconditionRole"  name="角色名称">
				    						<option class="role_option" value="">全部</option>
				    					</select>	
									</i>
									
									<span>使用状态：</span>
									<i>
										<em>全部</em>
										<select class="select" id="enableIdList">
									    	<option class="status_option" value="">全部</option>
									    	<option class="status_option" value="1" <#if enableId?exists><#if enableId?string=='1'>selected</#if></#if>>启用</option>
									    	<option class="status_option" value="0" <#if enableId?exists><#if enableId?string=='0'>selected</#if></#if>>禁用</option>
									    </select>	
									</i>
							</form>
							<input style="width: 89px; height: 38px; font-size: 18px;" type="button" class="btn btn-primary" value="搜索" onClick="javascript:userButtonSubmit(1);" />
						</div>
                        <div class="right pull-right">
							<div class="btns">
								<input type="button" class="btn btn-primary add" value="增加"  />
								<input type="button" class="btn btn-success change" value="修改" onClick="goUpdateUser(${start?if_exists+1})" />
								<input type="button"  class="btn btn-danger del" value="删除" onClick="goDel(${start?if_exists+1})"/>
							</div>
						</div>
	            	</div>
	            	
                </div>
	        	
	        	
                <div class="panel-heading">
                    <h4 class="panel-title">用户信息列表</h4>
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
                                    <th>用户名称</th>
                                    <th>登陆名称</th>
                                    <th>登陆密码</th>
                                    <th>性别 </th>
                                    <th>邮箱</th>
                                    <th>QQ</th>
                                    <th>手机</th>
                                    <th>座机</th>
                                    <th>部门</th>
                                    <th>角色名称</th>
                                    <th>使用状态</th>
                                </tr>
                            </thead>
	                  						<tbody id="userInfolist">
										        <#if userPgn?exists>
												<#if userPgn != ''>
									            <#assign ls= userPgn.list.size()>
									            <#if ls!=0>
									            <#list userPgn.list as userList>
						                  <tr>
						                <!--  <a id="update" href="javascript:void(0);" onClick="updateUserInfo(
						                  												'${userList.userId?if_exists}',
						                  												'${userList.fullName?if_exists}',
						                  												'${userList.userName?if_exists}',
						                  												'${userList.password?if_exists}',
						                  												'${userList.gender?if_exists}',
						                  												'${userList.email?if_exists}',
						                  												'${userList.qq?if_exists}',
						                  												'${userList.mobilephone?if_exists}',
						                  												'${userList.telephone?if_exists}',
						                  												'${userList.department?if_exists}',
						                  												'${userList.roleId?if_exists}',
						                  												'${userList.enable?if_exists}'
						                  												);"></a>-->
						                    <td>${(userList_index+1)+(userPgn.pageNo*userPgn.pageSize)}<span style="display:none">${userList.userId?if_exists}</span></td>
						                    <td>${userList.fullName?if_exists}</td>
						                    <td>${userList.userName?if_exists}</td>
						                    <td>${userList.password?if_exists}</td>
						                    <td>${userList.sex?if_exists}</td>
						                    <td>${userList.email?if_exists}</td>
						                    <td>${userList.qq?if_exists}</td>
						                    <td>${userList.mobilephone?if_exists}</td>
						                    <td>${userList.telephone?if_exists}</td>
						                    <td>${userList.department?if_exists}</td>
						                    <td>${userList.roleName?if_exists}<span style="display:none">${userList.roleId?if_exists}</span></td>
						                    <td>${userList.enableStatus?if_exists}</td>
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
	<div class="checkMask main users">
		<div>
			<form action="" id="userFormId" method="post" class=" animated bounceInDown">
				<div class="MaskTop">增加用户信息</div>
				<em class="fa fa-times"></em>
				<div class="msgs text-center">
						<input type="hidden" id="addUserId" name="userId"  class="tctext">
						<input type="hidden" id="updatePageNo"/>
					<table style="width: 96%; margin: 0 auto;">
						<tr>
							<td>用户名称：</td><td><input id="userName" name="fullName" type="text" class="form-control" placeholder="请输入用户名称" /></td>
							<td>登陆名称：</td><td><input id="userloginName" name="userName" type="text" class="form-control" placeholder="请输入登录名称" /></td>
						</tr>
						<tr>
							<td>登陆密码：</td><td><input id="userloginPwd" type="text" name="password" class="form-control" placeholder="请输入登陆密码" /></td>
							<td>性别：</td>
							<td>
								<select id="userSex" class="form-control"  name="gender"  >
									<option value="1">男</option>
									<option value="0">女</option>
								</select>
							</td>
						</tr>
						<tr>
							<td>邮箱：</td><td><input id="userMail" type="text" name="email" class="form-control" placeholder="请输入邮箱" /></td>
							<td>QQ：</td><td><input id="userQQ" type="text" class="form-control"  name="qq" placeholder="请输入QQ" /></td>
						</tr>
						<tr>
							<td>手机：</td><td><input id="userPhone" type="text" class="form-control" name="mobilephone" placeholder="请输入手机" /></td>
							<td>座机：</td><td><input id="userTel" type="text" class="form-control" name="telephone" placeholder="请输入座机" /></td>
						</tr>
						<tr>
							<td>部门：</td>
							<td>
								<select id="userDepart" class="form-control " name="department">
									<option value="部门1">部门1</option>
									<option value="部门2">部门2</option>
								</select>
							</td>
							<td>角色名称：</td><td><!--<input id="userRoleName" type="text" class="form-control"  name="roleId" placeholder="请输入角色名称" />-->
								<select id="addRole" name="roleId" class="form-control select">
					    			
					    	</select>
							</td>
						</tr>
						<tr>
							<td>使用状态：</td>
							<td>
								<select id="userState" class="form-control"  name="enable">
									<option value="1">启用</option>
									<option value="0">禁用</option>
								</select>
							</td>
						</tr>
					</table>
				</div>
				<div class="btnMask">
					<button class="btn btn-primary" type="button" value="确定" onClick="return onSubmit()">确定</button>
					<span></span>
					<button class="btn btn-danger" value="取消">取消</</button>
				</div>
			</form>
		</div>
	</div>
	<!--删除弹出层-->
	<div class="checkMask delete">
		<div>
			<input type="hidden" id="pageNo"/>
			<form action="" method="post" class="animated bounceInLeft">
			<input type="hidden" id="delUserId"/>
				<div class="MaskTop">删除用户</div>
				<em class="fa fa-times"></em>
				<div class="deleText">
					您确定删除此用户吗？
				</div>
				<div class="btnMask">
					<button class="btn btn-primary"   type="button" value="确定" onClick="return delUser()">确定</button>
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
                	
                	
                	
                	
                	
                	
                	
                	
                	
                	
                	
                	

