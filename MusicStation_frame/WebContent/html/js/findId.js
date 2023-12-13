$(()=>{
	// 코드 보내기 누르면 인풋들 수정 불가,
	// 이메일 보내고, 성공 시 버튼 색 바뀌면서 알림, 코드 입력창 보이기
	$("#emailCodeSendBtn").click(function() {
        if($("#email").val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            $("#email").parent().addClass("alert-validate");
            return false;
        }
		
		$this = $(this);
		
		$.ajax({
			url: "/frame/controller",
			data: {"location" : "sendEmailCodeFindId", "userEmail" : $("#email").val()},
			type: "GET",
			dataType: "json",
			success: function(data) {
				if(data.isSuccess == "true"){
					// ajax로 이메일 보내기 성공시
					$this.removeClass("btn-primary");
					$this.addClass("btn-success");
					$("#emailCodeContainer").removeAttr("hidden");
					$this.attr("disabled", "disabled");
					$(".validate-input").slice(0, 4).find("input").attr("disabled", "disabled"); // 0번 인덱스부터 4개
					$(".validate-input").slice(0, 4).find("input").css("color", "rgb(164, 164, 164)")
					alert("이메일 발송에 성공했습니다.\n이메일을 확인하고 코드를 입력해 주세요.")
				} else if(data.isSuccess == "false") {
					$this.removeClass("btn-primary");
					$this.addClass("btn-danger");
					alert("이메일 발송에 실패했습니다.\n관리자에게 문의하세요.");
				} else if(data.isSuccess == "notExist"){
					alert("존재하지 않는 이메일입니다.");
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
					alert("인증에 성공하였습니다.");
					
					// 이메일로 아이디 가져와서 보여주기
					$.ajax({
						url: "/frame/controller",
						data: {"location" : "findId", "inputEmail" : $("#email").val()},
						type: "POST",
						dataType: "json",
						success: function(data) {
							$("#resultContainer").find("span").first().text("Your ID is");
							$("#resultContainer").find("span").last().text("'" + data.userId + "'");
						}
					})
					
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


