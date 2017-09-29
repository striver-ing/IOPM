	
<head>
	
	<title>涉广电舆情智能推荐系统</title>
	<#assign notice=Session["notice"] />
	<#assign user=Session["login"] />
	<#assign menuList=Session["rootMenulist"] />
    <#assign secondMenulist=Session["sMenulist"] />
	<#include "../../include/header.ftl" />
	
	<!-- ================== BEGIN BASE CSS STYLE ================== -->
	<link href="${base}/public/css/fontusero.css" rel="stylesheet">
	<link href="${base}/public/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
	<link href="${base}/public/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
	<link href="${base}/public/css/animate.min.css" rel="stylesheet" />
	<link href="${base}/public/css/style.min.css" rel="stylesheet" />
	<!--<link href="../public/css/style-responsive.min.css" rel="stylesheet" />-->
	<link href="${base}/public/css/theme/default.css" rel="stylesheet" id="theme" />
	<link rel="stylesheet" type="text/css" href="${base}/public/css/daterangepicker-bs3.css">
	<link rel="stylesheet" href="${base}/css/public.css"/>
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
	<!--<script src="${base}/public/plugins/pace/pace.min.js"></script>-->
	<script src="${base}/js/MsgBox.js"></script>
	<script src="${base}/js/function.js"></script>
	<!-- ================== END BASE JS ================== -->
	
</head>
<body>
	<!-- begin #page-loader -->
	<div id="page-loader" class="fade in"><span class="spinner"></span></div>
	<!-- end #page-loader -->
	
	<!-- begin #page-container -->
	<div id="page-container" class="fade page-sidebar-fixed page-header-fixed">
		<!-- begin #header -->
		<div id="header" class="header navbar navbar-default navbar-fixed-top">
			<!-- begin container-fluid -->
			<div class="container-fluid">
				<!-- begin mobile sidebar expand / collapse button -->
				<div class="navbar-header">
					<!--<a href="index.html" class="navbar-brand"><span class="navbar-logo"></span>涉广电舆情智能推荐系统</a>-->
					<a href="javascript:;" class="navbar-brand" style="padding: 0 20px;" title="模识科技 | 涉广电舆情智能推荐系统">
						<img src="${base}/imgs/logo3.gif" alt="logo" style="max-width: inherit;">
					</a>
					<button type="button" class="navbar-toggle" data-click="sidebar-toggled">
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
				</div>
				<!-- end mobile sidebar expand / collapse button -->
				
				<!-- begin header navigation right -->
				<!--右侧-->
				<div class="rightbar">
					<p>
						<i class="fa fa-user"  ></i>
						
						<span id="week"></span><span>${user.userName?if_exists}<input  id="loginId" type="hidden" value="${user.roleId?if_exists}"></span>&nbsp;
						<time id="nowTime"></time>
						<i class="fa fa-sign-out" onClick="exitSystem()"></i>
					</p>
				</div>
				<!-- end header navigation right -->
			</div>
			<!-- end container-fluid -->
		</div>
		<!-- end #header -->
		
		<!-- begin #sidebar -->
		<div id="sidebar" class="sidebar">
			<!-- begin sidebar scrollbar -->
			<div data-scrollbar="true" data-height="100%">
				<!-- begin sidebar user -->
				<!--<ul class="nav">
					<li class="nav-profile">
						<div class="image">
							<a href="javascript:;"><img src="images/user-13.jpg" alt="" /></a>
						</div>
						<div class="info">
							Sean Ngu
							<small>Front end developer</small>
						</div>
					</li>
				</ul>-->
				<!-- end sidebar user -->
				<!-- begin sidebar nav -->
				<ul class="nav">
					<!--<li class="nav-header" style="color: white;font-size: 16px;margin-top: 20px;">手机APP视听节目监测系统</li>-->
					<!--<li class="active"><a href="develope/develope.html"><i class="fa fa-calendar"></i> <span>热门主播自动发现与管理</span></a></li>
					<li class="has-sub"><a href="weigui/weigui.html"><i class="fa fa-calendar"></i> <span>疑似违规主播分析与审核</span></a></li>
					<li class="has-sub"><a href="manage/manage.html"><i class="fa fa-calendar"></i> <span>违规主播管理</span></a></li>
					<li class="has-sub"><a href="knowledge-base/knowledge-base.html"><i class="fa fa-calendar"></i> <span>违规知识库管理</span></a></li>
					<li class="has-sub"><a href="statisticalCompilation/statisticalCompilation.html"><i class="fa fa-calendar"></i> <span>统计编报</span></a></li>-->
					
			
					<li class="has-sub active">
						<a href="javascript:;">
						    <b class="caret pull-right"></b>
						    <i class="fa fa-cogs"></i>
						    <span>涉广电舆情智能推荐系统</span> 
						</a>
						<ul class="sub-menu">
						<#if menuList?exists>
		        			<#if menuList != ''>
		        				<#assign ls = menuList.size()>
		        				<#if ls!=0>
		        					<#list menuList as menu>
		        						<#assign moduleId='${menu.systemID?if_exists}'>
		        						<!--判断是否是链接-->
		        							<#if (((menu.url?trim?length) gt 5)&&(menu.sourceId==0))>
		        							 <li><a href="javascript:openPage('${base}${menu.url?if_exists}','${menu.systemName?if_exists}');">${menu.systemName?if_exists}</a></li>
		        								 <#elseif menu.sourceId==0>
		        							 		<li class="has-sub subNav">
		        							 		<a class="nav_content" href="javascript:;">${menu.systemName?if_exists}</a>
		        							 				<ul class="sub-menu navContent" margin:10px;overflow:hidden;display:none">
						        								<#if secondMenulist?exists>
						        								<#if secondMenulist != ''>
						        								<#assign sls = secondMenulist.size()>
						        								<#if sls!=0>
						        									<#list secondMenulist as sMenu>
						        										<#assign moduleSourceId='${sMenu.sourceId?if_exists}'>
						        											<#if moduleSourceId == moduleId>
						        												<li style="line-height:30px;"><a href="javascript:openPage('${base}${sMenu.url?if_exists}','${menu.systemName?if_exists}'+'——'+'${sMenu.systemName?if_exists}');">${sMenu.systemName?if_exists}</a></li>
						        											</#if>
						        									</#list>
						        								</#if>
						        								</#if>
						        								</#if>
		        											</ul>
		        							 		</li>
		        							 </#if>
		        						</#list>
		        					</#if>
		        				</#if>
		        			</#if>
						</ul>
					</li>
			        <!-- begin sidebar minify button -->
					<li><a href="javascript:;" class="sidebar-minify-btn" data-click="sidebar-minify"><i class="fa fa-angle-double-left"></i></a></li>
			        <!-- end sidebar minify button -->
				</ul>
				<!-- end sidebar nav -->
			</div>
			<!-- end sidebar scrollbar -->
		</div>
		<div class="sidebar-bg"></div>
		<!-- end #sidebar -->
		<!--消息框-->
		<div class="news">
			<div class="circular">总  局  公  告</div>
			<img src="/IOPM/imgs/x.png" alt="" class="x"/>
			<ul>
			    <#list notice as snew>
				<li class="circular-m clear">
				    <input type="hidden" value="${snew.id?if_exists}"/>
					<a href="${snew.url?if_exists}" target="_blank">${snew.title?if_exists}</a>
					<span>${snew.release_time?string("yyyy-MM-dd")}</span>
					<img src="/IOPM/imgs/l.png" alt=""/>
				</li>
				</#list>
				
			</ul>
		</div>
		<!-- begin #content -->
		<div id="content" class="content">
		<ol class="breadcrumb pull-right" id="navigationTitle" style="float:left!important;font-size:13px!important;"> 
				<li><a href="javascript:;">涉广电舆情智能推荐系统/  热点推荐</a></li>
				</ol>
		  <iframe allowfullscreen="true"  name="iframepage"  frameborder="0" allowtransparency="true" style="background-color:transparent;width:100%;height:1000px;margin-left:0px;border:0px;" id="main" 
		  src="/IOPM/netHotSpotFound/netHotSpot/netHotSpot.ftl"></iframe>
		</div>
        <!-- begin theme-panel -->
        <div class="theme-panel">
            <a href="javascript:;" data-click="theme-panel-expand" class="theme-collapse-btn"><i class="fa fa-cog"></i></a>
            <div class="theme-panel-content">
                <h5 class="m-t-0">Color Theme</h5>
                <ul class="theme-list clearfix">
                    <li class="active"><a href="javascript:;" class="bg-green" data-theme="default" data-click="theme-selector" data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="Default">&nbsp;</a></li>
                    <li><a href="javascript:;" class="bg-red" data-theme="red" data-click="theme-selector" data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="Red">&nbsp;</a></li>
                    <li><a href="javascript:;" class="bg-blue" data-theme="blue" data-click="theme-selector" data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="Blue">&nbsp;</a></li>
                    <li><a href="javascript:;" class="bg-purple" data-theme="purple" data-click="theme-selector" data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="Purple">&nbsp;</a></li>
                    <li><a href="javascript:;" class="bg-orange" data-theme="orange" data-click="theme-selector" data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="Orange">&nbsp;</a></li>
                    <li><a href="javascript:;" class="bg-black" data-theme="black" data-click="theme-selector" data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="Black">&nbsp;</a></li>
                </ul>
                <div class="divider"></div>
                <div class="row m-t-10">
                    <div class="col-md-5 control-label double-line">Header Styling</div>
                    <div class="col-md-7">
                        <select name="header-styling" class="form-control input-sm">
                            <option value="1">default</option>
                            <option value="2">inverse</option>
                        </select>
                    </div>
                </div>
                <div class="row m-t-10">
                    <div class="col-md-5 control-label">Header</div>
                    <div class="col-md-7">
                        <select name="header-fixed" class="form-control input-sm">
                            <option value="1">fixed</option>
                            <option value="2">default</option>
                        </select>
                    </div>
                </div>
                <div class="row m-t-10">
                    <div class="col-md-5 control-label double-line">Sidebar Styling</div>
                    <div class="col-md-7">
                        <select name="sidebar-styling" class="form-control input-sm">
                            <option value="1">default</option>
                            <option value="2">grid</option>
                        </select>
                    </div>
                </div>
                <div class="row m-t-10">
                    <div class="col-md-5 control-label">Sidebar</div>
                    <div class="col-md-7">
                        <select name="sidebar-fixed" class="form-control input-sm">
                            <option value="1">fixed</option>
                            <option value="2">default</option>
                        </select>
                    </div>
                </div>
                <div class="row m-t-10">
                    <div class="col-md-5 control-label double-line">Sidebar Gradient</div>
                    <div class="col-md-7">
                        <select name="content-gradient" class="form-control input-sm">
                            <option value="1">disabled</option>
                            <option value="2">enabled</option>
                        </select>
                    </div>
                </div>
                <div class="row m-t-10">
                    <div class="col-md-5 control-label double-line">Content Styling</div>
                    <div class="col-md-7">
                        <select name="content-styling" class="form-control input-sm">
                            <option value="1">default</option>
                            <option value="2">black</option>
                        </select>
                    </div>
                </div>
                <div class="row m-t-10">
                    <div class="col-md-12">
                        <a href="#" class="btn btn-inverse btn-block btn-sm" data-click="reset-local-storage"><i class="fa fa-refresh m-r-3"></i> Reset Local Storage</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- end theme-panel -->
		
		<!-- begin scroll to top btn -->
		<a href="javascript:;" class="btn btn-icon btn-circle btn-success btn-scroll-to-top fade" data-click="scroll-top"><i class="fa fa-angle-up"></i></a>
		<!-- end scroll to top btn -->
	</div>
	<!-- end page container -->
	
	<!-- ================== BEGIN BASE JS ================== -->
	<script src="${base}/public/plugins/jquery/jquery-1.9.1.min.js"></script>
	<script src="${base}/public/plugins/jquery/jquery-migrate-1.1.0.min.js"></script>
	<script src="${base}/public/plugins/jquery-ui/ui/minified/jquery-ui.min.js"></script>
	<script src="${base}/public/plugins/bootstrap/js/bootstrap.min.js"></script>
	<!--[if lt IE 9]>
		<script src="${base}/public/crossbrowserjs/html5shiv.js"></script>
		<script src="${base}/public/crossbrowserjs/respond.min.js"></script>
		<script src="../public/crossbrowserjs/excanvas.min.js"></script>
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
	<script src="${base}/js/public.js" type="text/javascript" charset="utf-8"></script>
	<script src="${base}/js/app-pages.js" type="text/javascript" charset="utf-8"></script>	
	<script src="${base}/pages/APPmanage/js/APPmanage.js" type="text/javascript" charset="utf-8"></script>
	<script type="text/javascript" src="${base}/pages/APPmanage/js/startScore.js"></script>
	<script src="${base}/public/switchery/switchery.min.js" type="text/javascript" charset="utf-8"></script>
	
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
