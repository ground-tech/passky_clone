import React from 'react'
import Sync from '../components/Sync'
import Desktop from '../components/Desktop'
import Browser from '../components/Browser'
import Mobile from '../components/Mobile'
import Web from '../components/Web'

const About = () => {
  return (
    <div>
        <Sync />
        <Desktop />
        <Browser />
        <Mobile />
        <Web />
    </div>
  )
}

export default About