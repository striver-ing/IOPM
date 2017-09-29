package cn.com.pattek.KeyWords.dao.impl;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import cn.com.pattek.KeyWords.dao.KeyCluesDao;
import cn.com.pattek.KeyWords.entity.IopmClassify;
import cn.com.pattek.KeyWords.entity.IopmClassifyTwo;
import cn.com.pattek.KeyWords.entity.IopmClues;
import cn.com.pattek.KeyWords.entity.IopmFirst;
import cn.com.pattek.KeyWords.entity.IopmKeyEntity;
import cn.com.pattek.KeyWords.entity.IopmKeyInfoEntity;
import cn.com.pattek.KeyWords.entity.IopmRelatedFactor;
import cn.com.pattek.KeyWords.entity.IopmSortHistory;
import cn.com.pattek.NetHotSpot.entity.Hot;
import cn.com.pattek.RelatedNews.entity.Article;
import cn.com.pattek.core.dao.BaseDaoImpl;

@Repository
public class KeyCluesDaoImpl extends BaseDaoImpl implements KeyCluesDao {
	//增加关键词
	public boolean addKeyword(IopmKeyInfoEntity key) throws Exception {
		// TODO Auto-generated method stub
		try{
			sqlSessionTemplate.insert("addKeyword",key);
		}catch(Exception e){
			throw e;
		}
		return true;
	}
	//根据类别名称获得类别
	public IopmClassify selectClassify(IopmClassify iop)
			throws Exception {
		// TODO Auto-generated method stub
		IopmClassify classify=null;
		try{
			classify=sqlSessionTemplate.selectOne("selectClassify",iop);
		}catch(Exception e){
			throw e;
		}
		return classify;
	}
	public boolean addClassify(IopmClassify classify) throws Exception {
		// TODO Auto-generated method stub
		try{
			sqlSessionTemplate.insert("addClassify",classify);
		}catch(Exception e){
			throw e;
		}
		return true;
	}
	public Integer selectTotal(Map map) throws Exception {
		// TODO Auto-generated method stub
		Integer totalCount=null;
		try{
			totalCount=sqlSessionTemplate.selectOne("selectTotal",map);
		}catch(Exception e){
			throw e;
		}
		return totalCount;
	}
	public List<IopmKeyEntity> selectAll(Map map) throws Exception {
		// TODO Auto-generated method stub
		List<IopmKeyEntity> list = null;
		try {
			list=sqlSessionTemplate.selectList("selectAll", map);
		} catch (Exception e) {
			// TODO: handle exception
			throw e;
		}
		return list;
	}
	public boolean deleteKey(Long id) throws Exception {
		// TODO Auto-generated method stub
		try{
			sqlSessionTemplate.delete("deleteKey",id);
		}catch(Exception e){
			throw e;
		}
		return true;
	}
	//修改记录
	public boolean updateKey(IopmKeyInfoEntity key) throws Exception {
		// TODO Auto-generated method stub
		try{
			sqlSessionTemplate.delete("updateKey",key);
		}catch(Exception e){
			throw e;
		}
		return true;
	}
	//根据id查询 
	public IopmKeyInfoEntity selectById(Long id) throws Exception {
		// TODO Auto-generated method stub
		IopmKeyInfoEntity key=null;
		try{
			key=sqlSessionTemplate.selectOne("selectById",id);
		}catch(Exception e){
			throw e;
		}
		return key;
		
	}
	//查询类别
	public IopmClassify selectByName(String name) throws Exception {
		// TODO Auto-generated method stub
		IopmClassify iopmClassify=null;
		try{
			iopmClassify=sqlSessionTemplate.selectOne("selectByName",name);
		}catch(Exception e){
			throw e;
		}
		return iopmClassify;
	}
	//获得全部类别
	public List<IopmClassify> getAllClassify() throws Exception {
		// TODO Auto-generated method stub
		List<IopmClassify> list=null;
		    try {
				list=sqlSessionTemplate.selectList("getAllClassify");
			} catch (Exception e) {
				// TODO Auto-generated catch block
				throw e;
			}
		return list;
	}
	//根据一级类别获取二级类别
	public List<IopmClassifyTwo> getAllClassifyTwo(Long id) throws Exception {
		// TODO Auto-generated method stub
		List<IopmClassifyTwo> list=null;
		try {
			list=sqlSessionTemplate.selectList("getAllClassifyTwo",id);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
		return list;
	}
	public boolean addClassTwo(IopmClassifyTwo two) throws Exception {
		// TODO Auto-generated method stub
		try{
			sqlSessionTemplate.insert("addClassTwo",two);
		}catch(Exception e){
			throw e;
		}
		return true;
	}
	public IopmClassifyTwo getOneClass(IopmClassifyTwo two) throws Exception {
		// TODO Auto-generated method stub
		IopmClassifyTwo ict=null;
		try{
			ict=sqlSessionTemplate.selectOne("getOneClass",two);
		}catch(Exception e){
			throw e;
		}
		return ict;
	}
	public List<IopmKeyInfoEntity> getKeyByName(Map map) throws Exception {
		// TODO Auto-generated method stub
		List<IopmKeyInfoEntity> list=null;
		try {
			list=sqlSessionTemplate.selectList("getKeyByName",map);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
		return list;
	}
	public List<IopmClassify> findClassifyById(Long id) throws Exception {
		// TODO Auto-generated method stub
		List<IopmClassify> list=null;
		try {
			list=sqlSessionTemplate.selectList("findClassifyById",id);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
		return list;
	}
	public boolean updateClassify(IopmClassify classify) throws Exception {
		// TODO Auto-generated method stub
		try {
			sqlSessionTemplate.update("updateClassify",classify);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
		return true;
	}
	public boolean deleteKeyword(Long classify_id) throws Exception {
		// TODO Auto-generated method stub
		try {
			sqlSessionTemplate.delete("deleteKeyword",classify_id);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
		return true;
	}
	public boolean deleteClassify(Long classify_id) throws Exception {
		// TODO Auto-generated method stub
		try {
			sqlSessionTemplate.delete("deleteClassify",classify_id);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
		return true;
	}
	public boolean deleteClassifyTwo(Long classify_id) throws Exception {
		// TODO Auto-generated method stub
		try {
			sqlSessionTemplate.delete("deleteClassifyTwo",classify_id);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
		return true;
	}
	public int getClassifyTwo(Map map) throws Exception {
		// TODO Auto-generated method stub
		int num;
		try {
			num=(Integer)sqlSessionTemplate.selectOne("getClassifyTwo",map);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
		return num;
	}
	public boolean updateClassifyTwo(Map map) throws Exception {
		// TODO Auto-generated method stub
		try {
			sqlSessionTemplate.update("updateClassifyTwo",map);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
		return true;
	}
	public boolean updateKeywordById(Map map) throws Exception {
		// TODO Auto-generated method stub
		try {
			sqlSessionTemplate.update("updateKeywordById",map);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
		return true;
	}
	public boolean updateClassifyTwoById(Map map) throws Exception {
		// TODO Auto-generated method stub
		try {
			sqlSessionTemplate.update("updateClassifyTwoById",map);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
		return true;
	}
	public boolean deleteClassifyTwoBySecondId(Long id) throws Exception {
		// TODO Auto-generated method stub
		try {
			sqlSessionTemplate.delete("deleteClassifyTwoBySecondId",id);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
		return true;
	}
	public boolean deleteKeywordBySecondId(Long id) throws Exception {
		// TODO Auto-generated method stub
		try {
			sqlSessionTemplate.delete("deleteKeywordBySecondId",id);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
		return true;
	}
	public List<IopmClassifyTwo> getAllSecondClassify() throws Exception {
		// TODO Auto-generated method stub
		List<IopmClassifyTwo> list=null;
		try {
			list=sqlSessionTemplate.selectList("getAllSecondClassify");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
		return list;
	}
	public IopmClassifyTwo getSecondClassify(Long id) throws Exception {
		// TODO Auto-generated method stub
		IopmClassifyTwo ic=null;
		try {
			ic=sqlSessionTemplate.selectOne("getSecondClassify",id);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
		return ic;
	}
	public boolean updateKeywordSecond(Map map) throws Exception {
		// TODO Auto-generated method stub
		try {
			sqlSessionTemplate.update("updateKeywordSecond",map);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
		return true;
	}
	public boolean mergerSecond(Map map) throws Exception {
		// TODO Auto-generated method stub
		try {
			sqlSessionTemplate.update("mergerSecond",map);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
		return true;
	}
	public boolean deleteSecond(Long id) throws Exception {
		// TODO Auto-generated method stub
		try {
			sqlSessionTemplate.update("deleteSecond",id);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
		return true;
	}
	public List<IopmClassify> getFirstClassify(Long id) throws Exception {
		// TODO Auto-generated method stub
		List<IopmClassify> list=null;
		try {
			list=sqlSessionTemplate.selectList("getFirstClassify",id);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
		return list;
	}
	public List<IopmKeyEntity> getAllSecondClassifyBy(String name)
			throws Exception {
		// TODO Auto-generated method stub
		List<IopmKeyEntity>list=null;
		try {
			list=sqlSessionTemplate.selectList("getAllSecondClassifyBy",name);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
		return list;
	}
	public boolean updateUnit(IopmClassify iopm) throws Exception {
		// TODO Auto-generated method stub
		try {
			sqlSessionTemplate.update("updateUnit",iopm);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
		return true;
	}
	public List<IopmFirst> getAllFirst() throws Exception {
		// TODO Auto-generated method stub
		List<IopmFirst>list=null;
		try {
			list=sqlSessionTemplate.selectList("getAllFirst");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
		return list;
	}
	public List<IopmClassify> getAllClassifyById(Long zero_id) throws Exception {
		// TODO Auto-generated method stub
		List<IopmClassify> list=null;
	    try {
			list=sqlSessionTemplate.selectList("getAllClassifyById",zero_id);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
	    return list;
	}
	public List<IopmClassify> getAllClassifyTo(Long classify_id)
			throws Exception {
		// TODO Auto-generated method stub
		List<IopmClassify> list=null;
	    try {
			list=sqlSessionTemplate.selectList("getAllClassifyTo",classify_id);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
	    return list;
	}
	public List<IopmClassifyTwo> getAllClassifyNum(Long classifyTwo_id)
			throws Exception {
		// TODO Auto-generated method stub
		List<IopmClassifyTwo> list=null;
	    try {
			list=sqlSessionTemplate.selectList("getAllClassifyNum",classifyTwo_id);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
	    return list;
	}
	public Long getZeroId(Long id) throws Exception {
		// TODO Auto-generated method stub
		Long zero_id;
		try {
			zero_id=sqlSessionTemplate.selectOne("getZeroId",id);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
		return zero_id;
	}
	//判断关键词是否重复
	public List<IopmKeyInfoEntity> isRepeat(Map map) throws Exception {
		// TODO Auto-generated method stub
		List<IopmKeyInfoEntity> list=null;
		try {
			list=sqlSessionTemplate.selectList("isRepeat",map);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
		return list;
	}
	//修改系数
	public boolean updateCoefficient(Map map) throws Exception{
		try {
			sqlSessionTemplate.update("updateCoefficient", map);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
		return true;
	}
	//查询系数
	public List<IopmRelatedFactor> selectAllRelatedFactor() throws Exception{
		List<IopmRelatedFactor> list = null;
		try {
			list = sqlSessionTemplate.selectList("selectAllRelatedFactor");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
		
		return list;
	}
	//查询所有zero,first,second节点 名字
	public List<IopmFirst> selectAllZeroName() throws Exception{
		List<IopmFirst> list = null;
		try {
			list = sqlSessionTemplate.selectList("selectAllZeroName");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
		
		return list;
	}
	
	public List<IopmClassify> selectAllFirstName()throws Exception{
		List<IopmClassify> list = null;
		try {
			list = sqlSessionTemplate.selectList("selectAllFirstName");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
		
		return list;
	}
	public List<IopmClassifyTwo> selectAllSecondName()throws Exception{
		List<IopmClassifyTwo> list = null;
		try {
			list = sqlSessionTemplate.selectList("selectAllSecondName");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
		
		return list;
	}
	public List<IopmKeyEntity> selectAllFourthName()throws Exception{
		List<IopmKeyEntity> list = null;
		try {
			list = sqlSessionTemplate.selectList("selectAllFourthName");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
		
		return list;
	}
	 //查询时间段的舆情id
	public List<Article> selectRangeArticleid(Map map) throws Exception{
		List<Article> list = null;
		try {
			list = sqlSessionTemplate.selectList("selectRangeArticleid");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
		
		return list;
	}
	
	//查询时间段的热点id
	   public List<Hot> selectRangeHotid(Map map)throws Exception{
		   List<Hot> list = null;
			try {
				list = sqlSessionTemplate.selectList("selectRangeHotid");
			} catch (Exception e) {
				// TODO Auto-generated catch block
				throw e;
			}
			
			return list;
	   }
	   //添加历史
	   public boolean addSortHistory(IopmSortHistory iopmSortHistory)throws Exception{
		// TODO Auto-generated method stub
			try{
				sqlSessionTemplate.insert("addSortHistory", iopmSortHistory);
			}catch(Exception e){
				throw e;
			}
			return true;
	   }
	 //修改权重
	   public boolean updateIopmCluesZero(IopmClues iopmClues)throws Exception{
		   try {
			sqlSessionTemplate.update("updateIopmCluesZero", iopmClues);
		} catch (Exception e) {
			throw e;
		}
		return true;
	   }
	   public boolean updateIopmCluesFirst(IopmClues iopmClues)throws Exception{
		   try {
				sqlSessionTemplate.update("updateIopmCluesFirst", iopmClues);
			} catch (Exception e) {
				throw e;
			}
			return true;
	   }
	   public boolean updateIopmCluesSecond(IopmClues iopmClues)throws Exception{
		   try {
				sqlSessionTemplate.update("updateIopmCluesSecond", iopmClues);
			} catch (Exception e) {
				throw e;
			}
			return true;
	   }
	   public boolean updateIopmClues(IopmClues iopmClues)throws Exception{
		   try {
				sqlSessionTemplate.update("updateIopmClues", iopmClues);
			} catch (Exception e) {
				throw e;
			}
			return true;
	   }
	   //查询版本自增序列
	   public Long selectTagSequences()throws Exception{
		   Long tag;
		   try {
				tag = sqlSessionTemplate.selectOne("selectTagSequences");
			} catch (Exception e) {
				throw e;
			}
			
			return tag;
	   }
	   
}
