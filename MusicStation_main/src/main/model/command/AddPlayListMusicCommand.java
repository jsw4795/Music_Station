package main.model.command;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import main.common.JsonEncoder;
import main.model.service.MusicService;
import main.model.vo.MusicVO;

public class AddPlayListMusicCommand implements Command{
	
	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setCharacterEncoding("UTF-8");
		String musicId = request.getParameter("musicId");
		MusicVO vo = MusicService.getVO(musicId);
		String musicJson = JsonEncoder.toJson(vo);
		
		PrintWriter out = response.getWriter();
		out.print(musicJson);
		
		return null;
	}
}
