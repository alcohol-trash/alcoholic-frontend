import React from 'react';
import styled from 'styled-components';
import CustomButton from '@/components/button/CustomButton';

const GnbContainer = styled.section`
  /* position: fixed; */
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 34px 26px 34px 0px;
  /* padding: 34px 26px; */
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
  background-color: var(--primary);
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
      <GnbProfile />
    </GnbContainer>
  )
}

export default Gnb;