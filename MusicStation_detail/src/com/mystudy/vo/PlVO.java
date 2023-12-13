package com.mystudy.vo;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
@Getter
@Setter
@ToString
public class PlVO {
	private int plId;
	private String title;
	private String artist;
	private String info;
	private Date upload_date;
	private String picture;
}
