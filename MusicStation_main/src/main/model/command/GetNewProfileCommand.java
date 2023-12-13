package main.model.command;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import main.model.service.UsersService;
import main.model.vo.UsersVO;

public class GetNewProfileCommand implements Command {

	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String userId = (String)request.getSession().getServletContext().getContext("/frame").getAttribute("userId");
		UsersVO vo = UsersService.getVO(userId);
		String profilePic = vo.getPicture();
		
		try {
			Thread.sleep(10000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		
		PrintWriter out = response.getWriter();
		out.print("{\"fileName\" : \""+ profilePic +"\"}");
		
		
		return null;
	}
}
