package main.model.service;

import java.util.HashMap;
import java.util.Map;

import main.model.dao.UsersDAO;
import main.model.vo.UsersVO;
import main.security.PasswordEncoder;

public class UsersService {
	
	public static UsersVO getVO(String userId) {
		return UsersDAO.selectOne(userId);
	}
	
	/**
	 * 유저 아이디로 로그인상태인지 가져와서 boolean으로 리턴<br />
	 * 아이디가 검색되지 않으면 false를 리턴한다
	 * 
	 * @param userId 검색 할 ID
	 * @return boolean의 형태로 리턴
	 */
	public static boolean checkLogin(String userId) {
		boolean isLogin = false;
		
		UsersVO vo = UsersDAO.selectOne(userId);
		if(vo != null) {
			String temp = vo.getLogin();
			isLogin = Boolean.parseBoolean(temp);
		}
		
		return isLogin;
	}
	/**
	 * 모든 제약조건 검사 하고나서 실행할 메서드
	 * @param vo
	 */
	public static void signUp(UsersVO vo) {
		// 기본 프사 설정
		vo.setPicture("defaultProfileImage.jpeg");
		// 솔트 생성
		String salt = PasswordEncoder.makeSalt();
		vo.setSalt(salt);
		// 패스워드 암호화
		String hashedPwd = PasswordEncoder.encode(vo.getPwd(), salt);
		vo.setPwd(hashedPwd);
		
		UsersDAO.insertOne(vo);
	}
	
	/**
	 * 아이디, 비밀번호 일치하는지 확인하고 로그인 성공하면 true 아니면 false 리턴
	 * @param userId
	 * @param pwd
	 * @return
	 */
	public static boolean login(String userId, String pwd) {
		UsersVO vo = UsersDAO.selectOne(userId);
		
		// 아이디가 존재하지 않으면 끝
		if(vo == null) return false;
		
		// 받은 비밀번호 암호화
		String hashedPwd = PasswordEncoder.encode(pwd, vo.getSalt());
		
		System.out.println("hashedPwd : " + hashedPwd);
		System.out.println("DB pwd : " + vo.getPwd());
		
		// 비밀번호가 일치하지 않으면
		if(!hashedPwd.equals(vo.getPwd())) return false;
		
		// 로그인처리
		Map<String, String> data = new HashMap<String, String>();
		data.put("userId", userId);
		data.put("login", "TRUE");
		UsersDAO.updateLogin(data);
		
		return true;
	}
	
	public static void logout(String userId) {
		Map<String, String> data = new HashMap<String, String>();
		data.put("userId", userId);
		data.put("login", "FALSE");
		UsersDAO.updateLogin(data);
	}
	
}
