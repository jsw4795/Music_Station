package frame.model.dao;

import java.util.Map;

import org.apache.ibatis.session.SqlSession;

import frame.model.vo.UsersVO;
import frame.mybatis.DBService;

public class UsersDAO {
	
	
	public static UsersVO selectOneById(String userId) {
		UsersVO result = null;
		
		SqlSession ss = null;
		try {
			ss = DBService.getFactory().openSession();
			result = ss.selectOne("users.selectOneById", userId);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if(ss != null) ss.close();
		}
		
		return result;
	}
	
	public static UsersVO selectOneByEmail(String email) {
		UsersVO result = null;
		
		SqlSession ss = null;
		try {
			ss = DBService.getFactory().openSession();
			result = ss.selectOne("users.selectOneByEmail", email);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if(ss != null) ss.close();			
		}
		
		return result;
	}
	
	public static UsersVO selectOneByNickname(String nickname) {
		UsersVO result = null;
		
		SqlSession ss = null;
		try {
			ss = DBService.getFactory().openSession();
			result = ss.selectOne("users.selectOneByNickname", nickname);
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
	
	public static int updatePassword(UsersVO vo) {
		int result = -1;
		SqlSession ss = null;
		try {
			ss = DBService.getFactory().openSession(true);
			result = ss.update("users.updatePassword", vo);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if(ss != null) ss.close();			
		}
		return result;
	}
	
	
	public static int deleteUser(String userId) {
		int result = -1;
		SqlSession ss = null;
		try {
			ss = DBService.getFactory().openSession(true);
			result = ss.delete("users.deleteOne", userId);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if(ss != null) ss.close();			
		}
		return result;
	}
	
}
