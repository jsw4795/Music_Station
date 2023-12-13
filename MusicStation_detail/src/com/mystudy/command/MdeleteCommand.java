package com.mystudy.command;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mystudy.dao.CommentDAO;
import com.mystudy.vo.CommentVO;

public class MdeleteCommand implements Command {

	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//request.getRequestDispatcher("dept.jsp").forward(request, response);
		int commentId = Integer.parseInt(request.getParameter("commentId"));	
		
		CommentDAO.mcommentdelete(commentId);
		return null;
	}

}
