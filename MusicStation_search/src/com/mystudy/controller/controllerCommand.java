package com.mystudy.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mystudy.command.Command;
import com.mystudy.command.SearchAllCommand;
import com.mystudy.command.SearchTracksCommand;
import com.mystudy.command.SearchUsersCommand;

@WebServlet("/controller")
public class controllerCommand extends HttpServlet{
	private static final long serialVersionUID = 1L;
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/html; charset=UTF-8");
		String location = req.getParameter("location");
		String idx = req.getParameter("idx");
		System.out.println("> location : " + location);
		System.out.println("idx : " + idx);
		System.out.println("doget 실행");
	
		Command command = null;
		
		if("all".equals(location) || "0".equals(idx)) {
			command = new SearchAllCommand();
		}
		
		if("1".equals(idx)) {
			command = new SearchTracksCommand();
		}
		
		if("2".equals(idx)) {
			command = new SearchUsersCommand();
		}
		
			String path = command.exec(req, resp);
			req.getRequestDispatcher(path).forward(req, resp);

	}
}
