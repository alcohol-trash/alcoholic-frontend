import Router, {useRouter} from "next/router"

const MyPage = () =>{
    const logoutWithKakao = () => {
        if(!window.Kakao.Auth.getAccessToken()){
            console.log("Not logged in");
            return;
        }
        window.Kakao.Auth.logout(()=> {
            console.log("logout");
            Router.push("/");
        })
    }
    // const href = window.location.href;
    // let params = new URL(document.location).searchParams;
    const router = useRouter();
    // let params = new URL()
    // console.log("")
    return (
        <div>
            <button onClick={logoutWithKakao}>
                카카오 로그아웃
            </button>
            <button>
                구글 로그아웃
            </button>
        </div>
    );
}

export default MyPage;