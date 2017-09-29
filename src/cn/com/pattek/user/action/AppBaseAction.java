package cn.com.pattek.user.action;


import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Controller;

import cn.com.pattek.core.struts2.BaseAction;

@SuppressWarnings("serial")

public class AppBaseAction extends BaseAction {

	public String cmd = "";
	protected Integer start = -1;
	protected Integer limit = -1;
	protected Map<String, Object> jsonRoot = new HashMap<String, Object>();
	public Map<String, Object> getJsonRoot() {
		return jsonRoot;
	}

	public void setJsonRoot(Map<String, Object> jsonRoot) {
		this.jsonRoot = jsonRoot;
	}

	public Integer getLimit() {
		return limit;
	}

	public void setLimit(Integer limit) {
		this.limit = limit;
	}

	public Integer getStart() {
		return start;
	}

	public void setStart(Integer start) {
		this.start = start;
	}

	public String execute() throws Exception {
		return SUCCESS;
	}
	
	public String getCmd() {
		return cmd;
	}

	public void setCmd(String cmd) {
		this.cmd = cmd;
	}
}
