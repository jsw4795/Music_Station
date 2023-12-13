package frame.model.command;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import frame.model.service.UsersService;

public class LoginCommand implements Command {
	
	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String userId = request.getParameter("userId");
		String password = request.getParameter("password");
		boolean isSuccess = UsersService.login(userId, password);
		
		PrintWriter out = response.getWriter();
		String json = null;
		if(isSuccess) {
			json = "{\"isSuccess\" : \"true\"}";
			request.getSession().getServletContext().getContext("/frame").setAttribute("userId", userId);
		} else {
			json = "{\"isSuccess\" : \"false\"}";
		}
		
		System.out.println("login - " + (String)request.getSession().getServletContext().getContext("/frame").getAttribute("userId"));
		
		out.print(json);
		return null;
	}
	
}
