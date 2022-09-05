import React, { ChangeEvent } from 'react'
import * as styles from './styles'

type Props = {
  name?: string
  onChange?: (e: any) => void
  [key: string]: any
}

const ContentForm = (
  { name = '', onChange, ...args }: Props,
  inputRef: any,
) => {
  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target
    onChange && onChange({ name, value })
  }

  return (
    <textarea
      ref={inputRef}
      css={styles.textarea}
      name={name}
      onChange={handleTextChange}
      {...args}
    />
  )
}

export default React.forwardRef(ContentForm)
