package com.mystudy.command;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mystudy.service.LikesService;
import com.mystudy.vo.MusicVO;

public class likesCommand implements Command {

	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String userId = request.getParameter("userId");
		
		List<MusicVO> likes = LikesService.getLikes(userId);
		request.setAttribute("likes", likes);
		return "Likes.jsp";
	}

}
