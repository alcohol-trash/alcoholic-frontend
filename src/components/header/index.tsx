import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from "next/link";

import ProfileImg from '@/public/assets/profile_img.png';


const HeaderContainer = styled.section`
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  div {
    display: flex;
    align-items: center;
  }
`;

const HeaderLogo = styled.div`
  width: 74px;
  height: 20px;
  h1{
      color: var(--white);
      font-size: 18px;
  }
`;

const HeaderProfile = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  `;

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <Link href="/">
            <HeaderLogo>
                <h1>알코홀-릭</h1>
            </HeaderLogo>
        </Link>
      </div>
      <Link href="/login">
        <HeaderProfile>
          <Image src={ProfileImg} width={32} height={32} />
        </HeaderProfile>
      </Link>
    </HeaderContainer>
  )
}

export default Header;