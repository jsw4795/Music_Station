package main.model.command;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import main.model.service.LikesService;

public class PressMusicLikeBtnCommand implements Command {

	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String userId = (String)request.getSession().getServletContext().getContext("/frame").getAttribute("userId");
		String musicId = (String)request.getParameter("musicId");
		
		LikesService.pressLike(userId, musicId);
		
		return null;
	}
	
}
