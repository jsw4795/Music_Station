<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Login</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
</head>
<body>
<div class="container">
<h2>Login</h2>
<script>
function loginValidate(fn){
	if(!fn.userId.value){
		alert("아이디를 입력하세요");
		fn.userId.focus();
		return false;
	}
	if(fn.pwd.value==""){
		alert("패스워드를 입력하세요");
		fn.pwd.focus();
		return false;
	}
}
</script>
<span style="font-size:1.5em; color:red;">${LoginNG}</span>
			<form name="loginForm" method="post" action="/loginAction" onsubmit="return loginValidate(this);">
				<table class="table-bordered" style="width:50%;">
					<tr>
						<td>
							<input type="text" class="form-control" name="userId" placeholder="아이디" tabindex="1">
						</td>
						<td rowspan="2" style="width:80px;">
							<button type="submit" class="btn btn-primary" style="height:77px; width:77px;"  tabindex="3">로그인</button>
						</td>
					</tr>
					<tr>
						<td><input type="password" class="form-control" name="pwd" placeholder="패스워드" tabindex="2"></td>
					</tr>
				</table>
			</form>
<%-- 	<!--로그인이 된 경우에는 회원의 이름과 로그아웃 버튼을 출력 -->
	<c:choose>
		<c:when test="${not empty sessionScope.siteUserInfo.userId }">
			<div class="row" style="border:2px solid #cccccc;padding:10px;">			
				<h4>아이디:${sessionScope.siteUserInfo.userId }</h4>
				<h4>이름:${sessionScope.siteUserInfo.name }</h4>
				<br /><br />
				<button class="btn btn-danger" onclick="location.href='/Logout.jsp';">로그아웃</button> 
				&nbsp;&nbsp;
				<button class="btn btn-primary" onclick="location.href='/controller?location=submit';"> 내 정보</button> 
			</div>
		</c:when>
		<c:otherwise>
			<span style="font-size:1.5em; color:red;">${LoginNG}</span>
			<form name="loginForm" method="post" action="./loginAction" onsubmit="return loginValidate(this);">
				<!--로그인에 성공할 경우 이동할 페리지의 경로를 폼값으로 전송  -->
				<input type="hidden" name="backUrl" value="${param.backUrl}"/>
				<table class="table-bordered" style="width:50%;">
					<tr>
						<td>
							<input type="text" class="form-control" name="userId" placeholder="아이디" tabindex="1">
						</td>
						<td rowspan="2" style="width:80px;">
							<button type="submit" class="btn btn-primary" style="height:77px; width:77px;"  tabindex="3">로그인</button>
						</td>
					</tr>
					<tr>
						<td><input type="password" class="form-control" name="pwd" placeholder="패스워드" tabindex="2"></td>
					</tr>
				</table>
			</form>
		</c:otherwise>
	</c:choose> --%>
</div>
</body>
</html>