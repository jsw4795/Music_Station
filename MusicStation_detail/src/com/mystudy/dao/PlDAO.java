package com.mystudy.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.mystudy.mybatis.DBService;
import com.mystudy.vo.MusicVO;
import com.mystudy.vo.PlVO;

public class PlDAO {
	
	//전체 플리 목록 조회
	public static List<PlVO> getList(){
		SqlSession ss = DBService.getFactory().openSession();
		List<PlVO> list = ss.selectList("MUSICSTATION.pllist");
		ss.close();
		return list;
	}
	
	//플리 상세 조회(음악)
	public static PlVO selectOne(int plId) {
		SqlSession ss = DBService.getFactory().openSession();
		PlVO vo = ss.selectOne("MUSICSTATION.plone", plId);
		ss.close();
		return vo;
	}
	
	//플리 상세 조회(아티스트)
	public static String selectArtist(int plId) {
		SqlSession ss = DBService.getFactory().openSession();
		String artist = ss.selectOne("MUSICSTATION.plartist", plId);
		ss.close();
		return artist;
	}
	
	//플리안에 음악 리스트 조회
	public static List<MusicVO> getmusiclist(int plId) {
		SqlSession ss = DBService.getFactory().openSession();
		List<MusicVO> list = ss.selectList("MUSICSTATION.plmusic", plId);
		ss.close();
		return list;
	}
	
	

}
