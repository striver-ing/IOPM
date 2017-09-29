package cn.com.pattek.core.struts2;

import java.beans.BeanInfo;
import java.beans.Introspector;
import java.beans.PropertyDescriptor;
import java.lang.reflect.Array;
import java.lang.reflect.Method;
import java.text.CharacterIterator;
import java.text.StringCharacterIterator;
import java.util.Calendar;
import java.util.Collection;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Stack;
import java.util.regex.Pattern;

import org.apache.commons.beanutils.PropertyUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import cn.com.pattek.core.page.Pagination;

import com.googlecode.jsonplugin.JSONException;
import com.googlecode.jsonplugin.annotations.JSON;

@SuppressWarnings("unchecked")
public class JsonWriter {
	private static final Log log = LogFactory.getLog(JsonWriter.class);
	/** By default, enums are serialzied as name=value pairs */
	public static final boolean ENUM_AS_BEAN_DEFAULT = false;
	private boolean enumAsBean = ENUM_AS_BEAN_DEFAULT;
	private boolean ignoreHierarchy = true;
	static char[] hex = "0123456789ABCDEF".toCharArray();
	private StringBuilder buf = new StringBuilder();
	private Object root;
	private String exprStack = "";
	private boolean buildExpr = true;
	private Collection<Pattern> excludeProperties;
	private Stack stack = new Stack();

	public String write(Object jsonRoot, Object recordRoot, String records,
			String fields, String id, String total,
			Collection<Pattern> excludeProperties) throws JSONException {
		this.buf.setLength(0);
		this.root = jsonRoot;
		this.exprStack = "";
		this.buildExpr = (excludeProperties != null)
				&& !excludeProperties.isEmpty();
		this.excludeProperties = excludeProperties;
		this.value(jsonRoot, null);

		if (fields != null && records != null) {
			deleteLast(buf, '}');
			if (buf.length() > 1) {
				buf.append(",");
			}
			if (recordRoot instanceof Pagination) {
				Pagination page = (Pagination) recordRoot;
				serializeList(records, fields, id, total, page.getTotalCount(),
						page.getList());
			} else if (recordRoot instanceof List) {
				List list = (List) recordRoot;
				serializeList(records, fields, id, total, list.size(), list);
			} else {
				buf.append('"').append(records).append("\":");
				serializeBean(recordRoot, fields, id);
			}
			buf.append('}');
		} else if (fields != null && records == null
				&& recordRoot instanceof List) {
			buf.setLength(0);
			List list = (List) recordRoot;
			serializeList(records, fields, id, total, list.size(), list);
		} else {
		}
		return this.buf.toString();
	}

	private void serializeList(String records, String fields, String id,
			String total, long totalCount, List list) {
		if (total != null) {
			buf.append('"').append(total).append("\":").append(totalCount)
					.append(',');
		}
		if (records != null) {
			buf.append('"').append(records).append("\":[");
		} else {
			buf.append('[');
		}
		for (Object bean : list) {
			serializeBean(bean, fields, id);
			buf.append(",");
		}
		deleteLast(buf, ',');
		buf.append("]");
	}

	private void serializeBean(Object bean, String fields, String id) {
		buf.append('{');
		if (id != null) {
			process(bean, id);
		}
		String[] nameValue = null;
		for (String field : fields.split(",")) {
			nameValue = field.split(":");
			if (nameValue.length > 1) {
				process(bean, nameValue[0], nameValue[1]);
			} else {
				process(bean, nameValue[0]);
			}
		}
		deleteLast(buf, ',');
		buf.append('}');
	}

	private void process(Object root, String field) {
		process(root, field, field);
	}

	private void process(Object root, String name, String field) {
		try {
			Object o = PropertyUtils.getNestedProperty(root, field);
			buf.append('"').append(name).append("\":");
			if (o instanceof String) {
				string(o);
			} else if (o instanceof Date) {
				date((Date) o);
			} else {
				buf.append(o);
			}
			buf.append(",");
		} catch (Exception e) {
			log.warn("field '" + field + "' not exist in "
					+ root.getClass().getName());
		}
	}

	private StringBuilder deleteLast(StringBuilder buf, char match) {
		if (buf.charAt(buf.length() - 1) == match) {
			buf.deleteCharAt(buf.length() - 1);
		}
		return buf;
	}

	private void value(Object object, Method method) throws JSONException {
		if (object == null) {
			this.add("null");
			return;
		}
		if (this.stack.contains(object)) {
			Class clazz = object.getClass();
			// cyclic reference
			if (clazz.isPrimitive() || clazz.equals(String.class)) {
				this.process(object, method);
			} else {
				if (log.isDebugEnabled()) {
					log.debug("Cyclic reference detected on " + object);
				}
				this.add("null");
			}
			return;
		}
		this.process(object, method);
	}

	/**
	 * Add object to buffer
	 */
	private void add(Object obj) {
		this.buf.append(obj);
	}

	/**
	 * Add char to buffer
	 */
	private void add(char c) {
		this.buf.append(c);
	}

	/**
	 * Serialize object into json
	 */
	private void process(Object object, Method method) throws JSONException {
		this.stack.push(object);

		if (object instanceof Class) {
			this.string(object);
		} else if (object instanceof Boolean) {
			this.bool(((Boolean) object).booleanValue());
		} else if (object instanceof Number) {
			this.add(object);
		} else if (object instanceof String) {
			this.string(object);
		} else if (object instanceof Character) {
			this.string(object);
		} else if (object instanceof Map) {
			this.map((Map) object, method);
		} else if (object.getClass().isArray()) {
			this.array(object, method);
		} else if (object instanceof Iterable) {
			this.array(((Iterable) object).iterator(), method);
		} else if (object instanceof Date) {
			this.date((Date) object);
		} else if (object instanceof Calendar) {
			this.date(((Calendar) object).getTime());
		} else if (object instanceof Enum) {
			this.enumeration((Enum) object);
		} else {
			this.bean(object);
		}

		this.stack.pop();
	}

	/**
	 * escape characters
	 */
	private void string(Object obj) {
		this.add('"');

		CharacterIterator it = new StringCharacterIterator(obj.toString());

		for (char c = it.first(); c != CharacterIterator.DONE; c = it.next()) {
			if (c == '"') {
				this.add("\\\"");
			} else if (c == '\\') {
				this.add("\\\\");
			} else if (c == '/') {
				this.add("\\/");
			} else if (c == '\b') {
				this.add("\\b");
			} else if (c == '\f') {
				this.add("\\f");
			} else if (c == '\n') {
				this.add("\\n");
			} else if (c == '\r') {
				this.add("\\r");
			} else if (c == '\t') {
				this.add("\\t");
			} else if (Character.isISOControl(c)) {
				this.unicode(c);
			} else {
				this.add(c);
			}
		}

		this.add('"');
	}

	private void bool(boolean b) {
		this.add(b ? "true" : "false");
	}

	/**
	 * Add map to buffer
	 */
	private void map(Map map, Method method) throws JSONException {
		this.add("{");

		Iterator it = map.entrySet().iterator();

		boolean hasData = false;
		while (it.hasNext()) {
			Map.Entry entry = (Map.Entry) it.next();
			Object key = entry.getKey();
			String expr = null;
			if (this.buildExpr) {
				if (key == null) {
					log.error("Cannot build expression for null key in "
							+ this.exprStack);
					continue;
				} else {
					expr = this.expandExpr(key.toString());
					if (this.shouldExcludeProperty(expr)) {
						continue;
					}
					expr = this.setExprStack(expr);
				}
			}
			if (hasData) {
				this.add(',');
			}
			hasData = true;
			this.value(key, method);
			this.add(":");
			this.value(entry.getValue(), method);
			if (this.buildExpr) {
				this.setExprStack(expr);
			}
		}

		this.add("}");
	}

	/**
	 * Add date to buffer
	 */
	private void date(Date date) {
		this.add("new Date(" + date.getTime() + ')');
	}

	/**
	 * Add array to buffer
	 */
	private void array(Iterator it, Method method) throws JSONException {
		this.add("[");

		boolean hasData = false;
		for (int i = 0; it.hasNext(); i++) {
			String expr = null;
			if (this.buildExpr) {
				expr = this.expandExpr(i);
				if (this.shouldExcludeProperty(expr)) {
					continue;
				}
				expr = this.setExprStack(expr);
			}
			if (hasData) {
				this.add(',');
			}
			hasData = true;
			this.value(it.next(), method);
			if (this.buildExpr) {
				this.setExprStack(expr);
			}
		}

		this.add("]");
	}

	/**
	 * Add array to buffer
	 */
	private void array(Object object, Method method) throws JSONException {
		this.add("[");

		int length = Array.getLength(object);

		boolean hasData = false;
		for (int i = 0; i < length; ++i) {
			String expr = null;
			if (this.buildExpr) {
				expr = this.expandExpr(i);
				if (this.shouldExcludeProperty(expr)) {
					continue;
				}
				expr = this.setExprStack(expr);
			}
			if (hasData) {
				this.add(',');
			}
			hasData = true;
			this.value(Array.get(object, i), method);
			if (this.buildExpr) {
				this.setExprStack(expr);
			}
		}

		this.add("]");
	}

	private void enumeration(Enum enumeration) throws JSONException {
		if (enumAsBean) {
			this.bean(enumeration);
		} else {
			this.string(enumeration.name());
		}
	}

	/**
	 * Instrospect bean and serialize its properties
	 */
	private void bean(Object object) throws JSONException {
		this.add("{");

		BeanInfo info;

		try {
			Class clazz = object.getClass();

			info = ((object == this.root) && this.ignoreHierarchy) ? Introspector
					.getBeanInfo(clazz, clazz.getSuperclass())
					: Introspector.getBeanInfo(clazz);

			PropertyDescriptor[] props = info.getPropertyDescriptors();

			boolean hasData = false;
			for (int i = 0; i < props.length; ++i) {
				PropertyDescriptor prop = props[i];
				String name = prop.getName();
				Method accessor = prop.getReadMethod();
				Method baseAccessor = null;
				if (clazz.getName().indexOf("$$EnhancerByCGLIB$$") > -1) {
					try {
						baseAccessor = Class.forName(
								clazz.getName().substring(0,
										clazz.getName().indexOf("$$")))
								.getDeclaredMethod(accessor.getName(),
										accessor.getParameterTypes());
					} catch (Exception ex) {
						log.debug(ex.getMessage());
					}
				} else
					baseAccessor = accessor;

				if (baseAccessor != null) {

					JSON json = baseAccessor.getAnnotation(JSON.class);
					if (json != null) {
						if (!json.serialize())
							continue;
						else if (json.name().length() > 0)
							name = json.name();
					}

					// ignore "class" and others
					if (this.shouldExcludeProperty(clazz, prop)) {
						continue;
					}
					String expr = null;
					if (this.buildExpr) {
						expr = this.expandExpr(name);
						if (this.shouldExcludeProperty(expr)) {
							continue;
						}
						expr = this.setExprStack(expr);
					}
					if (hasData) {
						this.add(',');
					}
					hasData = true;

					Object value = accessor.invoke(object, new Object[0]);
					this.add(name, value, accessor);
					if (this.buildExpr) {
						this.setExprStack(expr);
					}
				}
			}

			// special-case handling for an Enumeration - include the name() as
			// a property */
			if (object instanceof Enum) {
				if (hasData) {
					this.add(',');
				}
				Object value = ((Enum) object).name();
				this.add("_name", value, object.getClass().getMethod("name"));
			}
		} catch (Exception e) {
			throw new JSONException(e);
		}

		this.add("}");
	}

	/**
	 * Represent as unicode
	 * 
	 * @param c
	 *            character to be encoded
	 */
	private void unicode(char c) {
		this.add("\\u");

		int n = c;

		for (int i = 0; i < 4; ++i) {
			int digit = (n & 0xf000) >> 12;

			this.add(hex[digit]);
			n <<= 4;
		}
	}

	private String expandExpr(int i) {
		return this.exprStack + "[" + i + "]";
	}

	private String expandExpr(String property) {
		if (this.exprStack.length() == 0)
			return property;
		return this.exprStack + "." + property;
	}

	/**
	 * Ignore "class" field
	 */
	private boolean shouldExcludeProperty(Class clazz, PropertyDescriptor prop)
			throws SecurityException, NoSuchFieldException {
		String name = prop.getName();

		if (name.equals("class") || name.equals("declaringClass")) {
			return true;
		}

		return false;
	}

	private boolean shouldExcludeProperty(String expr) {
		for (Pattern pattern : this.excludeProperties) {
			if (pattern.matcher(expr).matches()) {
				if (log.isDebugEnabled())
					log.debug("Ignoring property " + expr);
				return true;
			}
		}
		return false;
	}

	private String setExprStack(String expr) {
		String s = this.exprStack;
		this.exprStack = expr;
		return s;
	}

	private void add(String name, Object value, Method method)
			throws JSONException {
		this.add('"');
		this.add(name);
		this.add("\":");
		this.value(value, method);
	}

}
