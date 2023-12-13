package com.mystudy.service;

import java.util.List;

import com.mystudy.dao.MusicDAO;
import com.mystudy.vo.MusicLogVO;
import com.mystudy.vo.MusicVO;

public class MusicService {

	//track 가져오기
	public static List<MusicVO> getTracks (String userId) {
		List<MusicVO> list = null;
		list = MusicDAO.getTracks(userId);
		return list;
	}
	
	//popular track 가져오기 
	public static List<MusicLogVO> getPopularTracks (String userId){
		List<MusicLogVO> list = null;
		list = MusicDAO.getPopularTracks(userId);
		return list;
	}

	// insert Tracks
	public static int insertTracks(MusicVO music) {
	    // music 객체의 값 출력
	    System.out.println("title : " + music.getTitle());
	    System.out.println("artist : " + music.getArtist());
	    System.out.println("info : " + music.getInfo());
	    System.out.println("picture : " + music.getPicture());
	    System.out.println("name : " + music.getFileName());

	    int result = 0;
	    result = MusicDAO.insertTracks(music);
	    return result;
	}
	
}
