package main.model.command;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import main.model.service.LikesService;

public class GetLikeMusicsCommand implements Command {
	
	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String userId = (String)request.getSession().getServletContext().getContext("/frame").getAttribute("userId");
		List<Integer> likeMusicId = LikesService.getLikeMusicIdList(userId);
		
		StringBuilder sb = new StringBuilder();
		int i = 0; // 그냥 json에 key값으로 쓰일 인덱스
		sb.append("{");
		for(int musicId : likeMusicId) {
			sb.append("\"musicId" + i++ + "\" : \"" + musicId + "\",");
		}
		sb.deleteCharAt(sb.length()-1); // 마지막 콤마 제거
		sb.append("}");
		System.out.println(sb.toString());
		
		PrintWriter out = response.getWriter();
		out.print(sb.toString());
		
		return null;
	}

}
