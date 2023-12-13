package com.mystudy.vo;

public class FileVO {
	
    private String idx; 
    private String name;		// 작성자 이름
    private String title;		// 제목
    private String category;	// 카테고리
    private String ofile;		// 원본 파일명
    private String sfile;		// 저장된 파일명
    private String REG_DATE;	// 등록 날짜
	public String getIdx() {
		return idx;
	}
	public void setIdx(String idx) {
		this.idx = idx;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getOfile() {
		return ofile;
	}
	public void setOfile(String ofile) {
		this.ofile = ofile;
	}
	public String getSfile() {
		return sfile;
	}
	public void setSfile(String sfile) {
		this.sfile = sfile;
	}
	public String getREG_DATE() {
		return REG_DATE;
	}
	public void setREG_DATE(String rEG_DATE) {
		REG_DATE = rEG_DATE;
	}

	/*
	 create table myfile (
    idx number primary key,
    name varchar2(50) not null,
    title varchar2(200) not null,
    category varchar2(100),
    ofile varchar2(100) not null,
    sfile varchar2(30) not null,
    REG_DATE date default sysdate not null
);
	 */
    
    
}
