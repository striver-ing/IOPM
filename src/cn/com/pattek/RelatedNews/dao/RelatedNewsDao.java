package cn.com.pattek.RelatedNews.dao;

import java.util.List;
import java.util.Map;

import cn.com.pattek.RelatedNews.entity.Article;
import cn.com.pattek.RelatedNews.entity.ArticleInfo;
import cn.com.pattek.RelatedNews.entity.AtCount;
import cn.com.pattek.RelatedNews.entity.Blog;
import cn.com.pattek.RelatedNews.entity.IopmClassify;
import cn.com.pattek.RelatedNews.entity.IopmClassifyTwo;
import cn.com.pattek.RelatedNews.entity.IopmFirst;
import cn.com.pattek.RelatedNews.entity.IopmKeyInfoEntity;
import cn.com.pattek.RelatedNews.entity.UserAct;

public interface RelatedNewsDao {
	 /*获得全部一级分类*/
	 public List<IopmFirst> getAllFirstCla()throws Exception;
	 /*根据一级分类id获得二级分类*/
	 public List<IopmClassify> getAllSecondCla(Long id)throws Exception;
	 /*根据二级分类id获得三级分类*/
	 public List<IopmClassifyTwo> getAllThirdCla(Long id)throws Exception;
	 /*根据所有类别id获取关键字id*/
	 public List<IopmKeyInfoEntity> getAllCluesByMap(Map map)throws Exception;
	 /*总信息量排名*/
	 public List<Article> getTotalArticle(Map map)throws Exception;
	 /*负面总信息量排名*/
	 public List<Article> getNegativeArticle(Map map)throws Exception;
	 /*輿情接口*/
	 public List<ArticleInfo> getRelatedInterface(Map map)throws Exception;
	 /*舆情接口总数*/
	 public int getRelatedCount(Map map)throws Exception;
	 /*微信接口*/
	 public List<Blog> getBlogInterface(Map map)throws Exception;
	 /*微信接口总数*/
	 public int getBlogCount(Map map)throws Exception;
	 /*echart情感倾向数量*/
	 public List<AtCount> getEmotionCount(Map map)throws Exception;
	 /*添加用户行为*/
	 public void addUserAct(UserAct userAct) throws Exception;
	 /*采纳未采纳数量*/
	 public int getAdoptCount(Map map)throws Exception;
	 
}
