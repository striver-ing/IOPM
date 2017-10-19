package cn.com.pattek.NetHotSpot.action;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import cn.com.pattek.user.entity.Notice;
import cn.com.pattek.user.entity.Users;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpStatus;
import org.apache.commons.httpclient.methods.PostMethod;
import org.apache.struts2.ServletActionContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.opensymphony.xwork2.ActionContext;

import cn.com.pattek.KeyWords.dao.KeyCluesDao;
import cn.com.pattek.KeyWords.entity.IopmKeyInfoEntity;
import cn.com.pattek.NetHotSpot.dao.NetHotSpotDao;
import cn.com.pattek.NetHotSpot.entity.AllHot;
import cn.com.pattek.NetHotSpot.entity.AllInfo;
import cn.com.pattek.NetHotSpot.entity.Hot;
import cn.com.pattek.NetHotSpot.entity.HotEntity;
import cn.com.pattek.NetHotSpot.entity.HotList;
import cn.com.pattek.NetHotSpot.entity.NetHotSpot;
import cn.com.pattek.RelatedNews.entity.UserAct;
import cn.com.pattek.Subject.dao.SubjectDao;
import cn.com.pattek.core.struts2.BaseAction;
import cn.com.pattek.user.entity.Notice;

@Controller("NetHotSpotAction")
public class NetHotSpotAction extends BaseAction{



	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private Long type; //分析类型 0：全网热点 1：涉我热点
	private Long period; //分析周期 1：近24H 7：近7天 30：近30天
	private String classify; //分析分类
	private Long spreadMedia = 0l; //分析分类
	private String zero_idList;
	private String idList;//用于获取某个热点详细信息的ids
	private Long clues_id;
	private Long infoIds;
	private Long user_id;
	private Long msg_id;
	private Long action_type;
	private String accept;//采纳
	private String unaccept;//不采纳
	private String watch;//观看
	@Autowired
	private KeyCluesDao keyCluesDao;
	@Autowired
	private NetHotSpotDao netHotSpotDao;
	private List<Notice> notice;
	
	public String getClassify() {
		return classify;
	}

	public void setClassify(String classify) {
		this.classify = classify;
	}

	public Long getSpreadMedia() {
		return spreadMedia;
	}

	public void setSpreadMedia(Long spreadMedia) {
		this.spreadMedia = spreadMedia;
	}

	public Long getInfoIds() {
		return infoIds;
	}

	public void setInfoIds(Long infoIds) {
		this.infoIds = infoIds;
	}

	public Long getClues_id() {
		return clues_id;
	}
     
	public void setClues_id(Long cluesId) {
		clues_id = cluesId;
	}

	public String getZero_idList() {
		return zero_idList;
	}

	public void setZero_idList(String zeroIdList) {
		zero_idList = zeroIdList;
	}

	public Long getType() {
		return type;
	}

	public void setType(Long type) {
		this.type = type;
	}

	public Long getPeriod() {
		return period;
	}

	public void setPeriod(Long period) {
		this.period = period;
	}
	
	public String getIdList() {
		return idList;
	}

	public void setIdList(String idList) {
		this.idList = idList;
	}
	

	public Long getUser_id() {
		return user_id;
	}

	public void setUser_id(Long userId) {
		user_id = userId;
	}

	public Long getMsg_id() {
		return msg_id;
	}

	public void setMsg_id(Long msgId) {
		msg_id = msgId;
	}

	public Long getAction_type() {
		return action_type;
	}

	public void setAction_type(Long actionType) {
		action_type = actionType;
	}

	
	public String getAccept() {
		return accept;
	}

	public void setAccept(String accept) {
		this.accept = accept;
	}

	public String getUnaccept() {
		return unaccept;
	}

	public void setUnaccept(String unaccept) {
		this.unaccept = unaccept;
	}

	public String getWatch() {
		return watch;
	}

	public void setWatch(String watch) {
		this.watch = watch;
	}

	/**
	 * webService中httpClient请求方式获取数据
	 * @param url 请求中地址
	 * @return 返回请求的数据
	 */
	public static String getHttpClientInfo(String url){  
        String ret = "";  
        try {  
            HttpClient httpclient = new HttpClient();  
            //httpclient.setConnectionTimeout(10000);  
            PostMethod method = new PostMethod(url);  
            method.setDoAuthentication(true);     
            method.setRequestHeader("Content-Type", "text/html;charset=UTF-8");    
            httpclient.executeMethod(method);  
              
            if (method.getStatusLine().getStatusCode() == HttpStatus.SC_OK) {  
                ret = new String(method.getResponseBodyAsString());
            }  
            method.releaseConnection();  
        } catch (Exception e) {  
            e.printStackTrace();  
        }  
        return ret;  
    }  
	
	/**
	 * 获取热点部分信息
	 * @throws IOException
	 */
	@SuppressWarnings("static-access")
	public void getNetHotSpotList() throws IOException{
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("application/json;charset=UTF-8");
		//webService中httpClient方式请求的url
		String url ="";
		System.out.println(type==0);
		if(type == 0){
			url="http://localhost:8080/IOPM/NetHotSpot/NetHotSpotAction_getAllInterface.action";
		}else{
			url="http://localhost:8080/IOPM/NetHotSpot/NetHotSpotAction_getHotInterface.action";
		}
		String rtnStr = "";
//		if(classify == null || "".equals(classify)){
//			classify = "1,2,3,4,5,6,7";
//		}
		if(zero_idList==null)zero_idList="";
		url += "?type=" + type + "&period=" + period + "&classify=" + classify + "&spreadMedia=" + spreadMedia;
//		url += "?type=" + type + "&period=" + period;
		rtnStr = getHttpClientInfo(url);
		response.getWriter().write(rtnStr);
		System.out.println("rtnStr:"+rtnStr);
	}
	
	/**
	 * 全国接口
	 * @return null 
	 */
	public void getAllInterface()throws Exception{
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("application/json;charset=UTF-8");
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("type", type);
		map.put("period", period);
		System.out.println(type==0);
		List<AllHot> list = new ArrayList<AllHot>();
		list = netHotSpotDao.getAllHotList(map);
		Map<String,Object> map1 = new HashMap<String,Object>();
		map1.put("data", list);
		map1.put("total", list.size());
		map1.put("message", "查询成功");
		map1.put("status", 1);
		this.objectToJson(map1);
	}
	
	/**
	 * 涉广电接口
	 * @return null 
	 */
	public void getHotInterface()throws Exception{
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("application/json;charset=UTF-8");
		Map<String,Object> map = new HashMap<String,Object>();
		List<NetHotSpot> list = new ArrayList<NetHotSpot>();
		List<Hot> list1 = new ArrayList<Hot>();
		map.put("type", type);
		map.put("period", period);
		String[] str3 = null;
		if (classify != null && !"".equals(classify)) {
			str3 = classify.trim().split(",");
		} else {
			str3 = "0,".trim().split(",");
		}
		if (spreadMedia == 1) {
			map.put("spreadMedia", spreadMedia);
		}
		map.put("classify", str3);
		//查询总数
		list = netHotSpotDao.getHotListCount(map);
		List<Map<String,Object>> list3 = new ArrayList<Map<String,Object>>();
		for(int i = 0; i < list.size(); i++){
			Long id = list.get(i).getClues_id();
			Long count = list.get(i).getCount();
			Map<String,Object> map1 = new HashMap<String,Object>();
			map1.put("id", id);
			map1.put("type", type);
			map1.put("period", period);
			map1.put("classify", str3);
			if (spreadMedia == 1) {
				map1.put("spreadMedia", spreadMedia);
			}
			//根据id查询热点
			list1=netHotSpotDao.getHotList(map1);
			HotList hot = new HotList();
			hot.setNum(count);
			hot.setData(list1);
			Map<String,Object> map2 = new HashMap<String,Object>();
			map2.put(id.toString(), hot);
			list3.add(map2);
			System.out.println("list3=" + list3);
		}
		HotEntity entity = new HotEntity();
		entity.setData(list3);
		entity.setMessage("查询成功");
		entity.setStatus("1");
		this.objectToJson(entity);
	}
     
	/**
	 * 获取某个热点的详细信息
	 * @throws Exception
	 */
	public void getNetHotSpotDetailList() throws Exception{
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("application/json;charset=UTF-8");
		String url = "http://localhost:8080/IOPM/NetHotSpot/NetHotSpotAction_getDetailList.action";
		String rtnStr = "";
		url += "?infoIds="+infoIds ;
		rtnStr = getHttpClientInfo(url);
		response.getWriter().write(rtnStr);
		System.out.println(rtnStr);
	}
	
	/**
	 * 获取某个热点的详细信息接口
	 * @throws Exception
	 */
	public void getDetailList()throws Exception{
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("application/json;charset=UTF-8");
		Map<String,Object> map = new HashMap<String,Object>();
		List<AllInfo> list = new ArrayList<AllInfo>();
		map.put("infoIds", infoIds);
		list = netHotSpotDao.getAllInfoList(map);
		Map<String,Object> map1 = new HashMap<String,Object>();
		map1.put("data", list);
		map1.put("total", list.size());
		map1.put("message", "查询成功");
		map1.put("status", 1);
		this.objectToJson(map1);
	}
	
	/**
	 * 获取指定线索
	 * @return null
	 */
	public String getCluesById()throws Exception{
		IopmKeyInfoEntity key = new IopmKeyInfoEntity();
		key=keyCluesDao.selectById(clues_id);
		System.out.println("clues_id="+clues_id);
		this.objectToJson(key);
		return null;
	}
	
	public void RefreshNotice()throws Exception{
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("text/html;charset=UTF-8");// 解决中文乱码
		Map<String,Object> noticeMap = new HashMap();
		noticeMap.put("dayNum", 1);
		noticeMap.put("show", 0);
		notice = netHotSpotDao.getNoticeArray(noticeMap);
		this.arrayToJson(notice);
	}
	
	public void UpdateNotice()throws Exception{
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("text/html;charset=UTF-8");// 解决中文乱码
		if(!"".equals(idList)){
			String[] strList = idList.replaceAll(",", " ").split(" ");
			Long[] list = new Long[strList.length];
			for(int i = 0; i < strList.length; i++){
				list[i] = Long.parseLong(strList[i]);
				Notice nt = new Notice();
				nt.setId(list[i]);
				netHotSpotDao.updateNotice(nt);
			}
		}
	}
	/**
	 * 添加用户行为
	 * @throws Exception
	 */
	public String addUserAct() throws Exception {
		//添加行为
		HttpServletRequest request = ServletActionContext.getRequest();
		Map<String, Object> session = ActionContext.getContext().getSession();
		Users user = (Users) session.get("login");
		UserAct userAct = new UserAct();
		userAct.setAction_type(action_type);
		userAct.setMsg_type((long)501);
		userAct.setMsg_id(msg_id);
		if(user != null){
			userAct.setUser_id(user.getUserId());
		}
		netHotSpotDao.addUserAct(userAct);
		
		//记录采纳 不采纳 观看数
		Map<String,Object> dataMap = new HashMap<String, Object>();
		dataMap.put("hotId", msg_id);
		dataMap.put("accept",accept );
		dataMap.put("unaccept",unaccept );
		dataMap.put("watch", watch);
		netHotSpotDao.updateIsaccept(dataMap);
		
		return NONE;
	}
	
	//动态获取
	public String selectZero() throws Exception{
		List<Map<Integer, String>> selectZero = netHotSpotDao.selectZero();
		this.arrayToJson(selectZero);
		return null;
	}
	
}
