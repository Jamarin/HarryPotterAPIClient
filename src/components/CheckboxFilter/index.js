import React, { Fragment } from 'react'
import { Checkbox, ItemList, Label, LabelImage } from './styles'

export const CheckboxFilter = ({ id, checked, image, onChange }) => {
  const images = require.context('../../assets/logos', true)
  const houseImagePath = image ? images(`./${image}`) : null

  return (
    <Fragment>
      {image
        ? <ItemList><Checkbox id={id} value={id} type='checkbox' onChange={onChange} checked={checked} /> <LabelImage htmlFor={id}><img src={houseImagePath} /></LabelImage></ItemList>
        : <ItemList><input id={id} value={id} type='checkbox' onChange={onChange} checked={checked} /> <Label htmlFor={id}>{id}</Label></ItemList>
      }
    </Fragment>
  )
}
