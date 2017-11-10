package cn.com.pattek.utils;

import java.io.FileOutputStream;
import java.io.OutputStream;
import java.math.BigInteger;
import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.apache.poi.xwpf.usermodel.XWPFParagraph;
import org.apache.poi.xwpf.usermodel.XWPFRun;
import org.apache.poi.xwpf.usermodel.XWPFTableCell;
import org.openxmlformats.schemas.wordprocessingml.x2006.main.CTFonts;
import org.openxmlformats.schemas.wordprocessingml.x2006.main.CTHpsMeasure;
import org.openxmlformats.schemas.wordprocessingml.x2006.main.CTRPr;
import org.openxmlformats.schemas.wordprocessingml.x2006.main.CTSignedTwipsMeasure;
import org.openxmlformats.schemas.wordprocessingml.x2006.main.CTSym;
import org.openxmlformats.schemas.wordprocessingml.x2006.main.CTTblWidth;
import org.openxmlformats.schemas.wordprocessingml.x2006.main.CTTc;
import org.openxmlformats.schemas.wordprocessingml.x2006.main.CTTcPr;
import org.openxmlformats.schemas.wordprocessingml.x2006.main.CTTextScale;
import org.openxmlformats.schemas.wordprocessingml.x2006.main.CTVerticalJc;
import org.openxmlformats.schemas.wordprocessingml.x2006.main.STHint;
import org.openxmlformats.schemas.wordprocessingml.x2006.main.STTblWidth;
import org.openxmlformats.schemas.wordprocessingml.x2006.main.STVerticalJc;

import sun.misc.BASE64Decoder;

public class POIWordUtils {
	public static void setCellWidthAndVAlign(XWPFTableCell cell, String width,  
            STTblWidth.Enum typeEnum, STVerticalJc.Enum vAlign) {  
        CTTcPr tcPr = getCellCTTcPr(cell);  
        CTTblWidth tcw = tcPr.isSetTcW() ? tcPr.getTcW() : tcPr.addNewTcW();  
        if (width != null) {  
            tcw.setW(new BigInteger(width));  
        }  
        if (typeEnum != null) {  
            tcw.setType(typeEnum);  
        }  
        if (vAlign != null) {  
            CTVerticalJc vJc = tcPr.isSetVAlign() ? tcPr.getVAlign() : tcPr  
                    .addNewVAlign();  
            vJc.setVal(vAlign);  
        }  
    }  
	
	 /** 
     *  
     * @Description: 得到Cell的CTTcPr,不存在则新建 
     */  
    public static CTTcPr getCellCTTcPr(XWPFTableCell cell) {  
        CTTc cttc = cell.getCTTc();  
        CTTcPr tcPr = cttc.isSetTcPr() ? cttc.getTcPr() : cttc.addNewTcPr();  
        return tcPr;  
    }  
    
    public static void setParagraphRunSymInfo(XWPFParagraph p, XWPFRun pRun,  
            String cnFontFamily, String enFontFamily, String fontSize,  
            String string, boolean isBlod, boolean isItalic, boolean isStrike, boolean b, Object object, Object object2, int position,  
            int spacingValue, int indent) throws Exception {  
        CTRPr pRpr = getRunCTRPr(p, pRun);  
        // 设置字体  
        CTFonts fonts = pRpr.isSetRFonts() ? pRpr.getRFonts() : pRpr  
                .addNewRFonts();  
        if (StringUtils.isNotBlank(enFontFamily)) {  
            fonts.setAscii(enFontFamily);  
            fonts.setHAnsi(enFontFamily);  
        }  
        if (StringUtils.isNotBlank(cnFontFamily)) {  
            fonts.setEastAsia(cnFontFamily);  
            fonts.setHint(STHint.EAST_ASIA);  
        }  
        // 设置字体大小  
        CTHpsMeasure sz = pRpr.isSetSz() ? pRpr.getSz() : pRpr.addNewSz();  
        sz.setVal(new BigInteger(fontSize));  
  
        CTHpsMeasure szCs = pRpr.isSetSzCs() ? pRpr.getSzCs() : pRpr  
                .addNewSzCs();  
        szCs.setVal(new BigInteger(fontSize));  
  
        // 设置字体样式  
        // 加粗  
        if (isBlod) {  
            pRun.setBold(isBlod);  
        }  
        // 倾斜  
        if (isItalic) {  
            pRun.setItalic(isItalic);  
        }  
        // 删除线  
        if (isStrike) {  
            pRun.setStrike(isStrike);  
        }  
        // 设置文本位置  
        if (position != 0) {  
            pRun.setTextPosition(position);  
        }  
        if (spacingValue > 0) {  
            // 设置字符间距信息  
            CTSignedTwipsMeasure ctSTwipsMeasure = pRpr.isSetSpacing() ? pRpr  
                    .getSpacing() : pRpr.addNewSpacing();  
            ctSTwipsMeasure  
                    .setVal(new BigInteger(String.valueOf(spacingValue)));  
        }  
        if (indent > 0) {  
            CTTextScale paramCTTextScale = pRpr.isSetW() ? pRpr.getW() : pRpr  
                    .addNewW();  
            paramCTTextScale.setVal(indent);  
        }  
        List<CTSym> symList = pRun.getCTR().getSymList();  
        CTSym sym = CTSym.Factory  
                .parse("<xml-fragment w:font=\"Wingdings 2\" w:char=\"00A3\" xmlns:w=\"http://schemas.openxmlformats.org/wordprocessingml/2006/main\" xmlns:wne=\"http://schemas.microsoft.com/office/word/2006/wordml\"> </xml-fragment>");  
        symList.add(sym);  
    }  
    
    /** 
     * @Description: 得到XWPFRun的CTRPr 
     */  
    public static CTRPr getRunCTRPr(XWPFParagraph p, XWPFRun pRun) {  
        CTRPr pRpr = null;  
        if (pRun.getCTR() != null) {  
            pRpr = pRun.getCTR().getRPr();  
            if (pRpr == null) {  
                pRpr = pRun.getCTR().addNewRPr();  
            }  
        } else {  
            pRpr = p.getCTP().addNewR().addNewRPr();  
        }  
        return pRpr;  
    } 
    
    public static XWPFRun getOrAddParagraphFirstRun(XWPFParagraph p, boolean isInsert,  
            boolean isNewLine) {  
        XWPFRun pRun = null;  
        if (isInsert) {  
            pRun = p.createRun();  
        } else {  
            if (p.getRuns() != null && p.getRuns().size() > 0) {  
                pRun = p.getRuns().get(0);  
            } else {  
                pRun = p.createRun();  
            }  
        }  
        if (isNewLine) {  
            pRun.addBreak();  
        }  
        return pRun;  
    }  
    /**
     * 将64编码保存为图片
     * @param imgStr
     * @param imgFilePath
     * @return
     */
    public static boolean GenerateImage(String imgStr, String imgFilePath) {// 对字节数组字符串进行Base64解码并生成图片
		if (imgStr == null) // 图像数据为空
			return false;
		BASE64Decoder decoder = new BASE64Decoder();
		try {
			// Base64解码
			byte[] bytes = decoder.decodeBuffer(imgStr);
			for (int i = 0; i < bytes.length; ++i) {
				if (bytes[i] < 0) {// 调整异常数据
					bytes[i] += 256;
				}
			}
			// 生成jpeg图片 
			OutputStream out = new FileOutputStream(imgFilePath);
			out.write(bytes);
			out.flush();
			out.close();
			return true;
		} catch (Exception e) {
			return false;
		}
	}
    
    
}
