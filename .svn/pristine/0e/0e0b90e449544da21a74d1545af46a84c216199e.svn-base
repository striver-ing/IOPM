package cn.com.pattek.core.ibatis;

import java.net.URLEncoder;
import java.util.Iterator;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

public class QueryUtil {
	/**
	 * 将请求参数还原为key=value的形式
	 * 
	 * @param params
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public static String getQueryString(Map<String, Object> params) {
		StringBuffer queryString = new StringBuffer(256);
		Iterator it = params.keySet().iterator();
		int count = 0;
		while (it.hasNext()) {
			String key = (String) it.next();
			String param[] = (String[]) params.get(key);
			for (int i = 0; i < param.length; i++) {
				if (count == 0) {
					count++;
				} else {
					queryString.append("&");
				}
				queryString.append(key);
				queryString.append("=");
				try {
					queryString.append(URLEncoder.encode((String) param[i],
							"UTF-8"));
				} catch (Exception e) {
					// TODO: handle exception
				}
			}

		}
		return queryString.toString();
	}

	/**
	 * 获得请求的路径及参数
	 * 
	 * @param request
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public static String getRequestURL(HttpServletRequest request) {
		StringBuffer originalURL = new StringBuffer(request.getServletPath());
		Map parameters = request.getParameterMap();
		if (originalURL != null && parameters.size() > 0) {
			originalURL.append("?");
			originalURL.append(getQueryString(parameters));
		}

		return originalURL.toString();
	}
}
