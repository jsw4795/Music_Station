<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>리스트 검색</title>
</head>
<link rel="stylesheet" type="text/css" href="/search/idxStyle.css">
<link rel="stylesheet" type="text/css" href="/main/css/mainStyle.css">
<link rel="stylesheet" type="text/css" href="/search/list.css">
<link rel="stylesheet" type="text/css" href="/search/dropdown.css">
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<body>
	<div id="searchContainer" style="width: 1240px;">
	<br>
	<br>
		<div class="two alt-two" id = "data" data-keyword="<%=request.getParameter("keyword")%>">
		  <h1>Tracks
		    <span>Search</span>
		  </h1>
		</div>
	      <div class="dropdown">
			<div class="dropdown-menu">Tracks</div>
				<div class="dropdown-content">
				    <a id = "all" class="btn">EveryThing</a>
				    <a id = "tracks" class="btn">Tracks</a>
				    <a id = "users" class="btn">People</a>
				</div>
	      </div> 
	            
		<c:forEach var="music" items="${list }">
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
	</div>
<script src="/search/search.js" type="text/javascript"></script>
</body>
</html>