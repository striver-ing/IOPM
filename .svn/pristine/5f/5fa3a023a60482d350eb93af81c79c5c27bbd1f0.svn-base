package cn.com.pattek.user.dao.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;


import cn.com.pattek.core.dao.BaseDaoImpl;
import cn.com.pattek.user.entity.RolePermissions;
import cn.com.pattek.user.entity.Roles;
import cn.com.pattek.user.dao.RoleDao;


@Repository
public class RoleDaoImpl extends BaseDaoImpl implements RoleDao{



	
	//得到角色名称
	public List<Roles> getRole()throws Exception{
		List<Roles> lrole=null;
		try {
			lrole=sqlSessionTemplate.selectList("getRoleName");
		} catch (Exception e) {
			// TODO: handle exception
			throw e;
		}
		return lrole;
	}
	//得到所有角色信息
	public List<Roles> getAllRoles(Map map)throws Exception{
		List<Roles> list = null;
		try {
			list=sqlSessionTemplate.selectList("getRole", map);
		} catch (Exception e) {
			// TODO: handle exception
			throw e;
		}
		return list;
	}
	//角色信息条数
	public int getRoleCount(Map map)throws Exception{
		int roleCount;
		try {
			roleCount=(Integer)sqlSessionTemplate.selectOne("getRoleCount",map);
		} catch (Exception e) {
			throw e;
		}
		return roleCount;
	}
	//判断角色是否存在
	public int selectRoleByName(Map map) throws Exception {
		int num;
		try{
			num = (Integer)sqlSessionTemplate.selectOne("getRoleExist",map);
		}catch (Exception e) {
			throw e;
		}
		return num;
	}
	//添加角色
	public boolean addRoles(Roles rs)throws Exception{
		try{
			sqlSessionTemplate.insert("addRole",rs);
		}catch(Exception e){
			throw e;
		}
		return true;
	}
	//修改角色
	public boolean updateRole(Roles rs) throws Exception{
		try{
			sqlSessionTemplate.update("updateRole",rs);
		}catch(Exception e){
			throw e;
		}
		return true;
	}
	//判断角色是否用户使用
	public int selectRoleByUser(Long roleId) throws Exception {
		int roleUserCount;
		try{
			roleUserCount = (Integer)sqlSessionTemplate.selectOne("getRoleUser",roleId);
		}catch (Exception e) {
			throw e;
		}
		return roleUserCount;
	}
	//删除角色
	public boolean deleteRole(Long roleId) throws Exception{
		try{
			sqlSessionTemplate.delete("deleteRolePermissions",roleId);
			sqlSessionTemplate.delete("deleteRole",roleId);
		}catch(Exception e){
			throw e;
		}
		return true;
	}
	
	//删除角色与权限的关系
	public boolean deleteRolePermissions(Long roleId) throws Exception{
		try{
			sqlSessionTemplate.delete("deleteRolePermissions",roleId);
		}catch(Exception e){
			throw e;
		}
		return true;
	}
	
	//添加角色与权限的关系
	public boolean addRolePerms(RolePermissions rp)throws Exception{
		try{
			sqlSessionTemplate.insert("addRolePerms",rp);
		}catch(Exception e){
			throw e;
		}
		return true;
	}
	
	public String getRolePermission(Long roleId)throws Exception {
		List<RolePermissions> list=new ArrayList();
		System.out.println("角色Id"+roleId);
		list=sqlSessionTemplate.selectList("getRolePermissions", roleId);
		String permissionIds="";
		if(list!=null){
			for(int i=0;i<list.size();i++){
				RolePermissions rp=list.get(i);
				permissionIds=permissionIds+rp.getPermissionId()+",";
			}
		}
		if(!permissionIds.equals("")){
			permissionIds=permissionIds.substring(0,permissionIds.length()-1);
		}
		return permissionIds;
	}
	
	public List getPermissionIds(List<Integer> permissionIds)throws Exception{
		List list=null;
		//String[] arr=permissionIds.trim().split(",");
		Map map=new HashMap();
		map.put("permissionIds", permissionIds);
		System.out.println(permissionIds.toString());
		list=sqlSessionTemplate.selectList("getPermissionIds",map);
		return list;
	}
	


}
