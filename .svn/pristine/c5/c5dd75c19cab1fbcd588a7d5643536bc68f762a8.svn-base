package cn.com.pattek.user.dao.impl;

import java.util.List;
import java.util.Map;


import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;



import cn.com.pattek.core.dao.BaseDaoImpl;
import cn.com.pattek.user.entity.Roles;
import cn.com.pattek.user.dao.PermissionsDao;
@Repository
@SuppressWarnings("unchecked")
public class PermissionsDaoImpl extends BaseDaoImpl implements PermissionsDao{

	

	//得到所有权限信息
	public List<Roles> getAllPermissions(Map map)throws Exception{
		List<Roles> list = null;
		try {
			list=sqlSessionTemplate.selectList("getRole", map);
		} catch (Exception e) {
			// TODO: handle exception
			throw e;
		}
		return list;
	}
	//权限信息条数
	public int getPermissionsCount()throws Exception{
		int roleCount;
		try {
			roleCount=(Integer)sqlSessionTemplate.selectOne("getRoleCount");
		} catch (Exception e) {
			throw e;
		}
		return roleCount;
	}
	
	
}
