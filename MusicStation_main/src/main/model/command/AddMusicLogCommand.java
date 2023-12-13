package main.model.command;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import main.model.service.MusicLogService;
import main.model.service.TempDataService;

public class AddMusicLogCommand implements Command {
	
	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String musicId = request.getParameter("musicId");
		String userId = (String)request.getSession().getServletContext().getContext("/frame").getAttribute("userId");
		
		MusicLogService.addLog(userId, musicId);
		
		return null;
	}

}
