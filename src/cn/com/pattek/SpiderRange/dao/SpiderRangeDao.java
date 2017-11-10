package cn.com.pattek.SpiderRange.dao;

import java.util.List;
import java.util.Map;

public interface SpiderRangeDao {
	//查询监控站点量
	public List<Map<String, Object>> selectMorsSite() throws Exception;
	//查询覆盖站点量
	public Integer selectCoverSite() throws Exception;
	//查询各区域的站点覆盖量
	public List<Map<String, Object>> selectRegionSite() throws Exception;
	
	
	
	//添加站点
	public boolean addSite(Map<String, Object> map ) throws Exception;
	
	//删除站点
	public boolean deleteSite(Long id) throws Exception;
	
	//修改站点
	public boolean updateSite(Map<String, Object> map ) throws Exception;
	
	//分页查询站点
	public List<Map<String, Object>> selectSite(Map<String, Object> map) throws Exception;

	//查询总数
	public int selectTotalCountSite(Map<String, Object> map) throws Exception;
	
	//查询所有省作为下拉框
	public List<Map<String, Object>> selectAllProvince() throws Exception;
}
