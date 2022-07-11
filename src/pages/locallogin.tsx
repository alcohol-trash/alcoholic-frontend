import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Loginform from "@/components/loginform";
import Homebar from "@/components/homebar";

const LoginContainer = styled.section`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: var(--gray-900);
    padding: 0 24px;
    a{
        color: var(--gray-300);
        font-size: 13px;
    }
`;
const DescriptionContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 20vh;
    h1{
        margin: 10px 0;
        line-height: 1.5em;
        font-size: 20px;
        color: var(--white);
    }
`;
const InfoContainer = styled.section`
    padding-top: 50px;
`;

const LocalLogin = () => {
  return (
    <LoginContainer>
        <Homebar/>
        <DescriptionContainer>
            <h1>로그인 정보를<br/>입력해주세요.</h1>
            <div>
                <Link href="/findid">
                    <a>ID /</a>
                </Link>
                <Link href="/findid">
                    <a>비밀번호 찾기</a>
                </Link>
            </div>
        </DescriptionContainer>
        <InfoContainer> 
            <Loginform/>
        </InfoContainer>
    </LoginContainer>
  );
}

export default LocalLogin;