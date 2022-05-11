import React from 'react';
import styled from 'styled-components';

const CategoryContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;

  background-color: var(--gray-2);
  border-radius: 10px;
  width: 58px;
  height: 31px;
`;

interface CategoryProps {
  content: string;
}

const Category = ({ content }: CategoryProps) => {
  return (
    <CategoryContent>
      {content}
    </CategoryContent>
  )
}

export default Category;

