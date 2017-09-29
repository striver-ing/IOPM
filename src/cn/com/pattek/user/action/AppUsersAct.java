package cn.com.pattek.user.action;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.apache.struts2.ServletActionContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import cn.com.pattek.core.page.Pagination;
import cn.com.pattek.core.struts2.BaseAction;
import cn.com.pattek.user.service.UserService;
import cn.com.pattek.user.entity.Users;
@Controller("AppUsersAct")
public class AppUsersAct extends BaseAction{

	
	private static Logger log = Logger.getLogger("db");
	@Autowired
	private UserService appUsersService;
	private Users bean;
	private Pagination userPgn;
	private String selectInfoString;
	private int start = 0;
	private int limit = 10;
	private int totalCount = 0;
	private String userName;
	private String fullName;
	private Long enable;
	private String password;
	private String roleName;
	private Long gender;
	private String email;
	private String qq;
	private String mobilephone;
	private String telephone;
	private String department;
	private String description;
	private Long enableId;
	private Long roleId;
	private Long userId;
	private String adminName;
	private String keyword;
	private String msn;
	private String checkName1;
	private String checkName;
	
	@SuppressWarnings("unchecked")
	public String getUsers() throws Exception {
		List<Users> userList = new ArrayList<Users>();
		Map<String, Object> taskMap = new HashMap();
		taskMap.put("start", start+1);
		taskMap.put("limit", limit);
		if(roleId !=null && !"".equals(roleId)){
			taskMap.put("roleId", roleId);
		}
		if(enableId !=null && !"".equals(enableId)){
			taskMap.put("enable", enableId);
		}
		if(checkName != null && checkName.trim().length() > 0){
//			taskMap.put("userName",new String(adminName.getBytes("iso8859-1"),"utf-8"));
			checkName1=checkName;
			taskMap.put("userName",checkName);
		}
		if(keyword != null && keyword.trim().length() > 0){
//			taskMap.put("fullName",new String(keyword.getBytes("iso8859-1"),"utf-8"));
			taskMap.put("fullName",keyword);
		}
		
		if(mobilephone != null && mobilephone.trim().length() > 0){
//			taskMap.put("mobilephone",new String(mobilephone.getBytes("iso8859-1"),"utf-8"));
			taskMap.put("mobilephone",mobilephone);
		}
		
		if(roleName !=null && roleName.length() > 0){
			taskMap.put("roleName",roleName);
		}
		
		totalCount = appUsersService.getUserCount(taskMap);
		userList = appUsersService.getAllUser(taskMap);
		if(userList != null){
			for(int i =0; i < userList.size(); i++){
			    Long sex = userList.get(i).getGender();
			    Long enable = userList.get(i).getEnable();
				if(sex != null && !"".equals(sex)){
					if(sex == 0L){
						userList.get(i).setSex("女");
					}else{
						userList.get(i).setSex("男");
					}
				}
				if(enable != null && !"".equals(enable)){
					if(enable == 0L){
						userList.get(i).setEnableStatus("禁用");
					}else{
						userList.get(i).setEnableStatus("启用");
					}
				}
			}
		}
		userPgn = new Pagination(start, limit, totalCount);
		userPgn.setList(userList);
		log.info("模块管理-用户管理-查询用户");
//		this.objectToJson(p);
		return "getUsers";
	}
	
	//获取所有用户名称
	public String getAllUserName() throws Exception{
		List<Users> userNameList = new ArrayList<Users>();
		userNameList = appUsersService.getUserNameJson();
		this.arrayToJson(userNameList);
		return null;
	}
//增加/修改用户
	
	@SuppressWarnings("unchecked")
	public String saveUpdateUser() throws Exception {
		HttpServletResponse response = ServletActionContext.getResponse();
		Map<String, Object> userMap = new HashMap();
		Users us = new Users();
		us.setUserName(userName);
		us.setPassword(password);
		us.setFullName(fullName);
		us.setGender(gender);
		us.setEmail(email);
		System.out.println("qq号码为"+qq);
		us.setQq(qq);
		us.setTelephone(telephone);
		us.setMobilephone(mobilephone);
		us.setDepartment(department);
		us.setRoleId(roleId);
		us.setRoleName(roleName);
		us.setEnable(enable);
		us.setUserId(userId);
		userMap.put("userId", userId);
		userMap.put("userName", userName);
		int num = appUsersService.selectUserByName(userMap);
		if (num > 0) {
			response.getWriter().write("对不起,已存在该登录名");
		}else{
			if (us.getUserId() != null && !"".equals(us.getUserId() + "")) {
				appUsersService.updateUser(us);
				log.info("模块管理-用户管理-修改用户");
				
			}else{
				//us.setEnable(1L);
				appUsersService.addUser(us);
				log.info("模块管理-用户管理-添加用户");
				
			 }
				response.setContentType("text/html;charset=UTF-8");// 解决中文乱码
				response.getWriter().print("操作成功");
				//log.info("修改成功");
			}
		
		return null;
	}
	//删除用户
	public String deleteUser()throws Exception{
		appUsersService.deleteUser(userId);
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("text/html;charset=UTF-8");// 解决中文乱码
		response.getWriter().print("删除成功");
		log.info("模块管理-用户管理-删除用户");
		
		return null;
	}
	//启动用户
	public String startUser()throws Exception{
		appUsersService.startUser(userId);
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("text/html;charset=UTF-8");// 解决中文乱码
		response.getWriter().print("{success:true,info:'启动成功'}");
		return null;
	}
	//禁用用户
	public String stopUser()throws Exception{
		appUsersService.stopUser(userId);
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("text/html;charset=UTF-8");// 解决中文乱码
		response.getWriter().print("{success:true,info:'禁用成功'}");
		return null;
	}
	public Logger getLog() {
		return log;
	}

	public void setLog(Logger log) {
		this.log = log;
	}

	public UserService getAppUsersDao() {
		return appUsersService;
	}

	public void setAppUsersDao(UserService appUsersService) {
		this.appUsersService = appUsersService;
	}

	public Users getBean() {
		return bean;
	}

	public void setBean(Users bean) {
		this.bean = bean;
	}

	public Pagination getUserPgn() {
		return userPgn;
	}

	public void setUserPgn(Pagination userPgn) {
		this.userPgn = userPgn;
	}

	public String getSelectInfoString() {
		return selectInfoString;
	}

	public void setSelectInfoString(String selectInfoString) {
		this.selectInfoString = selectInfoString;
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

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public Long getEnable() {
		return enable;
	}

	public void setEnable(Long enable) {
		this.enable = enable;
	}

	public String getPassword() {
		return password;
	}

	public String getCheckName() {
		return checkName;
	}

	public void setCheckName(String checkName) {
		this.checkName = checkName;
	}

	public String getCheckName1() {
		return checkName1;
	}

	public void setCheckName1(String checkName1) {
		this.checkName1 = checkName1;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public Long getGender() {
		return gender;
	}

	public void setGender(Long gender) {
		this.gender = gender;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getQq() {
		return qq;
	}

	public void setQq(String qq) {
		this.qq = qq;
	}

	public String getMobilephone() {
		return mobilephone;
	}

	public void setMobilephone(String mobilephone) {
		this.mobilephone = mobilephone;
	}

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Long getEnableId() {
		return enableId;
	}

	public void setEnableId(Long enableId) {
		this.enableId = enableId;
	}

	public Long getRoleId() {
		return roleId;
	}

	public void setRoleId(Long roleId) {
		this.roleId = roleId;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public String getAdminName() {
		return adminName;
	}

	public void setAdminName(String adminName) {
		this.adminName = adminName;
	}

	public String getKeyword() {
		return keyword;
	}

	public void setKeyword(String keyword) {
		this.keyword = keyword;
	}

	public void setMsn(String msn) {
		this.msn = msn;
	}

	public String getMsn() {
		return msn;
	}
	
	
	
}
