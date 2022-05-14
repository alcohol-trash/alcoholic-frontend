import styled from 'styled-components';
import Link from "next/link";
import { KakaoSvg, GoogleSvg } from '@/components/svg';
import Description from '@/components/description';

const LoginContainer = styled.section`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;
const DescriptionContainer = styled.section`
    display: flex;
    align-items: center;
    height: 60vh;
`;

const InContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 40vh;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const LoginBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SignUpTitle = styled.p`
  font-weight: 700;
  font-size: 14px;
  color: var(--gray-1);
  margin: 10px;
`;

const LogInTitle = styled.span`
  font-weight: 700;
  font-size: 14px;
  color: var(--black);
  margin: 10px 5px;
`;
const LogIn = styled.a`
    color: var(--primary);
    font-size: 14px;
    text-decoration: underline;
    margin: 10px 5px;
`

const SvgBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
`;

const Login = () => {
    return (
        <LoginContainer>
            <DescriptionContainer>
                <Description titleFirst='Alcoholic을 이용하시려면' titleSecond='로그인해주세요.'/>
            </DescriptionContainer>
            <InContainer>
                <SignUpTitle>SNS 계정으로 가입하기</SignUpTitle>
                <SvgBlock>
                    <KakaoSvg/>
                    <GoogleSvg/>
                </SvgBlock>
                <LoginBlock>
                    <LogInTitle>이미 회원이신가요?</LogInTitle>
                    <Link href="/signup">
                        <LogIn>로그인</LogIn>
                    </Link>
                </LoginBlock>
            </InContainer>
        </LoginContainer>
    );
}
export default Login;