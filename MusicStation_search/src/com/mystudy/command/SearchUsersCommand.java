package com.mystudy.command;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mystudy.dao.MusicStation_Search_DAO;
import com.mystudy.vo.MusicStation_SearchUsers_VO;
import com.mystudy.vo.MusicStation_Search_VO;

public class SearchUsersCommand implements Command {

	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String keyword = request.getParameter("keyword");
		String idx = request.getParameter("idx");
		System.out.println(">>> SearchUsersCommand keyword : " + keyword);
		System.out.println(">>> idx : " + idx);
		
		if(keyword == null || keyword.trim().equals("")) {
			return "Search.jsp";
		}
		
		List<MusicStation_SearchUsers_VO> list = MusicStation_Search_DAO.getSearchUsers(keyword, idx);
		request.setAttribute("list_users", list);
		System.out.println("list_users : " + list);
		return "SearchUsers.jsp";
	}
}
