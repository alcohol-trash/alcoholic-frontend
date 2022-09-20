import React from 'react'

type Props = {
  isOpen: boolean
}

const DropDown = (isOpen: Props) => {
  return (
    <div>
      <ul></ul>
    </div>
  )
}

export default React.memo(DropDown)
