import { SocialNickname } from '@/css/login'
import NickNameForm from '@/components/nicknameform'

const SignupNickname = () => {
  return (
    <section>
      <section css={SocialNickname.Container}></section>
      <NickNameForm />
    </section>
  )
}

export default SignupNickname
