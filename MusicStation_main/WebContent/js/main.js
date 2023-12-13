$(() => {
	/*
	// e.stopPropagation(); 겹쳐진 이벤트가 중복으로 처리되지 않도록
	
	// 음악 이미지에 마우스 올리면 선택창 뜨게
	$(".musicPicContainer").on("mouseenter", function() {
		$(".selector").attr("hidden", "hidden");
		$(this).find(".selector").removeAttr("hidden");
	});
	$(".selector").on("mouseleave", function() {
		$(this).attr("hidden", "hidden");
		$(this).find(".menuContainer").attr("hidden", "hidden");
	});
	
	// 점3개 클릭하면 메뉴 보여주기
	$(".musicMenuBtnContainer").on("click", function(e) {
		// 이 버튼 밑에있는 것들은 클릭 안되게
		e.stopPropagation();
		$(this).parent().find(".menuContainer").removeAttr("hidden");
	});
	
	// 플레이리스트에 추가 클릭
	$(".addPlayList").on("click", function(e) {
		e.stopPropagation();
		let musicId = $(this).closest(".musicContainer").data("music_idx");
		$(this).parent().attr("hidden", "hidden");
		$.ajax({
			url: "/main/controller",
			type: "GET",
			data: {"location" : "addPlayListMusic", "musicId" : musicId},
			dataType: "json",
			success: function(data) {
				addPlayList(data);
			}
		});
	});
	
	// 다음 곡으로 재생 클릭
	$(".addNext").on("click", function(e) {
		e.stopPropagation();
		let musicId = $(this).closest(".musicContainer").data("music_idx");
		$(this).parent().attr("hidden", "hidden");
		$.ajax({
			url: "/main/controller",
			type: "GET",
			data: {"location" : "addPlayListMusic", "musicId" : musicId},
			dataType: "json",
			success: function(data) {
				addNext(data);
			}
		});
	});
	
	// 음악에서 바로 재생버튼 클릭
	$(".playBtnContainer").on("click", function(e) {
		e.stopPropagation();
		let musicId = $(this).closest(".musicContainer").data("music_idx");
		
		$.ajax({
			url: "/main/controller",
			type: "GET",
			data: {"location" : "addPlayListMusic", "musicId" : musicId},
			dataType: "json",
			success: function(data) {
				addPlayList(data);
				$("#playNowOrNot").val("play");
				// 강제로 클릭 이벤트 발생
				$("#playNowOrNot").trigger("click");
			}
		});
	})
	
	// 현재 플레이리스트에 곡 추가 (마지막에 추가)
	function addPlayList(data) {
		let htmlTag = makeHtml(data);
		$("#playListMain").append(htmlTag);
	}
	
	function addNext(data) {
		let htmlTag = makeHtml(data);
		let nowPlayingIndex = $("audio").data("music_num");
		// 현재 곡이 재생중이면 바로 뒤에 추가, 재생중이 아니면 마지막에 추가
		if(nowPlayingIndex != ""){
			$("#playListMain").find("[data-music_num = "+ nowPlayingIndex +"]").closest(".music").after(htmlTag);
		} else {
			$("#playListMain").append(htmlTag);
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
						+ 				'<span class="artist-small btn">'+ data.artist +'</span>'
						+ 				'<div class="musicTitleContainer">'
						+ 					'<span  class="musicTitle-small btn">'+ data.title +'</span>'
						+ 				'</div>'
						+ 			'</div>'
						+			'<div class="playListMenuContainer" hidden="hidden">'
						+				'<img class="playListLike btn" src="./resources/images/icons/icon-like-not.png" />'
						+				'<img class="playListDelete btn" src="./resources/images/icons/icon-delete.png" />'
						+			'</div>'
						+ 		'</div>'
						+ 	'</div>';
		$("#playListMain").attr("data-index", nextIndex); // 인덱스 1 증가
		return htmlTag;
	}
	*/
	
	
	
	
	// 배너 버튼 클릭 이벤트
	// 하다보니 코드가 개판이 됐다..
	// 이건 무조건 10개 다 나옴
	let top10Count = 5; // 넘어가지 않게 회수 제한
	disableBtn($(".leftBtn")); // 왼쪽 버튼은 처음에 비활성화
	
	$("#top10 .rightBtn").on("click", function(e) {
		e.stopPropagation();
		top10Count--;
		if(top10Count <= -1) {
			top10Count = 0;
			return;
		}
		enableBtn($(this).siblings(".leftBtn"));
		let $banner = $(this).parent().find(".banner");
		$banner.animate({"right" : "+=157"}, 300); 
		if(top10Count == 0) {
			disableBtn($(this));
		}
	})
	$("#top10 .leftBtn").on("click", function(e) {
		e.stopPropagation();
		top10Count++;
		if(top10Count >= 6) {
			top10Count = 5;
			return;
		}
		enableBtn($(this).siblings(".rightBtn"));
		let $banner = $(this).parent().find(".banner");
		$banner.animate({"right" : "-=157"}, 300); // 5번
		if(top10Count == 5) {
			disableBtn($(this));
		}
	})
	
	
	// 최근 들은 곡 배너 버튼
	let recentMaxCount = $("#recentlyPlayedMusics .musicContainer").length - 5; // 2
	// 5개 이하로 있으면 0보다 작거나 같음
	// 6개 이상 있으면 maxcount가 오른쪽 버튼을 누를 수 있는 횟수
	if(recentMaxCount <= 0){
		disableBtn($("#recentlyPlayedMusics .rightBtn"))
	}
	
	let recentCount = 0; // 넘어가지 않게 회수 제한
	disableBtn($(".leftBtn")); // 왼쪽 버튼은 처음에 비활성화
	
	$("#recentlyPlayedMusics .rightBtn").on("click", function(e) {
		e.stopPropagation();
		if(recentCount >= recentMaxCount) {
			//recentCount = 0;
			return;
		}
		recentCount++;
		enableBtn($(this).siblings(".leftBtn"));
		let $banner = $(this).parent().find(".banner");
		$banner.animate({"right" : "+=157"}, 300); 
		if(recentCount >= recentMaxCount) {
			disableBtn($(this));
		}
	})
	$("#recentlyPlayedMusics .leftBtn").on("click", function(e) {
		e.stopPropagation();
		if(recentCount <= 0) {
			//recentCount = recentMaxCount;
			return;
		}
		recentCount--;
		enableBtn($(this).siblings(".rightBtn"));
		let $banner = $(this).parent().find(".banner");
		$banner.animate({"right" : "-=157"}, 300); // 5번
		if(recentCount <= 0) {
			disableBtn($(this));
		}
	})
	
	
	// 최근 업로드 된 곡 배너 버튼
	let uploadMaxCount = $("#recentlyUploadedMusics .musicContainer").length - 5; // 2
	// 5개 이하로 있으면 0보다 작거나 같음
	// 6개 이상 있으면 maxcount가 오른쪽 버튼을 누를 수 있는 횟수
	if(uploadMaxCount <= 0){
		disableBtn($("#recentlyUploadedMusics .rightBtn"))
	}
	
	let uploadCount = 0; // 넘어가지 않게 회수 제한
	disableBtn($(".leftBtn")); // 왼쪽 버튼은 처음에 비활성화
	
	$("#recentlyUploadedMusics .rightBtn").on("click", function(e) {
		e.stopPropagation();
		if(uploadCount >= uploadMaxCount) {
			//recentCount = 0;
			return;
		}
		uploadCount++;
		enableBtn($(this).siblings(".leftBtn"));
		let $banner = $(this).parent().find(".banner");
		$banner.animate({"right" : "+=157"}, 300); 
		if(uploadCount >= uploadMaxCount) {
			disableBtn($(this));
		}
	})
	$("#recentlyUploadedMusics .leftBtn").on("click", function(e) {
		e.stopPropagation();
		if(uploadCount <= 0) {
			//recentCount = recentMaxCount;
			return;
		}
		uploadCount--;
		enableBtn($(this).siblings(".rightBtn"));
		let $banner = $(this).parent().find(".banner");
		$banner.animate({"right" : "-=157"}, 300); // 5번
		if(uploadCount <= 0) {
			disableBtn($(this));
		}
	})
	
	// 주간 TOP10 배너 버튼
	let weekTop10MaxCount = $("#weekTop10 .musicContainer").length - 5; // 2
	// 5개 이하로 있으면 0보다 작거나 같음
	// 6개 이상 있으면 maxcount가 오른쪽 버튼을 누를 수 있는 횟수
	if(weekTop10MaxCount <= 0){
		disableBtn($("#weekTop10 .rightBtn"))
	}
	
	let weekTop10Count = 0; // 넘어가지 않게 회수 제한
	disableBtn($(".leftBtn")); // 왼쪽 버튼은 처음에 비활성화
	
	$("#weekTop10 .rightBtn").on("click", function(e) {
		e.stopPropagation();
		if(weekTop10Count >= weekTop10MaxCount) {
			//recentCount = 0;
			return;
		}
		weekTop10Count++;
		enableBtn($(this).siblings(".leftBtn"));
		let $banner = $(this).parent().find(".banner");
		$banner.animate({"right" : "+=157"}, 300); 
		if(weekTop10Count >= weekTop10MaxCount) {
			disableBtn($(this));
		}
	})
	$("#weekTop10 .leftBtn").on("click", function(e) {
		e.stopPropagation();
		if(weekTop10Count <= 0) {
			//recentCount = recentMaxCount;
			return;
		}
		weekTop10Count--;
		enableBtn($(this).siblings(".rightBtn"));
		let $banner = $(this).parent().find(".banner");
		$banner.animate({"right" : "-=157"}, 300); // 5번
		if(weekTop10Count <= 0) {
			disableBtn($(this));
		}
	})
	
	// 역대TOP100페이지로
	$(".goHistoricalTop100").on("click", function(e) {
		e.stopPropagation();
		
		goHistoricalTop();
	})
	
	$(".goWeeklyTop100").on("click", function(e) {
		e.stopPropagation();
		
		goWeeklyTop();
	})
	
	
	
	
	
	
		
	function goHistoricalTop() {
		$.ajax({
			url: "/main/controller",
			type: "GET",
			data: {"location" : "getHistoricalTop100Page"},
			dataType: "html",
			success: function(data) {
				$("#container").html(data);
				
				$(window).scrollTop(0);
				
				// navBar에 버튼 눌림 표시
				$(".navBtn").removeClass("active");
				$("#topBtn").addClass("active");
				
				// historical 에 active 추가
				$("#chooseHistoricalTop").addClass("active");
				
				// 음악 selector에 포함된 좋아요 버튼은 흰색으로 다시 바꾸기
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
					$('tr[data-music_id="'+ $("audio").attr("data-music_id") +'"]').find(".top100PlayContainer img").each(function() {
						$(this).attr("src", "./resources/images/icons/icon-playing-pause.png");
					})
				}
			}
		})
	}
	
	
	function goWeeklyTop() {
		$.ajax({
			url: "/main/controller",
			type: "GET",
			data: {"location" : "getWeeklyTop100Page"},
			dataType: "html",
			success: function(data) {
				$("#container").html(data);
				
				$(window).scrollTop(0);
				
				// navBar에 버튼 눌림 표시
				$(".navBtn").removeClass("active");
				$("#topBtn").addClass("active");
				
				// historical 에 active 추가
				$("#chooseWeeklyTop").addClass("active");
				
				// 음악 selector에 포함된 좋아요 버튼은 흰색으로 다시 바꾸기
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
					$('tr[data-music_id="'+ $("audio").attr("data-music_id") +'"]').find(".top100PlayContainer img").each(function() {
						$(this).attr("src", "./resources/images/icons/icon-playing-pause.png");
					})
				}
			}
		})
	}
	
	
	
	function disableBtn($btn) {
		$btn.css({"background-color" : "rgb(185, 185, 185)", "cursor" : "auto"});
		$btn.removeClass("onHover");
	}
	function enableBtn($btn) {
		$btn.css({"background-color" : "white", "cursor" : "pointer"});
		$btn.addClass("onHover");
	}
	
	
});