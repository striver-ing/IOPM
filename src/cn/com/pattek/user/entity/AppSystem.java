package cn.com.pattek.user.entity;

import java.util.List;



@SuppressWarnings("serial")
public class AppSystem implements java.io.Serializable {

	private Long systemID;
	private String systemName;
	private String url;  
	private String description;
	private Long sourceId;
	private List<AppSystem> modulePerm;
	private String imageUrl;
	
	private String checked = "false";

	public AppSystem(){}

	
	
	public Long getSourceId() {
		return sourceId;
	}



	public void setSourceId(Long sourceId) {
		this.sourceId = sourceId;
	}



	public Long getSystemID() {
		return systemID;
	}

	public void setSystemID(Long systemID) {
		this.systemID = systemID;
	}

	public String getSystemName() {
		return systemName;
	}

	public void setSystemName(String systemName) {
		this.systemName = systemName;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public List<AppSystem> getModulePerm() {
		return modulePerm;
	}

	public void setModulePerm(List<AppSystem> modulePerm) {
		this.modulePerm = modulePerm;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public String getChecked() {
		return checked;
	}

	public void setChecked(String checked) {
		this.checked = checked;
	}
	
	
}
