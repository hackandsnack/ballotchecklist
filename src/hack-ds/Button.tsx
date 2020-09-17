import styled from '@emotion/styled'
import { primary } from '@lib/colors'

import { mediaQueries } from '@lib/mediaQueries'

/** Button components for Hack DS design system */

const buttonStyles = {
  alignItems: 'center',
  border: 'solid 2px',
  cursor: 'pointer',
  display: 'inline-flex',
  fontSize: '0.875rem',
  fontWeight: 700,
  height: '3.333rem',
  letterSpacing: 1.2,
  justifyContent: 'center',
  padding: '0.5rem 1rem',
  textDecoration: 'none',
  textTransform: 'uppercase',
  width: [
    '100%',
    '100%',
    'auto',
    'auto',
    'auto'
  ],
  'button + &': {
    marginLeft: [
      0,
      0,
      '1rem',
      '1rem',
      '1rem'
    ],
    marginTop: [
      '1rem',
      '1rem',
      0,
      0,
      0
    ]
  }
}

const primaryStyles = {
  background: primary,
  borderColor: primary,
  color: 'white'
}

const secondaryStyles = {
  background: 'transparent',
  borderColor: primary,
  color: primary
}

export const PrimaryButton = styled.button(mediaQueries({
  ...buttonStyles,
  ...primaryStyles
}))

export const PrimaryButtonLink = styled.a(mediaQueries({
  ...buttonStyles,
  ...primaryStyles
}))

export const SecondaryButton = styled.button(mediaQueries({
  ...buttonStyles,
  ...secondaryStyles
}))

export const SecondaryButtonLink = styled.a(mediaQueries({
  ...buttonStyles,
  ...secondaryStyles
}))