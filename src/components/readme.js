import React from 'react'

export default function Readme({readme}) {

  return (
    <div className="readme">
      <ul>
        {readme.map(elm => <li>{elm}</li>)}
      </ul>
    </div>
  )
}
