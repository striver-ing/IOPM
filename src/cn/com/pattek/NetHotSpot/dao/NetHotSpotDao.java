package cn.com.pattek.NetHotSpot.dao;
import java.util.List;
import java.util.Map;

import cn.com.pattek.NetHotSpot.entity.AllHot;
import cn.com.pattek.NetHotSpot.entity.AllInfo;
import cn.com.pattek.NetHotSpot.entity.Hot;
import cn.com.pattek.NetHotSpot.entity.NetHotSpot;
import cn.com.pattek.RelatedNews.entity.UserAct;
import cn.com.pattek.user.entity.Notice;
public interface NetHotSpotDao {
	//或取涉广电热点数量
    public List<NetHotSpot> getHotListCount(Map map)throws Exception;
	//或取涉广电热点
    public List<Hot> getHotList(Map map)throws Exception;
    //获取全国热点列表
    public List<AllHot> getAllHotList(Map map)throws Exception;
    //根据infoid查询
    public List<AllInfo> getAllInfoList(Map map)throws Exception;
    
    public List<Notice> getNoticeArray(Map map)throws Exception;
	
	public boolean updateNotice(Notice notice)throws Exception;
	//添加用户行为
	public void addUserAct(UserAct userAct) throws Exception;
	//记录 采纳  不采纳 观看
	public boolean updateIsaccept(Map map) throws Exception;
}
