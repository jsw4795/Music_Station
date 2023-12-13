<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>리스트 검색</title>
<link rel="stylesheet" type="text/css" href="/search/idxStyle.css">
<link rel="stylesheet" type="text/css" href="/main/css/mainStyle.css">
<link rel="stylesheet" type="text/css" href="/search/list.css">
<link rel="stylesheet" type="text/css" href="/search/dropdown.css">
<link rel="stylesheet" type="text/css" href="/search/profile.css">
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
</head>
<body>
	<div id="searchContainer" style="width: 1240px;">
		<br>
		<br>
		<div class="two alt-two" id = "data" data-keyword="<%=request.getParameter("keyword")%>">
		  <h1>EveryThing
		    <span>Search</span>
		  </h1>
		</div>
	      
	     <div class="dropdown">
              <div class="dropdown-menu">EveryThing</div>
              <div class="dropdown-content">
                  <a id="all" class="btn">EveryThing</a>
                  <a id="tracks" class="btn">Tracks</a>
                  <a id="users" class="btn">People</a>
              </div>
	     </div>
	      <div class = "two alt-two">
	      	<h1>Tracks
	      		<span>Tracks</span>
	      	</h1>
	      </div>
	 	<c:forEach var="music" items="${list1 }">
			<div class="musicContainer" data-music_idx="${music.musicId }">
			<div class="musicPicContainer">
				<div class="selector btn" hidden="hidden">
					<div class="musicLikeBtnContainer" >
						<img src="/main/resources/images/icons/icon-like-not-white.png" data-music_id="${music.musicId }"/>
					</div>
					<div class="musicMenuBtnContainer btn">
						<img class="musicMenuBtn" src="/main/resources/images/icons/icon-menu-small.png" />
					</div>
					<div class="menuContainer" hidden="hidden">
						<div class="addPlayList">
							<span class="addPlayListText">현재 재생목록에 추가</span>
						</div>
						<div class="addNext">
							<span class="addNextText">다음으로 재생</span>
						</div>
					</div>
					<div class="playBtnContainer btn">
						<img class="playBtn" src="/main/resources/images/icons/icon-playing.png"  />
					</div>
				</div>
				<img src="/main/resources/images/musicPic/${music.picture }" class="musicPic" />
			</div>
			<div class="titleContainer">
				<div class="musicTitleContainer">
					<span class="musicTitle-small btn">${music.title }</span>
				</div>
				<span class="artist-small btn" data-artist="${music.artist }">${music.artistNickname }</span>
			</div>
		</div>
		</c:forEach>
	 	 <br>
	 	 <br>
	 	 <br> 
	 	 <div class = "two alt-two">
	      	<h1>People
	      		<span>People</span>
	      	</h1>
	     </div>
	 	 <h1></h1>
		  <c:forEach var="user" items="${list2}">	
	   		<div class = "usercontainer btn"> 
			  	<div class="box" style="background: #BDBDBD;">
		    		<img class="profile" src="/main/resources/images/profile/${user.picture}">
				</div>
				<div class = "bio">${user.bio}</div>
				<div class = "nickname"><span class="btn artist-small" data-artist="${user.userId }">${user.nickname}</span></div>
			</div>
		 </c:forEach>
	</div>
<script src="/search/search.js" type="text/javascript"></script>
</body>
</html>