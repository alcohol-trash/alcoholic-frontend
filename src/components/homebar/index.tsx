import Image from 'next/image';
import Link from "next/link";
import * as styles from "./styles";
import HomeImg from '@/public/assets/home.png';

const Homebar = () => {
  return (
    <section css={styles.HomeBarCss.Container}>
      <Link href="/">
        <div css={styles.HomeBarCss.Block}>
          <Image src={HomeImg} width={24} height={24} />
        </div>
      </Link>
    </section>
  )
}

export default Homebar;