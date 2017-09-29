package cn.com.pattek.NetHotSpot.entity;

public class Hot {
	private Long id;
    private String kw; //标题
    private String kg; //关键字
    private Long hot; //热度
    private Long weight;  //相关度
    private Long pointNumber;//点赞数
    private Long noPointNumber;//不点赞数
    private Long acceptcount;
    private Long unacceptcount;
    private Long watchcount;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getWeight() {
		return weight;
	}
	public void setWeight(Long weight) {
		this.weight = weight;
	}
	public String getKw() {
		return kw;
	}
	public void setKw(String kw) {
		this.kw = kw;
	}
	public String getKg() {
		return kg;
	}
	public void setKg(String kg) {
		this.kg = kg;
	}
	public Long getHot() {
		return hot;
	}
	public void setHot(Long hot) {
		this.hot = hot;
	}
	public Long getPointNumber() {
		return pointNumber;
	}
	public void setPointNumber(Long pointNumber) {
		this.pointNumber = pointNumber;
	}
	public Long getNoPointNumber() {
		return noPointNumber;
	}
	public void setNoPointNumber(Long noPointNumber) {
		this.noPointNumber = noPointNumber;
	}
	public Long getAcceptcount() {
		return acceptcount;
	}
	public void setAcceptcount(Long acceptcount) {
		this.acceptcount = acceptcount;
	}
	public Long getUnacceptcount() {
		return unacceptcount;
	}
	public void setUnacceptcount(Long unacceptcount) {
		this.unacceptcount = unacceptcount;
	}
	public Long getWatchcount() {
		return watchcount;
	}
	public void setWatchcount(Long watchcount) {
		this.watchcount = watchcount;
	}
    
}
