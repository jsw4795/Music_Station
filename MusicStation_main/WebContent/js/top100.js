$(()=>{
	// 역대TOP100페이지로
	$("#chooseHistoricalTop").on("click", function(e) {
		e.stopPropagation();
		
		goHistoricalTop();
	})
	
	$("#chooseWeeklyTop").on("click", function(e) {
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
})