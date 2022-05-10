import React from 'react';
import Test from '@/components/TestComponent';
import styled from 'styled-components';
import Tabbar from '@/components/tabbar';
import Gnb from '@/components/gnb';

const HomeWrap = styled.div`
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  /* height: 80vh; */
  /* height: 100vh; */
  /* width: 100%; */
  /* padding: 0 24px; */
`;

const Home = () => {
  return (
    <HomeWrap>
      <Gnb />
      <Tabbar />
    </HomeWrap>
    )
}

export default Home;
