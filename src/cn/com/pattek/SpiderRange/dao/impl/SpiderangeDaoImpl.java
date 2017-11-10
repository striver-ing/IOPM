package cn.com.pattek.SpiderRange.dao.impl;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import cn.com.pattek.SpiderRange.dao.SpiderRangeDao;
import cn.com.pattek.core.dao.BaseDaoImpl;
@Repository
public class SpiderangeDaoImpl extends BaseDaoImpl implements SpiderRangeDao {
	
	//查询站点量
	public List<Map<String, Object>> selectMorsSite() throws Exception
	{
		List<Map<String ,Object>> list =sqlSessionTemplate.selectList("selectMorsSite");
		return list;
	}
	//查询覆盖站点量
	public Integer selectCoverSite() throws Exception
	{
		Integer list =sqlSessionTemplate.selectOne("selectCoverSite");
		return list;
	}
	//查询各区域的站点覆盖量
	public List<Map<String, Object>> selectRegionSite() throws Exception
	{
		List<Map<String ,Object>> list =sqlSessionTemplate.selectList("selectRegionSite");
		return list;
	}
	
	

	//添加站点
	public boolean addSite(Map<String, Object> map) throws Exception {
		try {
			
			sqlSessionTemplate.insert("addSite", map);		
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
		return true;
	}

	//删除站点
	public boolean deleteSite(Long id) throws Exception {
		try {
			sqlSessionTemplate.delete("deleteSite",id);
			
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
		
		return true;
	}

	//更新站点
	public boolean updateSite(Map<String, Object> map) throws Exception {
		try {
			sqlSessionTemplate.update("updateSite", map);
			
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
		return true;
	}

	//分页查询站点
	public List<Map<String, Object>> selectSite(Map<String, Object> map)
			throws Exception {
		List<Map<String, Object>> selectList = sqlSessionTemplate.selectList("selectSite", map);
		return selectList;
	}

	public int selectTotalCountSite(Map<String, Object> map) throws Exception {
		int selectOne = sqlSessionTemplate.selectOne("selectTotalCountSite",map);
		return selectOne;
	}
	public List<Map<String, Object>> selectAllProvince() throws Exception {
		List<Map<String, Object>> selectList = sqlSessionTemplate.selectList("selectAllProvince");
		return selectList;
	}

}
