package com.mystudy.command;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mystudy.dao.MusicStation_Search_DAO;
import com.mystudy.vo.MusicStation_SearchUsers_VO;
import com.mystudy.vo.MusicStation_Search_VO;

public class SearchAllCommand implements Command {
		
		@Override
		public String exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			String keyword = request.getParameter("keyword");
			String idx = request.getParameter("idx");
			System.out.println(">>> SearchAllCommand keyword : " + keyword);
			
			if(keyword == null || keyword.trim().equals("")) {
				return "Search.jsp";
			}
			
			List<MusicStation_Search_VO> list1 = MusicStation_Search_DAO.getSearchTracks(keyword,idx);
			request.setAttribute("list1", list1);
			System.out.println("list1 : " + list1);
			
			List<MusicStation_SearchUsers_VO> list2 = MusicStation_Search_DAO.getSearchUsers(keyword, idx);
			request.setAttribute("list2", list2);
			System.out.println("list2 : " + list2);
			
			return "Search.jsp";
		}

}
