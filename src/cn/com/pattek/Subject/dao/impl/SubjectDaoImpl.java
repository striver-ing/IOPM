package cn.com.pattek.Subject.dao.impl;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import cn.com.pattek.Subject.dao.SubjectDao;
import cn.com.pattek.Subject.entity.TabIopmSubject;
import cn.com.pattek.core.dao.BaseDaoImpl;

@Repository
public class SubjectDaoImpl extends BaseDaoImpl implements SubjectDao {

	//分割keyword1
	public StringBuffer splitKeyWord1(String keyWord1) throws Exception {
		String[] split = keyWord1.split(",");
		StringBuffer keyWord1Sql = new StringBuffer();
		for (int i = 0; i < split.length; i++) {
			if(i==0){
				keyWord1Sql.append("'%");
				keyWord1Sql.append(split[i]);
				keyWord1Sql.append("%'");
			}else {
				keyWord1Sql.append("OR");
				keyWord1Sql.append("'%");
				keyWord1Sql.append(split[i]);
				keyWord1Sql.append("%'");
			}
		}
		return keyWord1Sql;
	}
	
	
	//分割keyWord1,并且拼接
	public String splitKeyWord1(String head, String keyWord1, String end)
			throws Exception {
		String[] split = keyWord1.split(",");
		StringBuffer keyWord1Sql = new StringBuffer();
		keyWord1Sql.append(head);
		for (int i = 0; i < split.length; i++) {
			if(i==0){
				keyWord1Sql.append("'%");
				keyWord1Sql.append(split[i]);
				keyWord1Sql.append("%'");
			}else {
				keyWord1Sql.append("OR");
				keyWord1Sql.append("'%");
				keyWord1Sql.append(split[i]);
				keyWord1Sql.append("%'");
			}
		}
		keyWord1Sql.append(end);
		String sql = keyWord1Sql.toString();
		return sql;
	}
	

		//根据类别查询
		public Date SelectFristTime(String keyWord1) throws Exception {
			Date SelectFristTime = sqlSessionTemplate.selectOne("SelectFristTime", keyWord1);
			
			// TODO Auto-generated method stub
			return SelectFristTime;
		}
		public Date SelectSecondTime(String keyWord1) throws Exception {
			Date SelectSecondTime = sqlSessionTemplate.selectOne("SelectSecondTime", keyWord1);
			
			// TODO Auto-generated method stub
			return SelectSecondTime;
		}
		public Date SelectThirdTime(String keyWord1) throws Exception {
			Date SelectThirdTime = sqlSessionTemplate.selectOne("SelectThirdTime", keyWord1);
			
			// TODO Auto-generated method stub
			return SelectThirdTime;
		}
		
		/*事件溯源分析概述*/
		public List<Map<String, Object>> SelectFrist(String keyWord1) throws Exception {
			// TODO Auto-generated method stub
			 List<Map<String, Object>> SFList= sqlSessionTemplate.selectList("SelectFrist", keyWord1);
			return SFList;
		}

	//测试 是否
/*	public List<Map<String, Object>> testTC(String keyWord1) throws Exception {
		List<Map<String, Object>> selectList = sqlSessionTemplate.selectList("testTC", keyWord1);
		return selectList;
	}*/


			//情感波动
			public List<Map<String, Object>> EmotionBoDong(String keyword1) throws Exception {
				 List<Map<String, Object>> emotionList= sqlSessionTemplate.selectList("EmotionBoDong", keyword1);
				return emotionList;
			}
			//情感波动比例
			public List<Map<String, Object>> EmotionBoDongBiLi(String keyword1)
					throws Exception {
				List<Map<String, Object>> emotionBLList= sqlSessionTemplate.selectList("EmotionBoDongBiLi", keyword1);
				return emotionBLList;
			}
			//情感波动概述-总数
			public Integer SelectNum(String keyWord1) throws Exception {
				Integer selectnum=sqlSessionTemplate.selectOne("SelectNum",keyWord1);
				return selectnum;
			}
			
			


			

		//查询所有subject
	public List<Map<String, Object>> selectAllSubject() throws Exception {
		List<Map<String, Object>> selectList =sqlSessionTemplate.selectList("selectAllSubject");
			return selectList;
		}
	//添加专题
	public void addSubject(TabIopmSubject tabIopmSubject) {
			sqlSessionTemplate.insert("addSubject", tabIopmSubject);
		}
	//通过专题名称查询id
	public List<Map<String, Object>> selectSubjectByName(String subjectName) throws Exception {
		List<Map<String, Object>> selectOne = sqlSessionTemplate.selectList("selectSubjectByName", subjectName);
		return selectOne;
	}
	//通过输入信息模糊查询专题名,用于回显提示用户
	public List<Map<String, Object>> selectLikeSubject(String subjectName) throws Exception {
		List<Map<String, Object>> selectList = sqlSessionTemplate.selectList("selectLikeSubject", subjectName);
		return selectList;
	}
	//通过字符串查询id  name
	public List<Map<String, Object>> searchSubject(String subjectName) throws Exception {
		List<Map<String, Object>> selectList = sqlSessionTemplate.selectList("searchSubject", subjectName);
		return selectList;
	}

	//通过id查询出专题开始时间
	public String subjectStart(Long id) throws Exception {
		String startTime = sqlSessionTemplate.selectOne("subjectStart", id);
		return startTime;
	}

	//通过id查询出专题关键字
	public String subjectKeyWord1(Long id) throws Exception {
		String selectOne = sqlSessionTemplate.selectOne("subjectKeyWord1", id);
		System.out.println("执行了");
		return selectOne;
	}
//
	//查询最后一次出现时间,根据上个方法查出的关键字
	public String subjectEnd(String keyword1) throws Exception {
		String endTime = sqlSessionTemplate.selectOne("subjectEnd", keyword1);
		return endTime;
	}


	public String subjectFirst(String keyword1) throws Exception {
		String firstTime = sqlSessionTemplate.selectOne("subjectFirst", keyword1);
		return firstTime;
	}

	//新闻
	public Integer news(String keyWord1) throws Exception {
		Integer newsCount = sqlSessionTemplate.selectOne("news", keyWord1);
		return newsCount;
	}
	//微博
	public Integer weibo(String keyWord1) throws Exception {
		Integer weiboCount = sqlSessionTemplate.selectOne("weibo", keyWord1);
		return weiboCount;
	}
	//微信
		public Integer weixin(String keyWord1) throws Exception {
			Integer weixinCount = sqlSessionTemplate.selectOne("weixin", keyWord1);
			return weixinCount;
		}
	//论坛
	public Integer luntan(String keyWord1) throws Exception {
		Integer luntanCount = sqlSessionTemplate.selectOne("luntan", keyWord1);
		return luntanCount;
	}
	//视频
	public Integer video(String keyWord1) throws Exception {
		Integer videoCount = sqlSessionTemplate.selectOne("video", keyWord1);
		return videoCount;
	}

	//站点名称
	public String webName(String subjectFirst) throws Exception {
		String webname = sqlSessionTemplate.selectOne("webName", subjectFirst);
		return webname;
	}

	//最早标题名
	public String titleName(String subjectFirst) throws Exception {
		String titlename = sqlSessionTemplate.selectOne("titleName", subjectFirst);
		return titlename;
	}

	//高峰时间
	public String peakTime(String keyWord1) throws Exception {
		String peakTime = sqlSessionTemplate.selectOne("peakTime", keyWord1);
		return peakTime;
	}


	//日期,infoType,count
	public List<Map<String, Object>> getTimeAndCount(String keyWord1)
			throws Exception {
		List<Map<String, Object>> selectList = sqlSessionTemplate.selectList("getTimeAndCount", keyWord1);
		return selectList;
	}

	//查询出日期,主流媒体VIP数量
	public List<Map<String, Object>> getTimeAndVipCount(String keyWord1) throws Exception {
		List<Map<String, Object>> list = sqlSessionTemplate.selectList("getTimeAndVipCount", keyWord1);
		return list;
	}



	public List<Map<String, Object>> getTimeAndEmotionCount(String keyWord1)
			throws Exception {
		List<Map<String, Object>> emotionList = sqlSessionTemplate.selectList("getTimeAndEmotionCount", keyWord1);
		return emotionList;
	}


	//微信
	public List<Map<String, Object>> getWeiXin(String KeyWord1)
			throws Exception {
		List<Map<String, Object>> list = sqlSessionTemplate.selectList("getWeiXin", KeyWord1);
		return list;
	}


	//微博
	public List<Map<String, Object>> getWeiBo(String KeyWord1) throws Exception {
		List<Map<String, Object>> list = sqlSessionTemplate.selectList("getWeiBo", KeyWord1);
		return list;
	}
	//主流媒体
	public List<Map<String, Object>> getMainstreamMedia(String keyWord1)
			throws Exception {
		List<Map<String, Object>> list = sqlSessionTemplate.selectList("getMainstreamMedia", keyWord1);
		return list;
	}
	//主流媒体中负面
	public List<Map<String, Object>> getMainstreamMediaAndEmotionBad(
			String keyWord1) throws Exception {
		List<Map<String, Object>> list = sqlSessionTemplate.selectList("getMainstreamMediaAndEmotionBad", keyWord1);
		return list;
	}

	//查询出每天总信息量
	public List<Map<String, Object>> sumInfo(String keyWord1) throws Exception {
		List<Map<String, Object>> list = sqlSessionTemplate.selectList("sumInfo", keyWord1);
		return list;
	}


	public String subjectEndTime(Long id) throws Exception {
		String selectOne = sqlSessionTemplate.selectOne("subjectEndTime", id);
		return selectOne;
	}











	


	
}

