import React from "react";
import Link from "next/link";
import { LoginContainer, DescriptionContainer, InfoContainer, LoginTitle, LinkBlock } from "@/style/LoginStyle";
import Loginform from "@/components/form/LoginForm";
import Homebar from "@/components/homebar";

const LocalLogin = () => {
  return (
    <LoginContainer>
        <Homebar/>
        <DescriptionContainer>
            <LoginTitle>로그인 정보를<br/>입력해주세요.</LoginTitle>
            <LinkBlock>
                <Link href="/findid">
                    <a>ID /</a>
                </Link>
                <Link href="/findid">
                    <a>비밀번호 찾기</a>
                </Link>
            </LinkBlock>
        </DescriptionContainer>
        <InfoContainer> 
            <Loginform/>
        </InfoContainer>
    </LoginContainer>
  );
}

export default LocalLogin;