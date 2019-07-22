import styled from 'styled-components'

export const CharacterCard = styled.div`
  border: 1px solid #eee;
  box-shadow: 0 0 8px rgba(0,0,0,.3);
  display: grid;
  height: 100%;
  text-align: center;
  width: 100%;

  &[data-house='Gryffindor'] {
    background-color: red;
  }
  &[data-house='Slytherin'] {
    background-color: green;
  }
  &[data-house='Ravenclaw'] {
    background-color: blue;
  }
  &[data-house='Hufflepuff'] {
    background-color: yellow;
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
