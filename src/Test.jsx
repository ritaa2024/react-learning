import React from 'react'

export default function Test({name,namer="doo"}) {

  return (
    <div>
        <h2>{name?name:namer}</h2>
    </div>
  )
}
