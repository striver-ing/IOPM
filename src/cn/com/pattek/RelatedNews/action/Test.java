package cn.com.pattek.RelatedNews.action;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLDecoder;
import java.net.URLEncoder;

import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.methods.PostMethod;




public class Test {

	public static String loadJson (String url) {  
        StringBuilder json = new StringBuilder();  
        try {  
            URL urlObject = new URL(url);  
            URLConnection uc = urlObject.openConnection();  
            BufferedReader in = new BufferedReader(new InputStreamReader(uc.getInputStream()));  
            String inputLine = null;  
            while ( (inputLine = in.readLine()) != null) {  
                json.append(inputLine);  
            }  
            in.close();  
        } catch (MalformedURLException e) {  
            e.printStackTrace();  
        } catch (IOException e) {  
            e.printStackTrace();  
        }  
        return json.toString();  
    }  
	public static void main(String[] args) throws MalformedURLException, URISyntaxException {  
        //String url = "http://192.168.60.31:9200/_sql?sql=SELECT%20WEBSITE_NAME,count(WEBSITE_NAME)%20FROM%20tab_iopm_article_info%20WHERE%20(RELEASE_TIME%3E=%272017-10-01%2000:00:00%27%20and%20RELEASE_TIME%3C=%272017-10-17%2023:59:59%27)%20and%20((TITLE%20=%20%27%E5%8D%81%E4%B9%9D%E5%A4%A7%27)%20OR%20(CONTENT%20=%20%27%E5%8D%81%E4%B9%9D%E5%A4%A7%27))%20and%20IS_VIP=1%20group%20by%20WEBSITE_NAME%20limit%2010";  
        			//http://192.168.60.31:9200/_sql?sql=SELECT%20WEBSITE_NAME,count(WEBSITE_NAME)%20FROM%20tab_iopm_article_info%20WHERE%20(RELEASE_TIME%3E=to_date(%272017-10-01%2000:00:00%27,%27yyyy-mm-dd%20hh24:mi:ss%27)%20and%20RELEASE_TIME%3C=to_date(%272017-10-17%2023:59:59%27,%20%27yyyy-mm-dd%20hh24:mi:ss%27))%20and%20((TITLE%20=%20%27%E5%8D%81%E4%B9%9D%E5%A4%A7%27)%20OR%20(CONTENT%20=%20%27%E5%8D%81%E4%B9%9D%E5%A4%A7%27))%20and%20IS_VIP=1%20group%20by%20WEBSITE_NAME%20limit%2010  
      String url = "http://192.168.60.40:9200/_sql?sql=SELECT20%WEBSITE_NAME,count(WEBSITE_NAME)20%FROM20%tab_iopm_article_info20%WHERE20%(RELEASE_TIME%3E=%272017-10-0120%00:00:00%2720%and20%RELEASE_TIME%3C=%272017-10-1720%23:59:59%27)20%andSELECT20%WEBSITE_NAME,count(WEBSITE_NAME)20%FROM20%tab_iopm_article_info20%WHERE20%(RELEASE_TIME%3E=%272017-10-0120%00:00:00%2720%and20%RELEASE_TIME%3C=%272017-10-1720%23:59:59%27)20%and20%IS_VIP=120%group20%by20%WEBSITE_NAME20%limit20%10";
	  String json =  loadJson(url);  
      System.out.println(json);  
      System.out.println(URLEncoder.encode("十九大"));
		
    }  

}