package frame.model.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import frame.model.command.Command;
import frame.model.command.EmailCheckCommand;
import frame.model.command.EmailCodeCheckCommand;
import frame.model.command.FindIdCommand;
import frame.model.command.GetFindIdPage;
import frame.model.command.GetFindPwPage;
import frame.model.command.GetLoginPageCommand;
import frame.model.command.GetSignUpPageCommand;
import frame.model.command.IdCheckCommand;
import frame.model.command.LoginCommand;
import frame.model.command.LogoutCommand;
import frame.model.command.NicknameCheckCommand;
import frame.model.command.PasswordCheckCommand;
import frame.model.command.ResetPasswordCommand;
import frame.model.command.SendEmailCodeCommand;
import frame.model.command.SendEmailCodeFindIdCommand;
import frame.model.command.SendEmailCodeFindPwCommand;
import frame.model.command.SignupCommand;
import frame.model.command.WithDrawalCommand;


@WebServlet("/controller")
public class FrameFrontController extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String userId = (String)request.getSession().getServletContext().getContext("/frame").getAttribute("userId");
		System.out.println("controller" + userId);
		
		String location = request.getParameter("location");
		Command command = null;
		
		switch(location) {
		case "getLoginPage":
			command = new GetLoginPageCommand();
			break;
		case "getSignUpPage":
			command = new GetSignUpPageCommand();
			break;
		case "getFindIdPage":
			command = new GetFindIdPage();
			break;
		case "getFindPwPage":
			command = new GetFindPwPage();
			break;
		case "sendEmailCodeFindId":
			command = new SendEmailCodeFindIdCommand();
			break;
		case "sendEmailCodeFindPw":
			command = new SendEmailCodeFindPwCommand();
			break;
		case "resetPassword":
			command = new ResetPasswordCommand();
			break;
		case "findId":
			command = new FindIdCommand();
			break;
		case "idCheck": 
			command = new IdCheckCommand();
			break;
		case "emailCheck":
			command = new EmailCheckCommand();
			break;
		case "sendEmailCode":
			command = new SendEmailCodeCommand();
			break;
		case "emailCodeCheck":
			command = new EmailCodeCheckCommand();
			break;
		case "nicknameCheck":
			command = new NicknameCheckCommand();
			break;
		case "signup":
			command = new SignupCommand();
			break;
		case "login":
			command = new LoginCommand();
			break;
		case "logout":
			command = new LogoutCommand();
			break;
		case "passwordCheck":
			command = new PasswordCheckCommand();
			break;
		case "withdrawal":
			command = new WithDrawalCommand();
			break;
		}
		
		
		String path = command.exec(request, response);
		if(path == null) return;
		response.sendRedirect(path);
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		
		doGet(request, response);
	}

}
