import React from 'react'
import './Home.scss'
import Slider from '../../components/slider/Slider'
import FeatureProducts from '../../components/FeatureProducts/FeatureProducts'

function Home() {
  return (
    <div className='home'>
      <Slider />
      <FeatureProducts type='featured' />
      <FeatureProducts type='trending' />
    </div>
  )
}

export default Home
