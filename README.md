# Music Station

사용자가 개인의 음원을 올리고, 다른 사용자의 음악을 스트리밍으로 들을 수 있습니다.

조원별로 완벽히 분리된 개발 환경에서 개발이 가능하도록 기능별로 프로젝트를 나누어서 진행하였습니다.

<br />

# 📃 프로젝트 정보

### 1. 제작기간

- 2023.10.18 ~ 11.01

### 2. 참여 인원

- 4명 / ITWILL(국비지원 학원) 학원생

### 3. 역할 분담

- 정성욱 : 음악 재생관련 기능, 메인페이지, TOP100페이지, 로그인/회원가입, 코드 통합

<br />

# 📚 사용 기술

### 1. Back-end

 - Java 8
 - Servlet
 - JSP / JSTL
 - Oracle / MyBatis

### 2. Front-end

 - HTML
 - CSS
 - JavaScript / jQuery / Ajax

<br />

# 🔑 핵심기능

### 1. 음악 재생 및 컨트롤

> - 페이지 하단에 있는 재생 컨트롤러를 이용하여 음악의 재생을 컨트롤 할 수 있습니다.
> 
> - 페이지 하단에 있는 재생목록에 원하는 곡들을 넣어놓고 들을 수 있습니다.

![2차 음악 재생 시연2](https://github.com/jsw4795/Music_Station/assets/33516979/c582ed9a-645e-4862-8765-95b92df4e0a8)

### 2. 음악 업로드

> - 사용자가 만든 음원을 사이트에 사진, 제목, 설명과 함께 업로드 합니다.
>
> - 프로젝트 디렉토리 내부에 리소스를 저장해서 새로 업로도된 파일을 인식하기까지 10초정도 시간이 걸리는 문제가 있습니다.
> - 문제의 원인을 찾지 못하여 해당 프로젝트에서는 10초뒤에 적용된다는 안내만 하였습니다.
> - ***파일인식 지연 문제는 다음 프로젝트에서 같은 문제가 발생하여 개선하였습니다.***


![2차 음악 업로드 시연](https://github.com/jsw4795/Music_Station/assets/33516979/9c88d773-7ae7-4021-ba88-d6ee1ddd7bd3)

<br />

# 🚨 문제 상황
## 조회수 계산 오래걸림
> 조회수를 이용하여 순위를 결정하는 과정에서 재생 로그가 많아지자 데이터 처리에 시간이 5초 이상 걸리는 문제 발생
- 자바 단에서 5분마다 순위를 계산하여 TOP100 리스트를 가지고 있고, 다른 메소드에서 해당 리스트를 참조하도록 변경
- **결과 : 사용자 경험상 5초 -> 1초미만 으로 문제 해결**
<br />

## 프로젝트간 세션 공유 문제
> 하나의 톰캣에 올라간 5개의 프로젝트간의 세션 공유가 안되는 문제 발생
- context.xml 에서 Context태그에 crossContext="true" 추가
- server.xml 에서 Connection태그에 emptySessionPath="true" 추가
- 세션에 attribute 추가할 때 `session.getServletContext().setAttribute("attribute명", 오브젝트);` 사용
- 세션에서 attribute 가져올 때 `session.getServletContext().getContext("세션이 저장된 contextRoot명").getAttribute("attribute명");` 사용
- **결과 : 하나의 프로젝트에서 저장한 attribute를 다른 프로젝트에서 참조 가능하게되어 문제 해결**
