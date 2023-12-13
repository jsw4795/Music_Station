package frame.model.command;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import frame.model.service.UsersService;
import frame.model.vo.UsersVO;

public class FindIdCommand implements Command {

	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String inputEmail = request.getParameter("inputEmail");
		UsersVO vo = UsersService.getVOByEmail(inputEmail);
		String userId = vo.getUserId();
		
		PrintWriter out = response.getWriter();
		
		out.print("{\"userId\" : \""+ userId +"\"}");
		
		return null;
	}
	
}
