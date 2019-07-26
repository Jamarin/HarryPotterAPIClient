import React from 'react'
import PropTypes from 'prop-types'
import { CharacterCard, Image, Name, Link } from './styles'

export const Character = ({ id, actors, status, blood_status, birth_date, gender,
  school_house, image, name, race, wands, year_of_birth }) => {
  const isMale = (gender === 'male')

  const houseOrUnknown = school_house.name !== '' ? school_house.name : 'Unknown'

  return (
    <CharacterCard data-house={houseOrUnknown}>
      <Link to={`/character/${id}`}>
        <Name>{name}</Name>
        <Image src={image} />
        <h3>Actor: {actors[0].name}</h3>
        {
          isMale
            ? <p>{status === 'alive' ? 'Está vivo 🧙‍♂️' : 'Está muerto 💀'}</p>
            : <p>{status === 'alive' ? 'Está viva 🧙‍♀️' : 'Está muerta 💀'}</p>
        }
      </Link>
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
