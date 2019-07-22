import styled from 'styled-components'
import HarryP from '../../assets/fonts/harry_potter.ttf'
import { Link as LinkRouter } from '@reach/router'

export const Title = styled.h1`
  display: inline;
  font-family: ${HarryP};
  text-transform: uppercase;
  font-size: 48px;
`

export const Link = styled(LinkRouter)`
  color: #111;
  text-decoration: none;
  transition: 0.2s;

  &:hover {
    text-shadow: 0 0 8px rgba(245, 229, 27, 0.7)
  }
`
