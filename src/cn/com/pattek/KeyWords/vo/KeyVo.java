package cn.com.pattek.KeyWords.vo;

import java.util.Date;

public class KeyVo {
	private Long id;    //主键id
    private String name;    //名称
    private String keyword1;     //必须包含字段
    private String keyword2;     //至少包含一个的字段
    private String keyword3;     //不能包含的字段
    private Integer weight;    //权重
    private Long classify_id;    //分类id
    private Integer total_msg;    //信息总量
    private Integer today_msg;    //今日信息量
    private Date update_time;    //关键词更新时间
    private Date record_time;    //关键词创建时间
	private String classify_name;   //类别名称
}
