import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { CharacterCard, Image, Name, Link } from './styles'

const CharacterComponent = ({ id, actors, status, blood_status, birth_date, gender,
  school_house, image, name, race, wands, year_of_birth }) => {
  const isMale = (gender === 'male')

  const houseOrUnknown = school_house.name !== '' ? school_house.name : 'Unknown'

  console.log('potterhello')

  return (
    <CharacterCard data-house={houseOrUnknown}>
      <Link to={`/character/${id}`}>
        <Name>{name}</Name>
        <Image src={image} />
        <h3>Actor: {actors[0]?.name}</h3>
        {
          isMale
            ? <p>{status === 'alive' ? 'Está vivo 🧙‍♂️' : 'Está muerto 💀'}</p>
            : <p>{status === 'alive' ? 'Está viva 🧙‍♀️' : 'Está muerta 💀'}</p>
        }
      </Link>
    </CharacterCard>
  )
}

CharacterComponent.propTypes = {
  id: PropTypes.number.isRequired,
  actors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      birth_date: PropTypes.string
    })
  ),
  status: PropTypes.string.isRequired,
  blood_status: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }),
  birth_date: PropTypes.string,
  year_of_birth: PropTypes.number,
  gender: PropTypes.string,
  school_house: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    school: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      organization: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
      })
    })
  }),
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  jobs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    organization: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  })),
  medias: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    media_type: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  })),
  race: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }),
  wand: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      wood: PropTypes.string,
      core: PropTypes.string,
      length: PropTypes.number,
      active_historic: PropTypes.boolean
    })
  )
}

export const Character = memo(CharacterComponent, (prevProps, nextProps) => {
  return prevProps.name === nextProps.name
})
