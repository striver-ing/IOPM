package cn.com.pattek.KeyWords.dao;

import java.util.List;
import java.util.Map;

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

public interface KeyCluesDao {
	//增加关键词
   public boolean addKeyword(IopmKeyInfoEntity key) throws Exception;
    //根据类别名称获得类别
   public IopmClassify selectClassify(IopmClassify iop) throws Exception;
    //增加类别
   public boolean addClassify(IopmClassify classify) throws Exception;
    //查询总记录数
   public Integer selectTotal(Map map) throws Exception;
    //所有记录
   public List<IopmKeyEntity> selectAll(Map map) throws Exception;
    //删除记录
   public boolean deleteKey(Long id) throws Exception;
    //查询类别
   public IopmClassify selectByName(String name) throws Exception;
    //修改记录
   public boolean updateKey(IopmKeyInfoEntity key) throws Exception;
    //根据id查询关键词
   public IopmKeyInfoEntity selectById(Long id) throws Exception;
    //获得全部类别
   public List<IopmClassify> getAllClassify() throws Exception;
    //根据一级类别获取二级类别
   public List<IopmClassifyTwo> getAllClassifyTwo(Long id) throws Exception;
    //添加二级类别
   public boolean addClassTwo(IopmClassifyTwo two) throws Exception;
    //获取二级类别
   public IopmClassifyTwo getOneClass(IopmClassifyTwo two) throws Exception;
    //根据名称查询
   public List<IopmKeyInfoEntity> getKeyByName(Map map) throws Exception;
    //根据id查询其他类别
   public List<IopmClassify> findClassifyById(Long id) throws Exception;
    //修改类别
   public boolean updateClassify(IopmClassify classify) throws Exception;
    //删除1
   public boolean deleteKeyword(Long classify_id)throws Exception;
    //删除2
   public boolean deleteClassify(Long classify_id) throws Exception;
    //删除3
   public boolean deleteClassifyTwo(Long classify_id)throws Exception;
    //根据名称查询二级类别
   public int getClassifyTwo(Map map) throws Exception;
    //修改二级类别
   public boolean updateClassifyTwo(Map map) throws Exception;
    //根据一级类别ID修改关键字ID
   public boolean updateKeywordById(Map map)throws Exception;
    //根据一级类别ID修改二级类别
   public boolean updateClassifyTwoById(Map map)throws Exception;
    //根据二级类别ID删除二级类别
   public boolean deleteClassifyTwoBySecondId(Long id)throws Exception;
    //根绝二级类别ID删除关键字
   public boolean deleteKeywordBySecondId(Long id)throws Exception;
    //获得所有二级类别
   public List<IopmClassifyTwo> getAllSecondClassify()throws Exception;
    //根据ID获取二级类别
   public IopmClassifyTwo getSecondClassify(Long id)throws Exception;
    //根据二级类别ID修改关键字
   public boolean updateKeywordSecond(Map map)throws Exception;
    //合并二级类别
   public boolean mergerSecond(Map map)throws Exception;
    //删除二级类别
   public boolean deleteSecond(Long id) throws Exception;
   public List<IopmClassify> getFirstClassify(Long id) throws Exception;
   
   //根据一级类别名称获取二级类别
   public List<IopmKeyEntity> getAllSecondClassifyBy(String name) throws Exception;
   //修改二级类别对应的一级类别
   public boolean updateUnit(IopmClassify iopm)throws Exception;
   public List<IopmFirst> getAllFirst()throws Exception;
   //1获得全部类别
   public List<IopmClassify> getAllClassifyById(Long zero_id) throws Exception;
   
   //获取所有类别除了选中类别
   public List<IopmClassify> getAllClassifyTo(Long classify_id) throws Exception;
   //获取类别3
   public List<IopmClassifyTwo> getAllClassifyNum(Long classifyTwo_id) throws Exception;
   //根据二级类别ID获取一级类别ID
   public Long getZeroId(Long id)throws Exception;
   //判断关键词是否重复
   public List<IopmKeyInfoEntity> isRepeat(Map map)throws Exception;
   //修改系数
   public boolean updateCoefficient(Map map) throws Exception;
   //查询系数
   public List<IopmRelatedFactor> selectAllRelatedFactor() throws Exception;
   //查询所有树形结构
   public List<IopmFirst> selectAllZeroName()throws Exception;
   public List<IopmClassify> selectAllFirstName()throws Exception;
   public List<IopmClassifyTwo> selectAllSecondName()throws Exception;
   public List<IopmKeyEntity> selectAllFourthName()throws Exception;
   //查询时间段的舆情id
   public List<Article> selectRangeArticleid(Map map)throws Exception;
   //查询时间段的热点id
   public List<Hot> selectRangeHotid(Map map)throws Exception;
   //存历史
   public boolean addSortHistory(IopmSortHistory iopmSortHistory)throws Exception;
   //修改权重
   public boolean updateIopmCluesZero(IopmClues iopmClues)throws Exception;
   public boolean updateIopmCluesFirst(IopmClues iopmClues)throws Exception;
   public boolean updateIopmCluesSecond(IopmClues iopmClues)throws Exception;
   public boolean updateIopmClues(IopmClues iopmClues)throws Exception;
   //查询版本自增序列
   public Long selectTagSequences()throws Exception;
}
