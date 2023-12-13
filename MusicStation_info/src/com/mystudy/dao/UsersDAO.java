package com.mystudy.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.mystudy.mybatis.DBService;
import com.mystudy.vo.UsersVO;

public class UsersDAO {
	
	//전체 조회
	public static List<UsersVO> getList(){
		List<UsersVO> list = null;
		SqlSession ss = null;
		
		try {
			ss = DBService.getFactory().openSession();
			list = ss.selectList("users.all");
		} catch(Exception e) {
			e.printStackTrace();
		} finally {
			ss.close();
		}
		return list;
	}
	
	
	//loginUser
	public static UsersVO getId (UsersVO param) {
		UsersVO vo = null;
		SqlSession ss= null;
		
		try {
			ss = DBService.getFactory().openSession();
			vo = ss.selectOne("users.loginUser" , param);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			ss.close();
		}
		return vo;
	}
	
	
	//loginUser
	public static UsersVO getVOByUserId (String userId) {
		UsersVO vo = null;
		SqlSession ss= null;
		
		try {
			ss = DBService.getFactory().openSession();
			vo = ss.selectOne("users.getVOById" , userId);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			ss.close();
		}
		return vo;
	}
	
	
	//id로 조회
	public static UsersVO idselect (UsersVO param) {
		UsersVO vo = null;
		SqlSession ss= null;
		
		try {
			ss = DBService.getFactory().openSession();
			vo = ss.selectOne("users.idselect" , param);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			ss.close();
		}
		return vo;
	}
	
	// 닉네임 중복 체크
	public static boolean checkDuplicateNickname (String nickName) {
		boolean isExist = false;
		SqlSession ss= null;
		
		try {
			ss = DBService.getFactory().openSession();
			int result = ss.selectOne("users.checkDuplicateNickname" , nickName);
			if (result == 1) {
				isExist = true;  //중복
			} else if (result == 0){
				isExist = false;
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			ss.close();
		}
		return isExist;
	}
	
	//user정보 update
	public static int update (UsersVO vo) {
		SqlSession ss= null;
		int result = -1;
		try {
			ss = DBService.getFactory().openSession(true);
			result = ss.update("users.modify" , vo);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			ss.close();
		}
		return result;
	}
	
	//user정보 update
	public static int updateWithoutPic (UsersVO vo) {
		SqlSession ss= null;
		int result = -1;
		try {
			ss = DBService.getFactory().openSession(true);
			result = ss.update("users.modifyWithoutPic" , vo);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			ss.close();
		}
		return result;
	}
	
	//user정보 삭제
	public static int delete (String userId) {
		SqlSession ss= null;
		int result = 0;
		try {
			ss = DBService.getFactory().openSession(true);
			result = ss.delete("users.delete",userId);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			ss.close();
		}
		return result;
	}
		
}
