package cn.com.pattek.core.tools;

public class LongToTime {
	public static String LongToTime(Long second) {
		int h = 0;
		int d = 0;
		int s = 0;
		String hour = "";
		String min = "";
		String seconds = "";
		second = second / 1000;
		int temp = (int) (second % 360);
		if (second > 3600) {
			h = (int) (second / 3600);
			if (temp != 0) {
				if (temp > 60) {
					d = temp / 60;
					if (temp % 60 != 0) {
						s = temp % 60;
					}
				} else {
					s = temp;
				}
			}
		} else {
			d = (int) (second / 60);
			if (second % 60 != 0) {
				s = (int) (second % 60);
			}
		}
		if (h < 10) {
			hour = "0" + h;
		}else{
			hour = String.valueOf(h);
		}
		if (d < 10) {
			min = "0" + d;
		}else{
			min = String.valueOf(d);
		}
		if (s < 10) {
			seconds = "0" + s;
		}else{
			seconds = String.valueOf(s);
		}

		return hour + ":" + min + ":" + seconds;
	}
	
	public static String formatDuring(long mss){
		long hour = (mss%(1000*60*60*24))/(1000*60*60);
		long min = (mss%(1000*60*60))/(1000*60);
		long seconds = (mss%(1000*60))/1000;
		
		return hour + ":" + min + ":" + seconds;
	}
	public static void main(String[] args) {
		String s = LongToTime(5000000l);
		System.out.println(s);
	}
}
