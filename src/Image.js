import React from 'react'

const Image = (props) => {
  return (
    <>
    <h3>images</h3>
        <img src={props.src} height={400} width={500} />
    </>
  )
}

export default Image