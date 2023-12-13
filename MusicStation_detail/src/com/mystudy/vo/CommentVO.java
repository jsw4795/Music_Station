package com.mystudy.vo;

import java.sql.Date;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

public class CommentVO {
	int commentId;
	String commentContent;
	String userId;
	int musicId;
	int plId;
	Date uploadDate;
	String type;
	String nickname;
}

