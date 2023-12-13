package com.mystudy.command;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mystudy.service.MusicService;
import com.mystudy.vo.MusicVO;

public class myTracksCommand implements Command {

	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String userId = request.getParameter("userId");
		System.out.println("userId : " + userId);
		List<MusicVO> musics = MusicService.getTracks(userId);
		request.setAttribute("musics", musics);
		System.out.println(musics);
		return "MyTracks.jsp";
	}

}
