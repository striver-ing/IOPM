package cn.com.pattek.core.struts2;

import java.io.BufferedInputStream;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.Collection;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.struts2.ServletActionContext;
import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpStatus;
import org.apache.commons.httpclient.methods.PostMethod;
import org.apache.log4j.Logger;

import cn.com.pattek.core.ibatis.QueryUtil;
import cn.com.pattek.core.page.Pagination;
import cn.com.pattek.core.struts2.JsonUtils;

import com.opensymphony.xwork2.Action;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.Validateable;
import com.opensymphony.xwork2.ValidationAware;
import com.opensymphony.xwork2.ValidationAwareSupport;

@SuppressWarnings( { "serial", "unchecked" })
public class BaseAction implements Action, java.io.Serializable, Validateable,
		ValidationAware {
	private static final Logger log = Logger.getLogger(BaseAction.class);
	private final ValidationAwareSupport validationAware = new ValidationAwareSupport();
	protected Long[] ids;
	protected Long id;
	protected Pagination pagination;
	protected List list;
	public static final String LIST = "list";
	public static final String EDIT = "edit";
	public static final String ADD = "add";
	public static final String SELECT = "select";
	public static final String QUERY = "query";
	public static final String LEFT = "left";
	public static final String RIGHT = "right";
	public static final String INDEX = "index";
	public static final String MAIN = "main";
	public static final String JSON = "json";
	/* 分页信息 */
	public int pageNum = 1;
	public int pageSize = 10;

	// 页面解析分页信息使用的方法
	public String getQueryStringWithoutPageNum() {
		Map<String, Object> m = getParameters();
		m.remove("pageNum");
		return QueryUtil.getQueryString(m);
	}

	public String getFullUrlWithoutPageNum() {
		return getRequest().getServletPath() + "?"
				+ getQueryStringWithoutPageNum();
	}

	public String getQueryStringWithoutPageInfo() {
		Map<String, Object> m = getParameters();
		m.remove("pageNum");
		m.remove("pageSize");
		return QueryUtil.getQueryString(m);
	}

	public String getFullUrlWithoutPageInfo() {
		return getRequest().getServletPath() + "?"
				+ getQueryStringWithoutPageInfo();
	}
	
	/**
	 * @param url
	 *            请求接口的地址
	 * @return 返回请求的数据
	 */
	@SuppressWarnings("static-access")
	public static String getHttpClientInfo(String url) {
		String ret = "";
		HttpClient httpClient = null;
		PostMethod method = null;
		try {
			httpClient = new HttpClient();
			method = new PostMethod(url);
			method.setDoAuthentication(true);
			method.setRequestHeader("Content-Type", "text/html;charset=UTF-8");
			httpClient.executeMethod(method);
			if (method.getStatusLine().getStatusCode() == HttpStatus.SC_OK) {
				ret = new String(method.getResponseBodyAsString());
			}
			method.releaseConnection();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return ret;
	}

	/**
	 * 验证批量操作
	 * 
	 * @return
	 */
	protected boolean vldBatch() {
		if (id == null && (ids == null || ids.length <= 0)) {
			addActionError("ID不能为空");
			return true;
		} else {
			if (id != null) {
				ids = new Long[] { id };
			}
		}
		return false;
	}

	/**
	 * 绕过Template,直接输出内容的简便函数.
	 */
	protected static String render(String text, String contentType) {
		try {
			HttpServletResponse response = ServletActionContext.getResponse();
			response.setContentType(contentType);
			response.getWriter().write(text);
		} catch (IOException e) {
			log.error(e.getMessage(), e);
		}
		return null;
	}

	/**
	 * 直接输出字符串.
	 */
	public static final String renderText(String text) {
		return render(text, "text/plain;charset=UTF-8");
	}

	/**
	 * 直接输出字符串GBK编码.
	 */
	protected String renderHtmlGBK(String html) {
		return render(html, "text/html;charset=GBK");
	}

	/**
	 * 直接输出XML.
	 */
	protected String renderXML(String xml) {
		return render(xml, "text/xml;charset=UTF-8");
	}

	/**
	 * 输出json字符串
	 * 
	 * @param pag
	 * @throws IOException
	 * 
	 */
	protected void objectToJson(Object pag) throws IOException {
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("text/html;charset=UTF-8");// 解决中文乱码
		response.getWriter().write(JsonUtils.fromObject(pag).replace("null", "\"\""));
		// log.info(JsonUtils.fromObject(pag));
	}

	/**
	 * 输出json字符串
	 * 
	 * @param pag
	 * @prama dateFormat
	 * @throws IOException
	 * 
	 */
	protected void objectToJson(Object pag, String dateFormat)
			throws IOException {
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("text/html;charset=UTF-8");// 解决中文乱码
		response.getWriter().write(JsonUtils.fromObject(pag, dateFormat));
		// log.info(JsonUtils.fromObject(pag));
	}

	/**
	 * 输出json字符串
	 * 
	 * @param pag
	 * @throws IOException
	 * 
	 */
	protected void arrayToJson(Object List) throws IOException {
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("text/html;charset=UTF-8");// 解决中文乱码
		response.getWriter().write(JsonUtils.fromArray(List));
		log.info(JsonUtils.fromArray(List));
	}

	protected void objectToExcel(String fileName) throws IOException {
		HttpServletResponse response = ServletActionContext.getResponse();
		try {
			response.reset();
			response.setContentType("application/msexcel");
			response.setHeader("Content-Disposition", "attachment; filename="
					+ fileName);
			OutputStream os = response.getOutputStream();
			FileInputStream fis = new FileInputStream(fileName);
			BufferedInputStream bis = new BufferedInputStream(fis);
			byte[] buffer = new byte[1024];
			while (bis.read(buffer) > 0) {
				os.write(buffer);
				os.flush();
			}
			fis.close();
			bis.close();
			os.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	public Map<String, Object> getParameters() {
		return ActionContext.getContext().getParameters();
	}

	public HttpServletRequest getRequest() {
		return ServletActionContext.getRequest();
	}

	public String main() throws Exception {
		return MAIN;
	}

	public String change() throws Exception {
		return EDIT;
	}

	public String add() throws Exception {
		return ADD;
	}

	public String select() throws Exception {
		return SELECT;
	}

	public String execute() throws Exception {
		return SUCCESS;
	}

	public void setActionErrors(Collection errorMessages) {
		validationAware.setActionErrors(errorMessages);
	}

	public Collection getActionErrors() {
		return validationAware.getActionErrors();
	}

	public void setActionMessages(Collection messages) {
		validationAware.setActionMessages(messages);
	}

	public Collection getActionMessages() {
		return validationAware.getActionMessages();
	}

	public void setFieldErrors(Map errorMap) {
		validationAware.setFieldErrors(errorMap);
	}

	public Map getFieldErrors() {
		return validationAware.getFieldErrors();
	}

	public boolean hasActionErrors() {
		return validationAware.hasActionErrors();
	}

	public boolean hasActionMessages() {
		return validationAware.hasActionMessages();
	}

	public boolean hasErrors() {
		return validationAware.hasErrors();
	}

	public boolean hasFieldErrors() {
		return validationAware.hasFieldErrors();
	}

	public void addActionError(String anErrorMessage) {
		validationAware.addActionError(anErrorMessage);
	}

	public void addActionMessage(String aMessage) {
		validationAware.addActionMessage(aMessage);
	}

	public void addFieldError(String fieldName, String errorMessage) {
		validationAware.addFieldError(fieldName, errorMessage);
	}

	public void validate() {
	}

	public Long[] getIds() {
		return ids;
	}

	public void setIds(Long[] ids) {
		this.ids = ids;
	}

	public Pagination getPagination() {
		return pagination;
	}

	public void setPagination(Pagination pagination) {
		this.pagination = pagination;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public List getList() {
		return list;
	}

	public void setList(List list) {
		this.list = list;
	}

	public void setPageNum(int pageNum) {
		this.pageNum = pageNum;
	}

	public int getPageSize() {
		return pageSize;
	}

	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}

	public int getMaxPageSize() {
		return 1000;
	}

	public int getDefaultPageSize() {
		return 10;
	}
}