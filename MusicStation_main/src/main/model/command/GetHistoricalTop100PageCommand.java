package main.model.command;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import main.model.controller.MainFrontController;
import main.model.vo.MusicVO;

public class GetHistoricalTop100PageCommand implements Command {

	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		List<MusicVO> top100List = new ArrayList<MusicVO>(MainFrontController.historicalTop100);
		request.setAttribute("top100List", top100List);
		return "./jsp/top100.jsp";
	}
	
}
