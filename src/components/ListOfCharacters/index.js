import React, { useState, Fragment } from 'react'
import { Character } from '../Character'
// import { useFetch } from '../../hooks/useFetch'
import { ListOfFilters } from '../ListOfFilters'
import { ListOfCharacterCards } from './styles'
import data from '../../data.json'

String.prototype.capitalize = function () { // eslint-disable-line no-extend-native
  return this.charAt(0).toUpperCase() + this.slice(1)
}

export const ListOfCharacters = () => {
  /* const [data, loading] = useFetch('http://hp-api.herokuapp.com/api/characters') */

  const usefulData = () => {
    const newData = data.filter(function (char) {
      const filterByHouse = (char.house === 'Gryffindor' && house.Gryffindor) ||
        (char.house === 'Ravenclaw' && house.Ravenclaw) ||
        (char.house === 'Slytherin' && house.Slytherin) ||
        (char.house === 'Hufflepuff' && house.Hufflepuff) ||
        (char.house === '' && house.Unknown)
      const filterByGender = (char.gender === 'male' && gender.male) ||
        (char.gender === 'female' && gender.female)
      const filterByStatus = (char.alive && status.alive) ||
        (!char.alive && status.dead)
      return filterByHouse && filterByGender && filterByStatus
    })
    return newData
  }

  const [house, setHouse] = useState({
    Gryffindor: true,
    Slytherin: true,
    Ravenclaw: true,
    Hufflepuff: true,
    Unknown: true
  })
  const [gender, setGender] = useState({
    male: true,
    female: true
  })
  const [status, setStatus] = useState({
    alive: true,
    dead: true
  })
  const [ownData, setOwnData] = useState(data)

  const handleHouseChange = e => {
    const localHouse = house
    console.log(house[e.target.value])
    localHouse[e.target.value] = e.target.checked
    setHouse(localHouse)
    setOwnData(usefulData())
  }

  const handleGenderChange = e => {
    const localGender = gender
    localGender[e.target.value] = e.target.checked
    setGender(localGender)
    setOwnData(usefulData())
  }

  const handleStatusChange = e => {
    const localStatus = status
    localStatus[e.target.value] = e.target.checked
    setStatus(localStatus)
    setOwnData(usefulData())
  }

  return (
    <Fragment>
      <ListOfFilters handleGenderChange={handleGenderChange} handleHouseChange={handleHouseChange} handleStatusChange={handleStatusChange} house={house} gender={gender} status={status} />
      <ListOfCharacterCards>
        {
          ownData.map((eachCharacter, idx) => {
            return <Character key={idx} id={idx} {...eachCharacter} />
          })
        }
      </ListOfCharacterCards>
    </Fragment>
  )
}
