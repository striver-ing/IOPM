package cn.com.pattek.user.action;

import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.apache.struts2.ServletActionContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.opensymphony.xwork2.ActionContext;

import cn.com.pattek.user.service.SystemService;
import cn.com.pattek.user.entity.AppSystem;
import cn.com.pattek.core.page.Pagination;
import cn.com.pattek.core.struts2.BaseAction;
import cn.com.pattek.core.struts2.JsonUtils;

@SuppressWarnings("serial")
@Controller("PermissionsAct")
public class PermissionsAct extends BaseAction{

	protected Logger log = Logger.getLogger(getClass());
	@Autowired
	private SystemService appSystemService;
	private Pagination PermissionPgn;
	private Pagination PermissionPgnLevel1;
	private Pagination PermissionPgnLevel2;
	private int start = -1;
	private int limit = -1;
	private int totalCount = 0;
	private Long roleId;
	private Long sourceId;
	

	//获取权限详细信息
	@SuppressWarnings("unchecked")
	public String getAllSystems() throws Exception {
		Map<String, Object> session = ActionContext.getContext().getSession();
		HttpServletRequest request = ServletActionContext.getRequest();
		List<AppSystem> userList = new ArrayList<AppSystem>();
		Map<String, Object> taskMap = new HashMap();
		taskMap.put("start", start);
		taskMap.put("limit", limit);
		
		totalCount = appSystemService.getSystemsCount(taskMap);
		userList = appSystemService.getAllSystems(taskMap);
		
		if(roleId !=null){
			taskMap.put("roleId",roleId);
		}
		//有角色ID的
		List<AppSystem> userList1 = appSystemService.getAllSystems(taskMap);
		if(roleId != null && !"".equals(roleId)){
			for(AppSystem sys : userList) {
				for(AppSystem sys1 : userList1) {
					if(sys1.getSystemID().equals(sys.getSystemID())) {
						sys.setChecked("true");
					}	
				}
			}
			if(session.containsKey("userList1")){
				session.remove("userList1");
			}
			session.put("userList1", userList);
		}
		PermissionPgn = new Pagination(start, limit, totalCount);
		PermissionPgn.setList(userList);
		System.out.println("roleId=========="+roleId);
//		this.objectToJson(p);
//		return "getAllSystems";
		return null;
	}
	
//	public void clearSession() throws Exception{
//		Map<String, Object> session = ActionContext.getContext().getSession();
//		if(session.containsKey("userList1")){
//			session.remove("userList1");
//			System.out.println("clearSession");
//		}
//	}
	
	//获取角色权限的json数据
	public void getAllSystemsJson() throws Exception{
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("text/html;charset=UTF-8");// 解决中文乱码
		List<AppSystem> userList = new ArrayList<AppSystem>();
		Map<String, Object> taskMap = new HashMap<String, Object>();
		taskMap.put("start", start);
		taskMap.put("limit", limit);
		System.out.println("start"+start+"\t"+limit);
		userList = appSystemService.getAllSystems(taskMap);
		if(roleId !=null){
			taskMap.put("roleId",roleId);
		}
		//有角色ID的
		List<AppSystem> userList1 = appSystemService.getAllSystems(taskMap);
		if(roleId != null && !"".equals(roleId)){
			for(AppSystem sys : userList) {
				for(AppSystem sys1 : userList1) {
					if(sys1.getSystemID().equals(sys.getSystemID())) {
						sys.setChecked("true");
					}
				}
			}
		}
		PrintWriter out = response.getWriter();
		out.write(JsonUtils.fromArray(userList));
		out.flush();
		out.close();
		System.out.println("json="+JsonUtils.fromArray(userList));
	}
	
	//获取权限详细信息
	@SuppressWarnings("unchecked")
	public String getAllSystemsLevel1() throws Exception {	
		List<AppSystem> userListLevel1 = new ArrayList<AppSystem>();
		ActionContext.getContext().put("userListLevel1", userListLevel1);
		
		Map<String, Object> taskMap = new HashMap();
		taskMap.put("start", start);
		taskMap.put("limit", limit);
		
		
		totalCount = appSystemService.getSystemsCount(taskMap);
		//所有的一级菜单
		userListLevel1 = appSystemService.getAllSystemsLevel1(taskMap);
		
		
		taskMap.put("sourceId",9);
		//所有的二级菜单
		List<AppSystem> userListLevel2 = appSystemService.getAllSystemsLevel2(taskMap);
		if(roleId !=null){
			taskMap.put("roleId",roleId);
		}
		
		
		//有角色ID的 一级菜单（被回显）
		List<AppSystem> userList1 = appSystemService.getAllSystemsLevel1(taskMap);
		//把带有角色	ID的权限中checked属性设置为true
		if(roleId != null && !"".equals(roleId)){
			for(AppSystem sys : userListLevel1) {
				for(AppSystem sys1 : userList1) {
					if(sys1.getSystemID().equals(sys.getSystemID())) {
						sys.setChecked("true");
					}
				}
			}
		}
		
		
		//有角色ID的 二级菜单（被回显）
		List<AppSystem> userList9 = appSystemService.getAllSystemsLevel2(taskMap);
		//把带有角色	ID的权限中checked属性设置为true
		if(roleId != null && !"".equals(roleId)){
			for(AppSystem sys : userListLevel2) {
				for(AppSystem sys1 : userList9) {
					if(sys1.getSystemID().equals(sys.getSystemID())) {
						sys.setChecked("true");
					}
				}
			}
		}
		
		PermissionPgnLevel1 = new Pagination(start, limit, totalCount);
		PermissionPgnLevel1.setList(userListLevel1);
		
		PermissionPgnLevel2 = new Pagination(start, limit, totalCount);
		PermissionPgnLevel2.setList(userListLevel2);
		
		
		return "getAllSystemsLevel1";
	}
	
	//获取权限详细信息
	@SuppressWarnings("unchecked")
	public String getAllSystemsLevel2() throws Exception {
		
		Map<String, Object> session = ActionContext.getContext().getSession();
		session.put("userListLevel2", null);
		List<AppSystem> userListLevel2 = new ArrayList<AppSystem>();
		ActionContext.getContext().put("userListLevel2", userListLevel2);
		session.put("userListLevel2", userListLevel2);

		Map<String, Object> taskMap = new HashMap();
		taskMap.put("start", start);
		taskMap.put("limit", limit);
		
		totalCount = appSystemService.getSystemsCount(taskMap);
		userListLevel2 = appSystemService.getAllSystems(taskMap);
		
		if(roleId !=null){
			taskMap.put("roleId",roleId);
		}
		//有角色ID的
		List<AppSystem> userList1 = appSystemService.getAllSystemsLevel2(taskMap);
		if(roleId != null && !"".equals(roleId)){
			for(AppSystem sys : userListLevel2) {
				for(AppSystem sys1 : userList1) {
					if(sys1.getSystemID().equals(sys.getSystemID())) {
						sys.setChecked("true");
					}
				}
			}
		}
		PermissionPgnLevel2 = new Pagination(start, limit, totalCount);
		PermissionPgnLevel2.setList(userListLevel2);
//		this.objectToJson(p);
		return "getAllSystemsLevel2";
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
	public Long getRoleId() {
		return roleId;
	}

	public void setRoleId(Long roleId) {
		this.roleId = roleId;
	}

	public Pagination getPermissionPgn() {
		return PermissionPgn;
	}

	public void setPermissionPgn(Pagination permissionPgn) {
		PermissionPgn = permissionPgn;
	}

	public SystemService getAppSystemService() {
		return appSystemService;
	}

	public void setAppSystemService(SystemService appSystemService) {
		this.appSystemService = appSystemService;
	}

	public Pagination getPermissionPgnLevel1() {
		return PermissionPgnLevel1;
	}

	public void setPermissionPgnLevel1(Pagination permissionPgnLevel1) {
		PermissionPgnLevel1 = permissionPgnLevel1;
	}

	public Pagination getPermissionPgnLevel2() {
		return PermissionPgnLevel2;
	}

	public void setPermissionPgnLevel2(Pagination permissionPgnLevel2) {
		PermissionPgnLevel2 = permissionPgnLevel2;
	}

	public Long getSourceId() {
		return sourceId;
	}

	public void setSourceId(Long sourceId) {
		this.sourceId = sourceId;
	}
	
}
