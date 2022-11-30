import React from 'react'
import Card from '../Card/Card'
import './FeatureProducts.scss'
import data from '../data.json'

const FeatureProducts = ({ type }) => {
  return (
    <div className='featuredProducts'>
      <div className='top'>
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sit
          architecto animi blanditiis facere ipsam modi quia fuga veritatis,
          nihil, rem voluptatibus cupiditate cumque. Expedita perspiciatis
          voluptates, placeat animi est ut optio minus amet, recusandae
          quibusdam fugit natus, ab corporis.
        </p>
      </div>
      <div className='bottom'>
        {data && data.map(item => <Card item={item} key={item.id} />)}
      </div>
    </div>
  )
}

export default FeatureProducts
