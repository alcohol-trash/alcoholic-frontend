const MyPage = () =>{
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get("code");
    console.log(code);
    //인증 코드 & 리다이렉트 URL 넘김과 동시에 백엔드로부터 토큰 받기

    return (
        <div>
            <button>
                카카오 로그아웃
            </button>
            <button>
                구글 로그아웃
            </button>
        </div>
    );
}

export default MyPage;