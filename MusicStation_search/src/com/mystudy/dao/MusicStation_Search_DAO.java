
package com.mystudy.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


import org.apache.ibatis.session.SqlSession;

import com.mystudy.mybatis.DBService;
import com.mystudy.vo.MusicStation_SearchUsers_VO;
import com.mystudy.vo.MusicStation_Search_VO;

public class MusicStation_Search_DAO {
	
/*	public static List<MusicStation_SearchAll_VO> getSearchAll(String keyword){
		
		SqlSession ss = null;
		List<MusicStation_SearchAll_VO> list = null;
		try {
			ss = DBService.getFactory().openSession();
			System.out.println("keyword : " + keyword);
			list = ss.selectList("musicstation.all", keyword);
			
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			ss.close();
		}
		return list;
	}*/

	public static List<MusicStation_Search_VO> getSearchTracks(String keyword, String idx) {
		SqlSession ss = null;
		List<MusicStation_Search_VO> list = null;
		Map<String, String> map = new HashMap<>();
		map.put("keyword", keyword);
		map.put("idx", idx);
		try {
			ss = DBService.getFactory().openSession();
			System.out.println("keyword : " + keyword);
			System.out.println("idx : " + idx);
			list = ss.selectList("musicstation.search", map);
			
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			ss.close();
		}
		return list;
	}
	
	public static List<MusicStation_SearchUsers_VO> getSearchUsers(String keyword, String idx) {
		SqlSession ss = null;
		List<MusicStation_SearchUsers_VO> list = null;
		Map<String, String> map = new HashMap<>();
		map.put("keyword", keyword);
		map.put("idx", idx);
		try {
			ss = DBService.getFactory().openSession();
			System.out.println("keyword : " + keyword);
			System.out.println("idx : " + idx);
			list = ss.selectList("musicstation.searchUsers", map);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			ss.close();
		}
		return list;
	}
}
