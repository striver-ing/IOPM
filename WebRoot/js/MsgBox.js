function display(id, display) {
	for(var i=1; i<3; i++) {
		$('#'+id+i).css('display', display);
	}
}

function closeAlertConfirm() {
	if($("#MsgBoxAlert").css("class") != undefined) {
		return false;
	} else if($("#MsgBoxConfirm").css("class") != undefined) {
		return false;
	} else if($("#MsgBoxAlertCallBack").css("class") != undefined) {
		return false;
	}
	return true;
}

function closeMsgBox(id) {
	$("#"+id+"Shade").hide();
	$("#"+id).hide();
	$("#"+id+"Shade").remove();
	$("#"+id).remove();
}

function Alert(msg) {
	if(!closeAlertConfirm()) {
		return;
	}
	 var shadeDiv = $("<div></div>");
	 shadeDiv.attr("id","MsgBoxAlertShade");
	 shadeDiv.attr("class","msgboxshade");
	 shadeDiv.appendTo("body");
	 
     var parentDiv = $("<div></div>");
     parentDiv.attr("id","MsgBoxAlert");
     parentDiv.attr("class","msgboxbg");
     parentDiv.css("top","50%");
     parentDiv.css("width","200px");
     parentDiv.css("margin-left","-100px");
     
     var bodyDiv = $("<div></div>");
     bodyDiv.attr("class","msgbox");
     
     var bodyH = "<h1 class='msgbox_head'><a onClick='closeMsgBox(\"MsgBoxAlert\");' class='msgbox_close'></a></h1>";
     $(bodyDiv).append(bodyH);
     
     var bodyD = $("<div></div>");
     bodyD.text(msg);
     bodyD.appendTo(bodyDiv);
     
     var button = "<h1 class='msgbox_foot'><input type='button' onclick='closeMsgBox(\"MsgBoxAlert\");' value='确定' class='msgbox_btn01'/></h1>";
     $(bodyDiv).append(button);
     
     bodyDiv.appendTo(parentDiv);
     parentDiv.appendTo("body");
}

function AlertCallBack(msg, callback) {
	if(!closeAlertConfirm()) {
		return;
	}
	 var shadeDiv = $("<div></div>");
	 shadeDiv.attr("id","MsgBoxAlertCallBackShade");
	 shadeDiv.attr("class","msgboxshade");
	 shadeDiv.appendTo("body");
	 
    var parentDiv = $("<div></div>");
    parentDiv.attr("id","MsgBoxAlertCallBack");
    parentDiv.attr("class","msgboxbg");
    parentDiv.css("top","56%");
    parentDiv.css("width","300px");
    parentDiv.css("margin-left","-150px");
    
    var bodyDiv = $("<div></div>");
    bodyDiv.attr("class","msgbox");
    
    var bodyH = "<h1 class='msgbox_head'><a onClick='closeMsgBox(\"MsgBoxAlertCallBack\");' class='msgbox_close'></a></h1>";
    $(bodyDiv).append(bodyH);
    
    var bodyD = $("<div></div>");
    bodyD.text(msg);
    bodyD.appendTo(bodyDiv);
    
    var button = "<h1 class='msgbox_foot'><input type='button' value='确定' class='msgbox_btn01'/></h1>";
    $(bodyDiv).append(button);
    
    bodyDiv.appendTo(parentDiv);
    parentDiv.appendTo("body");
    
    $(".msgbox_btn01").on("click", function() {
    	closeMsgBox("MsgBoxAlertCallBack");
    	callback();
    });
}

function Confirm(msg, callback,params) {
	if(!closeAlertConfirm()) {
		return;
	}
	 var shadeDiv = $("<div></div>");
	 shadeDiv.attr("id","MsgBoxConfirmShade");
	 shadeDiv.attr("class","msgboxshade");
	 shadeDiv.appendTo("body");
	 
    var parentDiv = $("<div></div>");
    parentDiv.attr("id","MsgBoxConfirm");
    parentDiv.attr("class","msgboxbg");
    parentDiv.css("top","50%");
    parentDiv.css("width","300px");
    parentDiv.css("margin-left","-150px");
    
    var bodyDiv = $("<div></div>");
    bodyDiv.attr("class","msgbox");
    
    var bodyH = "<h1 class='msgbox_head'><a onClick='closeMsgBox(\"MsgBoxConfirm\");' class='msgbox_close'></a></h1>";
    $(bodyDiv).append(bodyH);
    
    var bodyD = $("<div></div>");
    bodyD.text(msg);
    bodyD.appendTo(bodyDiv);
    
    var button = "<h1 class='msgbox_foot'><input type='button' onClick='closeMsgBox(\"MsgBoxConfirm\")' value='取消'/><input type='button' value='确定' class='msgbox_btn01'/></h1>";
    $(bodyDiv).append(button);
    
    bodyDiv.appendTo(parentDiv);
    parentDiv.appendTo("body");
    
    $(".msgbox_btn01").on("click", function() {
    	closeMsgBox("MsgBoxConfirm");
    	callback(params);
    });
}