package com.mystudy.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.mystudy.mybatis.DBService;
import com.mystudy.vo.MusicLogVO;
import com.mystudy.vo.MusicVO;
import com.mystudy.vo.UsersVO;

public class MusicDAO {
	
	//track 가져오기
	public static List<MusicVO> getTracks(String userId){
		List<MusicVO> list = null;
		SqlSession ss = DBService.getFactory().openSession();
		try {
			list = ss.selectList("musics.selectMusic",userId);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			ss.close();
		}
		return list;
	}
	
	//popular Track 가져오기
	public static List<MusicLogVO> getPopularTracks (String userId){
		List<MusicLogVO> list = null;
		SqlSession ss = DBService.getFactory().openSession();
		try {
			list = ss.selectList("musicLog.popularMusic", userId);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			ss.close();
		}
		return list;
	}
	
	//music id 로 조회
	public static List<MusicVO> musicIdselect (int musicId) {
		List<MusicVO> list = null;
		SqlSession ss= DBService.getFactory().openSession();
		
		try {
			list = ss.selectOne("musics.idselect" , musicId);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			ss.close();
		}
		return list;
	}
	
	//music 정보 insert 하기
	public static int insertTracks(MusicVO music){
		int result = 0;
		SqlSession ss= DBService.getFactory().openSession(true);
		try {
			result = ss.insert("musics.uploadMusic",music);
		} catch(Exception e) {
			e.printStackTrace();
		} finally {
			ss.close();
		}
		return result;
	}
	
}
