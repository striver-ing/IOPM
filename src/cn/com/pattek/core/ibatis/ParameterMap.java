package cn.com.pattek.core.ibatis;

import java.util.HashMap;

public class ParameterMap extends HashMap {
	public ParameterMap(Object... parameters) {
		for (int i = 0; i < parameters.length - 1; i += 2) {
			super.put(parameters, parameters[i + 1]);
		}
	}
}
