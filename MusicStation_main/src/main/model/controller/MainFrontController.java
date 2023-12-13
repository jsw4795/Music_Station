package main.model.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Timer;
import java.util.TimerTask;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import main.model.command.AddMusicLogCommand;
import main.model.command.AddPlayListMusicCommand;
import main.model.command.Command;
import main.model.command.GetLikeMusicsCommand;
import main.model.command.GetNewProfileCommand;
import main.model.command.GetWeeklyTop100PageCommand;
import main.model.command.GetHistoricalTop100PageCommand;
import main.model.command.MainCommand;
import main.model.command.PressMusicLikeBtnCommand;
import main.model.command.SearchMainCommand;
import main.model.service.MusicService;
import main.model.vo.MusicVO;


// loadOnStartUp = num   -->  num의 우선순위로 처음 요청 없이도 객체를 생성한다
@WebServlet(urlPatterns = { "/controller" }, loadOnStartup = 1)
public class MainFrontController extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	public static List<MusicVO> historicalTop100; // 역대 top100음악 저장할 리스트
	public static List<MusicVO> weeklyTop100; // 주간 top100 음악 저장할 리스트
	
	private Timer timer;
	private TimerTask timerTask;
	
	@Override
	public void init() throws ServletException {
		int delay = 0;
		int period = 5 * 60 * 1000; // 5분
		timer = new Timer();
		
		// 시간마다 수행할 일 설정
		timerTask = new TimerTask() {
			
			@Override
			public void run() {
				// 시간마다 DB에서 데이터를 가져와서 리스트를 업데이트 한다
				List<MusicVO> newHistoricalTop100 = MusicService.getHistoryTop(100);
				List<MusicVO> newwWeklyTop100 = MusicService.getLastWeekTop(100);
				
				historicalTop100 = new ArrayList<MusicVO>(newHistoricalTop100);
				weeklyTop100 = new ArrayList<MusicVO>(newwWeklyTop100);
				System.out.println("---순위 업데이트 완료---");
			}
		};
		timer.scheduleAtFixedRate(timerTask, delay, period);
		super.init();
	}
	
	@Override
	public void destroy() {
		// 타이머, 타이머 테스크 종료
		timer.cancel();
		timerTask.cancel();
		super.destroy();
	}
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		Command command = null;
		
		String location = request.getParameter("location");
		
		System.out.println("location : " + location);
		
		switch(location) {
		case "main": // 메인 페이지 전체 화면 로드
			command = new MainCommand();
			break;
		case "addPlayListMusic":
			command = new AddPlayListMusicCommand();
			break;
		case "addMusicLog":
			command = new AddMusicLogCommand();
			break;
		case "getLikeMusics":
			command = new GetLikeMusicsCommand();
			break;
		case "pressMusicLikeBtn":
			command = new PressMusicLikeBtnCommand();
			break;
		case "getHistoricalTop100Page":
			command = new GetHistoricalTop100PageCommand();
			break;
		case "getWeeklyTop100Page":
			command = new GetWeeklyTop100PageCommand();
			break;
		case "getNewProfile":
			command = new GetNewProfileCommand();
			break;
			
		// ------- 프로젝트 합치기 전 임시 location ---------
		case "searchMain":
			command = new SearchMainCommand();
			break;
		}
		
		
		String path = command.exec(request, response);
		if(path == null) return;
		request.getRequestDispatcher(path).forward(request, response);
	}
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setCharacterEncoding("UTF-8");
		super.doGet(req, resp);
	}

}
