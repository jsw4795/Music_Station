package com.mystudy.command;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mystudy.dao.MusicStation_Search_DAO;
import com.mystudy.vo.MusicStation_Search_VO;

public class SearchTracksCommand implements Command {

	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String keyword = request.getParameter("keyword");
		String idx = request.getParameter("idx");
		System.out.println(">>> SearchTracksCommand keyword : " + keyword);
		System.out.println(">>> SearchTracksCommand idx : " + idx);
		
		if(keyword == null || keyword.trim().equals("") || idx == null || idx.trim().equals("")) {
			return "Search.jsp";
		}
		
		List<MusicStation_Search_VO> list = MusicStation_Search_DAO.getSearchTracks(keyword,idx);
		request.setAttribute("list", list);
		System.out.println("list : " + list);
		return "SearchTracks.jsp";
	}
}
