package com.mystudy.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mystudy.command.Command;
import com.mystudy.command.GetMusicDetailPageCommand;
import com.mystudy.command.MdeleteCommand;
import com.mystudy.command.MlikeCommand;
import com.mystudy.command.MupdateCommand;
import com.mystudy.command.MwriteCommand;
import com.mystudy.dao.CommentDAO;
import com.mystudy.vo.CommentVO;

@WebServlet("/controller")
public class FrontController extends HttpServlet{
	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String location = request.getParameter("location");
		
		Command command = null;
		if("getMusicDetailPage".equals(location)) {
			command = new GetMusicDetailPageCommand();
		}
		if ("commentWrite".equals(location)) {
			command = new MwriteCommand();
		}
		if("likemusic".equals(location)) {
			command = new MlikeCommand();
		}
		if ("commentUpdate".equals(location)) {
			command = new MupdateCommand();
		}
		if ("commentDelete".equals(location)) {
			command = new MdeleteCommand();
		}
		
		
		String path = command.exec(request, response);
		if(path == null)
			return;
		request.getRequestDispatcher(path).forward(request, response);
	}
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setCharacterEncoding("UTF-8");
		doGet(req, resp);
	}
}
