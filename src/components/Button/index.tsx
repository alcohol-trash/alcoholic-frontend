import React from 'react'
import * as styles from './styles'
export type TextSize = 'xs' | 'sm' | 'base'
export type ButtonStyle =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'secondaryTrue'
  | 'modal'
  | 'modalLogin'
export type TextAlign = 'left' | 'right' | 'center'
export type ButtonType = 'button' | 'submit' | 'reset'
type Props = {
  type?: ButtonType
  children?: React.ReactNode
  size?: TextSize
  style?: ButtonStyle
  align?: TextAlign
  disabled?: boolean
  onClick?: () => void
}
const Button = ({
  type = 'button',
  children,
  size = 'base',
  style = 'default',
  align = 'left',
  disabled = false,
  onClick,
}: Props) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      css={[
        styles.button,
        styles.size(size),
        styles.style(style),
        styles.align(align),
      ]}
    >
      {children}
    </button>
  )
}

export default React.memo(Button)
