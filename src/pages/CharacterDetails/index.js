import React from 'react'
import moment from 'moment'
import data from '../../data.json'
import { Button, Image, Layout, LayoutLeft, LayoutRight, List, Title } from './styles'
import { CharacterData } from '../../components/CharacterData'

export const CharacterDetails = ({ id }) => {
  const character = data[id]

  const images = require.context('../../assets', true)
  const characterImagePath = images(`./${character.image}`)

  const houseOrUnknown = character.house !== '' ? character.house : 'Unknown'

  const isMale = (character.gender === 'male')

  const translateAncestry = ancestry => {
    if (ancestry === 'half-blood') return 'Sangre mestiza'
    if (ancestry === 'pure-blood') return 'Sangre limpia'
    if (ancestry === 'squib') return 'Squib'
    if (ancestry === 'muggleborn') return 'Descendiente de muggle'
    return '-'
  }

  const formatDate = date => {
    if (date !== '') return moment(character.dateOfBirth, 'DD-MM-YYYY').format('DD-MM-YYYY')
    else return '-'
  }

  const translateColor = (color, reason) => {
    switch (color) {
      case 'grey': return reason === 'eye' ? 'Grises' : 'Gris'
      case 'blue': return reason === 'eye' ? 'Azules' : 'Azul'
      case 'brown': return reason === 'eye' ? 'Marrones' : 'Castaño'
      case 'black': return reason === 'eye' ? 'Negros' : 'Negro'
      case 'green': return reason === 'eye' ? 'Verdes' : 'Verde'
      case 'red': return reason === 'eye' ? 'Rojos' : 'Pelirrojo'
      case 'yellow': return reason === 'eye' ? 'Amarillos' : 'Amarillo'
      case 'blonde': return 'Rubio'
      case 'bald': return 'Calvo'
      default: return '-'
    }
  }

  return (
    <Layout>
      <Title>{character.name}</Title>
      <LayoutLeft>
        <Image src={characterImagePath} />
      </LayoutLeft>
      <LayoutRight>
        <List>
          <CharacterData title='Actor'>{character.actor}</CharacterData>
          <CharacterData title='Estado'>{
            isMale
              ? <span>{character.alive ? 'Está vivo 🧙‍♂️' : 'Está muerto 💀'}</span>
              : <span>{character.alive ? 'Está viva 🧙‍♀️' : 'Está muerta 💀'}</span>
          }</CharacterData>
          <CharacterData title='Casa en Hogwarts'>{character.house !== '' ? character.house : '-'}</CharacterData>
          <CharacterData title='Tipo de sangre'>{translateAncestry(character.ancestry)}</CharacterData>
          <CharacterData title='Fecha de nacimiento'>{formatDate(character.dateOfBirth)}</CharacterData>
          <CharacterData title='Color de ojos'>{translateColor(character.eyeColour, 'eye')}</CharacterData>
          <CharacterData title='Color de pelo'>{translateColor(character.hairColour)}</CharacterData>
          <CharacterData title='Género'>{isMale ? 'Masculino' : 'Femenino'}</CharacterData>
          <CharacterData title='Staff de Hogwarts'>{character.hogwartsStaff ? 'Si' : 'No'}</CharacterData>
          <CharacterData title='Estudiante de Hogwarts'>{character.hogwartsStudent ? 'Si' : 'No'}</CharacterData>
          <CharacterData title='Patronus'>{character.patronus}</CharacterData>
        </List>
        <Button to='/' data-house={houseOrUnknown}>Atrás</Button>
      </LayoutRight>
    </Layout>
  )
}

/*
actor: PropTypes.string,
  alive: PropTypes.bool,
  ancestry: PropTypes.string,
  dateOfBirth: PropTypes.string,
  eyeColour: PropTypes.string,
  gender: PropTypes.string,
  hairColour: PropTypes.string,
  hogwartsStaff: PropTypes.bool,
  hogwartsStudent: PropTypes.bool,
  house: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  patronus: PropTypes.string,
  species: PropTypes.string,
  wand: PropTypes.shape({
    wood: PropTypes.string,
    core: PropTypes.string,
    length: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  }),
  yearOfBirth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
*/
