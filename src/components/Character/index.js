import React from 'react'
import PropTypes from 'prop-types'
import { CharacterCard, Image, Name } from './styles'

export const Character = ({ id, actor, alive, ancestry, dateOfBirth, eyeColour, gender,
  hairColour, hogwartsStaff, hogwartsStudent, house, image, name, patronus, species, wand,
  yearOfBirth }) => {
  const isMale = (gender === 'male')

  const images = require.context('../../assets', true)
  const characterImagePath = images(`./${image}`)

  return (
    <CharacterCard data-house={house}>
      <Name>{name}</Name>
      <Image src={characterImagePath} />
      <h3>Actor: {actor}</h3>
      {
        isMale
          ? <p>{alive ? 'Está vivo 🧙‍♂️' : 'Está muerto 💀'}</p>
          : <p>{alive ? 'Está viva 🧙‍♀️' : 'Está muerta 💀'}</p>
      }
    </CharacterCard>
  )
}

Character.propTypes = {
  id: PropTypes.number.isRequired,
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
}
