--------------------------------------------------------
--  파일이 생성됨 - 수요일-11월-01-2023   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Sequence COMMENT_SEQ
--------------------------------------------------------

   CREATE SEQUENCE  "MUSIC_STATION"."COMMENT_SEQ"  MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 27 NOCACHE  NOORDER  NOCYCLE  NOKEEP  NOSCALE  GLOBAL ;
--------------------------------------------------------
--  DDL for Sequence MUSIC_ID_SEQ
--------------------------------------------------------

   CREATE SEQUENCE  "MUSIC_STATION"."MUSIC_ID_SEQ"  MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 65 NOCACHE  NOORDER  NOCYCLE  NOKEEP  NOSCALE  GLOBAL ;
--------------------------------------------------------
--  DDL for Sequence PL_ID_SEQ
--------------------------------------------------------

   CREATE SEQUENCE  "MUSIC_STATION"."PL_ID_SEQ"  MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 NOCACHE  NOORDER  NOCYCLE  NOKEEP  NOSCALE  GLOBAL ;
--------------------------------------------------------
--  DDL for Sequence TEMPDATA_IDX_SEQ
--------------------------------------------------------

   CREATE SEQUENCE  "MUSIC_STATION"."TEMPDATA_IDX_SEQ"  MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 3 NOCACHE  NOORDER  NOCYCLE  NOKEEP  NOSCALE  GLOBAL ;
--------------------------------------------------------
--  DDL for Table COMMENTS
--------------------------------------------------------

  CREATE TABLE "MUSIC_STATION"."COMMENTS" 
   (	"COMMENT_ID" NUMBER(5,0), 
	"USER_ID" VARCHAR2(30 BYTE), 
	"MUSIC_ID" NUMBER(5,0), 
	"UPLOAD_DATE" DATE DEFAULT SYSDATE, 
	"TYPE" VARCHAR2(20 BYTE), 
	"COMMENT_CONTENT" VARCHAR2(1200 BYTE), 
	"PL_ID" VARCHAR2(20 BYTE)
   ) ;
--------------------------------------------------------
--  DDL for Table LIKES
--------------------------------------------------------

  CREATE TABLE "MUSIC_STATION"."LIKES" 
   (	"USER_ID" VARCHAR2(30 BYTE), 
	"MUSIC_ID" NUMBER(5,0), 
	"PL_ID" NUMBER(5,0), 
	"TYPE" VARCHAR2(20 BYTE), 
	"LIKE_DATE" DATE
   ) ;
--------------------------------------------------------
--  DDL for Table MUSIC
--------------------------------------------------------

  CREATE TABLE "MUSIC_STATION"."MUSIC" 
   (	"MUSIC_ID" NUMBER(5,0), 
	"TITLE" VARCHAR2(300 BYTE), 
	"ARTIST" VARCHAR2(30 BYTE), 
	"INFO" VARCHAR2(180 BYTE), 
	"UPLOAD_DATE" DATE, 
	"PICTURE" VARCHAR2(1000 BYTE), 
	"FILE_NAME" VARCHAR2(1000 BYTE), 
	"VIEWS" NUMBER DEFAULT 0
   ) ;
--------------------------------------------------------
--  DDL for Table MUSIC_LAST_LOG
--------------------------------------------------------

  CREATE TABLE "MUSIC_STATION"."MUSIC_LAST_LOG" 
   (	"USER_ID" VARCHAR2(30 BYTE), 
	"MUSIC_ID" NUMBER(5,0), 
	"PLAY_DATE" DATE
   ) ;
--------------------------------------------------------
--  DDL for Table MUSIC_LOG
--------------------------------------------------------

  CREATE TABLE "MUSIC_STATION"."MUSIC_LOG" 
   (	"USER_ID" VARCHAR2(30 BYTE), 
	"MUSIC_ID" NUMBER(5,0), 
	"PLAY_DATE" DATE DEFAULT SYSDATE
   ) ;
--------------------------------------------------------
--  DDL for Table USERS
--------------------------------------------------------

  CREATE TABLE "MUSIC_STATION"."USERS" 
   (	"USER_ID" VARCHAR2(30 BYTE), 
	"PWD" VARCHAR2(150 BYTE), 
	"NICKNAME" VARCHAR2(30 BYTE), 
	"EMAIL" VARCHAR2(100 BYTE), 
	"BIO" VARCHAR2(450 BYTE), 
	"PICTURE" VARCHAR2(100 BYTE), 
	"LOGIN" VARCHAR2(30 BYTE), 
	"REG_DATE" DATE, 
	"SALT" VARCHAR2(60 BYTE)
   ) ;
--------------------------------------------------------
--  DDL for Table USERS
--------------------------------------------------------

  CREATE TABLE "MUSIC_STATION"."USERS" 
   (	"USER_ID" VARCHAR2(30 BYTE), 
	"PWD" VARCHAR2(150 BYTE), 
	"NICKNAME" VARCHAR2(30 BYTE), 
	"EMAIL" VARCHAR2(100 BYTE), 
	"BIO" VARCHAR2(450 BYTE), 
	"PICTURE" VARCHAR2(100 BYTE), 
	"LOGIN" VARCHAR2(30 BYTE), 
	"REG_DATE" DATE, 
	"SALT" VARCHAR2(60 BYTE)
   ) ;
--------------------------------------------------------
--  DDL for Table MUSIC
--------------------------------------------------------

  CREATE TABLE "MUSIC_STATION"."MUSIC" 
   (	"MUSIC_ID" NUMBER(5,0), 
	"TITLE" VARCHAR2(300 BYTE), 
	"ARTIST" VARCHAR2(30 BYTE), 
	"INFO" VARCHAR2(180 BYTE), 
	"UPLOAD_DATE" DATE, 
	"PICTURE" VARCHAR2(1000 BYTE), 
	"FILE_NAME" VARCHAR2(1000 BYTE), 
	"VIEWS" NUMBER DEFAULT 0
   ) ;
--------------------------------------------------------
--  DDL for Table COMMENTS
--------------------------------------------------------

  CREATE TABLE "MUSIC_STATION"."COMMENTS" 
   (	"COMMENT_ID" NUMBER(5,0), 
	"USER_ID" VARCHAR2(30 BYTE), 
	"MUSIC_ID" NUMBER(5,0), 
	"UPLOAD_DATE" DATE DEFAULT SYSDATE, 
	"TYPE" VARCHAR2(20 BYTE), 
	"COMMENT_CONTENT" VARCHAR2(1200 BYTE), 
	"PL_ID" VARCHAR2(20 BYTE)
   ) ;
--------------------------------------------------------
--  DDL for Table MUSIC_LAST_LOG
--------------------------------------------------------

  CREATE TABLE "MUSIC_STATION"."MUSIC_LAST_LOG" 
   (	"USER_ID" VARCHAR2(30 BYTE), 
	"MUSIC_ID" NUMBER(5,0), 
	"PLAY_DATE" DATE
   ) ;
--------------------------------------------------------
--  DDL for Table MUSIC_LOG
--------------------------------------------------------

  CREATE TABLE "MUSIC_STATION"."MUSIC_LOG" 
   (	"USER_ID" VARCHAR2(30 BYTE), 
	"MUSIC_ID" NUMBER(5,0), 
	"PLAY_DATE" DATE DEFAULT SYSDATE
   ) ;
REM INSERTING into MUSIC_STATION.COMMENTS
SET DEFINE OFF;
Insert into MUSIC_STATION.COMMENTS (COMMENT_ID,USER_ID,MUSIC_ID,UPLOAD_DATE,TYPE,COMMENT_CONTENT,PL_ID) values (5,'jsw4795',41,to_date('23/10/31','RR/MM/DD'),'MUSIC','12331231312',null);
Insert into MUSIC_STATION.COMMENTS (COMMENT_ID,USER_ID,MUSIC_ID,UPLOAD_DATE,TYPE,COMMENT_CONTENT,PL_ID) values (8,'jsw4795',10,to_date('23/10/31','RR/MM/DD'),'MUSIC','댓글
',null);
Insert into MUSIC_STATION.COMMENTS (COMMENT_ID,USER_ID,MUSIC_ID,UPLOAD_DATE,TYPE,COMMENT_CONTENT,PL_ID) values (6,'jsw4795',20,to_date('23/10/31','RR/MM/DD'),'MUSIC','123123',null);
Insert into MUSIC_STATION.COMMENTS (COMMENT_ID,USER_ID,MUSIC_ID,UPLOAD_DATE,TYPE,COMMENT_CONTENT,PL_ID) values (7,'jsw4795',20,to_date('23/10/31','RR/MM/DD'),'MUSIC','123213',null);
Insert into MUSIC_STATION.COMMENTS (COMMENT_ID,USER_ID,MUSIC_ID,UPLOAD_DATE,TYPE,COMMENT_CONTENT,PL_ID) values (9,'jsw4795',20,to_date('23/10/31','RR/MM/DD'),'MUSIC','askdjhag
',null);
Insert into MUSIC_STATION.COMMENTS (COMMENT_ID,USER_ID,MUSIC_ID,UPLOAD_DATE,TYPE,COMMENT_CONTENT,PL_ID) values (19,'skyjn01',20,to_date('23/11/01','RR/MM/DD'),'MUSIC','노래 짱 좋다
',null);
Insert into MUSIC_STATION.COMMENTS (COMMENT_ID,USER_ID,MUSIC_ID,UPLOAD_DATE,TYPE,COMMENT_CONTENT,PL_ID) values (20,'skyjn01',50,to_date('23/11/01','RR/MM/DD'),'MUSIC','르세라핌 너무 좋아요',null);
Insert into MUSIC_STATION.COMMENTS (COMMENT_ID,USER_ID,MUSIC_ID,UPLOAD_DATE,TYPE,COMMENT_CONTENT,PL_ID) values (21,'skyjn01',30,to_date('23/11/01','RR/MM/DD'),'MUSIC','암 어 퀸카 암 어 퀸카',null);
Insert into MUSIC_STATION.COMMENTS (COMMENT_ID,USER_ID,MUSIC_ID,UPLOAD_DATE,TYPE,COMMENT_CONTENT,PL_ID) values (22,'skyjn01',42,to_date('23/11/01','RR/MM/DD'),'MUSIC','비비 노래 진짜 좋아요',null);
Insert into MUSIC_STATION.COMMENTS (COMMENT_ID,USER_ID,MUSIC_ID,UPLOAD_DATE,TYPE,COMMENT_CONTENT,PL_ID) values (23,'skyjn01',49,to_date('23/11/01','RR/MM/DD'),'MUSIC','뉴진스 감성 미쳤다',null);
Insert into MUSIC_STATION.COMMENTS (COMMENT_ID,USER_ID,MUSIC_ID,UPLOAD_DATE,TYPE,COMMENT_CONTENT,PL_ID) values (24,'skyjn01',38,to_date('23/11/01','RR/MM/DD'),'MUSIC','I''m a savage',null);
Insert into MUSIC_STATION.COMMENTS (COMMENT_ID,USER_ID,MUSIC_ID,UPLOAD_DATE,TYPE,COMMENT_CONTENT,PL_ID) values (25,'jsw4795',43,to_date('23/11/01','RR/MM/DD'),'MUSIC','aksdbfaskjf',null);
Insert into MUSIC_STATION.COMMENTS (COMMENT_ID,USER_ID,MUSIC_ID,UPLOAD_DATE,TYPE,COMMENT_CONTENT,PL_ID) values (26,'jsw4795',43,to_date('23/11/01','RR/MM/DD'),'MUSIC','뱁배배배뱁배배',null);
Insert into MUSIC_STATION.COMMENTS (COMMENT_ID,USER_ID,MUSIC_ID,UPLOAD_DATE,TYPE,COMMENT_CONTENT,PL_ID) values (18,'jsw4795',30,to_date('23/11/01','RR/MM/DD'),'MUSIC','12321412',null);
REM INSERTING into MUSIC_STATION.LIKES
SET DEFINE OFF;
Insert into MUSIC_STATION.LIKES (USER_ID,MUSIC_ID,PL_ID,TYPE,LIKE_DATE) values ('jsw4795',5,null,'MUSIC',to_date('23/10/31','RR/MM/DD'));
Insert into MUSIC_STATION.LIKES (USER_ID,MUSIC_ID,PL_ID,TYPE,LIKE_DATE) values ('jsw4795',3,null,'MUSIC',to_date('23/10/31','RR/MM/DD'));
Insert into MUSIC_STATION.LIKES (USER_ID,MUSIC_ID,PL_ID,TYPE,LIKE_DATE) values ('jsw4795',27,null,'MUSIC',to_date('23/10/29','RR/MM/DD'));
Insert into MUSIC_STATION.LIKES (USER_ID,MUSIC_ID,PL_ID,TYPE,LIKE_DATE) values ('jsw4795',29,null,'MUSIC',to_date('23/10/29','RR/MM/DD'));
Insert into MUSIC_STATION.LIKES (USER_ID,MUSIC_ID,PL_ID,TYPE,LIKE_DATE) values ('jsw4795',28,null,'MUSIC',to_date('23/10/31','RR/MM/DD'));
Insert into MUSIC_STATION.LIKES (USER_ID,MUSIC_ID,PL_ID,TYPE,LIKE_DATE) values ('jsw4795',43,null,'MUSIC',to_date('23/11/01','RR/MM/DD'));
Insert into MUSIC_STATION.LIKES (USER_ID,MUSIC_ID,PL_ID,TYPE,LIKE_DATE) values ('skyjn01',28,null,'MUSIC',to_date('23/11/01','RR/MM/DD'));
Insert into MUSIC_STATION.LIKES (USER_ID,MUSIC_ID,PL_ID,TYPE,LIKE_DATE) values ('jsw4795',7,null,'MUSIC',to_date('23/10/29','RR/MM/DD'));
Insert into MUSIC_STATION.LIKES (USER_ID,MUSIC_ID,PL_ID,TYPE,LIKE_DATE) values ('jsw4795',14,null,'MUSIC',to_date('23/10/31','RR/MM/DD'));
Insert into MUSIC_STATION.LIKES (USER_ID,MUSIC_ID,PL_ID,TYPE,LIKE_DATE) values ('jsw4795',40,null,'MUSIC',to_date('23/10/31','RR/MM/DD'));
Insert into MUSIC_STATION.LIKES (USER_ID,MUSIC_ID,PL_ID,TYPE,LIKE_DATE) values ('skyjn01',43,null,'MUSIC',to_date('23/11/01','RR/MM/DD'));
Insert into MUSIC_STATION.LIKES (USER_ID,MUSIC_ID,PL_ID,TYPE,LIKE_DATE) values ('jsw4795',10,null,'MUSIC',to_date('23/10/29','RR/MM/DD'));
Insert into MUSIC_STATION.LIKES (USER_ID,MUSIC_ID,PL_ID,TYPE,LIKE_DATE) values ('jsw4795',42,null,'MUSIC',to_date('23/10/27','RR/MM/DD'));
Insert into MUSIC_STATION.LIKES (USER_ID,MUSIC_ID,PL_ID,TYPE,LIKE_DATE) values ('jsw4795',8,null,'MUSIC',to_date('23/10/27','RR/MM/DD'));
Insert into MUSIC_STATION.LIKES (USER_ID,MUSIC_ID,PL_ID,TYPE,LIKE_DATE) values ('jsw4795',19,null,'MUSIC',to_date('23/10/31','RR/MM/DD'));
REM INSERTING into MUSIC_STATION.MUSIC
SET DEFINE OFF;
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (3,'Ringo','t3',null,to_date('23/10/23','RR/MM/DD'),'musicPic2.jpg','ITZY-RINGO.mp3',93696);
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (4,'심','t4',null,to_date('23/10/23','RR/MM/DD'),'musicPic9.jpg','music04.mp3',46191);
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (5,'Eyes Roll','t5',null,to_date('23/10/23','RR/MM/DD'),'musicPic7.jpg','Eyes Roll.mp3',35961);
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (6,'Cake','t3',null,to_date('23/10/23','RR/MM/DD'),'musicPic3.jpg','ITZY-cake.mp3',131222);
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (7,'Loco','t3',null,to_date('23/10/23','RR/MM/DD'),'musicPic4.jpg','ITZY-loco.mp3',85789);
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (8,'Let''s Dance','t7',null,to_date('23/10/23','RR/MM/DD'),'musicPic8.jpg','LEE CHAE YEON LET''S DANCE Lyrics (Color Coded Lyrics).mp3',212089);
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (9,'다시 사랑한다면','t6',null,to_date('23/10/23','RR/MM/DD'),'musicPic10.jpg','If I Love Again.mp3',38502);
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (10,'트월ㅋ','t5',null,to_date('23/10/23','RR/MM/DD'),'musicPic11.jpg','How To Twerk (Prod. Czaer).mp3',306568);
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (11,'너, 너','t8','너, 너 (정보)',to_date('23/10/27','RR/MM/DD'),'musicPic12.jpeg','music11.mp3',143949);
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (12,'너를 생각해','t9','너를 생각해 (정보)',to_date('23/10/27','RR/MM/DD'),'musicPic13.jpg','music12.mp3',42002);
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (13,'보고 싶었어 가을 (금혼령 X 한동근)','t6','보고 싶었어 가을 (정보)',to_date('23/10/27','RR/MM/DD'),'musicPic14.jpg','music13.mp3',70853);
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (14,'축가','t10','보고 싶었어 가을 (정보)',to_date('23/10/27','RR/MM/DD'),'musicPic15.jpg','music14.mp3',84996);
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (15,'울어','t6','울어 (정보)',to_date('23/10/27','RR/MM/DD'),'musicPic16.jpg','music15.mp3',50559);
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (16,'회고록','t11','회고록 (정보)',to_date('23/10/27','RR/MM/DD'),'musicPic17.jpg','music16.mp3',14543);
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (18,'사랑했지만','t12','사랑했지만 (정보)',to_date('23/10/27','RR/MM/DD'),'musicPic18.jpg','music17.mp3',81292);
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (19,'ASAP','t13','ASAP (정보)',to_date('23/10/27','RR/MM/DD'),'musicPic19.jpg','music18.mp3',1399528);
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (20,'Shut Down','t14','Shut Down (정보)',to_date('23/10/27','RR/MM/DD'),'musicPic21.jpg','music19.mp3',2251179);
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (21,'포카리스웨트 (Feat.최미선)','t15','포카리스웨트 (Feat.최미선) (정보)',to_date('23/10/27','RR/MM/DD'),'musicPic20.jpg','music20.mp3',199502);
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (22,'Ready For Love','t14','Ready For Love (정보)',to_date('23/10/27','RR/MM/DD'),'musicPic22.jpg','music21.mp3',270933);
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (24,'찰나가 영원이 될 때(feat. MaRa Music friends)','t16','찰나가 영원이 될 때(feat. MaRa Music friends) (정보)',to_date('23/10/27','RR/MM/DD'),'musicPic23.jpg','music22.mp3',103533);
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (25,'Picture','t17','Picture (정보)',to_date('23/10/27','RR/MM/DD'),'musicPic24.jpg','music23.mp3',1808);
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (26,'Life''s Too Short','t18','Life''s Too Short (정보)',to_date('23/10/27','RR/MM/DD'),'musicPic25.jpg','music24.mp3',107048);
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (27,'건물 사이에 피어난 장미','t19','건물 사이에 피어난 장미 (정보)',to_date('23/10/27','RR/MM/DD'),'musicPic26.jpg','music25.mp3',300588);
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (28,'ZOOM ZOOM','t18','ZOOM ZOOM (정보)',to_date('23/10/27','RR/MM/DD'),'musicPic27.jpg','music26.mp3',1396676);
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (29,'Last Dance','t5','Last Dance (정보)',to_date('23/10/27','RR/MM/DD'),'musicPic28.jpg','music27.mp3',188228);
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (30,'퀸카 (Queencard)','t5','퀸카 (Queencard) (정보)',to_date('23/10/27','RR/MM/DD'),'musicPic29.jpg','music28.mp3',1029482);
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (31,'Nxde','t5','Nxde (정보)',to_date('23/10/27','RR/MM/DD'),'musicPic30.jpg','music29.mp3',277226);
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (32,'I Want That','t5','I Want That (정보)',to_date('23/10/27','RR/MM/DD'),'musicPic31.jpg','music30.mp3',502094);
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (33,'MY BAG','t5','MY BAG (정보)',to_date('23/10/27','RR/MM/DD'),'musicPic32.jpg','music31.mp3',214511);
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (34,'사랑해 Luv U','t5','사랑해 Luv U (정보)',to_date('23/10/27','RR/MM/DD'),'musicPic33.jpg','music32.mp3',387645);
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (35,'Change','t5','Change (정보)',to_date('23/10/27','RR/MM/DD'),'musicPic34.jpg','music33.mp3',245716);
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (36,'Spicy','t18','Spicy (정보)',to_date('23/10/27','RR/MM/DD'),'musicPic35.jpg','music34.mp3',716825);
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (37,'Hold On Tight','t18','Hold On Tight (정보)',to_date('23/10/27','RR/MM/DD'),'musicPic36.jpg','music35.mp3',360227);
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (38,'Savage','t18','Savage (정보)',to_date('23/10/27','RR/MM/DD'),'musicPic37.jpg','music36.mp3',581447);
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (39,'Next Level','t18','Next Level (정보)',to_date('23/10/27','RR/MM/DD'),'musicPic38.jpg','music37.mp3',951059);
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (40,'Better Things','t18','Better Things (정보)',to_date('23/10/27','RR/MM/DD'),'musicPic39.jpg','music38.mp3',225246);
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (41,'Black Mamba','t18','Black Mamba (정보)',to_date('23/10/27','RR/MM/DD'),'musicPic40.jpg','music39.mp3',905779);
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (42,'나쁜X','t20','나쁜X (정보)',to_date('23/10/27','RR/MM/DD'),'musicPic41.jpg','music40.mp3',798206);
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (43,'Baddie','t21','Baddie (정보)',to_date('23/10/30','RR/MM/DD'),'musicPic42.jpg','02. IVE - Baddie.mp3',1431224);
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (44,'I AM','t21','I AM (정보)',to_date('23/10/30','RR/MM/DD'),'musicPic43.jpg','02. I AM.mp3',597226);
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (45,'Kitsch','t21','Kitsch (정보)',to_date('23/10/30','RR/MM/DD'),'musicPic44.jpg','03. Kitsch.mp3',617801);
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (46,'LOVE DIVE','t21','LOVE DIVE (정보)',to_date('23/10/30','RR/MM/DD'),'musicPic45.jpg','LOVE DIVE.mp3',209591);
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (47,'ETA','t13','ETA (정보)',to_date('23/10/30','RR/MM/DD'),'musicPic46.jpg','ETA.mp3',703415);
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (48,'Super Shy','t13','Super Shy (정보)',to_date('23/10/30','RR/MM/DD'),'musicPic47.jpg','Super Shy.mp3',353427);
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (49,'Ditto','t13','Ditto (정보)',to_date('23/10/30','RR/MM/DD'),'musicPic48.jpg','Ditto.mp3',406272);
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (50,'이브, 프시케 그리고 푸른 수염의 아내','t22','이브, 프시케 그리고 푸른 수염의 아내 (정보)',to_date('23/10/30','RR/MM/DD'),'musicPic49.jpg','Eve psi.mp3',379865);
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (51,'UNFORGIVEN(feat. Nile Rodgers)','t22','UNFORGIVEN(feat. Nile Rodgers) (정보)',to_date('23/10/30','RR/MM/DD'),'musicPic50.jpg','unforgiven.mp3',682661);
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (52,'ANTIFRAGILE','t22','ANTIFRAGILE (정보)',to_date('23/10/30','RR/MM/DD'),'musicPic52.jpg','antifragile.mp3',974909);
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (53,'Fire in the belly','t22','Fire in the belly (정보)',to_date('23/10/30','RR/MM/DD'),'musicPic51.jpg','Fire in the belly.mp3',455932);
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (1,'헤어지자 말해요','t1',null,to_date('23/10/22','RR/MM/DD'),'musicPic5.jpg','music01.mp3',133790);
Insert into MUSIC_STATION.MUSIC (MUSIC_ID,TITLE,ARTIST,INFO,UPLOAD_DATE,PICTURE,FILE_NAME,VIEWS) values (2,'그래서 그대는','t2',null,to_date('23/10/22','RR/MM/DD'),'musicPic6.jpg','music02.mp3',25137);
REM INSERTING into MUSIC_STATION.MUSIC_LAST_LOG
SET DEFINE OFF;
REM INSERTING into MUSIC_STATION.MUSIC_LOG
SET DEFINE OFF;
REM INSERTING into MUSIC_STATION.USERS
SET DEFINE OFF;
Insert into MUSIC_STATION.USERS (USER_ID,PWD,NICKNAME,EMAIL,BIO,PICTURE,LOGIN,REG_DATE,SALT) values ('jsw4795','17043d9faa965e911d851e0902636d211b0f4d52fe60ae5fa914a68c08fdff2a','우기','test@naver.com','hihi','20231031194721574.jpeg','FALSE',to_date('23/10/25','RR/MM/DD'),'eb1156213d463291f99bbb14b41fd05e');
Insert into MUSIC_STATION.USERS (USER_ID,PWD,NICKNAME,EMAIL,BIO,PICTURE,LOGIN,REG_DATE,SALT) values ('t1','t','박재정','testID',null,'parkjejung.jpeg','FALSE',to_date('23/10/27','RR/MM/DD'),'t');
Insert into MUSIC_STATION.USERS (USER_ID,PWD,NICKNAME,EMAIL,BIO,PICTURE,LOGIN,REG_DATE,SALT) values ('t2','t','김길중','testID2',null,'defaultProfileImage.jpeg','FALSE',to_date('23/10/27','RR/MM/DD'),'t');
Insert into MUSIC_STATION.USERS (USER_ID,PWD,NICKNAME,EMAIL,BIO,PICTURE,LOGIN,REG_DATE,SALT) values ('t3','t','ITZY','testID3',null,'itzyPic.png','FALSE',to_date('23/10/27','RR/MM/DD'),'t');
Insert into MUSIC_STATION.USERS (USER_ID,PWD,NICKNAME,EMAIL,BIO,PICTURE,LOGIN,REG_DATE,SALT) values ('t4','t','DK(디셈버)','testID4',null,'defaultProfileImage.jpeg','FALSE',to_date('23/10/27','RR/MM/DD'),'t');
Insert into MUSIC_STATION.USERS (USER_ID,PWD,NICKNAME,EMAIL,BIO,PICTURE,LOGIN,REG_DATE,SALT) values ('t5','t','(G)I-DLE','testID5',null,'idl.png','FALSE',to_date('23/10/27','RR/MM/DD'),'t');
Insert into MUSIC_STATION.USERS (USER_ID,PWD,NICKNAME,EMAIL,BIO,PICTURE,LOGIN,REG_DATE,SALT) values ('t6','t','한동근','testID6',null,'defaultProfileImage.jpeg','FALSE',to_date('23/10/27','RR/MM/DD'),'t');
Insert into MUSIC_STATION.USERS (USER_ID,PWD,NICKNAME,EMAIL,BIO,PICTURE,LOGIN,REG_DATE,SALT) values ('t7','t','이채연','testID7',null,'leecheyun.png','FALSE',to_date('23/10/27','RR/MM/DD'),'t');
Insert into MUSIC_STATION.USERS (USER_ID,PWD,NICKNAME,EMAIL,BIO,PICTURE,LOGIN,REG_DATE,SALT) values ('t8','t','The Stray','testID8',null,'stray.jpg','FALSE',to_date('23/10/27','RR/MM/DD'),'t');
Insert into MUSIC_STATION.USERS (USER_ID,PWD,NICKNAME,EMAIL,BIO,PICTURE,LOGIN,REG_DATE,SALT) values ('t9','t','Joosiq','testID9',null,'defaultProfileImage.jpeg','FALSE',to_date('23/10/27','RR/MM/DD'),'t');
Insert into MUSIC_STATION.USERS (USER_ID,PWD,NICKNAME,EMAIL,BIO,PICTURE,LOGIN,REG_DATE,SALT) values ('t10','t','전우성','testID10',null,'defaultProfileImage.jpeg','FALSE',to_date('23/10/27','RR/MM/DD'),'t');
Insert into MUSIC_STATION.USERS (USER_ID,PWD,NICKNAME,EMAIL,BIO,PICTURE,LOGIN,REG_DATE,SALT) values ('t11','t','조광일','testID11',null,'defaultProfileImage.jpeg','FALSE',to_date('23/10/27','RR/MM/DD'),'t');
Insert into MUSIC_STATION.USERS (USER_ID,PWD,NICKNAME,EMAIL,BIO,PICTURE,LOGIN,REG_DATE,SALT) values ('t12','t','이예은, 전건호','testID12',null,'defaultProfileImage.jpeg','FALSE',to_date('23/10/27','RR/MM/DD'),'t');
Insert into MUSIC_STATION.USERS (USER_ID,PWD,NICKNAME,EMAIL,BIO,PICTURE,LOGIN,REG_DATE,SALT) values ('t13','t','NewJeans','testID13',null,'newjeans.png','FALSE',to_date('23/10/27','RR/MM/DD'),'t');
Insert into MUSIC_STATION.USERS (USER_ID,PWD,NICKNAME,EMAIL,BIO,PICTURE,LOGIN,REG_DATE,SALT) values ('t14','t','BLACKPINK','testID14',null,'blackpink.png','FALSE',to_date('23/10/27','RR/MM/DD'),'t');
Insert into MUSIC_STATION.USERS (USER_ID,PWD,NICKNAME,EMAIL,BIO,PICTURE,LOGIN,REG_DATE,SALT) values ('t15','t','거제국청년','testID15',null,'defaultProfileImage.jpeg','FALSE',to_date('23/10/27','RR/MM/DD'),'t');
Insert into MUSIC_STATION.USERS (USER_ID,PWD,NICKNAME,EMAIL,BIO,PICTURE,LOGIN,REG_DATE,SALT) values ('t16','t','마크툽','testID16',null,'marktup.png','FALSE',to_date('23/10/27','RR/MM/DD'),'t');
Insert into MUSIC_STATION.USERS (USER_ID,PWD,NICKNAME,EMAIL,BIO,PICTURE,LOGIN,REG_DATE,SALT) values ('t17','t','HYO','testID17',null,'hyo.png','FALSE',to_date('23/10/27','RR/MM/DD'),'t');
Insert into MUSIC_STATION.USERS (USER_ID,PWD,NICKNAME,EMAIL,BIO,PICTURE,LOGIN,REG_DATE,SALT) values ('t18','t','aespa','testID18',null,'aespa.png','FALSE',to_date('23/10/27','RR/MM/DD'),'t');
Insert into MUSIC_STATION.USERS (USER_ID,PWD,NICKNAME,EMAIL,BIO,PICTURE,LOGIN,REG_DATE,SALT) values ('t19','t','H1-KEY (하이키)','testID19',null,'hikey.png','FALSE',to_date('23/10/27','RR/MM/DD'),'t');
Insert into MUSIC_STATION.USERS (USER_ID,PWD,NICKNAME,EMAIL,BIO,PICTURE,LOGIN,REG_DATE,SALT) values ('t20','t','비비(BIBI)','testID20',null,'bibiPic.jpg','FALSE',to_date('23/10/27','RR/MM/DD'),'t');
Insert into MUSIC_STATION.USERS (USER_ID,PWD,NICKNAME,EMAIL,BIO,PICTURE,LOGIN,REG_DATE,SALT) values ('t21','t','IVE(아이브)','testID21',null,'ive.png','FALSE',to_date('23/10/30','RR/MM/DD'),'t');
Insert into MUSIC_STATION.USERS (USER_ID,PWD,NICKNAME,EMAIL,BIO,PICTURE,LOGIN,REG_DATE,SALT) values ('t22','t','LE SSERAFIM','testID22',null,'le sserafim.png','FALSE',to_date('23/10/30','RR/MM/DD'),'t');
Insert into MUSIC_STATION.USERS (USER_ID,PWD,NICKNAME,EMAIL,BIO,PICTURE,LOGIN,REG_DATE,SALT) values ('skyjn01','ee55546c5a2faf6d5af7260e8c1352f07a3a6ef0857cbd6c8b0d3e454751e873','Junyung','skyjn01@naver.com',null,'defaultProfileImage.jpeg','FALSE',to_date('23/11/01','RR/MM/DD'),'8c37c97e163813e0ed7cd38155e1e7b6');
--------------------------------------------------------
--  DDL for Index COMMENTS_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "MUSIC_STATION"."COMMENTS_PK" ON "MUSIC_STATION"."COMMENTS" ("COMMENT_ID") 
  ;
--------------------------------------------------------
--  DDL for Index EMAIL
--------------------------------------------------------

  CREATE UNIQUE INDEX "MUSIC_STATION"."EMAIL" ON "MUSIC_STATION"."USERS" ("EMAIL") 
  ;
--------------------------------------------------------
--  DDL for Index MEMBER_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "MUSIC_STATION"."MEMBER_PK" ON "MUSIC_STATION"."USERS" ("USER_ID") 
  ;
--------------------------------------------------------
--  DDL for Index MUSIC_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "MUSIC_STATION"."MUSIC_PK" ON "MUSIC_STATION"."MUSIC" ("MUSIC_ID") 
  ;
--------------------------------------------------------
--  DDL for Index NIKNAME
--------------------------------------------------------

  CREATE UNIQUE INDEX "MUSIC_STATION"."NIKNAME" ON "MUSIC_STATION"."USERS" ("NICKNAME") 
  ;
--------------------------------------------------------
--  DDL for Index COMMENTS_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "MUSIC_STATION"."COMMENTS_PK" ON "MUSIC_STATION"."COMMENTS" ("COMMENT_ID") 
  ;
--------------------------------------------------------
--  DDL for Index MUSIC_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "MUSIC_STATION"."MUSIC_PK" ON "MUSIC_STATION"."MUSIC" ("MUSIC_ID") 
  ;
--------------------------------------------------------
--  DDL for Index EMAIL
--------------------------------------------------------

  CREATE UNIQUE INDEX "MUSIC_STATION"."EMAIL" ON "MUSIC_STATION"."USERS" ("EMAIL") 
  ;
--------------------------------------------------------
--  DDL for Index MEMBER_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "MUSIC_STATION"."MEMBER_PK" ON "MUSIC_STATION"."USERS" ("USER_ID") 
  ;
--------------------------------------------------------
--  DDL for Index NIKNAME
--------------------------------------------------------

  CREATE UNIQUE INDEX "MUSIC_STATION"."NIKNAME" ON "MUSIC_STATION"."USERS" ("NICKNAME") 
  ;
--------------------------------------------------------
--  DDL for Trigger TR_MUSIC_LOG_TO_MUSIC_VIEW
--------------------------------------------------------

  CREATE OR REPLACE EDITIONABLE TRIGGER "MUSIC_STATION"."TR_MUSIC_LOG_TO_MUSIC_VIEW" 
BEFORE INSERT ON MUSIC_LOG 
FOR EACH ROW
BEGIN
    UPDATE MUSIC
    SET VIEWS = VIEWS + 1
    WHERE MUSIC_ID = :NEW.MUSIC_ID;
  
    MERGE INTO MUSIC_LAST_LOG    --<!-- MUSIC_LOG에 머지한다 -->
    USING DUAL				--<!-- 한 테이블만 비교한다 -->
    ON (USER_ID = :NEW.USER_ID AND MUSIC_ID = :NEW.MUSIC_ID)		--<!-- 입력받은 USER_ID와 MUSIC_ID가 이미 존재하는지 체크-->
    WHEN MATCHED THEN 		--<!-- 존재하면 -->
        UPDATE SET PLAY_DATE = SYSDATE  		--<!-- 현재 시간으로 업데이트 -->
    WHEN NOT MATCHED THEN 	--<!-- 존재하지 않으면 -->
        INSERT (USER_ID, MUSIC_ID, PLAY_DATE)	--<!-- 현재 시간으로 로그 인서트 -->
        VALUES (:NEW.USER_ID, :NEW.MUSIC_ID, SYSDATE);
END;
/
ALTER TRIGGER "MUSIC_STATION"."TR_MUSIC_LOG_TO_MUSIC_VIEW" ENABLE;
--------------------------------------------------------
--  DDL for Trigger TR_MUSIC_LOG_TO_MUSIC_VIEW
--------------------------------------------------------

  CREATE OR REPLACE EDITIONABLE TRIGGER "MUSIC_STATION"."TR_MUSIC_LOG_TO_MUSIC_VIEW" 
BEFORE INSERT ON MUSIC_LOG 
FOR EACH ROW
BEGIN
    UPDATE MUSIC
    SET VIEWS = VIEWS + 1
    WHERE MUSIC_ID = :NEW.MUSIC_ID;
  
    MERGE INTO MUSIC_LAST_LOG    --<!-- MUSIC_LOG에 머지한다 -->
    USING DUAL				--<!-- 한 테이블만 비교한다 -->
    ON (USER_ID = :NEW.USER_ID AND MUSIC_ID = :NEW.MUSIC_ID)		--<!-- 입력받은 USER_ID와 MUSIC_ID가 이미 존재하는지 체크-->
    WHEN MATCHED THEN 		--<!-- 존재하면 -->
        UPDATE SET PLAY_DATE = SYSDATE  		--<!-- 현재 시간으로 업데이트 -->
    WHEN NOT MATCHED THEN 	--<!-- 존재하지 않으면 -->
        INSERT (USER_ID, MUSIC_ID, PLAY_DATE)	--<!-- 현재 시간으로 로그 인서트 -->
        VALUES (:NEW.USER_ID, :NEW.MUSIC_ID, SYSDATE);
END;
/
ALTER TRIGGER "MUSIC_STATION"."TR_MUSIC_LOG_TO_MUSIC_VIEW" ENABLE;
--------------------------------------------------------
--  DDL for Synonymn DUAL
--------------------------------------------------------

  CREATE OR REPLACE NONEDITIONABLE PUBLIC SYNONYM "DUAL" FOR "SYS"."DUAL";
--------------------------------------------------------
--  Constraints for Table COMMENTS
--------------------------------------------------------

  ALTER TABLE "MUSIC_STATION"."COMMENTS" ADD CONSTRAINT "COMMENTS_PK" PRIMARY KEY ("COMMENT_ID")
  USING INDEX "MUSIC_STATION"."COMMENTS_PK"  ENABLE;
  ALTER TABLE "MUSIC_STATION"."COMMENTS" MODIFY ("TYPE" NOT NULL ENABLE);
  ALTER TABLE "MUSIC_STATION"."COMMENTS" MODIFY ("COMMENT_ID" NOT NULL ENABLE);
  ALTER TABLE "MUSIC_STATION"."COMMENTS" MODIFY ("COMMENT_CONTENT" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table LIKES
--------------------------------------------------------

  ALTER TABLE "MUSIC_STATION"."LIKES" MODIFY ("TYPE" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table MUSIC
--------------------------------------------------------

  ALTER TABLE "MUSIC_STATION"."MUSIC" MODIFY ("VIEWS" NOT NULL ENABLE);
  ALTER TABLE "MUSIC_STATION"."MUSIC" ADD CONSTRAINT "MUSIC_PK" PRIMARY KEY ("MUSIC_ID")
  USING INDEX "MUSIC_STATION"."MUSIC_PK"  ENABLE;
  ALTER TABLE "MUSIC_STATION"."MUSIC" MODIFY ("PICTURE" NOT NULL ENABLE);
  ALTER TABLE "MUSIC_STATION"."MUSIC" MODIFY ("TITLE" NOT NULL ENABLE);
  ALTER TABLE "MUSIC_STATION"."MUSIC" MODIFY ("MUSIC_ID" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table USERS
--------------------------------------------------------

  ALTER TABLE "MUSIC_STATION"."USERS" ADD CONSTRAINT "NIKNAME" UNIQUE ("NICKNAME")
  USING INDEX "MUSIC_STATION"."NIKNAME"  ENABLE;
  ALTER TABLE "MUSIC_STATION"."USERS" ADD CONSTRAINT "EMAIL" UNIQUE ("EMAIL")
  USING INDEX "MUSIC_STATION"."EMAIL"  ENABLE;
  ALTER TABLE "MUSIC_STATION"."USERS" ADD CONSTRAINT "MEMBER_PK" PRIMARY KEY ("USER_ID")
  USING INDEX "MUSIC_STATION"."MEMBER_PK"  ENABLE;
  ALTER TABLE "MUSIC_STATION"."USERS" MODIFY ("PICTURE" NOT NULL ENABLE);
  ALTER TABLE "MUSIC_STATION"."USERS" MODIFY ("EMAIL" NOT NULL ENABLE);
  ALTER TABLE "MUSIC_STATION"."USERS" MODIFY ("NICKNAME" NOT NULL ENABLE);
  ALTER TABLE "MUSIC_STATION"."USERS" MODIFY ("PWD" NOT NULL ENABLE);
  ALTER TABLE "MUSIC_STATION"."USERS" MODIFY ("USER_ID" NOT NULL ENABLE);
  ALTER TABLE "MUSIC_STATION"."USERS" MODIFY ("LOGIN" NOT NULL ENABLE);
  ALTER TABLE "MUSIC_STATION"."USERS" MODIFY ("REG_DATE" NOT NULL ENABLE);
  ALTER TABLE "MUSIC_STATION"."USERS" ADD CONSTRAINT "USERS_CHK1" CHECK (LOGIN IN ('TRUE', 'FALSE')) ENABLE;
  ALTER TABLE "MUSIC_STATION"."USERS" MODIFY ("SALT" NOT NULL ENABLE);
--------------------------------------------------------
--  Ref Constraints for Table COMMENTS
--------------------------------------------------------

  ALTER TABLE "MUSIC_STATION"."COMMENTS" ADD CONSTRAINT "COMMENTS_FK1" FOREIGN KEY ("USER_ID")
	  REFERENCES "MUSIC_STATION"."USERS" ("USER_ID") ON DELETE CASCADE ENABLE;
  ALTER TABLE "MUSIC_STATION"."COMMENTS" ADD CONSTRAINT "COMMENTS_FK2" FOREIGN KEY ("MUSIC_ID")
	  REFERENCES "MUSIC_STATION"."MUSIC" ("MUSIC_ID") ON DELETE CASCADE ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table LIKES
--------------------------------------------------------

  ALTER TABLE "MUSIC_STATION"."LIKES" ADD CONSTRAINT "LIKES_FK1" FOREIGN KEY ("MUSIC_ID")
	  REFERENCES "MUSIC_STATION"."MUSIC" ("MUSIC_ID") ON DELETE CASCADE ENABLE;
  ALTER TABLE "MUSIC_STATION"."LIKES" ADD CONSTRAINT "LIKES_FK3" FOREIGN KEY ("USER_ID")
	  REFERENCES "MUSIC_STATION"."USERS" ("USER_ID") ON DELETE CASCADE ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table MUSIC
--------------------------------------------------------

  ALTER TABLE "MUSIC_STATION"."MUSIC" ADD CONSTRAINT "MUSIC_FK1" FOREIGN KEY ("ARTIST")
	  REFERENCES "MUSIC_STATION"."USERS" ("USER_ID") ON DELETE CASCADE ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table MUSIC_LAST_LOG
--------------------------------------------------------

  ALTER TABLE "MUSIC_STATION"."MUSIC_LAST_LOG" ADD CONSTRAINT "MUSIC_LAST_LOG_FK1" FOREIGN KEY ("USER_ID")
	  REFERENCES "MUSIC_STATION"."USERS" ("USER_ID") ON DELETE CASCADE ENABLE;
  ALTER TABLE "MUSIC_STATION"."MUSIC_LAST_LOG" ADD CONSTRAINT "MUSIC_LAST_LOG_FK2" FOREIGN KEY ("MUSIC_ID")
	  REFERENCES "MUSIC_STATION"."MUSIC" ("MUSIC_ID") ON DELETE CASCADE ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table MUSIC_LOG
--------------------------------------------------------

  ALTER TABLE "MUSIC_STATION"."MUSIC_LOG" ADD CONSTRAINT "MUSIC_LOG_FK1" FOREIGN KEY ("USER_ID")
	  REFERENCES "MUSIC_STATION"."USERS" ("USER_ID") ON DELETE CASCADE ENABLE;
  ALTER TABLE "MUSIC_STATION"."MUSIC_LOG" ADD CONSTRAINT "MUSIC_LOG_FK2" FOREIGN KEY ("MUSIC_ID")
	  REFERENCES "MUSIC_STATION"."MUSIC" ("MUSIC_ID") ON DELETE CASCADE ENABLE;
