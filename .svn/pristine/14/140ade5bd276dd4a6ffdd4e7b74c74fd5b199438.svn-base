package cn.com.pattek.user.action;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;


import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.apache.struts2.ServletActionContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import cn.com.pattek.user.service.RoleService;

import cn.com.pattek.user.entity.RolePermissions;
import cn.com.pattek.user.entity.Roles;
import cn.com.pattek.core.page.Pagination;
import cn.com.pattek.core.struts2.BaseAction;
@Controller("AppRolesAct")
public class AppRolesAct extends BaseAction{

	protected Logger log = Logger.getLogger("db");
	@Autowired
	private RoleService appRolesService;
	private Pagination rolePgn;
	private Long roleId;
	private String roleName;
	private String description;
	private String permissionIds;
	
	private int start = 0;
	private int limit = 10;
	private int totalCount = 0;
	private Roles bean;
	private String keyword;
	
	//获取所有角色
	public String getRole() throws Exception{
		List<Roles> roleList = new ArrayList<Roles>();
		roleList = appRolesService.getRole();
		this.arrayToJson(roleList);
		return null;
	}
	
	//获取角色详细信息
	@SuppressWarnings("unchecked")
	public String getRoles() throws Exception {
		List<Roles> roleList = new ArrayList<Roles>();
		Map<String, Object> taskMap = new HashMap();
		taskMap.put("start", start+1);
		taskMap.put("limit", limit);
		if(roleName !=null && roleName.length() > 0){
			//roleName = URLDecoder.decode(roleName,"utf-8");
//			roleName =  new String(roleName.getBytes("ISO-8859-1"),"utf-8");
			taskMap.put("roleName",roleName);
		}
		if(roleId !=null && !"".equals(roleId)){
			Pattern pattern = Pattern.compile("[0-9]*");
			Matcher isNum = pattern.matcher(roleId.toString());
			if(isNum.matches()){
				taskMap.put("roleId", roleId);
			}
		}
		totalCount = appRolesService.getRoleCount(taskMap);
		roleList = appRolesService.getAllRoles(taskMap);
		for(int i=0;i<roleList.size();i++){
			Roles r= roleList.get(i);
			String permissionsIdStr=appRolesService.getRolePermission(r.getRoleId());
			r.setPermissionsIdStr(permissionsIdStr);
		}
		rolePgn = new Pagination(start, limit, totalCount);
		rolePgn.setList(roleList);
//		this.objectToJson(p);
		log.info("模块管理-角色权限管理-查询角色");
		return "getRoles";
	}
	//增加/修改角色
	@SuppressWarnings("unchecked")
	public String saveUpdateRole() throws Exception {
		HttpServletResponse response = ServletActionContext.getResponse();
		Map<String, Object> roleMap = new HashMap();
		Roles rs = new Roles();
		rs.setRoleId(roleId);
		rs.setRoleName(roleName);
		rs.setDescription(description);
		System.out.println(rs.getRoleId()+"\t"+rs.getRoleName()+"\t"+rs.getDescription());
		roleMap.put("roleId", roleId);
		roleMap.put("roleName", roleName);
		int num = appRolesService.selectRoleByName(roleMap);
		if (num > 0) {
			response.getWriter().write("对不起,已存在该登录名");
		}else{
			if (rs.getRoleId() != null && !"".equals(rs.getRoleId() + "")) {
				appRolesService.updateRole(rs);
				log.info("模块管理-角色权限管理-修改角色");
			} else {
				appRolesService.addRoles(rs);
				log.info("模块管理-角色权限管理-添加角色");
			}
		
		response.setContentType("text/html;charset=UTF-8");// 解决中文乱码
		response.getWriter().print("操作成功！");
		}
		return null;
	}
	//删除角色及角色和权限的关系
	public String deleteRole()throws Exception{
		HttpServletResponse response = ServletActionContext.getResponse();
		int count = appRolesService.selectRoleByUser(roleId);
		
		if(count > 0){
			response.getWriter().write("该角色被用户使用，不能直接删除");
		}else{
			appRolesService.deleteRole(roleId);
			log.info("模块管理-角色权限管理-删除角色");
		
		response.setContentType("text/html;charset=UTF-8");// 解决中文乱码
		response.getWriter().print("操作成功！");
		}
		return null;
	}
	
	//角色授权
	@SuppressWarnings("unchecked")
	public String RoleAuthorize()throws Exception{
		HttpServletResponse response = ServletActionContext.getResponse();
		appRolesService.deleteRolePermissions(roleId);
//		String [] pid=permissionIds.split(",");
//		List<String> idList=new ArrayList<String>();
//		for(int i=0;i<pid.length;i++){
//			if(pid[i]!=null&&!pid[i].equals("")){
//				idList.add(pid[i]);
//			}
//		}
		String [] pid=permissionIds.split(",");
		List<Integer> idList=new ArrayList<Integer>();
		StringBuffer sb=new StringBuffer();
		for(int i=0;i<pid.length;i++){
			if(pid[i]!=null&&!pid[i].equals("")){
				idList.add(Integer.parseInt(pid[i]));
			}
		}
		List list=appRolesService.getPermissionIds(idList);
		if(list!=null){
			for(int i=0;i<list.size();i++){
				String str=list.get(i).toString();
				String permId=str.substring(str.indexOf("=")+1, str.indexOf("}"));
				RolePermissions rp = new RolePermissions();
				rp.setRoleId(roleId);
				rp.setPermissionId(Long.parseLong(permId));
				appRolesService.addRolePerms(rp);
				log.info("模块管理-角色权限管理-角色授权");
			}
		}
		response.setContentType("text/html;charset=UTF-8");// 解决中文乱码
		response.getWriter().print("授权成功");
		return null;
	}
	
	public Roles getBean() {
		return bean;
	}

	public void setBean(Roles bean) {
		this.bean = bean;
	}

	public Long getRoleId() {
		return roleId;
	}

	public void setRoleId(Long roleId) {
		this.roleId = roleId;
	}

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	public String getPermissionIds() {
		return permissionIds;
	}

	public void setPermissionIds(String permissionIds) {
		this.permissionIds = permissionIds;
	}

	public int getStart() {
		return start;
	}

	public void setStart(int start) {
		this.start = start;
	}

	public int getLimit() {
		return limit;
	}

	public void setLimit(int limit) {
		this.limit = limit;
	}

	public int getTotalCount() {
		return totalCount;
	}

	public void setTotalCount(int totalCount) {
		this.totalCount = totalCount;
	}

	public Pagination getRolePgn() {
		return rolePgn;
	}

	public void setRolePgn(Pagination rolePgn) {
		this.rolePgn = rolePgn;
	}

	public String getKeyword() {
		return keyword;
	}

	public void setKeyword(String keyword) {
		this.keyword = keyword;
	}

	public RoleService getAppRolesDao() {
		return appRolesService;
	}

	public void setAppRolesDao(RoleService appRolesService) {
		this.appRolesService = appRolesService;
	}
}
