package cn.com.pattek.RelatedNews.entity;

public class UserAct {
	private Long id;    //ID
    private Long user_id; //用户id
    private Long msg_id;  //热点id
    private Long action_type;  //行为类型
    private Long msg_type;//信息类型
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getUser_id() {
		return user_id;
	}
	public void setUser_id(Long userId) {
		user_id = userId;
	}
	public Long getMsg_id() {
		return msg_id;
	}
	public void setMsg_id(Long msgId) {
		msg_id = msgId;
	}
	public Long getAction_type() {
		return action_type;
	}
	public void setAction_type(Long actionType) {
		this.action_type = actionType;
	}
	public Long getMsg_type() {
		return msg_type;
	}
	public void setMsg_type(Long msgType) {
		msg_type = msgType;
	}
    
}
