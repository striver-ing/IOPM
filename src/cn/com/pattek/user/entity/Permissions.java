package cn.com.pattek.user.entity;

@SuppressWarnings({"serial"})
public class Permissions implements java.io.Serializable{

	private Long permId;

	private Long manuId;
	
	private Long moduleId;
	
	private Long systemId;

	public Long getPermId() {
		return permId;
	}

	public void setPermId(Long permId) {
		this.permId = permId;
	}

	public Long getManuId() {
		return manuId;
	}

	public void setManuId(Long manuId) {
		this.manuId = manuId;
	}

	public Long getModuleId() {
		return moduleId;
	}

	public void setModuleId(Long moduleId) {
		this.moduleId = moduleId;
	}

	public Long getSystemId() {
		return systemId;
	}

	public void setSystemId(Long systemId) {
		this.systemId = systemId;
	}
	
	
}
