//package frame.model.filter;
//
//import java.io.IOException;
//import java.util.ArrayList;
//import java.util.List;
//
//import javax.servlet.Filter;
//import javax.servlet.FilterChain;
//import javax.servlet.FilterConfig;
//import javax.servlet.ServletException;
//import javax.servlet.ServletRequest;
//import javax.servlet.ServletResponse;
//import javax.servlet.annotation.WebFilter;
//import javax.servlet.http.HttpFilter;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import javax.servlet.http.HttpSession;
//
//import frame.model.service.UsersService;
//
//@WebFilter("/*")
//public class SendToIndexFilter extends HttpFilter implements Filter {
//	
//	// 생각처럼 잘 안된다 ㅎㅎ.. 때려쳐
//	
//	private List<String> whiteList;
//	
//	// 필터 생성자에 화이트 리스트 설정
//	public SendToIndexFilter() {
//		whiteList = new ArrayList<String>();
//		whiteList.add("/frame/index");
//		whiteList.add("/frame/command");
//	}
//	
//	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
//		// 세션을 가져오기 위해 형변환
//		HttpServletRequest req = (HttpServletRequest)request;
//		HttpServletResponse res = (HttpServletResponse)response;
//		
//		System.out.println("필터작동");
//		String uri = req.getRequestURI();
//		System.out.println("uri : " + uri);
//		
//		
//		
//		
//		chain.doFilter(request, response);
//		
//	}
//
//	
//
//}
