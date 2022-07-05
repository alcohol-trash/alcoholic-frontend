import Link from "next/link";
import { LoginPage } from "@/css/login";
import Loginform from "@/components/form/LoginForm";
import Homebar from "@/components/homebar";

const LocalLogin = () => {
  return (
    <section css={LoginPage.Container}>
        <Homebar/>
        <section css={LoginPage.TopContainer}>
            <h1 css={LoginPage.Title}>로그인 정보를<br/>입력해주세요.</h1>
            <div css={LoginPage.LinkBlock}>
                <Link href="/findid">
                    <a>ID /</a>
                </Link>
                <Link href="/findid">
                    <a>비밀번호 찾기</a>
                </Link>
            </div>
        </section>
        <section css={LoginPage.BottomContainer}> 
            <Loginform/>
        </section>
    </section>
  );
}

export default LocalLogin;