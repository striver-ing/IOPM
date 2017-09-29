
function change() {
	var pic = document.getElementById("preview"),
	    file = document.getElementById("f");

	var ext=file.value.substring(file.value.lastIndexOf(".")+1).toLowerCase();

     // gif��IE�������ʱ�޷���ʾ
     if(ext!='png'&&ext!='jpg'&&ext!='jpeg'){
         alert("上传的格式为png,jpg,jpeg"); 
		 return;
     }
	 var isIE = navigator.userAgent.match(/MSIE/)!= null,
		 isIE6 = navigator.userAgent.match(/MSIE 6.0/)!= null;

	 if(isIE) {
		file.select();
		var reallocalpath = document.selection.createRange().text;

		// IE6���������img��srcΪ����·������ֱ����ʾͼƬ
         if (isIE6) {
			pic.src = reallocalpath;
		 }else {
			// ��IE6�汾��IE���ڰ�ȫ����ֱ������img��src�޷���ʾ����ͼƬ�����ǿ���ͨ���˾���ʵ��
             pic.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='image',src=\"" + reallocalpath + "\")";
             // ����img��srcΪbase64�����͸��ͼƬ ȡ����ʾ�����Ĭ��ͼƬ
             pic.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
		 }
	 }else {
		html5Reader(file);
	 }
}

 function html5Reader(file){
     var file = file.files[0];
     var reader = new FileReader();
     reader.readAsDataURL(file);
     reader.onload = function(e){
         var pic = document.getElementById("preview");
         pic.src=this.result;
     }
 }