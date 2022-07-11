import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import styled from 'styled-components';
import ProfileImg from '@/public/assets/profile_img.png';

const GnbContainer = styled.section`
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  flex-direction: column;

  background-color: var(--gray-900);

  div{
    display: flex;
    align-items: center;
  }
`;

const GnbLogo = styled.div`
  width: 74px;
  height: 20px;
  h1{
    color: var(--white);
    font-size: 18px;
  }
`;

const GnbProfile = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
`;

const GnbList = styled.ul`
  width: 100%;
  position: relative;
  list-style: none;
  li{
    border-bottom: 1px solid var(--gray-800);
    margin-bottom: 10px;
    width: 33%;
    height: 100%;
    float: left;
    position: relative;
    text-align: center;
    color: var(--gray-300);
  }
`;

const Gnb = () => {
  return (
    <GnbContainer>
      <div style={{justifyContent: "space-between" , padding: "20px"}}>
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
      </div>
      <GnbList>
        <li>주류학개론</li>
        <li>술 위키</li>
        <li>질문과 답변</li>
      </GnbList>
  </GnbContainer>
  )
}

export default Gnb;