$(()=>{
	/* if($("#userId").val().trim().length < 1){
			$("#userId").parent().addClass("alert-validate");
			return;
		} */
		
	
	$("#userIdCheckBtn").click(function() {
		if($("#userId").val().trim().length < 1){
			$("#userId").parent().addClass("alert-validate");
			return;
		}
		
		$.ajax({
			url: "/frame/controller",
			data: {"location" : "idCheck", "inputId" : $("#userId").val()},
			type: "GET",
			dataType: "json",
			success: function(data) {
				if(data.isValid == "false") { // 아이디가 존재하면
					$("#userId").attr("disabled", "disabled"); // 0번 인덱스부터 4개
					$("#userId").css("color", "rgb(164, 164, 164)")
					$("#userIdCheckBtn").attr("disabled", "disabled");
					$("#userIdCheckBtn").addClass("btn-success");
					
					$("#emailContainer").removeAttr("hidden");
				} else {
					alert("존재하지 않는 아이디 입니다.");
				}
			}
		})
	});
	
	$(document).on("focus", "#userId:not([readonly])", function() {
		$(this).parent().removeClass("alert-validate");
	})
	
	
	// 코드 보내기
	$("#emailCodeSendBtn").click(function() {
        if($("#email").val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            $("#email").parent().addClass("alert-validate");
            return;
        }
		
		$this = $(this);
		
		$.ajax({
			url: "/frame/controller",
			data: {"location" : "sendEmailCodeFindPw", "userId" : $("#userId").val(), "userEmail" : $("#email").val()},
			type: "GET",
			dataType: "json",
			success: function(data) {
				if(data.isSuccess == "true"){
					// ajax로 이메일 보내기 성공시
					$this.removeClass("btn-primary");
					$this.addClass("btn-success");
					$("#emailCodeContainer").removeAttr("hidden");
					$this.attr("disabled", "disabled");
					$("#email").attr("disabled", "disabled");
					$("#email").css("color", "rgb(164, 164, 164)");
					alert("이메일 발송에 성공했습니다.\n이메일을 확인하고 코드를 입력해 주세요.")
				} else if(data.isSuccess == "false") {
					$this.removeClass("btn-primary");
					$this.addClass("btn-danger");
					alert("이메일 발송에 실패했습니다.\n관리자에게 문의하세요.");
				} else if(data.isSuccess == "notMatch"){
					alert("아이디와 이메일이 일치하지 않습니다.");
				}
				
			}
		})
	});
	
	// 이메일 코드 받고 입력하는 버튼 누르면 ajax로 인증처리
	$("#codeCheckBtn").click(function() {
		let $this = $(this);
		
		$.ajax({
			url: "/frame/controller",
			data: {"location" : "emailCodeCheck", "inputCode" : $(this).parent().find("#emailCode").val().trim()},
			type: "POST",
			dataType: "json",
			success: function(data) {
				if(data.isValid == "true") {
					$this.removeClass("btn-primary");
					$this.addClass("btn-success");
					$("#codeCheckBtn").attr("disabled", "disabled");
					alert("인증에 성공하였습니다.");
					
					$("#emailCode").attr("disabled", "disabled");
					$("#emailCode").css("color", "rgb(164, 164, 164)");
					
					$("#resetPwContainer").removeAttr("hidden");
				} else {
					alert("인증번호가 일치하지 않습니다.")	
				}
			}
			
		})
		
	})
	// 다시 이메일 인풋 클릭하면 경고 숨김
	$(document).on("focus", "#email:not([readonly])", function() {
		$(this).parent().removeClass("alert-validate");
		$(this).parent().removeClass("alert-ok");
	})
	
	// 비밀번호 재설정 부분
	
	// 비밀번호 키다운 시 valid 확인
	$(document).on("keyup", "#password:not([readonly])", function() {
		$("#passwordCheck").trigger("keyup");
		// 입력 받는 즉시 공백 제거
		$(this).val($(this).val().replace(/\s/gi, ""));
		let result = validate(this)
		if(result == "clear"){
			$(this).parent().addClass("alert-ok");
		} else if(result == "eng/num") {
			$(this).parent().removeClass("alert-ok")
			$(this).parent().attr("data-validate", "Only Eng or Num");
			$(this).parent().addClass("alert-validate");
		} else if (result == "length"){
			$(this).parent().removeClass("alert-ok")
			$(this).parent().attr("data-validate", "length must be between 6 to 16");
			$(this).parent().addClass("alert-validate");
		}
	})
	
	// 비밀번호 확인
	$(document).on("keyup", "#passwordCheck:not([readonly])", function() {
		let check = $(this).val();
		let PW = $("#password").val();
		if(check != PW) {
			$(this).parent().removeClass("alert-ok");
			$(this).parent().attr("data-validate", "Not Equal");
			$(this).parent().addClass("alert-validate");
			
			// 버튼 비활성화
			$("#resetPwBtn").addClass("disabled");
			$("#resetPwBtn").attr("disabled");
		} else {
			// 일치하면 구현
			$(this).parent().addClass("alert-ok");
			// 비밀번호 확인이 일치하면 버튼 활성화
			$("#resetPwBtn").removeClass("disabled");
			$("#resetPwBtn").removeAttr("disabled");
		}
	});
	
	// 비밀번호 초기화 버튼 클릭 시
	$("#resetPwBtn").click(function() {
		// 하나라도 체크 안됐으면 리턴
		if( !$("#password").parent().hasClass("alert-ok") || !$("#passwordCheck").parent().hasClass("alert-ok") ){
			return;
		}
		$.ajax({
			url: "/frame/controller",
			data: {"location" : "resetPassword", "userId" : $("#userId").val(), "newPassword" : $("#password").val()},
			type: "POST",
			dataType: "json",
			success: function(data) {
				if(data.isSuccess == "true"){
					alert("비밀번호 초기화에 성공했습니다.\n설정하신 비밀번호로 다시 로그인 해주세요.");
					location.reload(true);
				} else {
					alert("비밀번호 초기화에 실패했습니다.\n관리자이게 문의 해주세요.")
				}
			}
		})
		
	});
	
	
	
	
 	
	
	
	// 로그인으로 돌아가기 누르면 ajax로 화면 바꾸기
	$("#goLogin").on("click", function() {
		$.ajax({
			url: "/frame/controller",
			data: {"location" : "getLoginPage"},
			type: "POST",
			dataType: "html",
			success: function(data) {
				// 모든 이벤트 리스너 종료
				$(document).off();
				$("body").html(data);
				$(document).attr("title", "Login");
			}
		})
	})
})



// 비밀번호 형식 체크 함수
	function validate(input) {
		if ($(input).attr("id") == "password") {
			let pw = $(input).val();
			let replaceName = /^[0-9a-zA-Z\s]+$/
			
			if (pw.length < 6 || pw.length > 16) {
				return 'length';
        	} else if (!pw.match(replaceName)) {
           		return "eng/num"
			} else {
				return 'clear';
			}
		}
	}

