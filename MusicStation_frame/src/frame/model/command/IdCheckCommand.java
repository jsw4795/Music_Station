package frame.model.command;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import frame.model.service.UsersService;

public class IdCheckCommand implements Command{
	
	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String inputId = request.getParameter("inputId");
		boolean isValid = UsersService.IsValidUserId(inputId);
		String json = null;
		
		if(isValid) {
			json = "{\"isValid\" : \"true\"}";
		} else {
			json = "{\"isValid\" : \"false\"}";
		}
		
		PrintWriter out = response.getWriter();
		out.print(json);
		
		return null;
	}

}
