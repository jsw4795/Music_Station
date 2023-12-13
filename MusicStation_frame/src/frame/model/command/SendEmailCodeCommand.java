package frame.model.command;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import frame.model.service.EmailCodeSender;

public class SendEmailCodeCommand implements Command{

	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String inputEmail = request.getParameter("userEmail");
		boolean isSuccess = EmailCodeSender.sendCode(inputEmail, request);
		String json = null;
		if(isSuccess) {
			json = "{\"isSuccess\" : \"true\"}";
		} else {
			json = "{\"isSuccess\" : \"false\"}";
		}
		PrintWriter out = response.getWriter();
		out.print(json);
		
		return null;
	}
	
}
