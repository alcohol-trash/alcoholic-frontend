import React from 'react';
import Test from '@/components/TestComponent';
import styled from 'styled-components';

const HomeWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const Home = () => {
  return (
    <HomeWrap>
      <Test />
    </HomeWrap>
    )
}

export default Home;
