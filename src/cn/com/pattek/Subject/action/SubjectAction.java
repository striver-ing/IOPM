package cn.com.pattek.Subject.action;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;

import org.apache.commons.collections.map.HashedMap;
import org.apache.struts2.ServletActionContext;
import org.jboss.netty.handler.codec.http.HttpResponse;
import org.springframework.beans.factory.annotation.Autowired;

import cn.com.pattek.Subject.dao.SubjectDao;
import cn.com.pattek.Subject.entity.TabIopmSubject;
import cn.com.pattek.core.struts2.BaseAction;
import cn.com.pattek.core.struts2.JsonUtils;
import cn.com.pattek.utils.ESSearchUtils;


public class SubjectAction extends BaseAction{


	@Autowired
	private SubjectDao subjectDao;

	/** 专题名称 **/
	private String name;
	/** 开始时间 **/
	private String startTime;
	/** 结束时间 **/
	private String endTime;
	/** 包含的关键词 （空格表示与， 逗号表示或） **/
	private String keyword1;
	/** 不包含的关键词（空格表示与 ，逗号表示或） **/
	private String keyword2;
	
	private static String subjectName;//前台接受的专题名字
	
	
    //舆情分析
	public String getTimeInfoType() throws Exception{
			//private Date releasetime("yyyy-MM-dd hh:mm:ss");
		String keyWord1 = subjectDao.subjectKeyWord1(1L);
		ESSearchUtils es = ESSearchUtils.getInstance();
		//Date releasetime = subjectDao.SelectFristTime(keyWord1);
		String releaseTime = "2017-09-22 00:00:00";
		String sql = "select TITLE, WEBSITE_NAME, RELEASE_TIME, URL from tab_iopm_article_info where INFO_TYPE = 1 and RELEASE_TIME >= '"+releaseTime+"'limit 1";
		List<Object> resultsOne = es.searchBySql(sql);
		
		ArrayList<Object> resOne = (ArrayList<Object>)resultsOne.get(1);
		Object resultOne = resOne.get(0);
		JSONObject json2 = JSONObject.fromObject(resultOne);
		Object title2 = json2.get("TITLE");
		Object releaseTime2 =  json2.get("RELEASE_TIME");
		Object websiteName2 = json2.get("WEBSITE_NAME");
		Object url2 = json2.get("URL");
		System.out.println("类别--新闻");
		System.out.println("站点--"+websiteName2);
		System.out.println("标题--"+title2);
		System.out.println("发布时间--"+releaseTime2.toString());
		System.out.println("路径--"+url2);
		this.arrayToJson(json2);
		
		String sqlTwo = "select TITLE, WEBSITE_NAME, RELEASE_TIME, URL from tab_iopm_article_info where INFO_TYPE = 2 and RELEASE_TIME >= '"+releaseTime+"'limit 1";
		List<Object> resultsTwo = es.searchBySql(sqlTwo);
		ArrayList<Object> resTwo = (ArrayList<Object>)resultsTwo.get(1);
		Object resultTwo = resTwo.get(0);
		JSONObject json3 = JSONObject.fromObject(resultTwo);
		Object title3 = json3.get("TITLE");
		Object releaseTime3 = json3.get("RELEASE_TIME");
		Object websiteName3 = json3.get("WEBSITE_NAME");
		Object url3 = json3.get("URL");
		System.out.println("类别--微信");
		System.out.println("站点--"+websiteName3);
		System.out.println("标题--"+title3);
		System.out.println("发布时间--"+releaseTime3.toString());
		System.out.println("路径--"+url3);
		this.arrayToJson(json3);
		
		String sqlThree = "select TITLE, WEBSITE_NAME, RELEASE_TIME, URL from tab_iopm_article_info where INFO_TYPE = 3 and RELEASE_TIME >= '"+releaseTime+"'limit 1";
		List<Object> resultsThree = es.searchBySql(sqlThree);
		ArrayList<Object> resThree = (ArrayList<Object>)resultsThree.get(1);
		Object resultThree = resThree.get(0);
		JSONObject json4 = JSONObject.fromObject(resultThree);
		Object title4 = json4.get("TITLE");
		Object releaseTime4 =  json4.get("RELEASE_TIME");
		Object websiteName4 = json4.get("WEBSITE_NAME");
		Object url4 = json4.get("URL");
		System.out.println("类别--微博");
		System.out.println("站点--"+websiteName4);
		System.out.println("标题--"+title4);
		System.out.println("发布时间--"+releaseTime4.toString());
		System.out.println("路径--"+url4);
		this.arrayToJson(json2);

		
	//事件溯源分析概述
		String sqlFive = "select RELEASE_TIME, WEBSITE_NAME, AUTHOR, TITLE, INFO_TYPE from tab_iopm_article_info where RELEASE_TIME >= '"+releaseTime+"'limit 1";
		List<Object> selectFirst = es.searchBySql(sqlFive);
		ArrayList<Object> selFirst = (ArrayList<Object>)selectFirst.get(1);
		Object object111 = selFirst.get(0);
		JSONObject json5 = JSONObject.fromObject(object111);
		Object author5 = json5.get("AUTHOR");
		Object releaseTime5 = json5.get("RELEASE_TIME");
		Object websiteName5 = json5.get("WEBSITE_NAME");
		Object title5 = json5.get("TITLE");
		Object infoType5 = json5.get("INFO_TYPE");
		this.arrayToJson(json5);
		System.out.println(author5.toString());
		
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"); 
		Date date1 =format.parse(json2.get("RELEASE_TIME").toString());
		Date date2=format.parse(json3.get("RELEASE_TIME").toString());
		Date date3=format.parse(json4.get("RELEASE_TIME").toString());
	
		String  b = null;   //排名第二个站点
		String  c = null;   //排名第三个站点
		int i = date1.compareTo(date2); 
		int y = date2.compareTo(date3);
		int z = date1.compareTo(date3);
		
		//根据发布时间，查出第二第三的站点
       if (i<0||y<0) {
		b=websiteName3.toString();
		c=websiteName4.toString();
			}else if (z<0||y>0) {
				b=websiteName4.toString();
				c=websiteName3.toString();
			}else if (i>0||z>0) {
				b=websiteName2.toString();
				c=websiteName4.toString();
			}else if (y<0||z>0) {
				b=websiteName2.toString();
				c=websiteName4.toString();
			}else if (i>0||y>0) {
				b=websiteName2.toString();
				c=websiteName3.toString();
			}else if (i<0||z>0) {
				b=websiteName3.toString();
				c=websiteName2.toString();
			}
       
			//判断作者是否为空
			if (author5.toString() == "null"){
				author5="";
			}else {
				author5 =author5+"在";
			}
			System.out.println("经传播溯源分析发现," + releaseTime5.toString() +"," +  author5  + websiteName5+"站点发布标题为《" + title5 + "》的" + infoType5 + "(类别1为新闻)论坛信息，是该事件传播的源头信息。其后" + b +"、"+ c + "等站点相继发布相关信息，事件传播影响力渐次扩大.");
			return null;
				}


	/**
	 * 十二、	根据情感波动查询
	 * @return
	 */		
	public String getEmotionBoDong() throws Exception{
		String keyWord1 = subjectDao.subjectKeyWord1(1L);
		//查出每情感波动的，类别，数量，时间
		List<Map<String, Object>> list = subjectDao.EmotionBoDong(keyWord1);
		Map map = new HashedMap();
		
	     Set keySet = map.keySet();
	      Iterator it = keySet.iterator();

	     while(it.hasNext()) {
	         Object key = it.next();
	         Object value = map.get(key);
	         System.out.println(key+":"+value);
	     }
		map.put("emotionTimeAndcount",list);
		this.objectToJson(map);
		return null;
		}
	
	/**
	 * 十二、	根据情感波动比例
	 * @return
	 */
	public String getEmotionBoDongBiLi() throws Exception{
		String keyWord1 = subjectDao.subjectKeyWord1(1L);
		
	//查出每天,以及信息类型,以及数量
		List<Map<String, Object>> list1 = subjectDao.EmotionBoDongBiLi(keyWord1);
		Map map = new HashedMap();
		map.put("emotionAndCount",list1);
		this.objectToJson(map);

	//模块下的概述
	    Integer selectNum = subjectDao.SelectNum(keyWord1);        //总共条数
		String subjectEndTim = subjectDao.subjectEnd(keyWord1);    //截止日期
		System.out.println("截止时间为"+subjectEndTim);
		
		this.arrayToJson(selectNum);
		//this.arrayToJson(subjectEndTim);
		System.out.println("共计条数："+selectNum);
		System.out.println("截至" + subjectEndTim +"，网民共发布评论" + selectNum +"条，中立评论占主流。其中XX.XX%的网民持正面观点，XX.XX%的网民持负面观点，XX.XX%的网民持中立观点。");

	return null;
	}
	

	


	//添加专题
	public String addSubject() throws Exception{
		System.out.println("我来添加了");
		TabIopmSubject tabIopmSubject = new TabIopmSubject();
	    tabIopmSubject.setName(name);
	    tabIopmSubject.setStartTime(startTime + " 00:00:00");
	    tabIopmSubject.setEndTime(endTime + " 23:59:59");
	    tabIopmSubject.setKeyword1(keyword1);
	    tabIopmSubject.setKeyword2(keyword2);
/*	    Date date = new Date();
	    DateTime dateTime = new DateTime();
	    SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");*/
	   
	subjectDao.addSubject(tabIopmSubject);
		return null;
		
	}
	
	//查询所有专题
	public String selectAllSubject() throws Exception{
		
		List<Map<String, Object>> list2 = subjectDao.selectAllSubject();
		this.arrayToJson(list2);
		return null;
	}
	//查询专题信息,用于判断是否有该专题
	public String searchSubject() throws Exception{
		System.out.println(subjectName);
		List<Map<String,Object>> searchSubject = subjectDao.searchSubject(subjectName);
		subjectName ="哈哈";
		System.out.println(subjectName);
		return null;
	}
	
	//模糊查询返回提示框
	public String searchSubjectLikeByName() throws Exception{
		List<Map<String,Object>> selectLikeSubject = subjectDao.selectLikeSubject(subjectName);
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("text/html;charset=UTF-8");// 解决中文乱码
		Map<String, Object> map = selectLikeSubject.get(0);
		response.getWriter().write(JsonUtils.fromArray(selectLikeSubject));
		return null;
	}

	
	//舆情概述拼接版(直接可以返回字符串)
	public String startAndEndSbujectById() throws Exception {
		/*HttpServletRequest request = ServletActionContext.getRequest();
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("application/json;charset=UTF-8");*/
		/*//获取前台传入的id
		String id = request.getParameter("aaa");
		//将获取到的id转换成Long类型
		Long value = Long.valueOf(id);*/
		ESSearchUtils es = ESSearchUtils.getInstance();
		
		String keyWord1 = subjectDao.subjectKeyWord1(1L);
		StringBuffer str = subjectDao.splitKeyWord1(keyWord1);
		System.out.println("关键字为"+keyWord1);
		String subjectStart = subjectDao.subjectStart(1L);
		System.out.println("开始检测时间为"+subjectStart);
		
		//通过id查出关键字
		
		/*map.put("keyWord", subjectKeyWord1);*/
		//情感
/*		List<Map<String, Object>> emotionCount = subjectDao.getTimeAndEmotionCount(keyWord1);
		//查询出日期,和主流媒体数量
		List<Map<String, Object>> vipCount = subjectDao.getTimeAndVipCount(keyWord1);
		//查询出降序日期,以及类型,和数量
		List<Map<String,Object>> timeAndCount = subjectDao.getTimeAndCount(keyWord1);*/
		//通过关键字查询最后时间
		String subjectEnd = subjectDao.subjectEnd(keyWord1);
		
		System.out.println("专题最后一次出现的时间为"+subjectEnd);
		
		String subjectFirst = subjectDao.subjectFirst(keyWord1);
		System.out.println("专题第一次出现的时间为"+subjectFirst);

		//新闻数量
		StringBuffer newsSql =new StringBuffer();
		newsSql.append("select count(INFO_TYPE) from tab_iopm_article_info where TITLE LIKE");
		newsSql.append(str);
		newsSql.append("and INFO_TYPE =1");
		System.out.println(newsSql);
		String newsSql1 = newsSql.toString();
		List<Object> searchBySqlnews = es.searchBySql(newsSql1);
		System.out.println("新闻数量为"+searchBySqlnews.get(0));
		
		
		//微博数量
		StringBuffer  weiboSql = new StringBuffer();
		weiboSql.append("select count(INFO_TYPE) from tab_iopm_article_info where TITLE LIKE");
		weiboSql.append(str);
		weiboSql.append("and INFO_TYPE=3");
		String weiboSql1 = weiboSql.toString();
		List<Object> searchBySqlweibo = es.searchBySql(weiboSql1);
		System.out.println("微博数量为"+searchBySqlweibo.get(0));
		
		//论坛数量
		StringBuffer luntanSql = new StringBuffer();
		luntanSql.append("select count(INFO_TYPE) from tab_iopm_article_info where TITLE LIKE");
		luntanSql.append(str);
		luntanSql.append("and INFO_TYPE=4");
		String luntanSql1 = luntanSql.toString();
		List<Object> searchBySqlluntan = es.searchBySql(luntanSql1);
		System.out.println("论坛数量为"+searchBySqlluntan.get(0));
		
		//视频
		StringBuffer videoSql = new StringBuffer();
		videoSql.append("select count(INFO_TYPE) from tab_iopm_article_info where TITLE LIKE");
		videoSql.append(str);
		videoSql.append("and INFO_TYPE=8");
		String videoSql1 = videoSql.toString();
		List<Object> searchBySqlvideo = es.searchBySql(videoSql1);
		System.out.println("视频数量为"+searchBySqlvideo.get(0));
		
		//微信
		StringBuffer weixinSql = new StringBuffer();
		weixinSql.append("select count(INFO_TYPE) from tab_iopm_article_info where TITLE LIKE");
		weixinSql.append(str);
		weixinSql.append("and INFO_TYPE=2");
		String weixinSql1 = videoSql.toString();
		List<Object> searchBySqlweixin = es.searchBySql(weixinSql1);
		System.out.println("微信数量为"+searchBySqlweixin.get(0));
		
		//站点与标题
		StringBuffer webNAndT = subjectDao.splitKeyWord1(keyWord1);
		String s1 = webNAndT.toString();
		String webNameAndTitleName ="SELECT WEBSITE_NAME,TITLE FROM tab_iopm_article_info where TITLE LIKE "+s1+"AND RELEASE_TIME ='"+subjectFirst+"'";
		List<Object> webAndTitle = es.searchBySql(webNameAndTitleName);
		ArrayList<Object> webAndTitle1 = (ArrayList<Object>)webAndTitle.get(1);
		Object webAndTitle10 = webAndTitle1.get(0);
		JSONObject json2 = JSONObject.fromObject(webAndTitle10);
		Object title = json2.get("TITLE");
		Object websiteName = json2.get("WEBSITE_NAME");
		
		System.out.println("站点名称为"+websiteName);
		
		System.out.println("第一次出现标题为"+title);
		
		//高峰时间
		StringBuffer peakTimeB = subjectDao.splitKeyWord1(keyWord1);
		String s2 = peakTimeB.toString();
		String peakTimeSql ="SELECT RELEASE_TIME FROM tab_iopm_article_info where TITLE LIKE "+s2+" order by RELEASE_TIME LIMIT 1";
		List<Object> peakTime = es.searchBySql(peakTimeSql);
		ArrayList<Object> peakTime1 = (ArrayList<Object>)peakTime.get(1);
		Object peakTime10 = peakTime1.get(0);
		JSONObject json3 = JSONObject.fromObject(peakTime10);
		Object peaktime = json3.get("RELEASE_TIME");
		System.out.println("高峰时间"+peaktime);
		
		String a1=null;
		Integer sumCount = Integer.valueOf((Integer) searchBySqlnews.get(0)) + Integer.valueOf((Integer) searchBySqlweibo.get(0)) + Integer.valueOf((Integer) searchBySqlluntan.get(0))+ Integer.valueOf((Integer) searchBySqlweixin.get(0)) + Integer.valueOf((Integer) searchBySqlvideo.get(0));
		if(sumCount>1000){
			a1="信息量极大,舆论关注度高,传播影响力大";
		}else if (sumCount<=1000 && sumCount>=100) {
			a1="信息量一般,舆论关注度一般,传播影响力一般";
		}else {
			a1="信息量小,舆论关注度小,传播影响力小";
		}
		String yuqing = "该分析报告的监测时间为"+subjectStart+"至"+subjectEnd+"，监测关键词主要包含“"+keyWord1+"”，监测数据全面覆盖了境内外互联网新闻、博客、论坛、微博和视频等多类型站点。";
		String yuqing2 = "在上述监测时间范围内，网上共计发布相关新闻"+searchBySqlnews.get(0)+"篇、微博"+searchBySqlweibo.get(0)+"篇、论坛主题帖"+searchBySqlluntan.get(0)+"篇、视频"+searchBySqlvideo.get(0)+"个。首条信息于"+subjectFirst+"发布在"+websiteName+"站点，标题为《"+title+"》。舆论最高峰出现在"+peaktime+"。总体而言，新闻媒体以及微博等社交媒体关于“"+keyWord1+"”事件的"+a1+"。";
		Map<String, String> map =new HashedMap();
		map.put("Public_sentiment1", yuqing);
		map.put("Public_sentiment2", yuqing2);
		
		System.out.println("该分析报告的监测时间为"+subjectStart+"至"+subjectEnd+"，监测关键词主要包含“"+keyWord1+"”，监测数据全面覆盖了境内外互联网新闻、博客、论坛、微博和视频等多类型站点。");
		System.out.println("在上述监测时间范围内，网上共计发布相关新闻"+searchBySqlnews.get(0)+"篇、微博"+searchBySqlweibo.get(0)+"篇、微信"+searchBySqlweixin.get(0)+"论坛主题帖"+searchBySqlluntan.get(0)+"篇、视频"+searchBySqlvideo.get(0)+"个。首条信息于"+subjectFirst+"发布在"+websiteName+"站点，标题为《"+title+"》。舆论最高峰出现在"+peaktime+"。总体而言，新闻媒体以及微博等社交媒体关于“"+keyWord1+"”事件的"+a1+"。");
		this.objectToJson(map);
		return null;
	}
	
	//事件阶段演化分析
	public String consensusByKeyWord() throws Exception{
		String keyWord1 = subjectDao.subjectKeyWord1(1L);
		//查出每天,以及信息类型,以及数量
		List<Map<String, Object>> list1 = subjectDao.getTimeAndCount(keyWord1);
		//查出主流媒体数量以及时间
		List<Map<String,Object>> list2 = subjectDao.getTimeAndVipCount(keyWord1);
		//查出总信息量
		List<Map<String,Object>> list3 = subjectDao.sumInfo(keyWord1);
		Map map = new HashedMap();
		map.put("InfoTypeAndCount",list1);
		map.put("VIPTimeAndCount",list2);
		map.put("SumInfo",list3);
		this.objectToJson(map);
		return null;
	}
	
	//主流媒体信息量
	public String evenStage() throws Exception{
		String keyWord1 = subjectDao.subjectKeyWord1(1L);
		
		//查询出日期,和主流媒体数量
		List<Map<String, Object>> vipCount = subjectDao.getTimeAndVipCount(keyWord1);
		
		
		//查询出降序日期,以及类型,和负面信息数量
		List<Map<String,Object>> timeAndCount = subjectDao.getTimeAndEmotionCount(keyWord1);
		
		Map map = new HashedMap();
		map.put("VIPCount", vipCount);
		map.put("badEmiton", timeAndCount);
		this.objectToJson(map);
		return null;
	}
	//微博平台传播趋势
	public String weiboCount() throws Exception{
		Map<String, Object> weiboMap = new HashedMap();
		String keyWord1 = subjectDao.subjectKeyWord1(1L);
		List<Map<String, Object>> weiBo = subjectDao.getWeiBo(keyWord1);
		this.arrayToJson(weiBo);
		return null;
	}
	//微信平台传播趋势
	public String weixinCount() throws Exception{
		Map<String, Object> weiboMap = new HashedMap();
		String keyWord1 = subjectDao.subjectKeyWord1(1L);
		List<Map<String, Object>> weiXin = subjectDao.getWeiXin(keyWord1);
		this.arrayToJson(weiXin);
		return null;
	}
	//主流媒体排名,以及负面
	public String MainstreamMedia() throws Exception{
		String keyWord1 = subjectDao.subjectKeyWord1(1L);
		//查询主流媒体信息总量
		List<Map<String, Object>> list = subjectDao.getMainstreamMedia(keyWord1);
		//查询主流媒体信息总量中的负面信息量
		List<Map<String,Object>> bad = subjectDao.getMainstreamMediaAndEmotionBad(keyWord1);
		Map map = new HashedMap();
		map.put("VIP", list);
		map.put("VIPAndbadEmiton", bad);
		this.objectToJson(map);
		/*this.arrayToJson(bad);
		
		this.arrayToJson(list);*/
		return null;
	}
	
	//微博平台各种排名
	public String weiboTrendRank() throws Exception{
//		HttpServletResponse response = ServletActionContext.getResponse();
//		response.setContentType("application/json;charset=UTF-8");
		String keyWord1 = subjectDao.subjectKeyWord1(1L);
		ESSearchUtils es = ESSearchUtils.getInstance();
		//最早排名前十
		StringBuffer earlySql =new StringBuffer();
		earlySql.append("SELECT RELEASE_TIME TIME,TITLE,WEBSITE_NAME FROM tab_iopm_article_info where TITLE like ");
		earlySql.append(subjectDao.splitKeyWord1(keyWord1));
		earlySql.append(" and INFO_TYPE=3 ORDER BY RELEASE_TIME ASC LIMIT 10 ");
		List<Object> early = es.searchBySql(earlySql.toString());
		Object early1 = early.get(1);
		
		//点赞最多前十
		StringBuffer upMaxSql =new StringBuffer();
		upMaxSql.append("SELECT RELEASE_TIME TIME,TITLE,WEBSITE_NAME FROM tab_iopm_article_info where TITLE like ");
		upMaxSql.append(subjectDao.splitKeyWord1(keyWord1));
		upMaxSql.append(" AND INFO_TYPE=3 ORDER BY UP_COUNT DESC LIMIT 10");
		List<Object> upMax = es.searchBySql(upMaxSql.toString());
		Object upMax1 = upMax.get(1);		
		
		//转发最多前十
		StringBuffer transmitSql =new StringBuffer();
		transmitSql.append("SELECT RELEASE_TIME TIME,TITLE,WEBSITE_NAME FROM tab_iopm_article_info where TITLE like ");
		transmitSql.append(subjectDao.splitKeyWord1(keyWord1));
		transmitSql.append(" AND INFO_TYPE=3 ORDER BY TRANSMIT_COUNT DESC LIMIT 10");
		List<Object> transmit = es.searchBySql(transmitSql.toString());
		Object transmit1 = transmit.get(1);		
		
		//评论最多
		StringBuffer commentSql =new StringBuffer();
		commentSql.append("SELECT RELEASE_TIME TIME,TITLE,WEBSITE_NAME FROM tab_iopm_article_info where TITLE like ");
		commentSql.append(subjectDao.splitKeyWord1(keyWord1));
		commentSql.append(" AND INFO_TYPE=3 ORDER BY COMMENT_COUNT DESC LIMIT 10");
		List<Object> comment = es.searchBySql(commentSql.toString());
		Object comment1 = comment.get(1);	
		
		
		Map map = new HashedMap();
		map.put("early", early1);
		map.put("upMax", upMax1);
		map.put("transmit", transmit1);
		map.put("comment", comment1);
		this.objectToJson(map);
/*		this.arrayToJson(early);
		this.arrayToJson(upMax);
		this.arrayToJson(transmit);
		this.arrayToJson(comment);*/
		return null;
	}
	
	//微博平台排名分析
	public String weiboTrendRandText() throws Exception{
		//截止至时间
		String keyWord1 = subjectDao.subjectKeyWord1(1L);
		String subjectEnd = subjectDao.subjectEndTime(1L);
		ESSearchUtils es = ESSearchUtils.getInstance();
		//相关信息数量
		String sql1 = subjectDao.splitKeyWord1("SELECT count(1) FROM tab_iopm_article_info where TITLE like ", keyWord1, " and INFO_TYPE=3");
		List<Object> weiBoCount = es.searchBySql(sql1);
		Object realWeiBoCount = weiBoCount.get(0);
		//最早的博主和标题
		String firstAuthorSql = subjectDao.splitKeyWord1("SELECT AUTHOR,CONTENT FROM tab_iopm_article_info WHERE TITLE LIKE ", keyWord1, " AND INFO_TYPE=3 ORDER BY COMMENT_COUNT DESC LIMIT 1");
		List<Object> firstAAndT = es.searchBySql(firstAuthorSql);
		ArrayList<Object> object1 = (ArrayList<Object>) firstAAndT.get(1);
		String object10 =(String) object1.get(0);
		JSONObject json1 = JSONObject.fromObject(object10);
		Object content1 = json1.get("CONTENT");
		Object author1 = json1.get("AUTHOR");
		String replace1 = content1.toString().replace("\r\n", "");
		
		//参与率最高的博主和标题
		String INTERACTIONsql = subjectDao.splitKeyWord1("SELECT CONTENT,AUTHOR,WEBSITE_NAME FROM tab_iopm_article_info WHERE TITLE LIKE ", keyWord1, " AND INFO_TYPE=3 ORDER BY INTERACTION_COUNT DESC");
		List<Object> searchINTERACTION = es.searchBySql(INTERACTIONsql);
		ArrayList<Object> object2 = (ArrayList<Object>)searchINTERACTION.get(1);
		Object object20 = object2.get(0);
		JSONObject json2 = JSONObject.fromObject(object20);
		Object author2 = json2.get("AUTHOR");
		Object content2 = json2.get("CONTENT");
		String replace2 = content2.toString().replace("\r\n", "");
		
		String str1 = "截至"+subjectEnd+"，新浪微博平台发布相关微博信息共计"+realWeiBoCount+"条，其中"+author1+"博主最早声明【"+replace1+"】，"+author2+"博主发布的【"+replace2+"】用户参与率最高";
		Map<String, Object> map =new HashedMap();
		map.put("text", str1);
		objectToJson(map);
		System.out.println(str1);
		return null;
	}
	
	//微信平台各种排名
	public String weixinTrendRank() throws Exception{
		String keyWord1 = subjectDao.subjectKeyWord1(1L);
		ESSearchUtils es = ESSearchUtils.getInstance();
		//最早排名前十
		StringBuffer earlySql =new StringBuffer();
		earlySql.append("SELECT RELEASE_TIME TIME,TITLE,WEBSITE_NAME FROM tab_iopm_article_info where TITLE like ");
		earlySql.append(subjectDao.splitKeyWord1(keyWord1));
		earlySql.append(" and INFO_TYPE=2 ORDER BY RELEASE_TIME ASC LIMIT 10 ");
		List<Object> early = es.searchBySql(earlySql.toString());
		Object early1 = early.get(1);		
		
		//点赞最多
		StringBuffer upMaxSql =new StringBuffer();
		upMaxSql.append("SELECT RELEASE_TIME TIME,TITLE,WEBSITE_NAME FROM tab_iopm_article_info where TITLE like ");
		upMaxSql.append(subjectDao.splitKeyWord1(keyWord1));
		upMaxSql.append(" AND INFO_TYPE=2 ORDER BY UP_COUNT DESC LIMIT 10");
		List<Object> upMax = es.searchBySql(upMaxSql.toString());
		Object upMax1 = upMax.get(1);		
		
		//评论最多
		StringBuffer commentSql =new StringBuffer();
		commentSql.append("SELECT RELEASE_TIME TIME,TITLE,WEBSITE_NAME FROM tab_iopm_article_info where TITLE like ");
		commentSql.append(subjectDao.splitKeyWord1(keyWord1));
		commentSql.append(" AND INFO_TYPE=2 ORDER BY COMMENT_COUNT DESC LIMIT 10");
		List<Object> comment = es.searchBySql(commentSql.toString());
		Object comment1 = comment.get(1);	
		
		Map<String, Object> map = new HashedMap();
		map.put("early", early1);
		map.put("upMax", upMax1);
		map.put("comment", comment1);
		this.objectToJson(map);
		return null;
	}
	
	//微信平台排名分析
	public String weixinTrendRandText() throws Exception{
		//截止至时间
		String keyWord1 = subjectDao.subjectKeyWord1(1L);//关键字
		
		String subjectEnd = subjectDao.subjectEndTime(1L);
		ESSearchUtils es = ESSearchUtils.getInstance();
		
		//相关信息数量
		String sql1 = subjectDao.splitKeyWord1("SELECT count(1) FROM tab_iopm_article_info where TITLE like ", keyWord1, " and INFO_TYPE=2");
		List<Object> weiBoCount = es.searchBySql(sql1);
		Object realWeixinCount = weiBoCount.get(0);
		
		//最早的博主和标题
		String firstAuthorSql = subjectDao.splitKeyWord1("SELECT AUTHOR,CONTENT FROM tab_iopm_article_info WHERE TITLE LIKE ", keyWord1, " AND INFO_TYPE=2 ORDER BY COMMENT_COUNT DESC LIMIT 1");
		List<Object> firstAAndT = es.searchBySql(firstAuthorSql);
		ArrayList<Object> object1 = (ArrayList<Object>) firstAAndT.get(1);
		String object10 =(String) object1.get(0);
		JSONObject json1 = JSONObject.fromObject(object10);
		Object content1 = json1.get("CONTENT");
		Object author1 = json1.get("AUTHOR");
		String replace1 = content1.toString().replace("\r\n", "");
		//参与率最高的博主和标题
		String INTERACTIONsql = subjectDao.splitKeyWord1("SELECT CONTENT,AUTHOR,WEBSITE_NAME FROM tab_iopm_article_info WHERE TITLE LIKE ", keyWord1, " AND INFO_TYPE=2 ORDER BY INTERACTION_COUNT DESC");
		List<Object> searchINTERACTION = es.searchBySql(INTERACTIONsql);
		ArrayList<Object> object2 = (ArrayList<Object>)searchINTERACTION.get(1);
		Object object20 = object2.get(0);
		JSONObject json2 = JSONObject.fromObject(object20);
		Object author2 = json2.get("AUTHOR");
		Object content2 = json2.get("CONTENT");
		String replace2 = content2.toString().replace("\r\n", "");

		String str = "截至"+subjectEnd+"，发布相关微信信息共计"+realWeixinCount+"条，其中"+author1+"公众号最早声明【"+replace1+"】，"+author2+"公众号发布的【"+replace2+"】用户参与率最高";
		Map<String, Object> map =new HashedMap();
		map.put("text", str);
		objectToJson(map);
		System.out.println(str);
		return null;
	}
	
	
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getStartTime() {
		return startTime;
	}
	
	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}
	
	public String getEndTime() {
		return endTime;
	}
	
	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}
	
	public String getKeyword1() {
		return keyword1;
	}
	
	public void setKeyword1(String keyword1) {
		this.keyword1 = keyword1;
	}
	
	public String getKeyword2() {
		return keyword2;
	}
	
	public void setKeyword2(String keyword2) {
		this.keyword2 = keyword2;
	}
	public String getSubjectName() {
		return subjectName;
	}


	public void setSubjectName(String subjectName) {
		this.subjectName = subjectName;
	}

}
