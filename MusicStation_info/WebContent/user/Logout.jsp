<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!--Logout.jsp  -->
<%
//방법 1 : 속성을 지우거나
session.removeAttribute("userId");
session.removeAttribute("pwd");
//방법2 :세션개체에 저장된 모든 속성 삭제
session.invalidate();

response.sendRedirect("/user/Login.jsp");
%>