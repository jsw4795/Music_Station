$(function() {
	$(".imageChosserBtn").click(function() {
		$(".imageChooser_fileInput").click();
	});

	//cancle 버튼 누르면 uploadMain으로 다시 돌아가기
	$(".activeUpload_cancle").click(function() {
		$.ajax({
			url: "/info/controller",
			data: { "location": "upload" },
			type: "POST",
			dataType: "html",
			success: function(data) {
				$("#uploadContainer").html(data); //container
			}
		});
	});

	//save버튼 누르면 db에 insert
	$(".activeUpload_Save").click(function() {

		if (title == "") {
			alert("제목을 입력하세요");
			return false;
		}

		let imageInput = $("#picture")[0];
		let musicInput = $("#musicFileInput")[0];

		if (imageInput.files.length === 0) {
			alert("파일을 선택해주세요");
			return;
		}
		const formData = new FormData();
		formData.append("image", imageInput.files[0]);
		formData.append("music", musicInput.files[0]);

		formData.append("title", $("#title").val());
		formData.append("info", $("#info").val());

		$.ajax({
			url: "/info/controller?location=uploadSave",
			data: formData,
			type: "POST",
			processData: false,
			contentType: false,
			success: function() {

			}
		});

		$.ajax({
			url: "/info/controller",
			data: { "location": "myInfo" },
			type: "POST",
			dataType: "html",
			success: function(data) {
				$("#container").html(data); //container

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
	});



	$("#picture").on("change", function(e) {
		let reader = new FileReader();

		reader.onload = function(e) {
			$("#thumbnail").attr("src", e.target.result);
		};

		reader.readAsDataURL(e.target.files[0]);
	})


});

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
