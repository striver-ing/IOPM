package cn.com.pattek.user.action;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Timer;
import java.util.TimerTask;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.apache.struts2.ServletActionContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import cn.com.pattek.core.struts2.BaseAction;
import cn.com.pattek.core.tools.GetSystemInfo;

import cn.com.pattek.user.service.RoleService;
import cn.com.pattek.user.service.SystemService;
import cn.com.pattek.user.service.UserService;
import cn.com.pattek.user.entity.AppSystem;
import cn.com.pattek.user.entity.Notice;
import cn.com.pattek.user.entity.Users;

import com.opensymphony.xwork2.ActionContext;

@Controller("LoginAction")
public class LoginAction extends BaseAction{
	private UserService userService;
	private RoleService roleService;
	private SystemService appSystemService;
	private Long roleId;
	private String userName;
	private String password;
	private String errorInfo;
	private String yanzhengma;
	private String nav; 
	private String page; 
	private static Logger log = Logger.getLogger("db");
	private Integer isSaveUP=0;//是否记住密码
	private List<Notice> notice;
	
	//用于记录设备的IP和登录时间
	//private SafeSettingDao safeSettingDao;

	public List<Notice> getNotice() {
		return notice;
	}





	public void setNotice(List<Notice> notice) {
		this.notice = notice;
	}





	public String execute() throws Exception {
		
		  
		HttpServletRequest request = ServletActionContext.getRequest();
		Map<String, Object> session = ActionContext.getContext().getSession();
		session.put("login", null);
		session.put("rootMenulist", null);
		session.put("sMenulist", null);
		session.put("tMenulist", null);
		session.put("userName", null);
		session.put("errorInfo", null);
		session.put("user", null);
		Users user=null;
		if(userName!=null&&!"".equals(userName)&&password!=null&&!"".equals(password+"")){
			user=userService.login(userName, password);
		}
		
		if (user != null) {
		
		
			
			//获取一级菜单
			List<AppSystem> rootMenulist=appSystemService.getModulePerm(1l, user.getRoleId(),3l);
			//获取二级菜单
			List<AppSystem> sMenulist=appSystemService.getModulePerm(2l,user.getRoleId(),3l);
			
			session.put("rootMenulist", rootMenulist);
			session.put("sMenulist", sMenulist);
			
			
			
			
			
			
			
			
			Map<String, Object> taskMap = new HashMap();
			taskMap.put("start", 0);
			taskMap.put("limit", 30);
			
			session.put("login", user);
			session.put("userName", user.getUserName());
			Map<String,Object> noticeMap = new HashMap();
			noticeMap.put("dayNum", 1);
			noticeMap.put("show", null);
			notice = userService.getNoticeList(noticeMap);
			session.put("notice", notice);
			return SUCCESS;
			
		}else if(userName == null || "".equals(userName )){
			errorInfo = "用户名和密码不能为空";
			session.put("errorInfo", errorInfo);
			return LOGIN;
		}
		
		else {
			errorInfo = "用户名【" + userName + "】和密码不匹配";
			session.put("errorInfo", errorInfo);
			return LOGIN;
		}
		
	}
	
	





	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getErrorInfo() {
		return errorInfo;
	}
	public void setErrorInfo(String errorInfo) {
		this.errorInfo = errorInfo;
	}
	public String getYanzhengma() {
		return yanzhengma;
	}
	public void setYanzhengma(String yanzhengma) {
		this.yanzhengma = yanzhengma;
	}
	public String getNav() {
		return nav;
	}
	public void setNav(String nav) {
		this.nav = nav;
	}
	public String getPage() {
		return page;
	}
	public void setPage(String page) {
		this.page = page;
	}
	public Long getRoleId() {
		return roleId;
	}
	public void setRoleId(Long roleId) {
		this.roleId = roleId;
	}
	public Integer getIsSaveUP() {
		return isSaveUP;
	}
	public void setIsSaveUP(Integer isSaveUP) {
		this.isSaveUP = isSaveUP;
	}





	public UserService getUserService() {
		return userService;
	}




	@Autowired
	public void setUserService(UserService userService) {
		this.userService = userService;
	}





	public RoleService getRoleService() {
		return roleService;
	}




	@Autowired
	public void setRoleService(RoleService roleService) {
		this.roleService = roleService;
	}





	public SystemService getAppSystemService() {
		return appSystemService;
	}




	@Autowired
	public void setAppSystemService(SystemService appSystemService) {
		this.appSystemService = appSystemService;
	}
	
}
