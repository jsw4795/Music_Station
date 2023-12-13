function clearHtml() {
	$("#MyPlayLists").html("");
	$("#MyPopularTracks").html("");
	$("#MyTracks").html("");
}

$(function() {


	//testId 가 올린 track 모두 보기
	$("#myTrack").click(function() {
		let userId = $("#user-info").attr("data-artistId");

		$.ajax({
			url: "/info/controller",
			data: { "location": "track", "userId": userId },
			type: 'POST',
			dataType: "html",
			success: function(data) {
				$("#infoMenuContainer").html(data);
				
				if(playState == "pause"){
					$('.musicContainer[data-music_idx="'+ $("audio").attr("data-music_id") +'"]').children().find(".playBtn").each(function() {
						$(this).attr("src", "./resources/images/icons/icon-playing-pause.png");
					})
				}
			}
		});
	});

	//testId 가 올린 음악 중 popularTrack 모두 보기
	$("#myPopularTrack").click(function() {

		let userId = $("#user-info").attr("data-artistId");
		$.ajax({
			url: "/info/controller",
			data: { "location": "popularTrack", "userId": userId },
			type: 'POST',
			dataType: "html",
			success: function(data) {
				clearHtml();
				$("#infoMenuContainer").html(data);
				
				if(playState == "pause"){
					$('.musicContainer[data-music_idx="'+ $("audio").attr("data-music_id") +'"]').children().find(".playBtn").each(function() {
						$(this).attr("src", "./resources/images/icons/icon-playing-pause.png");
					})
				}
			}
		});
	});
	//likes button 누르면 내 likes 조회
	$("#likes").click(function() {

		let userId = $("#user-info").attr("data-artistId");

		$.ajax({
			url: "/info/controller",
			data: { "location": "likes", "userId": userId },
			type: 'POST',
			dataType: "html",
			success: function(data) {

				$("#infoMenuContainer").html(data);

				// 음악 selector에 포함된 좋아요 버튼은 흰색으로 다시 바꾸기
				$("img[data-music_id]").each(function() {
					let thismusicId = $(this).attr("data-music_id");

					if (likeMusicArr.find(id => id == thismusicId)) { // 유저가 좋아요 누른 곡 아이디 배열에 지금 이미지의 곡 아이디가 있으면
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
	});
	//수정완료 버튼 누르면 -> db update 후 info페이지로 돌아오기
	$("#submit-btn").click(function() {

		if ($("#nickname").val() == "") {
			alert("닉네임 을(를) 입력하세요");
			return;
		}

		if ($("#checkDuplicateNickname").val() == "true") {
			alert("닉네임 중복체크를 해주세요");
			return;
		}

		if ($("#profile-picture").val() == "") {
			updateWithoutPicture();
		} else {
			updateWithPicture();
		}

	});

	// 닉네임 중복 체크
	$("#checkNickName").click(function() {

		var nickname = $("#nickname").val();

		$.ajax({
			url: "/frame/controller",
			type: 'POST',
			data: { "location": "nicknameCheck", "inputNickname": nickname },
			dataType: "json",
			success: function(data) {
				if (data.isValid == "false") {
					$("#result").text("이미 사용중인 닉네임입니다").css("color", "red");
					$("#checkDuplicateNickname").val("true");
				} else {
					$("#result").text("사용 가능한 닉네임입니다").css("color", "blue");
					$("#checkDuplicateNickname").val("false");
				}
			}
		});
	});
	//닉네임 input -> 다시입력하면 비우기
	$("#nickname").on("input", function() {
		$("#result").empty();
		$("#checkDuplicateNickname").val("true");
	});

	//edit button 클릭시 모달창 띄우기
	$("#edit").click(function() {
		$("#modal").css("display", "block");
	});


	// 취소 버튼
	$("#modal-cancle").click(function() {
		$("#result").empty();
		$("#modal").css("display", "none");
	});

	//button action 상태에 css 주기
	$("#infoBtnContainer > .infoBtn").click(function() {
		$("#infoBtnContainer > .infoBtn").removeClass("active");
		$(this).addClass("active");
	});

	//input에 값 들어가면 수정완료 버튼 활성화
	$('#profileFrm:input').on('input', function() {
		$('#submit-btn').prop('disabled', false);
	});


	//upload버튼 눌렀을 때 파일 업로드 할 수 있는 창으로 이동
	$("#upload").click(function() {
		$.ajax({
			url: "/info/controller",
			data: { "location": "upload" },
			type: "POST",
			dataType: "html",
			success: function(data) {
				$("#container").html(data)
			}
		});
	});

	$("#profile-picture").on("change", function(e) {
		let reader = new FileReader();

		reader.onload = function(e) {
			$("#profile-thumbnail").attr("src", e.target.result);
		};

		reader.readAsDataURL(e.target.files[0]);
	})
	
	
	
	
	// 처음 모달에서 회원 탈퇴 버튼 클릭
	$("#withdrawalBtn").on("click", function(e) {
		e.stopPropagation();
		$("#profileFrm").attr("hidden", "hidden");
		$("#withdrawalContainer").removeAttr("hidden");
	})
	
	// 회원 탈퇴 창에서 취소 클릭
	$("#withdrawal-cancle").on("click", function(e) {
		e.stopPropagation();
		$("#withdrawalContainer").attr("hidden", "hidden");
		$("#profileFrm").removeAttr("hidden");
	})
	
	// 회원탈퇴 창에서 탈퇴 클릭
	$("#withdrawalSubmit").on("click", function(e) {
		e.stopPropagation();
		$.ajax({
			url: "/frame/controller",
			data: {"location" : "passwordCheck", "password" : $("#withdrawalPassword").val()},
			type: "POST",
			dataType: "json",
			success: function(data) {
				if(data.isSuccess == "true"){ // 비밀번호 일치
					$.ajax({
						url: "/frame/controller",
						data: {"location" : "withdrawal"},
						type: "GET",
						dataType: "json",
						success: function(data2) {
							if(data2.isSuccess == "true"){
								alert("회원 탈퇴에 성공했습니다.\n초기화면으로 이동합니다.");
								location.reload(true);
							} else {
								alert("회원 탈퇴에 실패했습니다.\n관리자에게 문의해주세요.");
							}
						} 
					})
				} else {
					alert("비밀번호가 일치하지 않습니디.");
					$("#withdrawalPassword").val("");
					$("#withdrawalPassword").focus();
				}
			}
		})
	})
	



	function updateWithoutPicture() {
		$.ajax({
			url: "/info/controller",
			data: {
				"location": "editProfileWithoutPicture",
				"nickname": $("#nickname").val(),
				"bio": $("#bio").val()
			},
			type: "POST",
			success: function() {
				$.ajax({
					url: "/info/controller",
					data: { "location": "myInfo" },
					type: "POST",
					success: function(data) {
						$("#container").html(data); //container
						$(window).scrollTop(0);

						$.ajax({
							url: "/info/controller",
							data: { "location": "track", "userId": $("#userId").val() },
							type: 'POST',
							dataType: "html",
							success: function(data2) {
								$("#infoMenuContainer").html(data2);
								$("#myTrack").addClass("active");

								// 모든 좋아요 버튼 모양 바꾸기
								$("img[data-music_id]").each(function() {
									let thismusicId = $(this).attr("data-music_id");

									if (likeMusicArr.find(id => id == thismusicId)) { // 유저가 좋아요 누른 곡 아이디 배열에 지금 이미지의 곡 아이디가 있으면
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
									+ "150deg, "
									+ "rgb(" + (r * 0.7) + ", " + (g * 0.7) + "," + (b * 0.7) + "), "
									+ "rgb(" + (r * 0.6) + ", " + (g * 0.6) + "," + (b * 0.6) + "), "
									+ "rgb(" + (r) + ", " + (g) + "," + (b) + ")"
									+ ")")
							}
						})
					}
				});
			}
		})
	}

	function updateWithPicture() {
		let image = $("#profile-picture")[0];

		let formdata = new FormData();
		formdata.append("image", image.files[0]);
		formdata.append("nickname", $("#nickname").val());
		formdata.append("bio", $("#bio").val());

		$.ajax({ // editProfile
			url: "/info/controller?location=editProfile",
			data: formdata,
			processData: false,
			contentType: false,
			type: 'POST',
			success: function() {
				$.ajax({
					url: "/main/controller",
					data: { "location": "getNewProfile" },
					dataType: "json",
					success: function(data) {
						$("#nowProfilePic").attr("src", "/main/resources/images/profile/" + data.fileName)
					}
				})
			}
		});

		$.ajax({
			url: "/info/controller",
			data: { "location": "myInfo" },
			type: "POST",
			success: function(data) {
				$("#container").html(data); //container
				$(window).scrollTop(0);

				$.ajax({
					url: "/info/controller",
					data: { "location": "track", "userId": $("#userId").val() },
					type: 'POST',
					dataType: "html",
					success: function(data2) {
						$("#infoMenuContainer").html(data2);
						$("#myTrack").addClass("active");

						// 모든 좋아요 버튼 모양 바꾸기
						$("img[data-music_id]").each(function() {
							let thismusicId = $(this).attr("data-music_id");

							if (likeMusicArr.find(id => id == thismusicId)) { // 유저가 좋아요 누른 곡 아이디 배열에 지금 이미지의 곡 아이디가 있으면
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
							+ "150deg, "
							+ "rgb(" + (r * 0.7) + ", " + (g * 0.7) + "," + (b * 0.7) + "), "
							+ "rgb(" + (r * 0.6) + ", " + (g * 0.6) + "," + (b * 0.6) + "), "
							+ "rgb(" + (r) + ", " + (g) + "," + (b) + ")"
							+ ")")
					}
				})
			}
		});

	}




});
