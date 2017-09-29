package cn.com.pattek.user.dao.impl;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import cn.com.pattek.core.dao.BaseDaoImpl;
import cn.com.pattek.user.dao.UserDao;
import cn.com.pattek.user.entity.Notice;
import cn.com.pattek.user.entity.Users;


@Repository
public class UserDaoImpl extends BaseDaoImpl implements UserDao{
	
	

	public Users login(String userName, String password) {
		Users user=null;
		Map map=new HashMap();
		map.put("userName", userName);
		map.put("password", password);
	
			user=(Users)sqlSessionTemplate.selectOne("getUserLogin", map);
		
		return user;
	}
	//通过Id获得一个用户
	public Users getUserById(Long userId) throws Exception {
		Users user = null;
		
		try{
			user=(Users) sqlSessionTemplate.selectOne("getUserById",userId);
		}catch(Exception e){
			e.printStackTrace();
		}
		return user;
	}
	
	
	public List<Users> getAllUser(Map map)throws Exception{
		List<Users> list = null;
		try {
			list=sqlSessionTemplate.selectList("getAllUsers", map);
		} catch (Exception e) {
			// TODO: handle exception
			throw e;
		}
		return list;
	}
	
	
	
	//用户总数
	public int getUserCount(Map map)throws Exception{
		int userCount;
		try {
			userCount=(Integer)sqlSessionTemplate.selectOne("getUserCount",map);
		} catch (Exception e) {
			throw e;
		}
		return userCount;
	}
	//得到所有用户名称
	public List<Users> getUserNameJson()throws Exception{
		List<Users> luser=null;
		try {
			luser=sqlSessionTemplate.selectList("getAllUserName");
		} catch (Exception e) {
			// TODO: handle exception
			throw e;
		}
		return luser;
	}
	//添加用户
	public boolean addUser(Users us)throws Exception{
		try{
			sqlSessionTemplate.insert("addUser",us);
		}catch(Exception e){
			throw e;
		}
		return true;
	}
	//修改用户
	public boolean updateUser(Users us) throws Exception{
		try{
			
			sqlSessionTemplate.update("updateUser",us);
		}catch(Exception e){
			throw e;
		}
		return true;
	}
	//删除用户
	public boolean deleteUser(Long userId) throws Exception{
		try{
			sqlSessionTemplate.delete("deleteUser",userId);
		}catch(Exception e){
			throw e;
		}
		return true;
	}
	//启用用户
	public boolean startUser(Long userId) throws Exception{
		try{
			sqlSessionTemplate.update("startUser",userId);
		}catch(Exception e){
			throw e;
		}
		return true;
	}
	//禁用用户
	public boolean stopUser(Long userId) throws Exception{
		try{
			sqlSessionTemplate.update("stopUser",userId);
		}catch(Exception e){
			throw e;
		}
		return true;
	}
	//判断用户是否存在
	public int selectUserByName(Map map) throws Exception {
		int num;
		try{
			num = (Integer)sqlSessionTemplate.selectOne("getUserExist",map);
		}catch (Exception e) {
			throw e;
		}
		return num;
	}
	public List<Notice> getNoticeList(Map map) throws Exception {
		// TODO Auto-generated method stub
		List<Notice> list=null;
		try {
			list=sqlSessionTemplate.selectList("getNoticeList",map);
		} catch (Exception e) {
			// TODO: handle exception
			throw e;
		}
		return list;
	}
	
	

	
	
}
