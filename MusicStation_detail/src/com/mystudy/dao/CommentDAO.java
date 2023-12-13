package com.mystudy.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;

import com.mystudy.mybatis.DBService;
import com.mystudy.vo.CommentVO;
import com.mystudy.vo.UserVO;

public class CommentDAO {
	
	//댓글 입력
	public static int mcommentwrite(CommentVO cvo) {
		SqlSession ss = DBService.getFactory().openSession(true);
		int result = ss.insert("MUSICSTATION.mcommentinsert", cvo);
		ss.close();
		return result;
	}
	
	//댓글 수정
	public static void mcommentupdate(CommentVO cvo) {
		SqlSession ss = DBService.getFactory().openSession(true);
		ss.update("MUSICSTATION.mcommentupdate", cvo);
		ss.close();
	}
		
	//댓글 삭제
	public static void mcommentdelete(int commentId) {
		SqlSession ss = DBService.getFactory().openSession(true);
		ss.delete("MUSICSTATION.mcommentdelete", commentId);
		ss.close();
	}
	
	//댓글 개수
	public static int getcomment(int musicId) {
		SqlSession ss = DBService.getFactory().openSession();
		int result = ss.selectOne("MUSICSTATION.commcount", musicId);
		ss.close();
		return result;
	}
	
	//댓글 작성자 프로필사진 조회
	public static String commpicture(String userId) {			
		SqlSession ss = DBService.getFactory().openSession();
		String result = ss.selectOne("MUSICSTATION.commpicture", userId);
		ss.close();
		return result;
	}
	
}
