import React, { ChangeEvent, useState, useEffect } from 'react'
import Image from 'next/image'

import * as styles from './styles'
import UnCheckImg from 'public/assets/unchecked.png'
import CheckImg from 'public/assets/checked.png'

type Props = {
  id?: string
  label?: string
  name?: string
  checked?: boolean
  onChange?: (e: any) => void
  onClick?: (e: any) => void
  [key: string]: any
}

const CheckBox = (
  {
    id = '',
    label = '',
    name = '',
    checked = false,
    onChange,
    onClick,
    ...args
  }: Props,
  inputRef: any,
) => {
  const [state, setState] = useState<boolean>(false)

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setState(checked)
    onChange && onChange({ name, checked })
  }

  useEffect(() => {
    setState(checked)
  }, [checked])

  return (
    <div css={styles.container}>
      <input
        type="checkbox"
        id={id ? id : name}
        name={name}
        onChange={changeHandler}
        onClick={onClick}
        checked={state}
        ref={inputRef}
        {...args}
      />
      <label htmlFor={id ? id : name}>
        <Image src={state ? CheckImg : UnCheckImg} width={20} height={20} />
      </label>
      <label>{label}</label>
    </div>
  )
}

export default React.forwardRef(CheckBox)
