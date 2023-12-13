<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>리스트 검색</title>
</head>
<link rel="stylesheet" type="text/css" href="/search/idxStyle.css">
<link rel="stylesheet" type="text/css" href="/search/dropdown.css">
<link rel="stylesheet" type="text/css" href="/search/profile.css">
<body>
	<div id="searchContainer" style="width: 1240px;">
	<br>
	<br>
		<div class="two alt-two" id = "data" data-keyword="<%=request.getParameter("keyword")%>">
		  <h1>People
		    <span>Search</span>
		  </h1>
		</div>
	     <div class="dropdown">
			<div class="dropdown-menu">People</div>
				<div class="dropdown-content">
				     <a id = "all" class="btn">EveryThing</a>
				     <a id = "tracks" class="btn">Tracks</a>
				     <a id = "users" class="btn">People</a>
				</div>
	      </div>
	      
	 	  <c:forEach var="user" items="${list_users}">	
	   		<div class = "usercontainer"> 
			  	<div class="box" style="background: #BDBDBD;">
		    		<img class="profile" src="/main/resources/images/profile/${user.picture}">
				</div>
				<div class = "bio">${user.bio}</div>
				<div class = "nickname"><span class="btn artist-small" data-artist="${user.userId }">${user.nickname}</span></div>
			</div>
		 </c:forEach>
	 </div>
<script src="/search/search.js" type="text/javascript"></script>
</body>
</html>