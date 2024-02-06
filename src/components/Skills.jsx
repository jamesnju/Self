import React from 'react'
import './home.css'
const Skills = () => {
  return (
    <div className='container-fluid mainstack'>
        <div className="row ">
            <h1 className='text-center text-success'>Tech Stack</h1>
            <div className="col-md-3 stack">
            <h2>Languages</h2>
                <p>JAVASCRIPT,REACT FRAMEWORK</p>
                <p>HTML5, CSS, BOOSTRAP, TAILWIND</p>
                {/* <p>CSS</p>
                <p>BOOSTRAP</p>
                <p>TAILWIND</p> */}
                <p>PHP</p>
                {/* <p>REACT FRAMEWORK</p> */}
            </div>
            <div className="col-md-3 stack">
                <h2>DATABASES</h2>
                <p>MYSQL</p>
                <p>MICROSOFT SERVER</p>
                <p></p>
            </div>
           
            <div className="col-md-3 stack">
            <h2>Control version</h2>
                <p>GIT</p>
                <p>GITHUB</p>
            </div>
            <div className="col-md-3 stack">
                <h2>DESIGN TOOLS</h2>
                <p>FIGMA</p>
                <p>ADOPE XD</p>
                <p></p>
            </div>
        </div>
    </div>
)
}

export default Skills