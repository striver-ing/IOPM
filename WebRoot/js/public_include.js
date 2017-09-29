$(function(){
	$('#sidebar .nav li').click(function(){
		$(this).addClass("active").siblings("#sidebar .nav li").removeClass("active");
		
	});
	//js  css 数组  虽然js没啥用 。。。
	var cssjsPath = ['/IOPM/css/jquery-ui.min.css',
					 '/IOPM/css/bootstrap.min.css',
					 '/IOPM/css/font-awesome.min.css',
					 '/IOPM/css/animate.min.css',
					 '/IOPM/css/theme/default.css',
					 '/IOPM/css/daterangepicker-bs3.css',
					 '/IOPM/css/blue.css',
					 '/IOPM/css/select2.css',
					 '/IOPM/css/bootstrap-datepicker/css/datepicker.css',
					 '/IOPM/css/scrollbar/jquery.mCustomScrollbar.min.css',
					 '/IOPM/css/style.min.css',
					 '/IOPM/css/checkmask.css',
					 '/IOPM/css/lanrenzhijia.css',
					 '/IOPM/css/zzsc.css',
					 '/IOPM/js/jquery/jquery-migrate-1.1.0.min.js',
					 '/IOPM/js/jquery-ui/jquery-ui.min.js',
					 '/IOPM/js/bootstrap/bootstrap.min.js',
					 '/IOPM/js/jquery.slimscroll.min.js',
					 '/IOPM/css/scrollbar/jquery.mCustomScrollbar.concat.min.js',
					 '/IOPM/css/bootstrap-datepicker/js/bootstrap-datepicker.js',
					 '/IOPM/js/moment.min.js',
					 '/IOPM/js/app-pages.js',
					 '/IOPM/js/pace.min.js',
					 '/IOPM/js/apps.min.js'];
	for (var i=0;i<cssjsPath.length;i++) {
		var paths = cssjsPath[i].split('.');
		var pathLen = paths.length;
		if(paths[pathLen-1]=='css'){
			dynamicLoading.css(cssjsPath[i])
		}else{
			dynamicLoading.javascript(cssjsPath[i]);
		}
	}
});
//异步加载css和js
var  dynamicLoading={
	css:function(path){
		if(!path||path.length==0){
			throw new Error('参数不正确');
		}
		var head=document.getElementsByTagName('head')[0];
		var link=document.createElement('link');
		link.href=path;
		link.rel='stylesheet';
		link.type='text/css';
		head.appendChild(link);
	},
	javascript:function(path){
		if(!path||path.length==0){
			throw new Error('参数不正确');
		}
		var head=document.getElementsByTagName('head')[0];
		var script=document.createElement('script');
		script.src=path;
		script.type='text/javascript';
		head.appendChild(script);
	}
};