import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import ProfileDefault from '@/public/assets/profile_default.png';
import Babamba from '@/public/assets/babamba.png';

const FeedContainer = styled.section``;

const FeedHeader = styled.div`
  display: flex;
  align-items: center;
`;
const FeedHeaderProfile = styled.div`
`;
const FeedHeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  font-size: 14px;
  p {
    font-size: 12px;
    padding-top: 4px;
    color: var(--gray-1);
  }
`;

const FeedContent = styled.div`
  display: flex;
  flex-direction: column;
`;
const FeedContentTitle = styled.div`
  padding-top: 10px;
  font-size: 18px;
  font-weight: 700;
  `;
const FeedContentDescription = styled.p`
  padding-top: 6px;
  font-size: 16px;
  font-weight: 400;
`;
const FeedContentImage = styled.div`
  padding-top: 12px;
  
  img {
    border-radius: 10px;
    width: 100%;
  }
`;

const FeedFooter = styled.div``;
const FeedHash = styled.div``;
const FeedComment = styled.div``;

const Feed = () => {
  return (
    <FeedContainer>
      <FeedHeader>
        <FeedHeaderProfile>
          <Image src={ProfileDefault} alt="회색 배경에 흰 사람 동그란 프로필 이미지" width={40} height={40} />
        </FeedHeaderProfile>
        <FeedHeaderTitle>
          <strong>누가바</strong>
          <p>10분 전</p>
        </FeedHeaderTitle>
      </FeedHeader>

      <FeedContent>
        <FeedContentTitle>
          바밤바 막걸리
        </FeedContentTitle>
        <FeedContentDescription>
          신상 바밤바 막걸리! 아이스크림 맛이에요 ㅎ.ㅎ
        </FeedContentDescription>
        <FeedContentImage>
          <Image src={Babamba} alt="바밤바 캔 막걸리" layout='responsive'/>
        </FeedContentImage>
      </FeedContent>
    </FeedContainer>
  )
}

export default Feed;