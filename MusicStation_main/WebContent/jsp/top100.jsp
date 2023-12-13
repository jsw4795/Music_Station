<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>TOP 100</title>
<link rel="stylesheet" href="/main/css/top100Style.css" />
</head>
<body>
	<div id="top100Container">
		<h1>TOP100</h1>
		<div id="chooseTopContainer">
			<div id="chooseHistoricalTop" class="chooseTopBtn" >
				<span>Historical</span>
			</div>
			<div id="chooseWeeklyTop" class="chooseTopBtn" >
				<span>Weekly</span>
			</div>
		</div>
		<table>
			<colgroup>
				<col style="width: 15px"><!-- checkbox XXXX -->
				<col style="width: 62px"><!-- 순서 & 순위 -->
				<col style="width: 50px"><!-- 순위등락 XXXX -->
				<col style="width: 60px"><!-- 앨범이미지 -->
				<col style="width: 24px"><!-- 곡 상세가기 XXXX -->
				<col style="width: 282px"><!-- 곡정보 -->
				<col style="width: 190px"><!-- 앨범 -->
				<col style="width: 111px"><!-- 좋아요 -->
				<col style="width: 109px"><!-- 재생목록에 추가 -->
				<col style="width: 109px"><!-- 다음곡으로 재생 -->
			</colgroup>
			<thead>
				<tr>
					<th scope="col">
						<div class="wrap t_right"></div>
					</th>
					<th scope="col">
						<div class="wrap t_center"><span class="rank">순위</span></div>
					</th>
					<th scope="col">
						<div class="wrap none">순위등락</div> <!-- 안씀 -->
					</th>
					<th scope="col">
						<div class="wrap none">앨범이미지</div>
					</th>
					<th scope="col">
						<div class="wrap none">곡 상세가기</div> <!-- 안씀 -->
					</th>
					<th scope="col">
						<div class="wrap pd_l_12">곡정보</div>
					</th>
					<th scope="col">
						<div class="wrap pd_l_12">조회수</div> 
					</th>
					<th scope="col">
						<div class="wrap pd_l_40">좋아요</div>
					</th>
					<th scope="col">
						<div class="wrap t_center">재생목록에 추가</div>
					</th>
					<th scope="col">
						<div class="wrap t_center">다음곡으로 재생</div>
					</th>
				</tr>
			</thead>
			<tbody>
				
				<c:forEach var="music" varStatus="status" items="${top100List }">
					<!-- musicId는 tr태그에 저장 -->
					<tr data-music_id="${music.musicId }"> 
						<td><div class="wrap t_right"></div></td>
						<td><div class="wrap t_center"><span class="rank ">${status.count }</span><span class="none">위</span></div></td>
						<!-- 차트순위 추가 (((안씀)))) -->
						<td><div class="wrap">
							
						</div></td>
						<!-- 곡 사진 -->
						<td><div class="wrap">
							<div class="top100PlayContainer btn">
								<img title="듣기" class="button_icons btn top100Play" src="/main/resources/images/icons/icon-playing.png"></img>
							</div>
							<a class="image_typeAll">
								<img width="60" height="60" src="/main/resources/images/musicPic/${music.picture }">
								<span class="bg_album_frame"></span>
							</a>
						</div></td>
						<td><div class="wrap">
							<a class="btn button_icons type03 song_info"><span class="none">곡정보</span></a>
						</div></td>
						<!-- 제목 -->
						<td><div class="wrap">
							<div class="wrap_song_info">
								<div class="ellipsis rank01"><span>
									<span class="btn musicTitle-small">${music.title }</span>
								</span></div>
								<br>
								<div class="ellipsis rank02">
									<span class="btn artist-small" data-artist="${music.artist }">${music.artistNickname }</span>
								</div>
							</div>
						</div></td>
						<!-- 조회수 -->
						<td><div class="wrap">
							<div class="wrap_song_info">
								<div class="ellipsis rank03">
									<a><fmt:formatNumber value="${music.views }" type="number" /> 회</a>
								</div>
							</div>
						</div></td>
						<!-- 좋아요 -->
						<td><div class="wrap t_center">
						<img class="button_etc btn like" data-music_id="${music.musicId }" src="/main/resources/images/icons/icon-like-not.png"></img>
						</div></td>
						<!-- 재생목록에 추가 -->
						<td><div class="wrap t_center">
							<img class="button_icons btn top100AddPlayList" src="/main/resources/images/icons/icon-top100-addPlayList.png"></img>
						</div></td>
						<!-- 다음곡으로 재생 -->
						<td><div class="wrap t_center">
							<img class="button_icons btn top100AddNext " src="/main/resources/images/icons/icon-top100-addNextMusic.png"></img>
						</div></td>
					</tr>
				</c:forEach>
			</tbody>
		</table>
		
		
	</div>
<script src="/main/js/top100.js" type="text/javascript"></script>
</body>
</html>