package cn.com.pattek.core.tools;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.InetAddress;
import java.net.UnknownHostException;

import org.hyperic.sigar.CpuInfo;
import org.hyperic.sigar.CpuPerc;
import org.hyperic.sigar.FileSystem;
import org.hyperic.sigar.FileSystemUsage;
import org.hyperic.sigar.Mem;
import org.hyperic.sigar.Sigar;

/**
 * <获取系统信息类> 
 * <如CPU、内存、硬盘使用情况>
 */
public class GetSystemInfo {
	/**
	 * 获取本机IP地址
	 */
	public String getLocalIpAddress(){
		String ip = "";
		try {
			InetAddress address = InetAddress.getLocalHost();
			ip = String.valueOf(address);
			if(ip.indexOf("/") != -1){
				ip = ip.substring(ip.lastIndexOf("/")+1);
			}
			
		} catch (UnknownHostException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return ip;
	}
	/**
	 * 查询网络连接状况
	 * @param ip
	 * @return
	 */
	public long getPingNet(String ip) {
		int connStatus = 1;  //连接状态,默认连接失败
		Runtime runtime = Runtime.getRuntime(); // 获取当前程序的运行进对象
		Process process = null; // 声明处理类对象
		String line = null; // 返回行信息
		InputStream is = null; // 输入流
		InputStreamReader isr = null; // 字节流
		BufferedReader br = null;
		try {
			process = runtime.exec("ping " + ip); // PING
			is = process.getInputStream(); // 实例化输入流
			isr = new InputStreamReader(is);// 把输入流转换成字节流
			br = new BufferedReader(isr);// 从字节中读取文本
			while ((line = br.readLine()) != null) {
				if (line.contains("TTL")) {
					connStatus = 0;
					break;
				}
			}
			is.close();
			isr.close();
			br.close();
		} catch (IOException e) {
			System.out.println(e);
			runtime.exit(1);
		}
		//System.out.println("网络连接状态：  "+connStatus);
		return connStatus;
	}
	/**
	 * 查询磁盘利用率
	 * 超过60%为警告
	 */
	public double getDiskUsePercent() throws Exception{
		long total = 0;
		long use = 0;
		Sigar sigar = new Sigar(); 
        FileSystem fslist[] = sigar.getFileSystemList(); 
        for (int i = 0; i < fslist.length; i++) { 
            FileSystem fs = fslist[i]; 
            FileSystemUsage usage = null;
            switch (fs.getType()) { 
            case 0: // TYPE_UNKNOWN ：未知 
                break; 
            case 1: // TYPE_NONE 
                break; 
            case 2: // TYPE_LOCAL_DISK : 本地硬盘 
            	usage = sigar.getFileSystemUsage(fs.getDirName());
            	total += usage.getTotal();
            	use += usage.getUsed();
                // 文件系统总大小 usage.getTotal()KB
                // 文件系统剩余大小 usage.getFree()KB
                // 文件系统可用大小 usage.getAvail()KB
                // 文件系统已经使用量 usage.getUsed()KB
                // 文件系统资源的利用率 double usePercent = usage.getUsePercent() * 100D %; 
                break; 
            case 3:// TYPE_NETWORK ：网络 
                break; 
            case 4:// TYPE_RAM_DISK ：闪存 
                break; 
            case 5:// TYPE_CDROM ：光驱 
                break; 
            case 6:// TYPE_SWAP ：页面交换 
                break; 
            } 
        }
        double usePercent = (double)use/(double)total;
        //System.out.println("磁盘使用率:"+usePercent);
        return usePercent;
	}
	/**
	 * 获取硬盘剩余百分比
	 * 30%报警
	 * @return
	 * @throws Exception
	 */
	public double getDiskFreePercent() throws Exception{
		long total = 0;
		long free = 0;
		Sigar sigar = new Sigar(); 
        FileSystem fslist[] = sigar.getFileSystemList(); 
        for (int i = 0; i < fslist.length; i++) { 
            FileSystem fs = fslist[i]; 
            FileSystemUsage usage = null;
            switch (fs.getType()) { 
            case 0: // TYPE_UNKNOWN ：未知 
                break; 
            case 1: // TYPE_NONE 
                break; 
            case 2: // TYPE_LOCAL_DISK : 本地硬盘 
            	usage = sigar.getFileSystemUsage(fs.getDirName());
            	total += usage.getTotal();
            	free += usage.getFree();
                // 文件系统总大小 usage.getTotal()KB
                // 文件系统剩余大小 usage.getFree()KB
                // 文件系统可用大小 usage.getAvail()KB
                // 文件系统已经使用量 usage.getUsed()KB
                // 文件系统资源的利用率 double usePercent = usage.getUsePercent() * 100D %; 
                break; 
            case 3:// TYPE_NETWORK ：网络 
                break; 
            case 4:// TYPE_RAM_DISK ：闪存 
                break; 
            case 5:// TYPE_CDROM ：光驱 
                break; 
            case 6:// TYPE_SWAP ：页面交换 
                break; 
            } 
        }
        double freePercent = (double)free/(double)total;
        //System.out.println("磁盘剩余率:"+freePercent);
        return freePercent;
	}
	/**
	 * 查询内存使用率
	 * 超过60%报警
	 */
	public double getMemoryUsePercent() throws Exception { 
        Sigar sigar = new Sigar(); 
        Mem mem = sigar.getMem();
        long total = mem.getTotal();
		long use = mem.getUsed();
		double usePercent = (double)use/(double)total;
        // 内存总量 mem.getTotal()
        // 当前内存使用量 mem.getUsed()
        // 当前内存剩余量 mem.getFree()
        //Swap swap = sigar.getSwap(); 
        // 交换区总量 swap.getTotal()
        // 当前交换区使用量 swap.getUsed()
        // 当前交换区剩余量 swap.getFree()
		//System.out.println("内存使用率："+usePercent);
		return usePercent;
    }
	/**
	 * 查询内存剩余率
	 * 30%报警
	 */
	public double getMemoryFreePercent() throws Exception { 
        Sigar sigar = new Sigar(); 
        Mem mem = sigar.getMem();
        long total = mem.getTotal();
		long free = mem.getFree();
		double freePercent = (double)free/(double)total;
        // 内存总量 mem.getTotal()
        // 当前内存使用量 mem.getUsed()
        // 当前内存剩余量 mem.getFree()
        //Swap swap = sigar.getSwap(); 
        // 交换区总量 swap.getTotal()
        // 当前交换区使用量 swap.getUsed()
        // 当前交换区剩余量 swap.getFree()
		//System.out.println("内存剩余率："+freePercent);
		return freePercent;
    }
	
	/**
	 * 获取cup使用率
	 * @return
	 * @throws Exception
	 */
	public double getCpuUsePercent() throws Exception {
		double usePercent = -1;
		double cupTotal = 0;
		double cpuCount = 0;
        Sigar sigar = new Sigar(); 
        CpuInfo infos[] = sigar.getCpuInfoList(); 
        CpuPerc cpuList[] = null; 
        cpuList = sigar.getCpuPercList();
        cpuCount = infos.length;
        for (int i = 0; i < infos.length; i++) {// 不管是单块CPU还是多CPU都适用
        	usePercent = cpuList[i].getCombined();
        	cupTotal += cpuList[i].getCombined();
            //CpuInfo info = infos[i]; 
            //System.out.println("第" + (i + 1) + "块CPU信息"); 
            //System.out.println("CPU的总量MHz:    " + info.getMhz());// CPU的总量MHz 
            //System.out.println("CPU生产商:    " + info.getVendor());// 获得CPU的卖主，如：Intel 
           // System.out.println("CPU类别:    " + info.getModel());// 获得CPU的类别，如：Celeron 
            //System.out.println("CPU缓存数量:    " + info.getCacheSize());// 缓冲存储器数量 
            //System.out.println("CPU用户使用率:    " + CpuPerc.format(cpuList[i].getUser()));// 用户使用率 
            //System.out.println("CPU系统使用率:    " + CpuPerc.format(cpuList[i].getSys()));// 系统使用率 
            //System.out.println("CPU当前等待率:    " + CpuPerc.format(cpuList[i].getWait()));// 当前等待率 
            //System.out.println("CPU当前错误率:    " + CpuPerc.format(cpuList[i].getNice()));// 
            //System.out.println("CPU当前空闲率:    " + CpuPerc.format(cpuList[i].getIdle()));// 当前空闲率 
            //System.out.println("CPU总的使用率:    " + CpuPerc.format(cpuList[i].getCombined()));// 总的使用率 
            //System.out.println("CPU总的使用率:    " + cpuList[i].getCombined());// 总的使用率 
        }
        usePercent = cupTotal/cpuCount;
        //System.out.println("CUP使用率为："+(usePercent*100)+"%");
        return usePercent;
    }
	/**
	 * 获取cup空闲率
	 * @return
	 * @throws Exception
	 */
	public double getCpuFreePercent() throws Exception {
		double freePercent = -1;
		double cupCount = 0;
		double cupFreeTotal = 0;
        Sigar sigar = new Sigar(); 
        CpuInfo infos[] = sigar.getCpuInfoList(); 
        CpuPerc cpuList[] = null; 
        cpuList = sigar.getCpuPercList();
        cupCount = infos.length;
        for (int i = 0; i < infos.length; i++) {// 不管是单块CPU还是多CPU都适用
        	freePercent = cpuList[i].getIdle();
        	cupFreeTotal += cpuList[i].getIdle();
            //CpuInfo info = infos[i]; 
            //System.out.println("第" + (i + 1) + "块CPU信息"); 
            //System.out.println("CPU的总量MHz:    " + info.getMhz());// CPU的总量MHz 
            //System.out.println("CPU生产商:    " + info.getVendor());// 获得CPU的卖主，如：Intel 
           // System.out.println("CPU类别:    " + info.getModel());// 获得CPU的类别，如：Celeron 
            //System.out.println("CPU缓存数量:    " + info.getCacheSize());// 缓冲存储器数量 
            //System.out.println("CPU用户使用率:    " + CpuPerc.format(cpuList[i].getUser()));// 用户使用率 
            //System.out.println("CPU系统使用率:    " + CpuPerc.format(cpuList[i].getSys()));// 系统使用率 
            //System.out.println("CPU当前等待率:    " + CpuPerc.format(cpuList[i].getWait()));// 当前等待率 
            //System.out.println("CPU当前错误率:    " + CpuPerc.format(cpuList[i].getNice()));// 
            //System.out.println("CPU当前空闲率:    " + CpuPerc.format(cpuList[i].getIdle()));// 当前空闲率 
            //System.out.println("CPU总的使用率:    " + CpuPerc.format(cpuList[i].getCombined()));// 总的使用率 
            //System.out.println("CPU总的空闲率:    " + cpuList[i].getIdle());// 总的使用率 
        }
        freePercent = cupFreeTotal/cupCount;
        //System.out.println("CUP空闲率为："+(freePercent*100)+"%");
        return freePercent;
    }
}