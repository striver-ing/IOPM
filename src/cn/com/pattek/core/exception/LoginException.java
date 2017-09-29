package cn.com.pattek.core.exception;

import java.io.Serializable;

public class LoginException extends Exception implements Serializable{
	private static final long serialVersionUID = -767500146776564756L;
	public LoginException() {
		super();
	}
	public LoginException(String arg0) {
		super(arg0);
	}
}
