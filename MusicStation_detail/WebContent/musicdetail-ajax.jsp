<%@page import="com.mystudy.vo.MusicVO"%>
<%@page import="java.util.ArrayList"%>
<%@page import="com.mystudy.dao.CommentDAO"%>
<%@page import="com.mystudy.dao.GenreDAO"%>
<%@page import="com.mystudy.vo.GenreVO"%>
<%@page import="com.mystudy.dao.LikeDAO"%>
<%@page import="com.mystudy.vo.LikeVO"%>
<%@page import="com.mystudy.dao.UserDAO"%>
<%@page import="com.mystudy.vo.UserVO"%>
<%@page import="com.mystudy.vo.CommentVO"%>
<%@page import="java.util.List"%>
<%@page import="com.mystudy.dao.MusicDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>   

<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/detail/musicDetail.css" />
<meta charset="UTF-8">
<title>음악 상세페이지</title>
<script src="https://code.jquery.com/jquery-3.7.1.min.js" type="text/javascript"></script>



</head>
<body>
<div id="musicDetailContainer" style="width: 1240px;">
	<div class="musicdetail" style=" background-size:cover;">
		<div class="musicimg">
			<img src="/main/resources/images/musicPic/${musicVO.picture }" id="musicDetailPic" alt="음악사진" width="260px" height="260px" style="border: 1px solid #000;">
		</div>
		<div class="musicinfo">
			<div id="musicTitleArtistContainer" data-music_id="${musicVO.musicId }">
				<img src="/main/resources/images/icons/icon-playing.png" class="btn" id="playBtnInDetail" alt="재생이미지">
				<span id="musicTitle" style="font-size: 1.5em;font-weight: bold; color: #fff; background-color: #000; opacity: 0.8;">${musicVO.title }</span>
				<div class="btn artist-small" data-artist="${artistVO.userId }">
				<span id="musicArtist" style="font-size: 1em;font-weight: bold; color: #fff; background-color: #000; opacity: 0.8;">${artistVO.nickname }</span>
				</div>
			</div>
			<p id="musicInfo">${musicVO.info }</p>
			<div style="display: inline-block; position: absolute; top: 200px;">
				<img alt="좋아요" src="/main/resources/images/icons/icon-like-not.png" class="btn" width="30px" data-music_id="${musicVO.musicId }">
				<span id="likeCount">${likeCount }</span>
			</div>
		</div>
	</div>
	
	<%--댓글 작성 영역 --%>
	
	<p id="commentWritingContainer">
		<img alt="프로필사진" src="/main/resources/images/profile/${userVO.picture }" width="60px">
		<textarea id="commentContent" name="commentContent" rows="4" cols="100" placeholder="Write a comment" style="resize: none"></textarea>
		<input type="hidden" id ="musicId" name="musicId" value="${musicVO.musicId }">
		<input type="hidden" id ="userId" name="userId" value="${userVO.userId }">
		<button id="request">저장</button>
	</p>
	
	
	
	<%--음악에 딸린 댓글 표시 영역 --%>
	<div class="comment">
		<div class="artistprofile">
			<p><img alt="프로필사진" src="/main/resources/images/profile/${artistVO.picture }" width="150px" style="border-radius: 50%;"></p>
			<p style="text-align: center; font-size: 1.1em;"><span class="btn artist-small" data-artist="${artistVO.userId }">${artistVO.nickname }</span></p>
		</div>
		<div class="comm">
			<h3>&nbsp;&nbsp;&nbsp;<img alt="말풍선" src="/detail/img/chat.jpeg" width="20px">
			&nbsp;${commentList.size() }&nbsp;comments</h3>
			<hr>
			<c:forEach var="commVO" items="${commentList }" varStatus="status">
				<p>
					<span>
						&nbsp;<img src="/main/resources/images/profile/${commentUserPicList[status.index]}" alt="프로필사진" width="25px" height="25px">
					</span>
					<input type="hidden" id ="commentId" name="commentId" value="${commVO.commentId }">
					<span style="font-size: 1.2em; font-weight: bold" id ="commentuserId"> &nbsp;&nbsp;${commVO.nickname }&nbsp;&nbsp;</span>
					<c:if test="${commVO.userId eq userVO.userId}">
						<span style="float: right"><button class="delete" onclick="deleteComment(${commVO.commentId })">삭제</button></span>
						<span style="float: right"><button class="update" onclick="editComment(${commVO.commentId })">수정</button></span>
					</c:if>
					<span style="font-size: 0.8em; float: right">${commVO.uploadDate }&nbsp;&nbsp;</span>
				</p>
				<p id="ccontent_${commVO.commentId }">&nbsp;&nbsp;${commVO.commentContent }</p>
			</c:forEach>
			


		</div>	
	</div>
</div>

<script src="/detail/musicDetail.js" type="text/javascript"></script>

</body>
</html>