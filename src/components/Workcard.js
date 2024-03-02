import React from 'react'
import './workcardstyle.css'

import { Link } from 'react-router-dom'
const Workcard = (props) => {
  return (
   
    <div className='project-card'>
          <img src={props.imgsrc} alt='image' />
          <h2 className='project-title'>{props.title}</h2>
          <div className='pro-details'>
            <p>{props.text}</p>
            <div className='pro-btns'>
              <Link to={props.view} className='btn'>View</Link>
              <Link to={props.source} className='btn'>source</Link>
            </div>
          </div>
        </div>
  )
}

export default Workcard