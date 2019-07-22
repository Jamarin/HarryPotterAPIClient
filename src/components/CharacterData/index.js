import React from 'react'

export const CharacterData = ({ title, children }) => {
  return (
    <li><strong>{title}:</strong> {children}</li>
  )
}
