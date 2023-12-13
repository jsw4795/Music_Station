$(() => {
	//img gradients 시작
	let img = document.querySelector("#musicDetailPic");
	let avgColor = getAverageColorOfImage(img);
	let r = avgColor.r;
	let g = avgColor.g;
	let b = avgColor.b;
	$(".musicdetail").css("background-image", "linear-gradient("
													+"150deg, "
													+"rgb(" +(r*0.7) + ", "+ (g*0.7) +"," + (b*0.7) + "), "
													+"rgb(" +(r*0.6) + ", "+ (g*0.6) +"," + (b*0.6) + "), "
													+"rgb(" +(r*0.7) + ", "+ (g*0.7) +"," + (b*0.7) + "), "
													+"rgb(" +(r*0.6) + ", "+ (g*0.6) +"," + (b*0.6) + "), "
													+"rgb(" +(r*0.7) + ", "+ (g*0.7) +"," + (b*0.7) + "), "
													+"rgb(" +(r*0.6) + ", "+ (g*0.6) +"," + (b*0.6) + "), "
													+"rgb(" +(r*0.7) + ", "+ (g*0.7) +"," + (b*0.7) + "), "
													+"rgb(" +(r*0.6) + ", "+ (g*0.6) +"," + (b*0.6) + "), "
													+"rgb(" +(r*0.7) + ", "+ (g*0.7) +"," + (b*0.7) + "), "
													+"rgb(" +(r*0.6) + ", "+ (g*0.6) +"," + (b*0.6) + "), "
													+"rgb(" +(r) + ", "+ (g) +"," + (b) + ")"
													+")")
	
	$("#request").on("click", ajaxGetComments);
})


function ajaxGetComments() {
	let inputCommentContent = $("#commentContent").val();
	let userId = $("#userId").val();
	let nowMusicId = $("#musicId").val();
	if (inputCommentContent == '') {
		alert("내용을 입력하세요");
		return;
	}

	$.ajax({
		url: "/detail/controller",
		type: "POST",
		data: {
			"location": "commentWrite",
			"commentContent": inputCommentContent,
			"userId": userId,
			"musicId": nowMusicId
		},
		success: function() {
			$.ajax({
				url: "/detail/controller",
				type: "GET",
				data: { "location": "getMusicDetailPage", "musicId": nowMusicId },
				dataType: "html",
				success: function(data) {
					$("#container").html(data);
					// 재생중인 모든 음악에 바로 재생표시를 정지로 바꿈 (음악이 재생중이라면)
					console.log($('#musicTitleArtistContainer[data-music_id="'+ $("audio").attr("data-music_id") +'"]'))
					if(playState == "pause"){
						$('#musicTitleArtistContainer[data-music_id="'+ $("audio").attr("data-music_id") +'"]').find("#playBtnInDetail").attr("src", "./resources/images/icons/icon-playing-pause.png");
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
				}
			})
		}
	});
}


function editComment(num) {
	let commentid = num;
	Getupdate();

	function Getupdate() {
		let commentId = commentid;
		let inputCommentContent = $("#ccontent_" + commentId).text();
		console.log(inputCommentContent);
		let nowMusicId = $("#musicId").val();
		$("#ccontent_" + commentId).html("<textarea rows='3' cols='70' id='content'>" + inputCommentContent
			+ "</textarea>"
			+ "<button class='complete'>수정 완료</button>"
			+ "<button class='cancle'>취소</button>");

		$(document).ready(function() {
			$(".cancle").on("click", Getcancle);
		});
		function Getcancle() {
			let nowMusicId = $("#musicId").val();

			$.ajax({
				url: "/detail/controller",
				type: "GET",
				data: { "location": "getMusicDetailPage", "musicId": nowMusicId },
				dataType: "html",
				success: function(data) {
					$("#container").html(data);
					// 재생중인 모든 음악에 바로 재생표시를 정지로 바꿈 (음악이 재생중이라면)
					if(playState == "pause"){
						$('#musicTitleArtistContainer[data-music_id="'+ $("audio").attr("data-music_id") +'"]').find("#playBtnInDetail").attr("src", "./resources/images/icons/icon-playing-pause.png");
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
				}
			})
		}

		$(document).ready(function() {
			$(".complete").on("click", ajaxGetupdate);
		});
		function ajaxGetupdate() {
			let commentId = commentid;
			let nowMusicId = $("#musicId").val();
			let inputContent = $("#content").val();
			if (inputContent == '') {
				alert("내용을 입력하세요");
				return;
			}


			$.ajax({
				url: "/detail/controller",
				type: "POST",
				data: {
					"location": "commentUpdate",
					"commentId": commentId,
					"commentContent": inputContent,
					"musicId": nowMusicId
				},
				success: function() {
					$.ajax({
						url: "/detail/controller",
						type: "GET",
						data: { "location": "getMusicDetailPage", "musicId": nowMusicId },
						dataType: "html",
						success: function(data) {
							$("#container").html(data);
							// 재생중인 모든 음악에 바로 재생표시를 정지로 바꿈 (음악이 재생중이라면)
							if(playState == "pause"){
								$('#musicTitleArtistContainer[data-music_id="'+ $("audio").attr("data-music_id") +'"]').find("#playBtnInDetail").attr("src", "./resources/images/icons/icon-playing-pause.png");
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
						}
					})
				}
			});
		}
	}
}

function deleteComment(num) {
	let commentid = num;
	ajaxGetdelete();

	function ajaxGetdelete() {
		let commentId = commentid;
		let nowMusicId = $("#musicId").val();
		$.ajax({
			url: "/detail/controller",
			type: "POST",
			data: {
				"location": "commentDelete",
				"commentId": commentId,
				"musicId": nowMusicId
			},
			success: function() {
				$.ajax({
					url: "/detail/controller",
					type: "GET",
					data: { "location": "getMusicDetailPage", "musicId": nowMusicId },
					dataType: "html",
					success: function(data) {
						$("#container").html(data);
						// 재생중인 모든 음악에 바로 재생표시를 정지로 바꿈 (음악이 재생중이라면)
							if(playState == "pause"){
								$('#musicTitleArtistContainer[data-music_id="'+ $("audio").attr("data-music_id") +'"]').find("#playBtnInDetail").attr("src", "./resources/images/icons/icon-playing-pause.png");
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
					}
				})
			}
		});
	}
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