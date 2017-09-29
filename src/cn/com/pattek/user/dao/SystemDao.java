package cn.com.pattek.user.dao;

import java.util.List;
import java.util.Map;

import cn.com.pattek.user.entity.AppSystem;
@SuppressWarnings("unchecked")
public interface SystemDao {

public List<AppSystem> getModulePerm(Long manuId,Long roleId,Long systemId);
	
	public List<AppSystem> getManuId(Long systemId);
	
	//得到所有权限信息
	public List<AppSystem> getAllSystems(Map map)throws Exception;
	
	public List<AppSystem> getAllSystemsLevel1(Map map)throws Exception;
	
	public List<AppSystem> getAllSystemsLevel2(Map map)throws Exception;
	
	public int getSystemsCount(Map map)throws Exception;
	
	public List<AppSystem> getPermList(Map map)throws Exception;
}
