import React, { useState } from 'react'
import Image from 'next/image'
import * as styles from './styles'
import UnCheckImg from 'public/assets/unchecked.png'
import CheckImg from 'public/assets/checked.png'

type Props = {
  label?: string
  name?: string
  [key: string]: any
}

const Checkbox = ({ label, defaultChecked = false }: Props, inputRef: any) => {
  const [checked, setChecked] = useState(defaultChecked)
  return (
    <div css={styles.container}>
      <input
        type="checkbox"
        ref={inputRef}
        onChange={() => {
          setChecked(!checked)
        }}
        checked={checked}
      />
      <label>
        <Image src={checked ? CheckImg : UnCheckImg} width={20} height={20} />
      </label>
      <label>{label}</label>
    </div>
  )
}

export default React.forwardRef(Checkbox)
