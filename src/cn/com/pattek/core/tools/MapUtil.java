package cn.com.pattek.core.tools;

import java.util.HashMap;
import java.util.Map;

public class MapUtil {
     public static Map<String, Long> getMap(){
    	 Map<String,Long> map=new HashMap<String,Long>();
    	 map.put("政策法规",(long) 1);
    	 map.put("人名",(long) 2);
    	 map.put("机构名",(long) 3);
    	 map.put("地名",(long) 4);
    	 return map;
     }
}
