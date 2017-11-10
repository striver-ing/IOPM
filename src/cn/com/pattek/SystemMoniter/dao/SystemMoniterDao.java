package cn.com.pattek.SystemMoniter.dao;

import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;


public interface SystemMoniterDao {

	//查询热点条数和最早时间(叙述)
	public  List<Map<String ,Object>> selectHotRecordTimeAndCount() throws Exception;
	//热点信息概述的数据(叙述)
	public List<Map<String ,Object>> selectViewData() throws Exception;
	//被采纳
	public List<Map<String ,Object>> selectAccept( Integer days) throws Exception;
	//未被采纳
	public List<Map<String ,Object>> selectUnAccept( Integer days) throws Exception;
	//热点信息趋势统计-折线图数据1
	public List<Map<String ,Object>> selectTrendData(Map map) throws Exception;
	//热点信息趋势统计-折线图数据-每日总量
	public List<Map<String, Object>> selectHotCount(Map map) throws Exception;
	//热点信息趋势统计-概述
	public Integer dataHot(Integer dateCount) throws Exception;
	//热点信息趋势统计-概述
	public List<Map<String ,Object>> dataAllHot(Integer dateCount) throws Exception;
	
	
	//查询舆情条数和最早时间(叙述)
	public  List<Map<String ,Object>> selectArticleRecordTimeAndCount() throws Exception;
	//热点信息概述的数据(叙述)
	public List<Map<String ,Object>> selectArticleTimeAndCount() throws Exception;
	//被采纳
	public List<Map<String ,Object>> selectArticleAccept( Integer days) throws Exception;
	//未被采纳
	public List<Map<String ,Object>> selectArticleUnAccept( Integer days) throws Exception;
	//舆情信息趋势统计-折线图数据1
	public List<Map<String ,Object>> selectArticleTrendData(Map map) throws Exception;
	//舆情信息趋势统计-折线图数据2
	public List<Map<String ,Object>> selectArticleCount(Map map) throws Exception;
	//舆情信息趋势统计-折线图数据3
	public List<Map<String ,Object>> selectArticleTrendTypeData(Map map) throws Exception;
	//舆情信息趋势统计-概述
	public Integer dataArticle(int dateCount) throws Exception;
	//舆情信息趋势统计-概述
	public List<Map<String ,Object>> dataAllArticle(int dateCount) throws Exception;
	/**
	 * 线索库监控-线索概述-获得线索条数
	 * @return
	 * @throws Exception
	 */
	public int cluesCount() throws Exception; 
	
	/**
	 * 线索库监控-线索概述-获得关键词数量
	 * @return
	 * @throws Exception
	 */
	public int keyWordsCount() throws Exception;
	
	/**
	 * 线索库监控-线索概述-获得类别数量
	 * @return
	 * @throws Exception
	 */
	public int secondCluesClassify() throws Exception;
	
	/**
	 * 线索库监控-线索概述-最晚同步时间以及同步情况
	 * @return
	 * @throws Exception
	 */
	public List<Map<String ,Object>> rerocdInfo() throws Exception;

	/**
	 * 线索库监控-线索概述-同步情况两个折线图
	 * @param map
	 * @return
	 * @throws Exception
	 */
	public List<Map<String ,Object>> rangeData(Map<String, Object> map ) throws Exception;
	
	/**
	 * 通过阈值得出数据(活跃)
	 * @param map
	 * @return
	 * @throws Exception
	 */
	public List<Map<String ,Object>> activeCluesAndZeroIdName(Map<String, Object> map) throws Exception;
	
	/**
	 * 数量获取(活跃)
	 * @param map
	 * @return
	 * @throws Exception
	 */
	public int variousTotal(Map<String, Object> map) throws Exception;
	
	/**
	 * 通过阈值得出数据(僵尸)
	 * @param map
	 * @return
	 * @throws Exception
	 */
	public List<Map<String ,Object>> zombieCluesAndZeroIdName(Map<String, Object> map) throws Exception;
	
	/**
	 * 用于正面的数量获取(僵尸)
	 * @param map
	 * @return
	 * @throws Exception
	 */
	public int zombievariousTotal(Map<String, Object> map) throws Exception;
	
	/**
	 * 添加日志
	 * @param map
	 * @return
	 * @throws Exception
	 */
	public boolean addLog(Map<String,Object> map) throws Exception;
	
	
	/**
	 * 查询出id和tag序列
	 * @return
	 * @throws Exception
	 */
	public int selectIdAndTag() throws Exception;
	
	/**
	 * 查询出日志信息
	 * @return
	 * @throws Exception
	 */
	public List<Map<String ,Object>> selectLog() throws Exception;
}
