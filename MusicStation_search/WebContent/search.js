$(()=>{
	$("#all").on("click", function() {
		//location=all&keyword=<%=request.getParameter("keyword")%>&idx=0" id="all"
		$.ajax({
			url: "/search/controller",
			data: {"location" : "all",
					"keyword" : $("#data").data("keyword"),
					"idx" : "0"},
			type: "GET",
			dataType: "html",
			success: function(data) {
				$("#container").html(data);
				
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
			}
		})
	})
	
	$("#tracks").on("click", function() {
		//location=all&keyword=<%=request.getParameter("keyword")%>&idx=1" id="all"
		$.ajax({
			url: "/search/controller",
			data: {"location" : "all",
					"keyword" : $("#data").data("keyword"),
					"idx" : "1"},
			type: "GET",
			dataType: "html",
			success: function(data) {
				$("#container").html(data);
				
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
			}
		})
	})
	
	$("#users").on("click", function() {
		//location=all&keyword=<%=request.getParameter("keyword")%>&idx=2" id="all"
		$.ajax({
			url: "/search/controller",
			data: {"location" : "all",
					"keyword" : $("#data").data("keyword"),
					"idx" : "2"},
			type: "GET",
			dataType: "html",
			success: function(data) {
				$("#container").html(data);
			}
		})
	})
})