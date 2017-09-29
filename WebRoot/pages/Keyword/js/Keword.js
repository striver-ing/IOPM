//角色分页
function pageRole(index){
	if(index<0){index=1;}
	document.getElementById("start").value = index;
	document.getElementById("searchRole").action = "/IOPM/app/appRoles_getRoles.action";
	document.getElementById("limitValue").value =$("#pageSizeSelect").val();
	document.getElementById("searchRole").submit();
}