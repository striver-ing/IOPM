package cn.com.pattek.core.struts2;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.struts2.StrutsConstants;
import org.apache.struts2.StrutsStatics;

import com.googlecode.jsonplugin.JSONUtil;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.Result;
import com.opensymphony.xwork2.inject.Inject;
import com.opensymphony.xwork2.util.ValueStack;

@SuppressWarnings("serial")
public class ExtAjaxResult implements Result {
	private static final Log log = LogFactory.getLog(ExtAjaxResult.class);
	// private boolean ignoreHierarchy = true;
	private boolean enumAsBean = false;
	private String encoding = "gbk";
	private String jsonRoot = "jsonRoot";
	private String recordRoot = "recordRoot";
	private String recordRootName = "_root";
	private String dataFields = "_fields";
	private String recordId = "_id";
	private String recordTotal = "_total";

	@Inject(StrutsConstants.STRUTS_I18N_ENCODING)
	public void setEncoding(String encoding) {
		this.encoding = encoding;
	}

	public List<Pattern> excludeProperties(String commaDelim) {
		List<String> excludePatterns = JSONUtil.asList(commaDelim);
		if (excludePatterns == null || excludePatterns.size() <= 0) {
			return null;
		}
		List<Pattern> exclude = new ArrayList<Pattern>();
		for (String pattern : excludePatterns) {
			exclude.add(Pattern.compile(pattern));
		}
		return exclude;
	}

	public void execute(ActionInvocation invocation) throws Exception {
		ActionContext actionContext = invocation.getInvocationContext();
		HttpServletResponse response = (HttpServletResponse) actionContext
				.get(StrutsStatics.HTTP_RESPONSE);
		try {
			ValueStack stack = invocation.getStack();
			Object jsonObject = stack.findValue(this.jsonRoot);
			Object recordObject = stack.findValue(this.recordRoot);
			String records = (String) stack.findValue(this.recordRootName);
			String fields = (String) stack.findValue(this.dataFields);
			String id = (String) stack.findValue(this.recordId);
			String total = (String) stack.findValue(this.recordTotal);
			if (log.isDebugEnabled()) {
				StringBuilder b = new StringBuilder();
				b.append("records=").append(records).append("\tid=").append(id)
						.append("\ttotal=").append(total).append("\nfields=")
						.append(fields);
				log.debug(b.toString());
			}
			JsonWriter writer = new JsonWriter();
			String json = writer.write(jsonObject, recordObject, records,
					fields, id, total, null);
			writeJsonToResponse(response, json);
		} catch (IOException exception) {
			log.error(exception);
			throw exception;
		}
	}

	private void writeJsonToResponse(HttpServletResponse response, String json)
			throws IOException {
		json = json == null ? "" : json;
		if (log.isDebugEnabled()) {
			log.debug("[JSON]" + json);
		}
		response.setContentLength(json.getBytes(this.encoding).length);
		response.setContentType("application/json;charset=" + this.encoding);
		PrintWriter out = response.getWriter();
		out.print(json);
	}

	/**
	 * Retrieve the encoding
	 * <p/>
	 * 
	 * @return The encoding associated with this template (defaults to the value
	 *         of 'struts.i18n.encoding' property)
	 */
	protected String getEncoding() {
		return this.encoding;
	}

	/**
	 * @return OGNL expression of root object to be serialized
	 */
	public String getRoot() {
		return this.jsonRoot;
	}

	/**
	 * Sets the root object to be serialized, defaults to the Action
	 * 
	 * @param root
	 *            OGNL expression of root object to be serialized
	 */
	public void setRoot(String root) {
		this.jsonRoot = root;
	}

	public String getRecordRoot() {
		return recordRoot;
	}

	public void setRecordRoot(String recordRoot) {
		this.recordRootName = recordRoot;
	}

	public String getDataFields() {
		return dataFields;
	}

	public void setDataFields(String dataFields) {
		this.dataFields = dataFields;
	}

	public String getRecordId() {
		return recordId;
	}

	public void setRecordId(String recordId) {
		this.recordId = recordId;
	}

	public String getRecordTotal() {
		return recordTotal;
	}

	public void setRecordTotal(String recordTotal) {
		this.recordTotal = recordTotal;
	}

	public boolean isEnumAsBean() {
		return enumAsBean;
	}

	public void setEnumAsBean(boolean enumAsBean) {
		this.enumAsBean = enumAsBean;
	}

}
