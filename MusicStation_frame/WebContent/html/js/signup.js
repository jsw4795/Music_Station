$(()=>{
	// 아이디 칸에서  focusout 되면 이미 존재하는 아이디인지 확인
	$(document).on("focusout", "#userId:not([readonly])" ,function() {
		//공백 제거
		$(this).val($(this).val().replace(/\s/gi, ""));
		// 형식이 맞으면 ajax
		let result = validate(this);
		if(result == "clear"){
			let $this = $(this);
			$.ajax({
				url: "/frame/controller",
				data: {"location" : "idCheck", "inputId" : $(this).val()},
				type: "POST",
				dataType: "json",
				success: function(data) {
					// 이미 존재하는 아이디라면
					if(data.isValid == "false") {
						// alert-validate 클래스로 작동하는게 dataset으로 작동하는거 같아서 .data() 로 안바꾸고 attr로 바꿈
						$this.parent().attr("data-validate", "Already used ID");
						$this.parent().addClass("alert-validate");
					} else { // 사용 가능한 아이디라면
						$this.parent().addClass("alert-ok");
					}
					checkAll();
				}
			})
		} else if(result == "eng/num") {
			$(this).parent().removeClass("alert-ok")
			$(this).parent().attr("data-validate", "Only Eng or Num");
			$(this).parent().addClass("alert-validate");
			checkAll();
		} else if (result == "length"){
			$(this).parent().removeClass("alert-ok")
			$(this).parent().attr("data-validate", "length must be between 4 to 10");
			$(this).parent().addClass("alert-validate");
			checkAll();
		}
		
		
	})
	
	$(document).on("focus", "#userId:not([readonly])", function() {
		$(this).parent().removeClass("alert-validate");
		$(this).parent().removeClass("alert-ok");
	})
	
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
		checkAll();
	})
	
	// 비밀번호 확인
	$(document).on("keyup", "#passwordCheck:not([readonly])", function() {
		let check = $(this).val();
		let PW = $("#password").val();
		if(check != PW) {
			$(this).parent().removeClass("alert-ok");
			$(this).parent().attr("data-validate", "Not Equal");
			$(this).parent().addClass("alert-validate");
		} else {
			// 일치하면 구현
			$(this).parent().addClass("alert-ok");
		}
	});
	
	
	// 이메일 중복확인
	$(document).on("focusout", "#email:not([readonly])", function() {
		// 이메일 형식 맞을 때만 확인
		console.log(validate(this))
		if(validate(this)){
			let $this = $(this);
			$.ajax({
				url: "/frame/controller",
				data: {"location" : "emailCheck", "inputEmail" : $(this).val()},
				type: "POST",
				dataType: "json",
				success: function(data) {
					// 이미 존재하는 아이디라면
					if(data.isValid == "false") {
						// alert-validate 클래스로 작동하는게 dataset으로 작동하는거 같아서 .data() 로 안바꾸고 attr로 바꿈
						$this.parent().attr("data-validate", "Already used Email");
						$this.parent().addClass("alert-validate");
						
					} else { // 사용 가능한 아이디라면
						$this.parent().addClass("alert-ok");
					}
					checkAll();
				}
			})
		} else {
			$(this).parent().addClass("alert-validate");
			checkAll();
		}
		
		
	})
	// 다시 이메일 인풋 클릭하면
	$(document).on("focus", "#email:not([readonly])", function() {
		$(this).parent().attr("data-validate", "Enter valid Email");
		$(this).parent().removeClass("alert-validate");
		$(this).parent().removeClass("alert-ok");
	})
	
	// 세가지 필수 요소가 다 체크 됐는지 확인하고, 다 됐으면 코드 전송 버튼 클릭, 아니면 숨김
	function checkAll() {
		let ID_OK = $("#userId").parent().hasClass("alert-ok");
		let PW_OK = $("#password").parent().hasClass("alert-ok");
		let PWCK_OK = $("#passwordCheck").parent().hasClass("alert-ok");
		let EMAIL_OK = $("#email").parent().hasClass("alert-ok");
		// 세가지 다 확인됐으면 이메일 인증 보내기 보임
		if(ID_OK == true && PW_OK == true && PWCK_OK == true && EMAIL_OK == true){
			$("#emailCodeSendContainer").removeAttr("hidden");
		} else {
			hiddenEmailCodeSender();
		}
	}
	
	// 이메일 인증 코드 보내는 거 숨기는 함수
	function hiddenEmailCodeSender() {
		$("#emailCodeSendContainer").attr("hidden", "hidden");
		$("#emailCodeSendBtn").removeClass("btn-success");
		$("#emailCodeSendBtn").addClass("btn-primary")
	}
	
	// 코드 보내기 누르면 인풋들 수정 불가,
	// 이메일 보내고, 성공 시 버튼 색 바뀌면서 알림, 코드 입력창 보이기
	$("#emailCodeSendBtn").click(function() {
		$this = $(this);
		// 한번 눌리면 비활성화
		$this.attr("disabled", "disabled");
		$(".validate-input").slice(0, 4).find("input").attr("disabled", "disabled"); // 0번 인덱스부터 4개
		$(".validate-input").slice(0, 4).find("input").css("color", "rgb(164, 164, 164)")
		$.ajax({
			url: "/frame/controller",
			data: {"location" : "sendEmailCode", "userEmail" : $("#email").val()},
			type: "GET",
			dataType: "json",
			success: function(data) {
				if(data.isSuccess == "true"){
					// ajax로 이메일 보내기 성공시
					$this.removeClass("btn-primary");
					$this.addClass("btn-success");
					$("#emailCodeContainer").removeAttr("hidden");
					alert("이메일 발송에 성공했습니다.\n이메일을 확인하고 코드를 입력해 주세요.")
				} else {
					$this.removeClass("btn-primary");
					$this.addClass("btn-danger");
					alert("이메일 발송에 실패했습니다.\n관리자에게 문의하세요.");
				}
				
			}
		})
	});
	
	// 이메일 코드 받고 입력하는 버트 누르면 ajax로 인증처리
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
					alert("인증에 성공하였습니다.")
					$("#nickname").parent().removeAttr("hidden");
				} else {
					alert("인증번호가 일치하지 않습니다.")	
				}
			}
			
		})
		
	})
	
	
	// 닉네임 칸이 포커스 아웃되면 중복체크
	$(document).on("focusout", "#nickname:not([readonly])" ,function() {
		let result = validate(this);
		// 형식이 맞으면 ajax
		if(result == "clear"){
			let $this = $(this);
			$.ajax({
				url: "/frame/controller",
				data: {"location" : "nicknameCheck", "inputNickname" : $(this).val()},
				type: "POST",
				dataType: "json",
				success: function(data) {
					// 이미 존재하는 닉네임이면
					if(data.isValid == "false") {
						// alert-validate 클래스로 작동하는게 dataset으로 작동하는거 같아서 .data() 로 안바꾸고 attr로 바꿈
						$this.parent().attr("data-validate", "Already used Nickname");
						$this.parent().addClass("alert-validate");
					} else { // 사용 가능한 닉네임이면
						$this.parent().addClass("alert-ok");
						$("#submitBtn").removeClass("disabled");
						$("#submitBtn").removeAttr("disabled");
					}
				}
			})
		} else if(result == "length") {
			$(this).parent().addClass("alert-validate");
		}
	})
	
	$(document).on("focus", "#nickname:not([readonly])", function() {
		$(this).parent().attr("data-validate", "length must be between 1 to 10");
		$(this).parent().removeClass("alert-validate");
		$(this).parent().removeClass("alert-ok");
		$("#submitBtn").addClass("disabled");
		$("#submitBtn").attr("disabled", "disabled");
	})
	
	// 서브밋 버튼 클릭
	$("#submitBtn").click(function() {
		
		$.ajax({
			url: "/frame/controller",
			data: {"location" : "signup", 
				   "inputUserId" : $("#userId").val(),
				   "inputPassword" : $("#password").val(),
				   "inputEmail" : $("#email").val(),
				   "inputNickname" : $("#nickname").val()},
			type: "POST",
			dataType: "json",
			success: function(data) {
				if(data.isSuccess == "true") {
					alert("회원가입에 성공하였습니다.");
					location.reload(true);
				} else {
					alert("회원가입에 실패했습니다.\n관리자에게 문의하세요.");
				}
			}
			
		})
		
	})
	
	
	
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
	
	// 형식 확인 함수
	function validate (input) {
		// 이메일
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        } 
        // 아이디
        else if($(input).attr("id") == "userId"){
			let id = $(input).val();
			let replaceName = /^[0-9a-zA-Z\s]+$/
			
			if (id.length < 4 || id.length > 10) {
				return 'length';
        	} else if (!id.match(replaceName)) {
           		return "eng/num"
			} else {
				return 'clear';
			}
		} 
		// 비밀번호
		else if ($(input).attr("id") == "password") {
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
		// 닉네임
		else if($(input).attr("id") == "nickname"){
			let nickname = $(input).val();
			
			if (nickname.length < 1 || nickname.length > 10) {
				return 'length';
			} else{
				return "clear";
			}
		} 
		// 뭐지
		else {
            if($(input).val().trim() == ''){
                return false;
            } 
        }
        return true; 
    }
	
	
})


// 딜레이 주는 함수
function wait(sec) {
    let start = Date.now(), now = start;
    while (now - start < sec * 1000) {
        now = Date.now();
    }
}