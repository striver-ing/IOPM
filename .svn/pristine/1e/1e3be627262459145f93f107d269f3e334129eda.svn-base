package cn.com.pattek.Subject.dao;

import java.util.Date;
import java.util.List;
import java.util.Map;

import cn.com.pattek.Subject.entity.TabIopmSubject;

public interface SubjectDao {



	/**
	 * 新闻、微信、微博类别的首发信息
	 * SelectFristTime、SelectSecondTime、SelectThirdTime
	 * @param 
	 * @return
	 * @throws Exception 
	 */
	public Date SelectFristTime(String keyWord1) throws Exception;
	public Date SelectSecondTime(String keyWord1) throws Exception;
	public Date SelectThirdTime(String keyWord1) throws Exception;
	/**
	 * 事件溯源分析概述
	 * S
	 * @param 
	 * @return
	 * @throws Exception 
	 */
	public List<Map<String, Object>> SelectFrist(String keyWord1) throws Exception;
	  /**
	   * 情感波动
	   */
	  public List<Map<String, Object>> EmotionBoDong(String keyWord1) throws Exception;
	  
	  /**
	   * 情感波动比例
	   */
	  public List<Map<String, Object>> EmotionBoDongBiLi(String keyword1) throws Exception;

	  /**
	   * 情感波动概述-总数
	   */
	  public Integer SelectNum(String keyWord1) throws Exception;
		
		
	/**
	 * 分割keyword1
	 * @return
	 * @throws Exception
	 */
	public StringBuffer splitKeyWord1(String keyWord1) throws Exception;
	
	/**
	 * 分割keyword1,并且拼接
	 * @param head
	 * @param keyWord1
	 * @param end
	 * @return
	 * @throws Exception
	 */
	public String splitKeyWord1(String head,String keyWord1,String end) throws Exception;
	
	

	
	  
	  /**
	   * 添加主题
	   * @param tabIopmSubject
	   */
	public void addSubject(TabIopmSubject tabIopmSubject) throws Exception;
	
	/**
	 * 查询所有subject
	 * @return
	 * @throws Exception
	 */
	public List<Map<String, Object>> selectAllSubject() throws Exception;
	//
	/**
	 * 模糊查询专题名称
	 * @return
	 * @throws Exception
	 */
	public List<Map<String, Object>> selectLikeSubject(String subjectName) throws Exception;
	/**
	 * 通过专题名称查询id
	 * @param subjectName
	 * @return
	 * @throws Exception
	 */
	public List<Map<String, Object>> selectSubjectByName(String subjectName) throws Exception;
	 /**
	  * 通过前台传入的名字查询数据库,返回id和name
	  * @param subjectName
	  * @return
	  * @throws Exception
	  */
	public List<Map<String, Object>> searchSubject(String subjectName) throws Exception;

	  
	  
	/**
	 * 在subject表中查询startTime(专题开始时间)
	 * @param id
	 * @return
	 * @throws Exception 
	 */
	public String subjectStart(Long id) throws Exception;
	
	/**
	 * 在subject表中查询endTime(专题结束时间)
	 * @param id
	 * @return
	 * @throws Exception
	 */
	public String subjectEndTime(Long id) throws Exception;
	
	/**
	 * 通过id查询出subject表中的关键字
	 * select s.keyword1 from tab_iopm_subject s where id=1
	 * @param id
	 * @return
	 * @throws Exception
	 */
	public String subjectKeyWord1(Long id) throws Exception;
	
	/**
	 * 通过keyword1在专题在数据库article_info中最后一次出现的时间
	 * @return
	 * @throws Exception 
	 */
	public String subjectEnd(String keyword1) throws Exception;
	
	/**
	 * 通过keyword1在专题在数据库article_info中第一次出现的时间
	 * @return
	 * @throws Exception 
	 */
	public String subjectFirst(String keyword1) throws Exception;
	
	
	public Integer news(String keyWord1) throws Exception;
	public Integer weibo(String keyWord1) throws Exception;
	public Integer luntan(String keyWord1) throws Exception;
	public Integer video(String keyWord1) throws Exception;
	public Integer weixin(String keyWord1) throws Exception;
	
	
	
	/**
	 * 根据时间查询出站点名称
	 * @param subjectFirst
	 * @return
	 * @throws Exception
	 */
	public String webName(String subjectFirst) throws Exception;
	
	/**
	 * 根据时间查出标题名
	 * @param subjectFirst
	 * @return
	 * @throws Exception
	 */
	public String titleName(String subjectFirst) throws Exception;
	
	/**
	 * 高峰时间
	 * @param keyWord1
	 * @return
	 * @throws Exception
	 */
	public String peakTime(String keyWord1) throws Exception;
	

	//以下用在阶段演化
	/**
	 * 查询出各种,发布时间(YYYY-MM-dd),以及数量
	 * @param keyWord1
	 * @return
	 * @throws Exception
	 */
	public List<Map<String, Object>> getTimeAndCount(String keyWord1) throws Exception;
	
	/**
	 * 查询出每日主流媒体(IS_VIP)数量
	 * @return
	 */
	public List<Map<String, Object>> getTimeAndVipCount(String keyWord1) throws Exception;
	
	/**
	 * 查询出每天总信息量
	 * @param keyWord1
	 * @return
	 * @throws Exception
	 */
	public List<Map<String, Object>> sumInfo(String keyWord1) throws Exception;
	
	
	
	/**
	 * 查询出每日主流媒体中负面情感的数量
	 * @param keyWord1
	 * @return
	 * @throws Exception
	 */
	public List<Map<String, Object>> getTimeAndEmotionCount(String keyWord1) throws Exception;
	
	
	
	/**
	 * 获取微信的时间和数量
	 * @param KeyWord1
	 * @return
	 * @throws Exception
	 */
	public List<Map<String, Object>> getWeiXin(String KeyWord1) throws Exception;
	
	/**
	 * 微博时间和数量对应
	 * @param KeyWord1
	 * @return
	 * @throws Exception
	 */
	public List<Map<String, Object>> getWeiBo(String KeyWord1) throws Exception;
	
	
	
	//以下是主流媒体排名需要的
	/**
	 * 主流媒体信息总量
	 * @param keyWord1
	 * @return
	 * @throws Exception
	 */
	public List<Map<String, Object>> getMainstreamMedia(String keyWord1) throws Exception;
	
	/**
	 * 主流媒体信息总量中负面
	 * @param keyWord1
	 * @return
	 * @throws Exception
	 */
	public List<Map<String, Object>> getMainstreamMediaAndEmotionBad(String keyWord1) throws Exception;
}
