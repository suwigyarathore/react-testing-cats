import React from 'react'
import Card from '../card/Card'
import "./Cards.css"

function Cards({cats}) {
  return (
    <div className='pet-cards-container'>
        {cats.map(cat => <Card key={cat.id}{...cat}/>)}
    </div>
  )
}

export default Cards