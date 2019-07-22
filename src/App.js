import React, { Fragment } from 'react'
import { ListOfCharacters } from './components/ListOfCharacters'
import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyles'

export const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Logo />
      <ListOfCharacters />
    </Fragment>
  )
}
