<!DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en">
!--<![endif]-->
<head>
	<meta charset="utf-8" />
	<title>涉广电舆情智能推荐系统</title>
	<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport" />
	<meta content="" name="description" />
	<meta content="" name="author" />
	
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
	
	<!-- ================== BEGIN BASE JS ================== -->
	<script src="/IOPM/js/pace.min.js"></script>
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
					<a href="javascript:;" class="navbar-brand" style="padding: 0 20px;" title="模识科技 | 涉广电舆情智能推荐系统">
						<img src="imgs/logo3.gif" alt="logo" style="max-width: inherit;" />
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
						<i class="fa fa-user" title="用户名"></i>
						<span id="week">上午好，</span><a class="username" href="#">张三</a>&nbsp;
						<time id="nowTime"></time>
						<i class="fa fa-sign-out" title="退出"></i>
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
					<li class="nav-header" style="color: white;font-size: 16px;margin-top: 20px;">涉广电舆情智能推荐系统</li>
					
					<li class="has-sub active">
						<a href="javascript:;">
							<b class="caret pull-right"></b>
							<i class="fa fa-book"></i>
							<span>涉广电线索库</span>
						</a>
						<ul class="sub-menu">
						    <li data-link="/IOPM/KeyClues/KeyCluesAction_manageClassify.action"><a href="javascript:;"><span>线索库类别</span></a></li>	
							<li data-link="/IOPM/KeyClues/KeyCluesAction_selectClassify.action"><a href="javascript:;"><span>线索库管理</span></a></li>													
						</ul>
						</li>
					<li class="has-sub">
						<a href="javascript:;">
							<b class="caret pull-right"></b>
							<i class="fa fa-book"></i>
							<span>网络热点主动发现</span>
						</a>
						<ul class="sub-menu">
							<li data-link="netHotSpotFound/netHotSpot/netHotSpot.html"><a href="javascript:;"><span>热点云视图</span></a></li>
							<li data-link="netHotSpotFound/relatedNews/relatedNews.html"><a href="javascript:;"><span>舆情推荐</span></a></li>
						</ul>
					</li>
					<li class="has-sub">
						<a href="javascript:;">
							<b class="caret pull-right"></b>
							<i class="fa fa-book"></i>
							<span>专题监控分析</span>
						</a>
						<ul class="sub-menu">
							<li data-link="../专题事件系统/2-events-config/events-config.html"><a href="javascript:;"><span>专题配置</span></a></li>
							<li data-link="../专题事件系统/2-events-analysis/events-analysis.html"><a href="javascript:;"><span>专题分析</span></a></li>
							<li data-link="../专题事件系统/2-events-rank/events-rank.html"><a href="javascript:;"><span>专题排名</span></a></li>
							<li data-link="../专题事件系统/2-events-knowledge/events-knowledge.html"><a href="javascript:;"><span>专题知识库</span></a></li>
							<li data-link="../专题事件系统/2-events-reportDetails/events-reportDetails.html"><a href="javascript:;"><span>专题报告管理</span></a></li>
						</ul>
					</li>
					<li class="has-sub">
						<a href="javascript:;">
							<b class="caret pull-right"></b>
							<i class="fa fa-book"></i>
							<span>系统监控</span>
						</a>
						<ul class="sub-menu">
							<li data-link="../专题事件系统/2-events-config/events-config.html"><a href="javascript:;"><span>专题配置</span></a></li>
							<li data-link="../专题事件系统/2-events-analysis/events-analysis.html"><a href="javascript:;"><span>专题分析</span></a></li>
							<li data-link="../专题事件系统/2-events-rank/events-rank.html"><a href="javascript:;"><span>专题排名</span></a></li>
							<li data-link="../专题事件系统/2-events-knowledge/events-knowledge.html"><a href="javascript:;"><span>专题知识库</span></a></li>
						</ul>
					</li>
					<li class="has-sub">
						<a href="javascript:;">
							<b class="caret pull-right"></b>
							<i class="fa fa-book"></i>
							<span>系统管理</span>
						</a>
						<ul class="sub-menu">
							<li data-link="netHotSpotFound/userInfoManage/userInfoManage.html"><a  href="javascript:;">用户信息管理</a></li>
							<li data-link="netHotSpotFound/Rolemanage/Rolemanage.html"><a  href="javascript:;">角色管理</a></li>
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
		
		<!-- begin #content -->
		<div id="content" class="content" style="height: 1500px;">
			
			<iframe style="border: none;" src="netHotSpotFound/netHotSpot/netHotSpot.html" width="100%" height="100%"  scrolling="auto"></iframe>

		</div>		
		<!-- end #content -->
		
        <!-- begin theme-panel -->
        <div class="theme-panel">
            <a href="javascript:;" data-click="theme-panel-expand" class="theme-collapse-btn"><i class="fa fa-cog"></i></a>
            <div class="theme-panel-content">
                <h5 class="m-t-0">主题</h5>
                <ul class="theme-list clearfix">
                    <li class="active"><a href="javascript:;" class="bg-green" data-theme="default" data-click="theme-selector" data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="默认">&nbsp;</a></li>
                    <li><a href="javascript:;" class="bg-red" data-theme="red" data-click="theme-selector" data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="红色">&nbsp;</a></li>
                    <li><a href="javascript:;" class="bg-blue" data-theme="blue" data-click="theme-selector" data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="蓝色">&nbsp;</a></li>
                    <li><a href="javascript:;" class="bg-purple" data-theme="purple" data-click="theme-selector" data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="紫色">&nbsp;</a></li>
                    <li><a href="javascript:;" class="bg-orange" data-theme="orange" data-click="theme-selector" data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="桔色">&nbsp;</a></li>
                    <li><a href="javascript:;" class="bg-black" data-theme="black" data-click="theme-selector" data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="黑色">&nbsp;</a></li>
                </ul>
                <div class="divider"></div>
                <div class="row m-t-10">
                    <div class="col-md-5 control-label double-line">头部导航</div>
                    <div class="col-md-7">
                        <select name="header-styling" class="form-control input-sm">
                            <option value="1">默认</option>
                            <option value="2">反色</option>
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
                    <div class="col-md-5 control-label double-line">导航间隔</div>
                    <div class="col-md-7">
                        <select name="sidebar-styling" class="form-control input-sm">
                            <option value="1">默认（无）</option>
                            <option value="2">有间隔</option>
                        </select>
                    </div>
                </div>
                <div class="row m-t-10">
                    <div class="col-md-5 control-label">导航条</div>
                    <div class="col-md-7">
                        <select name="sidebar-fixed" class="form-control input-sm">
                            <option value="1">自适应</option>
                            <option value="2">填充</option>
                        </select>
                    </div>
                </div>
                <div class="row m-t-10">
                    <div class="col-md-5 control-label double-line">边栏渐变</div>
                    <div class="col-md-7">
                        <select name="content-gradient" class="form-control input-sm">
                            <option value="1">禁用</option>
                            <option value="2">启用</option>
                        </select>
                    </div>
                </div>
                <div class="row m-t-10">
                    <div class="col-md-5 control-label double-line">内容样式</div>
                    <div class="col-md-7">
                        <select name="content-styling" class="form-control input-sm">
                            <option value="1">默认</option>
                            <option value="2">夜间</option>
                        </select>
                    </div>
                </div>
                <div class="row m-t-10">
                    <div class="col-md-12">
                        <a href="#" class="btn btn-inverse btn-block btn-sm" data-click="reset-local-storage"><i class="fa fa-refresh m-r-3"></i>重置本地存储</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- end theme-panel -->
		<!-- begin #footer -->
		<div class="row col-md-12">
			<div id="footer" class="footer" style="text-align: center; margin: 20px 0 0 300px;">
			    &copy; 北京中科模识科技有限公司
			</div>
		</div>
		<!-- end #footer -->
		<!-- begin scroll to top btn -->
		<a href="javascript:;" class="btn btn-icon btn-circle btn-success btn-scroll-to-top fade" data-click="scroll-top"><i class="fa fa-angle-up"></i></a>
		<!-- end scroll to top btn -->
	</div>
	<!-- end page container -->
	
	<!-- ================== BEGIN BASE JS ================== -->
	<script src="/IOPM/js/jquery/jquery-1.10.1.min.js"></script>
	<script src="/IOPM/js/jquery/jquery-migrate-1.1.0.min.js"></script>
	<script src="/IOPM/js/jquery-ui/jquery-ui.min.js"></script>
	<script src="/IOPM/js/bootstrap/bootstrap.min.js"></script>
	<!--[if lt IE 9]>
		<script src="/IOPM/assets/crossbrowserjs/html5shiv.js"></script>
		<script src="/IOPM/assets/crossbrowserjs/respond.min.js"></script>
		<script src="/IOPM/assets/crossbrowserjs/excanvas.min.js"></script>
	<![endif]-->
	<script src="/IOPM/js/jquery.slimscroll.min.js"></script>
	<!-- ================== END BASE JS ================== -->
	<script src="/IOPM/js/public.js"></script>
	<script src="js/app-pages.js"></script>
	<!-- ================== BEGIN PAGE LEVEL JS ================== -->
	<script src="js/daterangepicker.js" type="text/javascript"></script>
	<!--<script src="../public/js/moment.min.js" type="text/javascript"></script>-->
	<script src="js/apps.min.js"></script>
	<!-- ================== END BASE JS ================== -->
	<!-- ================== BEGIN private JS ================== -->
	<script src="css/scrollbar/jquery.mCustomScrollbar.concat.min.js" type="text/javascript" charset="utf-8"></script>
	<!--时间-->
	<script src="css/bootstrap-datepicker/js/bootstrap-datepicker.js" type="text/javascript" charset="utf-8"></script>
	
	<script src="js/moment.min.js" type="text/javascript"></script>
	<!--<script src="js/fullcalendar.js"></script>-->
	<!--<script src="js/calendar.demo.min.js"></script>-->
	<script src="js/apps.min.js"></script>
	<!-- ================== END PAGE LEVEL JS ================== -->
	
	<script>
		$(document).ready(function() {
			App.init();
//			Calendar.init();
//			$('body div.ui-sortable').removeClass('ui-sortable');
		});
	</script>

</body>
</html>