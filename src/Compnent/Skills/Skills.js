import React from 'react'
import { skillsImg } from '../assets'
import "./Skills.css"
const Skills = () => {
  return (
    <div className="test-height">
    <div className='SkillsComponent' id='Skills'>
      {skillsImg.map((element)=>{
        return (
          <img
          data-aos="zoom-in-up"
          className="skillsImg"
      
          src= {element}
          alt="First slide"
        />
        )
      })}

   </div>
  </div>
  )
}

export default Skills