package com.mystudy.service;

import java.util.List;

import com.mystudy.dao.LikesDAO;
import com.mystudy.vo.MusicVO;

public class LikesService {
	//Likes 가져오기 
	public static List<MusicVO> getLikes (String userId){
		List<MusicVO> list = null;
		list = LikesDAO.getLikes(userId);
		return list;
	}
}
