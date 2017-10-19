package cn.com.pattek.Subject.dao.impl;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import net.sf.json.JSONObject;

import org.springframework.stereotype.Repository;

import cn.com.pattek.KeyWords.entity.IopmKeyEntity;
import cn.com.pattek.Subject.dao.SubjectDao;
import cn.com.pattek.Subject.entity.TabIopmSubject;
import cn.com.pattek.core.dao.BaseDaoImpl;
import cn.com.pattek.utils.ESSearchUtils;
import cn.com.pattek.utils.Tools;

@Repository
public class SubjectDaoImpl extends BaseDaoImpl implements SubjectDao {


	public String URLSql(String httpValue,String head,String keyWord,String end) throws Exception{

		String utf = URLEncoder.encode(keyWord,"utf-8");
		
		head=head.replace(">", "%3E").replace("<", "%3C").replace(" ", "%20").replace("'", "%27");//替换前半段的字符
		
		end=end.replace(">", "%3E").replace("<", "%3C").replace(" ", "%20").replace("'", "%27");//替换后半段语句的字符
		String test = utf.replace("+", "%20").replace("%28", "(").replace("%29", ")").replace("%3D", "=");//替换keyword1中的字符
		String a =head+test+end;//拼接
		String url ="http://"+httpValue+"/_sql?sql="+a;//拼接上http://+地址
		System.out.println(url);//输出url
 
        String json = Tools.loadJson(url); //获得页面的数据
        System.out.println(json); //打印数据
		return json;
	}
	
	public String peak(Map map) throws Exception{
		List count = new ArrayList<Integer>(3);//每三天数量
		List day = new ArrayList<String>(3);//每三天日期
		
		List peakDay =new ArrayList<String>();//高峰日期
		Map dayAndCountMap = new HashMap<String,Integer>();
		
		Iterator keys = map.keySet().iterator();
		  while(keys.hasNext()){
			  Object key = keys.next();
			  System.out.println(key);
			  int value = Integer.parseInt(map.get(key).toString());
			  System.out.println(value);
			
			  day.add(key);
			  count.add(value);

/*			  if(day.size()==1&&value!=0){
				  peakDay.add(day.get(0));
				  dayAndCountMap.put(day.get(0).toString(), value);
			  }*/
			  
			  if(day.size()==2){
				  int a = (Integer) count.get(0);
				  int b = (Integer) count.get(1);
				  if(a>b){
					  peakDay.add(day.get(0));
					  dayAndCountMap.put(day.get(0).toString(),Integer.valueOf(count.get(0).toString()));

					  
				  }
			  }
			  
			  if(day.size()==3){
				  int a = (Integer) count.get(0);
				  int b = (Integer) count.get(1);
				  int c = (Integer) count.get(2);
				  
				  if(b>a&&b>c){
					  peakDay.add(day.get(1));
					  dayAndCountMap.put(day.get(1).toString(),Integer.valueOf(count.get(1).toString()));

				  }
					  count.remove(0);
					  day.remove(0);
					  /*if(Integer.valueOf(count.get(1).toString())>Integer.valueOf(count.get(0).toString())){
						  peakDay.add(day.get(1));
						  dayAndCountMap.put(day.get(1), Integer.valueOf(count.get(1).toString()));
					  }*/
				  
			  }
			  System.out.println(peakDay);  
		  } 
		  if(Integer.valueOf(count.get(1).toString())>Integer.valueOf(count.get(0).toString())){
		  peakDay.add(day.get(1));
		  dayAndCountMap.put(day.get(1), Integer.valueOf(count.get(1).toString()));
	  		}
		  double maxV=0;
		  String maxK="";
		  Iterator keyss = dayAndCountMap.keySet().iterator();
		  while(keyss.hasNext()){
		   Object key = keyss.next();
		   double value = Double.parseDouble(dayAndCountMap.get(key).toString());
		   if(value>maxV){
		    maxV=value;
		    maxK=key.toString();
		   }
		  }
		  System.out.println(maxK);
		  
		  System.out.println("------------");
		  System.out.println(peakDay.toString());
		  System.out.println(maxK.toString());
		  String str = "经历了"+peakDay.size()+"次高峰。舆情的爆发点首次出现在"+peakDay.get(0).toString()+"。最大峰值出现在"+maxK+"。";
		  return str;
	}

	
	public String splitKeyWord1(String keyword1) {
		StringBuffer keyWord1Sql = new StringBuffer();
		
		//-------------------------------------------------------------
					//String keyWord1 ="网络 直播,成为,价值 出口";	
		String title ="(TITLE = '";
		String k ="')";
					
					String replace1 = keyword1.replace(" ", " ' AND TITLE = '");//网络AND TITLE = '直播,成为,价值'AND TITLE = 出口
					String replace2 = replace1.replace(","," ' OR TITLE = '");//网络AND直播OR成为OR价值AND出口
					keyWord1Sql.append(title);
					keyWord1Sql.append(replace2);
					keyWord1Sql.append(k);
					
	  
	   String sql = keyWord1Sql.toString();
		return sql;
   }

	public String splitKeyWord1(String head, String keyword1, String end) throws Exception{
		return splitKeyWord1(head, keyword1, end, true);
	}
	
	//分割keyWord1,并且拼接
	public String splitKeyWord1(String head, String keyword1, String end, boolean isNeedContent)
			throws Exception {
		StringBuffer keyWord1Sql = new StringBuffer();
		keyWord1Sql.append(head+" ");
		//-------------------------------------------------------------
					//String keyWord1 ="网络 直播,成为,价值 出口";	
		String title ="((TITLE = '";
		String content ="(CONTENT = '";
		String k ="')";
					
					String replace1 = keyword1.replace(" ", " ' AND TITLE = '");//网络AND TITLE = '直播,成为,价值'AND TITLE = 出口
					String replace2 = replace1.replace(","," ' OR TITLE = '");//网络AND直播OR成为OR价值AND出口
					keyWord1Sql.append(title);
					keyWord1Sql.append(replace2);
					keyWord1Sql.append(k);
					
				if(isNeedContent){
					keyWord1Sql.append(" OR ");
					String replace3 = keyword1.replace(" ", " ' AND CONTENT = '");
					String replace4 = replace3.replace(",", " ' OR CONTENT = '");
					keyWord1Sql.append(content);
					keyWord1Sql.append(replace4);
					keyWord1Sql.append(k);
					keyWord1Sql.append(") ");}
					
	   keyWord1Sql.append(end);
	   String sql = keyWord1Sql.toString();
		return sql;
	}
	

	//修改专题
	public boolean updateSubjectOne(Map map) throws Exception
	{
	sqlSessionTemplate.update("updateSubjectOne", map);

		return true;
	}

	//查询专题所有信息
	public List<TabIopmSubject> selectSubjectAll(Map map) throws Exception
	{
		List<TabIopmSubject> list = null;
		list=sqlSessionTemplate.selectList("selectSubjectAll", map);
		// TODO Auto-generated method stub
		return list;
	}
	//查询专题总数量
	public Integer selectTotalCount() throws Exception
	{
		Integer totalCount=null;
		totalCount=sqlSessionTemplate.selectOne("selectTotalCount");
		// TODO Auto-generated method stub
		return totalCount;
	}


	//查出线索id，和线索名
	public List<Map<String ,Object>> selectZeroIdAndName() throws Exception {
		
		List<Map<String ,Object>> List = sqlSessionTemplate.selectList("selectZeroIdAndName");
		return List;
	}
	//根据id删除专题
	public boolean delectSubject(Long id) throws Exception
	{
			sqlSessionTemplate.delete("delectSubject",id);
		return true;
	}

	//查出类别ID和类别名称
	public List<Map<String, Object>> selectClue() throws Exception
	{
		List<Map<String ,Object>> List = sqlSessionTemplate.selectList("selectClue");
		return List;
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

	//查询出对应sql语句的时间,然后根据wantGet来得出结果集,返回一个有序的LinkedHashMap,其中数据以(2017-09-30=3)格式
	public LinkedHashMap<String, Integer> dateAndCount(String sql,
			String wantGet) throws Exception {
		ESSearchUtils es = ESSearchUtils.getInstance();
		//这是 该主题总信息量
		SimpleDateFormat sDF = new SimpleDateFormat("yyyy-MM-dd");
		List<Object> searchBySql = es.searchBySql(sql);
		ArrayList<Object> objectList =  (ArrayList<Object>) searchBySql.get(1);
		Map<String,Object> map=new HashMap<String,Object>();
		List<String> t = new ArrayList<String>();
		for (int i = 0; i < objectList.size(); i++) {
			Object object = objectList.get(i);
			JSONObject json = JSONObject.fromObject(object);
			String object2 = (String) json.get(wantGet);
			String substring = object2.substring(0, 10);
			t.add(substring);
			System.out.println(t.toString());
			/*System.out.println("每一个单独的时间---------"+substring);*/
		}
		int number = 1;
		Map<String, Integer> mapCount=new LinkedHashMap<String, Integer>();
		for (int i = 0; i < t.size(); i=0) {
			String si = t.get(i);
			t.remove(si);
			if(!(t.contains(si))){
				
				System.out.println(si+"的正确数量---"+number);
				mapCount.put(si, number);
		/*		if(nc==0){
					mapCount.put(si, 1);	
					nc=0;
				}*/
				number=1;
			}else{
				number++;
			}
		}
		return (LinkedHashMap<String, Integer>) mapCount;
	}

	//日期转化成时间
	public String date2String(Date date)throws Exception{
		SimpleDateFormat sDF = new SimpleDateFormat("yyyy-MM-dd");
		String format = sDF.format(date);
		return format;
	}

	//查询主题 通过id
	public String selectTitle(Long id) throws Exception {
		String selectOne = sqlSessionTemplate.selectOne("selectTitle", id);
		return selectOne;
	}



	public List<Map<String, Object>> SelectFrist(String keyWord1)
			throws Exception {
		// TODO Auto-generated method stub
		return null;
	}




















	











	


	
}

