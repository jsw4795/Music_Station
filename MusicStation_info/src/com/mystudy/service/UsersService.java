package com.mystudy.service;

import com.mystudy.dao.UsersDAO;
import com.mystudy.vo.UsersVO;

public class UsersService {
	
	//update service
	public static int update (UsersVO vo) {
		return UsersDAO.update(vo);
	}
	
	//update service
	public static int updateWithoutPic (UsersVO vo) {
		return UsersDAO.updateWithoutPic(vo);
	}
	
	// 닉네임 중복 체크
	public static boolean checkDuplicateNickname (String nickName) {
		boolean result = UsersDAO.checkDuplicateNickname(nickName);
		return result;
	}
	
	public static UsersVO getVO(String userId) {
		UsersVO vo = null;
		vo = UsersDAO.getVOByUserId(userId);
		return vo;
	}
	
	public static int getWithdrawl(String userId) {
		int result = 0;
		result = UsersDAO.delete(userId);
		return result;
	}
	
}
