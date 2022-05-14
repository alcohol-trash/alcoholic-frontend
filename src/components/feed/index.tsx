import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import Category from '@/components/category';
import ProfileDefault from '@/public/assets/profile_default.png';
import Babamba from '@/public/assets/babamba.png';

const FeedContainer = styled.section`
  padding-bottom: 20px;
`;

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

const FeedFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;
const FeedHash = styled.div``;
const FeedComment = styled.div`
  padding-top: 20px;
  padding-right: 4px;
  p {
    font-weight: 400;
    strong {
      font-weight: 700;
    }
  }
`;

const CategoryContainer = styled.section`
  display: flex;
  margin-top: 12px;
  div {
    margin-right: 8px;
  }
`;

const Feed = () => {
  const [cheers, set_cheers] = useState(1);
  const [clink, set_clink] = useState(1);

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
          <Image src={Babamba} alt="바밤바 캔 막걸리" layout='responsive' />
        </FeedContentImage>
      </FeedContent>

      <FeedFooter>
        <FeedHash>
          <CategoryContainer>
            <Category content={'🍻'} count={cheers} onClick={() => set_cheers((cheers) => cheers+1)} />
            <Category content={'짠!'} count={clink} onClick={() => set_clink((clink) => clink+1)} />
          </CategoryContainer>
        </FeedHash>
        <FeedComment>
          <p>댓글 <strong>3</strong>개</p>
        </FeedComment>
      </FeedFooter>
    </FeedContainer>
  )
}

export default Feed;