import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from "next/link";

import HomeImg from '@/public/assets/home.png';

const HomebarContainer = styled.section`
  top: 0;
  left: 0;
  right: 0;
  padding: 15px 0 0 0;
`;

const HomeLogo = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
  float: right;
`;

const Homebar = () => {
  return (
    <HomebarContainer>
      <Link href="/">
        <HomeLogo>
          <Image src={HomeImg} width={24} height={24} />
        </HomeLogo>
      </Link>
    </HomebarContainer>
  )
}

export default Homebar;