import React from 'react'
import Navigation from '../Header/Navigation'
import MainHeader from '../Header/MainHeader'

type Props = {}

const Header = (props: Props) => {
  return (
    <>
      <MainHeader/>
      <Navigation/>
    </>
  )
}

export default Header