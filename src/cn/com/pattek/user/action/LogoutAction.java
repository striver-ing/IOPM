package cn.com.pattek.user.action;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.opensymphony.xwork2.ActionContext;

/**
 * 
 * @author ouyang
 * 
 */
@SuppressWarnings({"serial","unused","unchecked"})
@Controller("LogoutAction")
public class LogoutAction extends AppBaseAction {

	protected Logger log = Logger.getLogger("db");
	
	public String execute() {
		// 预处理内容
		Map<String, Object> session = ActionContext.getContext().getSession();
		if(session != null) {
			session.clear();
		}
		log.info("用户登出");
		return SUCCESS;

	}
	
}
