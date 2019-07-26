import React, { useState, useEffect, Fragment } from 'react'
import { Character } from '../Character'
import { useFetch } from '../../hooks/useFetch'
import { ListOfFilters } from '../ListOfFilters'
import { ListOfCharacterCards } from './styles'
// import data from '../../data.json'

String.prototype.capitalize = function () { // eslint-disable-line no-extend-native
  return this.charAt(0).toUpperCase() + this.slice(1)
}

export const ListOfCharacters = () => {
  /* const [data, loading] = useFetch('http://hp-api.herokuapp.com/api/characters') */
  const [data, loading] = useFetch('http://127.0.0.1:8000/api/character')

  const usefulData = () => {
    let newFilteredData = []
    if (!loading) {
      newFilteredData = data.filter(function (char) {
        const filterByHouse = (char.school_house.name === 'Gryffindor' && house.Gryffindor) ||
        (char.school_house.name === 'Ravenclaw' && house.Ravenclaw) ||
        (char.school_house.name === 'Slytherin' && house.Slytherin) ||
        (char.school_house.name === 'Hufflepuff' && house.Hufflepuff) ||
        (char.school_house.name === '' && house.Unknown)
        const filterByGender = (char.gender === 'male' && gender.male) ||
        (char.gender === 'female' && gender.female)
        const filterByStatus = (char.status === 'alive' && status.alive) ||
        (char.status === 'dead' && status.dead)
        const filterByTextName = textName !== '' ? char.name.toLowerCase().includes(textName.toLowerCase()) : true
        return filterByHouse && filterByGender && filterByStatus && filterByTextName
      })
    }
    return newFilteredData
    // return data
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
  const [textName, setTextName] = useState('')
  const [ownData, setOwnData] = useState([])

  const handleHouseChange = e => {
    const localHouse = house
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

  const handleTextNameChange = e => {
    const localTextName = e.target.value
    setTextName(localTextName)
    setOwnData(usefulData())
  }

  useEffect(() => {
    setOwnData(usefulData())
  }, [data])

  return (loading) ? '<h2>No hay datos...</h2>'
    : (
      <Fragment>
        <ListOfFilters handleGenderChange={handleGenderChange} handleHouseChange={handleHouseChange} handleStatusChange={handleStatusChange} handleTextNameChange={handleTextNameChange} house={house} gender={gender} status={status} textName={textName} />
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
