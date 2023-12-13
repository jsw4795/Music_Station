// 엘리먼트 변수에 저장
const playIconContainer = document.getElementById('play-icon');
const volumeIconContainer = document.getElementById('mute-icon');

// 버튼 경로
const playerIconPath = "resources/images/icons/";


// 오디오 변수
const audio = document.querySelector('audio');
// 오디오의 길이
const durationContainer = document.getElementById('duration');
// 컨테이너
const audioPlayerContainer = document.getElementById("audio-player-container");
// 볼륨 슬라이드 컨테이너
const volumeSlideContainer = document.getElementById('volume-slide-container');
// 볼륨 컨테이너
const volumeContainer = document.getElementById('volumeContainer');




// 각 버튼들의 상태를 저장하는 변수
var playState = 'play';
var muteState = 'unMute'; 
var lastVolume = audio.volume;

// 음악 재생중일 때 뭐시기
let raf = null;


const whilePlaying = () => {
  seekSlider.value = Math.floor(audio.currentTime);
  currentTimeContainer.textContent = calculateTime(seekSlider.value);
  audioPlayerContainer.style.setProperty('--seek-before-width', `${seekSlider.value / seekSlider.max * 100}%`);
  raf = requestAnimationFrame(whilePlaying);
}

// 이벤트 발생시 현재 상태에 따라 함수 실행
// adds an event listener to the button so that when it is clicked, the the player toggles between play and pause



// 음소거 버튼 클릭 시 
volumeIconContainer.addEventListener('click', () => {
  if(muteState === 'unMute') {
    lastVolume = audio.volume;
    audio.volume = 0;
    muteState = 'mute';
    setVolumeIcon();
  } else {
    audio.volume = lastVolume;
    muteState = 'unMute';
    setVolumeIcon();
  }
});

// 볼륨 버튼에 마우스 올라오면 설정 창 띄움
volumeIconContainer.addEventListener('mouseover', () => {
	volumeSlideContainer.style.visibility = "visible";
});
// 마우스 나가면 사라짐
volumeContainer.addEventListener('mouseleave', () => {
	volumeSlideContainer.style.visibility = "hidden";
});

// 현재 볼륨에 따라 볼륨 아이콘 설정
function setVolumeIcon() {
	if(audio.volume > 0.8){
		if(volumeIconContainer.getAttribute("src") != playerIconPath + "icon-volume-max.png")
			volumeIconContainer.setAttribute("src", playerIconPath + "icon-volume-max.png")
	} else if(audio.volume > 0.3) {
		if(volumeIconContainer.getAttribute("src") != playerIconPath + "icon-volume-normal.png")
			volumeIconContainer.setAttribute("src", playerIconPath + "icon-volume-normal.png")
	} else if(audio.volume > 0) {
		if(volumeIconContainer.getAttribute("src") != playerIconPath + "icon-volume-low.png")
			volumeIconContainer.setAttribute("src", playerIconPath + "icon-volume-low.png")
	} else {
		volumeIconContainer.setAttribute("src", playerIconPath + "icon-volume-mute.png")
	}
}

// 좋아요 버튼
const likeBtn = document.getElementById('like-icon');
let likeState = 'notLike';

likeBtn.addEventListener('click', () => {
	if(likeState == 'notLike'){
		likeBtn.setAttribute("src", playerIconPath + "icon-like.png");
		likeState = 'like';
	} else {
		likeBtn.setAttribute("src", playerIconPath + "icon-like-not.png");
		likeState = 'notLike';
	}
});

// 플레이리스트 버튼
const playListBtn = document.getElementById('playList-icon');
// 플레이리스트 컨테이너
const playListContainer = document.getElementById('playList');
let playListState = 'hidden';

// 플레이리스트 버튼 클릭 시
playListBtn.addEventListener('click', () => {
  if(playListState == "hidden") {
	  playListContainer.removeAttribute("hidden");
	  playListState = 'visible'
  } else {
	  playListContainer.setAttribute("hidden", true);
	  playListState = 'hidden';
  }
});

//------------------- 기능-------------------

// 현재 재생중은 음원의 길이 가져와서 최대값에 저장


// 시간을 hh:mm 형식에 맞게 변환
const calculateTime = (secs) => {
  const minutes = Math.floor(secs / 60);
  const seconds = Math.floor(secs % 60);
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${minutes}:${returnedSeconds}`;
}

// 음원 최대길이 출력
const displayDuration = () => {
  durationContainer.textContent = calculateTime(audio.duration);
}

// 메타 데이터를 불러왔으면 바로 최대길이를 표시하고, 아니면 불러왔을때 표시
if (audio.readyState > 0) {
  displayDuration();
} else {
  audio.addEventListener('loadedmetadata', () => {
    displayDuration();
  });
}


// 슬라이더

const seekSlider = document.getElementById('seek-slider');

// 슬라이더의 최대값 설정하는 함수
const setSliderMax = () => {
  seekSlider.max = Math.floor(audio.duration);
}

// 메타 데이터를 불러왔으면 바로 최대길이를 표시하고, 아니면 불러왔을때 표시
if (audio.readyState > 0) {
  displayDuration();
  setSliderMax();
} else {
  audio.addEventListener('loadedmetadata', () => {
    displayDuration();
    setSliderMax();
  });
}

// 현재 슬라이더 시간
const currentTimeContainer = document.getElementById('current-time');

// 슬라이더에 값이 들어오면 현재 시간표시
seekSlider.addEventListener('input', () => {
  currentTimeContainer.textContent = calculateTime(seekSlider.value);
  audioPlayerContainer.style.setProperty('--seek-before-width', `${seekSlider.value / seekSlider.max * 100}%`);
  if(!audio.paused) {
    cancelAnimationFrame(raf);
  }
});

seekSlider.addEventListener('change', () => {
  audio.currentTime = seekSlider.value;
  audioPlayerContainer.style.setProperty('--seek-before-width', `${seekSlider.value / seekSlider.max * 100}%`);
  if(!audio.paused) {
    requestAnimationFrame(whilePlaying);
  }
});



// 오디오

const volumeSlider = document.getElementById('volume-slider');
const volueOutputContainer = document.getElementById('volume-output');

// 슬라이드 뒷 배경 기본값 지정
  audioPlayerContainer.style.setProperty('--volume-before-width', `${volumeSlider.value / volumeSlider.max * 100}%`);

// 볼륨 슬라이더 값이 들어오면(바뀌면) 값에 따라 볼륨 숫자 바뀌고, 오디오 볼륨 설정
volumeSlider.addEventListener('input', (e) => {
  audioPlayerContainer.style.setProperty('--volume-before-width', `${volumeSlider.value / volumeSlider.max * 100}%`);
  const value = e.target.value;
  volueOutputContainer.textContent = value;
  audio.volume = value / 100;
  setVolumeIcon();
});

// 버퍼
/* 버퍼 보류
let bufferedAmount;

if(audio.buffered.length > 0){
	bufferedAmount = audio.buffered.end(audio.buffered.length - 1);
}else {
	bufferedAmount = volumeSlider.max;
}
*/

//let bufferedAmount = volumeSlider.max;
// css에서 적용될 --buffered-width 에 값 저장 (바로 반영)
//audioPlayerContainer.style.setProperty('--buffered-width', `${bufferedAmount / volumeSlider.max * 100}%`);
  
  
// 현재 플레이 리스트에서 노래 재생 구현 시작.!


$(() => {
	const playingArtist = $("#playingArtist");
	const playingMusicTitle = $("#playingMusicTitle");
	
	// 초기화 
	// (현재 재생곡에 재생목록에 있는 첫 번째 곡을 넣음)
	// (없으면 그대로 두기)
	/*if($(".music").length > 0) {
		let firstMusic = $(".music").first().find("[data-music_src]");
		let src = firstMusic.data("music_src");
		let music_num = firstMusic.data("music_num");
		$("audio").attr("src", src);
		$("audio").attr("data-music_num", music_num)
		let artist = firstMusic.next().find(".artist-small").text();
		let title = firstMusic.next().find(".musicTitle-small").text();
		$("#playingArtist").text(artist);
		$("#playingMusicTitle").text(title);
		firstMusic.find(".playingImgContainer").removeAttr("hidden");
		firstMusic.parent().css({"background-color" : "rgb(220, 220, 220)"});
		firstMusic.parent().find(".playListMenuContainer").removeAttr("hidden");
		firstMusic.parent().find(".playListDelete").attr("hidden", "hidden");
	}*/
	
	// 플레이버튼 클릭 시 
	$("#play-icon").on('click', function() {
		if(playState === 'play') {
			// 오디오 소스가 존재 할 때만 실행
			if($("audio").attr("src") != ""){
				playNowMusic();
		    }
		} else {
			let nowMusic = findNowMusic();
			stopMusic();
		}
	});
	
	// 플리에서 음악 사진 클릭 시 재생
	// (재생중인 음악 사진 클릭하면 정지)
	$(document).on("click", ".play", function() { // 이렇게 해야 동적으로 생긴 요소도 찾아짐
		// 재생중인 음악이 아니라면 바로 플레이		
		if($(this).find(".playingImgContainer").attr("hidden") == "hidden"){
			playMusic(this);
		} else {
			// 음악 정지 상태 (재생 버튼이 플레이 모양이라는 뜻)
			if(playState == "play") {
				playNowMusic();
			} else {
				stopMusic();
			}
		}
	});
	
	// 플리에서 음악위에 마우스 올리면 배경색 바뀜, 메뉴 보임
	$(document).on("mouseover", ".music .musicInfo", function() {
		$(this).css({"background-color" : "rgb(220, 220, 220)"});
		$(this).find(".playListMenuContainer").removeAttr("hidden");
	});
	
	// 마우스 내리면 다시 하얀색
	$(document).on("mouseleave", ".music .musicInfo", function() {
		// 재생중인 곡이 아닐 때만 하얀색으로
		if($(this).find(".playingImgContainer").attr("hidden") == "hidden"){
			$(this).css({"background-color" : "white"});
			$(this).find(".playListMenuContainer").attr("hidden", "hidden");
		}
	});
	
	// 플리에서 곡 삭제버튼 클릭 시
	$(document).on("click", ".playListDelete", function() {
		// 재생중일때는 안보이게 해놨지만 한번 더 재생중인지 확인
		if($(this).closest(".music").find(".playingImgContainer").attr("hidden") == "hidden"){
			$(this).closest(".music").remove();
		}
	});
	
	// 다음곡 재생 클릭 시
	$("#next-icon").on("click", function() {
		if($("audio").attr("src") == "") return;
		let nextMusic = findNextMusic();
		playMusic(nextMusic);
	})
	
	// 이전곡 재생 클릭 시
	$("#before-icon").on("click", function() {
		if($("audio").attr("src") == "") return;
		let prevMusic = findPrevMusic();
		playMusic(prevMusic);
	})
	
	// 플레이리스트에서 닫기버튼 클릭 시 
	$("#closeBtn").on("click", function() {
		$("#playList").attr("hidden", "hidden");
		playListState = 'hidden';
	})
	
	// 화면에서 재생버튼 눌렀을 때 바로 재생
	// (#playNowOrNot value 에 play 입력 되면 바로 재생)
	// main 쪽에서 강제로 click 이벤트 발생시킬거임
	$("#playNowOrNot").on("click", function() {
		console.log("#playNowOrNot 변경");
		if($(this).val() == "play") {
			$(this).val("");
			playMusic($("#playListMain").children().last().find(".play"));
		}
	})
	
	// 현재 재생중인 곡이 없을 떄 재생목록에 곡을 추가하면 클릭 이벤트 발생
	// 그러면 재생목록에 있는 곡(하나밖에 없음)을 현재 재생중인 음악으로 설정
	$("#addNowPlaying").click(function() {
		playSetting($("#playListMain").find(".play"));
	})
	
	// 지금 재생바에 띄워져있는 노래의 플레이 버튼을 클릭 했을 때
	// (다른 js파일에서 이벤트 발생 시켜줌)
	$("#continueOrStop").click(function() {
		if(playState == "play"){ // 그림이 플레이면 (정지상태)
			playNowMusic();
		} else {
			stopMusic();
		}
	})
	
	// audio 에서 현재 재생이 끝나면 다음곡 재생
	$("audio").on("ended", function() {
		console.log("오디오 재생 끝")
		let nextMusic = findNextMusic();
		playMusic(nextMusic);
	})
	
	// 지금 재생바에 올라가 있는 음악 요소 찾아서 리턴
	function findNowMusic() {
		// 현재 재생중인 곡의 플레이리스트 번호를 가져온다 (data() 를 쓰면 바뀐 값을 못찾는다.. 왜지)
		let nowPlaying = $("audio").attr("data-music_num");
		// 현재 재생중인 곡의 플레이리스트 재생 버튼의 부모를 찾는다
		let musicObject = $(".music [data-music_num = '"+ nowPlaying +"']").parent();
		return musicObject;
	}
	
	// 이전곡 요소를 찾아서 리턴하는 함수 (이전 곡이 없으면 마지막 곡을 찾는다)
	function findPrevMusic() {
		// 현재 재생중인 곡의 플레이리스트 번호를 가져온다 (data() 를 쓰면 바뀐 값을 못찾는다.. 왜지)
		let nowPlaying = $("audio").attr("data-music_num");
		// 현재 재생중인 곡의 플레이리스트 재생 버튼을 찾는다
		let musicObject = $(".music [data-music_num = '"+ nowPlaying +"']");
		
		// 현재 재생중인 컨테이너의 다음 컨테이너를 찾는다
		let nextObject = musicObject.parent().parent().prev();
		// 다음 요소가 없으면 재생목록의 첫 번째 곡을 찾는다
		if(nextObject.length < 1 ) {
			nextObject = musicObject.parent().parent().parent().children().last();
		}
		
		let nextMusic = nextObject.find("[data-music_src]");
		return nextMusic;
	}
	
	// 다음곡 요소를 찾아서 리턴하는 함수 (다음 곡이 없으면 처음 곡을 찾는다)
	function findNextMusic() {
		// 현재 재생중인 곡의 플레이리스트 번호를 가져온다 (data() 를 쓰면 바뀐 값을 못찾는다.. 왜지)
		let nowPlaying = $("audio").attr("data-music_num");
		// 현재 재생중인 곡의 플레이리스트 재생 버튼을 찾는다
		let musicObject = $(".music [data-music_num = '"+ nowPlaying +"']");
		
		// 현재 재생중인 컨테이너의 다음 컨테이너를 찾는다
		let nextObject = musicObject.parent().parent().next();
		// 다음 요소가 없으면 재생목록의 첫 번째 곡을 찾는다
		if(nextObject.length < 1 ) {
			nextObject = musicObject.parent().parent().parent().children().first();
		}
		
		let nextMusic = nextObject.find("[data-music_src]");
		return nextMusic;
	}
	
	
	// .play 객체 받으면 음악 플레이하는 함수 (data-music_src 속성을 가지고 있는 요소)
	function playMusic(music) {
		playSetting(music);
		
		playNewMusic(music);
	}
	
	// .play 받기
	function playSetting(music){
		// 현재 곡의 아티스트와 제목을 찾아서 현재 재생에 넣는다
		let artist = $(music).parent().find("span.artist-small").text();
		let title = $(music).parent().find("span.musicTitle-small").text();
		// 현재 재생중인 곡 사진 넣기
		let picture = $(music).parent().find(".musicPicture-small").attr("src");
			
		playingArtist.text(artist);
		playingMusicTitle.text(title);
		$("#playingMusicPicture").attr("src", picture);
			
		let musicSrc = $(music).data("music_src");
		let musicNum = $(music).data("music_num");
		let musicId = $(music).data("music_id");
		audio.setAttribute("src", musicSrc);
		audio.setAttribute("data-music_num", musicNum);
		audio.setAttribute("data-music_id", musicId);
		
		// 재생중인 곡의 아티스트에 데이터 추가
		$("#playingArtist").attr("data-artist", $(music).parent().find(".artist-small").attr("data-artist"))
		
	   	// 플레이리스트에 재생표시 설정 (재생 버튼만 뜨게)
		$(music).find(".playingImgContainer").removeAttr("hidden");
		
		// 재생중인 곡에 배경색 , 메뉴 컨테이너 보임, 플리에서 삭제버튼 숨김
		$(".music .musicInfo").css({"background-color" : "white"});
		$(music).parent().css({"background-color" : "rgb(220, 220, 220)"});
		$(".playListMenuContainer").attr("hidden", "hidden");
		$(music).parent().find(".playListMenuContainer").removeAttr("hidden");
		$(".playListDelete").removeAttr("hidden");
		$(music).parent().find(".playListDelete").attr("hidden", "hidden");
		
		// 현재 플레이중인 곡의 하트에 data-music_id 설정하고 이미지 설정
		let $img = $("#like-icon");
		
		$img.attr("data-music_id", $(music).attr("data-music_id"));
		let thisMusicId = $img.attr("data-music_id");
		
		if(likeMusicArr.find(id => id == thisMusicId)){ // 유저가 좋아요 누른 곡 아이디 배열에 지금 이미지의 곡 아이디가 있으면
			$img.attr("src", "./resources/images/icons/icon-like.png"); // 꽉찬 하트로 변경
		} else { // 여기는 하트는 그대로고 곡은 바껴서 else 이면 빈 하트로 바꾸기 추가
			$img.attr("src", "./resources/images/icons/icon-like-not.png");
		}
		
	}
	
	// 새로운 음악 재생 (정지했다가 다시 재생하는거 말고) .play 받음
	function playNewMusic(music) {
		// 플레이리스트에 재생표시 설정
		$("img.playingImg").attr("src", "./resources/images/icons/icon-playing-pause.png");
		$(".playingImgContainer").attr("hidden", "hidden");
		$(music).find(".playingImgContainer").removeAttr("hidden");
		
		audio.play();
		playIconContainer.setAttribute("src", playerIconPath + "icon-pause.png");
	   	playState = 'pause';
	   	requestAnimationFrame(whilePlaying);
		// 재생기록 남기기 (프레임 컨트롤러로 보낸다음, 유저 아이디 뽑아서 /main으로 리다이렉트)
		$.ajax({
			url: "/main/controller",
			data: {"location" : "addMusicLog", "musicId" : $(music).data("music_id")},
			type: "GET"
		});
		
		
		// 모든 음악에 바로 재생표시를 플레이로 바꿈
		$('.musicContainer[data-music_idx]').children().find(".playBtn").each(function() {
			$(this).attr("src", "./resources/images/icons/icon-playing.png");
		})
		// 같은 모든 음악에 바로 재생표시를 정지로 바꿈
		$('.musicContainer[data-music_idx="'+ $("audio").attr("data-music_id") +'"]').children().find(".playBtn").each(function() {
			$(this).attr("src", "./resources/images/icons/icon-playing-pause.png");
		})
		
		// top100
		// 모든 음악에 바로 재생표시를 플레이로 바꿈
		$(".top100PlayContainer img").each(function() {
			$(this).attr("src", "./resources/images/icons/icon-playing.png");
		})
		
		// 재생중인 모든 음악에 바로 재생표시를 정지로 바꿈
		$('tr[data-music_id="'+ $("audio").attr("data-music_id") +'"]').find(".top100PlayContainer img").each(function() {
			$(this).attr("src", "./resources/images/icons/icon-playing-pause.png");
		})
		
		// 디테일 - 플레이버튼 정지로 바꿈
		$("#playBtnInDetail").attr("src", "./resources/images/icons/icon-playing-pause.png");
	}
	
	// 현재 곡 재생
	function playNowMusic() {
		audio.play();
		playIconContainer.setAttribute("src", playerIconPath + "icon-pause.png");
	   	playState = 'pause';
	   	requestAnimationFrame(whilePlaying);
	   	
	   	// 플레이리스트에 재생표시 설정
		$("img.playingImg").attr("src", "./resources/images/icons/icon-playing-pause.png");
		
		
		// 모든 음악에 바로 재생표시를 플레이로 바꿈
		$('.musicContainer[data-music_idx]').children().find(".playBtn").each(function() {
			$(this).attr("src", "./resources/images/icons/icon-playing.png");
		})
		// 같은 모든 음악에 바로 재생표시를 정지로 바꿈
		$('.musicContainer[data-music_idx="'+ $("audio").attr("data-music_id") +'"]').children().find(".playBtn").each(function() {
			$(this).attr("src", "./resources/images/icons/icon-playing-pause.png");
		})
		
		// top100
		// 재생중인 모든 음악에 바로 재생표시를 정지로 바꿈
		$('tr[data-music_id="'+ $("audio").attr("data-music_id") +'"]').find(".top100PlayContainer img").each(function() {
			$(this).attr("src", "./resources/images/icons/icon-playing-pause.png");
		})
		
		// 디테일 - 플레이버튼 정지로 바꿈
		$("#playBtnInDetail").attr("src", "./resources/images/icons/icon-playing-pause.png");
	}
	
	// 현재 곡 정지
	function stopMusic() {
		audio.pause();
		cancelAnimationFrame(raf);
		$("#play-icon").attr("src", playerIconPath + "icon-play.png");
		playState = 'play';
		
		// 플레이리스트에 재생표시 설정
		$("img.playingImg").attr("src", "./resources/images/icons/icon-playing.png");
		
		// 같은 모든 음악에 바로 재생표시를 플레이로 바꿈
		$('.musicContainer[data-music_idx="'+ $("audio").attr("data-music_id") +'"]').children().find(".playBtn").each(function() {
			$(this).attr("src", "./resources/images/icons/icon-playing.png");
		})
		
		// top100
		// 모든 음악에 바로 재생표시를 플레이로 바꿈
		$(".top100PlayContainer img").each(function() {
			$(this).attr("src", "./resources/images/icons/icon-playing.png");
		})
		
		// 디테일 - 플레이버튼 정지로 바꿈
		$("#playBtnInDetail").attr("src", "./resources/images/icons/icon-playing.png");
	}
	
	// TODO : 음악 seletor안에 좋아요 만들기
	
});

