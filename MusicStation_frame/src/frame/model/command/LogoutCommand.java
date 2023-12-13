package frame.model.command;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import frame.model.service.UsersService;

public class LogoutCommand implements Command {

	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.getSession().getServletContext().getContext("/frame").setAttribute("userId", null);
		request.getSession().invalidate();
		
		return null;
	}
	
}
