package com.mystudy.vo;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

public class UserVO {
	private String userId;
	private String pwd;
	private String name;
	private String nickname;
	private String email;
	private String bio;
	private String picture;
	private String login;
	private Date reg_date;
	private String salt;
}
