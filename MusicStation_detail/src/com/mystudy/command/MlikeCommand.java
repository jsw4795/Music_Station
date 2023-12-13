package com.mystudy.command;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mystudy.dao.LikeDAO;
import com.mystudy.vo.LikeVO;


public class MlikeCommand implements Command {

	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//request.getRequestDispatcher("dept.jsp").forward(request, response);
		LikeVO likeVO = new LikeVO();
		String userid = request.getParameter("userId");
		int musicid = Integer.parseInt(request.getParameter("musicId"));
		likeVO.setUserId(request.getParameter("userId"));
		likeVO.setMusicId(Integer.parseInt(request.getParameter("musicId")));
		int thislike  = LikeDAO.selectOne(userid, musicid);
		if(thislike == 0) {
			LikeDAO.like(likeVO);
		} else {
			LikeDAO.nolike(userid, musicid);
		}
		return null;
	}

}
