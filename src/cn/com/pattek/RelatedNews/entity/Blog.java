package cn.com.pattek.RelatedNews.entity;

public class Blog {
	private String pubtime;
    private String author;
    private String title;
    private String keywords;
    private String source_url;
    private Long interaction_num;
    private Long commtcount;
    private Long rttcount;
    private String cluesIds;
    private Long emotion;
    private Long transmitcount;
	public Long getTransmitcount() {
		return transmitcount;
	}
	public void setTransmitcount(Long transmitcount) {
		this.transmitcount = transmitcount;
	}
	public String getPubtime() {
		return pubtime;
	}
	public void setPubtime(String pubtime) {
		this.pubtime = pubtime;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getKeywords() {
		return keywords;
	}
	public void setKeywords(String keywords) {
		this.keywords = keywords;
	}
	public String getSource_url() {
		return source_url;
	}
	public void setSource_url(String sourceUrl) {
		source_url = sourceUrl;
	}
	public Long getInteraction_num() {
		return interaction_num;
	}
	public void setInteraction_num(Long interactionNum) {
		interaction_num = interactionNum;
	}
	public Long getCommtcount() {
		return commtcount;
	}
	public void setCommtcount(Long commtcount) {
		this.commtcount = commtcount;
	}
	public Long getRttcount() {
		return rttcount;
	}
	public void setRttcount(Long rttcount) {
		this.rttcount = rttcount;
	}
	public String getCluesIds() {
		return cluesIds;
	}
	public void setCluesIds(String cluesIds) {
		this.cluesIds = cluesIds;
	}
	public Long getEmotion() {
		return emotion;
	}
	public void setEmotion(Long emotion) {
		this.emotion = emotion;
	}
	
	
    
}
