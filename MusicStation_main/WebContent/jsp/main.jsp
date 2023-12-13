<%@page import="java.util.Random"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
<link rel="stylesheet" href="/main/css/mainStyle.css" />
<script src="https://code.jquery.com/jquery-3.7.1.min.js" ></script>
<script src="/main/js/main.js?rndnum=<%= new Random().nextLong() %>" type="module"></script>
</head>
<body>
	
	<c:if test="${recent10List.size() > 0 }">
		<div class="banner-wrap" id="recentlyPlayedMusics">
			<h2>Recently Listened Musics</h2>
			<p>최근 들은 곡</p>
			<div class="leftBtn btn onHover">
				<img src="/main/resources/images/icons/icon-left.png" />
			</div>
			<div class="rightBtn btn onHover">
				<img src="/main/resources/images/icons/icon-right.png" />
			</div>
			<div class="banner-frame">
				<div class="banner">
					
					<!-- DB에서 뽑은 데이터 List 사용 -->
					<c:forEach var="music" items="${recent10List }">
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
			</div>
		</div>
	<hr />
	</c:if>
	<c:if test="${top10List.size() > 0 }">
		<div class="banner-wrap" id="top10">
			<h2>Historical TOP 10</h2>
			<p>역대 인기순위 TOP 10</p>
			<span class="goHistoricalTop100 btn showMoreBtn" >더보기</span>
			<div class="leftBtn btn onHover">
				<img src="/main/resources/images/icons/icon-left.png" />
			</div>
			<div class="rightBtn btn onHover">
				<img src="/main/resources/images/icons/icon-right.png" />
			</div>
			<div class="banner-frame">
				<div class="banner">
					
					<!-- DB에서 뽑은 데이터 List 사용 -->
					<c:forEach var="music" items="${top10List }">
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
			</div>
		</div>
	<hr />
	</c:if>
	<c:if test="${recentWeekTop10List.size() > 0 }">
		<div class="banner-wrap" id="weekTop10">
			<h2>Weekly Top10</h2>
			<p>주간 Top10</p>
			<span class="goWeeklyTop100 btn showMoreBtn" >더보기</span>
			<div class="leftBtn btn onHover">
				<img src="/main/resources/images/icons/icon-left.png" />
			</div>
			<div class="rightBtn btn onHover">
				<img src="/main/resources/images/icons/icon-right.png" />
			</div>
			<div class="banner-frame">
				<div class="banner">
					
					<!-- DB에서 뽑은 데이터 List 사용 -->
					<c:forEach var="music" items="${recentWeekTop10List }">
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
			</div>
		</div>
	<hr />
	</c:if>
	<c:if test="${upload10List.size() > 0 }">
		<div class="banner-wrap" id="recentlyUploadedMusics">
			<h2>Recently Uploaded Musics</h2>
			<p>최근 업로드된 곡</p>
			<div class="leftBtn btn onHover">
				<img src="/main/resources/images/icons/icon-left.png" />
			</div>
			<div class="rightBtn btn onHover">
				<img src="/main/resources/images/icons/icon-right.png" />
			</div>
			<div class="banner-frame">
				<div class="banner">
					
					<!-- DB에서 뽑은 데이터 List 사용 -->
					<c:forEach var="music" items="${upload10List }">
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
			</div>
		</div>
	</c:if>
	
	

</body>
</html>