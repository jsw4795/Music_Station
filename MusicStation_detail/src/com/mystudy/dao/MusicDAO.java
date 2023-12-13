package com.mystudy.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.mystudy.mybatis.DBService;
import com.mystudy.vo.MusicVO;
import com.mystudy.vo.CommentVO;
import com.mystudy.vo.LikeVO;

public class MusicDAO {
	
	//전체 음악 목록 조회
	public static List<MusicVO> getList(){
		SqlSession ss = DBService.getFactory().openSession();
		List<MusicVO> list = ss.selectList("MUSICSTATION.list");
		ss.close();
		return list;
	}
	
	//음악 상세 조회
	public static MusicVO selectOne(int musicIdx) {
		SqlSession ss = DBService.getFactory().openSession();
		MusicVO vo = ss.selectOne("MUSICSTATION.musicone", musicIdx);
		ss.close();
		return vo;
	}
	
	//음악 상세 조회
	public static String selectArtist(int musicIdx) {
		SqlSession ss = DBService.getFactory().openSession();
		String artist = ss.selectOne("MUSICSTATION.artist", musicIdx);
		ss.close();
		return artist;
	}
	
	//음악 조회수
	public static int log(int musicId) {
		SqlSession ss = DBService.getFactory().openSession();
		int result = ss.selectOne("MUSICSTATION.log", musicId);
		ss.close();
		return result;
	}
	
	//========= 댓글 ===============
	//음악에 딸린 댓글 목록
	public static List<CommentVO> getCommList(int musicIdx) {
		SqlSession ss = DBService.getFactory().openSession();
		List<CommentVO> list = ss.selectList("MUSICSTATION.musiccommList", musicIdx);
		ss.close();
		return list;
	}
	

}
