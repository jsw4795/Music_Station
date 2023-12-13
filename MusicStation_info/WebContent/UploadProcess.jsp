<%@ page import="com.mystudy.dao.FileDAO"%>
<%@ page import="com.mystudy.vo.FileVO"%>
<%@ page import="java.util.Date"%>
<%@ page import="java.text.SimpleDateFormat"%>
<%@ page import="java.io.File"%>
<%@ page import="com.oreilly.servlet.MultipartRequest"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
String saveDirectory = request.getSession().getServletContext().getRealPath("/Uploads");  // 저장할 디렉터리
int maxPostSize = 1024 * 1000;  // 파일 최대 크기(1MB)
String encoding = "UTF-8";  // 인코딩 방식

try {
    // 1. MultipartRequest 객체 생성
    MultipartRequest mr = new MultipartRequest(request, saveDirectory,maxPostSize, encoding);
                                               

    // 2. 새로운 파일명 생성
    String fileName = mr.getFilesystemName("attachedFile");  // 현재 파일 이름
    String ext = fileName.substring(fileName.lastIndexOf("."));  // 파일 확장자
    String now = new SimpleDateFormat("yyyyMMddHmsS").format(new Date());
    String newFileName = now + ext;  // 새로운 파일 이름("업로드일시.확장자")

    // 3. 파일명 변경
    File oldFile = new File(saveDirectory + File.separator + fileName);
    File newFile = new File(saveDirectory + File.separator + newFileName);
    oldFile.renameTo(newFile);

    // 4. 다른 폼값 받기
    String name = mr.getParameter("name");
    String title = mr.getParameter("title");
    String[] cateArray = mr.getParameterValues("cate");
    StringBuffer cateBuf = new StringBuffer();
    if (cateArray == null) {
        cateBuf.append("선택 없음");
    }
    else {
        for (String s : cateArray) {
            cateBuf.append(s + ", ");
        }
    }

    // 5. vo 생성
    FileVO vo = new FileVO();
    vo.setName(name);
    vo.setTitle(title);
    vo.setCategory(cateBuf.toString());
    vo.setOfile(fileName);
    vo.setSfile(newFileName);

    // 6. DAO를 통해 데이터베이스에 반영
    FileDAO.insertFile(vo);

    // 7. 파일 목록 JSP로 리디렉션
    response.sendRedirect("FileList.jsp");
}
catch (Exception e) {
    e.printStackTrace();
    request.setAttribute("errorMessage", "파일 업로드 오류");
    request.getRequestDispatcher("Info.jsp").forward(request, response);
}
%>
