<!DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en">
	<!--<![endif]-->

	<head>
		<meta charset="utf-8" />
		<title>events-analysis</title>
		<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport" />
		<meta content="" name="description" />
		<meta content="" name="author" />

		<!-- ================== BEGIN BASE CSS STYLE ================== -->
		<link href="../public/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
		<link href="../public/css/animate.min.css" rel="stylesheet" />
		<link href="../public/css/style.min.css" rel="stylesheet" />
		<!--<link href="../public/css/style-responsive.min.css" rel="stylesheet" />-->
		<link href="../public/css/theme/default.css" rel="stylesheet" id="theme" />
		<link rel="stylesheet" type="text/css" href="../public/css/daterangepicker-bs3.css">
		<!-- ================== END BASE CSS STYLE ================== -->

		<!-- ================== BEGIN PAGE LEVEL STYLE ================== -->
		<link href="../public/plugins/gritter-1.7.4/css/jquery.gritter.css" rel="stylesheet" />
		<!-- ================== END PAGE LEVEL STYLE ================== -->

		<!-- ================== BEGIN private JS ================== -->
		<!--时间-->
		<link rel="stylesheet" href="../public/bootstrap-datepicker/css/datepicker.css" />
		<link rel="stylesheet" href="../public/bootstrap-datepicker/css/datepicker3.css" />

		<link rel="stylesheet" href="../public/bootstrap-datetimepicker/css/datetimepicker.css" />
		<link href="../public/plugins/DataTables/css/data-table.css" rel="stylesheet" />
		<link rel="stylesheet" href="../public/scrollbar/jquery.mCustomScrollbar.min.css" />
		<link rel="stylesheet" href="../public/css/checkmask.css" />
		<link rel="stylesheet" href="css/hotspotMonitoring.css" />
		<!-- ================== BEGIN private JS ================== -->
		<!-- ================== BEGIN BASE JS ================== -->
		<script src="../public/plugins/pace/pace.min.js"></script>
		<!-- ================== END BASE JS ================== -->
	</head>

	<body>
		<!-- begin #page-loader -->
		<div id="page-loader" class="fade in"><span class="spinner"></span></div>
		<!-- end #page-loader -->

		<!-- begin #page-container -->
		<div id="page-container" class="fade page-header-fixed page-sidebar-fixed">
		<!-- begin #content -->
			<div id="content" class="content" style="margin:0;padding:0;">

				<div class="panel panel-inverse">
					<div class="panel-body box-body">
						<div class="vessel">
							<h4>热点信息概述</h4>
							<div class="summary">
								<i></i>
								<div id="hotg"></div>
							</div>
						</div>
						<div class="vessel">
							<h4>热点信息趋势统计</h4>
							<div class="lei">
								<span>热点统计</span>
								<select id="hot" style="border:1px solid #CECECE ;border-radius:4px; background:none;width:80px;height:23px; font-size:12px;">
                                     <option value="7" selected="">一星期</option>
                                    <option value="14">二星期</option>
                                    <option value="30">一个月</option>
                                </select>
							</div>
							<div id="synchronous"></div>
							<div class="summary">
								<i></i>
								<div id="sy"></div>
							</div>
						</div>
						<div class="vessel">
							<h4>采纳情况</h4>
							<div class="clearfix">
								<div id="adopt">
									<div class="tr">
										<span>采纳</span>
										<select name="" id="adopt_s">
											<option value="1">24小时</option>
											<option value="3">3天</option>
											<option value="7">七天</option>
											<option value="30">一个月</option>
										</select>
									</div>
									<div class="td">
										<div class="td_td"></div>
									</div>
								</div>
								<div id="notAdopt">
									<div class="tr">
										<span>不采纳</span>
										<select name="" id="notAdopt_s">
											<option value="1">24小时</option>
											<option value="3">3天</option>
											<option value="7">七天</option>
											<option value="30">一个月</option>
										</select>
									</div>
									<div class="td">
										<div class="td_not"></div>
									</div>
								</div>
							</div>
							<div class="summary">
								<i></i>
								<div id="bottom"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
				<!-- end #content -->

				<!-- begin scroll to top btn -->
				<a href="javascript:;" class="btn btn-icon btn-circle btn-success btn-scroll-to-top fade" data-click="scroll-top"><i class="fa fa-angle-up"></i></a>
				<!-- end scroll to top btn -->

			</div>
			<!-- end page container -->

			

			<!-- ================== BEGIN BASE JS ================== -->
			<script src="../public/plugins/jquery/jquery-1.9.1.min.js"></script>
			<script src="../public/plugins/jquery/jquery-migrate-1.1.0.min.js"></script>
			<script src="../public/plugins/jquery-ui/ui/minified/jquery-ui.min.js"></script>
			<script src="../public/plugins/bootstrap/js/bootstrap.min.js"></script>
			<!--[if lt IE 9]
				<script src="../public/crossbrowserjs/html5shiv.js"></script>
				<script src="../public/crossbrowserjs/respond.min.js"></script>
				<script src="../public/crossbrowserjs/excanvas.min.js"></script>
			[endif]-->
			<script src="../public/plugins/slimscroll/jquery.slimscroll.min.js"></script>
			<script src="../public/plugins/jquery-cookie/jquery.cookie.js"></script>
			<script src="../public/js/daterangepicker.js" type="text/javascript"></script>
			<script src="../public/js/moment.min.js" type="text/javascript"></script>
			<script src="../public/js/apps.min.js"></script>
			<!-- ================== END BASE JS ================== -->
			<!-- ================== BEGIN private JS ================== -->
			<!--时间-->
			<script src="../public/bootstrap-datepicker/js/bootstrap-datepicker.js" type="text/javascript" charset="utf-8"></script>
			<script src="../public/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js" type="text/javascript" charset="utf-8"></script>
			<script src="../public/bootstrap-timepicker/js/bootstrap-timepicker.min.js" type="text/javascript" charset="utf-8"></script>
			<script src="../public/echarts/js/echarts.min.js" type="text/javascript" charset="utf-8"></script>
			<script src="../public/echarts/js/china.js" type="text/javascript" charset="utf-8"></script>
			<!--<script src="../public/echarts/js/echarts-all.js" type="text/javascript" charset="utf-8"></script>-->
			<script src="../public/js/app-pages.js" type="text/javascript" charset="utf-8"></script>
			<script src="../public/scrollbar/jquery.mCustomScrollbar.concat.min.js" type="text/javascript" charset="utf-8"></script>
			<script src="js/hotspotMonitoring.js" type="text/javascript" charset="utf-8"></script>
			<!-- ================== BEGIN private JS ================== -->

			<script>
				$(document).ready(function() {
					App.init();
					$('body div.ui-sortable').removeClass('ui-sortable');
				});
			</script>
			<script>
				(function(i, s, o, g, r, a, m) {
					i['GoogleAnalyticsObject'] = r;
					i[r] = i[r] || function() {
						(i[r].q = i[r].q || []).push(arguments)
					}, i[r].l = 1 * new Date();
					a = s.createElement(o),
						m = s.getElementsByTagName(o)[0];
					a.async = 1;
					a.src = g;
					m.parentNode.insertBefore(a, m)
				})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

				ga('create', 'UA-53034621-1', 'auto');
				ga('send', 'pageview');
			</script>
	</body>

</html>