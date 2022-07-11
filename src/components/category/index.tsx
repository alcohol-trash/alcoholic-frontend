import React from 'react'
import * as styles from './styles'

interface CategoryProps {
  content: string
  count?: number
  onClick?: () => void
}

const Category = ({ content, count, onClick }: CategoryProps) => {
  const _onClick = () => {
    if (!onClick) return
    onClick()
  }
  return (
    <div css={styles.Category.Container} onClick={_onClick}>
      <strong>{content}</strong>
      {count && <p>{count}</p>}
    </div>
  )
}

export default Category
