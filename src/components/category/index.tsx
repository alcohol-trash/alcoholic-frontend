import React from 'react';
import styled from 'styled-components';

const CategoryContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;

  background-color: var(--gray-700);
  border-radius: 10px;
  width: 58px;
  height: 31px;
  strong{
    color: var(--gray-300);
  }
  p {
    padding-left: 6px;
    color: var(--gray-300);
  }
`;

interface CategoryProps {
  content: string;
  count?: number;
  onClick?: () => void;
}

const Category = ({ content, count, onClick }: CategoryProps) => {
  const _onClick = () => {
    if(!onClick) return;
    onClick();
  }
  return (
    <CategoryContent onClick={_onClick}>
      <strong>
        {content}
      </strong>
      {count &&
        <p>
          {count}
        </p>
      }
    </CategoryContent>
  )
}

export default Category;

