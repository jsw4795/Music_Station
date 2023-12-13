package com.mystudy.dao;

import org.apache.ibatis.session.SqlSession;

import com.mystudy.mybatis.DBService;
import com.mystudy.vo.UserVO;

public class UserDAO {
	
	//유저 상세 조회
	public static UserVO selectOne(String userId) {
		SqlSession ss = DBService.getFactory().openSession();
		UserVO vo = ss.selectOne("MUSICSTATION.userone", userId);
		ss.close();
		return vo;
	}


}
