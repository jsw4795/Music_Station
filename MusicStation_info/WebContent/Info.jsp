<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>  
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link href="/info/css/infoStyle.css" rel="stylesheet">
<link href="/main/css/mainStyle.css" rel="styleSheet">
<link rel="stylesheet" href="/frame/css/audioPlay.css" />
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="/info/js/info.js"></script>
</head>

<body>
<div id="infoContainer">
	<%--profile 보여주는 영역 --%>
	<div id = "profile">
		<div id="info">
			<div id="user-info" data-artistId="${siteUserInfo.userId }" data-userId="${userId }">
				<div id="photo"> 
					<img src="/main/resources/images/profile/${siteUserInfo.picture }" alt ="profile picture">
				</div>
				<div id = "user-details"> 
					<h2>${siteUserInfo.nickname}</h2><br>
					<h4>${siteUserInfo.userId} </h4><br>
					<c:if test="${not empty siteUserInfo.bio}">
        				<h4>${siteUserInfo.bio}</h4>
    				</c:if>
				</div>
			</div>
		</div>
	</div>
	<hr>
<div id="user-info-btn">
	<div id = "infoBtnContainer">
		<button id="myTrack" class="infoBtn">Tracks</button>
		<button id="myPopularTrack" class="infoBtn">PopularTrack</button>
		<button id="likes" class="infoBtn">Likes</button>
		
		<c:if test="${siteUserInfo.userId == userId }">
			<button id="upload" class="btn">
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-upload" viewBox="0 0 16 16">
	  		<path fill-rule="evenodd" d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"/>
	  		<path fill-rule="evenodd" d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"/>
			</svg>&nbsp; Upload &nbsp;</button>
			
			<button id="edit" class="btn">
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
	  		<path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
			</svg>&nbsp; Edit &nbsp; </button>
		</c:if>
	</div>
</div>

<%--메뉴바 --%>
<div id="menu"> 
	<div id="infoMenuContainer"></div>
	
	<div id="modal">  <%--modal 창 : 전체 영역(hidden 처리) --%>
		<div id="modal-dialog"> <%--modal 창 안에 흰색 영역 --%>
			<div id="modal_content">
				<h2 id="modal-title">Edit your Profile</h2>
				<hr>
				<form id="profileFrm" enctype="multipart/form-data">
					<div id="edit_img"> <%--img 변경 영역 --%>
						<img alt="profile_picture" id="profile-thumbnail" src="/main/resources/images/profile/${siteUserInfo.picture }">
						<label id="input-file-btn" for="profile-picture">Update Image</label>
						<input type="file" id="profile-picture" name="profilePicture" accept ="image/*">
					</div>
					<div id="inputInfo">
					<div> <%--ID 작성 --%>
						<p><label>Display ID</label></p>
						<p id="writeId"><input type="text" id="userId" name="userId" value="${siteUserInfo.userId}" readonly></p>
					</div>
					<div id="writeNick"><%--닉네임 작성 --%>
						<p id="marginNick"><label for="nickname">NickName</label>
						<p id="nick"><input type="text" name="nickname" id="nickname" value="${siteUserInfo.nickname}"/></p>
						<input type="hidden" id="checkDuplicateNickname"  name="checkDuplicateNickname" value="false"/>
						<button type="button" id="checkNickName">중복 확인</button>
						<div id="result"></div>
					</div>
					<div><%--이메일 작성 --%>
						<p><label for="email"> Email</label></p>
						<p id="writeEmail"><input type="text" id="email" name="email" value="${siteUserInfo.email}" readonly /></p>
					</div>
					<div id="writeBio"><%--내소개 작성 --%>
						<p><label for="bio">Bio</label></p>
						<p><textarea rows="10" cols="20" id="bio" name="bio">${siteUserInfo.bio}</textarea></p>
					</div>
					</div>
				<div class="profileUpdateBtnContainer">
					<span class="notice">프로필 사진은 변경후 10초 뒤 반영됩니다.</span>
					<button type="button" id="modal-cancle">취소</button>
					<button type="button" id="submit-btn">수정 완료</button>
					<button type="button" id="withdrawalBtn">회원 탈퇴</button>
				</div>
				</form>
				<div id="withdrawalContainer" hidden="hidden" >
					<h1>회원 탈퇴</h1>
					<h2>회원 탈퇴 후, 관련된 모든 기록은 삭제되며, 되돌릴 수 없습니다.</h2>
					<h3>비밀번호를 입력해주세요.</h3>
					<input type="password" id="withdrawalPassword" />
					<button id="withdrawalSubmit">탈퇴</button>
					<button type="button" id="withdrawal-cancle">취소</button>
				</div>
			</div>

		</div> <%--modal_info 영역 끝 --%>
	</div> <%--modal 영역 끝 --%>
	 
	</div> <%--menu 영역 끝 --%>
</div><%--container끝 --%>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>
</body>
</html>