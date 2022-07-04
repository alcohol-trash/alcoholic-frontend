import Image from 'next/image';
import Link from "next/link";
import ProfileImg from '@/public/assets/profile_img.png';
import {GnbContainer, GnbBlock, GnbLogo, GnbProfile, GnbList, GnbListItem} from "@/style/HomeStyle";

const Gnb = () => {
  return (
    <GnbContainer>
      <GnbBlock>
        <Link href="/">
          <GnbLogo>
              <h1>알코홀-릭</h1>
          </GnbLogo>
        </Link>
        <Link href="/login">
          <GnbProfile>
            <Image src={ProfileImg} width={32} height={32} />
          </GnbProfile>
        </Link>
      </GnbBlock>
      <GnbList>
        <GnbListItem>주류학개론</GnbListItem>
        <GnbListItem>술 위키</GnbListItem>
        <GnbListItem>질문과 답변</GnbListItem>
      </GnbList>
  </GnbContainer>
  )
}

export default Gnb;