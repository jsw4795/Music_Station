package com.mystudy.command;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mystudy.dao.CommentDAO;
import com.mystudy.dao.LikeDAO;
import com.mystudy.dao.MusicDAO;
import com.mystudy.dao.UserDAO;
import com.mystudy.vo.CommentVO;
import com.mystudy.vo.MusicVO;
import com.mystudy.vo.UserVO;

public class GetMusicDetailPageCommand implements Command {

	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	   	String userId = (String)request.getSession().getServletContext().getContext("/frame").getAttribute("userId");
	   	int musicId = Integer.parseInt(request.getParameter("musicId"));
	   	
	   	
	   	MusicVO mvo = MusicDAO.selectOne(musicId);
	   	UserVO uvo = UserDAO.selectOne(userId);
	   	
	   	//음악 업로드 한 사람 프로필정보
	   	String artist = mvo.getArtist();
	   	UserVO uvo2 = UserDAO.selectOne(artist);
	   	
	   	//좋아요 여부는 자바스크립트 그 배열로 확인한다
	   	
	   	//음악에 딸린 댓글이 있으면 조회 후 화면 표시
	   	List<CommentVO> commList = MusicDAO.getCommList(musicId);
	   	
	   	//음악에 딸린 좋아요 수 표시
	   	int likeCount = LikeDAO.getlike(musicId);
	   	
	   	List<String> commpic = new ArrayList<>();
		for(int i = 0; i < commList.size(); i++) {
			commpic.add(CommentDAO.commpicture(commList.get(i).getUserId()));
		}
	   	
	   	request.setAttribute("musicVO", mvo); //게시글 데이터
	   	request.setAttribute("userVO", uvo); //유저 데이터
	   	request.setAttribute("artistVO", uvo2); //아티스트 데이터
	   	request.setAttribute("commentList", commList); //댓글 목록
	   	request.setAttribute("commentUserPicList", commpic);
		request.setAttribute("likeCount", likeCount);
		
		
		return "./musicdetail-ajax.jsp";
	}
}
