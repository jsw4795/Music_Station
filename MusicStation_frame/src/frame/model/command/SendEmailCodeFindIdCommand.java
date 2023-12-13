package frame.model.command;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import frame.model.service.EmailCodeSender;
import frame.model.service.UsersService;
import frame.model.vo.UsersVO;

public class SendEmailCodeFindIdCommand implements Command {
	
	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String inputEmail = request.getParameter("userEmail");
		
		UsersVO vo = UsersService.getVOByEmail(inputEmail);
		PrintWriter out = response.getWriter();
		
		if(vo == null) {
			out.print("{\"isSuccess\" : \"notExist\"}");
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
