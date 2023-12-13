package com.mystudy.command;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.mystudy.dao.UsersDAO;
import com.mystudy.service.UsersService;
import com.mystudy.vo.UsersVO;

public class EditWithoutPictureCommand implements Command {

	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		
	    String userId = (String)request.getSession().getServletContext().getContext("/frame").getAttribute("userId");
		String nickname = request.getParameter("nickname");
		String bio = request.getParameter("bio");
	    
		
		UsersVO param = new UsersVO();
		param.setUserId(userId);
		param.setBio(bio);
		param.setNickname(nickname);

		int result = UsersService.updateWithoutPic(param);
		UsersVO vo = UsersDAO.idselect(param);
		
		System.out.println("result : " + result);
		HttpSession session = request.getSession();
		if(vo != null){
			 //저장된 값이 있다면... 세션영역에 아이디, 패스워드, 이름을 속성으로 저장한다.
			session.setAttribute("siteUserInfo", vo);
		}
		return null;
	}
}
