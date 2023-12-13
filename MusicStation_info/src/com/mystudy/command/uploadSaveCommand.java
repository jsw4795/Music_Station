package com.mystudy.command;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Enumeration;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mystudy.service.MusicService;
import com.mystudy.vo.MusicVO;
import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;


public class uploadSaveCommand implements Command {

    @Override
    public String exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    	
    	String saveDirectory = "/Users/jsw4795/eclipse-workspace/itwill/MusicStation_main/WebContent/resources";  // 저장할 디렉터리
		int maxPostSize = 10 * 1024 * 1000;  // 파일 최대 크기(1MB)
		String encoding = "UTF-8";  // 인코딩 방식

	    // 1. MultipartRequest 객체 생성
	    MultipartRequest mr = new MultipartRequest(request, saveDirectory,maxPostSize, encoding, new DefaultFileRenamePolicy());
    	
    	String title = mr.getParameter("title");
    	String artist = (String)request.getSession().getServletContext().getContext("/frame").getAttribute("userId");
    	String info = mr.getParameter("info");
    	String picture = mr.getFilesystemName("image");
    	String music = mr.getFilesystemName("music");
    	
    	
    	// 사진 파일 이름, 경로 변경
        String picExt = picture.substring(picture.lastIndexOf("."));  // 파일 확장자
        String picNow = new SimpleDateFormat("yyyyMMddHmsS").format(new Date());
        String newPicName = "/images/musicPic/" + picNow + picExt;  // 새로운 파일 이름("업로드일시.확장자")
        
        File oldPicFile = new File(saveDirectory + File.separator + picture);
        File newPicFile = new File(saveDirectory + File.separator + newPicName);
        oldPicFile.renameTo(newPicFile);
        
        // 음악 파일 이름, 경로 변경
        String musicExt = music.substring(music.lastIndexOf("."));  // 파일 확장자
        String musicNow = new SimpleDateFormat("yyyyMMddHmsS").format(new Date());
        String newMusicName = "/musics/" + musicNow + musicExt;  // 새로운 파일 이름("업로드일시.확장자")
        
        File oldMusicFile = new File(saveDirectory + File.separator + music);
        File newMusicFile = new File(saveDirectory + File.separator + newMusicName);
        oldMusicFile.renameTo(newMusicFile);
    	
    	newPicName = newPicName.substring(17);
    	newMusicName = newMusicName.substring(8);
    	
        
    	MusicVO vo = new MusicVO();
    	vo.setTitle(title);
    	vo.setArtist(artist);
    	vo.setInfo(info);
    	vo.setFileName(newMusicName);
    	vo.setPicture(newPicName);
    	
    	try {
			Thread.sleep(10000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
    	
    	MusicService.insertTracks(vo);
    	
    	return "uploadMain.jsp";
    }
}
