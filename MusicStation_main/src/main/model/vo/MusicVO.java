package main.model.vo;

import java.util.Date;
import java.util.List;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class MusicVO {
	private String musicId;
	private String title;
	private String artist;
	private String info;
	private Date uploadDate;
	private String picture;
	private String fileName;
	private List<String> genre; // 장르 이름들
	private List<String> likeUser; // 이 노래에 좋아요 누른 유저들
	private int views; // 조회수
	private String artistNickname;
}
