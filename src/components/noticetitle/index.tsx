import React from 'react'
import styled from 'styled-components'

const NoticeTitleContainer = styled.section`
  display: flex;
  flex-direction: column;
`

const NoticeTitleH2 = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: var(--primary);
  strong {
    color: #000;
  }
`
const NoticeDescription = styled.p`
  font-weight: 400;
  padding-top: 6px;
  font-size: 12px;
  color: var(--gray-1);
`;

interface NoticeTitleProps {
  title: string;
  description: string;
}

const NoticeTitle = ({ title, description }: NoticeTitleProps) => {
  return (
    <NoticeTitleContainer>
      <NoticeTitleH2>
        #
        <strong> {title}</strong>
      </NoticeTitleH2>
      <NoticeDescription>
        {description}
      </NoticeDescription>
    </NoticeTitleContainer>
  )
}

export default NoticeTitle
