$(()=>{
	mainLoad();
	// 기본 홈버튼에 active 표시
	$("#homeBtn").addClass("active");
	
	// navBtn 눌리면 검색어 제거
	$(".navBtn").on("click", function() {
		$("#keyword").val("");
	})
	
	// home버튼 눌리면
	$("#homeBtn").on("click", function() {
		$(".navBtn").removeClass("active");
		$(this).addClass("active");
		mainLoad();
	})
	
	// 검색창에서 엔터
	 $("#keyword").on("keyup",function(key){
        if(key.keyCode==13) {
			search();
        }
    });
		
	// 검색 클릭
	$("#searchBtn").click(search);
	
	// 프사 버튼 눌리면
	$("#nowProfileContainer").on("click", function(e) {
		e.stopPropagation();
		if($("#nowProfileContainer").hasClass("active") == true){
			$("#profileMenuContainer").attr("hidden", "hidden");
			$("#nowProfileContainer").removeClass("active");
		}else {
			$("#profileMenuContainer").removeAttr("hidden");
			$(this).addClass("active");
		}
	})
	
	// info클릭 (prifile)
	$("#profileInfoBtn").on("click", function(e) {
		e.stopPropagation();
		$("#profileMenuContainer").attr("hidden", "hidden");
		$("#nowProfileContainer").removeClass("active");
		$.ajax({
			url: "/info/controller",
			type: "GET",
			data: {"location" : "myInfo"},
			dataType: "html",
			success: function(data){
				$(".navBtn").removeClass("active");
				$("#container").html(data)
				$(window).scrollTop(0);
				
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
						$("img[data-music_id]").each(function() {
							let thismusicId = $(this).attr("data-music_id");
							
							if(likeMusicArr.find(id => id == thismusicId)){ // 유저가 좋아요 누른 곡 아이디 배열에 지금 이미지의 곡 아이디가 있으면
								$(this).attr("src", "./resources/images/icons/icon-like-white.png"); // 꽉찬 하트로 변경
							} else {
								$(this).attr("src", "./resources/images/icons/icon-like-not-white.png");
							}
						})
						
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
	});
	
	// likes클릭 (prifile -> likes)
	$("#profileLikeBtn").on("click", function(e) {
		e.stopPropagation();
		$("#profileMenuContainer").attr("hidden", "hidden");
		$("#nowProfileContainer").removeClass("active");
		$.ajax({
			url: "/info/controller",
			type: "GET",
			data: {"location" : "myInfo"},
			dataType: "html",
			success: function(data){
				$("#container").html(data)
				$.ajax({
					url: "/info/controller",
					data: {"location" : "likes", "userId" : $("#userId").val()},
					dataType: "html",
					success: function(data) {
						$(".navBtn").removeClass("active");
						$("#infoMenuContainer").html(data);
						$("#likes").addClass("active");
						$(window).scrollTop(0);
					
						// 음악 selector에 포함된 좋아요 버튼은 흰색으로 다시 바꾸기
						$("img[data-music_id]").each(function() {
							let thismusicId = $(this).attr("data-music_id");
							
							if(likeMusicArr.find(id => id == thismusicId)){ // 유저가 좋아요 누른 곡 아이디 배열에 지금 이미지의 곡 아이디가 있으면
								$(this).attr("src", "./resources/images/icons/icon-like-white.png"); // 꽉찬 하트로 변경
							} else {
								$(this).attr("src", "./resources/images/icons/icon-like-not-white.png");
							}
						})
						
						// 재생중인 모든 음악에 바로 재생표시를 정지로 바꿈 (음악이 재생중이라면)
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
				})
			}
		})
	});
	
	// 로그아웃
	$("#profileLogoutBtn").on("click", function(e) {
		e.stopPropagation();
		$.ajax({
			url: "/frame/controller",
			type: "GET",
			data: {"location" : "logout"},
			success: function(){
				location.reload(true);
			}
		})
	})
	
	$(document.body).on("click", function() {
		$("#profileMenuContainer").attr("hidden", "hidden");
		$("#nowProfileContainer").removeClass("active");
	})
	
	// TOP 버튼 눌리면
	$("#topBtn").on("click", function() {
		$(".navBtn").removeClass("active");
		$(this).addClass("active");
		historicalTopLoad();
	})
	
	// 업로드 버튼
	$("#uploadBtn").on("click", function() {
		$(".navBtn").removeClass("active");
		$(this).addClass("active");
		$.ajax({
			url: "/info/controller",
			data: {"location" : "upload"},
			dataType: "html",
			success: function(data){
				$("#container").html(data);
				$(window).scrollTop(0);
			}
		})
	})
	
});
	
	
// ajax로 데이터 가져와서 container에 채우는 함수 (/main 으로 보낼 때만 사용)
function mainLoad() {
	$.ajax({
		url: "/main/controller",
		type: "GET",
		data: {"location" : "main"},
		dataType: "html",
		success: (data)=>{
			$("#container").html(data);
			
			$(window).scrollTop(0);
			
			if(location == "main"){
				$(".leftBtn").css({"background-color" : "rgb(185, 185, 185)", "cursor" : "auto"});
				$(".leftBtn").removeClass("onHover");
			}
			
			// 음악 selector에 포함된 좋아요 버튼은 흰색으로 다시 바꾸기
			$(".musicLikeBtnContainer > img").each(function() {
				let thismusicId = $(this).attr("data-music_id");
					
				if(likeMusicArr.find(id => id == thismusicId)){ // 유저가 좋아요 누른 곡 아이디 배열에 지금 이미지의 곡 아이디가 있으면
					$(this).attr("src", "./resources/images/icons/icon-like-white.png"); // 꽉찬 하트로 변경
				} else {
					$(this).attr("src", "./resources/images/icons/icon-like-not-white.png");
				}
			})
			
			// 재생중인 모든 음악에 바로 재생표시를 정지로 바꿈 (음악이 재생중이라면)
			if(playState == "pause"){
				$('.musicContainer[data-music_idx="'+ $("audio").attr("data-music_id") +'"]').children().find(".playBtn").each(function() {
					$(this).attr("src", "./resources/images/icons/icon-playing-pause.png");
				})
			}
			
			
		}
	});
}

// TOP 버튼 눌리면 역대 TOP100 가져올 함수
function historicalTopLoad() {
		$.ajax({
			url: "/main/controller",
			type: "GET",
			data: {"location" : "getHistoricalTop100Page"},
			dataType: "html",
			success: function(data) {
				$("#container").html(data);
				
				$(window).scrollTop(0);
				
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
	
function search(){
		$(window).scrollTop(0);
	
		let keyword = $("#keyword").val();
		
		if(keyword.trim() == ""){
			return;
		}
		
		$(".navBtn").removeClass("active");
		
		$.ajax({
			url: "/search/controller",
			data: {"location" : "all", "idx" : "0", "keyword" : keyword},
			dataType: "html",
			success: function(data) {
				$("#container").html(data)
				
				// 음악 selector에 포함된 좋아요 버튼은 흰색으로 다시 바꾸기
				$("#container img[data-music_id]").each(function() {
					let thismusicId = $(this).attr("data-music_id");
					
					if(likeMusicArr.find(id => id == thismusicId)){ // 유저가 좋아요 누른 곡 아이디 배열에 지금 이미지의 곡 아이디가 있으면
						$(this).attr("src", "./resources/images/icons/icon-like-white.png"); // 꽉찬 하트로 변경
					} else {
						$(this).attr("src", "./resources/images/icons/icon-like-not-white.png");
					}
				})
				
				// 재생중인 모든 음악에 바로 재생표시를 정지로 바꿈 (음악이 재생중이라면)
				if(playState == "pause"){
					$('.musicContainer[data-music_idx="'+ $("audio").attr("data-music_id") +'"]').children().find(".playBtn").each(function() {
						$(this).attr("src", "./resources/images/icons/icon-playing-pause.png");
					})
				}
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