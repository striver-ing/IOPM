package cn.com.pattek.KeyWords.entity;

import java.util.Date;

public class IopmKeyInfoEntity {
    private Long id;    //主键id
    private String name;    //名称
    private String keyword1;     //必须包含字段
    private String keyword2;     //至少包含一个的字段
    private String keyword3;     //不能包含的字段
    private Integer weight;    //权重
    private Long first_id;    //分类id
    private Integer total_msg;    //信息总量
    private Integer today_msg;    //今日信息量
    private Date update_time;    //关键词更新时间
    private Date record_time;    //关键词创建时间
    private Long second_id;    //二级分类id
    private Long zero_id;
    private String image_url;
	private String video_url;
	private String frequency_url; 
	private IopmClassify iopmClassify;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
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
	public String getKeyword3() {
		return keyword3;
	}
	public void setKeyword3(String keyword3) {
		this.keyword3 = keyword3;
	}
	public Integer getWeight() {
		return weight;
	}
	public void setWeight(Integer weight) {
		this.weight = weight;
	}

	public Integer getTotal_msg() {
		return total_msg;
	}
	public void setTotal_msg(Integer total_msg) {
		this.total_msg = total_msg;
	}
	public Integer getToday_msg() {
		return today_msg;
	}
	public void setToday_msg(Integer today_msg) {
		this.today_msg = today_msg;
	}
	public Date getUpdate_time() {
		return update_time;
	}
	public void setUpdate_time(Date update_time) {
		this.update_time = update_time;
	}
	public Date getRecord_time() {
		return record_time;
	}
	public void setRecord_time(Date record_time) {
		this.record_time = record_time;
	}
	public IopmClassify getIopmClassify() {
		return iopmClassify;
	}
	public void setIopmClassify(IopmClassify iopmClassify) {
		this.iopmClassify = iopmClassify;
	}
	
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
	public String getImage_url() {
		return image_url;
	}
	public void setImage_url(String image_url) {
		this.image_url = image_url;
	}
	public String getVideo_url() {
		return video_url;
	}
	public void setVideo_url(String video_url) {
		this.video_url = video_url;
	}
	public String getFrequency_url() {
		return frequency_url;
	}
	public void setFrequency_url(String frequency_url) {
		this.frequency_url = frequency_url;
	}
	public Long getZero_id() {
		return zero_id;
	}
	public void setZero_id(Long zeroId) {
		zero_id = zeroId;
	}
	

    
}
