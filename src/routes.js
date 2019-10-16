import React from  'react'
import { StatusBar } from 'react-native'
import Navigation from './pages/Navigation'

const Routes = () => {
  return(
    <>
      <StatusBar backgroundColor='transparent' translucent barStyle='light-content' />
      <Navigation />
    </>
    )
}


export default Routes