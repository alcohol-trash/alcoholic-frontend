import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import { HomebarContainer, HomeLogoBlock } from '@/style/LoginStyle';
import HomeImg from '@/public/assets/home.png';

const Homebar = () => {
  return (
    <HomebarContainer>
      <Link href="/">
        <HomeLogoBlock>
          <Image src={HomeImg} width={24} height={24} />
        </HomeLogoBlock>
      </Link>
    </HomebarContainer>
  )
}

export default Homebar;