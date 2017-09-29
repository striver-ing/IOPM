package cn.com.pattek.user.service.impl;

import java.util.List;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;



import cn.com.pattek.core.dao.BaseDaoImpl;
import cn.com.pattek.user.entity.Roles;
import cn.com.pattek.user.service.PermissionsService;
import cn.com.pattek.user.dao.PermissionsDao;
@Service
public class PermissionsServiceImpl implements PermissionsService{

	
	private PermissionsDao permissionsDao;

	public PermissionsDao getPermissionsDao() {
		return permissionsDao;
	}
	@Autowired
	public void setPermissionsDao(PermissionsDao permissionsDao) {
		this.permissionsDao = permissionsDao;
	}
	//得到所有权限信息
	public List<Roles> getAllPermissions(Map map)throws Exception{
		return permissionsDao.getAllPermissions(map);
	}
	//权限信息条数
	public int getPermissionsCount()throws Exception{
		return permissionsDao.getPermissionsCount();
	}
	
	
}
