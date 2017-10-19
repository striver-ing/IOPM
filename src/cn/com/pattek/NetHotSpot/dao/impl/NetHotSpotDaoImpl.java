package cn.com.pattek.NetHotSpot.dao.impl;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import cn.com.pattek.NetHotSpot.dao.NetHotSpotDao;
import cn.com.pattek.NetHotSpot.entity.AllHot;
import cn.com.pattek.NetHotSpot.entity.AllInfo;
import cn.com.pattek.NetHotSpot.entity.Hot;
import cn.com.pattek.NetHotSpot.entity.NetHotSpot;
import cn.com.pattek.RelatedNews.dao.RelatedNewsDao;
import cn.com.pattek.RelatedNews.entity.IopmFirst;
import cn.com.pattek.RelatedNews.entity.UserAct;
import cn.com.pattek.core.dao.BaseDaoImpl;
import cn.com.pattek.user.entity.Notice;

@Repository
public class NetHotSpotDaoImpl extends BaseDaoImpl implements NetHotSpotDao{

	public List<Hot> getHotList(Map map)throws Exception {
		// TODO Auto-generated method stub
		List<Hot> list=null;
		try {
			list=sqlSessionTemplate.selectList("getHotList",map);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
		return list;
	}

	public List<NetHotSpot> getHotListCount(Map map) throws Exception {
		// TODO Auto-generated method stub
		List<NetHotSpot> list=null;
		try {
			list=sqlSessionTemplate.selectList("getHotListCount",map);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
		return list;
	}

	public List<AllHot> getAllHotList(Map map) throws Exception {
		// TODO Auto-generated method stub
		List<AllHot> list=null;
		try {
			list=sqlSessionTemplate.selectList("getAllHotList",map);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
		return list;
	}

	public List<AllInfo> getAllInfoList(Map map) throws Exception {
		// TODO Auto-generated method stub
		List<AllInfo> list=null;
		try {
			list=sqlSessionTemplate.selectList("getAllInfoList",map);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
		return list;
	}
	public List<Notice> getNoticeArray(Map map) throws Exception {
		// TODO Auto-generated method stub
		List<Notice> list=null;
		try {
			list=sqlSessionTemplate.selectList("getNoticeArray",map);
		} catch (Exception e) {
			// TODO: handle exception
			throw e;
		}
		return list;
	}
	public boolean updateNotice(Notice notice) throws Exception {
		// TODO Auto-generated method stub
		try{
			sqlSessionTemplate.update("updateNotice",notice);
		}catch(Exception e){
			throw e;
		}
		return true;
	}
	//添加用户行为
	 public void addUserAct(UserAct userAct) throws Exception{
		 sqlSessionTemplate.insert("addUserHotAct", userAct);
	 }
	 
	//记录 采纳  不采纳 观看
	public boolean updateIsaccept(Map map) throws Exception{
		try{
			sqlSessionTemplate.update("updateIsaccept",map);
		}catch(Exception e){
			throw e;
		}
		return true;
	}
	
	

	public List<Map<Integer, String>> selectZero() throws Exception {
		List<Map<Integer, String>>  list = sqlSessionTemplate.selectList("selectZero");
		return list;
	}

	
}
