import React, { Fragment } from 'react'
import data from '../data.json'

export const CharacterDetails = ({ id }) => {
  const character = data[id]

  const images = require.context('../assets', true)
  const characterImagePath = images(`./${character.image}`)

  const isMale = (character.gender === 'male')

  return (
    <Fragment>
      <h1>{character.name}</h1>
      <img src={characterImagePath} />
      <p>Actor: {character.actor}</p>
      <p>Estado: {
        isMale
          ? <span>{character.alive ? 'Está vivo 🧙‍♂️' : 'Está muerto 💀'}</span>
          : <span>{character.alive ? 'Está viva 🧙‍♀️' : 'Está muerta 💀'}</span>
      }
      </p>
      <p>Ancestría: {character.ancestry}</p>
      <p>Fecha de nacimiento: {character.dateOfBirth}</p>
    </Fragment>
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
