package cn.com.pattek.KeyWords.action;

import java.awt.Color;
import java.awt.Font;
import java.awt.image.BufferedImage;
import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.imageio.ImageIO;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.sf.json.JsonConfig;
import net.sf.json.util.CycleDetectionStrategy;

import org.apache.commons.collections.map.HashedMap;
import org.apache.commons.lang.time.DateFormatUtils;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFCellStyle;
import org.apache.poi.hssf.usermodel.HSSFClientAnchor;
import org.apache.poi.hssf.usermodel.HSSFFont;
import org.apache.poi.hssf.usermodel.HSSFPatriarch;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.struts2.ServletActionContext;
import org.jfree.chart.ChartFactory;
import org.jfree.chart.ChartUtilities;
import org.jfree.chart.JFreeChart;
import org.jfree.chart.labels.StandardPieSectionLabelGenerator;
import org.jfree.chart.plot.PiePlot3D;
import org.jfree.data.general.DefaultPieDataset;
import org.jfree.data.general.PieDataset;
import org.jfree.util.Rotation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import cn.com.pattek.KeyWords.dao.KeyCluesDao;
import cn.com.pattek.KeyWords.entity.IopmClassify;
import cn.com.pattek.KeyWords.entity.IopmClassifyTwo;
import cn.com.pattek.KeyWords.entity.IopmFirst;
import cn.com.pattek.KeyWords.entity.IopmKeyEntity;
import cn.com.pattek.KeyWords.entity.IopmKeyInfoEntity;
import cn.com.pattek.KeyWords.entity.IopmKeyWords;
import cn.com.pattek.KeyWords.entity.IopmRelatedFactor;
import cn.com.pattek.KeyWords.entity.IopmSortHistory;
import cn.com.pattek.KeyWords.entity.UpdateClues;
import cn.com.pattek.core.page.Pagination;
import cn.com.pattek.core.struts2.BaseAction;
import cn.com.pattek.core.struts2.JsonUtils;
import cn.com.pattek.utils.FileUtils;



@Controller("KeyCluesAction")
public class KeyCluesAction extends BaseAction {
	private Long id;
	private String name;
	private Long classify_id;
	private String classify_name;
	private Integer weight;
	private IopmClassify iopmClassify;
	private Pagination rolePgn;
	private List<IopmFirst> firstList;
	private List<IopmClassify> iopmList;
	private List<IopmClassifyTwo> secondList;
	private Long classifyTwo_id;
	private Long zero_id;
	private String zero_name;
	private String keyword1;
	private String keyword2;
	private String keyword3;
	private File file; // file控件名
	private String fileContentType;// 图片类型
	private String fileFileName; // 文件名
	private Integer queryMethod;
	private Float example1;  //热点系数
	private Float example2;  //线索系数
	private Float example3;  //负面全重
	private Float example4;  //主流媒体权重
	private Date startDate;//开始时间
	private Date endDate;//结束时间
	private UpdateClues[] data1 = new UpdateClues[10000];
	
	/**
	 *分页信息
	 */
	private int start = 0;
	private int limit = 5;
	private int totalCount = 0;
	private int totalPage = 0;
	@Autowired
	private KeyCluesDao keyCluesDao;

	private IopmKeyInfoEntity key;
	

	
	//查询的集合存到数据库字段中
	public String deposit() throws Exception{
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("text/html;charset=UTF-8");// 解决中文乱码
		try
		{
			List<IopmKeyWords> list=keyCluesDao.exportExcel();
			String string = JsonUtils.fromArray(list);
			keyCluesDao.addList(string);
			
			System.out.println("string -+-+-+-+" + string );
			return null;
		} catch (Exception e)
		{
			response.getWriter().print("{success:false,info:'存储失败!'}");
			//e.printStackTrace();
		}
		return null;
	}

	//根据查询数据，形成饼状图
	private JFreeChart createChart(String title, PieDataset piedataset)
	{
		JFreeChart jfreechart = ChartFactory.createPieChart3D(title,
				piedataset, true, true, false);
		jfreechart.getTitle().setFont(new Font("宋体", Font.BOLD, 24));
		// 处理子标题乱码
		jfreechart.getLegend().setItemFont(new Font("宋体", Font.BOLD, 22));
		// // 设置外层图片 无边框 无背景色 背景图片透明
		// jfreechart.setBorderVisible(false);
		// jfreechart.setBackgroundPaint(null);
		// jfreechart.setBackgroundImageAlpha(0.0f);

		PiePlot3D pieplot3d = (PiePlot3D) jfreechart.getPlot();
		// 设置旋转角度
		pieplot3d.setStartAngle(360.0);
		// 设置旋转方向，Rotation.CLOCKWISE)为顺时针。
		pieplot3d.setDirection(Rotation.CLOCKWISE);
		// 设置图表透明图0.0~1.0范围。0.0为完全透明，1.0为完全不透明。
		pieplot3d.setForegroundAlpha(0.6F);
		// 饼图的背景全透明
		// pieplot3d.setBackgroundAlpha(0.0f);
		// 去除背景边框线
		// pieplot3d.setOutlinePaint(null);
		// 处理图像上的乱码
		pieplot3d.setNoDataMessage("无数据");
		pieplot3d.setLabelFont(new Font("宋体", Font.BOLD, 22));

		// 设置图形的生成格式为（上海 2 （10%））
		String format = "{0} {1} ({2})";
		pieplot3d.setLabelGenerator(new StandardPieSectionLabelGenerator(format));

		return jfreechart;
	}
	
	//生成的表格中，带有图
	public String exportExcels() throws Exception {
		
	  try { 
		// 第一步，创建一个webbook，对应一个Excel文件  
        HSSFWorkbook wb = new HSSFWorkbook();  
        // 第二步，在webbook中添加一个sheet,对应Excel文件中的sheet  
        HSSFSheet sheet = wb.createSheet("线索信息");  
        //字体颜色、加粗、字号
        HSSFFont font = wb.createFont();
        font.setFontName("黑体");
        font.setFontHeightInPoints((short) 12);//设置字体大小
        HSSFFont font2 = wb.createFont();
        font2.setFontName("仿宋_GB2312");
        font2.setBoldweight(HSSFFont.BOLDWEIGHT_BOLD);//粗体显示
        font2.setFontHeightInPoints((short) 12);
        HSSFFont font3 = wb.createFont();
        font3.setBoldweight(HSSFFont.BOLDWEIGHT_BOLD);//粗体显示
        
        // 第三步，在sheet中添加表头第0行,注意老版本poi对Excel的行数列数有限制short  
        //创建第一行
        HSSFRow row1 = sheet.createRow((int) 0);
        HSSFCell cell=row1.createCell(0);
        //设置单元格内容
        cell.setCellValue("线索信息统计");
        HSSFCellStyle style = wb.createCellStyle();  //style表头用
        style.setAlignment(HSSFCellStyle.ALIGN_CENTER); // 创建一个居中格式  
        style.setVerticalAlignment(HSSFCellStyle.VERTICAL_CENTER);//上下居中    
        style.setFont(font2);//选择需要用到的字体格式
        cell.setCellStyle(style); 
        sheet.addMergedRegion(new CellRangeAddress(0,1,0,7));//合并单元格
        
        //创建第二行 -前段
        HSSFRow row2 = sheet.createRow((int) 2);
        HSSFCell cell2=row2.createCell(0);
        sheet.addMergedRegion(new CellRangeAddress(2,2,0,6));
        HSSFCellStyle style1 = wb.createCellStyle();  //查询到的数据的格式
        style1.setAlignment(HSSFCellStyle.ALIGN_LEFT); // 创建居左
        String tag= keyCluesDao.selectTag();//查询出版本号
        cell2.setCellValue("线索库版本V" + tag + ".0");  //设置单元格内容
        
        //创建第二行 -后段
        HSSFCell cell3=row2.createCell(7);//必须在合并的外面，要>6

        HSSFCellStyle style3 = wb.createCellStyle();  //第二行半部分
        style3.setAlignment(HSSFCellStyle.ALIGN_RIGHT); // 创建居右
        style3.setFont(font3);
        cell3.setCellStyle(style3);
        
        Date now = new Date();//获取现在时间
        cell3.setCellValue("导出时间 ： " + new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(now)); //设置单元格内容
        style1.setFont(font3);
        cell3.setCellStyle(style1); 
        //-------------------------------------------------------------------------------------------
        //根据得到数据做成饼状图
        DefaultPieDataset dataset = new DefaultPieDataset();
        int msgNull= keyCluesDao.selectCountMsgNull();
        int msg= keyCluesDao.selectCountMsg();
        //添加数据
        dataset.setValue("僵尸关键词(舆情量=0)",msgNull);
        dataset.setValue("活跃关键词(舆情量>0)",msg);
        
        JFreeChart chart = createChart("关键词统计(" + DateFormatUtils.format(new Date(), "yyyy-MM-dd HH:mm:ss") +")", dataset);
        PiePlot3D categoryPlot = (PiePlot3D)chart.getPlot();
        //处理图像上的乱码
        categoryPlot.setSectionPaint("僵尸关键词(舆情量=0)", Color.RED);
        categoryPlot.setSectionPaint("活跃关键词(舆情量>0)", Color.ORANGE);
        
        String filenames = DateFormatUtils.format(new Date(), "yyyy-MM-dd HH-mm-ss")+".png";  
        //在D盘目录下生成图片
        File file = new File(filenames);
        ChartUtilities.saveChartAsJPEG(file, chart, 1320, 990);
        //--------------------------------------------------------------------------------------------------------
        //将图表插入Excel
        BufferedImage bufferImg;
        ByteArrayOutputStream byteArrayOut = new ByteArrayOutputStream();     
        bufferImg = ImageIO.read(file);     
        ImageIO.write(bufferImg, "png", byteArrayOut);  
              
        //画图的顶级管理器，一个sheet只能获取一个（一定要注意这点）  
        HSSFSheet sheet1 = wb.createSheet("关键词统计");  
        HSSFPatriarch patriarch = sheet1.createDrawingPatriarch();     
        //anchor主要用于设置图片的属性  
        HSSFClientAnchor anchor = new HSSFClientAnchor(0,0 , 120, 120,(short) 0, 0, (short) 16, 40);     
        anchor.setAnchorType(3);   
        sheet1.addMergedRegion(new CellRangeAddress(0,40,0,15));
        //插入图片    
        FileOutputStream fileOut = null;  
        patriarch.createPicture(anchor, wb.addPicture(byteArrayOut.toByteArray(), HSSFWorkbook.PICTURE_TYPE_JPEG));   
            //-------------------------------------------------------------
        //创建第四行
        HSSFRow row3=sheet.createRow((int) 3); 
        HSSFCellStyle style2 = wb.createCellStyle();  //第三行的格式
        style2.setAlignment(HSSFCellStyle.ALIGN_CENTER); // 创建一个居中格式  
        //设置单元格内容
        HSSFCell cell1 = row3.createCell((short) 0);  
        cell1.setCellValue("一级分类");  
        cell1.setCellStyle(style2);  
        cell1 = row3.createCell((short) 1);  
        cell1.setCellValue("二级分类");  
        cell1.setCellStyle(style2); 
        cell1 = row3.createCell((short) 2);  
        cell1.setCellValue("三级分类");  
        cell1.setCellStyle(style2); 
        cell1 = row3.createCell((short) 3);  
        cell1.setCellValue("名称");  
        cell1.setCellStyle(style2); 
        cell1 = row3.createCell((short) 4);  
        cell1.setCellValue("包含关键词");  
        cell1.setCellStyle(style2); 
        cell1 = row3.createCell((short) 5);  
        cell1.setCellValue("不包含关键词");  
        cell1.setCellStyle(style2); 
        cell1 = row3.createCell((short) 6);  
        cell1.setCellValue("舆情数");  
        cell1.setCellStyle(style2); 
        cell1 = row3.createCell((short) 7);  
        cell1.setCellValue("备注");  
        cell1.setCellStyle(style2); 

        // 第五步，写入实体数据 实际应用中这些数据从数据库得到，  
        List<IopmKeyWords> list=keyCluesDao.exportExcel();
        HSSFRow row=sheet.createRow((int) 4); //第五行
        //设置行宽，列宽
        row.setHeight((short) 300);
        sheet.setColumnWidth((short) 0, (short) 5000);
        sheet.setColumnWidth((short) 1, (short) 5000);
        sheet.setColumnWidth((short) 2, (short) 4000);
        sheet.setColumnWidth((short) 3, (short) 12000);
        sheet.setColumnWidth((short) 4, (short) 15000);
        sheet.setColumnWidth((short) 5, (short) 6000);
        sheet.setColumnWidth((short) 6, (short) 4000);
        sheet.setColumnWidth((short) 7, (short) 9000);
        
        //第四行及下面的内容
        HSSFCellStyle style4 = wb.createCellStyle();  //查询到的数据的格式
        style4.setAlignment(HSSFCellStyle.ALIGN_LEFT); // 创建居左
        for (int i = 3; i < list.size()+3; i++)  
        {  
            row = sheet.createRow((int) i +1);  
            IopmKeyWords is=list.get(i-3);
            // 第四步，创建单元格，并设置值  
            HSSFCell cellex = row.createCell((short) 0); 
            cellex.setCellValue(is.getZero_name());  
            cellex.setCellStyle(style4); 
            cellex = row.createCell((short) 1); 
            cellex.setCellValue(is.getFirst_classify());  
            cellex.setCellStyle(style4); 
            cellex = row.createCell((short) 2); 
            cellex.setCellValue(is.getSecond_classify());  
            cellex.setCellStyle(style4); 
            cellex = row.createCell((short) 3); 
            cellex.setCellValue(is.getClues_name());  
            cellex.setCellStyle(style4); 
            cellex = row.createCell((short) 4); 
            cellex.setCellValue(is.getKeyword2());  
            cellex.setCellStyle(style4); 
            cellex = row.createCell((short) 5); 
            cellex.setCellValue(is.getKeyword3());  
            cellex.setCellStyle(style4); 
            cellex = row.createCell((short) 6); 
            cellex.setCellValue(is.getMsg_count());  
            cellex.setCellStyle(style4); 

         } 
        	// 第六步，将文件存到指定位置  
        	String filename = "线索信息统计V" +tag +".0.xls";
        	//获取浏览器类型
            String agent = ServletActionContext.getRequest().getHeader("User-Agent");
            String mimeType = ServletActionContext.getServletContext().getMimeType(filename);
            //根据浏览器类型对文件名编码
            filename = FileUtils.encodeDownloadFilename(filename, agent);
            fileOut = new FileOutputStream(filename); 
            // 4.1一个流：response的输出流
            ServletOutputStream os = ServletActionContext.getResponse().getOutputStream();
            // 4.2两个头之一：content-type，告诉前台浏览器返回数据的格式：xml,css,html,json,xls等等
            ServletActionContext.getResponse().setContentType(mimeType);
            // 4.3两个头之二：content-disposition，告诉前台浏览器数据的打开方式，附件方式打开值如下：attachment;filename=文件名
            ServletActionContext.getResponse().setHeader("content-disposition", "attachment;filename="+filename);
            // 5.将excel通过response返回到前台
            wb.write(os);
        	
        }  
     	catch (Exception e){  
 	        Map result = new HashedMap();
            result.put("status", 0);
            result.put("message", "导出失败");
            result.put("file_path", "");
            this.objectToJson(result);
        } 
		return null;
	}
	
	
	
	
	
	
	
	
	

	/**
	 *获取所有类别 返回json类型
	 * 
	 * @return null
	 */
	public String toAddKey() throws Exception {
		List<IopmClassify> iopmList = new ArrayList<IopmClassify>();
		iopmList = keyCluesDao.getAllClassify();
		this.arrayToJson(iopmList);
		return null;
	}

	/**
	 *获取二级类别
	 * 
	 * @return null
	 */
	public String getSecondKey() throws Exception {
		if (classify_name != null) {
			iopmClassify = keyCluesDao.selectByName(classify_name.trim());
			classify_id = iopmClassify.getFirst_classify_id();
		}
		List<IopmClassifyTwo> secondList = new ArrayList<IopmClassifyTwo>();
		secondList = keyCluesDao.getAllClassifyTwo(classify_id);
		this.arrayToJson(secondList);
		return null;
	}

	/**
	 *增加关键字
	 * 
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public String addKeyword() throws Exception {
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("text/html;charset=UTF-8");// 解决中文乱码
		System.out.println("keyword2=" + keyword2);
		if (keyword2 != null && !"".equals(keyword2))
			keyword2 = keyword2.trim();
		if (keyword3 != null && !"".equals(keyword3))
			keyword3 = keyword3.trim();
		List<IopmKeyInfoEntity> iopList = new ArrayList<IopmKeyInfoEntity>();
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("id", id);
		map.put("name", name);
		iopList = keyCluesDao.getKeyByName(map);
		if ("".equals(name)) {
			response.getWriter().print("");
		} else if ("".equals(zero_id) || zero_id == null) {
			response.getWriter().print("");
		} else if ("".equals(classify_name)) {
			response.getWriter().print("");
		} else if ("".equals(keyword2) && "".equals(keyword3)) {
			response.getWriter().print("");
		} else {
			// if(id!=null)keyCluesDao.deleteKey(id);
			IopmClassify iops = new IopmClassify();
			iops.setFirst_classify(classify_name);
			iops.setZero_id(zero_id);
			IopmClassify classify = keyCluesDao.selectClassify(iops);
			IopmClassify classi = new IopmClassify();
			classi.setZero_id(zero_id); // 一级分类
			classi.setFirst_classify(classify_name);
			// 如果类别不存在，类别也存入库
			if (classify == null) {
				keyCluesDao.addClassify(classi);
				// 增加二级类别
				IopmClassifyTwo two = new IopmClassifyTwo();
				if (classifyTwo_name != null && !"".equals(classifyTwo_name)) {
					two.setFirst_classify_id(classi.getFirst_classify_id());
					two.setSecond_classify(classifyTwo_name);
					keyCluesDao.addClassTwo(two);
				}
				// 增加关键字
				IopmKeyInfoEntity key = new IopmKeyInfoEntity();
				key.setId(id);
				key.setName(name);
				classifyTwo_id = two.getSecond_classify_id();
				if (classifyTwo_id != null && !"".equals(classifyTwo_id))
					key.setSecond_id(classifyTwo_id);
				if (keyword1 != null && !"".equals(keyword1))
					key.setKeyword1(keyword1);
				if (keyword2 != null && !"".equals(keyword2))
					key.setKeyword2(keyword2);
				if (keyword3 != null && !"".equals(keyword3))
					key.setKeyword3(keyword3);
				key.setFirst_id(classi.getFirst_classify_id());
				key.setZero_id(zero_id);
				key.setWeight(weight);
				if (id != null) {
					keyCluesDao.updateKey(key);
				} else {
					keyCluesDao.addKeyword(key);
				}
				// 类别存在，类别不入库
			} else {

				classify_id = classify.getFirst_classify_id();
				IopmClassifyTwo ict = new IopmClassifyTwo();
				ict.setFirst_classify_id(classify_id);
				ict.setSecond_classify(classifyTwo_name);
				// 二级类别不存在
				if (keyCluesDao.getOneClass(ict) == null) {
					if (classifyTwo_name != null
							&& !"".equals(classifyTwo_name))
						keyCluesDao.addClassTwo(ict);
					IopmKeyInfoEntity key = new IopmKeyInfoEntity();
					key.setId(id);
					key.setName(name);
					key.setSecond_id(ict.getSecond_classify_id());
					if (keyword1 != null && !"".equals(keyword1))
						key.setKeyword1(keyword1);
					if (keyword2 != null && !"".equals(keyword2))
						key.setKeyword2(keyword2);
					if (keyword3 != null && !"".equals(keyword3))
						key.setKeyword3(keyword3);
					key.setFirst_id(classify_id);
					key.setWeight(weight);
					key.setZero_id(zero_id);
					if (id != null) {
						keyCluesDao.updateKey(key);
					} else {
						keyCluesDao.addKeyword(key);
					}
				}
				// 一级二级类别均存在
				else {
					IopmKeyInfoEntity key = new IopmKeyInfoEntity();
					Long classifyTwo_id = keyCluesDao.getOneClass(ict)
							.getSecond_classify_id();
					key.setId(id);
					key.setName(name);
					key.setSecond_id(classifyTwo_id);
					if (keyword1 != null && !"".equals(keyword1))
						key.setKeyword1(keyword1);
					if (keyword2 != null && !"".equals(keyword2))
						key.setKeyword2(keyword2);
					if (keyword3 != null && !"".equals(keyword3))
						key.setKeyword3(keyword3);
					key.setFirst_id(classify_id);
					key.setZero_id(zero_id);
					key.setWeight(weight);
					if (id != null) {
						keyCluesDao.updateKey(key);
					} else {
						keyCluesDao.addKeyword(key);
					}

				}
			}

			response.getWriter().print("{success:true,info:'操作成功'}");
		}
		return null;
	}

	/**
	 *查询关键字
	 * 
	 * @throws Exception
	 */
	public String selectClassify() throws Exception {
		// 查询总数
//		IopmKeyEntity key = new IopmKeyEntity();
//		if (name != null && !"".equals(name))
//			key.setName(name);
//		if (keyword1 != null && !"".equals(keyword1))
//			key.setKeyword1(keyword1);
//		if (keyword2 != null && !"".equals(keyword2))
//			key.setKeyword2(keyword2);
//		if (keyword3 != null && !"".equals(keyword3))
//			key.setKeyword3(keyword3);
//		if (!"".equals(classify_name))
//			key.setFirst_classify(classify_name);
//		if (!"".equals(classifyTwo_name))
//			key.setSecond_classify(classifyTwo_name);
//		if (zero_id != null && !"".equals(zero_id))
//			key.setZero_id(zero_id);
		
		// 分页
		List<IopmKeyEntity> roleList = new ArrayList<IopmKeyEntity>();
		Map<String, Object> taskMap = new HashMap();
		taskMap.put("start", start + 1);
		taskMap.put("limit", limit);
		taskMap.put("queryMethod", queryMethod);
		if (name != null && !"".equals(name))
			taskMap.put("name", name);
		if (keyword1 != null && !"".equals(keyword1))
			taskMap.put("keyword1", keyword1);
		if (keyword2 != null && !"".equals(keyword2))
			taskMap.put("keyword2", keyword2);
		if (keyword3 != null && !"".equals(keyword3))
			taskMap.put("keyword3", keyword3);
		if (classify_name != null && !"".equals(classify_name))
			taskMap.put("classify_name", classify_name);
		if (classifyTwo_name != null && !"".equals(classifyTwo_name))
			taskMap.put("classifyTwo_name", classifyTwo_name);
		if (zero_id != null && !"".equals(zero_id))
			taskMap.put("zero_id", zero_id);
		totalCount = keyCluesDao.selectTotal(taskMap);
		System.out.println("queryMethod=....."+queryMethod);
		System.out.println(totalCount + "   " + limit + "   " + zero_id
				+ "    " + name);
		// System.out.println(totalCount);
		roleList = keyCluesDao.selectAll(taskMap);
		if(queryMethod != null && queryMethod == 1 && !"".equals(name)){
			List<IopmKeyEntity> keyList = new ArrayList<IopmKeyEntity>();
			for(int i = 0; i < roleList.size(); i++){
				List<String> list4 = new ArrayList<String>();
				String keyName = roleList.get(i).getName();
				String keyWd = roleList.get(i).getKeyword2();
				String[] keys = keyWd.split(",");
				for(int j=0;j<keys.length;j++){
					list4.add(keys[j]);
				}
		        if(list4.contains(name)||keyName.equals(name)){
		        	keyList.add(roleList.get(i));
		        }    

			}
			roleList.clear();
			roleList.addAll(keyList);
			totalCount = roleList.size();
			System.out.println("11");
		}
		rolePgn = new Pagination(start, limit, totalCount);
		rolePgn.setList(roleList);
		secondList = keyCluesDao.getAllSecondClassify();
		iopmList = keyCluesDao.getAllClassify();
		return "clue";
	}

	/**
	 * 删除记录
	 * 
	 * @return null
	 */
	public String deleteKey() throws Exception {
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("text/html;charset=UTF-8");// 解决中文乱码
		keyCluesDao.deleteKey(id);
		response.getWriter().print("{success:true,info:'删除成功'}");
		return null;
	}

	/**
	 *根据id查询
	 * 
	 * @throws Exception
	 */
	public String selectOne() throws Exception {
		key = keyCluesDao.selectById(id);
		return "one";
	}

	/**
	 *类别管理模块
	 * 
	 * @return "theme"
	 */
	public String manageClassify() throws Exception {
		firstList = keyCluesDao.getAllFirst();
		iopmList = keyCluesDao.getAllClassify();
		secondList = keyCluesDao.getAllSecondClassify();
		return "theme";
	}

	/**
	 *获取全部一级类别
	 * 
	 * @return null
	 */
	public String getManage() throws Exception {
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("text/html;charset=UTF-8");// 解决中文乱码
		firstList = keyCluesDao.getAllFirst();
		this.arrayToJson(firstList);
		return null;
	}

	/**
	 *修改类别
	 * 
	 * @return null
	 */
	public String updateClassify() throws Exception {
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("text/html;charset=UTF-8");// 解决中文乱码
		IopmClassify iopm = keyCluesDao.selectByName(classify_name);
		if (iopm == null) {
			IopmClassify iopmc = new IopmClassify();
			iopmc.setFirst_classify_id(classify_id);
			iopmc.setFirst_classify(classify_name);
			keyCluesDao.updateClassify(iopmc);
			response.getWriter().print("{success:true,info:'修改成功'}");
		} else {
			response.getWriter().print("{success:true,info:'类名已存在'}");
		}
		return null;
	}

	/**
	 *修改二级类别
	 * 
	 * @return null
	 */
	public String updateClassifyTwo() throws Exception {
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("text/html;charset=UTF-8");// 解决中文乱码
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("classifyTwo_id", classifyTwo_id);
		map.put("classifyTwo_name", classifyTwo_name);
		int num = keyCluesDao.getClassifyTwo(map);
		if (num > 0) {
			response.getWriter().print("{success:true,info:'二级类别已存在!'}");
		} else {
			keyCluesDao.updateClassifyTwo(map);
			response.getWriter().print("{success:true,info:'修改成功!'}");
		}
		return null;
	}

	/**
	 *删除类别
	 * 
	 * @return null
	 */
	public String deleteClassify() throws Exception {
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("text/html;charset=UTF-8");// 解决中文乱码
		keyCluesDao.deleteKeyword(classify_id);
		keyCluesDao.deleteClassifyTwo(classify_id);
		keyCluesDao.deleteClassify(classify_id);
		response.getWriter().print("删除成功");
		return null;
	}

	/**
	 *删除二级类别
	 * 
	 * @return null
	 */
	public String deleteSecondClassify() throws Exception {
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("text/html;charset=UTF-8");// 解决中文乱码
		keyCluesDao.deleteKeywordBySecondId(classifyTwo_id);
		keyCluesDao.deleteClassifyTwoBySecondId(classifyTwo_id);
		response.getWriter().print("删除成功");
		return null;
	}

	/**
	 *合并二级分类
	 * 
	 * @return null
	 */
	public String mergeClassify() throws Exception {
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("text/html;charset=UTF-8");// 解决中文乱码
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("classifyTwo_id", classifyTwo_id);
		map.put("classify_id", classify_id);
		zero_id = keyCluesDao.getZeroId(classify_id);
		map.put("zero_id", zero_id);
		keyCluesDao.updateKeywordById(map);
		keyCluesDao.updateClassifyTwoById(map);
		keyCluesDao.deleteClassify(classifyTwo_id);
		response.getWriter().print("{success:true,info:'合并成功!'}");

		return null;
	}

	/* 合并三级分类 */
	public String mergeSecondClassify() throws Exception {
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("text/html;charset=UTF-8");// 解决中文乱码
		Long classify1 = keyCluesDao.getSecondClassify(classifyTwo_id)
				.getFirst_classify_id();// 原来的
		Long classify2 = keyCluesDao.getSecondClassify(classify_id)
				.getFirst_classify_id();
		zero_id = keyCluesDao.getZeroId(classify2);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("classify_id", classify_id);
		map.put("classifyTwo_id", classifyTwo_id);
		map.put("classify2", classify2);
		map.put("zero_id", zero_id);
		keyCluesDao.updateKeywordSecond(map);
		keyCluesDao.mergerSecond(map);
		keyCluesDao.deleteSecond(classifyTwo_id);
		response.getWriter().print("{success:true,info:'合并成功!'}");
		return null;
	}

	public void getFirstClassify() throws Exception {
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("text/html;charset=UTF-8");// 解决中文乱码
		List<IopmClassify> list = new ArrayList<IopmClassify>();
		list = keyCluesDao.getFirstClassify(zero_id);
		System.out.println("zero_id============================" + zero_id);
		this.arrayToJson(list);
	}

	public String getSecondClassify() throws Exception {
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("text/html;charset=UTF-8");// 解决中文乱码
		List<IopmKeyEntity> list = new ArrayList<IopmKeyEntity>();
		list = keyCluesDao.getAllSecondClassifyBy(classify_name);
		this.arrayToJson(list);
		return null;
	}

	/* 根据一级Id获取全部类别 */
	public String getAllFirst() throws Exception {
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("text/html;charset=UTF-8");// 解决中文乱码

		iopmList = keyCluesDao.getAllClassifyById(zero_id);
		this.arrayToJson(iopmList);
		return null;
	}

	/* 获取合并二级分类 */
	public String getAllClassifyTo() throws Exception {
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("text/html;charset=UTF-8");// 解决中文乱码

		iopmList = keyCluesDao.getAllClassifyTo(classify_id);
		this.arrayToJson(iopmList);
		return null;
	}

	/* 获取合并三级分类 */
	public String getAllClassifyNum() throws Exception {
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("text/html;charset=UTF-8");// 解决中文乱码
		secondList = keyCluesDao.getAllClassifyNum(classifyTwo_id);
		this.arrayToJson(secondList);
		return null;
	}

	/* 图片上传 */
	public String alterImage1() throws Exception {
		HttpServletRequest request = ServletActionContext.getRequest();
		String root = ServletActionContext.getServletContext().getRealPath(
				"/imgs");
		String names[] = fileFileName.split("\\.");
		String fileName = "";
		if (names.length >= 1) {
			fileName = new Date().getTime() + "cluesImg" + "."
					+ names[names.length - 1];
		}
		String picPath = root + "/" + fileName;// 图片保存到数据库的路径
		FileInputStream input = new FileInputStream(file);
		FileOutputStream out = new FileOutputStream(picPath);
		BufferedInputStream in = null;
		BufferedOutputStream ou = null;
		try {
			in = new BufferedInputStream(input, 1024);
			ou = new BufferedOutputStream(out, 1024);
			byte[] buffer = new byte[1024];
			while (in.read(buffer) > 0) {
				ou.write(buffer);
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		} finally {
			if (in != null)
				in.close();
			if (ou != null)
				ou.close();
		}
		IopmClassify iopmClassify = new IopmClassify();
		String secondImg_url = "/IOPM/imgs/" + fileName;
		iopmClassify.setImage_url(secondImg_url);
		iopmClassify.setFirst_classify_id(classify_id);
		keyCluesDao.updateClassify(iopmClassify);
		firstList = keyCluesDao.getAllFirst();
		return "theme";
	}

	/* 判断关键词是否重复 */
	public String isRepeat() throws Exception {
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("text/html;charset=UTF-8");// 解决中文乱码
		List<IopmKeyInfoEntity> keyList = new ArrayList<IopmKeyInfoEntity>();
		List<String> sList = new ArrayList<String>();
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("keyword2", keyword2);
		map.put("id", id);
		keyList = keyCluesDao.isRepeat(map);
		System.out.println("keyword2="+keyword2);
		if (keyList.size() > 0) {
			for (IopmKeyInfoEntity key : keyList) {
				String[] keyArray = key.getKeyword2().split(",");
				Collections.addAll(sList, keyArray);
			}
			if (sList.contains(keyword2)) {
				System.out.println("baohan");
				response.getWriter().print("{'success':true,'info':'1'}");
			} else {
				System.out.println("bubaohan");
				System.out.println("id="+id);
				response.getWriter().print("{'success':true,'info':'2'}");
			}
		} else {
			System.out.println("bubaohan");
			response.getWriter().print("{'success':true,'info':'2'}");
		}
           return null;
	}
	//修改热点排序规则  创建历史记录
	public String updateCoefficient()throws Exception{
		
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("text/html;charset=UTF-8");// 解决中文乱码
		/*
		//1.修改4个系数
		Map<Integer, Float> dataMap = new HashMap<Integer, Float>();
		dataMap.put(1, example1);
		dataMap.put(2, example2);
		dataMap.put(3, example3);
		dataMap.put(4, example4);
		
		Map<String, Float> oneDataMap = null;
		for (Map.Entry<Integer, Float> entry: dataMap.entrySet()) {
			oneDataMap = new HashMap<String, Float>();
			oneDataMap.put("id", (float)entry.getKey());
			oneDataMap.put("value",entry.getValue());
			keyCluesDao.updateCoefficient(oneDataMap);
		}
		//2.修改权重值
		
		//3.创建回显历史记录
		List<Map> echoList = new ArrayList();
		//3.1 4个系数
		Map<String,Float> relatedFactorMap = new HashMap();
		relatedFactorMap.put("example1", example1);
		relatedFactorMap.put("example2", example2);
		relatedFactorMap.put("example3", example3);
		relatedFactorMap.put("example4", example4);
		echoList.add(relatedFactorMap);
		//3.2 树形数据
		Map <String,List> treeMap = new HashMap<String, List>();
		List<IopmFirst> zeroName = keyCluesDao.selectAllZeroName();
		List<IopmClassify> firstName = keyCluesDao.selectAllFirstName();
		List<IopmClassifyTwo> secondName = keyCluesDao.selectAllSecondName();
		List<IopmKeyEntity> fourthName = keyCluesDao.selectAllFourthName();
		List<Map> zeroList = new ArrayList();
		Map zerotree = null;
		for(IopmFirst zero : zeroName){
			zerotree = new HashMap();
			zerotree.put("id", zero.getZero_id());
			zerotree.put("name", zero.getZero_name());
			DecimalFormat dc1 = new DecimalFormat("0.00");
			zerotree.put("value", dc1.format(zero.getWeight()));
			
			List<Map> firstlist = new ArrayList();
			Map firsttree = null;
			for(IopmClassify first : firstName){
				if(first.getZero_id() == zero.getZero_id()){
					firsttree = new HashMap();
					firsttree.put("id", first.getFirst_classify_id());
					firsttree.put("name", first.getFirst_classify());
					DecimalFormat dc2 = new DecimalFormat("0.00");
					firsttree.put("value", dc2.format(first.getWeight()));
					List<Map> secondlist = new ArrayList();
					Map secondtree = null;
					for(IopmClassifyTwo second : secondName){
						if(second.getFirst_classify_id() == first.getFirst_classify_id()){
							secondtree = new HashMap();
							secondtree.put("id", second.getSecond_classify_id());
							secondtree.put("name", second.getSecond_classify());
							DecimalFormat dc3 = new DecimalFormat("0.00");
							secondtree.put("value", dc3.format(second.getWeight()));
							List<Map> thirlist = new ArrayList();
							Map thirtree = null;
							for(IopmKeyEntity third : fourthName){
								if(third.getSecond_id() == second.getSecond_classify_id()){
									thirtree = new HashMap();
									thirtree.put("id", third.getId());
									thirtree.put("name", third.getName());
									DecimalFormat dc4 = new DecimalFormat("0.00");
									thirtree.put("value", dc4.format(third.getWeight()));
									thirlist.add(thirtree);
								}
							}
							
							secondtree.put("chiled", thirlist);
							secondlist.add(secondtree);
						}
					}
					
					firsttree.put("chiled", secondlist);
					firstlist.add(firsttree);
				}
			}
			
			zerotree.put("chiled", firstlist);
			zeroList.add(zerotree);
		}
		treeMap.put("clues_weight", zeroList);
		echoList.add(treeMap);
		
		Map<String,Date> datemap = new HashMap<String, Date>();
		datemap.put("startDate", startDate);
		datemap.put("endDate", endDate);
		echoList.add(datemap);
		
		IopmSortHistory iopmSortHistory = new IopmSortHistory();
		JsonConfig jsonConfig = new JsonConfig();
		jsonConfig.setCycleDetectionStrategy(CycleDetectionStrategy.LENIENT);
		JSONArray content = JSONArray.fromObject(echoList, jsonConfig);
		iopmSortHistory.setContent(content.toString());
		Long tag = keyCluesDao.selectTagSequences();
		iopmSortHistory.setTag(tag);
		keyCluesDao.addSortHistory(iopmSortHistory);
		
		/*String url = null;
		List<Article> articles = keyCluesDao.selectRangeArticleid(datemap);
		for (Article article : articles) {
			url = "http://192.168.60.30:8080/related_sort?article_id=" + article.getId()+"&clue_ids=" + 
			article.getClues_ids() + "&may_invalid=" + article.getMay_invalid();
			getHttpClientInfo(url);
		}
		
		List<Hot> hots = keyCluesDao.selectRangeHotid(datemap);
		for (Hot hot : hots) {
			url = "http://192.168.60.30:8080/related_sort?hot_id=" + hot.getId() + "&hot_value=" + hot.getHot();
			getHttpClientInfo(url);
		}*/
		String s = null;
		if(data1!=null && data1.length > 0){
			for(int i = 0;i < data1.length;i++){
				s+= data1[i].getId();
				s+="__";
				s+= data1[i].getValue();
				s+="__";
			}
		}
		response.getWriter().write(s);
		return NONE;
	}
	//热点排序规则页面回显 json 格式 
	public String createDate() throws Exception{
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("text/html;charset=UTF-8");// 解决中文乱码
		
		//创建回显集合
		List<Map> echoList = new ArrayList();
		//4个系数
		List<IopmRelatedFactor> relatedFactor = keyCluesDao.selectAllRelatedFactor();
		Map relatedFactorMap = new HashMap();
		DecimalFormat dc = new DecimalFormat("0.00");
		relatedFactorMap.put("example1", dc.format(relatedFactor.get(0).getValue()));
		relatedFactorMap.put("example2", dc.format(relatedFactor.get(1).getValue()));
		relatedFactorMap.put("example3", dc.format(relatedFactor.get(2).getValue()));
		relatedFactorMap.put("example4", dc.format(relatedFactor.get(3).getValue()));
		echoList.add(relatedFactorMap);
		//树形数据
		Map <String,List> treeMap = new HashMap<String, List>();
		List<IopmFirst> zeroName = keyCluesDao.selectAllZeroName();
		List<IopmClassify> firstName = keyCluesDao.selectAllFirstName();
		List<IopmClassifyTwo> secondName = keyCluesDao.selectAllSecondName();
		List<IopmKeyEntity> fourthName = keyCluesDao.selectAllFourthName();
		List<Map> zeroList = new ArrayList();
		Map zerotree = null;
		for(IopmFirst zero : zeroName){
			zerotree = new HashMap();
			zerotree.put("id", zero.getZero_id());
			zerotree.put("name", zero.getZero_name());
			DecimalFormat dc1 = new DecimalFormat("0.00");
			zerotree.put("value", dc1.format(zero.getWeight()));
			
			List<Map> firstlist = new ArrayList();
			Map firsttree = null;
			for(IopmClassify first : firstName){
				if(first.getZero_id() == zero.getZero_id()){
					firsttree = new HashMap();
					firsttree.put("id", first.getFirst_classify_id());
					firsttree.put("name", first.getFirst_classify());
					DecimalFormat dc2 = new DecimalFormat("0.00");
					firsttree.put("value", dc2.format(first.getWeight()));
					List<Map> secondlist = new ArrayList();
					Map secondtree = null;
					for(IopmClassifyTwo second : secondName){
						if(second.getFirst_classify_id() == first.getFirst_classify_id()){
							secondtree = new HashMap();
							secondtree.put("id", second.getSecond_classify_id());
							secondtree.put("name", second.getSecond_classify());
							DecimalFormat dc3 = new DecimalFormat("0.00");
							secondtree.put("value", dc3.format(second.getWeight()));
							List<Map> thirlist = new ArrayList();
							Map thirtree = null;
							for(IopmKeyEntity third : fourthName){
								if(third.getSecond_id() == second.getSecond_classify_id()){
									thirtree = new HashMap();
									thirtree.put("id", third.getId());
									thirtree.put("name", third.getName());
									DecimalFormat dc4 = new DecimalFormat("0.00");
									thirtree.put("value", dc4.format(third.getWeight()));
									thirlist.add(thirtree);
								}
							}
							
							secondtree.put("chiled", thirlist);
							secondlist.add(secondtree);
						}
					}
					
					firsttree.put("chiled", secondlist);
					firstlist.add(firsttree);
				}
			}
			
			zerotree.put("chiled", firstlist);
			zeroList.add(zerotree);
		}
		treeMap.put("clues_weight", zeroList);
		echoList.add(treeMap);
		
		/*Map datemap = new HashMap<String, Date>();
		SimpleDateFormat sd = new SimpleDateFormat("yyyy-dd-MM");
		datemap.put("startdate", sd.format(startdate));
		datemap.put("enddate", sd.format(enddate));
		echoList.add(datemap);*/
		
		
		JsonConfig jsonConfig = new JsonConfig();
		jsonConfig.setCycleDetectionStrategy(CycleDetectionStrategy.LENIENT);
		JSONArray json = JSONArray.fromObject(echoList, jsonConfig);
		response.setContentType("text/html;charset=UTF-8");// 解决中文乱码
		response.getWriter().write(json.toString());
		return NONE;
	}
	public String testdata()throws Exception{
		
		List<Map> echoList = new ArrayList();
		//4个系数
		Map relatedFactorMap = new HashMap();
		relatedFactorMap.put("example1", example1);
		relatedFactorMap.put("example2", example2);
		relatedFactorMap.put("example3", example3);
		relatedFactorMap.put("example4", example4);
		echoList.add(relatedFactorMap);
		//树形数据
		Map <String,List> treeMap = new HashMap<String, List>();
		List<IopmFirst> zeroName = keyCluesDao.selectAllZeroName();
		List<IopmClassify> firstName = keyCluesDao.selectAllFirstName();
		List<IopmClassifyTwo> secondName = keyCluesDao.selectAllSecondName();
		List<IopmKeyEntity> fourthName = keyCluesDao.selectAllFourthName();
		List<Map> zeroList = new ArrayList();
		Map zerotree = null;
		for(IopmFirst zero : zeroName){
			zerotree = new HashMap();
			zerotree.put("id", zero.getZero_id());
			zerotree.put("name", zero.getZero_name());
			DecimalFormat dc1 = new DecimalFormat("0.00");
			zerotree.put("value", dc1.format(zero.getWeight()));
			
			List<Map> firstlist = new ArrayList();
			Map firsttree = null;
			for(IopmClassify first : firstName){
				if(first.getZero_id() == zero.getZero_id()){
					firsttree = new HashMap();
					firsttree.put("id", first.getFirst_classify_id());
					firsttree.put("name", first.getFirst_classify());
					DecimalFormat dc2 = new DecimalFormat("0.00");
					firsttree.put("value", dc2.format(first.getWeight()));
					List<Map> secondlist = new ArrayList();
					Map secondtree = null;
					for(IopmClassifyTwo second : secondName){
						if(second.getFirst_classify_id() == first.getFirst_classify_id()){
							secondtree = new HashMap();
							secondtree.put("id", second.getSecond_classify_id());
							secondtree.put("name", second.getSecond_classify());
							DecimalFormat dc3 = new DecimalFormat("0.00");
							secondtree.put("value", dc3.format(second.getWeight()));
							List<Map> thirlist = new ArrayList();
							Map thirtree = null;
							for(IopmKeyEntity third : fourthName){
								if(third.getSecond_id() == second.getSecond_classify_id()){
									thirtree = new HashMap();
									thirtree.put("id", third.getId());
									thirtree.put("name", third.getName());
									DecimalFormat dc4 = new DecimalFormat("0.00");
									thirtree.put("value", dc4.format(third.getWeight()));
									thirlist.add(thirtree);
								}
							}
							
							secondtree.put("chiled", thirlist);
							secondlist.add(secondtree);
						}
					}
					
					firsttree.put("chiled", secondlist);
					firstlist.add(firsttree);
				}
			}
			
			zerotree.put("chiled", firstlist);
			zeroList.add(zerotree);
		}
		treeMap.put("clues_weight", zeroList);
		echoList.add(treeMap);
		
		Map datemap = new HashMap<String, Date>();
		datemap.put("startDate", startDate);
		datemap.put("endDate", endDate);
		echoList.add(datemap);
		
		IopmSortHistory iopmSortHistory = new IopmSortHistory();
		JsonConfig jsonConfig = new JsonConfig();
		jsonConfig.setCycleDetectionStrategy(CycleDetectionStrategy.LENIENT);
		JSONArray content = JSONArray.fromObject(echoList, jsonConfig);
		iopmSortHistory.setContent(content.toString());
		Long tag = keyCluesDao.selectTagSequences();
		iopmSortHistory.setTag(tag);
		keyCluesDao.addSortHistory(iopmSortHistory);
		return NONE;
	}
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getKeyword1() {
		return keyword1;
	}

	public void setKeyword1(String keyword1) {
		this.keyword1 = keyword1;
	}

	public String getKeyword2() {
		return keyword2;
	}

	public void setKeyword2(String keyword2) {
		this.keyword2 = keyword2;
	}

	public String getKeyword3() {
		return keyword3;
	}

	public void setKeyword3(String keyword3) {
		this.keyword3 = keyword3;
	}

	public int getStart() {
		return start;
	}

	public void setStart(int start) {
		this.start = start;
	}

	public int getLimit() {
		return limit;
	}

	public void setLimit(int limit) {
		this.limit = limit;
	}

	public int getTotalCount() {
		return totalCount;
	}

	public void setTotalCount(int totalCount) {
		this.totalCount = totalCount;
	}

	public KeyCluesDao getKeyCluesDao() {
		return keyCluesDao;
	}

	public void setKeyCluesDao(KeyCluesDao keyCluesDao) {
		this.keyCluesDao = keyCluesDao;
	}

	public IopmKeyInfoEntity getKey() {
		return key;
	}

	public void setKey(IopmKeyInfoEntity key) {
		this.key = key;
	}

	public Long getClassify_id() {
		return classify_id;
	}

	public void setClassify_id(Long classify_id) {
		this.classify_id = classify_id;
	}

	public IopmClassify getClassify() {
		return iopmClassify;
	}

	public void setClassify(IopmClassify iopmClassify) {
		this.iopmClassify = iopmClassify;
	}

	public int getTotalPage() {
		return totalPage;
	}

	public void setTotalPage(int totalPage) {
		this.totalPage = totalPage;
	}

	public List<IopmClassify> getIopmList() {
		return iopmList;
	}

	public void setIopmList(List<IopmClassify> iopmList) {
		this.iopmList = iopmList;
	}

	public Integer getWeight() {
		return weight;
	}

	public void setWeight(Integer weight) {
		this.weight = weight;
	}

	public Long getClassifyTwo_id() {
		return classifyTwo_id;
	}

	public void setClassifyTwo_id(Long classifyTwo_id) {
		this.classifyTwo_id = classifyTwo_id;
	}

	private String classifyTwo_name;

	public IopmClassify getIopmClassify() {
		return iopmClassify;
	}

	public void setIopmClassify(IopmClassify iopmClassify) {
		this.iopmClassify = iopmClassify;
	}

	public String getClassifyTwo_name() {
		return classifyTwo_name;
	}

	public void setClassifyTwo_name(String classifyTwo_name) {
		this.classifyTwo_name = classifyTwo_name;
	}

	public Pagination getRolePgn() {
		return rolePgn;
	}

	public void setRolePgn(Pagination rolePgn) {
		this.rolePgn = rolePgn;
	}

	public String getClassify_name() {
		return classify_name;
	}

	public void setClassify_name(String classify_name) {
		this.classify_name = classify_name;
	}

	public List<IopmClassifyTwo> getSecondList() {
		return secondList;
	}

	public void setSecondList(List<IopmClassifyTwo> secondList) {
		this.secondList = secondList;
	}

	public Long getZero_id() {
		return zero_id;
	}

	public void setZero_id(Long zero_id) {
		this.zero_id = zero_id;
	}

	public String getZero_name() {
		return zero_name;
	}

	public void setZero_name(String zero_name) {
		this.zero_name = zero_name;
	}

	public List<IopmFirst> getFirstList() {
		return firstList;
	}

	public void setFirstList(List<IopmFirst> firstList) {
		this.firstList = firstList;
	}

	public File getFile() {
		return file;
	}

	public void setFile(File file) {
		this.file = file;
	}

	public String getFileContentType() {
		return fileContentType;
	}

	public void setFileContentType(String fileContentType) {
		this.fileContentType = fileContentType;
	}

	public String getFileFileName() {
		return fileFileName;
	}

	public void setFileFileName(String fileFileName) {
		this.fileFileName = fileFileName;
	}

	public Integer getQueryMethod() {
		return queryMethod;
	}

	public void setQueryMethod(Integer queryMethod) {
		this.queryMethod = queryMethod;
	}
	public float getExample1() {
		return example1;
	}
	public void setExample1(float example1) {
		this.example1 = example1;
	}
	public float getExample2() {
		return example2;
	}
	public void setExample2(float example2) {
		this.example2 = example2;
	}
	public float getExample3() {
		return example3;
	}
	public void setExample3(float example3) {
		this.example3 = example3;
	}
	public float getExample4() {
		return example4;
	}
	public void setExample4(float example4) {
		this.example4 = example4;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public UpdateClues[] getData1() {
		return data1;
	}

	public void setData1(UpdateClues[] data1) {
		this.data1 = data1;
	}

	

	
	
}
