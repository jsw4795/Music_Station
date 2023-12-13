package frame.model.command;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import frame.model.service.UsersService;

public class NicknameCheckCommand implements Command{

	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String inputNickname = request.getParameter("inputNickname");
		boolean isValid = UsersService.IsValidNickname(inputNickname);
		System.out.println("inputNickname : " + inputNickname);
		System.out.println("isValid : " + isValid);
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
