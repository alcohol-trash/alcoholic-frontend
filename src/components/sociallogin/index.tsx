import Link from "next/link";
import Image from "next/image";
import styled from 'styled-components';

import KakaoLogo from '@/public/assets/kakao.png';
import GoogleLogo from '@/public/assets/google.png';

const LoginContainer = styled.section`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: var(--gray-900);
    color: var(--white);
`;
const IntroductionContainer = styled.section`
    display: flex;
    height: 60vh;
    h1{    
        padding-left: 30px;
        padding-top: 80px;
        font-size: 20px;
    }
`;
const InContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 40vh;
  font-size: 14px;
  div{
      margin: 10px auto;
    }
  p{
    color: var(--gray-300);
    margin: 0 auto;
    }
  a{
    text-decoration: none;
    color: var(--gray-300);
    }
`;

const ImgWrapper = styled.div`
    display: inline-block;
    height: 76px;
    padding: 10px;
`;
const Login = () => {
    const login = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
    const second = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;
    console.log(login);
    console.log(second);
    return (
        <LoginContainer>
            <IntroductionContainer>
                <h1>
                    <span style={{color: "var(--aqua)"}}>알코홀-릭</span>은 가입 후에<br/>
                    이용할 수 있어요!
                </h1>
            </IntroductionContainer>
            <InContainer>
                <p>SNS 계정으로 시작하기</p>
                <div>
                    <Link href="/signup">
                        <ImgWrapper>
                            <Image src={KakaoLogo} width={56} height={56}/> 
                        </ImgWrapper>
                    </Link>
                    <Link href="/signup">
                        <ImgWrapper>
                            <Image src={GoogleLogo} width={56} height={56}/> 
                        </ImgWrapper>
                    </Link>
                </div>
                <div>
                    <Link href="/locallogin">
                        <a>일반 로그인 /</a>
                    </Link>
                    <Link href="/sociallogin">
                        <a> 회원가입</a>
                    </Link>
                </div>
            </InContainer>
        </LoginContainer>
    );
}
export default Login;