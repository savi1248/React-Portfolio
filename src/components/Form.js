import React from 'react'
import './formstyle.css'
const Form = () => {
  return (
    <div className='form'>
       <form>
         <label>Name</label>
         <input type='text' required/>
         <label>Email</label>
         <input type='text' required/>
         <label>Subject</label>
         <input type='text' required/>
         <label>Message</label>
         <input type='text' required/>
         <textarea rows='6' placeholder='Type Your message here'></textarea>
         <button className='btn'>Submit</button>
       </form>
    </div>
  )
}

export default Form