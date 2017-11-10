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
		<link rel="stylesheet" href="../public/css/checkmask.css" />
		<!-- ================== BEGIN private JS ================== -->
		<link media="all" rel="stylesheet" type="text/css" href="simditor-2.0.1/styles/font-awesome.css" />
		<link media="all" rel="stylesheet" type="text/css" href="simditor-2.0.1/styles/simditor.css" />
		<link media="all" rel="stylesheet" type="text/css" href="bootstrap/styles/bootstrap.css" />
		<link rel="stylesheet" href="../public/bootstrap-datepicker/css/datepicker.css" />
		<link rel="stylesheet" href="../public/bootstrap-datepicker/css/datepicker3.css" />
				<link href="../public/css/style.min.css" rel="stylesheet" />
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
					<div class="panel-body box-body"">
						
						 <form action="updateBlog.action" method="post">
							<div class="wrapper">
								<h4>添加日志</h4>
								<br />
							
								<input type="text" class="form-control" id="userT" name="blog.title" value="请输入标题">
								<br />
								
								<textarea id="editor" name="blog.content" autofocus>请输入内容</textarea>
								<br />
								
								<br />
								<input name="blog.abstract_" class="form-control" id="bl" rows=3 value="请输入时间">
								<br />
								<br />
								
								<button type="button" class="btn btn-default" id="btn">提交</button>
								<br />
								<br />
								<div class="alert alert-warning" role="alert">输入标题及内容，并对内容进行编辑。也可插入代码和上传本地图片 然后点击提交。</div>
							</div>
						</form>
					</div>
				</div>
				<!-- begin scroll to top btn -->
				<a href="javascript:;" class="btn btn-icon btn-circle btn-success btn-scroll-to-top fade" data-click="scroll-top"><i class="fa fa-angle-up"></i></a>
				<!-- end scroll to top btn -->

			</div>
			<!-- end page container -->
		</div>
			

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
			<script src="../public/js/app-pages.js" type="text/javascript" charset="utf-8"></script>
			<!-- ================== BEGIN private JS ================== -->
			<!--<script type="text/javascript" src="simditor-2.0.1/scripts/jquery.min.js"></script>-->
			<script type="text/javascript" src="simditor-2.0.1/scripts/module.js"></script>
			<script type="text/javascript" src="simditor-2.0.1/scripts/uploader.js"></script>
			<script type="text/javascript" src="simditor-2.0.1/scripts/simditor.js"></script>
			<script src="../public/bootstrap-datepicker/js/bootstrap-datepicker.js" type="text/javascript" charset="utf-8"></script>
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
			<script type="text/javascript">
			  	$(function(){
					toolbar = [ 'title', 'bold', 'italic', 'underline', 'strikethrough',  'color', '|',
					            'ol', 'ul', 'blockquote', 'code', 'table', '|',
					            'link', 'image', 'hr', '|',
					            'indent','outdent'
			                   ]
					var editor = new Simditor( {
						textarea : $('#editor'),
						toolbar : toolbar,  //工具栏
						/* pasteImage : true,   //允许粘贴图片 */
						defaultImage : 'simditor-2.0.1/images/image.png', //编辑器插入图片时使用的默认图片
						upload : {
							url : 'ImgUpload.action', //文件上传的接口地址
						    params: null, //键值对,指定文件上传接口的额外参数,上传的时候随文件一起提交
						    fileKey: 'fileDataFileName', //服务器端获取文件数据的参数名
						    connectionCount: 3,  //图片同时上传的最大数
						    leaveConfirm: '正在上传文件...' //当在文件上传时离开页面的提示信息
						} 
					});
					
					$('#bl').datepicker({
						todayHighlight: true,
						autoclose: true
					});
					
					$('#btn').click(function(){
						if($('#userT').val() == '请输入标题' || $('.simditor-body p').html() == '请输入内容' || $('#bl').val() == '请输入时间'){
							alert('请填写完整')
						}else{
							$.ajax({
								url:'/IOPM/SystemMoniter/SystemMoniter_addLog.action',
								type:'post',
								data:{
									'title':$('#userT').val(),
									'content':$('#editor').val(),
									'releaseTime':$('#bl').val()
								},
								dataType:'json',
								success:function(){
									
								}
							})
						}
						$('#userT').val('请输入标题')
						$('.simditor-body p').html('请输入内容')
						$('#bl').val('请输入时间') 
					})
			  	})
			 </script>
	</body>

</html>