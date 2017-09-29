package cn.com.pattek.user.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;


import cn.com.pattek.core.dao.BaseDaoImpl;
import cn.com.pattek.user.entity.AppSystem;
import cn.com.pattek.user.service.SystemService;
import cn.com.pattek.user.dao.SystemDao;

@Service
public class SystemServiceImpl implements SystemService{

	private SystemDao systemDao;
	
	public SystemDao getSystemDao() {
		return systemDao;
	}

	@Autowired
	public void setSystemDao(SystemDao systemDao) {
		this.systemDao = systemDao;
	}

	protected Logger log = Logger.getLogger(getClass());

	
	

	
	public List<AppSystem> getModulePerm(Long manuId,Long roleId,Long systemId) {
	
		return systemDao.getModulePerm(manuId, roleId, systemId);
	}
	
	public List<AppSystem> getManuId(Long systemId) {
	
		return systemDao.getManuId(systemId);
	}
	//得到所有权限信息
	public List<AppSystem> getAllSystems(Map map)throws Exception{
		return systemDao.getAllSystems(map);
	}
	
	//得到所有权限信息
	public List<AppSystem> getAllSystemsLevel1(Map map)throws Exception{
		return systemDao.getAllSystemsLevel1(map);
	}
	
	//得到所有权限信息
	public List<AppSystem> getAllSystemsLevel2(Map map)throws Exception{
		return systemDao.getAllSystemsLevel2(map);
	}
	//权限信息条数
	public int getSystemsCount(Map map)throws Exception{
		return systemDao.getSystemsCount(map);
	}
	
	public List<AppSystem> getPermList(Map map) throws Exception{
		return systemDao.getPermList(map);
	}
	


}
