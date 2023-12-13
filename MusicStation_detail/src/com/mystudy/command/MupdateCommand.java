package com.mystudy.command;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mystudy.dao.CommentDAO;
import com.mystudy.vo.CommentVO;

public class MupdateCommand implements Command {

	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//request.getRequestDispatcher("dept.jsp").forward(request, response);
		CommentVO commentVO = new CommentVO();
		commentVO.setMusicId(Integer.parseInt(request.getParameter("musicId")));
		commentVO.setCommentId(Integer.parseInt(request.getParameter("commentId")));
		commentVO.setCommentContent(request.getParameter("commentContent"));
		
		
		CommentDAO.mcommentupdate(commentVO);
		return null;
	}

}
