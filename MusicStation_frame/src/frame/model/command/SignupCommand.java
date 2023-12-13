package frame.model.command;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import frame.model.service.UsersService;
import frame.model.vo.UsersVO;
import frame.security.PasswordEncoder;

public class SignupCommand implements Command {
	String defaultProfileImg = "defaultProfileImage.jpeg";

	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String inputUserId = request.getParameter("inputUserId");
		String inputPassword = request.getParameter("inputPassword");
		String inputEmail = request.getParameter("inputEmail");
		String inputNickname = request.getParameter("inputNickname");
		
		String salt = PasswordEncoder.makeSalt();
		String hashedPassword = PasswordEncoder.encode(inputPassword, salt);
		
		UsersVO newUser = new UsersVO(inputUserId,	     // 아이디
									  hashedPassword,    // 비밀번호(암호화 상태)
									  inputNickname,  	 // 닉네임
									  inputEmail, 		 // 이메일
									  null, 			 // 소개글
									  defaultProfileImg, // 프로필사진(기본값 대입)
									  "FALSE", 			 // 로그인 상태
									  null, 			 // 가입일자
									  salt);			 // 솔트
		
		boolean isSuccess = true;
		
		try {
			UsersService.signUp(newUser);
		} catch (Exception e) {
			isSuccess = false;
		}
		
		PrintWriter out = response.getWriter();
		String json = null;
		if(isSuccess) {
			json = "{\"isSuccess\" : \"true\"}";
		} else {
			json = "{\"isSuccess\" : \"false\"}";
		}
		out.print(json);
		
		return null;
	}
	
}
