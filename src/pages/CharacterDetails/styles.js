import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Button = styled(LinkRouter)`
  align-items: center;
  border: 1px solid black;
  color: #fff;
  display: flex;
  height: 2em;
  justify-content: center;
  margin: 1em 0;
  text-decoration: none;
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
`

export const Image = styled.img`
  max-width: 300px;
  max-height: 450px;
`

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100px 1fr;
  grid-column-gap: 25px;
  grid-template-areas: "title title" "layoutleft layoutright";
  align-items: center;
  margin: 0 auto;
  max-width: 600px;
  text-align: center;
`

export const LayoutLeft = styled.div`
  grid-area: layoutleft;
`

export const LayoutRight = styled.div`
  grid-area: layoutright;
`

export const List = styled.ul`
  list-style: none;
`

export const Title = styled.h1`
  border: 1px solid black;
  grid-area: title;
`
