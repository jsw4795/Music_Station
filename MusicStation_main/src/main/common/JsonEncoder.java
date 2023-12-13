package main.common;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.List;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

public class JsonEncoder {
	private static SimpleDateFormat defaultDateFormat = new SimpleDateFormat("yyyy-MM-dd");
	
	public static String toJson(Object vo) {
		String result = "";
		ObjectMapper mapper = new ObjectMapper();
		mapper.setDateFormat(defaultDateFormat);
		try {
			result = mapper.writeValueAsString(vo);
		} catch (JsonProcessingException e) {
			return null;
		}
		return result;
	}
	
	// 데이터 포맷 지정해서 변환
	public static String toJson(Object vo, DateFormat dateFormat) {
		String result = "";
		ObjectMapper mapper = new ObjectMapper();
		mapper.setDateFormat(dateFormat);
		try {
			result = mapper.writeValueAsString(vo);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
			return null;
		}
		return result;
	}
	
	public static Object jsonToVO(String jsonData, Object vo) {
		Object result = new Object();
		ObjectMapper mapper = new ObjectMapper();
		mapper.setDateFormat(defaultDateFormat);
		try {
			result = mapper.readValue(jsonData, vo.getClass());
		} catch (JsonProcessingException e) {
			e.printStackTrace();
			return null;
		}
		return result;
	}
	
	// 데이터 타입 지정해서 변환
	public static Object jsonToVO(String jsonData, Object vo, DateFormat dateFormat) {
		Object result = new Object();
		ObjectMapper mapper = new ObjectMapper();
		mapper.setDateFormat(dateFormat);
		try {
			result = mapper.readValue(jsonData, vo.getClass());
		} catch (JsonProcessingException e) {
			e.printStackTrace();
			return null;
		}
		return result;
	}
	
	// 리스트로 받아야되는 건 따로 만들어야되네
	public static <T> List<T> jsonToList(String jsonData, Object vo) {
		List<T> result = null;
		ObjectMapper mapper = new ObjectMapper();
		mapper.setDateFormat(defaultDateFormat);
		try {
			result = mapper.readValue(jsonData, new TypeReference<List<T>>() {});
		} catch (JsonProcessingException e) {
			e.printStackTrace();
			return null;
		}
		return result;
	}
	
	// DateFormat 지정해서 리스트로 변환
	public static <T> List<T> jsonToList(String jsonData, Object vo, DateFormat dateFormat) {
		List<T> result = null;
		ObjectMapper mapper = new ObjectMapper();
		mapper.setDateFormat(dateFormat);
		try {
			result = mapper.readValue(jsonData, new TypeReference<List<T>>() {});
		} catch (JsonProcessingException e) {
			e.printStackTrace();
			return null;
		}
		return result;
	}
}
