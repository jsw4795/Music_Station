package main.model.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;

import main.mybatis.DBService;

public class LikesDAO {

	public static List<Integer> selectLikeMusicIdList(String userId) {
		List<Integer> result = null;
		
		SqlSession ss = null;
		try {
			ss = DBService.getFactory().openSession();
			result = ss.selectList("likes.selectLikeMusicsByuserId", userId);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if(ss != null) ss.close();			
		}
		
		return result;
	}
	
	public static int selectCountLikeMusicByUserIdAndMusicId(Map<String, String> map) {
		int result = -1;
		
		SqlSession ss = null;
		try {
			ss = DBService.getFactory().openSession();
			result = ss.selectOne("likes.selectCountOfLikeMusicByUserIdAndMusicId", map);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if(ss != null) ss.close();			
		}
		
		return result;
	}
	
	public static int insertLikeMusic(Map<String, String> map) {
		int result = -1;
		
		SqlSession ss = null;
		try {
			ss = DBService.getFactory().openSession(true);
			result = ss.insert("likes.insertLikeMusic", map);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if(ss != null) ss.close();			
		}
		
		return result;
	}
	
	public static int deleteLikeMusic(Map<String, String> map) {
		int result = -1;
		
		SqlSession ss = null;
		try {
			ss = DBService.getFactory().openSession(true);
			result = ss.delete("likes.deleteLikeMusic", map);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if(ss != null) ss.close();			
		}
		
		return result;
	}
	
}
