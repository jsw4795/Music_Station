package frame.model.service;

import java.util.HashMap;
import java.util.Map;

import frame.model.dao.UsersDAO;
import frame.model.vo.UsersVO;
import frame.security.PasswordEncoder;

public class UsersService {
	
	public static UsersVO getVOById(String userId) {
		return UsersDAO.selectOneById(userId);
	}
	
	public static UsersVO getVOByEmail(String email) {
		return UsersDAO.selectOneByEmail(email);
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
		
		UsersVO vo = UsersDAO.selectOneById(userId);
		if(vo != null) {
			String temp = vo.getLogin();
			isLogin = Boolean.parseBoolean(temp);
		}
		
		return isLogin;
	}
	
	public static boolean IsValidUserId(String inputUserId) {
		boolean isValid = false;
		UsersVO userFromDB = UsersDAO.selectOneById(inputUserId);
		if(userFromDB == null)
			isValid = true;
		
		return isValid;
	}
	
	public static boolean IsValidEmail(String inputEmail) {
		boolean isValid = false;
		UsersVO userFromDB = UsersDAO.selectOneByEmail(inputEmail);
		if(userFromDB == null)
			isValid = true;
		
		return isValid;
	}
	
	public static boolean IsValidNickname(String inputNickname) {
		boolean isValid = false;
		UsersVO userFromDB = UsersDAO.selectOneByNickname(inputNickname);
		if(userFromDB == null)
			isValid = true;
		
		return isValid;
	}
	
	/**
	 * 모든 제약조건 검사 하고나서 실행할 메서드
	 * @param vo
	 */
	public static void signUp(UsersVO vo) {
		
		UsersDAO.insertOne(vo);
	}
	
	public static boolean resetPassword(UsersVO vo) {
		boolean isSuccess = false;
		int count = UsersDAO.updatePassword(vo);
		
		if(count == 1) 
			isSuccess = true;
		
		return isSuccess;	
	}
	
	/**
	 * 아이디, 비밀번호 일치하는지 확인하고 로그인 성공하면 true 아니면 false 리턴
	 * @param userId
	 * @param pwd
	 * @return
	 */
	public static boolean login(String userId, String pwd) {
		UsersVO vo = UsersDAO.selectOneById(userId);
		
		// 아이디가 존재하지 않으면 끝
		if(vo == null) return false;
		
		// 받은 비밀번호 암호화
		String hashedPwd = PasswordEncoder.encode(pwd, vo.getSalt());
		
		System.out.println("hashedPwd : " + hashedPwd);
		System.out.println("DB pwd : " + vo.getPwd());
		
		// 비밀번호가 일치하지 않으면
		if(!hashedPwd.equals(vo.getPwd())) return false;
		
		
		return true;
	}
	
	
	public static int withDrawal(String userId) {
		return  UsersDAO.deleteUser(userId);
	}
	
}
