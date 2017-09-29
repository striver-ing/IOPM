package cn.com.pattek.user.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import cn.com.pattek.user.entity.RolePermissions;
import cn.com.pattek.user.entity.Roles;

@SuppressWarnings("unchecked")

public interface RoleService {

	public List<Roles> getRole()throws Exception;

	public List<Roles> getAllRoles(Map map)throws Exception;
	
	public int getRoleCount(Map map)throws Exception;
	
	public int selectRoleByName(Map map) throws Exception;
	
	public boolean addRoles(Roles rs)throws Exception;
	
	public boolean updateRole(Roles rs) throws Exception;
	
	public int selectRoleByUser(Long roleId) throws Exception;
	
	public boolean deleteRole(Long roleId) throws Exception;
	
	public boolean deleteRolePermissions(Long roleId) throws Exception;
	
	public boolean addRolePerms(RolePermissions rp)throws Exception;
	
	public String getRolePermission(Long roleId)throws Exception;
	
	public List getPermissionIds(List<Integer> permissionIds)throws Exception;
}
