package main.model.command;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import main.model.service.TempDataService;
import main.model.service.UsersService;
import main.model.vo.UsersVO;

public class SearchMainCommand implements Command{
	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String userId = (String)request.getSession().getServletContext().getContext("/frame").getAttribute("userId");
		
		UsersVO vo = UsersService.getVO(userId);
		
		request.setAttribute("user", vo);
		
		return "/jsp/temp/searchMain.jsp";
	}
}
