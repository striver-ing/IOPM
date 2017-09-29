package cn.com.pattek.NetHotSpot.entity;

import java.util.List;
import java.util.Map;

public class HotEntity {
   private Long total;
   private String message;
   private String status;
   private List<Map<String,Object>> data;
public Long getTotal() {
	return total;
}
public void setTotal(Long total) {
	this.total = total;
}
public String getMessage() {
	return message;
}
public void setMessage(String message) {
	this.message = message;
}
public String getStatus() {
	return status;
}
public void setStatus(String status) {
	this.status = status;
}
public List<Map<String, Object>> getData() {
	return data;
}
public void setData(List<Map<String, Object>> data) {
	this.data = data;
}
   
}
