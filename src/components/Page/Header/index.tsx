/** @jsx jsx */
import {
  useEffect,
  useState,
  FunctionComponent
} from 'react'
import { jsx } from '@emotion/core'

import Container from '@system/Container'

import {
  scrolledStyle,
  Logo,
  Wrapper
} from '@components/Page/Header/style'

interface HeaderPropsI {
  isScrolled: boolean
}

const Header: FunctionComponent<HeaderPropsI> = ({ isScrolled = false }) => {
  return (
    <Wrapper
      css={[
        isScrolled && scrolledStyle
      ]}
    >
      <Container>
        <Logo src="/images/ballotchecklist-logo.svg" />
      </Container>
    </Wrapper>
  )
}

export default Header