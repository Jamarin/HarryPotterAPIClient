import React, { Fragment } from 'react'

export const TextFilter = ({ descriptiveName, name, onChange, value }) => {
  return (
    <Fragment>
      {descriptiveName ? <label htmlFor={name}>{descriptiveName} (introduce al menos 3 letras)</label> : ''}
      <input type='text' name={name} id={name} onChange={onChange} value={value} />
    </Fragment>
  )
}
