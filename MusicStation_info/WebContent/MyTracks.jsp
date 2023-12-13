<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>My Track 보여주기 page</title>
<style>
	
</style>
</head>
<body>
	<h2>TRACKS</h2>

	<c:if test="${empty musics}">
		<td colspan="6" align="center" height="100">등록된 게시물이 없습니다.</td>
	</c:if>

	<c:forEach var="music" items="${musics }">
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
</body>
</html>