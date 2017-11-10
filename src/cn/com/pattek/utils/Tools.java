package cn.com.pattek.utils;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

public class Tools {
	//字符串截取工具
	public static String cutText(String text, int length) throws Exception{
		if(text.equals("null") || text == null){
			return "";
		}
		else if(text.length()> length){
			return text.substring(0, length);
		}
		
		return text;
	}
	//获取页面的json数据
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
	/**
     * @Method: cpSrcFileToDestFile 
     * @Description:拷贝文件
     * @param srcFileName 源文件
     * @param destFileName 目标文件
     * void
     */
    public static boolean cpSrcFileToDestFile(final String srcFileName, final String destFileName){
    	File path = new File(destFileName);
		if (!path.getParentFile().exists()) {
			path.getParentFile().mkdirs();
		}
		
    	File file = new File(srcFileName);
   
    	try {
			FileInputStream is = new FileInputStream(file);
			System.out.println(is.read());
			FileOutputStream os = new FileOutputStream(destFileName, true);
			
			byte[] buffer = new byte[1024];
			int byteCount ;
			int bytesWritten = 0;
			while((byteCount  = is.read(buffer)) != -1){
				os.write(buffer, 0, byteCount );
			}
			
			os.flush();
			os.close();
			is.close();
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    	
    	return true;
    }
    public static void main(String[] args) {
    	Tools.cpSrcFileToDestFile("D:\\报告.docx", "\\\\192.168.60.31\\IOPM_TEMP_FILE\\报告.docx");
	}
}
