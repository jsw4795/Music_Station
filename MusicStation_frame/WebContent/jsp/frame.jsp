<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Music Station</title>
<link rel="stylesheet" href="/frame/css/audioPlay.css" />
<link rel="stylesheet" href="/frame/css/navBar.css" />
<!-- 제목 아이콘 404오류 해결 -->
<link rel="icon" href="data:;base64,iVBORw0KGgo=">
<script src="https://code.jquery.com/jquery-3.7.1.min.js" ></script>


</head>
<body>
	<!-- 상단 메뉴바 -->
	<div id="navBackground">
		<input type="hidden" id="userId" value="${userVO.userId }" />
		<div id="navContainer">
			<a id="homeBtn" class="btn navBtn" >HOME</a>
			<a id="topBtn" class="btn navBtn" >TOP</a>
			<div id="searchContainer">
				<input type="text" id="keyword" placeholder="Search" />
				<img id="searchBtn" class="btn" src="/frame/resources/images/icons/icon-search.png" />
			</div>
			<a id="uploadBtn" class="btn navBtn" data-location="upload">UPLOAD</a><!-- float right 라서 반대로 -->
			<div id="nowProfileContainer" class="btn">
				<div id="profilePicContainer">
					<img id="nowProfilePic" src="/main/resources/images/profile/${userVO.picture }" />
				</div>
				<img src="/main/resources/images/icons/icon-down.png" />
				<div id="profileMenuContainer" hidden="hidden">
					<div id="profileInfoBtn" class="profileMenuBtn btn">
						<img src="/main/resources/images/icons/icon-profile.png"/>
						<span>Profile</span>
					</div>
					<div id="profileLikeBtn" class="profileMenuBtn btn">
						<img src="/main/resources/images/icons/icon-like.png"/>
						<span>Likes</span>
					</div>
					<div id="profileLogoutBtn" class="profileMenuBtn btn">
						<img src="/main/resources/images/icons/icon-logout.png"/>
						<span>Logout</span>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<!-- 컨텐츠 들어올 곳 -->
	<div id="container">
	
	</div>
	<div id="emptySpace"></div>
	<!-- 재생바 -->
	<div id="playerBackground" >
		<div id="audio-player-container" >	
							<!-- 현재 재생중인 곡의 플리 번호 --><!-- 재생중인 곡의 musicId -->
			<audio src="" preload="metadata" data-music_num="" data-music_id=""></audio>
			<!-- 지금 바로 재생할지 확인하기위해 존재 (음악 요소에서 바로 재생버튼 눌렀을 때) -->
			<input id="playNowOrNot" type="hidden" value="" /> 
			<!-- 현재 재생중인 음악이 없을 때 재생목록에 추가했으면 바로 재생중인 곡으로 설정하기 위해 필요 -->
			<input id="addNowPlaying" type="hidden" value="" />
			<!-- 현재 재생목록에 떠있는 음악의 재생버튼을 클릭하면을 알리기위해 필요 -->
			<input type="hidden" id="continueOrStop" value="" />
			<div id="playBtsContainer" class="playerInnerContainer">
				<img id="before-icon" class="playerBtn btn" src="./resources/images/icons/icon-music-before.png" />
				<img id="play-icon" class="playerBtn btn" src="./resources/images/icons/icon-play.png" />
				<img id="next-icon" class="playerBtn btn" src="./resources/images/icons/icon-music-next.png" />
			</div>
			<div id="trackContainer" class="playerInnerContainer">
				<span id="current-time" class="time">0:00</span>
		  		<input type="range" id="seek-slider" max="100" value="0">
				<span id="duration" class="time">0:00</span>
			</div>
			<div id="volumeContainer" class="playerInnerContainer">
				<output id="volume-output" hidden="true">100</output>
				<div id="volume-slide-container">
					<input type="range" id="volume-slider" max="100" value="100">
				</div>
				<img id="mute-icon" class="playerBtn btn" src="./resources/images/icons/icon-volume-max.png" />
			</div>
			
			<div id="nowPlayContainer" class="playerInnerContainer">
				<div id="playingMusicPictureContainer" class="musicPictureContainer" >
					<img src="/main/resources/images/musicPic/defaultMusicPic.png" id="playingMusicPicture" class="musicPicture-small btn" />
				</div>
				<div id="playingTitleContainer" class="titleContainer">
					<span id="playingArtist" class="artist-small btn" data-artist="">Artist</span>
					<div class="musicTitleContainer">
						<span id="playingMusicTitle" class="musicTitle-small btn">음악을 추가하세요</span>
					</div>
				</div>
			</div>
			<div id="playList" hidden="true">
				<div id="playListTop">
					<h3>playList</h3>
					<img id="closeBtn" class="btn" src="./resources/images/icons/icon-close.png" />
				</div>
				<div id="playListMain" data-index="2">
					
				</div>
			</div>
			<img id="playList-icon" class="playerBtn btn" src="./resources/images/icons/icon-playList.png" />
			<img id="like-icon" class="likeBtn btn" src="./resources/images/icons/icon-like-not.png" data-music_id="" />
			
		</div>
	</div>


<script src="/frame/js/navBar.js" type="text/javascript"></script>
<script src="/frame/js/audioPlay.js" type="text/javascript"></script>
<script src="/frame/js/musicContainerFunction.js" type="text/javascript"></script>
</body>
</html>