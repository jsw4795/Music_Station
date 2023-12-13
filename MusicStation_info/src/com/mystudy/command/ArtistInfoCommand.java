package com.mystudy.command;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mystudy.dao.UsersDAO;
import com.mystudy.vo.UsersVO;

public class ArtistInfoCommand implements Command{

	
	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String artistId = request.getParameter("userId");	// 인포 보려는 유저 아이디
		String userId = (String)request.getSession().getServletContext().getContext("/frame").getAttribute("userId"); // 사이트 이용중인 유저 아이디
		UsersVO v = new UsersVO();
		v.setUserId(artistId);
		UsersVO vo = UsersDAO.idselect(v);
		
		request.setAttribute("userId", userId);
		request.setAttribute("siteUserInfo", vo);
		return "/Info.jsp";
	}
}
