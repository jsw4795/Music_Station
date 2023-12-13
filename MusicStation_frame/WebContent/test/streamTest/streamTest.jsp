<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- ######### hls 라이브러리를 cdn 방식으로 추가해준다.######### -->
<script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
<script src="https://vjs.zencdn.net/8.3.0/video.min.js"></script>
<title>Hls Practice</title>
<style>
	video {
		max-width: 500px;
		width: 100%;
		max-height: 500px;
		height: 100%;
		object-fit: fill;
	}
</style>
</head>
<body>
	<!--
		controls : 사용자가 비디오 컨트롤이 가능하게 할 수 있다
		playsinline : 전체 화면 방지이다
		autoplay : 자동재생이며 , 정책상 음소거 상태에서 가능하다.
	-->
	<!-- <video id="video" controls playsinline autoplay></video> -->
	<audio src="./musics/music.mp3" controls></audio>
	
<script>
    /* video Element */
    let video = null;
    /* 샘플 m3u8 url */
    let videoSrc = 'https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8'

    /* initVideo */
    const initVideo = () => {
        video = document.querySelector('#video')
    }

    /* initHls : hls를 초기화 하는 함수 */
    const initHls = () => {
        if (Hls.isSupported()) {
            hls = new Hls({
                autoStartLoad: false,
            });
            hls.loadSource(videoSrc);
            hls.attachMedia(video);
            hls.startLoad();
        }
        /* ios/safari 같은 경우에 hls가 built-in 되어있다.*/
        else {
            video.src = videoSrc;	
        }
    }

    /* DOMContentLoaded 로드를 통해 video Element 담기*/
    window.addEventListener("DOMContentLoaded", () => {
        initVideo();
        initHls();
    })

</script>
</body>
</html>