package frame.model.command;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import frame.model.service.EmailCodeSender;
import frame.model.service.UsersService;
import frame.model.vo.UsersVO;

public class SendEmailCodeFindPwCommand implements Command {
	
	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String userId = request.getParameter("userId");
		String inputEmail = request.getParameter("userEmail");
		
		UsersVO vo = UsersService.getVOById(userId);
		String email = vo.getEmail();
		
		PrintWriter out = response.getWriter();
		
		if(!inputEmail.equals(email)) {
			out.print("{\"isSuccess\" : \"notMatch\"}");
			return null;
		}
		
		boolean isSuccess = EmailCodeSender.sendCode(inputEmail, request);
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
