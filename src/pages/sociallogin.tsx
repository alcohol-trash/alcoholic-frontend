import React from "react";
import Link from "next/link"
//import React, {useEffect} from "react";
//import Router from "next/router";

const SocialLogin = () => {
    const KAKAO_AUTH_URL = 
    `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`;
    return (     
        <div>
            <button>
                <Link href={KAKAO_AUTH_URL} rel="noopener noreferrer">
                    <img
                    src="//k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
                    width="222"
                    alt="카카오 로그인 버튼"
                    />
                </Link>
            </button>
            <button>
                구글 로그인
            </button>
        </div>
    );
}

export default SocialLogin;