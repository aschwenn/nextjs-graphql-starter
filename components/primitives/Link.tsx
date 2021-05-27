import React from 'react'
import _Link from 'next/link'

interface Props {
  children?: React.ReactNode,
  href: string
  className?: string
}

const Link = ({ children, href, className }: Props): React.ReactElement => (
  /** check if link is internal */
  href.charAt(0) === '/'
    ? <_Link passHref href={href}>
      <a className={`no-underline ${className}`}>
        {children}
      </a>
    </_Link>
    : <a className={`no-underline ${className}`} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
)

export default Link
