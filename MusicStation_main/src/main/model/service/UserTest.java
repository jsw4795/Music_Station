package main.model.service;

import main.common.JsonEncoder;
import main.model.vo.MusicVO;
import main.model.vo.UsersVO;

public class UserTest {
	public static void main(String[] args) {
//		UsersVO vo = new UsersVO();
//		vo.setUserId("test33");
//		vo.setPwd("test123");
//		vo.setName("홍길동");
//		vo.setNickname("닉네임33");
//		vo.setEmail("hong33@namer.com");
//		
//		//UsersService.signUp(vo);
//		
//		UsersService.logout("test33");
		
//		boolean b = UsersService.login("test33", "test123");
//		System.out.println(b);
		
		MusicVO vo = MusicService.getVO("1");
		System.out.println(vo);
		System.out.println("---------------------");
		String json = JsonEncoder.toJson(vo);
		System.out.println(json);
		// 뮤직 아이디로 음악 가져와서 제이슨으로 변환까지 완료
		// 커맨드 만들어서 처리하는 클래스 만들고, ajax에 리턴해주고, 
		// 받은쪽에서 json데이터로 플레이리스트에 추가하는 기능 만들어야 함
	}
}
