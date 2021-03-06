import styled from '@emotion/styled'
import { rgba } from 'polished'
import { mediaQueries } from '@lib/mediaQueries'

/** Props Interfaces */

interface WrapperPropsI {
  scrolled: boolean
}

interface LogoPropsI {
  scrolled?: boolean
}

/** Styled Components */

export const Logo = styled.img<LogoPropsI>(({
  scrolled = false
}) => mediaQueries({
  cursor: 'pointer',
  maxHeight: scrolled
    ? [
      '2rem',
      '2rem',
      '3rem',
      '3rem',
      '3rem'
    ]
    : [
      '3rem',
      '3rem',
      '4rem',
      '4rem',
      '4rem'
    ],
  transition: 'all 350ms',
  zIndex: 2
}))


export const Wrapper = styled.header<WrapperPropsI>(({
  scrolled = false
}) => mediaQueries({
  backgroundColor: scrolled
    ? 'white' 
    : 'transparent',
  boxShadow: scrolled
    ? `0 0.125rem 0.25rem ${rgba('#353535', 0.25)}`
    : 'none',
  left: 0,
  padding: scrolled 
    ? '1rem 0'
    : [
      '1rem 0',
      '1rem 0',
      '2rem 0',
      '2rem 0',
      '2rem 0',
    ],
  position: 'fixed',
  right: 0,
  top: 0,
  transition: 'all 350ms'
}))
