import React from 'react'
import {Link} from 'react-router-dom'
const Signup = () => {
  return (
    <div className="signup d-flex align-items-center justify-content-center bg-primary vh-100">
            <div className='p-5 form_container rounded bg-white'>
                <form >
                    <h3 className='text-center'>Sign Up</h3>
                    <div className='mb-2 '>
                        <label htmlFor="fname">First Name</label>
                        <input type="text" placeholder="Enter First name" className='form-control' required />
                    </div>
                    <div className='mb-2 '>
                        <label htmlFor="lname">Last Name</label>
                        <input type="text" placeholder="Enter last name" className='form-control' required />
                    </div>
                    <div className='mb-2 '>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter Email" className='form-control' required />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter Password" className='form-control' required />
                    </div>
                    
                  
                    <div className='d-grid'>
                        <button className="btn btn-primary">Sign Up</button>
                    </div>
                    <p className='text-end mt-2'>
                       Already Registered? <Link to="/" className='ms-2'>Sign In</Link>
                    </p>
                </form>
            </div>
        </div>
  )
}

export default Signup
