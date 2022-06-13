import React, { useEffect, useState } from 'react';

const MyPage = () =>{
    const [query_string, set_query_string] = useState('');
    useEffect(() => {
        set_query_string(window.location.search)
    }, [])
    const urlParams = new URLSearchParams(query_string);
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