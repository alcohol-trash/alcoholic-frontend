import Image from 'next/image';
import Link from "next/link";
import * as styles from "./styles";
import ProfileImg from '@/public/assets/profile_img.png';

const Gnb = () => {
  return (
    <section css={styles.Gnb.Container}>
      <div css={[styles.Gnb.Block, styles.Gnb.BlockDetail]}>
        <Link href="/">
          <div css={[styles.Gnb.Block, styles.Gnb.Logo]}>
              <h1>알코홀-릭</h1>
          </div>
        </Link>
        <Link href="/login">
          <div css={[styles.Gnb.Block, styles.Gnb.Profile]}>
            <Image src={ProfileImg} width={32} height={32} />
          </div>
        </Link>
      </div>
      <ul css={styles.Gnb.List}>
        <li css={styles.Gnb.ListItem}>주류학개론</li>
        <li css={styles.Gnb.ListItem}>술 위키</li>
        <li css={styles.Gnb.ListItem}>질문과 답변</li>
      </ul>
  </section>
  )
}

export default Gnb;