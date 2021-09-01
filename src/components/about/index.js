import React from 'react'
import IconCards from '../icon-cards'
import Links from '../links'
import Text from '../about-text'

export default function About() {
  return (
    <div className="about">
      <div className="about_header">
        <h1 className="my_name">Musa <span>Bas</span></h1>
        <Links />
      </div>
      <Text />
      <IconCards />
    </div>
  )
}


