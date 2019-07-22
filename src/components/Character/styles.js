import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const CharacterCard = styled.div`
  border: 1px solid #eee;
  box-shadow: 0 0 8px rgba(0, 0, 0, .3);
  display: grid;
  height: 100%;
  text-align: center;
  width: 100%;

  &[data-house='Gryffindor'] {
    background-color: #9c1203;
  }
  &[data-house='Slytherin'] {
    background-color: #033807;
  }
  &[data-house='Ravenclaw'] {
    background-color: #00165e;
  }
  &[data-house='Hufflepuff'] {
    background-color: #e3a000;
  }
  &[data-house='Unknown'] {
    background-color: #2d004d;
  }

  transition: .3s;

  &:hover {
    transform: scale(1.05);
  }
`

export const Name = styled.h2`
  font-size: 24px;
  line-height: 2em;
`

export const Image = styled.img`
  height: 250px;
  width: 100%;
  object-fit: cover;
  object-position: top;
  overflow: hidden;
`

export const Link = styled(LinkRouter)`
  text-decoration: none;
  color: #FFF;
`
