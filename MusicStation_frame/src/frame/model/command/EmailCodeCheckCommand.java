package frame.model.command;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class EmailCodeCheckCommand implements Command {

	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String inputCode = request.getParameter("inputCode");
		String code = (String)request.getSession().getAttribute("AuthenticationKey");
		
		String json = null;
		if(inputCode.equals(code)) {
			json = "{\"isValid\" : \"true\"}";
		} else {
			json = "{\"isValid\" : \"false\"}";
		}
		PrintWriter out = response.getWriter();
		out.print(json);
		
		return null;
	}
	
}
