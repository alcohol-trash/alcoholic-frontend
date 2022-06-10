import React from 'react';
import styled from 'styled-components';
import Tabbar from '@/components/tabbar';
import Gnb from '@/components/gnb';
import NoticeTitle from '@/components/noticetitle';
import Category from '@/components/category';
import Feed from '@/components/feed';

const IntroductionContainer = styled.section`
  background-color: var(--gray-900);
  display: flex;
  flex-direction: column;
  padding: 0 24px;
`;

const CategoryContainer = styled.section`
  display: flex;
  margin: 12px 0;
  div {
    margin-right: 8px;
  }
`;

const FeedContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 18px;
  padding-bottom: 76px;
`;

const Home = () => {
  return (
    <>
      <Gnb />
      <IntroductionContainer>
        <NoticeTitle title="주류학개론" description='술에 대한 정보, 리뷰를 올려주세요.' />
        <CategoryContainer>
          {CATEGORY_DUMMY.map((data) =>
            <Category content={data.content} key={data.id} />
          )}
        </CategoryContainer>
        <FeedContainer>
          <Feed />
          <Feed />
          <Feed />
        </FeedContainer>
        <Tabbar />
      </IntroductionContainer>
    </>
  )
}

export default Home;

const CATEGORY_DUMMY = [
  {
    id: 1,
    content: '최신순'
  },
  {
    id: 2,
    content: '추천순'
  },
]