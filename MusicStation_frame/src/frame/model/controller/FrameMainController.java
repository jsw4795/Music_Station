package frame.model.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import frame.model.service.UsersService;
import frame.model.vo.UsersVO;

@WebServlet("/index")
public class FrameMainController extends HttpServlet {
	private static final long serialVersionUID = 1L;
	

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		// 임시로 세션에 userId = test33으로 설정 (로그인 상태인 아이디)
		//request.getSession().setAttribute("userId", "test33");
		// 임시로 세션 삭제하는 코드
		//request.getSession().invalidate();
		//System.out.println("세션 삭제");
		
		String userId = (String)request.getSession().getServletContext().getContext("/frame").getAttribute("userId");
		System.out.println("index"+userId);
		
		if(userId == null) {
			request.getRequestDispatcher("/html/login.html").forward(request, response);
			return;
		}
		
		UsersVO vo = UsersService.getVOById(userId); // 프사 때문에 필요함
		request.setAttribute("userVO", vo);
		
		request.getRequestDispatcher("/jsp/frame.jsp").forward(request, response);
	}


}
