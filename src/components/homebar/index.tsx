import Image from 'next/image';
import Link from "next/link";
import { HomeBarCss } from "@/css/login";
import HomeImg from '@/public/assets/home.png';

const Homebar = () => {
  return (
    <section css={HomeBarCss.Container}>
      <Link href="/">
        <div css={HomeBarCss.Block}>
          <Image src={HomeImg} width={24} height={24} />
        </div>
      </Link>
    </section>
  )
}

export default Homebar;