package cn.com.pattek.RelatedNews.entity;

public class AtCount {
    private Long count;
    private Long emotion;
    private Long info_type;
    private Long zero_id;
    private Long first_id;
    private Long second_id;
    
	public Long getFirst_id() {
		return first_id;
	}
	public void setFirst_id(Long firstId) {
		first_id = firstId;
	}
	public Long getSecond_id() {
		return second_id;
	}
	public void setSecond_id(Long secondId) {
		second_id = secondId;
	}
	public Long getZero_id() {
		return zero_id;
	}
	public void setZero_id(Long zeroId) {
		zero_id = zeroId;
	}
	public Long getCount() {
		return count;
	}
	public void setCount(Long count) {
		this.count = count;
	}
	public Long getEmotion() {
		return emotion;
	}
	public void setEmotion(Long emotion) {
		this.emotion = emotion;
	}
	public Long getInfo_type() {
		return info_type;
	}
	public void setInfo_type(Long infoType) {
		info_type = infoType;
	}
    
}
