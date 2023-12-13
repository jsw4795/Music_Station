package main.model.dao;

import java.util.Map;

import org.apache.ibatis.session.SqlSession;

import main.model.vo.UsersVO;
import main.mybatis.DBService;

public class UsersDAO {
	
	
	public static UsersVO selectOne(String userID) {
		UsersVO result = null;
		
		SqlSession ss = null;
		try {
			ss = DBService.getFactory().openSession(true);
			result = ss.selectOne("users.selectOne", userID);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if(ss != null) ss.close();			
		}
		
		return result;
	}
	
	public static void insertOne(UsersVO vo) {
		SqlSession ss = null;
		try {
			ss = DBService.getFactory().openSession(true);
			ss.insert("users.insertOne", vo);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if(ss != null) ss.close();			
		}
	}
	
	public static void updateLogin(Map<String, String> data) {
		SqlSession ss = null;
		try {
			ss = DBService.getFactory().openSession(true);
			ss.update("users.updateLogin", data);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if(ss != null) ss.close();			
		}
	}
	
}
