package main.model.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import main.model.dao.LikesDAO;

public class LikesService {
	
	// 유저가 좋아요 한 음악의 목록을 가져옴
	public static List<Integer> getLikeMusicIdList(String userId) {
		List<Integer> result = null;
		
		result = LikesDAO.selectLikeMusicIdList(userId);
		
		return result;
	}
	
	// 좋아요 버튼 누름
	public static void pressLike(String userId, String musicId) {
		Map<String, String> map = new HashMap<String, String>();
		map.put("userId", userId);
		map.put("musicId", musicId);
		
		boolean isAlreadyLiked = checkIfAlreayLiked(userId, musicId);
		
		// 이미 눌렀으면 삭제, 안눌려있으면 인서트
		if(isAlreadyLiked)
			LikesDAO.deleteLikeMusic(map);
		else
			LikesDAO.insertLikeMusic(map);
	}
	
	public static boolean checkIfAlreayLiked(String userId, String musicId) {
		boolean result = false;
		Map<String, String> map = new HashMap<String, String>();
		map.put("userId", userId);
		map.put("musicId", musicId);
		
		int count = LikesDAO.selectCountLikeMusicByUserIdAndMusicId(map);
		if(count >= 1)  // 이미 누름
			result = true;
		else 
			result = false;
		
		return result;
	}
	
}
