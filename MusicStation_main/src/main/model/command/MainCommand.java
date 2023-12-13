package main.model.command;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import main.model.controller.MainFrontController;
import main.model.service.MusicService;
import main.model.vo.MusicVO;

public class MainCommand implements Command {
	
	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
				
		String userId = (String)request.getSession().getServletContext().getContext("/frame").getAttribute("userId");
		
		if(userId != null) {
			//List<MusicVO> top10List = MusicService.getHistoryTop(10);
			List<MusicVO> top10List = new ArrayList<MusicVO>(MainFrontController.historicalTop100.subList(0, 10));
			List<MusicVO> recentlyListenList = MusicService.getRecentlyListen(userId, 10);
			List<MusicVO> recentlyUploadList = MusicService.getRecentlyUpload(10);
			List<MusicVO> recentWeekTop10List = new ArrayList<MusicVO>(MainFrontController.weeklyTop100.subList(0, 10));
			request.setAttribute("top10List", top10List);
			request.setAttribute("recent10List", recentlyListenList);
			request.setAttribute("upload10List", recentlyUploadList);
			request.setAttribute("recentWeekTop10List", recentWeekTop10List);
			return "/jsp/main.jsp";
		} else {
			return null;
		}
		
	}
	
}
