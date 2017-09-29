package cn.com.pattek.core.ibatis;

public class TdsConstant {

	// 引擎名字
	public static final String TDS_ENGINE_NAME_DATA_NORM = "DataNorm";
	public static final String TDS_ENGINE_NAME_FEATURE_CUT = "FeatureCut";
	public static final String TDS_ENGINE_NAME_FEATURE_EXTRACT = "FeatureExtract";
	public static final String TDS_ENGINE_NAME_MASS_DETECT = "MassDetect";
	public static final String TDS_ENGINE_NAME_MODEL_PRUNE = "ModelPrune";
	public static final String TDS_ENGINE_NAME_MODEL_TRAIN = "ModelTrain";
	public static final String TDS_ENGINE_NAME_PARTIAL_DETECT = "PartialDetect";
	public static final String TDS_ENGINE_NAME_VIDEO_CUT = "VideoCut";
	public static final String TDS_ENGINE_NAME_SUSPECTMODEL_PRUNE = "SuspectModelPrune";
	public static final String TDS_ENGINE_NAME_SUSPECTFEATURE_CUT = "SuspectFeatureCut";
	// 编目结果表_文件下载引擎
	public static final String TDS_ENGINE_NAME_RESULT_DOWNLOAD = "VideoDownLoad";
	public static final String TDS_ENGINE_NAME_AD_RESULT_DOWNLOAD = "AdResultVideoDownLoad";
	public static final String TDS_ENGINE_NAME_LOGO_DETECT = "LogoDetect";// 台标模板匹配
	public static final String TDS_ENGINE_NAME_LOGO_TRAIN = "LogoTrain";// 台标模板训练
    
	//文件转码格式
	public static final String TDS_DATANORM_S_SUFFIX = "wmv"; //原始文件格式
	public static final String TDS_DATANORM_C_SUFFIX = "wmv"; //转码后文件格式
	public static final String TDS_DATANORM_C_SUFFIX_AUDIO = "wma"; //音频转码后文件格式

	//频道类型 标清电视，高清电视，广播
	public static final Long TDS_TAB_MAM_CHAN_DATA_TYPE_243 = 243l; //广播
	public static final Long TDS_TAB_MAM_CHAN_DATA_TYPE_242 = 242l; //高清电视
	public static final Long TDS_TAB_MAM_CHAN_DATA_TYPE_241 = 241l; //标清电视
	
	// 引擎状态
	/** < 告知任务开始启动。 */
	public static final int TDS_ENGINE_STATUS_STARTED = 1;
	/** < 发生了轻度异常，但任务可以继续执行。szMessage是详细警告信息。 */
	public static final int TDS_ENGINE_STATUS_WARNING = 2;
	/** < 任务的一部分已经完成。szMessage是部分任务的处理结果。 */
	public static final int TDS_ENGINE_STATUS_PARTIAL = 3;
	/** < 任务执行到中间的时候计算系统出错。通过OTD_GetTaskList重新运行此任务。 */
	public static final int TDS_ENGINE_STATUS_RETRY = 4;
	/** < 发生了严重异常，任务无法执行下去，将中止。szMessage是详细出错信息。此状态之后，该任务结束调度。 */
	public static final int TDS_ENGINE_STATUS_ERROR = 5;
	/** < 任务成功完成。szMessage是任务处理结果。此状态之后，该任务结束调度。 */
	public static final int TDS_ENGINE_STATUS_FINISHED = 6;

	/** 编目项目 **/
	// 8、 编目任务表：TAB_BM_TASK
	public static final int TDS_TAB_BM_TASK_BM_STATUS = 10;
	public static final int TDS_TAB_BM_TASK_BM_STATUS_WAIT = 0;
	public static final int TDS_TAB_BM_TASK_BM_STATUS_FINISHED = 1;

	public static final int TDS_TAB_BM_TASK_SPLIT_STATUS = 10;
	public static final int TDS_TAB_BM_TASK_SPLIT_STATUS_WAIT = 0;
	public static final int TDS_TAB_BM_TASK_SPLIT_STATUS_FINISHED = 1;

	// 10、 编目日常任务表：TAB_CHAN_D_TASK
	public static final int TDS_TAB_CHAN_D_TASK_FILE_STATUS = 10;
	public static final int TDS_TAB_CHAN_D_TASK_FILE_STATUS_WAIT = 0;
	public static final int TDS_TAB_CHAN_D_TASK_FILE_STATUS_FINISHED = 1;

	public static final int TDS_TAB_CHAN_D_TASK_FEA_STATUS = 10;
	public static final int TDS_TAB_CHAN_D_TASK_FEA_STATUS_WAIT = 0;
	public static final int TDS_TAB_CHAN_D_TASK_FEA_STATUS_FINISHED = 1;

	public static final int TDS_TAB_CHAN_D_TASK_MATCH_STATUS = 10;
	public static final int TDS_TAB_CHAN_D_TASK_MATCH_STATUS_WAIT = 0;
	public static final int TDS_TAB_CHAN_D_TASK_MATCH_STATUS_FINISHED = 1;

	public static final int TDS_TAB_CHAN_D_TASK_TPLT_STATUS = 3;
	public static final int TDS_TAB_CHAN_D_TASK_TPLT_STATUS_WAIT = 30;
	public static final int TDS_TAB_CHAN_D_TASK_TPLT_STATUS_FINISHED = 31;

	public static final int TDS_TAB_CHAN_D_TASK_PROG_STATUS = 4;
	public static final int TDS_TAB_CHAN_D_TASK_PROG_STATUS_WAIT = 40;
	public static final int TDS_TAB_CHAN_D_TASK_PROG_STATUS_FINISHED = 41;

	// 11、 文件处理表：TAB_MAM_FILE_PROC
	public static final int TDS_TAB_MAM_FILE_PROC_MATCH_STATUS = 11;
	public static final int TDS_TAB_MAM_FILE_PROC_MATCH_STATUS_WAIT = 110;
	public static final int TDS_TAB_MAM_FILE_PROC_MATCH_STATUS_WORKING = 111;
	public static final int TDS_TAB_MAM_FILE_PROC_MATCH_STATUS_FINISHED = 112;
	public static final int TDS_TAB_MAM_FILE_PROC_MATCH_STATUS_ERROR = 113;

	public static final int TDS_TAB_MAM_FILE_PROC_REPDET_STATUS = 10;
	public static final int TDS_TAB_MAM_FILE_PROC_REPDET_STATUS_WAIT = 100;
	public static final int TDS_TAB_MAM_FILE_PROC_REPDET_STATUS_WORKING = 101;
	public static final int TDS_TAB_MAM_FILE_PROC_REPDET_STATUS_FINISHED = 102;
	public static final int TDS_TAB_MAM_FILE_PROC_REPDET_STATUS_ERROR = 103;

	// 日常任务表重复性检测状态
	
	public static final int TDS_TAB_BM_D_TASK_DUP_STATUS = 21;
	public static final int TDS_TAB_BM_D_TASK_DUP_STATUS_WAIT = 210;
	public static final int TDS_TAB_BM_D_TASK_DUP_STATUS_WORKING = 211;
	public static final int TDS_TAB_BM_D_TASK_DUP_STATUS_FINISHED = 212;
	public static final int TDS_TAB_BM_D_TASK_DUP_STATUS_ERROR = 213;
	
	// 12、 广告结果表：TAB_AD_RESULT
	public static final int TDS_TAB_AD_RESULT_RST_STATUS = 10;
	public static final int TDS_TAB_AD_RESULT_RST_STATUS_WAIT = 0;
	public static final int TDS_TAB_AD_RESULT_RST_STATUS_FINISHED = 1;

	// 14、 一级模板表：TAB_S_TPLT
	public static final int TDS_TAB_S_TPLT_DUP_STATUS = 12;
	public static final int TDS_TAB_S_TPLT_DUP_STATUS_WAIT = 120;
	public static final int TDS_TAB_S_TPLT_DUP_STATUS_WORKING = 121;
	public static final int TDS_TAB_S_TPLT_DUP_STATUS_FINISHED = 122;
	public static final int TDS_TAB_S_TPLT_DUP_STATUS_DELETE = 123;// 查重删除
	public static final int TDS_TAB_S_TPLT_DUP_STATUS_ERROR = 124;

	public static final int TDS_TAB_S_TPLT_FEACUT_STATUS = 13;
	public static final int TDS_TAB_S_TPLT_FEACUT_STATUS_WAIT = 130;
	public static final int TDS_TAB_S_TPLT_FEACUT_STATUS_WORKING = 131;
	public static final int TDS_TAB_S_TPLT_FEACUT_STATUS_FINISHED = 132;
	public static final int TDS_TAB_S_TPLT_FEACUT_STATUS_ERROR = 133;

	//模板截取状态
	public static final int TDS_TAB_S_TPLT_VIDEO_STATUS = 14;
	public static final int TDS_TAB_S_TPLT_VIDEO_STATUS_WAIT = 140;
	public static final int TDS_TAB_S_TPLT_VIDEO_STATUS_WORKING = 141;
	public static final int TDS_TAB_S_TPLT_VIDEO_STATUS_FINISHED = 142;
	public static final int TDS_TAB_S_TPLT_VIDEO_STATUS_ERROR = 143;

	
    //结果表结果截取状态
	
	public static final int TDS_TAB_AD_RESULT_DOWNLOAD_STATUS = 60;
	public static final int TDS_TAB_AD_RESULT_DOWNLOAD_STATUS_WAIT = 600; // 等待下载
	public static final int TDS_TAB_AD_RESULT_DOWNLOAD_STATUS_WORKING = 601; // 正在下载
	public static final int TDS_TAB_AD_RESULT_DOWNLOAD_STATUS_FINISHED = 602; // 下载完成
	public static final int TDS_TAB_AD_RESULT_DOWNLOAD_STATUS_ERROR = 603; // 下载失败
	public static final int TDS_TAB_AD_RESULT_DOWNLOAD_STATUS_NONE = 604; // 无需下载
	
	
	
	public static final int TDS_TAB_S_TPLT_LABEL_STATUS = 10;
	public static final int TDS_TAB_S_TPLT_LABEL_STATUS_WAIT = 0;
	public static final int TDS_TAB_S_TPLT_LABEL_STATUS_FINISHED = 1;

	// 15、 二级模板表：TAB_TPLT
	public static final int TDS_TAB_TPLT_LABEL_STATUS = 5;
	public static final int TDS_TAB_TPLT_LABEL_STATUS_WAIT = 50;
	public static final int TDS_TAB_TPLT_LABEL_STATUS_FINISHED = 51;

	// 23、 栏目播出监测表： TAB_PROG_MONITOR_TASK
	public static final int TDS_TAB_PROG_MONITOR_TASK_SPLIT_STATUS = 10;
	public static final int TDS_TAB_PROG_MONITOR_TASK_SPLIT_STATUS_WAIT = 0;
	public static final int TDS_TAB_PROG_MONITOR_TASK_SPLIT_STATUS_FINISHED = 1;

	// 25、 栏目计划播出日常任务表：TAB_PROG_PLAN_D_TIME
	public static final int TDS_TAB_PROG_PLAN_D_TIME_PROG_STATUS = 10;
	public static final int TDS_TAB_PROG_PLAN_D_TIME_PROG_STATUS_WAIT = 0;
	public static final int TDS_TAB_PROG_PLAN_D_TIME_PROG_STATUS_FINISHED = 1;

	// 34、 新闻相关任务表：TAB_NEWS_TASK
	public static final int TDS_TAB_NEWS_TASK_TASK_STATUS = 10;
	public static final int TDS_TAB_NEWS_TASK_TASK_STATUS_WAIT = 0;
	public static final int TDS_TAB_NEWS_TASK_TASK_STATUS_FINISHED = 1;

	public static final int TDS_TAB_NEWS_TASK_SPLIT_STATUS = 10;
	public static final int TDS_TAB_NEWS_TASK_SPLIT_STATUS_WAIT = 0;
	public static final int TDS_TAB_NEWS_TASK_SPLIT_STATUS_FINISHED = 1;

	// 35、 新闻相关日常任务表：TAB_NEWS_TASK_FILE
	public static final int TDS_TAB_NEWS_TASK_FILE_PRE_STATUS = 10;
	public static final int TDS_TAB_NEWS_TASK_FILE_PRE_STATUS_WAIT = 0;
	public static final int TDS_TAB_NEWS_TASK_FILE_PRE_STATUS_FINISHED = 1;

	public static final int TDS_TAB_NEWS_TASK_FILE_CSR_STATUS = 10;
	public static final int TDS_TAB_NEWS_TASK_FILE_CSR_STATUS_WAIT = 0;
	public static final int TDS_TAB_NEWS_TASK_FILE_CSR_STATUS_FINISHED = 1;

	public static final int TDS_TAB_NEWS_TASK_FILE_KWS_STATUS = 10;
	public static final int TDS_TAB_NEWS_TASK_FILE_KWS_STATUS_WAIT = 0;
	public static final int TDS_TAB_NEWS_TASK_FILE_KWS_STATUS_FINISHED = 1;

	public static final int TDS_TAB_NEWS_TASK_FILE_ST_STATUS = 10;
	public static final int TDS_TAB_NEWS_TASK_FILE_ST_STATUS_WAIT = 0;
	public static final int TDS_TAB_NEWS_TASK_FILE_ST_STATUS_FINISHED = 1;

	public static final int TDS_TAB_NEWS_TASK_FILE_NC_STATUS = 10;
	public static final int TDS_TAB_NEWS_TASK_FILE_NC_STATUS_WAIT = 0;
	public static final int TDS_TAB_NEWS_TASK_FILE_NC_STATUS_FINISHED = 1;

	// 36、 CSR、KWS中间结果表：TAB_PRE_RESULT
	public static final int TDS_TAB_PRE_RESULT_CSR_FLAG = 10;
	public static final int TDS_TAB_PRE_RESULT_CSR_DO = 0;
	public static final int TDS_TAB_PRE_RESULT_CSR_NOT_DU = 1;

	public static final int TDS_TAB_PRE_RESULT_KWS_FLAG = 10;
	public static final int TDS_TAB_PRE_RESULT_KWS_DO = 0;
	public static final int TDS_TAB_PRE_RESULT_KWS_NOT_DU = 1;

	//
	 ////11、 台标模板文件表，模板训练状态：TAB_LOGO_TEMPLET
	public static final int TDS_TAB_LOGO_TEMPLET_LOGO_FEA_STATUS = 33;
	public static final int TDS_TAB_LOGO_TEMPLET_LOGO_FEA_STATUS_WAIT = 330;
	public static final int TDS_TAB_LOGO_TEMPLET_LOGO_FEA_STATUS_WORKING = 331;
	public static final int TDS_TAB_LOGO_TEMPLET_LOGO_FEA_STATUS_FINISHED = 332;
	public static final int TDS_TAB_LOGO_TEMPLET_LOGO_FEA_STATUS_ERROR = 333;
	
	//// 11、 台标文件处理表：TAB_LOGO_TASK_FILE
	public static final int TDS_TAB_LOGO_TASK_FILE_LOGO_STATUS = 34;
	public static final int TDS_TAB_LOGO_TASK_FILE_LOGO_STATUS_WAIT = 340;
	public static final int TDS_TAB_LOGO_TASK_FILE_LOGO_STATUS_WORKING = 341;
	public static final int TDS_TAB_LOGO_TASK_FILE_LOGO_STATUS_FINISHED = 342;
	public static final int TDS_TAB_LOGO_TASK_FILE_LOGO_STATUS_ERROR = 343;
	
	
	/** 电视剧审看项目 **/
	//	参数配置表
	/** 转码输出格式 **/
	public static final String TDS_TAB_APP_CONFIG_CONF_ATTR = "TRANS_FORMAT";
	//	存储表
	/** 电视剧存储名称 **/
	public static final String TDS_TAB_MAM_STORAGE_STO_NAME = "TV_STORAGE";
	
	// 电视剧表：TAB_TV_INFO
	/** 电视剧类型 **/
	public static final long TDS_TAB_TV_INFO_TYPE = 18;
	public static final long TDS_TAB_TV_INFO_TYPE_ZD = 181;
	public static final long TDS_TAB_TV_INFO_TYPE_FZD = 182;
	
	// 数据导入任务表：TAB_VI_TASK
	/** 数据类型 **/
	public static final long TDS_TAB_VI_TASK_DATA_TYPE = 10;
	public static final long TDS_TAB_VI_TASK_DATA_TYPE_BQ = 101;
	public static final long TDS_TAB_VI_TASK_DATA_TYPE_GQ = 102;
	/** 光盘类型 **/
	public static final long TDS_TAB_VI_TASK_DISK_TYPE = 19;
	public static final long TDS_TAB_VI_TASK_DISK_TYPE_SINGLE = 191;
	public static final long TDS_TAB_VI_TASK_DISK_TYPE_MULTI = 192;
	/** 片子类型 **/
	public static final long TDS_TAB_VI_TASK_PROGRAM_TYPE = 20;
	public static final long TDS_TAB_VI_TASK_PROGRAM_TYPE_SAMPLE = 201;
	public static final long TDS_TAB_VI_TASK_PROGRAM_TYPE_FINAL = 202;
	/** 数据导入状态 **/
	public static final long TDS_TAB_VI_TASK_TASK_STATUS = 11;
	public static final long TDS_TAB_VI_TASK_TASK_STATUS_WAIT = 111;
	public static final long TDS_TAB_VI_TASK_TASK_STATUS_WORKING = 112;
	public static final long TDS_TAB_VI_TASK_TASK_STATUS_FINISHED = 113;
	public static final long TDS_TAB_VI_TASK_TASK_STATUS_ERROR = 114;
	
	// 文件表：TAB_MAM_FILE
	/** 数据拷贝状态 **/
	public static final long TDS_TAB_MAM_FILE_STO_STATUS = 12;
	public static final long TDS_TAB_MAM_FILE_STO_STATUS_WAIT = 121;
	public static final long TDS_TAB_MAM_FILE_STO_STATUS_WORKING = 122;
	public static final long TDS_TAB_MAM_FILE_STO_STATUS_FINISHED = 123;
	public static final long TDS_TAB_MAM_FILE_STO_STATUS_ERROR = 124;
	/** 数据转码状态 **/
	public static final long TDS_TAB_MAM_FILE_TRAN_STATUS = 13;
	public static final long TDS_TAB_MAM_FILE_TRAN_STATUS_WAIT = 131;
	public static final long TDS_TAB_MAM_FILE_TRAN_STATUS_WORKING = 132;
	public static final long TDS_TAB_MAM_FILE_TRAN_STATUS_FINISHED = 133;
	public static final long TDS_TAB_MAM_FILE_TRAN_STATUS_ERROR = 134;
	/** 特征提取状态 **/
	public static final long TDS_TAB_MAM_FILE_FEA_STATUS = 14;
	public static final long TDS_TAB_MAM_FILE_FEA_STATUS_WAIT = 141;
	public static final long TDS_TAB_MAM_FILE_FEA_STATUS_WORKING = 142;
	public static final long TDS_TAB_MAM_FILE_FEA_STATUS_FINISHED = 143;
	public static final long TDS_TAB_MAM_FILE_FEA_STATUS_ERROR = 144;
	/** 时间戳识别状态 **/
	public static final long TDS_TAB_MAM_FILE_TIME_STATUS = 16;
	public static final long TDS_TAB_MAM_FILE_TIME_STATUS_WAIT = 161;
	public static final long TDS_TAB_MAM_FILE_TIME_STATUS_WORKING = 162;
	public static final long TDS_TAB_MAM_FILE_TIME_STATUS_FINISHED = 163;
	public static final long TDS_TAB_MAM_FILE_TIME_STATUS_ERROR = 164;
	/** 审批状态 **/
	public static final long TDS_TAB_MAM_FILE_CHECK_STATUS = 17;
	public static final long TDS_TAB_MAM_FILE_CHECK_STATUS_WAIT = 171;
	public static final long TDS_TAB_MAM_FILE_CHECK_STATUS_WORKING = 172;
	
	// 送审子任务表：TAB_SI_D_TASK
	/** 任务状态 **/
	public static final long TDS_TAB_SI_D_TASK_TASK_STATUS = 15;
	public static final long TDS_TAB_SI_D_TASK_TASK_STATUS_WAIT = 151;
	public static final long TDS_TAB_SI_D_TASK_TASK_STATUS_WORKING = 152;
	public static final long TDS_TAB_SI_D_TASK_TASK_STATUS_FINISHED = 153;
	public static final long TDS_TAB_SI_D_TASK_TASK_STATUS_ERROR = 154;
	
	// 比对结果表：TAB_SD_RESULT
	/** 结果类型 **/
	public static final long TDS_TAB_SD_RESULT_RST_TYPE = 21;
	public static final long TDS_TAB_SD_RESULT_RST_TYPE_UNMOD = 211;
	public static final long TDS_TAB_SD_RESULT_RST_TYPE_NEW = 212;
	public static final long TDS_TAB_SD_RESULT_RST_TYPE_DEL = 213;
	public static final long TDS_TAB_SD_RESULT_RST_TYPE_MOD = 214;
}
