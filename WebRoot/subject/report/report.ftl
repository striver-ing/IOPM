<!DOCTYPE html>
<!--[if IE 8]>
<html lang="en" class="ie8"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en">
<!--<![endif]-->
<head>
    <meta charset="utf-8"/>
    <title>events-reprotDetails</title>
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport"/>
    <meta content="" name="description"/>
    <meta content="" name="author"/>

    <!-- ================== BEGIN BASE CSS STYLE ================== -->
    <link href="../public/css/fontusero.css" rel="stylesheet">
    <link href="../public/plugins/jquery-ui/themes/base/minified/jquery-ui.min.css" rel="stylesheet"/>
    <link href="../public/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
    <link rel="stylesheet" href="../../css/bootstrap-datepicker/css/datepicker.css" />
    <link href="../public/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet"/>
    <link href="../public/css/animate.min.css" rel="stylesheet"/>
    <link href="../public/css/style.min.css" rel="stylesheet"/>
    <!--<link href="../public/css/style-responsive.min.css" rel="stylesheet" />-->
    <link href="../public/css/theme/default.css" rel="stylesheet" id="theme"/>
    <link rel="stylesheet" type="text/css" href="../public/css/daterangepicker-bs3.css">
    <!-- ================== END BASE CSS STYLE ================== -->

    <!-- ================== BEGIN PAGE LEVEL STYLE ================== -->
    <link href="../../public/plugins/gritter-1.7.4/css/jquery.gritter.css" rel="stylesheet"/>
    <!-- ================== END PAGE LEVEL STYLE ================== -->

    <!-- ================== BEGIN private JS ================== -->
    <link rel="stylesheet" href="../public/calendar/ion.calendar.css"/>
    <link href="../public/plugins/DataTables/css/data-table.css" rel="stylesheet"/>
    <link rel="stylesheet" href="../public/css/checkmask.css"/>
    <link rel="stylesheet" href="css/events-reportDetails.css"/>
    <link rel="stylesheet" href="css/iBookMark.css"/>
    <link rel="stylesheet" href="../public/scrollbar/jquery.mCustomScrollbar.min.css"/>
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
    <!--&lt;!&ndash; begin #header &ndash;&gt;-->
    <!--<div id="header" class="header navbar navbar-default navbar-fixed-top">-->
    <!--&lt;!&ndash; begin container-fluid &ndash;&gt;-->
    <!--<div class="container-fluid">-->
    <!--&lt;!&ndash; begin mobile sidebar expand / collapse button &ndash;&gt;-->
    <!--<div class="navbar-header">-->
    <!--<a href="index.html" class="navbar-brand"><span class="navbar-logo"></span> Color Admin</a>-->
    <!--<button type="button" class="navbar-toggle" data-click="sidebar-toggled">-->
    <!--<span class="icon-bar"></span>-->
    <!--<span class="icon-bar"></span>-->
    <!--<span class="icon-bar"></span>-->
    <!--</button>-->
    <!--</div>-->
    <!--&lt;!&ndash; end mobile sidebar expand / collapse button &ndash;&gt;-->
    <!-- -->
    <!--&lt;!&ndash; begin header navigation right &ndash;&gt;-->
    <!--<ul class="nav navbar-nav navbar-right">-->
    <!--<li>-->
    <!--<form class="navbar-form full-width">-->
    <!--<div class="form-group">-->
    <!--<input type="text" class="form-control" placeholder="Enter keyword" />-->
    <!--<button type="submit" class="btn btn-search"><i class="fa fa-search"></i></button>-->
    <!--</div>-->
    <!--</form>-->
    <!--</li>-->
    <!--<li class="dropdown">-->
    <!--<a href="javascript:;" data-toggle="dropdown" class="dropdown-toggle f-s-14">-->
    <!--<i class="fa fa-bell-o"></i>-->
    <!--<span class="label">5</span>-->
    <!--</a>-->
    <!--<ul class="dropdown-menu media-list pull-right animated fadeInDown">-->
    <!--<li class="dropdown-header">Notifications (5)</li>-->
    <!--<li class="media">-->
    <!--<a href="javascript:;">-->
    <!--<div class="media-left"><i class="fa fa-bug media-object bg-red"></i></div>-->
    <!--<div class="media-body">-->
    <!--<h6 class="media-heading">Server Error Reports</h6>-->
    <!--<div class="text-muted f-s-11">3 minutes ago</div>-->
    <!--</div>-->
    <!--</a>-->
    <!--</li>-->
    <!--<li class="media">-->
    <!--<a href="javascript:;">-->
    <!--<div class="media-left"><img src="../public/img/user-1.jpg" class="media-object" alt="" /></div>-->
    <!--<div class="media-body">-->
    <!--<h6 class="media-heading">John Smith</h6>-->
    <!--<p>Quisque pulvinar tellus sit amet sem scelerisque tincidunt.</p>-->
    <!--<div class="text-muted f-s-11">25 minutes ago</div>-->
    <!--</div>-->
    <!--</a>-->
    <!--</li>-->
    <!--<li class="media">-->
    <!--<a href="javascript:;">-->
    <!--<div class="media-left"><img src="../public/img/user-2.jpg" class="media-object" alt="" /></div>-->
    <!--<div class="media-body">-->
    <!--<h6 class="media-heading">Olivia</h6>-->
    <!--<p>Quisque pulvinar tellus sit amet sem scelerisque tincidunt.</p>-->
    <!--<div class="text-muted f-s-11">35 minutes ago</div>-->
    <!--</div>-->
    <!--</a>-->
    <!--</li>-->
    <!--<li class="media">-->
    <!--<a href="javascript:;">-->
    <!--<div class="media-left"><i class="fa fa-plus media-object bg-green"></i></div>-->
    <!--<div class="media-body">-->
    <!--<h6 class="media-heading"> New User Registered</h6>-->
    <!--<div class="text-muted f-s-11">1 hour ago</div>-->
    <!--</div>-->
    <!--</a>-->
    <!--</li>-->
    <!--<li class="media">-->
    <!--<a href="javascript:;">-->
    <!--<div class="media-left"><i class="fa fa-envelope media-object bg-blue"></i></div>-->
    <!--<div class="media-body">-->
    <!--<h6 class="media-heading"> New Email From John</h6>-->
    <!--<div class="text-muted f-s-11">2 hour ago</div>-->
    <!--</div>-->
    <!--</a>-->
    <!--</li>-->
    <!--<li class="dropdown-footer text-center">-->
    <!--<a href="javascript:;">View more</a>-->
    <!--</li>-->
    <!--</ul>-->
    <!--</li>-->
    <!--<li class="dropdown navbar-user">-->
    <!--<a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown">-->
    <!--<img src="../public/img/user-13.jpg" alt="" /> -->
    <!--<span class="hidden-xs">Adam Schwartz</span> <b class="caret"></b>-->
    <!--</a>-->
    <!--<ul class="dropdown-menu animated fadeInLeft">-->
    <!--<li class="arrow"></li>-->
    <!--<li><a href="javascript:;">Edit Profile</a></li>-->
    <!--<li><a href="javascript:;"><span class="badge badge-danger pull-right">2</span> Inbox</a></li>-->
    <!--<li><a href="javascript:;">Calendar</a></li>-->
    <!--<li><a href="javascript:;">Setting</a></li>-->
    <!--<li class="divider"></li>-->
    <!--<li><a href="javascript:;">Log Out</a></li>-->
    <!--</ul>-->
    <!--</li>-->
    <!--</ul>-->
    <!--&lt;!&ndash; end header navigation right &ndash;&gt;-->
    <!--</div>-->
    <!--&lt;!&ndash; end container-fluid &ndash;&gt;-->
    <!--</div>-->
    <!--&lt;!&ndash; end #header &ndash;&gt;-->
    <!-- -->
    <!--&lt;!&ndash; begin #sidebar &ndash;&gt;-->
    <!--<div id="sidebar" class="sidebar">-->
    <!--&lt;!&ndash; begin sidebar scrollbar &ndash;&gt;-->
    <!--<div data-scrollbar="true" data-height="100%">-->
    <!--&lt;!&ndash; begin sidebar user &ndash;&gt;-->
    <!--<ul class="nav">-->
    <!--<li class="nav-profile">-->
    <!--<div class="image">-->
    <!--<a href="javascript:;"><img src="../public/img/user-13.jpg" alt="" /></a>-->
    <!--</div>-->
    <!--<div class="info">-->
    <!--Sean Ngu-->
    <!--<small>Front end developer</small>-->
    <!--</div>-->
    <!--</li>-->
    <!--</ul>-->
    <!--&lt;!&ndash; end sidebar user &ndash;&gt;-->
    <!--&lt;!&ndash; begin sidebar nav &ndash;&gt;-->
    <!--<ul class="nav">-->
    <!--<li class="nav-header">Navigation</li>-->
    <!--<li class="has-sub active">-->
    <!--<a href="javascript:;">-->
    <!--<b class="caret pull-right"></b>-->
    <!--<i class="fa fa-laptop"></i>-->
    <!--<span>专题监控与研判</span>-->
    <!--</a>-->
    <!--<ul class="sub-menu">-->
    <!--<li>-->
    <!--<a href="../2-events-analysis/events-analysis.html">专题分析</a>-->
    <!--</li>-->
    <!--<li>-->
    <!--<a href="../2-events-config/events-config.html">专题配置</a>-->
    <!--</li>-->
    <!--<li>-->
    <!--<a href="../2-events-manage/events-manage.html">专题管理</a>-->
    <!--</li>-->
    <!--<li>-->
    <!--<a href="../2-events-rank/events-rank.html">专题排名</a>-->
    <!--</li>-->
    <!--<li>-->
    <!--<a href="../2-events-knowledge/events-knowledge.html">专题知识库</a>-->
    <!--</li>-->
    <!--</ul>-->
    <!--</li>-->
    <!--<li class="has-sub">-->
    <!--<a href="javascript:;">-->
    <!--<b class="caret pull-right"></b>-->
    <!--<i class="fa fa-laptop"></i>-->
    <!--<span>移动APP监控</span>-->
    <!--</a>-->
    <!--<ul class="sub-menu">-->
    <!--<li>-->
    <!--<a href="../2-app-index/app-index.html">移动应用</a>-->
    <!--</li>-->
    <!--</ul>-->
    <!--</li>-->

    <!--&lt;!&ndash; begin sidebar minify button &ndash;&gt;-->
    <!--<li>-->
    <!--<a href="javascript:;" class="sidebar-minify-btn" data-click="sidebar-minify"><i class="fa fa-angle-double-left"></i></a>-->
    <!--</li>-->
    <!--&lt;!&ndash; end sidebar minify button &ndash;&gt;-->
    <!--</ul>-->
    <!--&lt;!&ndash; end sidebar nav &ndash;&gt;-->
    <!--</div>-->
    <!--&lt;!&ndash; end sidebar scrollbar &ndash;&gt;-->
    <!--</div>-->
    <!--<div class="sidebar-bg"></div>-->
    <!--&lt;!&ndash; end #sidebar &ndash;&gt;-->

    <!-- begin #content -->
    <div id="content" class="content" style="margin:0;padding:0;">
        <div class="panel panel-inverse">
            <div class="panel-body">
                <!--任务选项按钮-->
                <div class="analyDiv">
                    <div class="col-sm-10">
                        <form action="">
                            <span class="font16px">搜索专题：</span>
                            <input class="form-control srhText inlblock" type="text" placeholder="请输入专题"/>
                            <input type="button" id="inlblock" class="btn btn-primary inlblock" value="检索"/>
                            <input type="button" class="btn btn-primary add" value="添加专题"/>
                            <div id="len">
                            <ul id="lenovo">
                            </ul>
                            </div>
                        </form>
                    </div>
                    <div class="col-sm-12 font16px events">
                    	<img src="/IOPM/subject/report/imgs/jt.png" id="jt">
                        <dl>
                            
                            
                           
                        </dl>
                    </div>
                </div>

                <!--报告专题信息-->


                <div id="mod2_main">
                    <div class="border1">
                        <div class="jb_sele" id="event_report_info_add_content" style="display: none;">
                            <span style="padding-left:25px;">报告名称： </span>
                            <input type="text" class="jb_title" id="report_name">
                            <span style="padding-left:15px;">关注时间： </span>
                            <input type="text" class="jb_time" id="huizong_st" default_v="">
                            <font></font>
                            <input type="text" class="jb_time" id="huizong_et" default_v="">
                            <!--
                            <span style="padding-left:15px;">报告类型： </span>
                            <select name="report_type" class="jb_lx">
                                <option value="3">模板A</option>
                            </select>
                             -->
                            <input type="button" value="加载报告模板" class="jb_btn" id="report_do_btn"
                                   style="right: 200px;width: 95px;">
                            <a class="jb_btn" href="index.action?m_1=13" style="right: 115px;line-height: 2.4;">我的报告</a>
                            <a class="jb_btn"
                               style="right: 10px;line-height: 2.4;width: 100px;background-color: #DE1725;"
                               id="report_use_note" file_path="report_usage_labels.pdf">报告使用说明</a>
                        </div>
                        <div id="jb_content_all_div_id">
                            <link href="css/iBookMark.css" rel="stylesheet" type="text/css">
                            <!---------------南海仲裁案”事件境内外网情综述部------------->
                            <div class="main-bgao" style="position:relative;">
                            	<div class="loading">
									<div class="loadingtext">
										<img src="/IOPM/subject/report/imgs/ad.png" alt="">
										<span>loading</span>
									</div>
								</div>
                                <h3>
                                    <span id="event_report_title" title="ddd"></span>
                                </h3>

                                <p>
							    	<span>
										<b>关注时间：</b>
											<em id="report_start_time"></em>
							                <i>至</i>
							                <em id="report_end_time"></em>
									</span>
			                    </p>
                            </div>
                            <!--------------------舆情概述部分----------------------->
                            <div class="main-nesw sideToolbar-title" data-title="舆情概述" name="1" id="1" auth_for_show_hide="0">
                                <h2>
                                    <span>舆情概述</span>
                                </h2>

                                <div class="main-nesw-bd" id="report_summay" style="position:relative;">
                                <div class="loading">
									<div class="loadingtext">
										<img src="/IOPM/subject/report/imgs/ad.png" alt="">
										<span>loading</span>
									</div>
								</div>
                                    <dl>
                                        <dt><i></i></dt>
                                        <dd name="summary" class="summary1" contenteditable="">
                                          
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><i></i></dt>
                                        <dd name="summary" class="summary2" contenteditable="">
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <!--------------------舆情统计部分----------------------->
                            <div class="main-nesw sideToolbar-title" data-title="舆情统计" name="2" id="2" auth_for_show_hide="1">
                                <h2>
                                    <span>舆情统计</span>
                                </h2>

                                <div class="main-nesw" id="pie">
                                    <div class="one-world" style="width: 55%;float:left;margin-right:2%;">
                                        <div class="title1">
                                            <p>线索库类别信息量</p>

                                            <div style="float: right;margin-top: 4px;margin-right: 4px;">
                                                <select style="border:1px solid #CECECE ;border-radius:4px; background:none;width:80px;height:23px; font-size:12px;">
                                                    <option value="1">1小时</option>
                                                    <option value="2">2小时</option>
                                                    <option value="6">6小时</option>
                                                    <option value="12">12小时</option>
                                                    <option value="24" selected="">24小时</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div id="kind-statistics" style="width: 100%;height:280px;border:1px solid #C9C5C6"></div>
                                    </div>
                                    <div class="two-world" style="width: 43%;float:left;">
                                        <div class="title1">
                                            <p>线索库类别信息量</p>
                                            <div style="float: right;margin-top: 4px;margin-right: 4px;">
                                                <select id="e" style="border:1px solid #CECECE ;border-radius:4px; background:none;width:90px;height:23px; font-size:12px;">
                                                    <option value="1" selected="">信息总量</option>
                                                    <option value="24">负面信息量</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div style="height:280px;border:1px solid #ccc;" id="sidebar-i" style="position:relative;">
                                       			 <div class="loading">
													<div class="loadingtext">
														<img src="/IOPM/subject/report/imgs/ad.png" alt="">
														<span>loading</span>
													</div>
												</div>
                                            <div id="sidebar-T">
                                                
                                               
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div class="main-nesw-bd" id="yuqi" style="position:relative;">
                                <div class="loading">
									<div class="loadingtext">
										<img src="/IOPM/subject/report/imgs/ad.png" alt="">
										<span>loading</span>
									</div>
								</div>
                                    <dl>
                                        <dt><i></i></dt>
                                        <dd name="summary" id="yuqing" contenteditable="">
                                        </dd>
                                    </dl>

                                </div>
                                 <div class="main-nesw-tis">
                                    <p>注：不包含其他分类</p>
                                </div>

                            </div>                           
                            <!-----------------------事件综合影响力分析部分------------>
                            <div class="main-nesw sideToolbar-title" data-title="事件综合影响力分析" name="3" id="3" auth_for_show_hide="2">
                                <h2>
                                    <span>事件综合影响力分析</span>
                                </h2>

                                <div class="jb_con">
                                    <div class="ibox">
                                        <div class="influence_qs border1">
                                            <div class="title1">
                                                <p>影响力趋势</p>

                                                <div style="float: right;margin-top: 4px;margin-right: 4px;">
                                                    <select id="report1"
                                                            style="border:1px solid #CECECE ;border-radius:4px; background:none;width:80px;height:23px; font-size:12px;">
                                                        <option value="1">1小时</option>
                                                        <option value="2">2小时</option>
                                                        <option value="6">6小时</option>
                                                        <option value="12">12小时</option>
                                                        <option value="24" selected="">24小时</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div id="influence_trend_line"
                                                 style="height: 290px;margin-top: -10px; cursor: default; background-color: rgba(0, 0, 0, 0);">

                                            </div>
                                        </div>
                                        <div class="influenc_pj border1">
                                            <div class="title1">
                                                <p>影响力评价</p>
                                            </div>
                                            <div style="height:290px;">
                                                <div id="influence_evaluate_watch"
                                                     style="height: 280px; cursor: default; padding-top: 15px;">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="main-nesw-bd" id="effect_summay" style="position:relative;">
                                	 <div class="loading">
													<div class="loadingtext">
														<img src="/IOPM/subject/report/imgs/ad.png" alt="">
														<span>loading</span>
													</div>
												</div>
                                    <dl>
                                        <dt><i></i></dt>
                                        <dd name="effect_summary" contenteditable=""></dd>
                                    </dl>
                                </div>
                                <div class="main-nesw-tis">
                                    <p>注：①
                                        事件影响力评分根据新闻报道指数、微博扩散指数、论坛参与指数、以及境外炒作指数等多项指标综合计算得出。评分范围为0-100，其中0-20、21-40、41-60、61-80、81-100区间对应影响力分别为较小、一般、较大、很大、极大。数值越大，表明在监测周期内分析对象的传播影响力越大。</p>
                                </div>
                            </div>
                            <!--------------------事件阶段演化分析部分----------------------->
                            <div class="main-nesw sideToolbar-title" data-title="事件阶段演化分析" name="4" id="4" auth_for_show_hide="3">
                                <h2>
                                    <span>事件阶段演化分析</span>
                                </h2>

                                <div class="jb_con02" style="margin-top:20px;">
                                    <h1>
                                        <p>阶段演化</p>
			<span style="float:right;">
            	<input type="button" value="上传截图" class="jb_btn" style="margin:2px 10px 0 0; height:27px;"
                       onclick="$('#event_tracking_charts_upload').click();">
                <input type="file" style="visibility: hidden;" id="event_tracking_charts_upload" name="pic_upload"
                       target_container_id="event_evolution_charts_parent">
            </span>
                                    </h1>
                                    <div class="jb_text">
                                        <div id="report" style="height: 300px; cursor: default;width:100%;">
                                        </div>
                                    </div>
                                </div>
                                <div class="main-nesw-bd" id="stage_summary" style="position:relative;">
                                <div class="loading">
									<div class="loadingtext">
										<img src="/IOPM/subject/report/imgs/ad.png" alt="">
										<span>loading</span>
									</div>
								</div>
                                    <dl>
                                        <dt><i></i></dt>
                                        <dd name="stage_summary" contenteditable="">
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <!-----------网上传播情况分析部--------------------------->
                            <div class="main-nesw sideToolbar-title" data-title="网上传播情况分析" name="5" id="5"
                                 auth_for_show_hide="4">
                                <h2>
                                    <span>网上传播情况分析</span>
                                </h2>
                                <h5>
                                    <span></span>主流媒体传播趋势
                                </h5>

                                <div class="jb_con">
                                    <div class=" col-md-8">
                                        <h1>
                                            <p>主流媒体传播趋势</p>

                                            <div style="float: right;margin-top: -8px;margin-right: 4px;">
                                                <select id="news_statistics_time_select"
                                                        style="border:1px solid #CECECE ;border-radius:4px; background:none;width:80px;height:24px; font-size:12px;margin-top:1px;">
                                                    <option value="1">1小时</option>
                                                    <option value="2">2小时</option>
                                                    <option value="6">6小时</option>
                                                    <option value="12">12小时</option>
                                                    <option value="24" selected="">24小时</option>
                                                </select>
                                            </div>
                                        </h1>
                                        <div class="jb_text">
                                            <div id="spread_news_img" style="height: 300px; cursor: default;">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <h1>
                                            <p>主流媒体排名</p>
                                            <div style="float: right;margin-top: -8px;margin-right: 4px;">
                                                <select id="s" style="border:1px solid #CECECE ;border-radius:4px; background:none;width:90px;height:23px; font-size:12px;">
                                                    <option value="1" selected="">信息总量</option>
                                                    <option value="24">负面信息量</option>
                                                </select>
                                            </div>
                                        </h1>
                                        <div style="overflow: hidden; width:100%; height:320px; border:1px solid #ccc; box-sizing:border-box;"
                                             id="table1" style="position:relative;">
                                             <div class="loading">
												<div class="loadingtext">
													<img src="/IOPM/subject/report/imgs/ad.png" alt="">
													<span>loading</span>
												</div>
											</div>
                                            <div class="table">
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="main-nesw-bd" id="spread_news_summary" style="position:relative;">
                                <div class="loading clearfix">
									<div class="loadingtext">
										<img src="/IOPM/subject/report/imgs/ad.png" alt="">
										<span>loading</span>
									</div>
								</div>
                                    <dl>
                                        <dt><i></i></dt>
                                        <dd name="spread_news_summary" contenteditable="">
                                        </dd>
                                    </dl>
                                </div>
                                
                               
                                <h5>
                                    <span></span>微博平台传播趋势
                                </h5>

                                <div class="jb_con02">
                                    <h1>
                                        <p>微博传播统计</p>

                                        <div style="float: right;margin-top: -10px;margin-right: 4px;">
                                            <select id="mblog_statistics_time_select"
                                                    style="border:1px solid #CECECE ;border-radius:4px; background:none;width:80px;height:24px; font-size:12px;margin-top:1px;">
                                                <option value="1">1小时</option>
                                                <option value="2">2小时</option>
                                                <option value="6">6小时</option>
                                                <option value="12">12小时</option>
                                                <option value="24" selected="">24小时</option>
                                            </select>
                                        </div>
                                    </h1>
                                    <div class="jb_text">
                                        <div id="spread_mblog_img"
                                             style="width: 100%; height: 300px;  margin-left:20px;cursor: default; background-color: rgba(0, 0, 0, 0);">
                                        </div>
                                    </div>
                                </div>
                                <div class="jb_con04 mblog" style="margin-top:20px;">
                                    <h1>
                                        <p class="p">发现最早的微博</p>
                                        <p>点赞最多的微博</p>
                                        <p>转发最多的微博</p>
                                        <p>评论最多的微博</p>
                                    </h1>
                                    <div class="jb_text">
                                        <div id="sidebar-W" style="width: 100%; height: auto;background-color: rgba(0, 0, 0, 0);position:relative;">
                                             <div class="loading clearfix">
												<div class="loadingtext">
													<img src="/IOPM/subject/report/imgs/ad.png" alt="">
													<span>loading</span>
												</div>
											</div>
                                           
                                        </div>
                                    </div>
                                </div>
                                <div class="main-nesw-bd" id="spread_mblog_summary" style="position:relative;">
                                			<div class="loading clearfix">
												<div class="loadingtext">
													<img src="/IOPM/subject/report/imgs/ad.png" alt="">
													<span>loading</span>
												</div>
											</div>
                                    <dl>
                                        <dt><i></i></dt>
                                        <dd name="spread_mblog_summary" contenteditable="">
                                        </dd>
                                    </dl>
                                </div>
                                <h5>
                                    <span></span>微信平台传播趋势
                                </h5>

                                <div class="jb_con02">
                                    <h1>
                                        <p>微信传播统计</p>

                                        <div style="float: right;margin-top: -10px;margin-right: 4px;">
                                            <select id="wechat_statistics_time_select"
                                                    style="border:1px solid #CECECE ;border-radius:4px; background:none;width:80px;height:24px; font-size:12px;margin-top:1px;">
                                                <option value="1">1小时</option>
                                                <option value="2">2小时</option>
                                                <option value="6">6小时</option>
                                                <option value="12">12小时</option>
                                                <option value="24" selected="">24小时</option>
                                            </select>
                                        </div>
                                    </h1>
                                    <div class="jb_text">
                                        <div id="spread_wechat_img" style="width: 100%; height: 300px; margin-left:20px;cursor: default; background-color: rgba(0, 0, 0, 0);">
                                        </div>
                                    </div>
                                </div>
                                <div class="jb_con04 wechat" style="margin-top:20px;">
                                    <h1>
                                        <p class="p">发现最早的微信</p>
                                        <p>点赞最多的微信</p>
                                        <p>阅读最多的微信</p>
                                    </h1>
                                    <div class="jb_text">
                                        <div id="sidebar-C" style="width: 100%; height: auto;background-color: rgba(0, 0, 0, 0); position:relative;">
                                            <div class="loading">
												<div class="loadingtext">
													<img src="/IOPM/subject/report/imgs/ad.png" alt="">
													<span>loading</span>
												</div>
											</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="main-nesw-bd" id="spread_wechat_summary" style="position:relative;">
                                	<div class="loading">
										<div class="loadingtext">
											<img src="/IOPM/subject/report/imgs/ad.png" alt="">
											<span>loading</span>
										</div>
									</div>
                                    <dl>
                                        <dt><i></i></dt>
                                        <dd name="spread_mblog_summary" contenteditable="">
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <!-----------事件溯源分析部份--------------------------->
                            <div class="main-nesw sideToolbar-title" data-title="事件溯源分析" name="6" id="6"
                                 auth_for_show_hide="5">
                                <h2>
                                    <span>事件溯源分析</span>
                                </h2>

                                <div class="main-nesw-tab">
                                    <table width="100%" id="trace_table" style="position:relative;">
                                    <div class="loading">
											<div class="loadingtext">
												<img src="/IOPM/subject/report/imgs/ad.png" alt="">
												<span>loading</span>
											</div>
										</div>
                                        <thead>
                                        <tr>
                                            <th style="width:8%;">类型</th>
                                            <th style="width:20%;">站点</th>
                                            <th style="width:35%;">标题</th>
                                            <th style="width:20%;">发布时间</th>
                                            <th style="width:17%;">URL</th>
                                        </tr>
                                        </thead>
                                        <tbody >
                                        
                                       
                                        </tbody>
                                    </table>
                                </div>
                                <div class="main-nesw-bd" id="trace_summary" style="position:relative;">
                                		<div class="loading">
											<div class="loadingtext">
												<img src="/IOPM/subject/report/imgs/ad.png" alt="">
												<span>loading</span>
											</div>
										</div>
                                    <dl>
                                        <dt><i></i></dt>
                                        <dd name="trace_summary" id="t" contenteditable="">
                                        
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                           
                            <!--------------------网民意见分析部分----------------------->
                            <div class="main-nesw sideToolbar-title" data-title="网民意见分析" name="7" id="7"
                                 auth_for_show_hide="6">
                                <h2>
                                    <span>网民意见分析</span>
                                </h2>
                                <h5>
                                    <span></span>网民情感波动及倾向
                                </h5>

                                <div class="jb_con">
                                    <div class=" col-md-8">
                                        <h1>
                                            <p>网民情感波动</p>

                                            <div style="float: right;margin-top: -10px;margin-right: 4px;">
                                                <select id="opinion_emotion_img_trend_select"
                                                        style="border:1px solid #CECECE ;border-radius:4px; background:none;width:80px;height:24px; font-size:12px;margin-top:1px;">
                                                    <option value="1">1小时</option>
                                                    <option value="2">2小时</option>
                                                    <option value="6">6小时</option>
                                                    <option value="12">12小时</option>
                                                    <option value="24" selected="">24小时</option>
                                                </select>
                                            </div>
                                        </h1>
                                        <div id="opinion_emotion_img_trend_line"
                                             style="width: 100%; height: 300px; overflow: hidden; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-style: none solid solid; border-right-color: rgb(204, 204, 204); border-bottom-color: rgb(204, 204, 204); border-left-color: rgb(204, 204, 204); box-sizing: border-box; cursor: default;">
                                        </div>
                                    </div>
                                    <div class=" col-md-4">
                                        <h1>
                                            <p>网民情感分布</p>
                                        </h1>
                                        <div id="opinion_emotion_img_distribute"
                                             style="height: 300px; overflow: hidden; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-style: none solid solid; border-right-color: rgb(204, 204, 204); border-bottom-color: rgb(204, 204, 204); border-left-color: rgb(204, 204, 204); box-sizing: border-box; cursor: default;"></div>
                                    </div>
                                </div>
                                <div class="main-nesw-bd" id="opinion_emotion_summary" style="position:relative;">
                                	<div class="loading">
											<div class="loadingtext">
												<img src="/IOPM/subject/report/imgs/ad.png" alt="">
												<span>loading</span>
											</div>
										</div>
                                    <dl>
                                        <dt><i></i></dt>
                                        <dd name="opinion_emotion_summary" id="yijian" contenteditable="">
                                        </dd>
                                    </dl>
                                </div>
                                <h5>
                                    <span></span>网民意见分布
                                </h5>

                                <div id="opinion_summary">
                                    <div class="miaosu" name="opinion_summary"><h3 name="n">正面观点网民意见描述</h3>

                                        <div class="main-nesw-bd" id="pos" style="position:relative;">
                                        	<div class="loading">
												<div class="loadingtext">
													<img src="/IOPM/subject/report/imgs/ad.png" alt="">
													<span>loading</span>
												</div>
											</div>
                                            <dl>
                                                <dt><i></i></dt>
                                                <dd name="v" id="positive" contenteditable="">
                                                	
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                    <div class="miaosu" name="opinion_summary"><h3 name="n">负面观点网民意见描述</h3>

                                        <div class="main-nesw-bd" id="neu" style="position:relative;">
                                        	<div class="loading">
												<div class="loadingtext">
													<img src="/IOPM/subject/report/imgs/ad.png" alt="">
													<span>loading</span>
												</div>
											</div>
                                            <dl>
                                                <dt><i></i></dt>
                                                <dd name="v" id="negative" contenteditable="">
                                                	
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                    <div class="miaosu" name="opinion_summary"><h3 name="n">中立观点网民意见描述</h3>
                                        <div class="main-nesw-bd" id="neg" style="position:relative;">
                                        	<div class="loading">
												<div class="loadingtext">
													<img src="/IOPM/subject/report/imgs/ad.png" alt="">
													<span>loading</span>
												</div>
											</div>
                                            <dl>
                                                <dt><i></i></dt>
                                                <dd name="v" id="neutral" contenteditable="">
                                                	
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!--------------------综合研判部分----------------------->
                            <div class="main-nesw sideToolbar-title" data-title="综合研判" name="8" id="8"
                                 auth_for_show_hide="7">
                                <h2>
                                    <span>综合研判</span>
                                </h2>

                                <div class="main-nesw-bd" id="comprehensive_summary">
                                    <dl>
                                        <dt><i></i></dt>
                                        <dd name="comprehensive_summary" id="zonghe"  contenteditable="" style="position:relative;">
                                        	<div class="loading">
														<div class="loadingtext">
															<img src="/IOPM/subject/report/imgs/ad.png" alt="">
															<span>loading</span>
														</div>
													</div>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><i></i></dt>
                                        <dd name="comprehensive_summary" contenteditable="">
                                            因此，该事件应引起相关单位的高度注意，并立即启动应急预案，积极处置事件相关事宜的同时，做好舆情监测及信息发布工作，积极回应舆论关切，舒缓、平息舆论质疑/继续密切关注舆论发展态势，做好舆论应对准备，并视舆情发展态势决定是否作出回应/继续关注事件舆情态势。
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <!--<div class="jb_con03">-->
                            <!--<a href="javascript:;"><img src="imgs/yl_icon.png" name="report_export_btn" export_type="0"></a>-->
                            <!--<a href="javascript:;"><img src="imgs/word_icon.png" name="report_export_btn" export_type="3"></a>-->
                            <!--<a href="javascript:;"><img src="imgs/pdf_icon.png" name="report_export_btn" export_type="2"></a>-->
                            <!--</div>-->
                            <div class="weixin" style="width:100%;padding:20px 0;text-align: center;">
                                <img src="imgs/word_icon.png" alt="" id="word"/>
                                <img src="imgs/wechat2_icon.png" alt="" id="weix"/>
                            </div>
                            <script type="text/javascript" src="js/iBookMark.js"></script>

                        </div>
                        <div id="sideToolbar">
                            <div id="sideCatalog" class="sideCatalogBg animated" style="display: none;">
                                <div id="sideCatalog-sidebar">
                                    <div class="sideCatalog-sidebar-top"></div>
                                    <div class="sideCatalog-sidebar-bottom"></div> 
                                    
                                </div>
                                <div id="sideCatalog-updown" style="display:none;">
                                    <div id="sideCatalog-up" class="sideCatalog-up-disable" title="向上翻页"></div>
                                    <div id="sideCatalog-down" class="sideCatalog-down-disable" title="向下翻页"></div>
                                </div>
                                <div id="sideCatalog-catalog">
                                    <dl style="zoom:1;margin:0;">
                                        <dd class="sideCatalog-item1 sideCatalog-item1-highlight"
                                            id="sideToolbar-item-0-1"><span class="sideCatalog-index1">1</span>
                                            <a href="#1" class="nslog nslog:1026" title="舆情概述" onclick="return false;">舆情概述</a><span
                                                    class="sideCatalog-dot"></span>

                                            <div class="on_off_head">
                                                <div class="on_off"><span name="on_off_span" class="on_click" auth_code="0">ON</span>

                                                    <p></p>
                                                </div>
                                            </div>
                                        </dd>
                                        <dd class="sideCatalog-item1" id="sideToolbar-item-0-2"><span class="sideCatalog-index1">2</span>
                                            <a href="#2" class="nslog nslog:1026" title="舆情统计" onclick="return false;">舆情统计</a><span
                                                    class="sideCatalog-dot"></span>

                                            <div class="on_off_head">
                                                <div class="on_off"><span name="on_off_span" class="on_click" auth_code="1">ON</span>

                                                    <p></p>
                                                </div>
                                            </div>
                                        </dd>
                                       
                                        <dd class="sideCatalog-item1" id="sideToolbar-item-0-3"><span class="sideCatalog-index1">3</span>
                                            <a href="#3" class="nslog nslog:1026" title="事件综合影响力分析"
                                               onclick="return false;">事件综合影响力分析</a><span
                                                    class="sideCatalog-dot"></span>

                                            <div class="on_off_head">
                                                <div class="on_off"><span name="on_off_span" class="on_click" auth_code="2">ON</span>

                                                    <p></p>
                                                </div>
                                            </div>
                                        </dd>
                                        <dd class="sideCatalog-item1" id="sideToolbar-item-0-4"><span class="sideCatalog-index1">4</span>
                                            <a href="#4" class="nslog nslog:1026" title="事件阶段演化分析"
                                               onclick="return false;">事件阶段演化分析</a><span class="sideCatalog-dot"></span>

                                            <div class="on_off_head">
                                                <div class="on_off"><span name="on_off_span" class="on_click" auth_code="3">ON</span>

                                                    <p></p>
                                                </div>
                                            </div>
                                        </dd>
                                        <dd class="sideCatalog-item1" id="sideToolbar-item-0-5"><span class="sideCatalog-index1">5</span>
                                            <a href="#5" class="nslog nslog:1026" title="网上传播情况分析"
                                               onclick="return false;">网上传播情况分析</a><span class="sideCatalog-dot"></span>

                                            <div class="on_off_head">
                                                <div class="on_off"><span name="on_off_span" class="on_click" auth_code="4">ON</span>

                                                    <p></p>
                                                </div>
                                            </div>
                                        </dd>
                                        <dd class="sideCatalog-item1" id="sideToolbar-item-0-6"><span class="sideCatalog-index1">6</span>
                                            <a href="#6" class="nslog nslog:1026" title="事件溯源分析"
                                               onclick="return false;">事件溯源分析</a><span class="sideCatalog-dot"></span>

                                            <div class="on_off_head">
                                                <div class="on_off"><span name="on_off_span" class="on_click" auth_code="5">ON</span>

                                                    <p></p>
                                                </div>
                                            </div>
                                        </dd>
                                        
                                        <dd class="sideCatalog-item1" id="sideToolbar-item-0-7"><span class="sideCatalog-index1">7</span>
                                            <a href="#7" class="nslog nslog:1026" title="网民意见分析" onclick="return false;">网民意见分析</a><span class="sideCatalog-dot"></span>

                                            <div class="on_off_head">
                                                <div class="on_off"><span name="on_off_span" class="on_click" auth_code="6">ON</span>

                                                    <p></p>
                                                </div>
                                            </div>
                                        </dd>
                                        <dd class="sideCatalog-item1" id="sideToolbar-item-0-8"><span class="sideCatalog-index1">8</span>
                                            <a href="#8" class="nslog nslog:1026" title="综合研判" onclick="return false;">综合研判</a><span class="sideCatalog-dot"></span>
                                            <div class="on_off_head">
                                                <div class="on_off"><span name="on_off_span" class="on_click" auth_code="7">ON</span>
                                                    <p></p>
                                                </div>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <a id="sideCatalogBtn" class="sideCatalogBtnDisable" href="javascript:;" title="目录"></a>
                            <a id="sideToolbar-up" class="animated" href="javascript:;" title="返回顶部"
                               style="display: none;"></a>
                        </div>
                    </div>


                </div>


            </div>
            <!-- end #content -->

            <!-- begin #footer -->
            <div id="footer" class="footer text-center">
                &copy; 2014 北京中科模识科技有限公司
            </div>
            <!-- end #footer -->

            <!-- begin scroll to top btn -->
            <a href="javascript:;" class="btn btn-icon btn-circle btn-success btn-scroll-to-top fade"
               data-click="scroll-top"><i class="fa fa-angle-up"></i></a>
            <!-- end scroll to top btn -->
            <!--&lt;!&ndash; begin theme-panel &ndash;&gt;-->
            <!--<div class="theme-panel">-->
            <!--<a href="javascript:;" data-click="theme-panel-expand" class="theme-collapse-btn"><i class="fa fa-cog"></i></a>-->
            <!--<div class="theme-panel-content">-->
            <!--<h5 class="m-t-0">Color Theme</h5>-->
            <!--<ul class="theme-list clearfix">-->
            <!--<li class="active"><a href="javascript:;" class="bg-green" data-theme="default" data-click="theme-selector" data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="Default">&nbsp;</a></li>-->
            <!--<li><a href="javascript:;" class="bg-red" data-theme="red" data-click="theme-selector" data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="Red">&nbsp;</a></li>-->
            <!--<li><a href="javascript:;" class="bg-blue" data-theme="blue" data-click="theme-selector" data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="Blue">&nbsp;</a></li>-->
            <!--<li><a href="javascript:;" class="bg-purple" data-theme="purple" data-click="theme-selector" data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="Purple">&nbsp;</a></li>-->
            <!--<li><a href="javascript:;" class="bg-orange" data-theme="orange" data-click="theme-selector" data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="Orange">&nbsp;</a></li>-->
            <!--<li><a href="javascript:;" class="bg-black" data-theme="black" data-click="theme-selector" data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="Black">&nbsp;</a></li>-->
            <!--</ul>-->
            <!--<div class="divider"></div>-->
            <!--<div class="row m-t-10">-->
            <!--<div class="col-md-5 control-label double-line">Header Styling</div>-->
            <!--<div class="col-md-7">-->
            <!--<select name="header-styling" class="form-control input-sm">-->
            <!--<option value="1">default</option>-->
            <!--<option value="2">inverse</option>-->
            <!--</select>-->
            <!--</div>-->
        <!--</div>-->
        <!--&lt;!&ndash; end theme-panel &ndash;&gt;-->
	</div>
    </div>
	<!-- end page container -->
</div>
	<!--新建任务弹出层-->
    <div class="checkMask main task">
			<div>
				<form action="" method="post" class=" animated bounceInDown">
					<div class="MaskTop">新建任务</div>
					<em class="fa fa-times"></em>
					<p><label for="taskName">任务名称:</label>  <input class="form-control taskName inlblock width75" type="text" name="taskName" id="taskName" placeholder="请输入任务名称" value=""/></p><br />
					<p><label for="taskDate">发布时间:</label>  <input class="form-control taskDate inlblock width75" type="text" name="taskDate" id="taskDate" placeholder="请输入发布时间"/></p><br />
					<div class="col-sm-12 keyword">
						<div class="col-sm-2">
							<label>关键词:</label>
						</div>
						<div class="col-sm-10 text">
							<div class="marbom5px">
								<p><input class="form-control" type="text" name="taskAnd" id="taskAnd" placeholder="请输入必须包含关键词"/></p>
								<p><input class="form-control" type="text" name="taskOr" id="taskOr" placeholder="请输入包含一个关键词"/></p>
								<p><input class="form-control" type="text" name="taskNot" id="taskNot" placeholder="请输入不能包含关键词"/></p>
								<i class="fa fa-plus"></i>
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

    <!--添加专题弹出层-->
    <div class="checkMask main increase">
        <div>
            <form action="" method="post" class=" animated bounceInDown" id="special">
                <div class="MaskTop">添加专题</div>
                <em class="fa fa-times"></em>
                <div class="maskBox">
                    <ul class="Time">
                        <li>名称：<input type="text" style="margin-left:26px;" id="userC" placeholder="请输入名称"/></li>
                        <li class="lefttd">起始时间：
                            <input type="text" id="lookStartTime" class="input sel_event_stime hasDatepicker" placeholder="请输入开始时间"></li>
                        <li class="lefttd">结束时间：
                            <input type="text" id="lookEndTime" class="input sel_event_etime hasDatepicker" placeholder="请输入结束时间"></li>
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
                    <button class="btn btn-primary" type="button" value="确定">确定</button>
                    <span></span>
                    <button class="btn btn-danger" value="取消">取消</button>
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
	<script src="../public/plugins/jquery/jquery-1.9.1.min.js"></script>
	<script src="../public/plugins/jquery/jquery-migrate-1.1.0.min.js"></script>
	<script src="../public/plugins/jquery-ui/ui/minified/jquery-ui.min.js"></script>
	<script src="../public/plugins/bootstrap/js/bootstrap.min.js"></script>
	<!--[if lt IE 9]>
		<script src="../public/crossbrowserjs/html5shiv.js"></script>
		<script src="../public/crossbrowserjs/respond.min.js"></script>
		<script src="../public/crossbrowserjs/excanvas.min.js"></script>
	<!--[endif]-->
	<script src="../public/plugins/slimscroll/jquery.slimscroll.min.js"></script>
	<script src="../public/plugins/jquery-cookie/jquery.cookie.js"></script>
	<script src="../public/js/daterangepicker.js" type="text/javascript"></script>
	<script src="../public/js/moment.min.js" type="text/javascript"></script>
	<script src="../public/js/apps.min.js"></script>
    <script src="../../css/bootstrap-datepicker/js/bootstrap-datepicker.js" type="text/javascript" charset="utf-8"></script>

	<!-- ================== END BASE JS ================== -->
	<!-- ================== BEGIN private JS ================== -->
	<script src="js/echarts.common.min.js" type="text/javascript" charset="utf-8"></script>
	<script src="../public/echarts/js/echarts.min.js" type="text/javascript" charset="utf-8"></script>
	<script src="js/worldcloud.js" type="text/javascript" charset="utf-8"></script>
	<script src="../public/calendar/ion.calendar.min.js" type="text/javascript" charset="utf-8"></script>
	<script src="../public/calendar/moment.zh-cn.js" type="text/javascript" charset="utf-8"></script>
	<script src="../public/js/app-pages.js" type="text/javascript" charset="utf-8"></script>
	<script src="js/events-reportDetails.js" type="text/javascript" charset="utf-8"></script>
	<script src="../public/scrollbar/jquery.mCustomScrollbar.concat.min.js" type="text/javascript" charset="utf-8"></script>
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
