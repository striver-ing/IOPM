package cn.com.pattek.core.struts2;

import java.util.HashMap;
import java.util.Map;

@SuppressWarnings("serial")
public class ExtAjaxAction extends BaseAction {
	protected Map<String, Object> jsonRoot = new HashMap<String, Object>();
	protected Object recordRoot;
	protected String _id;
	protected String _root;
	protected String _fields;
	protected String _total;

	public Map<String, Object> getJsonRoot() {
		return jsonRoot;
	}

	public void setJsonRoot(Map<String, Object> jsonRoot) {
		this.jsonRoot = jsonRoot;
	}

	public String get_id() {
		return _id;
	}

	public void set_id(String _id) {
		this._id = _id;
	}

	public String get_root() {
		return _root;
	}

	public void set_root(String _root) {
		this._root = _root;
	}

	public String get_fields() {
		return _fields;
	}

	public void set_fields(String _fields) {
		this._fields = _fields;
	}

	public String get_total() {
		return _total;
	}

	public void set_total(String _total) {
		this._total = _total;
	}

	public Object getRecordRoot() {
		return recordRoot;
	}

	public void setRecordRoot(Object recordRoot) {
		this.recordRoot = recordRoot;
	}
}
