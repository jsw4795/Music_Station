package frame.model.command;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import frame.model.service.UsersService;

public class WithDrawalCommand implements Command{

	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String userId = (String)request.getSession().getServletContext().getContext("/frame").getAttribute("userId");
		int result = UsersService.withDrawal(userId);
		
		PrintWriter out = response.getWriter();
		String json = null;
		
		if(result == 1) {
			json = "{\"isSuccess\" : \"true\"}";
			request.getSession().getServletContext().getContext("/frame").setAttribute("userId", null);
			request.getSession().invalidate();
		} else {
			json = "{\"isSuccess\" : \"false\"}";
		}
		out.print(json);
		
		return null;
	}
	
}
