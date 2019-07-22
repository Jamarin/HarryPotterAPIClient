import React, { Fragment } from 'react'

export const TextFilter = ({ descriptiveName, name, onChange, value }) => {
  return (
    <Fragment>
      {descriptiveName ? <label htmlFor={name}>{descriptiveName}</label> : ''}
      <input type='text' name={name} id={name} onChange={onChange} value={value} />
    </Fragment>
  )
}
