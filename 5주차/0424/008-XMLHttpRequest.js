// XHR 객체를 생성합니다.
const requestObj = new XMLHttpRequest(); //생성자함수임 . 인스턴스 생성
requestObj.open('GET', 'url'); // 요청을 초기화합니다. 통신방법과 요청을 발신할 대상의 주소를 전달합니다.
//url 은 통신을 할 서버주소이다. api주소가 보통 들어갑니다.
//


requestObj.onreadystatechange = () => { // readystate 가 변화하면 실행되는 이벤트리스너 입니다.
		// readystate : 요청을 보내는 클라이언트의 상태를 의미합니다. 브라우저의상태
    // readystate의 종류
    // 0 (UNSENT) - XHR 객체가 생성되었지만 아직 초기화되지 않았습니다.
    // 1 (OPENED) - open()함수가 호출되어 요청이 초기화되었습니다.
    // 2 (HEADERS_RECEIVED) - send()함수가 호출되었습니다.
    // 3 (LOADING) - 데이터를 다운받는 중 입니다.
    // 4 (DONE) - 통신이 완료되었습니다.
    if (requestObj.readyState == 4 && requestObj.status == "200") {
           //클랑이어트 상태               서버상태
        const result = requestObj.responseText;

    }
};
requestObj.send(); // 서버로 요청을 보냅니다. send 메소드가 실행되어야만 우리가 위에서 설정한 내용들이 의미를 가지게 됩니다.    