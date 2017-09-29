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
                            <span class="font16px">搜索在控专题：</span>
                            <input class="form-control srhText inlblock" type="text" placeholder="例如“习近平”"/>
                            <input type="submit" class="btn btn-primary inlblock" value="检索"/>
                            <input type="button" class="btn btn-primary add" value="添加专题"/>
                        </form>
                    </div>
                    <div class="col-sm-12 font16px events">
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
                            <div class="main-bgao">
                                <h3>
                                    <span id="event_report_title" title="ddd">ddd</span>
                                </h3>

                                <p>
    	<span>
			<b>关注时间：</b>
				<em id="report_start_time">2016-06-01 00:00:00</em>
                <i>至</i>
                <em id="report_end_time">2017-01-17 16:43:29</em>
		</span>
                                </p>
                            </div>
                            <!--------------------舆情概述部分----------------------->
                            <div class="main-nesw sideToolbar-title" data-title="舆情概述" name="1" id="1">
                                <h2>
                                    <span>舆情概述</span>
                                </h2>

                                <div class="main-nesw-bd" id="report_summay">
                                    <dl>
                                        <dt><i></i></dt>
                                        <dd name="summary" class="summary1">
                                          
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><i></i></dt>
                                        <dd name="summary" class="summary2">
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <!--------------------舆情统计部分----------------------->
                            <div class="main-nesw sideToolbar-title" data-title="舆情统计" name="2" id="2">
                                <h2>
                                    <span>舆情统计</span>
                                </h2>

                                <div class="main-nesw clearfix" id="pie">
                                    <div class="one-world" style="width: 55%;float:left;margin-right:2%;">
                                        <div class="title1">
                                            <p>线索信息量</p>

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
                                            <p>线索信息量</p>
                                            <div style="float: right;margin-top: 4px;margin-right: 4px;">
                                                <select style="border:1px solid #CECECE ;border-radius:4px; background:none;width:90px;height:23px; font-size:12px;">
                                                    <option value="1" selected="">信息总量</option>
                                                    <option value="24">负面信息量</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div style="height:280px;border:1px solid #ccc;" id="sidebar-i">
                                            <div id="sidebar-T">
                                                <ul>
                                                    <li>排名</li>
                                                    <li>线索</li>
                                                    <li>信息总量</li>
                                                    <li>负面信息量</li>
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
                                                    <li>3</li>
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
                                    </div>

                                </div>

                                <div class="main-nesw-bd">
                                    <dl>
                                        <dt><i></i></dt>
                                        <dd name="summary" contenteditable="">
                                            截止<span>2017年01月17日16时</span>，<span>xxx</span>事件涉及到的人物<span>xxx</span>篇，机构<span>xxx</span>篇, 政策<span>xxx</span>篇。总体来说，该事件的发生与广电政策密切相关
                                        </dd>
                                    </dl>

                                </div>

                            </div>                            <!--------------------舆情统计部分----------------------->
                            <div class="main-nesw sideToolbar-title" data-title="广电线索分布" name="3" id="3">
                                <h2>
                                    <span>广电线索分布</span>
                                </h2>

                                <div class="main-nesw clearfix" id="distribute" style="padding:0 0;">
                                    <div class="one-world" style="width: 55%;float:left;margin-right:2%;">
                                        <div class="title1">
                                            <p>广电线索云图</p>

                                            <div style="float: right;margin-top: 4px;margin-right: 4px;">
                                                <!--<select style="border:1px solid #CECECE ;border-radius:4px; background:none;width:80px;height:23px; font-size:12px;">-->
                                                    <!--<option value="1">1小时</option>-->
                                                    <!--<option value="2">2小时</option>-->
                                                    <!--<option value="6">6小时</option>-->
                                                    <!--<option value="12">12小时</option>-->
                                                    <!--<option value="24" selected="">24小时</option>-->
                                                <!--</select>-->
                                            </div>
                                        </div>
                                        <div style="height:280px;border:1px solid #ccc;" id="worldcloud">
                                        </div>
                                    </div>
                                    <div class="two-world" style="width: 43%;float:left;">
                                        <div class="title1">
                                            <p>广电线索排名</p>

                                            <div style="float: right;margin-top: 4px;margin-right: 4px;">
                                                <select style="border:1px solid #CECECE ;border-radius:4px; background:none;width:90px;height:23px; font-size:12px;">
                                                    <option value="1" selected="">信息总量</option>
                                                    <option value="24">负面信息量</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div style="height:280px;border:1px solid #ccc;" id="sidebar">
                                            <div id="sidebar-L">
                                                <ul>
                                                    <li>排名</li>
                                                    <li>线索</li>
                                                    <li>信息总量</li>
                                                    <li>情感倾向(正/负/中)</li>
                                                </ul>
                                                <ul>
                                                    <li>1</li>
                                                    <li><a href="">线索</a></li>
                                                    <li>20000</li>
                                                    <li><span class="green">1000</span> / <span class="red">222</span> /
                                                        <span class="blue">8999</span></li>
                                                </ul>
                                                <ul>
                                                    <li>2</li>
                                                    <li><a href="">线索</a></li>
                                                    <li>20000</li>
                                                    <li>10000/222/222</li>
                                                </ul>
                                                <ul>
                                                    <li>3</li>
                                                    <li><a href="">线索</a></li>
                                                    <li>20000</li>
                                                    <li>10000/222/222</li>
                                                </ul>
                                                <ul>
                                                    <li>3</li>
                                                    <li><a href="">线索</a></li>
                                                    <li>20000</li>
                                                    <li>10000/222/222</li>
                                                </ul>
                                                <ul>
                                                    <li>3</li>
                                                    <li><a href="">线索</a></li>
                                                    <li>20000</li>
                                                    <li>10000/222/222</li>
                                                </ul>
                                                <ul>
                                                    <li>4</li>
                                                    <li><a href="">线索</a></li>
                                                    <li>20000</li>
                                                    <li>10000/222/222</li>
                                                </ul>
                                                <ul>
                                                    <li>5</li>
                                                    <li><a href="">线索</a></li>
                                                    <li>20000</li>
                                                    <li>10000/222/222</li>
                                                </ul>
                                                <ul>
                                                    <li>6</li>
                                                    <li><a href="">线索</a></li>
                                                    <li>20000</li>
                                                    <li>10000/222/222</li>
                                                </ul>
                                                <ul>
                                                    <li>7</li>
                                                    <li><a href="">线索</a></li>
                                                    <li>20000</li>
                                                    <li>10000/222/222</li>
                                                </ul>
                                                <ul>
                                                    <li>8</li>
                                                    <li><a href="">线索</a></li>
                                                    <li>20000</li>
                                                    <li>10000/222/222</li>
                                                </ul>
                                                <ul>
                                                    <li>9</li>
                                                    <li><a href="">线索</a></li>
                                                    <li>20000</li>
                                                    <li>10000/222/222</li>
                                                </ul>
                                                <ul>
                                                    <li>10</li>
                                                    <li><a href="">线索</a></li>
                                                    <li>20000</li>
                                                    <li>10000/222/222</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="main-nesw-bd">
                                    <dl>
                                        <dt><i></i></dt>
                                        <dd name="summary" contenteditable="">
                                            该分析报告的监测时间为2016年06月01日00时00分至2017年01月17日16时43分，监测关键词主要包含“海关 走私
                                            成品油”，监测数据全面覆盖了境内外互联网新闻、博客、论坛、微博和视频等多类型站点。
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><i></i></dt>
                                        <dd name="summary" contenteditable="">
                                            在上述监测时间范围内，网上共计发布相关新闻1906篇、博客800篇、论坛主题帖960篇、微博1237篇、视频335个。首条信息于2016年06月01日00时07分发布在daganyu.net站点，标题为《连云港边防查获价值千万巴西牛肉走私案》。舆论最高峰出现在2016年06月01日11时00分。总体而言，新闻媒体以及微博等社交媒体关于“成品油走私”事件的信息量极小，舆论关注度较低，传播影响力较小。
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <!-----------------------事件综合影响力分析部分------------>
                            <div class="main-nesw sideToolbar-title" data-title="事件综合影响力分析" name="4" id="4"
                                 auth_for_show_hide="2">
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
                                <div class="main-nesw-bd" id="effect_summay">
                                    <dl>
                                        <dt><i></i></dt>
                                        <dd name="effect_summary" contenteditable="">“成品油走私”事件综合影响力评分为10.56①。影响较小。</dd>
                                    </dl>
                                </div>
                                <div class="main-nesw-tis">
                                    <p>注：①
                                        事件影响力评分根据新闻报道指数、微博扩散指数、论坛参与指数、以及境外炒作指数等多项指标综合计算得出。评分范围为0-100，其中0-20、21-40、41-60、61-80、81-100区间对应影响力分别为较小、一般、较大、很大、极大。数值越大，表明在监测周期内分析对象的传播影响力越大。</p>
                                </div>
                            </div>
                            <!--------------------事件阶段演化分析部分----------------------->
                            <div class="main-nesw sideToolbar-title" data-title="事件阶段演化分析" name="5" id="5"
                                 auth_for_show_hide="3">
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
                                <div class="main-nesw-bd" id="stage_summary">
                                    <dl>
                                        <dt><i></i></dt>
                                        <dd name="stage_summary" contenteditable="">
                                            如图所示，“成品油走私”事件的发展经历了4次高峰。舆情的爆发点首次出现在2016年06月01日00时。最大峰值出现在2016年06月01日11时。至2016年06月06日00时，由“”再次引起媒体和网民的热议，再次形成舆论关注高峰。
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <!-----------网上传播情况分析部--------------------------->
                            <div class="main-nesw sideToolbar-title" data-title="网上传播情况分析" name="6" id="6"
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
                                                <select style="border:1px solid #CECECE ;border-radius:4px; background:none;width:90px;height:23px; font-size:12px;">
                                                    <option value="1" selected="">信息总量</option>
                                                    <option value="24">负面信息量</option>
                                                </select>
                                            </div>
                                        </h1>
                                        <div style="overflow: hidden; width:100%; height:320px; border:1px solid #ccc; box-sizing:border-box;"
                                             id="table1">
                                            <div class="table">
                                                <div class="th" id="spread_table_first_line_news">
                                                    <div class="span span1" style="width:15%;">排名</div>
                                                    <div class="span span2" style="width:40%;">网站</div>
                                                    <div class="span" style="width:22%;">总信息量</div>
                                                    <div class="span" style="width:22%;">负面信息量</div>
                                                </div>
                                                <div class="td"><span class="span1" style="width:15%;">1</span><span
                                                        class="span2" style="width:40%;">新浪</span><span
                                                        class="region_td" style="width:22%;">境内</span><span
                                                        class="region_td" style="width:22%;">77</span></div>
                                                <div class="td td2"><span class="span1" style="width:15%;">2</span><span
                                                        class="span2" style="width:40%;">中国网</span><span
                                                        class="region_td" style="width:22%;">境内</span><span
                                                        class="region_td" style="width:22%;">72</span></div>
                                                <div class="td"><span class="span1" style="width:15%;">3</span><span
                                                        class="span2" style="width:40%;">中国江苏网</span><span
                                                        class="region_td" style="width:22%;">境内</span><span
                                                        class="region_td" style="width:22%;">65</span></div>
                                                <div class="td td2"><span class="span1" style="width:15%;">4</span><span
                                                        class="span2" style="width:40%;">网易</span><span
                                                        class="region_td" style="width:22%;">境内</span><span
                                                        class="region_td" style="width:22%;">57</span></div>
                                                <div class="td"><span class="span1" style="width:15%;">5</span><span
                                                        class="span2" style="width:40%;">人民网</span><span
                                                        class="region_td" style="width:22%;">境内</span><span
                                                        class="region_td" style="width:22%;">47</span></div>
                                                <div class="td td2"><span class="span1" style="width:15%;">6</span><span
                                                        class="span2" style="width:40%;">中国新闻网</span><span
                                                        class="region_td" style="width:22%;">境内</span><span
                                                        class="region_td" style="width:22%;">46</span></div>
                                                <div class="td"><span class="span1" style="width:15%;">7</span><span
                                                        class="span2" style="width:40%;">腾讯</span><span
                                                        class="region_td" style="width:22%;">境内</span><span
                                                        class="region_td" style="width:22%;">43</span></div>
                                                <div class="td td2"><span class="span1" style="width:15%;">8</span><span
                                                        class="span2" style="width:40%;">新华网</span><span
                                                        class="region_td" style="width:22%;">境内</span><span
                                                        class="region_td" style="width:22%;">40</span></div>
                                                <div class="td"><span class="span1" style="width:15%;">9</span><span
                                                        class="span2" style="width:40%;">中工网</span><span
                                                        class="region_td" style="width:22%;">境内</span><span
                                                        class="region_td" style="width:22%;">35</span></div>
                                                <div class="td td2"><span class="span1"
                                                                          style="width:15%;">10</span><span
                                                        class="span2" style="width:40%;">21CN</span><span
                                                        class="region_td" style="width:22%;">境内</span><span
                                                        class="region_td" style="width:22%;">34</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="main-nesw-bd" id="spread_news_summary">
                                    <dl>
                                        <dt><i></i></dt>
                                        <dd name="spread_news_summary" contenteditable="">
                                            截至2017年01月17日16时，境内新浪、中国网、中国江苏网等主流新闻媒体和门户网站约10家站点共发布相关新闻信息1817篇，境外中评网、文汇报等媒体网站也均发布了相关报道。
                                        </dd>
                                    </dl>
                                </div>
                                <h5>
                                    <span></span>网络论坛传播趋势
                                </h5>

                                <div class="jb_con">
                                    <div class=" col-md-8">
                                        <h1>
                                            <p>境内论坛传播趋势</p>

                                            <div style="float: right;margin-top: -10px;margin-right: 4px;">
                                                <select id="forum_statistics_time_select"
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
                                            <div id="spread_forum_img"
                                                 style="width: 100%; height: 300px; cursor: pointer;">
                                            </div>
                                        </div>
                                    </div>
                                    <div class=" col-md-4">
                                        <h1>
                                            <p>论坛传播排名</p>
                                        </h1>
                                        <div style="overflow: hidden;height:320px; border:1px solid #ccc; border-top:none;"
                                             id="forum_site_rank_list">

                                            <div class="table">
                                                <div class="th" id="spread_table_first_line_forum">
                                                    <div class="span span1" style="width:15%;">排名</div>
                                                    <div class="span span2" style="width:40%;">网站</div>
                                                    <div class="span" style="width:22%;">属地</div>
                                                    <div class="span" style="width:22%;">信息量</div>
                                                </div>
                                                <div class="td"><span class="span1" style="width:15%;">1</span><span
                                                        class="span2" style="width:40%;">建湖论坛</span><span
                                                        class="region_td" style="width:22%;">境内</span><span
                                                        class="region_td" style="width:22%;">240</span></div>
                                                <div class="td td2"><span class="span1" style="width:15%;">2</span><span
                                                        class="span2" style="width:40%;">www.wanhoocar.com</span><span
                                                        class="region_td" style="width:22%;">境内</span><span
                                                        class="region_td" style="width:22%;">56</span></div>
                                                <div class="td"><span class="span1" style="width:15%;">3</span><span
                                                        class="span2" style="width:40%;">百度贴吧</span><span
                                                        class="region_td" style="width:22%;">境内</span><span
                                                        class="region_td" style="width:22%;">35</span></div>
                                                <div class="td td2"><span class="span1" style="width:15%;">4</span><span
                                                        class="span2" style="width:40%;">天涯社区</span><span
                                                        class="region_td" style="width:22%;">境内</span><span
                                                        class="region_td" style="width:22%;">33</span></div>
                                                <div class="td"><span class="span1" style="width:15%;">5</span><span
                                                        class="span2" style="width:40%;">凯迪社区</span><span
                                                        class="region_td" style="width:22%;">境内</span><span
                                                        class="region_td" style="width:22%;">30</span></div>
                                                <div class="td td2"><span class="span1" style="width:15%;">6</span><span
                                                        class="span2" style="width:40%;">新浪</span><span
                                                        class="region_td" style="width:22%;">境内</span><span
                                                        class="region_td" style="width:22%;">19</span></div>
                                                <div class="td"><span class="span1" style="width:15%;">7</span><span
                                                        class="span2" style="width:40%;">网易</span><span
                                                        class="region_td" style="width:22%;">境内</span><span
                                                        class="region_td" style="width:22%;">16</span></div>
                                                <div class="td td2"><span class="span1" style="width:15%;">8</span><span
                                                        class="span2" style="width:40%;">和平论坛</span><span
                                                        class="region_td" style="width:22%;">境内</span><span
                                                        class="region_td" style="width:22%;">15</span></div>
                                                <div class="td"><span class="span1" style="width:15%;">9</span><span
                                                        class="span2" style="width:40%;">搜狐</span><span
                                                        class="region_td" style="width:22%;">境内</span><span
                                                        class="region_td" style="width:22%;">14</span></div>
                                                <div class="td td2"><span class="span1"
                                                                          style="width:15%;">10</span><span
                                                        class="span2" style="width:40%;">天涯</span><span
                                                        class="region_td" style="width:22%;">境内</span><span
                                                        class="region_td" style="width:22%;">13</span></div>
                                                <div class="td"><span class="span1" style="width:15%;">9</span><span
                                                        class="span2" style="width:40%;">搜狐</span><span
                                                        class="region_td" style="width:22%;">境内</span><span
                                                        class="region_td" style="width:22%;">14</span></div>
                                                <div class="td td2"><span class="span1"
                                                                          style="width:15%;">10</span><span
                                                        class="span2" style="width:40%;">天涯</span><span
                                                        class="region_td" style="width:22%;">境内</span><span
                                                        class="region_td" style="width:22%;">13</span></div>
                                                <div class="td"><span class="span1" style="width:15%;">9</span><span
                                                        class="span2" style="width:40%;">搜狐</span><span
                                                        class="region_td" style="width:22%;">境内</span><span
                                                        class="region_td" style="width:22%;">14</span></div>
                                                <div class="td td2"><span class="span1"
                                                                          style="width:15%;">10</span><span
                                                        class="span2" style="width:40%;">天涯</span><span
                                                        class="region_td" style="width:22%;">境内</span><span
                                                        class="region_td" style="width:22%;">13</span></div>
                                                <div class="td"><span class="span1" style="width:15%;">9</span><span
                                                        class="span2" style="width:40%;">搜狐</span><span
                                                        class="region_td" style="width:22%;">境内</span><span
                                                        class="region_td" style="width:22%;">14</span></div>
                                                <div class="td td2"><span class="span1"
                                                                          style="width:15%;">10</span><span
                                                        class="span2" style="width:40%;">天涯</span><span
                                                        class="region_td" style="width:22%;">境内</span><span
                                                        class="region_td" style="width:22%;">13</span></div>
                                                <div class="td"><span class="span1" style="width:15%;">9</span><span
                                                        class="span2" style="width:40%;">搜狐</span><span
                                                        class="region_td" style="width:22%;">境内</span><span
                                                        class="region_td" style="width:22%;">14</span></div>
                                                <div class="td td2"><span class="span1"
                                                                          style="width:15%;">10</span><span
                                                        class="span2" style="width:40%;">天涯</span><span
                                                        class="region_td" style="width:22%;">境内</span><span
                                                        class="region_td" style="width:22%;">13</span></div>
                                                <div class="td"><span class="span1" style="width:15%;">9</span><span
                                                        class="span2" style="width:40%;">搜狐</span><span
                                                        class="region_td" style="width:22%;">境内</span><span
                                                        class="region_td" style="width:22%;">14</span></div>
                                                <div class="td td2"><span class="span1"
                                                                          style="width:15%;">10</span><span
                                                        class="span2" style="width:40%;">天涯</span><span
                                                        class="region_td" style="width:22%;">境内</span><span
                                                        class="region_td" style="width:22%;">13</span></div>
                                                <div class="td"><span class="span1" style="width:15%;">9</span><span
                                                        class="span2" style="width:40%;">搜狐</span><span
                                                        class="region_td" style="width:22%;">境内</span><span
                                                        class="region_td" style="width:22%;">14</span></div>
                                                <div class="td td2"><span class="span1"
                                                                          style="width:15%;">10</span><span
                                                        class="span2" style="width:40%;">天涯</span><span
                                                        class="region_td" style="width:22%;">境内</span><span
                                                        class="region_td" style="width:22%;">13</span></div>
                                                <div class="td"><span class="span1" style="width:15%;">9</span><span
                                                        class="span2" style="width:40%;">搜狐</span><span
                                                        class="region_td" style="width:22%;">境内</span><span
                                                        class="region_td" style="width:22%;">14</span></div>
                                                <div class="td td2"><span class="span1"
                                                                          style="width:15%;">10</span><span
                                                        class="span2" style="width:40%;">天涯</span><span
                                                        class="region_td" style="width:22%;">境内</span><span
                                                        class="region_td" style="width:22%;">13</span></div>
                                                <div class="td"><span class="span1" style="width:15%;">9</span><span
                                                        class="span2" style="width:40%;">搜狐</span><span
                                                        class="region_td" style="width:22%;">境内</span><span
                                                        class="region_td" style="width:22%;">14</span></div>
                                                <div class="td td2"><span class="span1"
                                                                          style="width:15%;">10</span><span
                                                        class="span2" style="width:40%;">天涯</span><span
                                                        class="region_td" style="width:22%;">境内</span><span
                                                        class="region_td" style="width:22%;">13</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="main-nesw-bd" id="spread_forum_summary">
                                    <dl>
                                        <dt><i></i></dt>
                                        <dd name="spread_forum_summary" contenteditable="">
                                            截至2017年01月17日16时，网民在境内建湖论坛，www.wanhoocar.com，百度贴吧，天涯社区，凯迪社区等论坛发布相关帖文960篇，跟帖回复4084条，网民参与度【较高/较低】
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
                                        <div id="sidebar-W" style="width: 100%; height: auto;background-color: rgba(0, 0, 0, 0);">
                                            
                                           
                                        </div>
                                    </div>
                                </div>
                                <div class="main-nesw-bd" id="spread_mblog_summary">
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
                                        <p>评论最多的微信</p>
                                    </h1>
                                    <div class="jb_text">
                                        <div id="sidebar-C" style="width: 100%; height: auto;background-color: rgba(0, 0, 0, 0);">
                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="main-nesw-bd" id="spread_wechat_summary">
                                    <dl>
                                        <dt><i></i></dt>
                                        <dd name="spread_mblog_summary" contenteditable="">
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <!-----------事件溯源分析部份--------------------------->
                            <div class="main-nesw sideToolbar-title" data-title="事件溯源分析" name="7" id="7"
                                 auth_for_show_hide="5">
                                <h2>
                                    <span>事件溯源分析</span>
                                </h2>

                                <div class="main-nesw-tab">
                                    <table width="100%" id="trace_table">
                                        <thead>
                                        <tr>
                                            <th style="width:8%;">类型</th>
                                            <th style="width:8%;">站点</th>
                                            <th style="width:35%;">标题</th>
                                            <th style="width:20%;">发布时间</th>
                                            <th style="width:16%;">URL</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td title="新闻">新闻</td>
                                            <td title="lc123.net">lc123.net</td>
                                            <td title="[山西]山西省关于印发山西省贯彻实施质量发展纲要2016年行动计划的通知"
                                                style="text-align: left; padding-left: 2%;"><p>
                                                [山西]山西省关于印发山西省贯彻实施质量发展纲要2016年行动计划的通知</p></td>
                                            <td title="2016-07-05 12:26:15">2016-07-05 12:26:15</td>
                                            <td title="http://www.lc123.net/laws/2016-07-05/289485.html"
                                                style="text-align: left;padding-left: 2%;"><a target="_blank"
                                                                                              href="http://www.lc123.net/laws/2016-07-05/289485.html">http://www.lc123.net/laws/2016-07-05/289485.html</a>
                                            </td>
                                        </tr>
                                        <tr style="background:#f4f9fc;">
                                            <td title="论坛">论坛</td>
                                            <td title="daganyu.net">daganyu.net</td>
                                            <td title="连云港边防查获价值千万巴西牛肉走私案" style="text-align: left; padding-left: 2%;">
                                                <p>连云港边防查获价值千万巴西牛肉走私案</p></td>
                                            <td title="2016-06-01 00:07:05">2016-06-01 00:07:05</td>
                                            <td title="http://www.daganyu.net/forum.php?extra=page%3D1%26filter%3Dauthor%26orderby%3Ddateline&amp;mod=viewthread&amp;tid=19901"
                                                style="text-align: left;padding-left: 2%;"><a target="_blank"
                                                                                              href="http://www.daganyu.net/forum.php?extra=page%3D1%26filter%3Dauthor%26orderby%3Ddateline&amp;mod=viewthread&amp;tid=19901">http://www.daganyu.net/forum.php?extra=page%3D1%26filter%3Dauthor%26orderby%3Ddateline&amp;mod=viewthread&amp;tid=19901</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td title="博客">博客</td>
                                            <td title="新浪">新浪</td>
                                            <td title="中国石油之都" style="text-align: left; padding-left: 2%;"><p>中国石油之都</p>
                                            </td>
                                            <td title="2016-06-01 00:13:09">2016-06-01 00:13:09</td>
                                            <td title="http://blog.sina.com.cn/s/blog_15e55273d0102xmm7.html"
                                                style="text-align: left;padding-left: 2%;"><a target="_blank"
                                                                                              href="http://blog.sina.com.cn/s/blog_15e55273d0102xmm7.html">http://blog.sina.com.cn/s/blog_15e55273d0102xmm7.html</a>
                                            </td>
                                        </tr>
                                        <tr style="background:#f4f9fc;">
                                            <td title="视频">视频</td>
                                            <td title="电影网">电影网</td>
                                            <td title="韩国演员宋仲基因拍摄《太阳的后裔》走红。近日，他频频穿梭韩国、大陆，在进入禁区接受通关检查时，被粉丝疯狂拍照，就连他的护照细节也被传至网上。虽然已经遮住重要资料，但还是暴露了部分隐私。"
                                                style="text-align: left; padding-left: 2%;"><p>
                                                韩国演员宋仲基因拍摄《太阳的后裔》走红。近日，他频频穿梭韩国、大陆，在进入禁区接受通关检查时，被粉丝疯狂拍照，就连他的护照细节也被传至网上。虽然已经遮住重要资料，但还是暴露了部分隐私。</p>
                                            </td>
                                            <td title="2016-06-01 01:22:49">2016-06-01 01:22:49</td>
                                            <td title="http://www.1905.com/video/play/1026440.shtml"
                                                style="text-align: left;padding-left: 2%;"><a target="_blank"
                                                                                              href="http://www.1905.com/video/play/1026440.shtml">http://www.1905.com/video/play/1026440.shtml</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td title="微博">微博</td>
                                            <td title="新浪微博">新浪微博</td>
                                            <td title="
		漫威最新合集打包带走私信我[doge][doge]死侍、美国队长、绿巨人、灵魂战车、钢铁侠、x战警、蜘蛛侠、银河护卫队、夜魔侠、复仇者联盟、神奇四侠、蝙蝠侠、惩罚者、幻影杀手、雷神。
		" style="text-align: left; padding-left: 2%;"><p>
                                                漫威最新合集打包带走私信我[doge][doge]死侍、美国队长、绿巨人、灵魂战车、钢铁侠、x战警、蜘蛛侠、银河护卫队、夜魔侠、复仇者联盟、神奇四侠、蝙蝠侠、惩罚者、幻影杀手、雷神。
                                            </p></td>
                                            <td title="2016-06-01 00:19:00">2016-06-01 00:19:00</td>
                                            <td title="http://weibo.com/3288944267/Dy8jNk99h?refer_flag=1001030103_"
                                                style="text-align: left;padding-left: 2%;"><a target="_blank"
                                                                                              href="http://weibo.com/3288944267/Dy8jNk99h?refer_flag=1001030103_">http://weibo.com/3288944267/Dy8jNk99h?refer_flag=1001030103_</a>
                                            </td>
                                        </tr>
                                        <tr style="background:#f4f9fc;">
                                            <td title="微博">微博</td>
                                            <td title="腾讯微博">腾讯微博</td>
                                            <td title="【深圳月底63个公交站要改名！快来看看有你家门口的不？】西湖宾馆公交站台拟更名为红岭小学、岗厦西公交站台拟更名为海关综合大楼、航母世界总站拟更名为东和路南……近日，市交委公布了2016年度第一批公交停靠站更名方案，63个公交站台计划更改名字，预计本月底实施更名工程。http://url.cn/2AsU0x6"
                                                style="text-align: left; padding-left: 2%;"><p>
                                                【深圳月底63个公交站要改名！快来看看有你家门口的不？】西湖宾馆公交站台拟更名为红岭小学、岗厦西公交站台拟更名为海关综合大楼、航母世界总站拟更名为东和路南……近日，市交委公布了2016年度第一批公交停靠站更名方案，63个公交站台计划更改名字，预计本月底实施更名工程。http://url.cn/2AsU0x6</p>
                                            </td>
                                            <td title="2016-06-01 11:23:11">2016-06-01 11:23:11</td>
                                            <td title="http://t.qq.com/p/t/486974056412332"
                                                style="text-align: left;padding-left: 2%;"><a target="_blank"
                                                                                              href="http://t.qq.com/p/t/486974056412332">http://t.qq.com/p/t/486974056412332</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td title="微博">微博</td>
                                            <td title="Twitter">Twitter</td>
                                            <td title="听说香港人为了防止大陆人去香港抢奶粉，考虑在奶粉罐子上写上“民主”，“自由”，“宪政”等字样。这样，这奶粉就过不了海关。微评：这招狠啊，某组织最怕的就是这几个汉字把群众煽动了，却不怕毒奶粉把群众给坑了。"
                                                style="text-align: left; padding-left: 2%;"><p>
                                                听说香港人为了防止大陆人去香港抢奶粉，考虑在奶粉罐子上写上“民主”，“自由”，“宪政”等字样。这样，这奶粉就过不了海关。微评：这招狠啊，某组织最怕的就是这几个汉字把群众煽动了，却不怕毒奶粉把群众给坑了。</p>
                                            </td>
                                            <td title="2016-06-01 17:44:45">2016-06-01 17:44:45</td>
                                            <td title="http://twitter.com/prettywendi/status/737942955072311296"
                                                style="text-align: left;padding-left: 2%;"><a target="_blank"
                                                                                              href="http://twitter.com/prettywendi/status/737942955072311296">http://twitter.com/prettywendi/status/737942955072311296</a>
                                            </td>
                                        </tr>
                                        <tr style="background:#f4f9fc;">
                                            <td title="微博">微博</td>
                                            <td title="人民微博">人民微博</td>
                                            <td title="杭州海关破成品油走私大案 涉案价值高达1.6亿元 综合新闻 - 社会新闻 - 如皋新闻网 - 如皋商务信息网http://peopleurl.cn/15dkDy"
                                                style="text-align: left; padding-left: 2%;"><p>杭州海关破成品油走私大案 涉案价值高达1.6亿元
                                                综合新闻 - 社会新闻 - 如皋新闻网 - 如皋商务信息网http://peopleurl.cn/15dkDy</p></td>
                                            <td title="2016-07-12 15:05:00">2016-07-12 15:05:00</td>
                                            <td title="http://t.people.com.cn/42362511/152385775"
                                                style="text-align: left;padding-left: 2%;"><a target="_blank"
                                                                                              href="http://t.people.com.cn/42362511/152385775">http://t.people.com.cn/42362511/152385775</a>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="main-nesw-bd" id="trace_summary">
                                    <dl>
                                        <dt><i></i></dt>
                                        <dd name="trace_summary" contenteditable="">
                                            经传播溯源分析发现，2016年06月01日00时，赣榆新闻在daganyu.net站点发布标题为《连云港边防查获价值千万巴西牛肉走私案》的论坛信息，是该事件传播的源头信息。其后新浪、新浪微博等站点相继发布相关信息，事件传播影响力渐次扩大。
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <!--------------------事件话题演化分析部分----------------------->
                            <div class="main-nesw sideToolbar-title" data-title="事件话题演化分析" name="8" id="8"
                                 auth_for_show_hide="6">
                                <h2>
                                    <span>事件话题演化分析</span>
                                </h2>

                                <div class="main-nesw-tab">
                                    <table width="100%" id="topic_table">
                                        <thead>
                                        <tr>
                                            <th style="width:6%;">序号</th>
                                            <th style="width:25%;">热点</th>
                                            <th style="width:10%;">热度</th>
                                            <th style="width:50%;">相关信息</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td title="1">1</td>
                                            <td title="杭州海关破获1.6亿元成品油走私案" style="text-align: left; padding-left: 2%;"><p
                                                    style="width:297px;">杭州海关破获1.6亿元成品油走私案</p></td>
                                            <td title="100.00%">100.00%</td>
                                            <td title="
		#7.11一7.17一周新鲜事#【2016年上半年我国外贸进出口情况】http://t.cn/R5FZOSv【离境退税试点一周年 上海关区退税额超千万】http://t.cn/Rtvaedr【杭州海关破获1.6亿元成品油走私案】http://t.cn/Rt7JeB1
		" style="text-align: left;padding-left: 2%;"><a target="_blank" style="width:500px;"
                                                        href="http://weibo.com/2270466922/DFo3g7Ol2?refer_flag=1001030103_">
                                                #7.11一7.17一周新鲜事#【2016年上半年我国外贸进出口情况】http://t.cn/R5FZOSv【离境退税试点一周年
                                                上海关区退税额超千万】http://t.cn/Rtvaedr【杭州海关破获1.6亿元成品油走私案】http://t.cn/Rt7JeB1
                                            </a></td>
                                        </tr>
                                        <tr style="background:#f4f9fc;">
                                            <td title="2">2</td>
                                            <td title="油品走私黑金链曝光一船可赚40万" style="text-align: left; padding-left: 2%;"><p
                                                    style="width:297px;">油品走私黑金链曝光一船可赚40万</p></td>
                                            <td title="66.67%">66.67%</td>
                                            <td title="" style="text-align: left;padding-left: 2%;"><a target="_blank"
                                                                                                       style="width:500px;"
                                                                                                       href=""></a></td>
                                        </tr>
                                        <tr>
                                            <td title="3">3</td>
                                            <td title="2016年海关查证粮食走私量创历史新高" style="text-align: left; padding-left: 2%;">
                                                <p style="width:297px;">2016年海关查证粮食走私量创历史新高</p></td>
                                            <td title="66.67%">66.67%</td>
                                            <td title="2016年海关查证粮食走私量创历史新高" style="text-align: left;padding-left: 2%;">
                                                <a target="_blank" style="width:500px;"
                                                   href="http://www.dzwww.com/xinwen/guoneixinwen/201701/t20170116_15438286.htm">2016年海关查证粮食走私量创历史新高</a>
                                            </td>
                                        </tr>
                                        <tr style="background:#f4f9fc;">
                                            <td title="4">4</td>
                                            <td title="国内汽柴油价格不调整" style="text-align: left; padding-left: 2%;"><p
                                                    style="width:297px;">国内汽柴油价格不调整</p></td>
                                            <td title="66.67%">66.67%</td>
                                            <td title="
		【国内汽柴油价格不调整】发展改革委称，自６月８日国内成品油价格调整以来，国际市场油价小幅波动，按现行国内成品油价格机制测算，６月２３日的前１０个工作日平均价格与６月８日调价前１０个工作日平均价格相比，调价金额每吨不足５０元。http://t.cn/R5WCHue
		" style="text-align: left;padding-left: 2%;"><a target="_blank" style="width:500px;"
                                                        href="http://weibo.com/1767954360/DBIW1wNXn?refer_flag=1001030103_">
                                                【国内汽柴油价格不调整】发展改革委称，自６月８日国内成品油价格调整以来，国际市场油价小幅波动，按现行国内成品油价格机制测算，６月２３日的前１０个工作日平均价格与６月８日调价前１０个工作日平均价格相比，调价金额每吨不足５０元。http://t.cn/R5WCHue
                                            </a></td>
                                        </tr>
                                        <tr>
                                            <td title="5">5</td>
                                            <td title="山东破获成品油走私进境案案值达2亿元" style="text-align: left; padding-left: 2%;">
                                                <p style="width:297px;">山东破获成品油走私进境案案值达2亿元</p></td>
                                            <td title="50.00%">50.00%</td>
                                            <td title="
		#缉私快讯#【青岛海关联合山东海警破获2亿元成品油走私案】青岛海关11月4日发布消息，&nbsp;8月26日，青岛海关缉私局与山东省海警总队抓住犯罪嫌疑人在海上过驳走私成品油的准确时机，一举抓获犯罪嫌疑人27名，现场查扣走私油船4艘、走私成品油700余吨，其团伙涉案成品油合计约4万吨，案值2亿元。
		" style="text-align: left;padding-left: 2%;"><a target="_blank" style="width:500px;"
                                                        href="http://weibo.com/3185467631/EgC2Kld8I?refer_flag=1001030103_">
                                                #缉私快讯#【青岛海关联合山东海警破获2亿元成品油走私案】青岛海关11月4日发布消息，&nbsp;8月26日，青岛海关缉私局与山东省海警总队抓住犯罪嫌疑人在海上过驳走私成品油的准确时机，一举抓获犯罪嫌疑人27名，现场查扣走私油船4艘、走私成品油700余吨，其团伙涉案成品油合计约4万吨，案值2亿元。
                                            </a></td>
                                        </tr>
                                        <tr style="background:#f4f9fc;">
                                            <td title="6">6</td>
                                            <td title="南宁海关破获一起海上成品油走私案" style="text-align: left; padding-left: 2%;"><p
                                                    style="width:297px;">南宁海关破获一起海上成品油走私案</p></td>
                                            <td title="50.00%">50.00%</td>
                                            <td title="特大海上成品油走私案在南宁落网&nbsp;涉案金额3000万元"
                                                style="text-align: left;padding-left: 2%;"><a target="_blank"
                                                                                              style="width:500px;"
                                                                                              href="http://news.huishoushang.com/77784.html">特大海上成品油走私案在南宁落网&nbsp;涉案金额3000万元</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td title="7">7</td>
                                            <td title="广州开展“国门利剑2016”打私行动，查获涉嫌走私冻品3万多吨"
                                                style="text-align: left; padding-left: 2%;"><p style="width:297px;">
                                                广州开展“国门利剑2016”打私行动，查获涉嫌走私冻品3万多吨</p></td>
                                            <td title="50.00%">50.00%</td>
                                            <td title="" style="text-align: left;padding-left: 2%;"><a target="_blank"
                                                                                                       style="width:500px;"
                                                                                                       href=""></a></td>
                                        </tr>
                                        <tr style="background:#f4f9fc;">
                                            <td title="8">8</td>
                                            <td title="揭秘东南沿海成品油走私“春雷”出击破获成品油走私大案"
                                                style="text-align: left; padding-left: 2%;"><p style="width:297px;">
                                                揭秘东南沿海成品油走私“春雷”出击破获成品油走私大案</p></td>
                                            <td title="34.00%">34.00%</td>
                                            <td title="
		我在网易视频观看了《揭秘东南沿海成品油走私“春雷”出击 破获成品油走私大案》，|揭秘东南沿...，很不错，分享给大家。
		" style="text-align: left;padding-left: 2%;"><a target="_blank" style="width:500px;"
                                                        href="http://weibo.com/5901303066/DzASnaOHm?refer_flag=1001030103_">
                                                我在网易视频观看了《揭秘东南沿海成品油走私“春雷”出击 破获成品油走私大案》，|揭秘东南沿...，很不错，分享给大家。
                                            </a></td>
                                        </tr>
                                        <tr>
                                            <td title="9">9</td>
                                            <td title="广州、拱北海关联合破获2万吨走私红油大案"
                                                style="text-align: left; padding-left: 2%;"><p style="width:297px;">
                                                广州、拱北海关联合破获2万吨走私红油大案</p></td>
                                            <td title="33.33%">33.33%</td>
                                            <td title="广州、拱北海关联合破获2万吨走私红油大案" style="text-align: left;padding-left: 2%;">
                                                <a target="_blank" style="width:500px;"
                                                   href="http://society.workercn.cn/10/201701/09/170109135652408.shtml">广州、拱北海关联合破获2万吨走私红油大案</a>
                                            </td>
                                        </tr>
                                        <tr style="background:#f4f9fc;">
                                            <td title="10">10</td>
                                            <td title="�可点金国际油价将上涨60美元中国油价受害甚大"
                                                style="text-align: left; padding-left: 2%;"><p style="width:297px;">
                                                �可点金国际油价将上涨60美元中国油价受害甚大</p></td>
                                            <td title="33.33%">33.33%</td>
                                            <td title="【国际油价陷入盘整 端午节前国内油价四连涨概率大】国际油价高位盘整之下，国内油价&quot;四连涨&quot;来袭。这轮计价周期内国际油价再创年内新高，目前对应成品油调价幅度处于50元/吨红线上方，6月8日新一轮成品油调价时间窗口将开启，预计上涨概率较大，部分省份油价将回&quot;6元时代&quot;。http://url.cn/28rZmVx"
                                                style="text-align: left;padding-left: 2%;"><a target="_blank"
                                                                                              style="width:500px;"
                                                                                              href="http://t.qq.com/p/t/510366053021942">【国际油价陷入盘整
                                                端午节前国内油价四连涨概率大】国际油价高位盘整之下，国内油价"四连涨"来袭。这轮计价周期内国际油价再创年内新高，目前对应成品油调价幅度处于50元/吨红线上方，6月8日新一轮成品油调价时间窗口将开启，预计上涨概率较大，部分省份油价将回"6元时代"。http://url.cn/28rZmVx</a>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="main-nesw-bd" id="topic_summary">
                                    <dl>
                                        <dt><i></i></dt>
                                        <dd name="topic_summary" contenteditable="">
                                            如上所示，围绕本事件，网络关注话题焦点从“杭州海关破获1.6亿元成品油走私案”，到“油品走私黑金链曝光一船可赚40万”，再到“2016年海关查证粮食走私量创历史新高”，并兼有“国内汽柴油价格不调整”等话题的讨论。
                                        </dd>
                                    </dl>
                                </div>

                            </div>
                            <!--------------------网民意见分析部分----------------------->
                            <div class="main-nesw sideToolbar-title" data-title="网民意见分析" name="9" id="9"
                                 auth_for_show_hide="7">
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
                                <div class="main-nesw-bd" id="opinion_emotion_summary">
                                    <dl>
                                        <dt><i></i></dt>
                                        <dd name="opinion_emotion_summary" contenteditable="">
                                            截至2017年01月17日16时，网民共发布评论1736条，中立评论占主流。其中25.86%的网民持正面观点，34.85%的网民持负面观点，39.29%的网民持中立观点。
                                        </dd>
                                    </dl>
                                </div>
                                <h5>
                                    <span></span>网民意见分布
                                </h5>

                                <div id="opinion_summary">
                                    <div class="miaosu" name="opinion_summary"><h3 name="n">正面观点网民意见描述</h3>

                                        <div class="main-nesw-bd">
                                            <dl>
                                                <dt><i></i></dt>
                                                <dd contenteditable="" name="v">
                                                    正面观点包含“南宁海关组织开展缉私专项行动(42.86%)”、“在地方公安机关的支持配合下(42.86%)”、“成功打掉一个大规模走私成品油犯罪团伙(7.14%)”等代表性观点，其中代表性微博/网帖主要有“
                                                    #北海身边事#【南宁海关在北海展开抓捕行动，一家族式走私成品油团伙涉案3000万】南宁海关集中组织开展“GN1620”缉私专项行动，在地方公安机关及海关执勤武警部队的支持配合下，出动警力100余名，在广西北海等地同步展开抓捕行动，现场抓获包括主犯郑某谋在内的犯罪嫌疑人15名，现场查扣成品油近130吨
                                                    ...展开全文c
                                                    ”、“
                                                    #北海身边事#【南宁海关在北海展开抓捕行动，一家族式走私成品油团伙涉案3000万】南宁海关集中组织开展“GN1620”缉私专项行动，在地方公安机关及海关执勤武警部队的支持配合下，出动警力100余名，在广西北海等地同步展开抓捕行动，现场抓获包括主犯郑某谋在内的犯罪嫌疑人15名，现场查扣成品油近130吨
                                                    ...展开全文c
                                                    ”、“
                                                    【高清:6舰出海啥阵仗?打掉27人走私团伙案值2亿[给力]】今天，青岛新闻网从青岛海关获悉，今年8月26日青岛海关与山东海警联合开展“青岛利剑1606”专项行动，成功打掉一个大规模走私成品油犯罪团伙。8月26日，青岛海关缉私局出动70余名警力，山东省海警总队出动6艘舰艇、200余官兵，抓住犯罪嫌疑人在海
                                                    ...展开全文c
                                                    ”。
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                    <div class="miaosu" name="opinion_summary"><h3 name="n">负面观点网民意见描述</h3>

                                        <div class="main-nesw-bd">
                                            <dl>
                                                <dt><i></i></dt>
                                                <dd contenteditable="" name="v">
                                                    负面观点包含“不乏因暴利诱惑铤而走险者(84.38%)”、“实际暗渡成仓(14.06%)”、“伺机走私进境并到珠三角地区偷卸倒卖(1.56%)”等代表性观点，其中代表性微博/网帖主要有“油品走私黑金链曝光&nbsp;一船可赚40万_岁岁枯荣_新浪博客”、“
                                                    #杭州身边事#【油轮"暗渡陈仓"
                                                    杭州海关破1.6亿元成品油走私大案】名义上在各港口装载成品油运往山东，实际暗渡陈仓，将油品从公海过驳偷运进境。昨天，杭州海关通报，成功捣毁1个海上成品油走私团伙，抓获犯罪嫌疑人20人，全案涉及走私进境的成品油2.48万吨、案值1.6亿元
                                                    |油轮"...
                                                    ”、“
                                                    发表了博文《广州海关查获走私成品油800多吨》12月初，大铲海关缉私分局接到线索，当晚将有一艘千吨级的油轮从公海接油，伺机走私进境并到珠三角地区偷卸倒卖。但线索中只有涉嫌走私船舶的名字、大概航行时间段|广州海关查...
                                                    ”。
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                    <div class="miaosu" name="opinion_summary"><h3 name="n">中立观点网民意见描述</h3>

                                        <div class="main-nesw-bd">
                                            <dl>
                                                <dt><i></i></dt>
                                                <dd contenteditable="" name="v">
                                                    中立观点包含“及前述要求(10.0%)”、“为进一步落实(10.0%)”、“要加强信息共享(10.0%)”等代表性观点，其中代表性微博/网帖主要有“城市加油站不得销售普通柴油：国家11部委局发文”、“城市加油站不得销售普通柴油：国家11部委局发文”、“城市加油站不得销售普通柴油：国家11部委局发文”。
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--------------------网民互动及传播关键点分析部分----------------------->
                            <!--<div class="main-nesw sideToolbar-title" data-title="网民互动及传播关键点分析" name="8" id="8" auth_for_show_hide="8">-->
                            <!--<h2>-->
                            <!--<span>网民互动及传播关键点分析</span>-->
                            <!--<span style="float:right;">-->
                            <!--<input type="button" value="上传截图" class="jb_btn" style="margin-top:8px;" onclick="$('#netizen_interact_charts_upload').click();">-->
                            <!--<input type="file" style="visibility: hidden;" id="netizen_interact_charts_upload" name="pic_upload" target_container_id="net_map">-->
                            <!--</span>-->
                            <!--</h2>-->
                            <!--<div>-->
                            <!--<div style="color: red;text-align: center;">此图不支持自动截图，请手动截图后进行上传。</div>-->


                            <!--<script type="text/javascript" src="js/ichart.1.2.min.js"></script>-->
                            <!--<script type="text/javascript" src="js/iBookMark.js"></script>-->
                            <!--<script type="text/javascript" src="js/icheck.min.js"></script>-->
                            <!--<script type="text/javascript" src="js/sigroup.iDetail.plugin.v2.min.js"></script>-->
                            <!--&lt;!&ndash; 	<h1><p>首页 > 专题分析与研判 > 网民互动分析</p></h1> &ndash;&gt;-->
                            <!--<div class="interaction border1">-->
                            <!--<div class="title1" style="display: none;">-->
                            <!--<a name="netizen_network_tab" onclick="activeGraph(this)" class="hover" lang="1" style="cursor: pointer;">博主互动网络</a>-->
                            <!--<a name="netizen_area_tab" onclick="areaDis(this)" style=" cursor: pointer;" lang="2">博主地域分布</a>-->
                            <!--</div>-->
                            <!--<div class="content" style="padding:5px;">-->
                            <!--<div class="select2" style="/*position: fixed;z-index: 301;*/">-->
                            <!--<div style="width:100%;margin:0px auto;overflow:hidden;display: none;">-->
                            <!--<span style="width:70px;text-align:right;display:block;float:left;font-weight:bold;">用户群体：</span>-->
                            <!--<input name="groupCheckbox" type="checkbox" value="0" id="group_check_all" checked="" style="float:left;margin:8px 4px 0 0;"><label style="float:left;">全部</label>-->
                            <!--<input name="groupCheckbox" type="checkbox" value="1" checked="" style="float:left;margin:8px 4px 0 0;"><label style="float:left;">第一落点</label>-->
                            <!--<input name="groupCheckbox" type="checkbox" value="2" checked="" style="float:left;margin:8px 4px 0 0;"><label style="float:left;">核心博主</label>-->
                            <!--<input name="groupCheckbox" type="checkbox" value="3" checked="" style="float:left;margin:8px 4px 0 0;"><label style="float:left;">网络推手</label>-->
                            <!--<input name="groupCheckbox" type="checkbox" value="4" checked="" style="float:left;margin:8px 4px 0 0;"><label style="float:left;">其他</label>-->
                            <!--<span style="margin-left:145px;"><b>关键词：</b></span><input id="keyword" name="" type="text" class="input2" style="width: 90px;border-radius: 4px;height: 22px;">-->
                            <!--<span><b>时间：</b></span>-->
                            <!--<input type="text" class="input st hasDatepicker" style="-webkit-border-radius: 5px;width: 80px;margin: 0;border-radius: 4px;height: 22px;" id="dp1486374599337">-->
                            <!--<span>&nbsp;&nbsp;&#45;&#45;&nbsp;&nbsp;</span>-->
                            <!--<input type="text" class="input et hasDatepicker" style="-webkit-border-radius: 5px;width: 80px;margin: 0;border-radius: 4px;height: 22px;" id="dp1486374599338">-->
                            <!--</div>-->
                            <!--<div style="width:100%;margin:0px auto;overflow:hidden;display: none;">-->
                            <!--<span style="width:70px;text-align:right;display:block;float:left;font-weight:bold;">用户身份：</span>-->
                            <!--<input name="groupCheckbox_2" type="checkbox" value="0" id="group_check_all_2" checked="" style="float:left;margin:8px 4px 0 0;"><label style="float:left;">全部</label>-->
                            <!--<input name="groupCheckbox_2" type="checkbox" value="1" checked="" style="float:left;margin:8px 4px 0 0;"><label style="float:left;">律师</label>-->
                            <!--<input name="groupCheckbox_2" type="checkbox" value="2" checked="" style="float:left;margin:8px 4px 0 0;"><label style="float:left;">警察</label>-->
                            <!--<input name="groupCheckbox_2" type="checkbox" value="4" checked="" style="float:left;margin:8px 4px 0 0;"><label style="float:left;">政府官员</label>-->
                            <!--<input name="groupCheckbox_2" type="checkbox" value="6" checked="" style="float:left;margin:8px 4px 0 0;"><label style="float:left;">媒体机构</label>-->
                            <!--<input name="groupCheckbox_2" type="checkbox" value="3" checked="" style="float:left;margin:8px 4px 0 0;"><label style="float:left;">媒体从业者</label>-->
                            <!--<input name="groupCheckbox_2" type="checkbox" value="5" checked="" style="float:left;margin:8px 4px 0 0;"><label style="float:left;">其他</label>-->
                            <!--<span style="text-align:right;display:block;float:left;font-weight:bold; width:70px;">博主昵称：</span><input id="userName" type="text" class="input2" style="width:90px;border-radius: 4px;height: 22px;margin:0 10px 0 0">-->
                            <!--<span><b>发文量： </b></span><input id="cnt" type="text" class="input2" style="width: 80px;border-radius: 4px;height: 22px;margin:0 10px 0 0">-->
                            <!--<span><b>粉丝量：</b></span>-->
                            <!--<span>-->
                            <!--<select name="fansCount" id="fansCount" style="width:80px;height: 22px;cursor: pointer;border:1px solid #ccc;border-radius: 4px;">-->
                            <!--<option value="0"> 全部 </option>-->
                            <!--<option value="100"> &gt;100 </option>-->
                            <!--<option value="1000"> &gt;1000 </option>-->
                            <!--<option value="10000"> &gt;10000 </option>-->
                            <!--<option value="100000"> &gt;100000 </option>-->
                            <!--</select>-->
                            <!--</span>-->
                            <!--</div>-->
                            <!--<div style="width:100%;margin:0px auto;display: none;">-->
                            <!--<span style="width:70px;text-align:right;display:block;float:left;font-weight:bold;"><b>认证类型：</b></span>-->
                            <!--<input name="typeCheckbox" type="checkbox" value="0" id="type_check_all" checked="" style="float:left;margin:8px 4px 0 0;"><label style="float:left;">全部</label>-->
                            <!--<input name="typeCheckbox" type="checkbox" value="4" checked="" style="float:left;margin:8px 4px 0 0;"><label style="float:left;">非认证</label>-->
                            <!--<input name="typeCheckbox" type="checkbox" value="2" checked="" style="float:left;margin:8px 4px 0 0;"><label style="float:left;">个人认证</label>-->
                            <!--<input name="typeCheckbox" type="checkbox" value="1" checked="" style="float:left;margin:8px 4px 0 0;"><label style="float:left;">达人</label>-->
                            <!--<input name="typeCheckbox" type="checkbox" value="3" checked="" style="float:left;margin:8px 4px 0 0;"><label style="float:left;">机构认证</label>-->
                            <!--<input name="typeCheckbox" type="checkbox" value="5" checked="" style="float:left;margin:8px 4px 0 0;"><label style="float:left;">未知</label>-->

                            <!--<span style="float: right;">-->
                            <!--<input type="button" name="submit_netizen_search" onclick="submitSearch(this)" value="确定" class="button" style="height:26px;padding:0px 20px;line-height:26px;">-->
                            <!--<input type="button" name="netizen_reset" value="重置" onclick="javascript:netizen_reset();" class="button" style="height:26px;padding:0px 20px;line-height:26px;">-->
                            <!--</span>-->
                            <!--</div>-->

                            <!--<p>-->
                            <!--</p><div class="wlya" id="wlya" style="height: 600px;">-->

                            <!--</div>-->
                            <!--<div class="map_contain" style="display:none ;float:left;"><div id="mapContainer" style="height: 658px;width:560px;"></div></div>-->
                            <!--<p></p>-->
                            <!--<div id="netizen_network" class="sjwl_left ipage gjc_text" style="width:100%">-->
                            <!--<div class="sjwl_right related_div" style="display:none;">&lt;!&ndash; 网络   关联博主、交互博文 &ndash;&gt;-->
                            <!--<h4>-->
                            <!--<p class="on"> <a name="related_people_tab" style="cursor: pointer;">关联博主</a> </p>-->
                            <!--<p style="display: none;"><a name="related_infomation_tab" style="cursor: pointer;">交互博文</a></p>-->
                            <!--&lt;!&ndash;<p style="border:0;float:right;display:block;background:none;width:30px;">	<img src="imgs/refresh.png" style="cursor:pointer" title="关闭窗口" value="全部" onclick="closeTableDiv()" class="hideDiv" height="22" width="22"></p>&ndash;&gt;-->
                            <!--</h4>-->
                            <!--<div class="text04_list02" id="inter_people_list">&lt;!&ndash; 关联博主列表 &ndash;&gt;-->
                            <!--<table class="table item list_title" style="color:#fff;width: 100%;font-size: 12px;float:left;">-->
                            <!--<tbody><tr class="text02_title">-->
                            <!--<td align="center" width="10%"><b>序号</b></td>-->
                            <!--<td align="center" width="20%"><b>昵称</b></td>-->
                            <!--<td align="center" width="17%"><b style="float:left;margin-left:14px;">粉丝数</b><i style="display:none" class="down_icon" onclick="orderTable(this)" lang="1"></i></td>-->
                            <!--<td align="center" width="17%"><b>用户类型</b></td>-->
                            <!--<td align="center" width="17%" style="display:none">站点</td>-->
                            <!--<td align="center" width="17%"><b style="float:left;margin-left:14px;">发文量</b><i style="display:none" class="up_icon" onclick="orderTable(this)" lang="3"></i></td>-->
                            <!--<td align="center" width="15%"><b style="float:left;margin-left:10px;">操作</b></td>-->
                            <!--</tr>-->
                            <!--</tbody></table>-->
                            <!--<div id="related_people_list" class="ipage" style="max-height:598px;overflow-y:scroll;width:100%; float:left;background: #fff;"></div>-->
                            <!--</div>-->
                            <!--<div id="inter_blogger_list" style="display:none;background: #fff;float:left; width:100%;">	&lt;!&ndash; 交互博文列表 &ndash;&gt;-->
                            <!--<span style="font-size:14px;background:#E5EAF2; width:100%; display:block; color:#555; height:30px;line-height:30px;font-weight:bold;text-align:left;"><b id="first_infomation" style="margin:0px 8px;"></b></span>-->
                            <!--<div id="related_infomation_list" class="ipage" style="width:100%;max-height:600px;overflow-y:scroll;float:left;"></div>-->
                            <!--</div>-->
                            <!--</div>-->
                            <!--</div>-->

                            <!--<div id="related_map_div" class="sjwl_left ipage gjc_text" style="width: 100%; display: none;">-->
                            <!--<div class="sjwl_right related_map" style="display:none">&lt;!&ndash; 地图    关联博主、交互博文 &ndash;&gt;-->
                            <!--<h4>-->
                            <!--<p class="on"> <a name="related_map_tab" style="cursor: pointer;">相关博主</a> </p>-->
                            <!--<p style="display:block"><a name="related_map_infomation_tab" style="cursor: pointer;">相关博文</a></p>-->
                            <!--<p style="display:block ;color:black;float: right;" class="areaDescription"></p>-->
                            <!--</h4>-->
                            <!--<div class="text04_list02" style="margin-top:10px;" id="inter_map_list">&lt;!&ndash; 关联博主列表 &ndash;&gt;-->
                            <!--<table class="table item list_title" style="color:#fff;width: 100%;font-size: 12px;float:left;">-->
                            <!--<tbody><tr class="text02_title">-->
                            <!--<td align="center" width="10%"><b>序号</b></td>-->
                            <!--<td align="center" width="23%"><b>昵称</b></td>-->
                            <!--<td align="center" width="17%"><b style="float:left;margin-left:14px;">粉丝数</b><i style="display:none" class="down_icon" onclick="orderTable(this)" lang="1"></i></td>-->
                            <!--<td align="center" width="17%"><b style="margin-left:10px;">用户类型</b></td>-->
                            <!--<td align="center" width="17%"><b style="float:left;margin-left:10px;">发文量 </b><i style="display:none" class="up_icon" onclick="orderTable(this)" lang="3"></i></td>-->
                            <!--<td align="left" width="15%"><b style="float:left;margin-left:12px;">操作</b></td>-->
                            <!--</tr>-->
                            <!--</tbody></table>-->
                            <!--<div id="related_map_list" class="ipage" style="max-height:560px;overflow-y:scroll;width:100%; float:left;background: #fff;padding:0;margin:0;"></div>-->
                            <!--</div>-->
                            <!--<div id="inter_map_blogger_list" style="display:none;border: 1px solid #;background: #fff;float:left; width:100%;">	&lt;!&ndash; 交互博文列表 &ndash;&gt;-->
                            <!--<span style="font-size:14px;background:#E5EAF2; width:100%; display:block; color:#555; height:30px;line-height:30px;font-weight:bold;text-align:left;"><b id="first_map_infomation" style="margin:0px 8px;"></b></span>-->
                            <!--<div id="related_map_infomation_list" class="ipage" style="width:100%;max-height:587px;overflow-y:scroll;float:left;"></div>-->
                            <!--</div>-->
                            <!--</div>-->
                            <!--</div>-->

                            <!--</div>-->
                            <!--</div>-->


                            <!--</div>-->
                            <!--</div>-->
                            <!--<div class="main-nesw-bd" id="interact_summary"><dl><dt><i></i></dt><dd name="interact_summary" contenteditable="">经分析研判，油财经U    、深圳微博发布厅、中国经济周刊等账户在本事件的传播中扮演了网络推手的角色,发布了大量事件相关信息,有刻意推动事件发展嫌疑，可作为重点监控对象。其中油财经U    发布相关微博12条，深圳微博发布厅发布相关微博12条，中国经济周刊发布相关微博12条。</dd></dl><dl><dt><i></i></dt><dd name="interact_summary" contenteditable="">意见领袖/认证博主[XX]在事件的二次传播中发挥了重要作用，可作为引导网络舆论的关键点。</dd></dl><dl><dt><i></i></dt><dd name="interact_summary" contenteditable="">其他群体主要参与了此事件传播并具有较大影响力。</dd></dl></div>-->
                            <!--</div>-->
                            //<!--------------------综合研判部分----------------------->
                            <div class="main-nesw sideToolbar-title" data-title="综合研判" name="10" id="10"
                                 auth_for_show_hide="9">
                                <h2>
                                    <span>综合研判</span>
                                </h2>

                                <div class="main-nesw-bd" id="comprehensive_summary">
                                    <dl>
                                        <dt><i></i></dt>
                                        <dd name="comprehensive_summary" contenteditable="">
                                            null较低，事件影响较小，正面及中立意见占据主流，负面意见也占有一定比例，舆论反响极小。
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
                                <img src="imgs/weixin.png" alt=""/>
                                <a href="javascript;;" style="display:block;">推送至微信</a>
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
                                                <div class="on_off" style="visibility:hidden;"><span name="on_off_span"
                                                                                                     class="on_click"
                                                                                                     auth_code="0">ON</span>

                                                    <p></p>
                                                </div>
                                            </div>
                                        </dd>
                                        <dd class="sideCatalog-item1" id="sideToolbar-item-0-2"><span
                                                class="sideCatalog-index1">2</span>
                                            <a href="#2" class="nslog nslog:1026" title="舆情统计" onclick="return false;">舆情统计</a><span
                                                    class="sideCatalog-dot"></span>

                                            <div class="on_off_head">
                                                <div class="on_off"><span name="on_off_span" class="on_click"
                                                                          auth_code="1">ON</span>

                                                    <p></p>
                                                </div>
                                            </div>
                                        </dd>
                                        <dd class="sideCatalog-item1" id="sideToolbar-item-0-3"><span
                                                class="sideCatalog-index1">3</span>
                                            <a href="#3" class="nslog nslog:1026" title="广电线索分布"
                                               onclick="return false;">广电线索分布</a><span class="sideCatalog-dot"></span>

                                            <div class="on_off_head">
                                                <div class="on_off"><span name="on_off_span" class="on_click"
                                                                          auth_code="2">ON</span>

                                                    <p></p>
                                                </div>
                                            </div>
                                        </dd>
                                        <dd class="sideCatalog-item1" id="sideToolbar-item-0-4"><span
                                                class="sideCatalog-index1">4</span>
                                            <a href="#4" class="nslog nslog:1026" title="事件综合影响力分析"
                                               onclick="return false;">事件综合影响力分析</a><span
                                                    class="sideCatalog-dot"></span>

                                            <div class="on_off_head">
                                                <div class="on_off"><span name="on_off_span" class="on_click"
                                                                          auth_code="3">ON</span>

                                                    <p></p>
                                                </div>
                                            </div>
                                        </dd>
                                        <dd class="sideCatalog-item1" id="sideToolbar-item-0-5"><span
                                                class="sideCatalog-index1">5</span>
                                            <a href="#5" class="nslog nslog:1026" title="事件阶段演化分析"
                                               onclick="return false;">事件阶段演化分析</a><span class="sideCatalog-dot"></span>

                                            <div class="on_off_head">
                                                <div class="on_off"><span name="on_off_span" class="on_click"
                                                                          auth_code="4">ON</span>

                                                    <p></p>
                                                </div>
                                            </div>
                                        </dd>
                                        <dd class="sideCatalog-item1" id="sideToolbar-item-0-6"><span
                                                class="sideCatalog-index1">6</span>
                                            <a href="#6" class="nslog nslog:1026" title="网上传播情况分析"
                                               onclick="return false;">网上传播情况分析</a><span class="sideCatalog-dot"></span>

                                            <div class="on_off_head">
                                                <div class="on_off"><span name="on_off_span" class="on_click"
                                                                          auth_code="5">ON</span>

                                                    <p></p>
                                                </div>
                                            </div>
                                        </dd>
                                        <dd class="sideCatalog-item1" id="sideToolbar-item-0-7"><span
                                                class="sideCatalog-index1">7</span>
                                            <a href="#7" class="nslog nslog:1026" title="事件溯源分析"
                                               onclick="return false;">事件溯源分析</a><span class="sideCatalog-dot"></span>

                                            <div class="on_off_head">
                                                <div class="on_off"><span name="on_off_span" class="on_click"
                                                                          auth_code="6">ON</span>

                                                    <p></p>
                                                </div>
                                            </div>
                                        </dd>
                                        <dd class="sideCatalog-item1" id="sideToolbar-item-0-8"><span
                                                class="sideCatalog-index1">8</span>
                                            <a href="#8" class="nslog nslog:1026" title="事件话题演化分析"
                                               onclick="return false;">事件话题演化分析</a><span class="sideCatalog-dot"></span>

                                            <div class="on_off_head">
                                                <div class="on_off"><span name="on_off_span" class="on_click"
                                                                          auth_code="7">ON</span>

                                                    <p></p>
                                                </div>
                                            </div>
                                        </dd>
                                        <dd class="sideCatalog-item1" id="sideToolbar-item-0-9"><span class="sideCatalog-index1">9</span>
                                            <a href="#9" class="nslog nslog:1026" title="网民意见分析" onclick="return false;">网民意见分析</a><span class="sideCatalog-dot"></span>

                                            <div class="on_off_head">
                                                <div class="on_off"><span name="on_off_span" class="on_click" auth_code="8">ON</span>

                                                    <p></p>
                                                </div>
                                            </div>
                                        </dd>
                                        <!--<dd class="sideCatalog-item1" id="sideToolbar-item-0-8"><span class="sideCatalog-index1">8</span>-->
                                        <!--<a href="#8" class="nslog nslog:1026" title="网民互动及传播关键点分析" onclick="return false;">网民互动及传播关键点分析</a><span class="sideCatalog-dot"></span>-->
                                        <!--<div class="on_off_head">-->
                                        <!--<div class="on_off"><span name="on_off_span" class="on_click" auth_code="7">ON</span>-->
                                        <!--<p></p>-->
                                        <!--</div>-->
                                        <!--</div>-->
                                        <!--</dd>-->
                                        <dd class="sideCatalog-item1" id="sideToolbar-item-0-10"><span class="sideCatalog-index1">10</span>
                                            <a href="#10" class="nslog nslog:1026" title="综合研判" onclick="return false;">综合研判</a><span class="sideCatalog-dot"></span>
                                            <div class="on_off_head">
                                                <div class="on_off"><span name="on_off_span" class="on_click" auth_code="9">ON</span>
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
                    <ul class="Time clearfix">
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