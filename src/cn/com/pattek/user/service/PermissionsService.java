package cn.com.pattek.user.service;

import java.util.List;
import java.util.Map;

import cn.com.pattek.user.entity.Roles;


@SuppressWarnings("unchecked")
public interface PermissionsService {

	public List<Roles> getAllPermissions(Map map)throws Exception;
	
	public int getPermissionsCount()throws Exception;
}
