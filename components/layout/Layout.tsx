import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

interface Props {
  /** site title in header */
  title: string
  children: React.ReactNode
}

const Container = styled.div`
  max-width: 1024px;
`

export default ({
  title,
  children
}: Props): React.ReactElement => (
  <>
    <Head>
      <title>{title} | Site Title</title>
    </Head>
    <div className="flex w-screen min-h-screen justify-center">
      <Container className="flex flex-col w-full">

      </Container>
    </div>
  </>
)
