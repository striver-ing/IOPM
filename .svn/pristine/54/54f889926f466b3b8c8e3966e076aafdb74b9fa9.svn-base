package cn.com.pattek.core;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

/**
 * 读取properties文件
 * 
 * @author Qutr
 * 
 */
public class SystemConfig {
	private static Properties propertie;
	private static InputStream inputFile;

	/**
	 * 初始化Configuration类
	 */
	static {
		propertie = new Properties();
		try {
			inputFile = SystemConfig.class.getResourceAsStream("/system.properties");
			propertie.load(inputFile);
			inputFile.close();
		} catch (FileNotFoundException ex) {
			System.out.println("读取属性文件--->失败！- 原因：文件路径错误或者文件不存在");
			ex.printStackTrace();
		} catch (IOException ex) {
			System.out.println("装载文件--->失败!");
			ex.printStackTrace();
		}
	}

	/**
	 * 重载函数，得到key的值
	 * 
	 * @param key
	 *            取得其值的键
	 * @return key的值
	 */
	public static String getValue(String key) {
		if (propertie.containsKey(key)) {
			String value = propertie.getProperty(key);// 得到某一属性的值
			return value;
		} else
			return null;
	}

}