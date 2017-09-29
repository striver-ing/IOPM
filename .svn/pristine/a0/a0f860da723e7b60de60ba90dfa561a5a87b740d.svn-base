package cn.com.pattek.user.service;

import java.util.List;
import java.util.Map;

import cn.com.pattek.user.entity.Notice;
import cn.com.pattek.user.entity.Users;
@SuppressWarnings("unchecked")
public interface UserService {
	public Users login(String userName, String password);
	
	public Users getUserById(Long userId) throws Exception;
	
	public List<Users> getAllUser(Map map)throws Exception;
	
	public int getUserCount(Map map)throws Exception;
	
	public List<Users> getUserNameJson()throws Exception;
	
	public boolean addUser(Users us)throws Exception;
	
	public boolean updateUser(Users us) throws Exception;
	
	public boolean deleteUser(Long userId) throws Exception;
	
	public boolean startUser(Long userId) throws Exception;
	
	public boolean stopUser(Long userId) throws Exception;
	
	public int selectUserByName(Map map) throws Exception;
	
	public List<Notice> getNoticeList(Map map) throws Exception;
	
}
