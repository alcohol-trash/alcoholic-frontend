import React, { ChangeEvent } from 'react'
import * as styles from './styles'
type Props = {
  type?: 'text' | 'password' | 'number' | 'email'
  name?: string
  value?: string
  readonly?: boolean
  onChange?: (e: any) => void
  [key: string]: any
}
const TextField = (
  { type = 'text', name = '', value = '', readonly, onChange, ...args }: Props,
  inputRef: any,
) => {
  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    onChange && onChange({ name, value })
  }

  return (
    <input
      ref={inputRef}
      css={styles.input}
      type={type}
      name={name}
      defaultValue={value}
      readOnly={readonly}
      onChange={handleTextChange}
      {...args}
    />
  )
}

export default React.forwardRef(TextField)
