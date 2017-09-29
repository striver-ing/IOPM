package cn.com.pattek.NetHotSpot.entity;

import java.util.List;

public class HotList {
    private Long num;
    private List<Hot> data;
	public Long getNum() {
		return num;
	}
	public void setNum(Long num) {
		this.num = num;
	}
	public List<Hot> getData() {
		return data;
	}
	public void setData(List<Hot> data) {
		this.data = data;
	}
    
}
