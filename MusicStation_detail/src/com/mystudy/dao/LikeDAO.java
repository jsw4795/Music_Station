package com.mystudy.dao;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;

import com.mystudy.mybatis.DBService;
import com.mystudy.vo.LikeVO;

public class LikeDAO {
	
	
	//========= 음악 좋아요 ===============
	//음악에 딸린 좋아요 수
	public static int getlike(int musicIdx) {
		SqlSession ss = DBService.getFactory().openSession();
		int result = ss.selectOne("MUSICSTATION.like", musicIdx);
		ss.close();
		return result;
	}
	
	//좋아요 입력
	public static int like(LikeVO lvo) {
		SqlSession ss = DBService.getFactory().openSession(true);
		int result = ss.insert("MUSICSTATION.likeclick", lvo);
		ss.close();
		return result;
	}
	
	//좋아요 취소 작성하기
	public static void nolike(String userId, int musicId) {
		Map<String, Object> map = new HashMap<>();
		map.put("userId", userId);
		map.put("musicId", musicId);
		
		SqlSession ss = DBService.getFactory().openSession(true);
		ss.delete("MUSICSTATION.nolike", map);
		ss.close();
	}
	
	//좋아요 여부 조회
	public static int selectOne(String userId, int musicId) {
		Map<String, Object> map = new HashMap<>();
		map.put("userId", userId);
		map.put("musicId", musicId);
		
		SqlSession ss = DBService.getFactory().openSession();
		int result = ss.selectOne("MUSICSTATION.likeone", map);
		ss.close();
		return result;
	}

	
	//========= 플리 좋아요 ===============
	//플리에 딸린 좋아요 수
	public static int plgetlike(int plId) {
		SqlSession ss = DBService.getFactory().openSession();
		int result = ss.selectOne("MUSICSTATION.pllike", plId);
		ss.close();
		return result;
	}
	
	//좋아요 입력
	public static int pllike(LikeVO lvo) {
		SqlSession ss = DBService.getFactory().openSession(true);
		int result = ss.insert("MUSICSTATION.pllikeclick", lvo);
		ss.close();
		return result;
	}
	
	//좋아요 취소 작성하기
	public static void plnolike(String userId, int plId) {
		Map<String, Object> map = new HashMap<>();
		map.put("userId", userId);
		map.put("plId", plId);
		
		SqlSession ss = DBService.getFactory().openSession(true);
		ss.delete("MUSICSTATION.plnolike", map);
		ss.close();
	}
	
	//좋아요 여부 조회
	public static int plselectOne(String userId, int plId) {
		Map<String, Object> map = new HashMap<>();
		map.put("userId", userId);
		map.put("plId", plId);
		
		SqlSession ss = DBService.getFactory().openSession();
		int result = ss.selectOne("MUSICSTATION.pllikeone", map);
		ss.close();
		return result;
	}


}
