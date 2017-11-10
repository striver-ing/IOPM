package cn.com.pattek.KeyWords.entity;

public class IopmKeyWords{
  
	private long zero_id ;//一级分类id
	private String zero_name;//一级分类名称
	private long first_classify_id;//二级分类id
	private String first_classify;//二级分类名称
	private long second_classify_id;//三级分类id
	private String second_classify;//三级分类名称
	private long clues_id;//线索id
	private String clues_name;//线索名
	private long keywords_id;//关键词id
	private String keyword2;//包含关键词
	private String keyword3;//不包含关键词
	private long msg_count;//总个数
	public long getZero_id()
	{
		return zero_id;
	}
	public void setZero_id(long zero_id)
	{
		this.zero_id = zero_id;
	}
	public String getClues_name()
	{
		return clues_name;
	}
	public void setClues_name(String clues_name)
	{
		this.clues_name = clues_name;
	}
	public String getZero_name()
	{
		return zero_name;
	}
	public void setZero_name(String zero_name)
	{
		this.zero_name = zero_name;
	}
	public long getFirst_classify_id()
	{
		return first_classify_id;
	}
	public void setFirst_classify_id(long first_classify_id)
	{
		this.first_classify_id = first_classify_id;
	}
	public String getFirst_classify()
	{
		return first_classify;
	}
	public void setFirst_classify(String first_classify)
	{
		this.first_classify = first_classify;
	}
	public long getSecond_classify_id()
	{
		return second_classify_id;
	}
	public void setSecond_classify_id(long second_classify_id)
	{
		this.second_classify_id = second_classify_id;
	}
	public String getSecond_classify()
	{
		return second_classify;
	}
	public void setSecond_classify(String second_classify)
	{
		this.second_classify = second_classify;
	}
	public long getClues_id()
	{
		return clues_id;
	}
	public void setClues_id(long clues_id)
	{
		this.clues_id = clues_id;
	}
	public long getKeywords_id()
	{
		return keywords_id;
	}
	public void setKeywords_id(long keywords_id)
	{
		this.keywords_id = keywords_id;
	}
	public String getKeyword2()
	{
		return keyword2;
	}
	public void setKeyword2(String keyword2)
	{
		this.keyword2 = keyword2;
	}
	public String getKeyword3()
	{
		return keyword3;
	}
	public void setKeyword3(String keyword3)
	{
		this.keyword3 = keyword3;
	}
	public long getMsg_count()
	{
		return msg_count;
	}
	public void setMsg_count(long msg_count)
	{
		this.msg_count = msg_count;
	}



	
}
