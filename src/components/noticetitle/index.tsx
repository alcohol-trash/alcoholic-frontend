import React from 'react'
import styled from 'styled-components'

const NoticeTitleContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px 0 15px 0;
`

const NoticeTitleH2 = styled.h2`
  font-size: 20px;
  font-weight: 700;
  padding: 10px 0;
  strong {
    color: var(--white);
  }
`
const NoticeDescription = styled.p`
  font-weight: 400;
  padding-top: 6px;
  font-size: 12px;
  color: var(--gray-300);
`;

interface NoticeTitleProps {
  title: string;
  description: string;
}

const NoticeTitle = ({ title, description }: NoticeTitleProps) => {
  return (
    <NoticeTitleContainer>
      <NoticeTitleH2>
        <strong> {title}</strong>
      </NoticeTitleH2>
      <NoticeDescription>
        {description}
      </NoticeDescription>
    </NoticeTitleContainer>
  )
}

export default NoticeTitle
