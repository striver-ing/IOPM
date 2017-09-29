package cn.com.pattek.core.struts2;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import net.sf.json.JsonConfig;

/**
 * 
 * @author tianxiaoliang
 * 
 * @created Jan 19, 2011
 */
public class JsonUtils {
	/**
	 * 对对象json转换
	 * 
	 * @param o
	 * @return
	 * 
	 */
	public static String fromObject(Object o) {
		JSONObject json = JSONObject.fromObject(o);
		return json.toString();
	}

	/**
	 * 对对象json转换
	 * @param dateFormat
	 * @param o
	 * @return
	 * 
	 */
	public static String fromObject(Object o,String dateFormat) {
		JsonConfig cfg=new JsonConfig();
		cfg.registerJsonValueProcessor(java.sql.Timestamp.class,new DateJson(dateFormat));  
		cfg.registerJsonValueProcessor(java.util.Date.class, new DateJson("yyyy-MM-dd"));
		JSONObject json = JSONObject.fromObject(o, cfg);
		return json.toString();
	}
	
	
	/**
	 * 对list转换
	 * 
	 * @param o
	 * @return
	 * 
	 */
	public static String fromArray(Object o) {
		JsonConfig cfg=new JsonConfig();
		cfg.registerJsonValueProcessor(java.sql.Timestamp.class,new DateJson());  
		JSONArray json = JSONArray.fromObject(o,cfg);
		return json.toString();
	}
}
