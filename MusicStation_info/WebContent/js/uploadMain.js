$(function() {
	// 파일 선택 버튼 클릭 시 파일 입력 요소를 클릭합니다
	$('.chooseFiles_btn').click(function() {
		$('.chooseFiles_input').click();
	});



	// 파일 입력 요소를 가져옵니다.
	const chooseFilesInput = document.querySelector('.chooseFiles_input');

	// 파일 입력 요소의 변경 이벤트를 감지하여 파일이 선택되면 activeUpload_form을 보이게 설정합니다.
	chooseFilesInput.addEventListener('change', function() {
		const uploadModalContainer = document.querySelector('.uploadModalContainer');
		const activeUpload_form = document.querySelector('.activeUpload_form');
		const uploadDetailsoverlay =document.querySelector(".uploadDetailsoverlay");

		if (chooseFilesInput.files.length > 0) {
			// 파일이 선택되었을 때 activeUpload_form을 보이게 설정합니다.
			uploadModalContainer.style.display ="block";
			activeUpload_form.style.display = 'block';
			uploadDetailsoverlay.style.display = 'block';
			
		} else {
			// 파일이 선택되지 않았을 때 activeUpload_form을 숨깁니다.
			uploadModalContainer.style.display = 'none';
		}
	});

});