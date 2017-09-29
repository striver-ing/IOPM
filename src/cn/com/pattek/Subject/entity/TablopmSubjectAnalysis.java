package cn.com.pattek.Subject.entity;

import java.util.Date;

public class TablopmSubjectAnalysis {
	/** 专题名称 **/
	private String name;
	/** 开始时间 **/
	private Date startTime;
	/** 结束时间 **/
	private Date endTime;
	/** 包含的关键词 （空格表示与， 逗号表示或） **/
	private String keyword1;
	/** 不包含的关键词（空格表示与 ，逗号表示或） **/
	private String keyword2;
	

	/** 主键 **/
	private Long id;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Date getStartTime() {
		return startTime;
	}
	public void setStartTime(Date startTime) {
		this.startTime = startTime;
	}
	public Date getEndTime() {
		return endTime;
	}
	public void setEndTime(Date endTime) {
		this.endTime = endTime;
	}
	public String getKeyword1() {
		return keyword1;
	}
	public void setKeyword1(String keyword1) {
		this.keyword1 = keyword1;
	}
	public String getKeyword2() {
		return keyword2;
	}
	public void setKeyword2(String keyword2) {
		this.keyword2 = keyword2;
	}
	/** 类别**/
	private long Info_Type;
	/** 站点 **/
	private String WebSite_Name;
	/** 标题**/
	private String Title;
	/** 发布时间 **/
	private Date release_time;
	/** 路径 **/
	private String url;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public long getInfo_Type() {
		return Info_Type;
	}
	public void setInfo_Type(long info_Type) {
		Info_Type = info_Type;
	}
	public String getWebSite_Name() {
		return WebSite_Name;
	}
	public void setWebSite_Name(String webSite_Name) {
		WebSite_Name = webSite_Name;
	}
	public String getTitle() {
		return Title;
	}
	public void setTitle(String title) {
		Title = title;
	}
	public Date getRelease_time() {
		return release_time;
	}
	public void setRelease_time(Date release_time) {
		this.release_time = release_time;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	@Override
	public String toString() {
		return "TablopmSubjectAnalysis_user [id=" + id + ", Info_Type=" + Info_Type + ", WebSite_Name=" + WebSite_Name
				+ ", Title=" + Title + ", release_time=" + release_time + ", url=" + url + "]";
	}
	
}
