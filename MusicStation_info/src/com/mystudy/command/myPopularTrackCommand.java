package com.mystudy.command;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mystudy.service.MusicService;
import com.mystudy.vo.MusicLogVO;

public class myPopularTrackCommand implements Command {

	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String userId = request.getParameter("userId");
		
		List<MusicLogVO> popularMusics = MusicService.getPopularTracks(userId);
		request.setAttribute("popularMusics", popularMusics);
		return "MyPopularTracks.jsp";
	}

}
