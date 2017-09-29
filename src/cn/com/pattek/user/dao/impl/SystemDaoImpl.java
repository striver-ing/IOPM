package cn.com.pattek.user.dao.impl;

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
import cn.com.pattek.user.dao.SystemDao;

@Repository
public class SystemDaoImpl extends BaseDaoImpl implements SystemDao{

	
	protected Logger log = Logger.getLogger(getClass());

	
	

	
	public List<AppSystem> getModulePerm(Long manuId,Long roleId,Long systemId) {
		Map map=new HashMap();
		map.put("manuId", manuId);
		map.put("roleId", roleId);
		map.put("systemId", systemId);
		List<AppSystem> list=new ArrayList();
		try{
			list=sqlSessionTemplate.selectList("getModulePerm",map);
		}catch(Exception e){
			e.printStackTrace();
		}
		return list;
	}
	
	public List<AppSystem> getManuId(Long systemId) {
		List<AppSystem> list=new ArrayList();
		try{
			list=sqlSessionTemplate.selectList("getManuId",systemId);
		}catch(Exception e){
			e.printStackTrace();
		}
		return list;
	}
	//得到所有权限信息
	public List<AppSystem> getAllSystems(Map map)throws Exception{
		List<AppSystem> list = null;
		try {
			list=sqlSessionTemplate.selectList("getAllSystem", map);
		} catch (Exception e) {
			// TODO: handle exception
			throw e;
		}
		return list;
	}
	
	//得到所有权限信息
	public List<AppSystem> getAllSystemsLevel1(Map map)throws Exception{
		List<AppSystem> list = null;
		try {
			list=sqlSessionTemplate.selectList("getAllSystemLevel1", map);
		} catch (Exception e) {
			// TODO: handle exception
			throw e;
		}
		return list;
	}
	
	//得到所有权限信息
	public List<AppSystem> getAllSystemsLevel2(Map map)throws Exception{
		List<AppSystem> list = null;
		try {
			list=sqlSessionTemplate.selectList("getAllSystemLevel2", map);
		} catch (Exception e) {
			// TODO: handle exception
			throw e;
		}
		return list;
	}
	//权限信息条数
	public int getSystemsCount(Map map)throws Exception{
		int systemCount;
		try {
			systemCount=(Integer)sqlSessionTemplate.selectOne("getSystemCount",map);
		} catch (Exception e) {
			throw e;
		}
		return systemCount;
	}
	
	public List<AppSystem> getPermList(Map map) throws Exception{
		List<AppSystem> list = null;
		try {
			list=sqlSessionTemplate.selectList("getPermList", map);
		} catch (Exception e) {
			// TODO: handle exception
			throw e;
		}
		return list;
	}
	


}
