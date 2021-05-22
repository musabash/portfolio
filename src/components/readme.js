import React from 'react'

export default function Readme({readme}) {
  const style = {fontSize: `${readme.length > 5 ? 0.6 : 1}rem`}
  return (
    <div className="readme"  style={style}>
      <ul>
        {readme.map(elm => <li>{elm}</li>)}
      </ul>
    </div>
  )
}
