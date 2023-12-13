package com.mystudy.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mystudy.command.ArtistInfoCommand;
import com.mystudy.command.Command;
import com.mystudy.command.EditCommand;
import com.mystudy.command.EditWithoutPictureCommand;
import com.mystudy.command.MyInfoCommand;
import com.mystudy.command.UserCommand;
import com.mystudy.command.editProfileCommand2;
import com.mystudy.command.likesCommand;
import com.mystudy.command.myPopularTrackCommand;
import com.mystudy.command.myTracksCommand;
import com.mystudy.command.uploadCommand;
import com.mystudy.command.uploadSaveCommand;
import com.oreilly.servlet.MultipartRequest;

@WebServlet("/controller")
public class FrontControllerCommand extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println(">> FrontControllerCommand doGet() 실행");
		String location = request.getParameter("location") == null ? "" : request.getParameter("location");
		System.out.println("> location : " + location);
		
		Command command = null;
		
		if (location == null || location == "") {
			command = new UserCommand();
		}
		
		//info 로 돌아가기
		if("myInfo".equals(location)) {
			command = new MyInfoCommand();
		}
		
		if("artistInfo".equals(location)) {
			command = new ArtistInfoCommand();
		}
		
		//upload로 돌아가기
		if ("upload".equals(location)) {
			command = new uploadCommand();
		}
		
		//--track 보여주기 위함
		if ("track".equals(location)) {
			command = new myTracksCommand();
		}
		
		
		//popularTrack 보여주기
		if ("popularTrack".equals(location)) {
			command = new myPopularTrackCommand();
		}
		
		//수정완료 버튼 -> 수정하기
		if ("submit".equals(location)) {
			command = new MyInfoCommand();
		}

		
		if ("update".equals(location)) {
			command = new editProfileCommand2();
		}
		
		if ("likes".equals(location)) {
			command = new likesCommand();
		}
		
		if ("upload".equals(location)) {
			command = new uploadCommand();
		}
		
		if ("uploadSave".equals(location)) {
			command = new uploadSaveCommand();
		}
		
		if("editProfile".equals(location)) {
			command = new EditCommand();
		}
		
		if("editProfileWithoutPicture".equals(location)) {
			command = new EditWithoutPictureCommand();
		}
		if ("withdrawal".equals(location)) {
			command = new WithdrawlCommand();
		}
		
		String path = command.exec(request, response);
		System.out.println("path : " + path);
		if(path == null) 
			return;
		request.getRequestDispatcher(path).forward(request, response);
		
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println(">> FrontControllerCommand doPost() 실행----");
		req.setCharacterEncoding("UTF-8");
		doGet(req, resp);
	}
}
