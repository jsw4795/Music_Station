package com.mystudy.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.mystudy.mybatis.DBService;
import com.mystudy.vo.GenreVO;

public class GenreDAO {
	
	//해당 음악 장르 목록 조회
	public static List<GenreVO> genre(int musicId){
		SqlSession ss = DBService.getFactory().openSession();
		List<GenreVO> list = ss.selectList("MUSICSTATION.genre", musicId);
		ss.close();
		return list;
	}
	
	//해당 플리 장르 목록 조회
	public static List<GenreVO> plgenre(int plId){
		SqlSession ss = DBService.getFactory().openSession();
		List<GenreVO> list = ss.selectList("MUSICSTATION.plgenre", plId);
		ss.close();
		return list;
	}

}
