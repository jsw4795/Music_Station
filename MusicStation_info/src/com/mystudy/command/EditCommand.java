package com.mystudy.command;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.mystudy.dao.UsersDAO;
import com.mystudy.service.UsersService;
import com.mystudy.service.UsersService;
import com.mystudy.vo.UsersVO;
import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

public class EditCommand implements Command {

	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		
		String saveDirectory = "/Users/jsw4795/eclipse-workspace/itwill/MusicStation_main/WebContent/resources/images/profile";  // 저장할 디렉터리
		int maxPostSize = 10 * 1024 * 1000;  // 파일 최대 크기(1MB)
		String encoding = "UTF-8";  // 인코딩 방식

	    // 1. MultipartRequest 객체 생성
	    MultipartRequest mr = new MultipartRequest(request, saveDirectory,maxPostSize, encoding, new DefaultFileRenamePolicy());
	    
	    String userId = (String)request.getSession().getServletContext().getContext("/frame").getAttribute("userId");
		String nickname = mr.getParameter("nickname");
		String bio = mr.getParameter("bio");
	    
	    
	    String picture = mr.getFilesystemName("image");
	    // 사진 파일 이름, 경로 변경
        String picExt = picture.substring(picture.lastIndexOf("."));  // 파일 확장자
        String picNow = new SimpleDateFormat("yyyyMMddHmsS").format(new Date());
        String newPicName = picNow + picExt;  // 새로운 파일 이름("업로드일시.확장자")
        
        File oldPicFile = new File(saveDirectory + File.separator + picture);
        File newPicFile = new File(saveDirectory + File.separator + newPicName);
        oldPicFile.renameTo(newPicFile);
        
        try {
			Thread.sleep(10000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
        

        String pastPicName = UsersService.getVO(userId).getPicture();
        if(!pastPicName.equals("defaultProfileImage.jpeg")) {
	        File pastPic = new File(saveDirectory + "/" + pastPicName);
	        pastPic.delete();
        }
        
		
		UsersVO param = new UsersVO();
		param.setUserId(userId);
		param.setBio(bio);
		param.setNickname(nickname);
		param.setPicture(newPicName);

		int result = UsersService.update(param);
		UsersVO vo = UsersDAO.idselect(param);
		
		System.out.println("result : " + result);
		HttpSession session = request.getSession();
		if(vo != null){
			 //저장된 값이 있다면... 세션영역에 아이디, 패스워드, 이름을 속성으로 저장한다.
			session.setAttribute("siteUserInfo", vo);
		}
		return null;
	}
}
