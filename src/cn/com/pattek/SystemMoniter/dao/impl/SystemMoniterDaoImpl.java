package cn.com.pattek.SystemMoniter.dao.impl;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import cn.com.pattek.SystemMoniter.dao.SystemMoniterDao;
import cn.com.pattek.core.dao.BaseDaoImpl;
@Repository
public class SystemMoniterDaoImpl extends BaseDaoImpl implements SystemMoniterDao{
	//查询热点条数和最早时间
	public List<Map<String ,Object>> selectHotRecordTimeAndCount() throws Exception
	{
		List<Map<String ,Object>> list =sqlSessionTemplate.selectList("selectHotRecordTimeAndCount");
		return list;
	}
	//热点信息概述的数据(叙述)
	public List<Map<String ,Object>> selectViewData() throws Exception
	{
		List<Map<String ,Object>> list=sqlSessionTemplate.selectList("selectViewData");
		return list;
	}
	//被采纳数据
	public List<Map<String ,Object>> selectAccept(Integer days) throws Exception
	{
		List<Map<String ,Object>> list=sqlSessionTemplate.selectList("selectAccept", days);
		return list;
	}
	//未被采纳数据
	public List<Map<String ,Object>> selectUnAccept(Integer days) throws Exception
	{
		List<Map<String ,Object>> list=sqlSessionTemplate.selectList("selectUnAccept", days);
		return list;
	}
	//热点信息趋势统计-折线图数据1
	public List<Map<String, Object>> selectTrendData(Map map) throws Exception
	{
		List<Map<String ,Object>> list=sqlSessionTemplate.selectList("selectTrendData", map);
		return list;
	}
	//热点信息趋势统计-折线图数据2
	public List<Map<String, Object>> selectHotCount(Map map) throws Exception
	{
		List<Map<String, Object>> list=sqlSessionTemplate.selectList("selectHotCount", map);
		return list;
	}
	//热点信息趋势统计-概述
	public Integer dataHot(Integer dateCount) throws Exception
	{
		Integer integer=sqlSessionTemplate.selectOne("dataHot", dateCount);
		return integer;
	}
	//热点信息趋势统计-概述2
	public List<Map<String, Object>> dataAllHot(Integer dateCount)
			throws Exception
	{
		List<Map<String ,Object>> list=sqlSessionTemplate.selectList("dataAllHot", dateCount);
		return list;
	}

	
	//舆情模块
	//查询热点条数和最早时间
	public List<Map<String, Object>> selectArticleRecordTimeAndCount() throws Exception
	{
		List<Map<String ,Object>> list =sqlSessionTemplate.selectList("selectArticleRecordTimeAndCount");
		return list;
	}
	//热点信息概述的数据(叙述)
	public List<Map<String, Object>> selectArticleTimeAndCount() throws Exception
	{
		List<Map<String ,Object>> list =sqlSessionTemplate.selectList("selectArticleTimeAndCount");
		return list;
	}
	//被采纳数据
	public List<Map<String ,Object>> selectArticleAccept(Integer days) throws Exception
	{
		List<Map<String ,Object>> list=sqlSessionTemplate.selectList("selectArticleAccept", days);
		return list;
	}
	//未被采纳数据
	public List<Map<String ,Object>> selectArticleUnAccept(Integer days) throws Exception
	{
		List<Map<String ,Object>> list=sqlSessionTemplate.selectList("selectArticleUnAccept", days);
		return list;
	}
	//舆情信息趋势统计-折线图数据1
	public List<Map<String, Object>> selectArticleTrendData(Map map) throws Exception
	{
		List<Map<String ,Object>> list=sqlSessionTemplate.selectList("selectArticleTrendData", map);
		return list;
	}
	//舆情信息趋势统计-折线图数据2
	public List<Map<String ,Object>> selectArticleCount(Map map) throws Exception
	{
		List<Map<String ,Object>> list=sqlSessionTemplate.selectList("selectArticleCount", map);
		return list;
	}
	//舆情信息趋势统计-折线图数据2
	public List<Map<String, Object>> selectArticleTrendTypeData(Map map)
			throws Exception
	{
		List<Map<String ,Object>> list=sqlSessionTemplate.selectList("selectArticleTrendTypeData", map);
		return list;
	}
	//舆情信息趋势统计-概述
	public Integer dataArticle(int dateCount) throws Exception
	{
		Integer integer=sqlSessionTemplate.selectOne("dataArticle", dateCount);
		return integer;
	}
	//舆情信息趋势统计-概述
	public List<Map<String, Object>> dataAllArticle(int dateCount) throws Exception
	{
		List<Map<String ,Object>> list=sqlSessionTemplate.selectList("dataAllArticle", dateCount);
		return list;
	}


	//线索库监控-线索概述-获得线索条数
	public int cluesCount() throws Exception {
		int selectOne = sqlSessionTemplate.selectOne("cluesCount");
		return selectOne;
	}
	//线索库监控-线索概述-获得关键词数量
	public int keyWordsCount() throws Exception {
		int selectOne = sqlSessionTemplate.selectOne("keyWordsCount");
		return selectOne;
	}
	//线索库监控-线索概述-获得类别数量
	public int secondCluesClassify() throws Exception {
		int selectOne = sqlSessionTemplate.selectOne("secondCluesClassify");
		return selectOne;
	}
	//线索库监控-线索概述-线索库监控-线索概述-最晚同步时间以及同步情况
	public List<Map<String ,Object>> rerocdInfo() throws Exception {
		List<Map<String ,Object>> selectList = sqlSessionTemplate.selectList("rerocdInfo");
		return selectList;
	}
	public List<Map<String, Object>> rangeData(Map<String, Object> map)
			throws Exception {
		List<Map<String, Object>> selectList = sqlSessionTemplate.selectList("rangeData", map);
		return selectList;
	}
	public List<Map<String, Object>> activeCluesAndZeroIdName(
			Map<String, Object> map) throws Exception {
		List<Map<String, Object>> selectList = sqlSessionTemplate.selectList("activeCluesAndZeroIdName", map);
		return selectList;
	}
	public int variousTotal(Map<String, Object> map) throws Exception {
		int selectOne = sqlSessionTemplate.selectOne("variousTotal",map);
		return selectOne;
	}
	public List<Map<String, Object>> zombieCluesAndZeroIdName(
			Map<String, Object> map) throws Exception {
		List<Map<String, Object>> selectList = sqlSessionTemplate.selectList("zombieCluesAndZeroIdName", map);
		return selectList;
	}
	public int zombievariousTotal(Map<String, Object> map) throws Exception {
		int selectOne = sqlSessionTemplate.selectOne("zombievariousTotal",map);
		return selectOne;
	}
	public boolean addLog(Map<String, Object> map) throws Exception {
		sqlSessionTemplate.insert("addLog", map);
		return true;
	}
	public int selectIdAndTag() throws Exception {
		int selectOne = sqlSessionTemplate.selectOne("selectIdAndTag");
		return selectOne;
	}
	public List<Map<String, Object>> selectLog() throws Exception {
		List<Map<String, Object>> selectList = sqlSessionTemplate.selectList("selectLog");
		return selectList;
	}



}
