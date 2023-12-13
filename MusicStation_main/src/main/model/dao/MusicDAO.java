package main.model.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;

import main.model.vo.MusicVO;
import main.mybatis.DBService;

public class MusicDAO {
	
	public static MusicVO selectOne(String musicId) {
		MusicVO result = null;
		
		SqlSession ss = null;
		try {
			ss = DBService.getFactory().openSession();
			result = ss.selectOne("music.selectOneByMusicId", musicId);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if(ss != null) ss.close();			
		}
		
		return result;
	}
	
	// 테스트용 전체 선택
	public static List<MusicVO> selectAll() {
		List<MusicVO> result = null;
		
		SqlSession ss = null;
		try {
			ss = DBService.getFactory().openSession();
			result = ss.selectList("music.selectAll");
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if(ss != null) ss.close();			
		}
		
		return result;
	}
	
	// TOP 몇까지 가져올지
	// VO에 view 속성값 까지 담겨있다
	public static List<MusicVO> selectManyVOByViews(int howMany) {
		List<MusicVO> result = null;
		
		SqlSession ss = null;
		try {
			ss = DBService.getFactory().openSession();
			result = ss.selectList("music.selectManyByViewsDESC", howMany);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if(ss != null) ss.close();			
		}
		
		return result;
	}
	
	public static List<MusicVO> selectManyByRecentListen(Map<String, Object> input){
		List<MusicVO> result = null;
		
		SqlSession ss = null;
		try {
			ss = DBService.getFactory().openSession();
			result = ss.selectList("music.selectManyByRecentPlay", input);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if(ss != null) ss.close();			
		}
		
		return result;
	}
	
	
	public static List<MusicVO> selectManyByRecentUpload(int howMany){
		List<MusicVO> result = null;
		
		SqlSession ss = null;
		try {
			ss = DBService.getFactory().openSession();
			result = ss.selectList("music.selectManyByRecentUpload", howMany);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if(ss != null) ss.close();			
		}
		
		return result;
	}
	
	public static List<MusicVO> selectManyVOByRecentWeekViews(int howMany) {
		List<MusicVO> result = null;
		
		SqlSession ss = null;
		try {
			ss = DBService.getFactory().openSession();
			result = ss.selectList("music.selectManyByRecentWeekViewsDesc", howMany);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if(ss != null) ss.close();			
		}
		
		return result;
	}
}
