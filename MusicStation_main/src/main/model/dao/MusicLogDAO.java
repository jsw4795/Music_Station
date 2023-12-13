package main.model.dao;

import java.util.HashMap;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;

import main.mybatis.DBService;

public class MusicLogDAO {
	
	public static void insertOne(String userId, String musicId) {
		Map<String, String> map = new HashMap<String, String>();
		map.put("userId", userId);
		map.put("musicId", musicId);
		
		SqlSession ss = null;
		try {
			ss = DBService.getFactory().openSession(true);
			ss.insert("musicLog.insertOne", map);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if(ss != null) ss.close();			
		}
	}
	
	
}
