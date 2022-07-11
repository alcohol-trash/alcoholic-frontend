import React from 'react';
import styled from 'styled-components';
import CustomButton from '@/components/button/CustomButton';
import Image from 'next/image';
import Link from "next/link";

import ProfileDefault from '@/public/assets/profile_default.png';


const GnbContainer = styled.section`
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 34px 0;
  div {
    display: flex;
    align-items: center;
  }
`;

const GnbLogo = styled.div`
  width: 24px;
  height: 24px;
  background-color: var(--primary);
  `;

const GnbProfile = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  cursor: pointer;
  `;

const Gnb = () => {
  return (
    <GnbContainer>
      <div>
        <GnbLogo />
        <CustomButton content="주류학개론" fontweight={700} />
        <CustomButton content="술 위키" fontweight={700} btncolor='var(--gray-1)' />
        <CustomButton content="질문&답변" fontweight={700} btncolor='var(--gray-1)' />
      </div>
      <Link href="/login">
        <GnbProfile>
          <Image src={ProfileDefault} width={24} height={24} />
        </GnbProfile>
      </Link>
    </GnbContainer>
  )
}

export default Gnb;