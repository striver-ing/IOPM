package cn.com.pattek.user.service.impl;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import cn.com.pattek.core.dao.BaseDaoImpl;
import cn.com.pattek.user.dao.UserDao;
import cn.com.pattek.user.entity.Notice;
import cn.com.pattek.user.entity.Users;
import cn.com.pattek.user.service.UserService;


@Service
public class UserServiceImpl  implements UserService{
	
	private UserDao userDao;

	public UserDao getUserDao() {
		return userDao;
	}
	@Autowired
	public void setUserDao(UserDao userDao) {
		this.userDao = userDao;
	}
	public Users login(String userName, String password) {
	
	
			
		
		return userDao.login(userName, password);
	}
	//通过Id获得一个用户
	public Users getUserById(Long userId) throws Exception {
		return userDao.getUserById(userId);
	}
	
	
	public List<Users> getAllUser(Map map)throws Exception{
		return userDao.getAllUser(map);
	}
	
	
	
	//用户总数
	public int getUserCount(Map map)throws Exception{
		return userDao.getUserCount(map);
	}
	//得到所有用户名称
	public List<Users> getUserNameJson()throws Exception{
		return userDao.getUserNameJson();
	}
	//添加用户
	public boolean addUser(Users us)throws Exception{
		return userDao.addUser(us);
	}
	//修改用户
	public boolean updateUser(Users us) throws Exception{
		
		return userDao.updateUser(us);
	}
	//删除用户
	public boolean deleteUser(Long userId) throws Exception{
	
		return userDao.deleteUser(userId);
	}
	//启用用户
	public boolean startUser(Long userId) throws Exception{
		return userDao.startUser(userId);
	}
	//禁用用户
	public boolean stopUser(Long userId) throws Exception{
		return userDao.stopUser(userId);
	}
	//判断用户是否存在
	public int selectUserByName(Map map) throws Exception {
	
		return userDao.selectUserByName(map);
	}
	public List<Notice> getNoticeList(Map map) throws Exception {
		// TODO Auto-generated method stub
		return userDao.getNoticeList(map);
	}
	

	
	
	
}
