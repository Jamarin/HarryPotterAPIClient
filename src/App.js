import React, { Fragment } from 'react'
import { Router } from '@reach/router'
import { Home } from './pages/Home'
import { CharacterDetails } from './pages/CharacterDetails'
import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyles'

export const App = () => {
  return (
    <Fragment>
      <Logo />
      <GlobalStyle />
      <Router>
        <Home path='/' />
        <CharacterDetails path='/character/:id' />
      </Router>
    </Fragment>
  )
}
