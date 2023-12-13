$(()=>{
	
	// 공백없이 값이 다 들어왔으면 #checked 에 click을 발생시킨다 (그 때 ajax)
	$("#checked").on("click", function() {
		$.ajax({
			url: "/frame/controller",
			data: {"location" : "login", "userId" : $("#userId").val(), "password" : $("#password").val()},
			type: "POST",
			dataType: "json",
			success: function(data) {
				let isSuccess = data.isSuccess;
				
				// 성공하면 /frame/index 로 이동(메인페이지)
				if(isSuccess == 'true') {
					// 다른 context-root에도 session에 userId 추가하는 ajax 실행하면 다 로그인 확인 가능할듯
					location.reload(true);
				} else {
					alert("아이디 또는 비밀번호가 일치하지 않습니다.");
				}
			}
		})
	})
	
	// 로그인은 아니지만 회원가입 버튼 누르면 ajax로 화면 바꾸기
	$("#goSignUp").on("click", function() {
		$.ajax({
			url: "/frame/controller",
			data: {"location" : "getSignUpPage"},
			type: "POST",
			dataType: "html",
			success: function(data) {
				$("body").html(data);
				$(document).attr("title", "SignUp");
			}
		})
		
	})
	
	// 아이디 찾기 누르면 화면 변경
	$("#goFindId").on("click", function() {
		$.ajax({
			url: "/frame/controller",
			data: {"location" : "getFindIdPage"},
			type: "POST",
			dataType: "html",
			success: function(data) {
				$("body").html(data);
				$(document).attr("title", "Find ID");
			}
		})
		
	})
	
	// 비밀번호 찾기 누르면 화면 변경
	$("#goFindPw").on("click", function() {
		$.ajax({
			url: "/frame/controller",
			data: {"location" : "getFindPwPage"},
			type: "POST",
			dataType: "html",
			success: function(data) {
				$("body").html(data);
				$(document).attr("title", "Find PW");
			}
		})
		
	})
	
	
	
})

// 딜레이 주는 함수
function wait(sec) {
    let start = Date.now(), now = start;
    while (now - start < sec * 1000) {
        now = Date.now();
    }
}