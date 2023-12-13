package com.mystudy.vo;

import java.sql.Date;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

public class MusicStation_SearchUsers_VO {
	String userId;
	String pwd;
	String nickname;
	String email;
	String bio;
	String picture;
	String login;
	Date regdate;
	String sale;
}
