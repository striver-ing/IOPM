package cn.com.pattek.core.exception;

public class PattekException extends RuntimeException {
	private static final long serialVersionUID = 1L;
	public PattekException(String message){
		super(message);
	}
	public PattekException(Exception exception) {
		super(exception);
	} 
	public PattekException(Throwable throwable, String frdMessage) {
		super(throwable);
	}
	public PattekException(Throwable throwable) {
		super(throwable);
	}
}
