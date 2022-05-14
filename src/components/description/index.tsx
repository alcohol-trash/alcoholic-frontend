import React from 'react'
import styled from 'styled-components'

const TitleContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding-left: 10%;
`
const DescriptionTitle = styled.h2`
  margin: 10px;
  font-size: 20px;
  font-weight: 900;
  line-height: 1.5em;
  strong {
    color: #000;
  }
`
const DescriptionExplain = styled.p`
  font-weight: 400;
  margin: 10px;
  font-size: 12px;
  color: var(--gray-1);
  line-height: 1.5em;
`;

interface DescriptionProps {
  titleFirst: string;
  titleSecond: string;
  explainFirst?: string;
  explainSecond?: string;
}

const Description = ({ titleFirst, titleSecond, explainFirst, explainSecond }: DescriptionProps) => {
  return (
    <TitleContainer>
      <DescriptionTitle>
        <strong> {titleFirst}<br/>{titleSecond}</strong>
      </DescriptionTitle>
      <DescriptionExplain>
        {explainFirst}<br/>{explainSecond}
      </DescriptionExplain>
    </TitleContainer>
  )
}

export default Description;
