import React from 'react'
import './formstyle.css'
import { useState } from 'react'
import { useEffect } from 'react'
const ContactForm = () => {
    const [formdata, setFormdata] = useState(
        {
            email: "",
            name: "",
            subject: "",
            message: ""
        }
    )
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({ ...formdata, [name]: value })

    }
    const handlesubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(formdata))
        setIsSubmit(true)
    }
    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formdata);
        }
    }, [formErrors])

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = 'Thi is not a  valid email format'
        }
        if (!values.name) {
            errors.name = "name is required!";
        }
        // if (!values.password) {
        //     errors.password = "Password is required";
        // } else if (values.password.length < 5) {
        //     errors.password = "password must be atleast 5 characters long"
        // } else if (values.password.length > 10) {
        //     errors.password = "password cannot exceed more than 10 characters"

        // }
        if (!values.subject) {
            errors.subject = "subject is required!";
        }if (!values.message) {
            errors.message = "Type something!";
        }
        return errors;
    };
    return (
        <>
            <div className='container'> <br /> 
      {Object.keys(formErrors).length === 0 && isSubmit ? (<span className='success'>Message sent succesfully ✅</span>)
                    : null}
                <div className='inputs'>
                    <form onSubmit={handlesubmit}>
                        <label>Name:</label>
                        <input type='text' name='name'
                            placeholder='name'
                            value={formdata.name}
                            onChange={handleChange}
                        />
                        <p className='required'>{formErrors.name}</p>
                        <label>Email:</label>
                        <input type='email' name='email'
                            placeholder='Email'
                            value={formdata.email}
                            onChange={handleChange}
                        />
                        <p className='required'>{formErrors.email}</p>

                        {/* <label>Password:</label>
                        <input type='password' name='password'
                            placeholder='password'
                            value={formdata.password}
                            onChange={handleChange}
                            autoComplete='off'
                        />
                        <p className='required'>{formErrors.password}</p> */}

                        <label>Subject:</label>
                        <input type='text' name='subject'
                            placeholder='subject'
                            value={formdata.subject}
                            onChange={handleChange}
                        />
                        <p className='required'>{formErrors.subject}</p>
                        <label>Message:</label>
                     
                        {/* <textarea rows='6' placeholder='Type Your message here' value={formdata.message}
                            onChange={handleChange} ></textarea> */}
                            <textarea rows='4' placeholder='Type Your message here' 
                            name='message'
                          
                            value={formdata.message}
                            onChange={handleChange}
                        > </textarea>
                        <p className='required'>{formErrors.message}</p> 
                        <button className='btn'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}


export default ContactForm