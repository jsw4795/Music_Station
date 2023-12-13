package main.model.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import main.model.dao.MusicDAO;
import main.model.vo.MusicVO;

public class MusicService {
	
	public static MusicVO getVO(String musicId) {
		MusicVO vo = null;
		// 기본적인 정보 가져오기
		vo = MusicDAO.selectOne(musicId);
		// 현재 곡의 장르 이름들 가져오기
		
		return vo;
	}
	
	// 테스트용 전체 선택
	public static List<MusicVO> getAll() {
		List<MusicVO> result = null;
		result = MusicDAO.selectAll();
		return result;
	}
	/**
	 * 역대 인기순위를 가져온다
	 * 
	 * @param howMany 몇위까지 가져올지
	 * @return List<MusicVO>
	 */
	public static List<MusicVO> getHistoryTop(int howMany) {
		List<MusicVO> result = MusicDAO.selectManyVOByViews(howMany);
		return result;
	}
	/**
	 * 유저가 최근 들은 곡 n개를 가져온다
	 * @param userId
	 * @param howMany
	 * @return
	 */
	public static List<MusicVO> getRecentlyListen(String userId, int howMany){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("userId", userId);
		map.put("howMany", howMany);
		
		List<MusicVO> result = MusicDAO.selectManyByRecentListen(map);
		
		return result;
	}
	
	/**
	 * 최근 추가된 곡 n개를 가져온다
	 * @param howMany
	 * @return
	 */
	public static List<MusicVO> getRecentlyUpload(int howMany){
		
		List<MusicVO> result = MusicDAO.selectManyByRecentUpload(howMany);
		
		return result;
	}
	
	/**
	 * 최근 일주일 동안의 순위를 가져온다
	 * @param howMany
	 * @return
	 */
	public static List<MusicVO> getLastWeekTop(int howMany) {
		List<MusicVO> result = MusicDAO.selectManyVOByRecentWeekViews(howMany);
		return result;
	}
}
