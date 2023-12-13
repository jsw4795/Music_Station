package frame.model.command;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import frame.model.service.UsersService;

public class PasswordCheckCommand implements Command{

	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String userId = (String)request.getSession().getServletContext().getContext("/frame").getAttribute("userId");
		String password = request.getParameter("password");
		boolean isSuccess = UsersService.login(userId, password);
		
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
