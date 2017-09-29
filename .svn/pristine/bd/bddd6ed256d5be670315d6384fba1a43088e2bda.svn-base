package cn.com.pattek.RelatedNews.dao.impl;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import cn.com.pattek.RelatedNews.entity.Article;
import cn.com.pattek.RelatedNews.entity.ArticleInfo;
import cn.com.pattek.RelatedNews.entity.AtCount;
import cn.com.pattek.RelatedNews.entity.Blog;
import cn.com.pattek.RelatedNews.entity.IopmClassify;
import cn.com.pattek.RelatedNews.entity.IopmClassifyTwo;
import cn.com.pattek.RelatedNews.entity.IopmFirst;
import cn.com.pattek.RelatedNews.entity.IopmKeyInfoEntity;
import cn.com.pattek.RelatedNews.entity.UserAct;
import cn.com.pattek.RelatedNews.dao.RelatedNewsDao;
import cn.com.pattek.core.dao.BaseDaoImpl;
@Repository
public class RelatedNewsDaoImpl extends BaseDaoImpl implements RelatedNewsDao{

	public List<IopmFirst> getAllFirstCla() throws Exception {
		// TODO Auto-generated method stub
		List<IopmFirst> list=null;
		try {
			list=sqlSessionTemplate.selectList("getAllFirst2");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
		return list;
	}

	public List<IopmClassify> getAllSecondCla(Long id) throws Exception {
		// TODO Auto-generated method stub
		List<IopmClassify> list=null;
		try {
			list=sqlSessionTemplate.selectList("getAllSecondCla",id);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
		return list;
	}

	public List<IopmClassifyTwo> getAllThirdCla(Long id) throws Exception {
		// TODO Auto-generated method stub
		List<IopmClassifyTwo> list=null;
		try {
			list=sqlSessionTemplate.selectList("getAllThirdCla",id);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
		return list;
	}

	public List<IopmKeyInfoEntity> getAllCluesByMap(Map map) throws Exception {
		// TODO Auto-generated method stub
		List<IopmKeyInfoEntity> list=null;
		try {
			list=sqlSessionTemplate.selectList("getAllCluesByMap",map);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
		return list;
	}

	public List<Article> getTotalArticle(Map map) throws Exception {
		// TODO Auto-generated method stub
		List<Article> list=null;
		try {
			list=sqlSessionTemplate.selectList("getTotalArticle",map);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
		return list;
	}

	public List<Article> getNegativeArticle(Map map) throws Exception {
		// TODO Auto-generated method stub
		List<Article> list=null;
		try {
			list=sqlSessionTemplate.selectList("getNegativeArticle",map);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
		return list;
	}

	public List<ArticleInfo> getRelatedInterface(Map map) throws Exception {
		// TODO Auto-generated method stub
		List<ArticleInfo> list=null;
		try {
			list=sqlSessionTemplate.selectList("getRelatedInterface",map);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
		return list;
	}

	public List<Blog> getBlogInterface(Map map) throws Exception {
		// TODO Auto-generated method stub
		List<Blog> list=null;
		try {
			list=sqlSessionTemplate.selectList("getBlogInterface",map);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
		return list;
	}

	public int getBlogCount(Map map) throws Exception {
		// TODO Auto-generated method stub
		int num;
		try {
			num=(Integer)sqlSessionTemplate.selectOne("getBlogCount",map);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
		return num;
	}

	public int getRelatedCount(Map map) throws Exception {
		// TODO Auto-generated method stub
		int num;
		try {
			num=(Integer)sqlSessionTemplate.selectOne("getRelatedCount",map);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
		return num;
	}

	public List<AtCount> getEmotionCount(Map map) throws Exception {
		// TODO Auto-generated method stub
		List<AtCount> list=null;
		try {
			list=sqlSessionTemplate.selectList("getEmotionCount",map);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
		return list;
	}

	public void addUserAct(UserAct userAct) throws Exception {
		// TODO Auto-generated method stub
		sqlSessionTemplate.insert("addUserAct", userAct);
		
	}

	public int getAdoptCount(Map map) throws Exception {
		// TODO Auto-generated method stub
		int num;
		try {
			num=(Integer)sqlSessionTemplate.selectOne("getAdoptCount",map);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw e;
		}
		return num;
	}

}
