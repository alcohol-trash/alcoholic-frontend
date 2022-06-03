import React from 'react'
import styled from 'styled-components'

const TitleContainer = styled.section`
  display: flex;
  flex-direction: column;
`
const DescriptionTitle = styled.div`
  margin: 10px;
  line-height: 1.5em;
  h1 {
    font-size: 20px;
    color: var(--white);
  }
`
const DescriptionExplain = styled.p`
  font-weight: 400;
  margin: 10px;
  font-size: 12px;
  color: var(--gray-300);
  line-height: 1.5em;
`;

interface DescriptionProps {
  titleFirst: string;
  titleSecond?: string;
  explainFirst?: string;
  explainSecond?: string;
}

const Description = ({ titleFirst, titleSecond, explainFirst, explainSecond }: DescriptionProps) => {
  return (
    <TitleContainer>
      <DescriptionTitle>
        <h1> {titleFirst}<br/>{titleSecond}</h1>
      </DescriptionTitle>
      <DescriptionExplain>
        {explainFirst}<br/>{explainSecond}
      </DescriptionExplain>
    </TitleContainer>
  )
}

export default Description;
