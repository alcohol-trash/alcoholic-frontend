import React from 'react';
import Test from '@/components/TestComponent';
import styled from 'styled-components';
import Tabbar from '@/components/tabbar';
import Gnb from '@/components/gnb';
import NoticeTitle from '@/components/noticetitle';
import Category from '@/components/category';

const HomeWrap = styled.div`
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  /* height: 80vh; */
  /* height: 100vh; */
  /* width: 100%; */
  /* padding: 0 24px; */
`;

const IntroductionContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding-left: 24px;
`;

const CategoryContainer = styled.div`
  display: flex;
  margin-top: 12px;
  div {
    margin-right: 8px;
  }

`;

const Home = () => {
  return (
    <IntroductionContainer>
      <Gnb />
      <NoticeTitle title="주류학개론" description='술에 대한 정보, 리뷰를 올려주세요.' />
      <CategoryContainer>
        {CATEGORY_DUMMY.map((data) =>
          <Category content={data.content} key={data.id} />
        )}
      </CategoryContainer>
      <Tabbar />
    </IntroductionContainer>
  )
}

export default Home;

const CATEGORY_DUMMY = [
  {
    id: 1,
    content: '최신순'
  },
  {
    id: 1,
    content: '추천순'
  },
]