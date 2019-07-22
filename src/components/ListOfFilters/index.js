import React from 'react'
import { CheckboxFilter } from '../CheckboxFilter'
import { FilterGroup, FilterForm, List, Title } from './styles'

export const ListOfFilters = ({ handleHouseChange, handleGenderChange, handleStatusChange, house, gender, status }) => {
  return (
    <FilterForm>
      <FilterGroup>
        <Title>Selección de casa</Title>
        <List>
          <CheckboxFilter name='house' id='Gryffindor' onChange={handleHouseChange} checked={house.Gryffindor} image='gryffindor.png' />
          <CheckboxFilter name='house' id='Ravenclaw' onChange={handleHouseChange} checked={house.Ravenclaw} image='ravenclaw.png' />
          <CheckboxFilter name='house' id='Hufflepuff' onChange={handleHouseChange} checked={house.Hufflepuff} image='hufflepuff.png' />
          <CheckboxFilter name='house' id='Slytherin' onChange={handleHouseChange} checked={house.Slytherin} image='slytherin.png' />
          <CheckboxFilter name='house' id='Unknown' onChange={handleHouseChange} checked={house.Unknown} image='unknown.png' />
        </List>
      </FilterGroup>
      <FilterGroup>
        <Title>Selección de género</Title>
        <List>
          <CheckboxFilter name='gender' id='male' onChange={handleGenderChange} checked={gender.male} image='wizard.png' />
          <CheckboxFilter name='gender' id='female' onChange={handleGenderChange} checked={gender.female} image='witch.png' />
        </List>
      </FilterGroup>
      <FilterGroup>
        <Title>Selección de estado</Title>
        <List>
          <CheckboxFilter name='status' id='alive' onChange={handleStatusChange} checked={status.alive} />
          <CheckboxFilter name='status' id='dead' onChange={handleStatusChange} checked={status.dead} />
        </List>
      </FilterGroup>
    </FilterForm>
  )
}
