import React from 'react'

export default function Table() {
const skillsTable = [["Main Languages",	"Javascript, HTML, CSS"],
["Frameworks and Libraries",	"React JS, React Router, Styled Components, Material UI"],
["Cloud",	"Firebase, AWS"],
["Methodologies and Patterns",	"BEM, React Compound Components"],
["Version Control",	"Git, Github"],
["OS",	"Mac, Windows"],
["IDE",	"Visual Studio Code"],
["Familiar with", 	"Agile, Scrum, React Native, SASS"]]
  return (
    <div className="table">
      <table>
        <tbody >
        {skillsTable.map((elm) => (
          <tr >
            <td>{elm[0]}</td>
            <td>{elm[1]}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}


