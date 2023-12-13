package frame.model.command;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import frame.model.service.UsersService;
import frame.model.vo.UsersVO;
import frame.security.PasswordEncoder;

public class ResetPasswordCommand implements Command {

	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String userId = request.getParameter("userId");
		String newPassword = request.getParameter("newPassword");
		
		UsersVO vo = UsersService.getVOById(userId);
		String hashedNewPassword = PasswordEncoder.encode(newPassword, vo.getSalt());
		
		vo.setPwd(hashedNewPassword);
		
		boolean isSuccess = UsersService.resetPassword(vo);
		
		PrintWriter out = response.getWriter();
		String json = null;
		if(isSuccess) {
			json = "{\"isSuccess\" : \"true\"}";
			request.getSession().setAttribute("userId", userId);
		} else {
			json = "{\"isSuccess\" : \"false\"}";
		}
		out.print(json);
		return null;
	}
	
}
