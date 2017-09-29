package cn.com.pattek.user.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;


import cn.com.pattek.core.dao.BaseDaoImpl;
import cn.com.pattek.user.entity.RolePermissions;
import cn.com.pattek.user.entity.Roles;
import cn.com.pattek.user.service.RoleService;
import cn.com.pattek.user.dao.RoleDao;


@Service
public class RoleServiceImpl  implements RoleService{


	private RoleDao roleDao;
	
	public RoleDao getRoleDao() {
		return roleDao;
	}
	@Autowired
	public void setRoleDao(RoleDao roleDao) {
		this.roleDao = roleDao;
	}
	//得到角色名称
	public List<Roles> getRole()throws Exception{
		return roleDao.getRole();
	}
	//得到所有角色信息
	public List<Roles> getAllRoles(Map map)throws Exception{
		return roleDao.getAllRoles(map);
	}
	//角色信息条数
	public int getRoleCount(Map map)throws Exception{
		return roleDao.getRoleCount(map);
	}
	//判断角色是否存在
	public int selectRoleByName(Map map) throws Exception {
		return roleDao.selectRoleByName(map);
	}
	//添加角色
	public boolean addRoles(Roles rs)throws Exception{
		return roleDao.addRoles(rs);
	}
	//修改角色
	public boolean updateRole(Roles rs) throws Exception{
		return roleDao.updateRole(rs);
	}
	//判断角色是否用户使用
	public int selectRoleByUser(Long roleId) throws Exception {
		return roleDao.selectRoleByUser(roleId);
	}
	//删除角色
	public boolean deleteRole(Long roleId) throws Exception{
	
		return roleDao.deleteRole(roleId);
	}
	
	//删除角色与权限的关系
	public boolean deleteRolePermissions(Long roleId) throws Exception{
		return roleDao.deleteRolePermissions(roleId);
	}
	
	//添加角色与权限的关系
	public boolean addRolePerms(RolePermissions rp)throws Exception{
		return roleDao.addRolePerms(rp);
	}
	
	public String getRolePermission(Long roleId)throws Exception {
		return roleDao.getRolePermission(roleId);
	}
	
	public List getPermissionIds(List<Integer> permissionIds)throws Exception{
		return roleDao.getPermissionIds(permissionIds);
	}
	


}
