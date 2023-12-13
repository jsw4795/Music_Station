package com.mystudy.vo;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

public class LikeVO {
	private String userId;
	private int musicId;
	private int plId;
	private String type;
	private Date likeDate;
}
