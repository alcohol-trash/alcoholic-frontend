import React from 'react'
import * as styles from './styles'
type Props = {
  type?: 'text' | 'password' | 'number' | 'email'
  name?: string
  value?: string
  [key: string]: any
}
const TextField = (
  { type = 'text', name = '', value = '', ...args }: Props,
  inputRef: any,
) => {
  return (
    <input
      ref={inputRef}
      css={styles.input}
      type={type}
      name={name}
      defaultValue={value}
      {...args}
    />
  )
}

export default React.forwardRef(TextField)
