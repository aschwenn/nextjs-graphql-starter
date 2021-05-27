import React from 'react'
import styled, { css } from 'styled-components'
import tw from 'twin.macro'
import { Variant } from '../../types'

interface Props {
  variant: Variant
  italic?: boolean
  /** available weights depending on the chosen font family */
  weight: 'thin' | 'extralight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black'
  children?: React.ReactNode
  className?: string
}

const baseStyles = tw``

const fontTypes = css<{ italic?: boolean, weight: string }>`
  ${({ italic }) => italic && tw`italic`}
  ${({ weight }) => {
    switch (weight) {
      case 'thin': return tw`font-thin`
      case 'extralight': return tw`font-extralight`
      case 'light': return tw`font-light`
      case 'normal': return tw`font-normal`
      case 'medium': return tw`font-medium`
      case 'semibold': return tw`font-semibold`
      case 'bold': return tw`font-bold`
      case 'extrabold': return tw`font-extrabold`
      case 'black': return tw`font-black`
    }
  }}
`

const H1 = styled.h1<{ italic?: boolean, weight: string }>`
  ${baseStyles}
  ${fontTypes}
  ${tw`text-6xl`}
`

const H2 = styled.h2<{ italic?: boolean, weight: string }>`
  ${baseStyles}
  ${fontTypes}
  ${tw`text-5xl`}
`

const H3 = styled.h3<{ italic?: boolean, weight: string }>`
  ${baseStyles}
  ${fontTypes}
  ${tw`text-4xl`}
`

const H4 = styled.h4<{ italic?: boolean, weight: string }>`
  ${baseStyles}
  ${fontTypes}
  ${tw`text-3xl`}
`

const H5 = styled.h5<{ italic?: boolean, weight: string }>`
  ${baseStyles}
  ${fontTypes}
  ${tw`text-2xl`}
`

const H6 = styled.h6<{ italic?: boolean, weight: string }>`
  ${baseStyles}
  ${fontTypes}
  ${tw`text-xl`}
`

const Body = styled.p<{ italic?: boolean, weight: string }>`
  ${baseStyles}
  ${fontTypes}
  ${tw`text-base`}
`

const Subtitle = styled.p<{ italic?: boolean, weight: string }>`
  ${baseStyles}
  ${fontTypes}
  ${tw`text-sm`}
`

const Code = styled.code<{ italic?: boolean, weight: string }>`
  ${baseStyles}
  ${tw`text-sm`}
`

export default ({
  variant,
  italic,
  weight,
  children,
  className
}: Props): React.ReactElement => {
  /** specifying a default weight for headings and content */
  if (!weight) weight = variant.charAt(0) === 'h' ? 'normal' : 'light'
  switch (variant) {
    case 'h1': return <H1 italic={italic} weight={weight} className={className}>{children}</H1>
    case 'h2': return <H2 italic={italic} weight={weight} className={className}>{children}</H2>
    case 'h3': return <H3 italic={italic} weight={weight} className={className}>{children}</H3>
    case 'h4': return <H4 italic={italic} weight={weight} className={className}>{children}</H4>
    case 'h5': return <H5 italic={italic} weight={weight} className={className}>{children}</H5>
    case 'h6': return <H6 italic={italic} weight={weight} className={className}>{children}</H6>
    case 'body': return <Body italic={italic} weight={weight} className={className}>{children}</Body>
    case 'subtitle': return <Subtitle italic={italic} weight={weight} className={className}>{children}</Subtitle>
    case 'code': return <Code italic={italic} weight={weight} className={className}>{children}</Code>
    default: return <Body italic={italic} weight={weight} className={className}>{children}</Body>
  }
}
