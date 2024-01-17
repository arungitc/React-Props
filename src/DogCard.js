import React from 'react'
import Image from './Image'


const DogCard = (props) => {
  return (
    <>
        <h3>{props.name}</h3>
        <Image src={props.image} />
    </>
  )
}

export default DogCard