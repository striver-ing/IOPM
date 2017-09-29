package cn.com.pattek.user.dao;

import java.util.List;
import java.util.Map;

import cn.com.pattek.user.entity.Roles;


@SuppressWarnings("unchecked")
public interface PermissionsDao {

	public List<Roles> getAllPermissions(Map map)throws Exception;
	
	public int getPermissionsCount()throws Exception;
}
