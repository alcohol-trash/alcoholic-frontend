import React, { useEffect, useState } from 'react'
import * as styles from './styles'

type PanelProps = {
  children: React.ReactNode
  className?: string
  [key: string]: any
}
const Panel = ({ children, className, ...args }: PanelProps) => {
  return <div className={className}>{children}</div>
}

type Props = {
  children: React.ReactNode
  defaultSelected: number
  router: any
}
const Tabs = ({ children, defaultSelected = 0, router }: Props) => {
  const [selected, setSelected] = useState(defaultSelected)
  const { replace, pathname } = router || {}

  useEffect(() => {
    setSelected(defaultSelected)
  }, [defaultSelected])

  const handleTabClick = (index: number) => {
    setSelected(index)
    if (replace && pathname) {
      replace(
        {
          pathname: pathname,
          query: index === 0 ? {} : { menu: index },
        },
        undefined,
        { shallow: true },
      )
    }
  }

  return (
    // TODO: child type 지정
    <>
      {/* 상단 탭 */}
      <div css={styles.tabs}>
        {React.Children.map(children, (child: any, index: number) => (
          <div
            css={styles.tabsInner(selected === index)}
            onClick={handleTabClick.bind(null, index)}
          >
            {child.props.name} <span>{child.props.count}</span>
          </div>
        ))}
      </div>
      {/* 탭별 내용 */}
      {React.Children.map(children, (child: any, index: number) => (
        <Panel key={index} css={styles.tabsPanel(selected === index)}>
          {child}
        </Panel>
      ))}
    </>
  )
}

Tabs.Panel = Panel

export default Tabs
