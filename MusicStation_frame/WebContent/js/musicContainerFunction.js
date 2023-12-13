// #Container안에 있는 음악 요소들의 이벤트를 모아놨다

$(()=>{
	// 화면 실행될 때 한번 이벤트 ON
	turnOnMusicContainerEvents();
	
	// 배열에 유저가 좋아요 표시한 musidId 배열 받아오기
	$.ajax({
		url: "/main/controller",
		type: "GET",
		data: {"location" : "getLikeMusics", "userId" : $("#userId").val()},
		dataType: "json",
		success: function(data) {
			likeMusicArr = Object.values(data); // json의 값만 가져다가 배열에 넣기
			
		}
	})
})

// 페이지 로딩되면 유저아이디로 좋아요 목록을 가져와서 자바스크립트 배열에 저장 (json -> array)
// //////////
// 좋아요 버튼 구현
// 모든 좋아요 버튼에 data-music_id	태그가 있다
// 버튼을 누르면 그 아이디로 좋아요 클릭 ajax 수행
// //////
// 재생목록에 추가할 때 배열에 저장된 musicId인지 체크해서 저장되있는거면(좋아요 눌린상태) 하트 차있는 상태로 출력
// 재생바에 추가될 때도 확인해서 하트 채울지 결정

var likeMusicArr = []; // 현재 유저가 좋아요 누른 musicId 배열 (전역변수라서 다른 파일에서도 쓸 수 있음)


function turnOnMusicContainerEvents() {
	// 음악 이미지에 마우스 올리면 선택창 뜨게
	$("#container").on("mouseenter", ".musicPicContainer", function() {
		$(".selector").attr("hidden", "hidden");
		$(this).find(".selector").removeAttr("hidden");
	});
	$("#container").on("mouseleave", ".selector", function() {
		$(this).attr("hidden", "hidden");
		$(this).find(".menuContainer").attr("hidden", "hidden");
	});
	
	// 점3개 클릭하면 메뉴 보여주기
	$("#container").on("click", ".musicMenuBtnContainer", function(e) {
		// 이 버튼 밑에있는 것들은 클릭 안되게
		e.stopPropagation();
		$(this).parent().find(".menuContainer").removeAttr("hidden");
	});
	
	// 플레이리스트에 추가 클릭
	$("#container").on("click", ".addPlayList", function(e) {
		e.stopPropagation();
		let musicId = $(this).closest(".musicContainer").data("music_idx");
		$(this).parent().attr("hidden", "hidden");
		$.ajax({
			url: "/main/controller",
			type: "GET",
			data: { "location": "addPlayListMusic", "musicId": musicId },
			dataType: "json",
			success: function(data) {
				addPlayList(data);
				// 현재 재생중인 곡이 없으면 재생중인 곡으로 설정하라고 이벤트 트리거 처리
				if($("audio").attr("src") == ""){
					$("#addNowPlaying").trigger("click");
				}
			}
		});
	});
	
	// 다음 곡으로 재생 클릭
	$("#container").on("click", ".addNext", function(e) {
		e.stopPropagation();
		let musicId = $(this).closest(".musicContainer").data("music_idx");
		$(this).parent().attr("hidden", "hidden");
		$.ajax({
			url: "/main/controller",
			type: "GET",
			data: { "location": "addPlayListMusic", "musicId": musicId },
			dataType: "json",
			success: function(data) {
				addNext(data);
				// 현재 재생중인 곡이 없으면 재생중인 곡으로 설정하라고 이벤트 트리거 처리
				if($("audio").attr("src") == ""){
					$("#addNowPlaying").trigger("click");
				}
			}
		});
	});
	
	// 음악에서 바로 재생버튼 클릭
	$("#container").on("click", ".playBtnContainer", function(e) {
		e.stopPropagation();
		let musicId = $(this).closest(".musicContainer").data("music_idx");
		
		// 재생바에 지금 노래가 올라온 상태면 그거 실행하거나 정지 (추가 안함)
		if(musicId == $("audio").attr("data-music_id")){
			$("#continueOrStop").trigger("click");
			return;
		}
	
		$.ajax({
			url: "/main/controller",
			type: "GET",
			data: { "location": "addPlayListMusic", "musicId": musicId },
			dataType: "json",
			success: function(data) {
				addPlayList(data);
				$("#playNowOrNot").val("play");
				// 강제로 클릭 이벤트 발생
				$("#playNowOrNot").trigger("click");
			}
		});
	})
	
	// 좋아요 버튼 누르기
	$("body").on("click", "img[data-music_id]", function(e) {
		e.stopPropagation();
		let $likeBtn = $(this);
		let musicId = $(this).attr("data-music_id");
		
		if(musicId == "") return;
		
		$.ajax({
			url: "/main/controller",
			type: "GET",
			data: {"location" : "pressMusicLikeBtn", "musicId" : musicId},
			success: function() {
				
				// 좋아요 눌린 노래 배열 수정
				if(likeMusicArr.find(id => id == musicId)){
					let idx = likeMusicArr.indexOf(musicId);
					if (idx > -1) likeMusicArr.splice(idx, 1);
					// 디테일에서 좋아요 수 증감
					$("#likeCount").text((Number)($("#likeCount").text()) - 1)
				} else {
					$likeBtn.attr("src", "./resources/images/icons/icon-like-not.png")
					likeMusicArr.push(musicId);
					// 디테일에서 좋아요 수 증감
					$("#likeCount").text((Number)($("#likeCount").text()) + 1)
				}
				// 모든 좋아요 버튼 모양 바꾸기
				$("img[data-music_id]").each(function() {
					let thismusicId = $(this).attr("data-music_id");
					
					if(likeMusicArr.find(id => id == thismusicId)){ // 유저가 좋아요 누른 곡 아이디 배열에 지금 이미지의 곡 아이디가 있으면
						$(this).attr("src", "./resources/images/icons/icon-like.png"); // 꽉찬 하트로 변경
						
					} else {
						$(this).attr("src", "./resources/images/icons/icon-like-not.png");
						
					}
				})
				// 음악 selector에 포함된 좋아요 버튼은 흰색으로 다시 바꾸기
				$(".musicLikeBtnContainer > img").each(function() {
					let thismusicId = $(this).attr("data-music_id");
					
					if(likeMusicArr.find(id => id == thismusicId)){ // 유저가 좋아요 누른 곡 아이디 배열에 지금 이미지의 곡 아이디가 있으면
						$(this).attr("src", "./resources/images/icons/icon-like-white.png"); // 꽉찬 하트로 변경
					} else {
						$(this).attr("src", "./resources/images/icons/icon-like-not-white.png");
					}
				})
				
				
			}
		})
	})
	
	
	// 여기부터 TOP100 플레이 
	
	// 플레이리스트에 추가 클릭
	$("#container").on("click", ".top100AddPlayList", function(e) {
		e.stopPropagation();
		let musicId = $(this).closest("tr").data("music_id");
		$.ajax({
			url: "/main/controller",
			type: "GET",
			data: { "location": "addPlayListMusic", "musicId": musicId },
			dataType: "json",
			success: function(data) {
				addPlayList(data);
				// 현재 재생중인 곡이 없으면 재생중인 곡으로 설정하라고 이벤트 트리거 처리
				if($("audio").attr("src") == ""){
					$("#addNowPlaying").trigger("click");
				}
			}
		});
	});
	
	// 다음 곡으로 재생 클릭
	$("#container").on("click", ".top100AddNext", function(e) {
		e.stopPropagation();
		let musicId = $(this).closest("tr").data("music_id");
		$.ajax({
			url: "/main/controller",
			type: "GET",
			data: { "location": "addPlayListMusic", "musicId": musicId },
			dataType: "json",
			success: function(data) {
				addNext(data);
				// 현재 재생중인 곡이 없으면 재생중인 곡으로 설정하라고 이벤트 트리거 처리
				if($("audio").attr("src") == ""){
					$("#addNowPlaying").trigger("click");
				}
			}
		});
	});
	
	// 음악에서 바로 재생버튼 클릭
	$("#container").on("click", ".top100PlayContainer", function(e) {
		e.stopPropagation();
		let musicId = $(this).closest("tr").data("music_id");
		
		// 재생바에 지금 노래가 올라온 상태면 그거 실행하거나 정지 (추가 안함)
		if(musicId == $("audio").attr("data-music_id")){
			$("#continueOrStop").trigger("click");
			return;
		}
	
		$.ajax({
			url: "/main/controller",
			type: "GET",
			data: { "location": "addPlayListMusic", "musicId": musicId },
			dataType: "json",
			success: function(data) {
				addPlayList(data);
				$("#playNowOrNot").val("play");
				// 강제로 클릭 이벤트 발생
				$("#playNowOrNot").trigger("click");
			}
		});
	})
	
	$("#container").on("click", ".musicLikeBtnContainer", function(e) {
		e.stopPropagation();
		let $likeBtn = $(this).find("img");
		let musicId = $likeBtn.attr("data-music_id");
		console.log($likeBtn)

		if (musicId == "") return;

		$.ajax({
			url: "/main/controller",
			type: "GET",
			data: { "location": "pressMusicLikeBtn", "musicId": musicId },
			success: function() {

				// 좋아요 눌린 노래 배열 수정
				if (likeMusicArr.find(id => id == musicId)) {
					let idx = likeMusicArr.indexOf(musicId);
					if (idx > -1) likeMusicArr.splice(idx, 1);
					// 디테일에서 좋아요 수 증감
					$("#likeCount").text((Number)($("#likeCount").text()) - 1)
				} else {
					$likeBtn.attr("src", "./resources/images/icons/icon-like-not.png")
					likeMusicArr.push(musicId);
					// 디테일에서 좋아요 수 증감
					$("#likeCount").text((Number)($("#likeCount").text()) + 1)
				}
				// 모든 좋아요 버튼 모양 바꾸기
				$("img[data-music_id]").each(function() {
					let thismusicId = $(this).attr("data-music_id");

					if (likeMusicArr.find(id => id == thismusicId)) { // 유저가 좋아요 누른 곡 아이디 배열에 지금 이미지의 곡 아이디가 있으면
						$(this).attr("src", "./resources/images/icons/icon-like.png"); // 꽉찬 하트로 변경

					} else {
						$(this).attr("src", "./resources/images/icons/icon-like-not.png");

					}
				})
				// 음악 selector에 포함된 좋아요 버튼은 흰색으로 다시 바꾸기
				$(".musicLikeBtnContainer > img").each(function() {
					let thismusicId = $(this).attr("data-music_id");

					if (likeMusicArr.find(id => id == thismusicId)) { // 유저가 좋아요 누른 곡 아이디 배열에 지금 이미지의 곡 아이디가 있으면
						$(this).attr("src", "./resources/images/icons/icon-like-white.png"); // 꽉찬 하트로 변경
					} else {
						$(this).attr("src", "./resources/images/icons/icon-like-not-white.png");
					}
				})
			}
		})
	})
	
	// 음악 컨테이너 클릭
	$("#container").on("click", ".selector", function(e) {
		let musicId = $(this).closest(".musicContainer").attr("data-music_idx");
		
		goMusicDetail(musicId);
	})
	
	// 보통 음악 컨테이너 음악 제목 클릭
	$("#container").on("click", ".musicContainer .musicTitle-small", function() {
		let musicId = $(this).closest(".musicContainer").attr("data-music_idx");
		
		goMusicDetail(musicId);
	})
	
	// TOP100 음악 제목 클릭
	$("#container").on("click", "#top100Container .musicTitle-small", function() {
		let musicId = $(this).closest("tr").attr("data-music_id");
		
		goMusicDetail(musicId);
	})
	
	
	// 아티스트 클릭
	$("body").on("click", ".artist-small", function() {
		let userId = $(this).attr("data-artist");
		if(userId == ""){
			return;
		}
		
		goArtistInfo(userId)
	})
	
	// 검색에서 유저 클릭
	$("#container").on("click", ".usercontainer", function() {
		let userId = $(this).children().find(".artist-small").attr("data-artist");
		if(userId == ""){
			return;
		}
		goArtistInfo(userId)
	})
	
	// 플레이중인 음악 제목 클릭
	$("body").on("click", "#playingMusicTitle", function() {
		let musicId = $("audio").attr("data-music_id");
		if(musicId == ""){
			return;
		}
		
		goMusicDetail(musicId);
	})
	
	// 플레이중인 음악 사진 클릭
	$("body").on("click", "#playingMusicPicture", function() {
		let musicId = $("audio").attr("data-music_id");
		if(musicId == ""){
			return;
		}
		
		goMusicDetail(musicId);
	})
	
	
	// 음악 디테일 페이지에서 플레이 버튼 클릭
	$("#container").on("click", "#playBtnInDetail" , function(e) {
		e.stopPropagation();
		let musicId = $(this).parent().data("music_id");
		
		// 재생바에 지금 노래가 올라온 상태면 그거 실행하거나 정지 (추가 안함)
		if(musicId == $("audio").attr("data-music_id")){
			$("#continueOrStop").trigger("click");
			return;
		}
	
		$.ajax({
			url: "/main/controller",
			type: "GET",
			data: { "location": "addPlayListMusic", "musicId": musicId },
			dataType: "json",
			success: function(data) {
				addPlayList(data);
				$("#playNowOrNot").val("play");
				// 강제로 클릭 이벤트 발생
				$("#playNowOrNot").trigger("click");
			}
		});
	})
	
	
	
	
}

// 현재 플레이리스트에 곡 추가 (마지막에 추가)
function addPlayList(data) {
	let htmlTag = makeHtml(data);
	$("#playListMain").append(htmlTag);
	
	
	// 마지막에 추가하는거니까 마지막거 체크해서 좋아요 표시
	let $img = $("#playListMain").children().last().find("img[data-music_id]")
	let thisMusicId = $img.data("music_id");
	
	if(likeMusicArr.find(id => id == thisMusicId)){ // 유저가 좋아요 누른 곡 아이디 배열에 지금 이미지의 곡 아이디가 있으면
		$img.attr("src", "./resources/images/icons/icon-like.png"); // 꽉찬 하트로 변경
	}
	
}

// 다음곡으로 재생
function addNext(data) {
	let htmlTag = makeHtml(data);
	let nowPlayingIndex = $("audio").attr("data-music_num");
	// 현재 곡이 재생중이면 바로 뒤에 추가, 재생중이 아니면 마지막에 추가
	if (nowPlayingIndex != "") {
		let $nowPlayingMusic = $("#playListMain").find("[data-music_num = " + nowPlayingIndex + "]").closest(".music")
		$nowPlayingMusic.after(htmlTag);
		
		// 지금 재생중인 곡 다음거 체크해서 좋아요 표시
		let $img = $nowPlayingMusic.next().find("img[data-music_id]");
		let thisMusicId = $img.data("music_id");
		
		if(likeMusicArr.find(id => id == thisMusicId)){ // 유저가 좋아요 누른 곡 아이디 배열에 지금 이미지의 곡 아이디가 있으면
			$img.attr("src", "./resources/images/icons/icon-like.png"); // 꽉찬 하트로 변경
		}
	} else {
		$("#playListMain").append(htmlTag);
		
		// 마지막에 추가하는거니까 마지막거 체크해서 좋아요 표시
		let $img = $("#playListMain").children().last().find("img[data-music_id]");
		let thisMusicId = $img.data("music_id");
		
		if(likeMusicArr.find(id => id == thisMusicId)){ // 유저가 좋아요 누른 곡 아이디 배열에 지금 이미지의 곡 아이디가 있으면
			$img.attr("src", "./resources/images/icons/icon-like.png"); // 꽉찬 하트로 변경
		}
	}
}



// 받은 데이터로 html태그를 만들어서 리턴하고, 인덱스를 1 증가시킨다
function makeHtml(data) {
	let index = $("#playListMain").attr("data-index");
	let nextIndex = Number(index) + 1;
	// data는 json이다
	let htmlTag = 	  '<div class="music" >'
					+ 	'<div class="musicInfo playerInnerContainer">'
					+ 		'<div class="musicPictureContainer play"'
					+ 		'data-music_src="/main/resources/musics/'+ data.fileName +'" '
												// 지금 플리에 있는 마지막 곡의 번호 + 1
					+ 		'data-music_num="'+ nextIndex +'"'
					+		'data-music_id="'+ data.musicId +'">'
					+ 			'<div class="playingImgContainer" hidden="true" >'
					+ 				'<img class="playingImg" src="./resources/images/icons/icon-playing.png" />'
					+ 			'</div>'
					+ 			'<img src="/main/resources/images/musicPic/'+ data.picture +'" class="musicPicture-small btn"/>'
					+ 			'</div>'
					+ 			'<div class="titleContainer">'
					+ 				'<span class="artist-small btn" data-artist="'+ data.artist +'">'+ data.artistNickname +'</span>'
					+ 				'<div class="musicTitleContainer">'
					+ 					'<span  class="musicTitle-small btn">'+ data.title +'</span>'
					+ 				'</div>'
					+ 			'</div>'
					+			'<div class="playListMenuContainer" hidden="hidden">'
					+				'<img class="playListLike btn" src="./resources/images/icons/icon-like-not.png" data-music_id="' + data.musicId + '" />'
					+				'<img class="playListDelete btn" src="./resources/images/icons/icon-delete.png" />'
					+			'</div>'
					+ 		'</div>'
					+ 	'</div>';
	$("#playListMain").attr("data-index", nextIndex); // 인덱스 1 증가
	return htmlTag;
}


function goMusicDetail(musicId) {
	$.ajax({
		url: "/detail/controller",
		data: {"location" : "getMusicDetailPage", "musicId" : musicId},
		type: "GET",
		dataType: "html",
		success: function(data) {
			$("#container").html(data);
			$(window).scrollTop(0);
			$(".navBtn").removeClass("active");
			
			// 모든 좋아요 버튼 모양 바꾸기
			$("img[data-music_id]").each(function() {
				let thismusicId = $(this).attr("data-music_id");
				
				if(likeMusicArr.find(id => id == thismusicId)){ // 유저가 좋아요 누른 곡 아이디 배열에 지금 이미지의 곡 아이디가 있으면
					$(this).attr("src", "./resources/images/icons/icon-like.png"); // 꽉찬 하트로 변경
				} else {
					$(this).attr("src", "./resources/images/icons/icon-like-not.png");
				}
			})
			
			// 재생중인 모든 음악에 바로 재생표시를 정지로 바꿈 (음악이 재생중이라면)
			if(playState == "pause"){
				$('#musicTitleArtistContainer[data-music_id="'+ $("audio").attr("data-music_id") +'"]').find("#playBtnInDetail").attr("src", "./resources/images/icons/icon-playing-pause.png");
			}
		}
	})
}



function goArtistInfo(userId) {
	$.ajax({
		url: "/info/controller",
		data: {"location" : "artistInfo", "userId" : userId},
		dataType: "html",
		type: "POST",
		success: function(data) {
			$("#container").html(data);
			$(window).scrollTop(0);
			$(".navBtn").removeClass("active");
			
			
			
			let userId = $("#user-info").attr("data-artistId");
	
			$.ajax({
				url : "/info/controller",
				data : {"location" : "track",  "userId" : userId},
				 type: 'POST',
				dataType : "html",
				success : function(data2){
					$("#infoMenuContainer").html(data2);
					$("#myTrack").addClass("active");
					
					// 모든 좋아요 버튼 모양 바꾸기
					$("#infoMenuContainer img[data-music_id]").each(function() {
						let thismusicId = $(this).attr("data-music_id");
						
						if(likeMusicArr.find(id => id == thismusicId)){ // 유저가 좋아요 누른 곡 아이디 배열에 지금 이미지의 곡 아이디가 있으면
							$(this).attr("src", "./resources/images/icons/icon-like-white.png"); // 꽉찬 하트로 변경
						} else {
							$(this).attr("src", "./resources/images/icons/icon-like-not-white.png");
						}
					})
					
					if(playState == "pause"){
						$('.musicContainer[data-music_idx="'+ $("audio").attr("data-music_id") +'"]').children().find(".playBtn").each(function() {
							$(this).attr("src", "./resources/images/icons/icon-playing-pause.png");
						})
					}
					
					//img gradients 시작
					let img = document.querySelector("#photo  img");
					let avgColor = getAverageColorOfImage(img);
					let r = avgColor.r;
					let g = avgColor.g;
					let b = avgColor.b;
					$("#user-info").css("background-image", "linear-gradient("
																	+"150deg, "
																	+"rgb(" +(r*0.7) + ", "+ (g*0.7) +"," + (b*0.7) + "), "
																	+"rgb(" +(r*0.6) + ", "+ (g*0.6) +"," + (b*0.6) + "), "
																	+"rgb(" +(r) + ", "+ (g) +"," + (b) + ")"
																	+")")
				}
			});
			
			
		}
	})
}







	
	
  //배경색 그라데이션 
  function getAverageColorOfImage(imgElement) {
  // imgElement -> <img src='https://...' alt='...' />
  const canvas = document.createElement('canvas');  // canvas element 생성
  const context = canvas.getContext && canvas.getContext('2d'); // 2d 그래픽을 그릴 수 있는 메서드를 지닌 HTML5 object
  const averageColor = { r: 0, g: 0, b: 0 };

  if (!context) return averageColor;

  const width = (canvas.width = imgElement.naturalWidth || imgElement.offsetWidth || imgElement.width); 
  const height = (canvas.height = imgElement.naturalHeight || imgElement.offsetHeight || imgElement.height);
  context.drawImage(imgElement, 0, 0); // drawImage는 캔버스에서 이미지를 그려준다.

  const imageData = context.getImageData(0, 0, width, height).data; // 지정된 좌표와 폭과 높이를 갖는 사각형으로 표시된 캔버스 영역에 대한 기본 픽셀 데이터를 나타내는 ImageData 객체를 반환한다.
  const length = imageData.length;

  for (let i = 0; i < length; i += 4) {
    averageColor.r += imageData[i];
    averageColor.g += imageData[i + 1];
    averageColor.b += imageData[i + 2];
  }
  const count = length / 4;
  averageColor.r = ~~(averageColor.r / count); 
  averageColor.g = ~~(averageColor.g / count);
  averageColor.b = ~~(averageColor.b / count);

  return averageColor;
}