import React from 'react'

export default function Readme({readme}) {

  return (
    <div className="readme">
      <ul>
        {readme.map(elm => <li key={elm.id}> {elm}</li>)}
      </ul>
    </div>
  )
}
