package com.mystudy.command;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mystudy.dao.UsersDAO;
import com.mystudy.vo.UsersVO;

public class MyInfoCommand implements Command{

	
	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String userId = (String)request.getSession().getServletContext().getContext("/frame").getAttribute("userId"); 
		String artistId = userId;
		UsersVO v = new UsersVO();
		v.setUserId(artistId);
		UsersVO vo = UsersDAO.idselect(v);
		
		request.setAttribute("userId", userId);
		request.setAttribute("siteUserInfo", vo);
		return "/Info.jsp";
	}
}
