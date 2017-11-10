package cn.com.pattek.NetHotSpot.entity;

public class AllHot {
	private String kw;
	private Integer hot;
	private Long infoIds;
	private Long watchCount;
	public Long getWatchCount() {
		return watchCount;
	}

	public void setWatchCount(Long watchCount) {
		this.watchCount = watchCount;
	}

	public String getKw() {
		return kw;
	}

	public void setKw(String kw) {
		this.kw = kw;
	}

	public Integer getHot() {
		return hot;
	}

	public void setHot(Integer hot) {
		this.hot = hot;
	}

	public Long getInfoIds() {
		return infoIds;
	}

	public void setInfoIds(Long infoIds) {
		this.infoIds = infoIds;
	}

}
