package cn.com.pattek.SystemMoniter.action;

import java.text.DateFormat;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Comparator;
import java.util.Date;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.TreeMap;

import javax.servlet.http.HttpServletResponse;

import org.apache.commons.collections.map.HashedMap;
import org.apache.struts2.ServletActionContext;
import org.springframework.beans.factory.annotation.Autowired;

import com.mysql.jdbc.jdbc2.optional.SuspendableXAConnection;

import cn.com.pattek.SystemMoniter.dao.SystemMoniterDao;
import cn.com.pattek.core.struts2.BaseAction;
import cn.com.pattek.core.struts2.JsonUtils;
import cn.com.pattek.utils.ESSearchUtils;

public class SystemMoniterAction extends BaseAction{
	
	private static int dateCount;//接受前台传来的天数
	private static int activeCount;//接受前台传来的活跃阈值
	private static int zombieCount;//接受前台传来的僵尸阈值
	private String title;
	private String content;
	private String releaseTime;
	
	
	
	public String getReleaseTime() {
		return releaseTime;
	}
	public void setReleaseTime(String releaseTime) {
		this.releaseTime = releaseTime;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	
	public static int getZombieCount() {
		return zombieCount;
	}
	public static void setZombieCount(int zombieCount) {
		SystemMoniterAction.zombieCount = zombieCount;
	}
	public int getActiveCount() {
		return activeCount;
	}
	public void setActiveCount(int activeCount) {
		this.activeCount = activeCount;
	}
	public int getDateCount() {
		return dateCount;
	}
	public void setDateCount(int dateCount) {
		this.dateCount = dateCount;
	}
	private  int acceptDays;//热点和舆情-采纳天数
	private  int unAcceptDays;//热点和舆情-未采纳天数
	public int getAcceptDays()
	{
		return acceptDays;
	}
	public void setAcceptDays(int acceptDays)
	{
		this.acceptDays = acceptDays;
	}
	public int getUnAcceptDays()
	{
		return unAcceptDays;
	}
	public void setUnAcceptDays(int unAcceptDays)
	{
		this.unAcceptDays = unAcceptDays;
	}
	@Autowired
	private SystemMoniterDao systemMoniterDao; 
	
	private Map<String, String> getDateRange(int dateCount) {
		int i=0;
		SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd");  
	    Date date=new Date();  
	    Date dateSt=new Date();
	    Calendar calendar = Calendar.getInstance(); 
	    Calendar calendarSt = Calendar.getInstance(); 
	    calendar.setTime(date); 
	    calendar.setTime(dateSt); 
	    calendar.add(Calendar.DATE, -(dateCount-i)); 
	    calendarSt.add(Calendar.DATE, -(dateCount-i)); 
	    date = calendar.getTime();  
	    dateSt = calendar.getTime(); 
	    Date now = new Date();
	    String formatNow = sdf.format(dateSt);//截止时间
	    String afterDate = sdf.format(date);//开始时间
	   
	    formatNow=formatNow+" 23:59:59";
	    afterDate=afterDate+" 00:00:00";
	    
	    Map<String, String> map = new HashedMap();
	    map.put("formatNow", formatNow);
	    map.put("afterDate", afterDate);           
	    //System.out.println(sdf.format(date));
	    return map;
	}
	
	
	//热点监控-------------------------------------------------
	//热点信息趋势统计数据
	public String hotInfoData() throws Exception{
		//int dateCount = 7;
		Map<String, Object> mapData = new HashedMap();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		Date date = new Date();
		Date dateSt = new Date();
		Calendar calendar = Calendar.getInstance();
		Calendar calendarSt = Calendar.getInstance();
		calendar.setTime(date);
		calendar.setTime(dateSt);
		calendar.add(Calendar.DATE, -(dateCount));
		calendarSt.add(Calendar.DATE, 0);
		date = calendar.getTime();
		dateSt = calendarSt.getTime();
		Date now = new Date();
		String formatNow = sdf.format(dateSt);// 截止时间
		String afterDate = sdf.format(date);// 开始时间
		formatNow = formatNow + " 23:59:59";
		afterDate = afterDate + " 00:00:00";
		Map<String, String> map = new HashedMap();
		map.put("formatNow", formatNow);
		map.put("afterDate", afterDate);

		// 在oracle中查询数据，然后进行遍历放在一个mapDateList里用来进行比对
		List<Map<String, Object>> list = systemMoniterDao.selectTrendData(map);
		List<Map<String, Object>> listCount = systemMoniterDao
				.selectHotCount(map);
		// 得出所有应该有的日期
		LinkedHashMap<Object, Object> allDataMap = new LinkedHashMap<Object, Object>();
		// Map<String, Map<String, Object>> allDataMap = new HashedMap();
		Date dateTime = new Date();
		Calendar calendarDate = Calendar.getInstance();
		calendar.setTime(dateTime);
		calendar.add(Calendar.DATE, -dateCount);
		List listRel = new ArrayList();
		List<Object> dateList = new ArrayList<Object>();
		for (int i = 0; i < dateCount; i++)
		{
			Map<String, Object> newMap = new HashedMap();
			calendar.add(Calendar.DATE, 1);
			date = calendar.getTime();
			String formatDate = sdf.format(date);
			System.out.println(formatDate);
			dateList.add(formatDate);
			newMap.put("301", 0);
			newMap.put("302", 0);
			newMap.put("304", 0);
			newMap.put("305", 0);
			newMap.put("allCount", 0);
			for (int j = 0; j < list.size(); j++)
			{
				Map<String, Object> oneMap = list.get(j);
				String oneReleaseTime = oneMap.get("RECORD_TIME").toString();
				if (oneReleaseTime.equals(formatDate))
				{
					String actionType = oneMap.get("ACTION_TYPE").toString();
					String counts = oneMap.get("COUNT").toString();
					int count = Integer.parseInt(counts);
					newMap.put(actionType, count);
				}

			}
			for (int j = 0; j < listCount.size(); j++)
			{
				Map<String, Object> twoMap = listCount.get(j);
				String twoReleaseTime = twoMap.get(
						"TO_CHAR(RECORD_TIME,'YYYY-MM-DD')").toString();
				if (twoReleaseTime.equals(formatDate))
				{
					String counts = twoMap.get("COUNT").toString();
					int count = Integer.parseInt(counts);
					newMap.put("allCount", count);
				}
			}

			allDataMap.put(formatDate, newMap);
		}
		// 概述
		Integer intCount = systemMoniterDao.dataHot(dateCount);
		List<Map<String, Object>> listAllCount = systemMoniterDao
				.dataAllHot(dateCount);
		System.out.println("listAllCount-+-+-+" + listAllCount);
		String cnCount = "0";
		String wcnCount = "0";
		String ckCount = "0";
		String btCount = "0";
		String dateString = "一周内";
		if (dateCount == 14)
		{
			dateString = "两周内";
		} else if (dateCount == 30)
		{
			dateString = "一月内";
		}
		if (listAllCount.size() != 0)
		{
			for (int j = 0; j < listAllCount.size(); j++)
			{
				Map<String, Object> mapAllCount = listAllCount.get(j);
				String hotString = mapAllCount.get("ACTION_TYPE").toString();
				if (hotString.equals("301"))
				{
					cnCount = mapAllCount.get("COUNT").toString();
				} else if (hotString.equals("302"))
				{
					wcnCount = mapAllCount.get("COUNT").toString();
				} else if (hotString.equals("304"))
				{
					ckCount = mapAllCount.get("COUNT").toString();
				} else if (hotString.equals("305"))
				{
					btCount = mapAllCount.get("COUNT").toString();
				}
			}
		}
		String hotDateString = dateString + "热点数据量为" + intCount + "条、采纳量"
				+ cnCount + "条，不采纳量" + wcnCount + "条、被查看" + ckCount + "条、设为专题"
				+ btCount + "条，数据同步正常。";
		allDataMap.put("hotView", hotDateString);
		this.objectToJson(allDataMap);
		return null;
		}
	//热点信息概述
	public String hotView() throws Exception
	{
		String watchCount = "0";
		String acceptCount = "0";
		String unAcceptCount = "0";
		String thematicCount = "0";
		List<Map<String, Object>> list = systemMoniterDao
				.selectHotRecordTimeAndCount();
		System.out.println("list-+-+-+-+-+-" + list);
		Map<String, Object> map = list.get(0);
		Object count = map.get("COUNT").toString();// 热点总条数
		Object recordTime = map.get("RECORDTIME").toString();// 最早时间
		System.out.println("count-+-+-+-+-+-" + count);
		System.out.println("recordTime-+-+-+-+-" + recordTime);

		List<Map<String, Object>> listAll = systemMoniterDao.selectViewData();
		System.out.println("listAll-+-+-+-+-+-" + listAll);
		ESSearchUtils es = ESSearchUtils.getInstance();
		for (int i = 0; i < listAll.size(); i++)
		{
			Map<String, Object> mapAll = listAll.get(i);
			System.out.println("mapAll-+-+-+-+" + mapAll);
			Object obj = mapAll.get("ACTION_TYPE");
			String object = obj.toString();
			System.out.println("object-+-+" + object);
			if (object.equals("304"))
			{
				watchCount = mapAll.get("COUNT").toString();
				System.out.println("已经阅读条数 ：" + watchCount);
			} else if (object.equals("301"))
			{
				acceptCount = mapAll.get("COUNT").toString();
				System.out.println("被采纳的条数 ：" + acceptCount);
			} else if (object.equals("302"))
			{
				unAcceptCount = mapAll.get("COUNT").toString();
				System.out.println("未采纳的条数 ：" + unAcceptCount);
			} else if (object.equals("305"))
			{
				thematicCount = mapAll.get("COUNT").toString();
				System.out.println("设为专题的条数 ：" + thematicCount);
			}
			System.out.println("i+-+-+-+-+" + i);
		}
		// 编写叙述
		String narrative = recordTime + "至今，系统共推出<font color = 'red'>" + count + "</font>条热点，其中已阅读<font color = 'red'>"
				+ watchCount + "</font>条，被采纳<font color = 'red'>" + acceptCount + "</font>条，不采纳<font color = 'red'>" + unAcceptCount
				+ "</font>条，设为专题<font color = 'red'>" + thematicCount + "</font>条";
		System.out.println(narrative);
		Map<String, Object> map2 = new HashedMap();
		map2.put("概述", narrative);
		this.objectToJson(map2);
		return null;
	}
	//采纳和未采纳情况
	public String hotAccept() throws Exception{

		Map<String, Object> map = new HashedMap();
		List<Map<String, Object>> listAccept = systemMoniterDao
				.selectAccept(acceptDays);
		List<Map<String, Object>> listUnAccept = systemMoniterDao
				.selectUnAccept(unAcceptDays);
		System.out.println("listUnAccept+-+-+-+-" + listUnAccept);
		System.out.println("listAccept+-+-+-+-" + listAccept);
		map.put("accept", listAccept);
		map.put("Unaccept", listUnAccept);

		String titleAccept = "无";
		String titleUnAccept = "无";
		if (listAccept.size() > 0)
		{
			Map mapAccept = listAccept.get(0);
			titleAccept = (String) mapAccept.get("TITLE");
			System.out.println("-+-+-+-" + titleAccept);
		}
		if (listUnAccept.size() > 0)
		{
			Map mapUnAccept = listUnAccept.get(0);
			titleUnAccept = (String) mapUnAccept.get("TITLE");
			System.out.println("-+-+-+-+-" + titleUnAccept);
		}
		String acceptTime="";
		String unAcceptTime="";
		//判断采纳的天数
		if (acceptDays==1)
		{
			acceptTime="今日";
		}else if (acceptDays==3)
		{
			acceptTime="三日内";
		}else if (acceptDays==7)
		{
			acceptTime="一周内";
		}else if (acceptDays==30)
		{
			acceptTime="一月内";
		}
		//判断不采纳的天数
		if (unAcceptDays==1)
		{
			unAcceptTime="今日";
		}else if (unAcceptDays==3)
		{
			unAcceptTime="三日内";
		}else if (unAcceptDays==7)
		{
			unAcceptTime="一周内";
		}else if (unAcceptDays==30)
		{
			unAcceptTime="一月内";
		}
		//判断采纳和不采纳是否天数相同
		if (acceptDays==unAcceptDays)
		{
			unAcceptTime="";
		}
		
		
		String msg = "总结：";
		if(titleAccept.equals("无")){
			msg += acceptTime + titleAccept + "被采纳热点，";
		}else{
			msg += acceptTime + titleAccept + "热点关注度较高，";
		}
		
		if(titleUnAccept.equals("无")){
			msg += unAcceptTime + titleUnAccept + "不采纳热点。";
		}else{
			msg += unAcceptTime + titleUnAccept + "热点误报率较高。";
		}

		map.put("data", msg);
		this.objectToJson(map);
		return null;
		}
	
	//舆情监控-------------------------------------------------
	//舆情信息概述
	public String articleView() throws Exception
	{
		String watchCount = "0";
		String acceptCount = "0";
		String unAcceptCount = "0";
		String thematicCount = "0";
		List<Map<String, Object>> list = systemMoniterDao
				.selectArticleRecordTimeAndCount();
		System.out.println("list-+-+-+-+-+-" + list);
		Map<String, Object> map = list.get(0);
		Object count = map.get("COUNT").toString();// 热点总条数
		Object recordTime = map.get("RECORDTIME").toString();// 最早时间
		System.out.println("count-+-+-+-+-+-" + count);
		System.out.println("recordTime-+-+-+-+-" + recordTime);

		List<Map<String, Object>> listAll = systemMoniterDao
				.selectArticleTimeAndCount();
		System.out.println("listAll-+-+-+-+-+-" + listAll);
		ESSearchUtils es = ESSearchUtils.getInstance();
		for (int i = 0; i < listAll.size(); i++)
		{
			Map<String, Object> mapAll = listAll.get(i);
			System.out.println("mapAll-+-+-+-+" + mapAll);
			Object obj = mapAll.get("ACTION_TYPE");
			String object = obj.toString();
			System.out.println("object-+-+" + object);
			if (object.equals("304"))
			{
				watchCount = mapAll.get("COUNT").toString();
				System.out.println("已经阅读条数 ：" + watchCount);
			} else if (object.equals("301"))
			{
				acceptCount = mapAll.get("COUNT").toString();
				System.out.println("被采纳的条数 ：" + acceptCount);
			} else if (object.equals("302"))
			{
				unAcceptCount = mapAll.get("COUNT").toString();
				System.out.println("未采纳的条数 ：" + unAcceptCount);
			} else if (object.equals("305"))
			{
				thematicCount = mapAll.get("COUNT").toString();
				System.out.println("设为专题的条数 ：" + thematicCount);
			}
			System.out.println("i+-+-+-+-+" + i);
		}
		// 编写叙述
		String narrative = recordTime + "至今，系统共推出<font color = 'red'>" + count + "</font>条舆情，其中已阅读<font color = 'red'>"
				+ watchCount + "</font>条，被采纳<font color = 'red'>" + acceptCount + "</font>条，不采纳<font color = 'red'>" + unAcceptCount
				+ "</font>条，设为专题<font color = 'red'>" + thematicCount + "</font>条";
		System.out.println(narrative);
		Map<String, Object> map2 = new HashedMap();
		map2.put("概述", narrative);
		this.objectToJson(map2);
		return null;
	}
	//采纳和未采纳情况
	public String articleAccept() throws Exception{

		Map<String, Object> map = new HashedMap();
		List<Map<String, Object>> listAccept = systemMoniterDao
				.selectArticleAccept(acceptDays);
		List<Map<String, Object>> listUnAccept = systemMoniterDao
				.selectArticleUnAccept(unAcceptDays);
		
		map.put("accept", listAccept);
		map.put("Unaccept", listUnAccept);

		String titleAccept = "无";
		String titleUnAccept = "无";
		if (listAccept.size() > 0)
		{
			Map mapAccept = listAccept.get(0);
			titleAccept = (String) mapAccept.get("TITLE");
		}
		if (listUnAccept.size() > 0)
		{
			Map mapUnAccept = listUnAccept.get(0);
			titleUnAccept = (String) mapUnAccept.get("TITLE");
		}
		String acceptTime = "";
		String unAcceptTime = "";
		// 判断采纳的天数
		if (acceptDays == 1)
		{
			acceptTime = "今日";
		} else if (acceptDays == 3)
		{
			acceptTime = "三日内";
		} else if (acceptDays == 7)
		{
			acceptTime = "一周内";
		} else if (acceptDays == 30)
		{
			acceptTime = "一月内";
		}
		// 判断不采纳的天数
		if (unAcceptDays == 1)
		{
			unAcceptTime = "今日";
		} else if (unAcceptDays == 3)
		{
			unAcceptTime = "三日内";
		} else if (unAcceptDays == 7)
		{
			unAcceptTime = "一周内";
		} else if (unAcceptDays == 30)
		{
			unAcceptTime = "一月内";
		}
		// 判断采纳和不采纳是否天数相同
		if (acceptDays == unAcceptDays)
		{
			unAcceptTime = "";
		}
		
		String msg = "总结：";
		if(titleAccept.equals("无")){
			msg += acceptTime + titleAccept + "被采纳舆情，";
		}else{
			msg += acceptTime + titleAccept + "舆情关注度较高，";
		}
		
		if(titleUnAccept.equals("无")){
			msg += unAcceptTime + titleUnAccept + "不采纳舆情。";
		}else{
			msg += unAcceptTime + titleUnAccept + "舆情误报率较高。";
		}

		map.put("data", msg);
		this.objectToJson(map);
		return null;
		}
	//舆情信息趋势统计数据
	public String articleInfoData() throws Exception{
		//int dateCount = 7;
		Map<String, Object> mapData = new HashedMap();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		Date date = new Date();
		Date dateSt = new Date();
		Calendar calendar = Calendar.getInstance();
		Calendar calendarSt = Calendar.getInstance();
		calendar.setTime(date);
		calendar.setTime(dateSt);
		calendar.add(Calendar.DATE, -(dateCount));
		calendarSt.add(Calendar.DATE, 0);
		date = calendar.getTime();
		dateSt = calendarSt.getTime();
		Date now = new Date();
		String formatNow = sdf.format(dateSt);// 截止时间
		String afterDate = sdf.format(date);// 开始时间
		formatNow = formatNow + " 23:59:59";
		afterDate = afterDate + " 00:00:00";
		Map<String, String> map = new HashedMap();
		map.put("formatNow", formatNow);
		map.put("afterDate", afterDate);

		// 在oracle中查询数据，然后进行遍历放在一个mapDateList里用来进行比对
		List<Map<String, Object>> list = systemMoniterDao
				.selectArticleTrendData(map);
		List<Map<String, Object>> listCount = systemMoniterDao
				.selectArticleCount(map);
		List<Map<String, Object>> listType = systemMoniterDao
				.selectArticleTrendTypeData(map);
		// 得出所有应该有的日期
		LinkedHashMap<Object, Object> allDataMap = new LinkedHashMap<Object, Object>();
		// Map<String, Map<String, Object>> allDataMap = new HashedMap();
		Date dateTime = new Date();
		Calendar calendarDate = Calendar.getInstance();
		calendar.setTime(dateTime);
		calendar.add(Calendar.DATE, -dateCount);
		List listRel = new ArrayList();
		List<Object> dateList = new ArrayList<Object>();
		for (int i = 0; i < dateCount; i++)
		{
			Map<String, Object> newMap = new HashedMap();
			calendar.add(Calendar.DATE, 1);
			date = calendar.getTime();
			String formatDate = sdf.format(date);
			System.out.println(formatDate);
			dateList.add(formatDate);
			newMap.put("1", 0);
			newMap.put("2", 0);
			newMap.put("3", 0);
			newMap.put("4", 0);
			newMap.put("7", 0);
			newMap.put("8", 0);
			newMap.put("301", 0);
			newMap.put("302", 0);
			newMap.put("303", 0);
			newMap.put("304", 0);
			newMap.put("305", 0);
			newMap.put("306", 0);
			newMap.put("allCount", 0);
			for (int j = 0; j < list.size(); j++)
			{
				Map<String, Object> oneMap = list.get(j);
				String oneReleaseTime = oneMap.get("RECORD_TIME").toString();
				if (oneReleaseTime.equals(formatDate))
				{
					String actionType = oneMap.get("ACTION_TYPE").toString();
					String counts = oneMap.get("COUNT").toString();
					int count = Integer.parseInt(counts);
					newMap.put(actionType, count);
				}
			}
			for (int j = 0; j < listCount.size(); j++)
			{
				Map<String, Object> twoMap = listCount.get(j);
				String twoReleaseTime = twoMap.get(
						"TO_CHAR(RECORD_TIME,'YYYY-MM-DD')").toString();
				if (twoReleaseTime.equals(formatDate))
				{
					String counts = twoMap.get("COUNT").toString();
					int count = Integer.parseInt(counts);
					newMap.put("allCount", count);
				}
			}
			for (int j = 0; j < listType.size(); j++)
			{
				Map<String, Object> typeMap = listType.get(j);
				String typeReleaseTime = typeMap.get("RECORD_TIME").toString();
				if (typeReleaseTime.equals(formatDate))
				{
					String infoType = typeMap.get("INFO_TYPE").toString();
					String counts = typeMap.get("COUNT").toString();
					int count = Integer.parseInt(counts);
					newMap.put(infoType, count);
				}
			}

			allDataMap.put(formatDate, newMap);
		}
		// 概述
		Integer intCount = systemMoniterDao.dataArticle(dateCount);
		List<Map<String, Object>> listAllCount = systemMoniterDao
				.dataAllArticle(dateCount);
		System.out.println("listAllCount-+-+-+" + listAllCount);
		String cnCount = "0";
		String wcnCount = "0";
		String ckCount = "0";
		String btCount = "0";
		String dateString = "一周内";
		if (dateCount == 14)
		{
			dateString = "两周内";
		} else if (dateCount == 30)
		{
			dateString = "一月内";
		}
		if (listAllCount.size() != 0)
		{
			for (int j = 0; j < listAllCount.size(); j++)
			{
				Map<String, Object> mapAllCount = listAllCount.get(j);
				String hotString = mapAllCount.get("ACTION_TYPE").toString();
				if (hotString.equals("301"))
				{
					cnCount = mapAllCount.get("COUNT").toString();
				} else if (hotString.equals("302"))
				{
					wcnCount = mapAllCount.get("COUNT").toString();
				} else if (hotString.equals("304"))
				{
					ckCount = mapAllCount.get("COUNT").toString();
				} else if (hotString.equals("305"))
				{
					btCount = mapAllCount.get("COUNT").toString();
				}
			}
		}
		String hotDateString = dateString + "舆情数据量为" + intCount + "条、采纳量"
				+ cnCount + "条，不采纳量" + wcnCount + "条、被查看" + ckCount + "条、设为专题"
				+ btCount + "条，数据同步正常。";
		allDataMap.put("hotView", hotDateString);
		this.objectToJson(allDataMap);
		return null;
		}
	

	
	
	
	//线索概述信息 
	public String clueOverview() throws Exception{
		int cluesCount = systemMoniterDao.cluesCount();
		int keyWordsCount = systemMoniterDao.keyWordsCount();
		int secondCluesClassify = systemMoniterDao.secondCluesClassify();
		List<Map<String,Object>> rerocdInfo = systemMoniterDao.rerocdInfo();
		Map<String, Object> infoFirst = rerocdInfo.get(0);
		int SYNC_TYPE = Integer.valueOf(infoFirst.get("SYNC_TYPE").toString());//发布到内网还是往外 内:0   外:1
		String REROCD_TIME = infoFirst.get("REROCD_TIME").toString();
		REROCD_TIME = REROCD_TIME.substring(11, REROCD_TIME.length()-2);
		String MESSAGE = infoFirst.get("MESSAGE").toString();
		int STATUS =Integer.valueOf(infoFirst.get("STATUS").toString());
		String type="";//长度为1的时候的种类
		String success="";//长度为1的时候是否成功
		String shiBai="";
		String typeSecond="";
		String successSecond="";
		String shiBaiSecond="";
		String second ="";
		if(STATUS==0){
			success="失败";
			shiBai="。原因"+MESSAGE+"。";
			
		}else{
			success="成功。";
		}
		if(SYNC_TYPE==0){
			type="内网";
		}else{
			type ="外网";
		}
		if(rerocdInfo.size()>1){
			Map<String, Object> infoSecond = rerocdInfo.get(1);
			int SYNC_TYPE_SECOND = Integer.valueOf(infoSecond.get("SYNC_TYPE").toString());
			int STATUS_SECOND = Integer.valueOf(infoSecond.get("STATUS").toString());
			String MESSAGE_SECOND = infoSecond.get("MESSAGE").toString();
			if(STATUS_SECOND==0){
				successSecond="失败";
				shiBaiSecond="。原因"+MESSAGE_SECOND+"。";
			}else{
				successSecond="成功。";
			}
			if(SYNC_TYPE_SECOND==0){
				 typeSecond="内网";
			}else{
				 typeSecond="外网";
			}
			second="同步到"+typeSecond+""+successSecond+""+shiBaiSecond;
			
		}
		//<FONT color='red'>加红加粗</FONT>
		String text = "目前线索库共收录<font color='red'>"+cluesCount+"</font>条线索，共<font color='red'>"+keyWordsCount+"</font>条关键词，涉及到<font color='red'>"+secondCluesClassify+"</font>种类别。今日线索于"+REROCD_TIME+"同步到"+type+""+success+""+shiBai+""+second;
		Map<Object, Object> map = new HashedMap();
		map.put("text", text);
		objectToJson(map);
		
		return null;
	}
	
	//内网数据以及概况
	public String clueSynchronizationNei() throws Exception{
		List<Map<String,Object>> rerocdInfo = systemMoniterDao.rerocdInfo();//用于语句拼接的数据
	
		//得出时间的map,还需要加入类型 0是内网 1是外网
		Map<String, Object> dateMap = new HashedMap();
		dateMap.put("dateCount", dateCount);
		
		dateMap.put("type", 0);
		List<Map<String,Object>> rangeDataAndNei = systemMoniterDao.rangeData(dateMap);	
		Map<String, Object> dateNow = rangeDataAndNei.get(rangeDataAndNei.size()-1);
		String neiText = getNeiWaiText(dateNow, 0);				
		Map<String, Object> map = new HashedMap();
		map.put("nei", rangeDataAndNei);
		map.put("text", neiText);
        this.objectToJson(map);
		return null;
	}
	
	//外网数据以及概况
	public String clueSynchronizationWai() throws Exception{
		List<Map<String,Object>> rerocdInfo = systemMoniterDao.rerocdInfo();//用于语句拼接的数据		
		//得出时间的map,还需要加入类型 0是内网 1是外网
		Map<String, Object> dateMap = new HashedMap();
		dateMap.put("dateCount", dateCount);
		
		dateMap.put("type", 1);
		List<Map<String,Object>> rangeDataAndWai = systemMoniterDao.rangeData(dateMap);
		Map<String, Object> dateNow = rangeDataAndWai.get(rangeDataAndWai.size()-1);
		String waiText = getNeiWaiText(dateNow,1);				
		Map<String, Object> map = new HashedMap();
		map.put("wai", rangeDataAndWai);
		map.put("text", waiText);
        this.objectToJson(map);
		return null;
	}

	//活跃词
	public String activeWord() throws Exception{
		
		Map<String, Object> map = new HashedMap();
		map.put("count", activeCount);
		List<Map<String,Object>> activeCluesAndZeroIdName = systemMoniterDao.activeCluesAndZeroIdName(map);
		System.out.println(activeCluesAndZeroIdName.toString());
		
		Map<String, Object> textMap = new HashedMap();
		int totalCount = systemMoniterDao.variousTotal(textMap);//总次数
		
		textMap.put("msgCount", activeCount);
		int active = systemMoniterDao.variousTotal(textMap);//活跃次数
		
		textMap.put("zeroId", 1);//人物 1
		int renwuAndcount = systemMoniterDao.variousTotal(textMap);//人物分类内活跃线索词
		
		textMap.put("zeroId", 2);//政策法规 2
		int zhengceAndcount = systemMoniterDao.variousTotal(textMap);//政策分类内活跃线索词
		
		textMap.remove("msgCount");
		textMap.put("zeroId", 1);//人物 1
		int renwu = systemMoniterDao.variousTotal(textMap);//人物总数量
		
		textMap.put("zeroId", 2);//政策法规 2
		int fagui = systemMoniterDao.variousTotal(textMap);//政策总数量
		
		DecimalFormat dt=new DecimalFormat(".00");
		
		float zong =((float)active/totalCount*100);
		String zongZhan = dt.format(zong);//总占比
		
		float renWunei =((float)renwuAndcount/renwu*100);
		String renWuzhan = dt.format(renWunei);//人物占比
		
		float zhengCenei =((float)zhengceAndcount/fagui*100);
		String zhengCezhan = dt.format(zhengCenei);//政策相关占比
		
		String text ="目前，活跃线索共"+active+"条，总占比"+zongZhan+"%。人物相关"+renwuAndcount+"条，内占比"+renWuzhan+"%，政策相关"+zhengceAndcount+"条，内占比"+zhengCezhan+"%。";
		//注：总占比 = 活跃线索词 / 总次数；内占比 = 某个分类内活跃线索词 / 该分类线索词总数
		
		Map<Object, Object> allMap = new HashedMap();
		allMap.put("pictureAndRank", activeCluesAndZeroIdName);
		allMap.put("text", text);
		
		this.objectToJson(allMap);
		return null;
	}
	
	//僵尸词
	public String zombieWord() throws Exception{
		
		Map<String, Object> map = new HashedMap();
		map.put("count", zombieCount);
		List<Map<String,Object>> zombieCluesAndZeroIdName = systemMoniterDao.zombieCluesAndZeroIdName(map);
		System.out.println(zombieCluesAndZeroIdName.toString());
		
		Map<String, Object> textMap = new HashedMap();
		int totalCount = systemMoniterDao.variousTotal(textMap);//总次数
		
		textMap.put("msgCount", activeCount);
		int active = systemMoniterDao.zombievariousTotal(textMap);//活跃次数
		
		textMap.put("zeroId", 1);//人物 1
		int renwuAndcount = systemMoniterDao.zombievariousTotal(textMap);//人物分类内活跃线索词
		
		textMap.put("zeroId", 2);//政策法规 2
		int zhengceAndcount = systemMoniterDao.zombievariousTotal(textMap);//政策分类内活跃线索词
		
		textMap.remove("msgCount");
		textMap.put("zeroId", 1);//人物 1
		int renwu = systemMoniterDao.zombievariousTotal(textMap);//人物总数量
		
		textMap.put("zeroId", 2);//政策法规 2
		int fagui = systemMoniterDao.zombievariousTotal(textMap);//政策总数量
		
		DecimalFormat dt=new DecimalFormat(".00");
		
		float zong =((float)active/totalCount*100);
		String zongZhan = dt.format(zong);//总占比
		
		float renWunei =((float)renwuAndcount/renwu*100);
		String renWuzhan = dt.format(renWunei);//人物占比
		
		float zhengCenei =((float)zhengceAndcount/fagui*100);
		String zhengCezhan = dt.format(zhengCenei);//政策相关占比
		
		String text ="目前，僵尸线索共"+active+"条，总占比"+zongZhan+"%。人物相关"+renwuAndcount+"条，内占比"+renWuzhan+"%，政策相关"+zhengceAndcount+"条，内占比"+zhengCezhan+"%。";
		//注：总占比 = 活跃线索词 / 总次数；内占比 = 某个分类内活跃线索词 / 该分类线索词总数
		
		Map<Object, Object> allMap = new HashedMap();
		allMap.put("pictureAndRank", zombieCluesAndZeroIdName);
		allMap.put("text", text);
		
		this.objectToJson(allMap);
		return null;
	}
	
	//添加日志
	public String addLog() throws Exception{
		try {
			int idAndTag = systemMoniterDao.selectIdAndTag();
			
			Map<String, Object> map = new HashedMap();//存放参数
			map.put("id", idAndTag);
			map.put("title", title);
			map.put("content", content);
			map.put("tag", idAndTag);
			map.put("release_Time", releaseTime);
			systemMoniterDao.addLog(map);
			HttpServletResponse response = ServletActionContext.getResponse();
			response.setContentType("text/html;charset=UTF-8");// 解决中文乱码
			response.getWriter().write(1);//1成功,0失败
			
		} catch (Exception e) {
			e.printStackTrace();
			HttpServletResponse response = ServletActionContext.getResponse();
			response.setContentType("text/html;charset=UTF-8");// 解决中文乱码
			response.getWriter().write(0);//1成功,0失败
		}
		
		return null;
	}
	
	public String selectLog() throws Exception{
		List<Map<String,Object>> selectLog = systemMoniterDao.selectLog();
		Map<String, Object> map = new HashedMap();
		map.put("logData", selectLog);
		this.objectToJson(map);
		return null;
	}
	
	
	
	
	
	
	//获得内网外网概述的工具
	private String getNeiWaiText(Map<String, Object> dateNow,int neiOrwai) {
		Object message = dateNow.get("MESSAGE");
		Object total = dateNow.get("TOTAL").toString();
		Object saveCount = dateNow.get("SAVE_COUNT");
		Object updateCount = dateNow.get("UPDATE_COUNT");
		Object deleteCount = dateNow.get("DELETE_COUNT");
		Object wornCluescount = dateNow.get("WORN_CLUES_COUNT");
		String type ="";
		if(total==null){
			total=0;
		}
		if(saveCount==null){
			saveCount=0;
		}
		if(updateCount==null){
			updateCount=0;
		}
		if(deleteCount==null){
			deleteCount=0;
		}
		if(wornCluescount==null){
			wornCluescount=0;
		}
		
		if(neiOrwai==0){
			type = "内网";
		}
		if(neiOrwai==1){
			type = "外网";
		}
		String text ="今日"+type+"数据"+message+"、共同步"+total+"条线索。新增"+saveCount+"条、更新"+updateCount+"条、删除"+deleteCount+"条、失败"+wornCluescount+"条。";

		return text;
	}
	
	
}
