import Head from 'next/head'
import styled from 'styled-components'

export const StyledTitle = styled.h1`
  color: red
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>

      <StyledTitle>Hallo Welt!</StyledTitle>
    </>
  )
}
