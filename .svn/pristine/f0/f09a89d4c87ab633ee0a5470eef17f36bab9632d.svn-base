package cn.com.pattek.core.struts2;

import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import net.sf.json.JsonConfig;
import net.sf.json.processors.JsonValueProcessor;

public class DateJson implements JsonValueProcessor {  
    public static final String DEFAULT_DATE_PATTERN = "yyyy-MM-dd HH:mm:ss.SSS";   
    private DateFormat dateFormat;   
    public DateJson() {   
    	this(DEFAULT_DATE_PATTERN);   
    }   
    public DateJson(String datePattern) {   
        try {  
            dateFormat = new SimpleDateFormat(datePattern);  
        } catch (Exception ex) {  
            dateFormat = new SimpleDateFormat(DEFAULT_DATE_PATTERN);  
        }  
    }  
      
    public Object processArrayValue(Object value, JsonConfig jsonConfig) {  
        return process(value);  
    }  
    public Object processObjectValue(String key, Object value,JsonConfig jsonConfig) {   
            return process(value);  
    }  
      
    private Object process(Object value) {  
        if(value instanceof Timestamp){  
            return dateFormat.format((Timestamp) value);  
        }else if(value instanceof Date) { 
            return dateFormat.format((Date) value);  
        }else if(value==null){ 
            return "";  
        }else{  
            return value.toString();
        }
    }
}   

