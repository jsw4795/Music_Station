<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Test Main</title>
<style>
	
	/* 모든 기본 여백 제거 */ 
	*, html, body {
		margin: 0;
		padding: 0;
	}
	/* ajax로 받은 HTML 태그가 들어갈 컨테이너 */
	#container {
		width: 1240px;
		min-height: 1080px;
		background-color: lightblue;
		margin: 0 auto;
	}
	/* 하단 재생 바 */
	#playBar {
		width: 100%;
		height: 80px;
		position: sticky;
		bottom: 0px;
		background-color: gray;
	}
	/* 상단 네비게이션 바에서 화면 가로 전체 길이로 보여질 배경 */
	#navBackground {
		width: 100%;
		height: 30px;
		position: sticky;
		top: 0px;
		background-color: gray;
	}
	/* 상단 네비게이션 바에서 실제 컨텐츠 들이 들어갈 컨테이너 */
	#navContainer {
		width: 1280px;
		height: 30px;
		background-color: lightgray;
		margin: auto;
		text-align: center;
	}
	.last{
		background-color: yellow;
		text-align: center;
	}
	h1, h2 {
		text-align: center;
	}
</style>
<script src="https://code.jquery.com/jquery-3.7.1.min.js" ></script>
<script>
	$(()=>{
		load(1);
	});
	
	function load(page) {
		$.ajax({
			url: "/load",
			type: "POST",
			data: {"page" : page},
			dataType: "html",
			success: (data)=>{
				$("#container").html(data);
			}
		});
	}
</script>
</head>
<body>
	<div id="navBackground">
		<div id="navContainer">
			<a href="javascript:load(1)">1페이지로</a>
			<a href="javascript:load(2)">2페이지로</a>
		</div>
	</div>
	<div id="container">
	
	</div>
	<div id="playBar">
		
	</div>
</body>
</html>