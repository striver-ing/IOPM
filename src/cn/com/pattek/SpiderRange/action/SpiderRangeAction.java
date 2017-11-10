package cn.com.pattek.SpiderRange.action;

import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import java.util.Calendar;
import java.util.Date;

import org.apache.commons.collections.map.HashedMap;

import cn.com.pattek.SpiderRange.dao.SpiderRangeDao;
import cn.com.pattek.core.struts2.BaseAction;
import cn.com.pattek.utils.ESSearchUtils;



@Controller("SpiderRangeAction")
public class SpiderRangeAction extends BaseAction{
	
	@Autowired
	private SpiderRangeDao spiderRangeDao;
	
	private static Long id;//id
	private  String name;//站点名称
	private  int position;//地点
	private  String url;//网址
	private  String spiderFrequence;//爬取频率
	private  String remark;//备注
	private  String domain;//域名
	private  int classify;//类别
	private  int page;
	private  int size;
	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}

	

	public int getPage() {
		return page;
	}


	public void setPage(int page) {
		this.page = page;
	}


	public int getSize() {
		return size;
	}


	public void setSize(int size) {
		this.size = size;
	}


	public int getClassify() {
		return classify;
	}


	public void setClassify(int classify) {
		this.classify = classify;
	}


	public String getDomain() {
		return domain;
	}


	public void setDomain(String domain) {
		this.domain = domain;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public int getPosition() {
		return position;
	}


	public void setPosition(int position) {
		this.position = position;
	}


	public String getUrl() {
		return url;
	}


	public void setUrl(String url) {
		this.url = url;
	}


	public String getSpiderFrequence() {
		return spiderFrequence;
	}


	public void setSpiderFrequence(String spiderFrequence) {
		this.spiderFrequence = spiderFrequence;
	}


	public String getRemark() {
		return remark;
	}


	public void setRemark(String remark) {
		this.remark = remark;
	}

	
	public String ceshi() throws Exception{
		System.out.println("测试");
		return null;
	}

	
	public String selectInformationCount() throws Exception{
		int dateCount = 30;
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		Date dateT = new Date();
		Date dateO = new Date();
		Calendar calendarT = Calendar.getInstance();
		Calendar calendarO = Calendar.getInstance();
		calendarT.setTime(dateT);
		calendarO.setTime(dateO);
		calendarT.add(Calendar.DATE, -(dateCount - 1));
		calendarO.add(Calendar.DATE, -0);
		dateT = calendarT.getTime();
		dateO = calendarO.getTime();
		String afterDateT = sdf.format(dateT);// 30天
		String afterDateO = sdf.format(dateO);// 30天
		afterDateT = afterDateT + " 00:00:00";
		afterDateO = afterDateO + " 00:00:00";
		Map<String, Object> map = new HashedMap();
		// 信息量
		ESSearchUtils es = ESSearchUtils.getInstance();
		String sqlT = "SELECT COUNT(*) COUNT FROM tab_iopm_article_info where RELEASE_TIME >= '"
				+ afterDateT + "'";
		List<Object> listT = es.searchBySql(sqlT);
		String sqlO = "SELECT COUNT(*) COUNT FROM tab_iopm_article_info where RELEASE_TIME >= '"
				+ afterDateO + "'";
		List<Object> listO = es.searchBySql(sqlO);
		String sql = "SELECT COUNT(*) COUNT FROM tab_iopm_article_info";
		List<Object> list = es.searchBySql(sql);
		int intT = (Integer) listT.get(0);
		int intO = (Integer) listO.get(0);
		int intA = (Integer) list.get(0);
		Map<String, Object> mapInformation = new HashedMap();
		mapInformation.put("todayCount", intO);
		mapInformation.put("thirtyCount", intT);
		mapInformation.put("allCount", intA);

		// 覆盖、监控的站点量
		int coverCount = 0;
		int mointorCount = 0;
		int unCoverCount = 0;
		Map<String, Object> mapSite = new HashedMap();
		coverCount = spiderRangeDao.selectCoverSite();
		List<Map<String, Object>> listMorsSite = spiderRangeDao
				.selectMorsSite();
		for (int i = 0; i < listMorsSite.size(); i++)
		{
			Map<String, Object> mapSiteMap = listMorsSite.get(i);
			System.out.println("-------------------" + mapSiteMap);
			String mointor = mapSiteMap.get("MORS").toString();
			String siteCount = mapSiteMap.get("COUNT").toString();
			Integer count = Integer.parseInt(siteCount);
			if (mointor.equals("701"))
			{
				mointorCount = count;
			}
		}
		//未监控的数量   = 覆盖量  - 监控量
		unCoverCount = coverCount - mointorCount;
		mapSite.put("CoverCount", coverCount);
		mapSite.put("unMointorCount", unCoverCount);
		mapSite.put("mointorCount", mointorCount);

		// 查询各区域的站点覆盖量
		List<Map<String, Object>> listRegionSite = spiderRangeDao
				.selectRegionSite();
		Map<String, Object> reMap = new HashedMap();
		for (int i = 0; i < listRegionSite.size(); i++)
		{
			Map<String, Object> regionSiteMap = listRegionSite.get(i);
			String province = regionSiteMap.get("PROVINCE").toString();
			String counts = regionSiteMap.get("COUNT").toString();
			Integer count = Integer.parseInt(counts);
			reMap.put(province, count);
			System.out.println("reMap-------" + reMap);
		}

		map.put("regionSite", reMap);
		map.put("informationCount", mapInformation);
		map.put("siteCount", mapSite);
		this.objectToJson(map);
		return null;
	}
	
	
	
	//添加站点
	public String addSite() throws Exception{
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("text/html;charset=UTF-8");// 解决中文乱码
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("name", name);
		map.put("position", position);
		map.put("url", url);
		map.put("spiderFrequence", spiderFrequence);
		map.put("remark", remark);
		boolean addSite = spiderRangeDao.addSite(map);
		if(addSite){
			response.getWriter().write("1");
		}else{
			response.getWriter().write("0");
		}				
		return null;
	}
	
	//删除站点
	public String deleteSite() throws Exception{
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("text/html;charset=UTF-8");// 解决中文乱码
		boolean deleteSite = spiderRangeDao.deleteSite(id);	
		if(deleteSite){
			response.getWriter().write("1");
		}else{
			response.getWriter().write("0");
		}
		return null;
	}
	
	//修改站点
	public String updateSite() throws Exception{
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("text/html;charset=UTF-8");// 解决中文乱码
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("id", id);
		map.put("name", name);
		map.put("position", position);
		map.put("url", url);
		map.put("spiderFrequence", spiderFrequence);
		map.put("remark", remark);
		boolean updateSite = spiderRangeDao.updateSite(map);
		if(updateSite){
			response.getWriter().write("1");
		}else{
			response.getWriter().write("0");
		}
		return null;
	}
	
	//分页查询
	public String selectSit() throws Exception{
		Map<String, Object> map = new HashMap<String, Object>();
		
		map.put("name", name);
		map.put("position", position);
		map.put("classify", classify);
		map.put("page", page);
		map.put("size", size);
		
		List<Map<String,Object>> selectSite = spiderRangeDao.selectSite(map);
		int selectTotalCount = spiderRangeDao.selectTotalCountSite(map);
		
		Map<String , Object> dateMap = new HashMap<String, Object>();
		dateMap.put("date", selectSite);
		dateMap.put("totalCount", selectTotalCount);
		this.objectToJson(dateMap);
		
		
		return null;
	}
		//查询所有省份
	public String selectProvince() throws Exception{	
		List<Map<String,Object>> selectProvince = spiderRangeDao.selectAllProvince();
		Map<String , Object> map = new HashMap<String, Object>();
		map.put("allProvince", selectProvince);
		this.objectToJson(map);
		return null;
	}
	
}
